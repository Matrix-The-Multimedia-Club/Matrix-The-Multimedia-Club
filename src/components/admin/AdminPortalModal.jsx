import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useAuth } from "../../context/AuthContext";
import MemberProfileEditor from "./MemberProfileEditor";
import MemberManagement from "./MemberManagement";
import EventManagement from "./EventManagement";
import AdminSettings from "./AdminSettings";
import InquiriesManagement from "./InquiriesManagement";

export const AdminPortalModal = ({ isOpen, onClose }) => {
  const {
    user,
    userRole,
    userMemberData,
    authError,
    collegeDomain,
    enforceDomainRestriction,
    loginWithGoogle,
    logout
  } = useAuth();

  const [activeTab, setActiveTab] = useState("profile");
  const [loggingIn, setLoggingIn] = useState(false);

  const handleGoogleLogin = async () => {
    setLoggingIn(true);
    try {
      await loginWithGoogle();
      setActiveTab("profile");
    } catch (err) {
      console.error("Login failed:", err);
    } finally {
      setLoggingIn(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-5xl my-auto bg-[#0d0e12] border border-white/10 rounded-3xl shadow-2xl overflow-hidden text-white flex flex-col max-h-[90vh]"
        >
          {/* Top Modal Navigation Bar */}
          <div className="px-6 py-4 border-b border-white/10 bg-[#12131a]/80 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-400 font-black">
                M
              </div>
              <div>
                <h2 className="font-bold text-lg text-white leading-none">Matrix Admin & Member Portal</h2>
                <p className="text-[11px] text-gray-400 font-mono mt-0.5">
                  Role: <span className="text-purple-300 font-bold uppercase">{userRole}</span>
                  {enforceDomainRestriction && (
                    <span className="ml-2 text-emerald-400">(@{collegeDomain})</span>
                  )}
                </p>
              </div>
            </div>

            {/* Auth Action & Close Button */}
            <div className="flex items-center gap-3">
              {user ? (
                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex items-center gap-2">
                    <img
                      src={userMemberData?.avatar || user.photoURL || "/figma/avatar.png"}
                      alt={user.displayName || "User"}
                      className="w-7 h-7 rounded-full object-cover border border-purple-500/50"
                      onError={(e) => {
                        e.target.src = "/figma/avatar.png";
                      }}
                    />
                    <span className="text-xs font-semibold text-gray-200">
                      {userMemberData?.name || user.displayName || user.email}
                    </span>
                  </div>
                  <button
                    onClick={logout}
                    className="px-3 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-bold text-gray-300 border border-neutral-700 transition"
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleGoogleLogin}
                  disabled={loggingIn}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-xs font-bold text-white shadow-lg shadow-purple-900/40 transition cursor-pointer disabled:opacity-50"
                >
                  {loggingIn ? "Signing In..." : "Google Sign-In"}
                </button>
              )}

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 text-gray-400 hover:text-white flex items-center justify-center text-sm font-bold transition cursor-pointer"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Error Banner */}
          {authError && (
            <div className="bg-red-950/90 border-b border-red-800 p-3 text-xs text-red-200 font-semibold px-6 flex items-center justify-between">
              <span>⚠️ {authError}</span>
              <span className="text-[10px] text-red-400 font-mono">Domain Restriction Active</span>
            </div>
          )}

          {/* Logged Out View */}
          {!user ? (
            <div className="p-8 sm:p-12 text-center flex flex-col items-center justify-center max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-purple-900/30 border border-purple-500/30 flex items-center justify-center text-purple-400 text-2xl font-bold mb-4">
                🔑
              </div>
              <h3 className="text-2xl font-black text-white mb-2">College Member Access</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Sign in with your official college Google account (
                <strong className="text-purple-300">@{collegeDomain}</strong>) to access member profile controls, team dashboard, and administrative tools.
              </p>

              <button
                onClick={handleGoogleLogin}
                disabled={loggingIn}
                className="px-6 py-3 rounded-2xl bg-white text-black hover:bg-gray-200 font-bold text-sm shadow-xl flex items-center gap-3 transition cursor-pointer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                Sign in with Google
              </button>
            </div>
          ) : (
            /* Logged In View with Tabs */
            <div className="flex flex-col flex-1 overflow-hidden">
              {/* Tab Selector */}
              <div className="px-6 py-2 bg-[#12131a] border-b border-white/10 flex items-center gap-2 overflow-x-auto">
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                    activeTab === "profile"
                      ? "bg-purple-600 text-white shadow-md shadow-purple-900/40"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  My Profile Panel
                </button>

                {(userRole === "team_member" || userRole === "admin") && (
                  <button
                    onClick={() => setActiveTab("members")}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                      activeTab === "members"
                        ? "bg-purple-600 text-white shadow-md shadow-purple-900/40"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Member Directory & Management
                  </button>
                )}

                {(userRole === "team_member" || userRole === "admin") && (
                  <button
                    onClick={() => setActiveTab("events")}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                      activeTab === "events"
                        ? "bg-purple-600 text-white shadow-md shadow-purple-900/40"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Event Management
                  </button>
                )}

                {userRole === "admin" && (
                  <button
                    onClick={() => setActiveTab("inquiries")}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                      activeTab === "inquiries"
                        ? "bg-purple-600 text-white shadow-md shadow-purple-900/40"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Contact Inquiries
                  </button>
                )}

                {userRole === "admin" && (
                  <button
                    onClick={() => setActiveTab("settings")}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                      activeTab === "settings"
                        ? "bg-purple-600 text-white shadow-md shadow-purple-900/40"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    System Settings & Sync
                  </button>
                )}
              </div>

              {/* Tab Body */}
              <div className="p-6 overflow-y-auto flex-1">
                {activeTab === "profile" && <MemberProfileEditor isEditingSelf={true} />}
                {activeTab === "members" && (userRole === "team_member" || userRole === "admin") && (
                  <MemberManagement />
                )}
                {activeTab === "events" && (userRole === "team_member" || userRole === "admin") && (
                  <EventManagement />
                )}
                {activeTab === "inquiries" && userRole === "admin" && <InquiriesManagement />}
                {activeTab === "settings" && userRole === "admin" && <AdminSettings />}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AdminPortalModal;
