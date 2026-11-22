import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { db, ref, set, isFirebaseDemoConfig } from "../../firebase";

const initialArchiveEvents = [
  {
    id: "evt_1",
    image: "/event-media-morphosis.png",
    title: "Media Morphosis 2025",
    date: "July 27, 2025",
    category: "archive",
    attendees: "200 attendees",
    description:
      "Matrix Club in partnership with Unstop hosted Media Morphosis at VIT Bhopal. The event explored how Data Science and Social Media Analytics shape branding and business strategies."
  },
  {
    id: "evt_2",
    image: "/event-airm.png",
    title: "AIRM 2025",
    date: "December 30, 2025",
    category: "archive",
    attendees: "150 attendees",
    description:
      "Matrix Club, the Multimedia Club at VIT Bhopal, hosted AIRM 2025—an online event for college students focused on Artificial Intelligence, Robotics, and Multimedia."
  },
  {
    id: "evt_3",
    image: "/event-matrixmatch.png",
    title: "MatrixMatch 2026",
    date: "February 20, 2026",
    category: "archive",
    attendees: "150 attendees",
    description:
      "Matrix Club hosted MatchMatrix – Tech Compatibility & Collaboration Test, an interactive technical event that combined technology, logical thinking, and collaborative assessment."
  }
];

