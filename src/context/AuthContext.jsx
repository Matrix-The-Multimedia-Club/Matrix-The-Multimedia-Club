import { createContext, useContext, useEffect, useState } from "react";
import {
  auth,
  db,
  googleProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  ref,
  get,
  set,
  update,
  onValue,
  isFirebaseDemoConfig
} from "../firebase";

const AuthContext = createContext();

const DEFAULT_COLLEGE_DOMAIN = import.meta.env.VITE_COLLEGE_EMAIL_DOMAIN || "vitbhopal.ac.in";
const DEFAULT_GOOGLE_FORM_URL = import.meta.env.VITE_GOOGLE_FORM_URL || "";
const IMAGEKIT_BASE = "https://ik.imagekit.io/Rakshitrajvit/Members";

export const resolveAvatarUrl = (avatar, id) => {
  if (!avatar) {
    return id ? `${IMAGEKIT_BASE}/${id}.jpg` : "/figma/avatar.png";
  }
  if (avatar.startsWith("http")) return avatar;
  if (avatar.startsWith("/Members/")) {
    const file = avatar.replace("/Members/", "");
    return `${IMAGEKIT_BASE}/${file}`;
  }
  return avatar;
};

export const extractRegNo = (str) => {
  if (!str) return "";
  const match = str.match(/\b\d{2}[A-Z]{2,4}\d{4,5}\b/i);
  return match ? match[0].toUpperCase() : "";
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState("guest");
  const [userMemberData, setUserMemberData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);
  const [collegeDomain, setCollegeDomain] = useState(DEFAULT_COLLEGE_DOMAIN);
  const [enforceDomainRestriction, setEnforceDomainRestriction] = useState(true);
  const [registrationOpen, setRegistrationOpen] = useState(() => {
    const saved = localStorage.getItem("matrix_registration_open");
    return saved === null ? true : saved === "true";
  });
  const [googleFormUrl, setGoogleFormUrl] = useState(() =>
    localStorage.getItem("matrix_google_form_url") || DEFAULT_GOOGLE_FORM_URL
  );
  const [isDemoMode, setIsDemoMode] = useState(isFirebaseDemoConfig());

  useEffect(() => {
    if (isDemoMode) return;
    try {
      const settingsRef = ref(db, "settings");
      const unsubscribe = onValue(settingsRef, (snapshot) => {
        if (snapshot.exists()) {
          const val = snapshot.val();
          if (val.collegeDomain) setCollegeDomain(val.collegeDomain);
          if (val.enforceDomainRestriction !== undefined) {
            setEnforceDomainRestriction(val.enforceDomainRestriction);
          }
          if (val.registrationOpen !== undefined) {
            setRegistrationOpen(val.registrationOpen);
            localStorage.setItem("matrix_registration_open", String(val.registrationOpen));
          }
          if (val.googleFormUrl !== undefined) {
            setGoogleFormUrl(val.googleFormUrl);
            localStorage.setItem("matrix_google_form_url", val.googleFormUrl);
          }
        }
      });
      return () => unsubscribe();
    } catch (e) {
      console.warn("Could not listen to settings in Firebase DB:", e);
    }
  }, [isDemoMode]);

  const validateCollegeEmail = (email) => {
    if (!email) return false;
    if (!enforceDomainRestriction) return true;
    const lowerEmail = email.toLowerCase().trim();
    const targetDomain = collegeDomain.toLowerCase().trim();
    return lowerEmail.endsWith(`@${targetDomain}`) || lowerEmail.endsWith(".ac.in") || lowerEmail.endsWith(".edu");
  };

  const findMemberFromList = (membersList, email, displayName, uid) => {
    const regId = extractRegNo(email) || extractRegNo(displayName) || (email ? email.split("@")[0].toUpperCase() : "");
    const cleanName = (displayName || "").replace(/\b\d{2}[A-Z]{2,4}\d{4,5}\b/gi, "").trim();

    let found = (membersList || []).find((m) => {
      if (!m) return false;
      const mId = (m.id || "").toUpperCase();
      const mEmail = (m.email || "").toLowerCase();
      const mName = (m.name || "").toLowerCase();

      return (
        (regId && mId === regId) ||
        (email && mEmail === email.toLowerCase()) ||
        (cleanName && mName && mName.includes(cleanName.toLowerCase()))
      );
    });

    if (found) {
      return {
        ...found,
        avatar: resolveAvatarUrl(found.avatar, found.id || regId),
        uid: uid || found.uid,
        appRole: found.appRole || "admin"
      };
    }

    const finalRegId = regId || "25BAI11234";
    return {
      id: finalRegId,
      uid: uid || "uid_" + Math.random().toString(36).substr(2, 7),
      name: displayName || "Rakshit Raj",
      email: email || `${finalRegId.toLowerCase()}@vitbhopal.ac.in`,
      role: "technical",
      roleTitle: "ADMIN",
      appRole: "admin",
      avatar: `${IMAGEKIT_BASE}/${finalRegId}.jpg`,
      bio: "Matrix Club Administrator",
      department: "Technical",
      socials: { linkedin: "", github: "", instagram: "" }
    };
  };

  const syncUserRoleAndMember = async (currentUser) => {
    if (!currentUser) {
      setUserRole("guest");
      setUserMemberData(null);
      return;
    }

    const email = currentUser.email || "";
    const displayName = currentUser.displayName || "";
    const uid = currentUser.uid;

    if (isDemoMode) {
      const savedMockRole = localStorage.getItem(`mock_role_${email}`) || "admin";
      setUserRole(savedMockRole);

      const savedMockMember = localStorage.getItem(`mock_member_${email}`);
      if (savedMockMember) {
        const parsed = JSON.parse(savedMockMember);
        setUserMemberData({ ...parsed, avatar: resolveAvatarUrl(parsed.avatar, parsed.id) });
      } else {
        const member = findMemberFromList([], email, displayName, uid);
        setUserMemberData(member);
      }
      return;
    }

    try {
      const roleRef = ref(db, `roles/${uid}`);
      const roleSnap = await get(roleRef);
      let role = roleSnap.exists() ? roleSnap.val() : "admin";

      let allMembers = [];
      const membersRef = ref(db, "members");
      const membersSnap = await get(membersRef);

      if (membersSnap.exists()) {
        const val = membersSnap.val();
        if (Array.isArray(val)) {
          allMembers = val.filter(Boolean);
        } else if (typeof val === "object") {
          allMembers = Object.keys(val).map((k) => ({ ...val[k], key: k }));
        }
      } else {
        const rootSnap = await get(ref(db));
        if (rootSnap.exists()) {
          const rootVal = rootSnap.val();
          if (Array.isArray(rootVal)) {
            allMembers = rootVal.filter(Boolean);
          } else if (typeof rootVal === "object") {
            allMembers = Object.keys(rootVal)
              .filter((k) => k !== "events" && k !== "roles" && k !== "settings")
              .map((k) => ({ ...rootVal[k], key: k }));
          }
        }
      }

      const matchedMember = findMemberFromList(allMembers, email, displayName, uid);
      matchedMember.appRole = role;

      setUserRole(role);
      setUserMemberData(matchedMember);

      const regKey = matchedMember.id || extractRegNo(email) || extractRegNo(displayName) || uid;
      await set(ref(db, `members/${regKey}`), matchedMember);
      await set(ref(db, `roles/${uid}`), role);
    } catch (err) {
      console.error("Error syncing user role from Firebase:", err);
      setUserRole("admin");
      const member = findMemberFromList([], email, displayName, uid);
      setUserMemberData(member);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setAuthError(null);
      if (currentUser) {
        if (enforceDomainRestriction && !validateCollegeEmail(currentUser.email)) {
          setAuthError(`Access Restricted: ${currentUser.email} is not a valid college email (@${collegeDomain}).`);
          await signOut(auth);
          setUser(null);
          setUserRole("guest");
          setUserMemberData(null);
          setLoading(false);
          return;
        }
        setUser(currentUser);
        await syncUserRoleAndMember(currentUser);
      } else {
        setUser(null);
        setUserRole("guest");
        setUserMemberData(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [collegeDomain, enforceDomainRestriction, isDemoMode]);

  const loginWithGoogle = async () => {
    setAuthError(null);
    try {
      if (isDemoMode) {
        const demoEmail = prompt(
          `Demo Google Sign-In\nEnter College Email (@${collegeDomain}):`,
          `rakshitraj.25bai11234@${collegeDomain}`
        );
        if (!demoEmail) return;

        if (enforceDomainRestriction && !validateCollegeEmail(demoEmail)) {
          const err = `Access Restricted: ${demoEmail} does not match required college domain (@${collegeDomain}).`;
          setAuthError(err);
          alert(err);
          throw new Error(err);
        }

        const mockUser = {
          uid: "demo_uid_rakshit_" + Math.random().toString(36).substring(2, 7),
          email: demoEmail,
          displayName: "RAKSHIT RAJ 25BAI11234",
          photoURL: `${IMAGEKIT_BASE}/25BAI11234.jpg`
        };
        setUser(mockUser);
        await syncUserRoleAndMember(mockUser);
        return mockUser;
      }

      const result = await signInWithPopup(auth, googleProvider);
      const loggedUser = result.user;

      if (enforceDomainRestriction && !validateCollegeEmail(loggedUser.email)) {
        await signOut(auth);
        setUser(null);
        setUserRole("guest");
        const errMsg = `Access Restricted: ${loggedUser.email} is not an authorized college email address (@${collegeDomain}).`;
        setAuthError(errMsg);
        throw new Error(errMsg);
      }

      setUser(loggedUser);
      await syncUserRoleAndMember(loggedUser);
      return loggedUser;
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      setAuthError(error.message);
      throw error;
    }
  };

  const logout = async () => {
    try {
      if (!isDemoMode) {
        await signOut(auth);
      }
      setUser(null);
      setUserRole("guest");
      setUserMemberData(null);
      setAuthError(null);
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  const updateDomainSettings = async (newDomain, enforce, registrationEnabled = registrationOpen, formUrl = googleFormUrl) => {
    setCollegeDomain(newDomain);
    setEnforceDomainRestriction(enforce);
    setRegistrationOpen(registrationEnabled);
    setGoogleFormUrl(formUrl.trim());
    localStorage.setItem("matrix_registration_open", String(registrationEnabled));
    localStorage.setItem("matrix_google_form_url", formUrl.trim());
    if (!isDemoMode) {
      await update(ref(db, "settings"), {
        collegeDomain: newDomain,
        enforceDomainRestriction: enforce,
        registrationOpen: registrationEnabled,
        googleFormUrl: formUrl.trim()
      });
    }
  };

  const updateUserAppRole = async (targetUidOrKey, targetEmail, newRole) => {
    if (isDemoMode) {
      localStorage.setItem(`mock_role_${targetEmail}`, newRole);
      if (user && user.email === targetEmail) setUserRole(newRole);
      return;
    }
    if (targetUidOrKey) {
      await set(ref(db, `roles/${targetUidOrKey}`), newRole);
    }
    const memberRef = ref(db, `members/${targetUidOrKey}`);
    const snap = await get(memberRef);
    if (snap.exists()) {
      await update(memberRef, { appRole: newRole });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userRole,
        userMemberData,
        setUserMemberData,
        loading,
        authError,
        collegeDomain,
        enforceDomainRestriction,
        registrationOpen,
        googleFormUrl,
        isDemoMode,
        setIsDemoMode,
        loginWithGoogle,
        logout,
        updateDomainSettings,
        updateUserAppRole,
        syncUserRoleAndMember
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
