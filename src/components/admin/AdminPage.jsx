import { useState } from "react";
import { motion } from "motion/react";
import { useAuth } from "../../context/AuthContext";
import MemberProfileEditor from "./MemberProfileEditor";
import MemberManagement from "./MemberManagement";
import EventManagement from "./EventManagement";
import AdminSettings from "./AdminSettings";
import InquiriesManagement from "./InquiriesManagement";

export const AdminPage = () => {
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

  return (
    <div className="relative w-full min-h-screen bg-[#07080a] text-white flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* Background Ambient Accents */}
      <div
        className="fixed inset-0 z-0 pointer-events-none bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url(/back.jpg)" }}
      />
      <div className="fixed inset-0 z-0 pointer-events-none bg-black/80" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col flex-1 gap-6">
        {/* Full Page Top Header Bar */}
        <header className="w-full bg-[#111219]/90 border border-neutral-800 rounded-3xl p-5 shadow-2xl backdrop-blur-xl flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Matrix Admin & Member Portal
                </h1>
              </div>
              <p className="text-xs text-gray-400 font-mono mt-0.5">
                College Restricted Domain:{" "}
                <span className="text-white font-bold">@{collegeDomain}</span>
              </p>
            </div>
          </div>

          {/* Action Header Controls */}
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-xs font-bold text-gray-300 border border-neutral-800 transition flex items-center gap-1.5"
            >
              <span>Back to Website</span>
              
            </a>

            {user ? (
              <div className="flex items-center gap-3 bg-black/50 p-1.5 pl-3 rounded-2xl border border-neutral-800">
                <img
                  src={userMemberData?.avatar || user.photoURL || "/figma/avatar.png"}
                  alt={user.displayName || "User"}
                  className="w-8 h-8 rounded-full object-cover border border-purple-500/50"
                  onError={(e) => {
                    e.target.src = "/figma/avatar.png";
                  }}
                />
                <div className="hidden sm:block text-left">
                  <div className="text-xs font-bold text-white leading-none">
                    {userMemberData?.name || user.displayName || "Member"}
                  </div>
                  <div className="text-[10px] font-mono text-white">
                    {userMemberData?.id || user.email}
                  </div>
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
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-xs font-bold text-white shadow-xl shadow-purple-950/40 transition cursor-pointer disabled:opacity-50"
              >
                {loggingIn ? "Signing In..." : "Google Sign-In"}
              </button>
            )}
          </div>
        </header>

        {/* Auth Error Notice */}
        {authError && (
          <div className="bg-red-950/90 border border-red-800 rounded-2xl p-4 text-xs text-red-200 font-semibold flex items-center justify-between shadow-xl">
            <span>⚠️ {authError}</span>
            <span className="text-[10px] text-red-400 font-mono uppercase tracking-wider">
              Domain Restriction Active
            </span>
          </div>
        )}

        {/* Main Content Area */}
        {!user ? (
          /* Unauthenticated Full Page Welcome */
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 bg-[#111219]/80 border border-neutral-800 rounded-3xl p-8 sm:p-16 text-center flex flex-col items-center justify-center max-w-2xl mx-auto my-auto shadow-2xl backdrop-blur-xl"
          >
            <div className="w-20 h-20 rounded-3xl bg-purple-900/30 border border-purple-500/30 flex items-center justify-center text-purple-400 text-3xl font-bold mb-6 shadow-xl">
              🔑
            </div>
            <h2 className="text-3xl font-black text-white mb-3">College Admin & Member Access</h2>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-8 max-w-md">
              Sign in with your official college Google email address (
              <strong className="text-purple-300">@{collegeDomain}</strong>) to manage your member profile, inspect team directories, and control event listings.
            </p>

            <button
              onClick={handleGoogleLogin}
              disabled={loggingIn}
              className="px-8 py-3.5 rounded-2xl bg-white text-black hover:bg-gray-200 font-bold text-sm shadow-2xl flex items-center gap-3 transition cursor-pointer hover:scale-105"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
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
              Sign in with Google Account
            </button>
          </motion.div>
        ) : (
          /* Authenticated Dashboard View */
          <div className="flex-1 bg-[#111219]/80 border border-neutral-800 rounded-3xl p-6 flex flex-col gap-6 shadow-2xl backdrop-blur-xl">
            {/* Dashboard Tabs Bar */}
            <div className="flex items-center gap-2 p-1.5 bg-black/60 rounded-2xl border border-neutral-800 overflow-x-auto">
              <button
                onClick={() => setActiveTab("profile")}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap ${
                  activeTab === "profile"
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-950/50"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                My Profile Panel
              </button>

              {(userRole === "team_member" || userRole === "admin") && (
                <button
                  onClick={() => setActiveTab("members")}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap ${
                    activeTab === "members"
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-950/50"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Member Directory & Management
                </button>
              )}

              {(userRole === "team_member" || userRole === "admin") && (
                <button
                  onClick={() => setActiveTab("events")}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap ${
                    activeTab === "events"
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-950/50"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Event Management
                </button>
              )}

              {userRole === "admin" && (
                <button
                  onClick={() => setActiveTab("inquiries")}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap ${
                    activeTab === "inquiries"
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-950/50"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Contact Inquiries
                </button>
              )}

              {userRole === "admin" && (
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap ${
                    activeTab === "settings"
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-950/50"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  System Settings & Sync
                </button>
              )}
            </div>

            {/* Tab View Component */}
            <div className="flex-1">
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
      </div>
    </div>
  );
};

export default AdminPage;