export const AdminSettings = () => {
  const {
    userRole,
    collegeDomain,
    enforceDomainRestriction,
    registrationOpen,
    googleFormUrl,
    updateDomainSettings
  } = useAuth();

  const [domainInput, setDomainInput] = useState(collegeDomain);
  const [enforceInput, setEnforceInput] = useState(enforceDomainRestriction);
  const [registrationInput, setRegistrationInput] = useState(registrationOpen);
  const [googleFormInput, setGoogleFormInput] = useState(googleFormUrl);
  const [seeding, setSeeding] = useState(false);
  const [statusMsg, setStatusMsg] = useState(null);

  useEffect(() => setDomainInput(collegeDomain), [collegeDomain]);
  useEffect(() => setEnforceInput(enforceDomainRestriction), [enforceDomainRestriction]);
  useEffect(() => setRegistrationInput(registrationOpen), [registrationOpen]);
  useEffect(() => setGoogleFormInput(googleFormUrl), [googleFormUrl]);

  const handleRegistrationToggle = async () => {
    const nextValue = !registrationInput;
    setRegistrationInput(nextValue);
    try {
      await updateDomainSettings(domainInput.trim(), enforceInput, nextValue, googleFormInput);
      setStatusMsg({
        type: "success",
        text: `Join Us registration ${nextValue ? "enabled" : "disabled"} successfully!`
      });
    } catch (err) {
      setRegistrationInput(!nextValue);
      setStatusMsg({ type: "error", text: `Could not update registration status: ${err.message}` });
    }
  };

  const handleSaveDomain = async (e) => {
    e.preventDefault();
    try {
      await updateDomainSettings(domainInput.trim(), enforceInput, registrationInput, googleFormInput);
      setStatusMsg({ type: "success", text: "Domain restriction settings updated successfully!" });
    } catch (err) {
      setStatusMsg({ type: "error", text: `Error updating settings: ${err.message}` });
    }
  };

  const handleSeedEvents = async () => {
    if (userRole !== "admin") {
      alert("Only Admins can execute database setup!");
      return;
    }

    setSeeding(true);
    setStatusMsg(null);

    try {
      if (!isFirebaseDemoConfig()) {
        const eventsMap = {};
        initialArchiveEvents.forEach((evt) => {
          eventsMap[evt.id] = {
            ...evt,
            createdAt: new Date().toISOString()
          };
        });
        await set(ref(db, "events"), eventsMap);

        await set(ref(db, "settings"), {
          collegeDomain: domainInput,
          enforceDomainRestriction: enforceInput,
          registrationOpen: registrationInput,
          googleFormUrl: googleFormInput.trim()
        });

        setStatusMsg({
          type: "success",
          text: `Successfully initialized events and settings in Firebase Realtime Database!`
        });
      }
    } catch (err) {
      console.error("Database setup error:", err);
      setStatusMsg({ type: "error", text: `Failed to initialize database: ${err.message}` });
    } finally {
      setSeeding(false);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {statusMsg && (
        <div
          className={`p-4 rounded-xl text-xs font-semibold border ${
            statusMsg.type === "success"
              ? "bg-emerald-950/80 text-emerald-300 border-emerald-800"
              : "bg-red-950/80 text-red-300 border-red-800"
          }`}
        >
          {statusMsg.text}
        </div>
      )}

      <div className="bg-neutral-900/60 p-6 rounded-2xl border border-neutral-800 flex flex-col gap-4">
        <div>
          <h3 className="text-lg font-bold text-white">Google Sign-In Email Restriction</h3>
          <p className="text-xs text-gray-400">
            Restrict authentication exclusively to your college's official Google domain.
          </p>
        </div>

        <form onSubmit={handleSaveDomain} className="space-y-4 text-xs">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="enforceDomain"
              checked={enforceInput}
              onChange={(e) => setEnforceInput(e.target.checked)}
              className="w-4 h-4 accent-purple-600 rounded cursor-pointer"
            />
            <label htmlFor="enforceDomain" className="text-gray-200 font-semibold cursor-pointer">
              Enforce College Email Domain Restriction
            </label>
          </div>

          <div className="flex items-center justify-between gap-4 p-4 rounded-xl bg-black/40 border border-neutral-800">
            <div>
              <div className="text-gray-200 font-semibold">Join Us Registration</div>
              <p className="text-[11px] text-gray-500 mt-1">
                {registrationInput ? "Registration is open and Google Form options are visible." : "Registration is closed and Google Form options are hidden."}
              </p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={registrationInput}
              onClick={handleRegistrationToggle}
              className={`relative w-12 h-7 rounded-full transition shrink-0 ${registrationInput ? "bg-emerald-500" : "bg-neutral-700"}`}
            >
              <span className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow transition ${registrationInput ? "left-6" : "left-1"}`} />
            </button>
          </div>

          <div>
            <label className="block text-gray-300 mb-1 font-semibold">Google Application Form URL</label>
            <input
              type="url"
              value={googleFormInput}
              onChange={(e) => setGoogleFormInput(e.target.value)}
              placeholder="https://docs.google.com/forms/d/e/.../viewform"
              className="w-full px-3 py-2 rounded-xl bg-black/60 border border-neutral-700 text-white text-sm focus:outline-none focus:border-purple-500"
            />
            <p className="text-[11px] text-gray-500 mt-1">
              Paste the public Google Forms viewform link. Registration buttons open this link.
            </p>
          </div>

          <div>
            <label className="block text-gray-300 mb-1 font-semibold">Allowed College Email Domain</label>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 font-mono">@</span>
              <input
                type="text"
                value={domainInput}
                onChange={(e) => setDomainInput(e.target.value)}
                placeholder="vitbhopal.ac.in"
                className="flex-1 px-3 py-2 rounded-xl bg-black/60 border border-neutral-700 text-white font-mono text-sm focus:outline-none focus:border-purple-500"
                required
              />
            </div>
            <p className="text-[11px] text-gray-500 mt-1">
              Users trying to log in with a non-matching email address will be automatically signed out and blocked.
            </p>
          </div>

          <button
            type="submit"
            className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md shadow-purple-900/30 transition cursor-pointer"
          >
            Save Security Settings
          </button>
        </form>
      </div>

      <div className="bg-neutral-900/60 p-6 rounded-2xl border border-neutral-800 flex flex-col gap-4">
        <div>
          <h3 className="text-lg font-bold text-white">Events & System Settings Re-Sync</h3>
          <p className="text-xs text-gray-400">
            Ensure event archives and system settings are synced with Firebase Realtime Database.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-black/40 p-4 rounded-xl border border-neutral-800">
          <div>
            <div className="text-xs font-bold text-gray-200">System Event Config</div>
            <div className="text-[11px] text-gray-400 font-mono">
              Sync default event categories and settings to Firebase
            </div>
          </div>

          <button
            onClick={handleSeedEvents}
            disabled={seeding || userRole !== "admin"}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 font-bold text-white text-xs shadow-lg shadow-emerald-950/40 transition disabled:opacity-50 cursor-pointer"
          >
            {seeding ? "Syncing..." : "Sync Events & Settings"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
