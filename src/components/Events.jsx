import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import EventArchive from "./EventArchive";

const TABS = [
  { id: "upcoming", label: "Upcoming Events" },
  { id: "ongoing", label: "Ongoing Contests" },
  { id: "archive", label: "Event Archive" },
];

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="relative w-full text-white flex flex-col min-h-screen pb-24">
      {/* Fixed background overlay */}
      <div
        className="fixed inset-0 z-0 pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/back.jpg)" }}
      />
      <section className="relative z-10 w-full py-16 px-6 md:px-16 overflow-hidden flex-grow">
        {/* Background Accents */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"  />

        <div className="max-w-6xl mx-auto flex flex-col gap-12 relative z-10">

          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-4 pt-8"
          >
            <span className="text-xs font-bold text-purple-500 uppercase tracking-widest">
              Events & Contests
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none text-white">
              Events
            </h1>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-1 p-1.5 rounded-2xl bg-[#12131a] border border-white/5 w-fit">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-colors duration-200 cursor-pointer select-none ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="events-tab-pill"
                    transition={{ type: "spring", stiffness: 420, damping: 32, mass: 0.8 }}
                    className="absolute inset-0 rounded-xl bg-[#1c1d24] border border-white/10 shadow-lg shadow-black/20"
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="min-h-[400px]"
            >
              {activeTab === "archive" && <EventArchive />}
            </motion.div>
          </AnimatePresence>

        </div>
      </section>
    </div>
  );
};

export default Events;
