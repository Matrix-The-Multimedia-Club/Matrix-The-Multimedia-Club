import { useState } from 'react';
import { motion } from 'motion/react';

// Tab configuration matching user requirements
const NAV_ITEMS = [
  {
    id: 'home',
    label: 'Home',
    icon: (isActive) => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill={isActive ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill={isActive ? "currentColor" : "none"} />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: 'about',
    label: 'About Us',
    icon: (isActive) => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill={isActive ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" fill={isActive ? "currentColor" : "none"} />
        <path d="M12 16v-4" stroke={isActive ? "white" : "currentColor"} />
        <path d="M12 8h.01" stroke={isActive ? "white" : "currentColor"} strokeWidth="3" />
      </svg>
    ),
  },
  {
    id: 'events',
    label: 'Events',
    icon: (isActive) => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill={isActive ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" fill={isActive ? "currentColor" : "none"} />
        <line x1="16" y1="2" x2="16" y2="6" stroke={isActive ? "white" : "currentColor"} />
        <line x1="8" y1="2" x2="8" y2="6" stroke={isActive ? "white" : "currentColor"} />
        <line x1="3" y1="10" x2="21" y2="10" stroke={isActive ? "white" : "currentColor"} />
      </svg>
    ),
  },
  {
    id: 'join',
    label: 'Join Us',
    icon: (isActive) => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill={isActive ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" fill={isActive ? "currentColor" : "none"} />
        <line x1="19" y1="8" x2="19" y2="14" />
        <line x1="16" y1="11" x2="22" y2="11" />
      </svg>
    ),
  },
  {
    id: 'contact',
    label: 'Contact Us',
    icon: (isActive) => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill={isActive ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill={isActive ? "currentColor" : "none"} />
      </svg>
    ),
  },
];

export const AnimatedNavbar = ({ activeTab: externalActiveTab, onChange: externalOnChange }) => {
  const [internalActiveTab, setInternalActiveTab] = useState('home');
  const activeTab = externalActiveTab !== undefined ? externalActiveTab : internalActiveTab;

  const handleTabChange = (id) => {
    if (externalOnChange) {
      externalOnChange(id);
    } else {
      setInternalActiveTab(id);
    }
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="relative inline-flex items-center rounded-full bg-black/90 backdrop-blur-md text-white p-2 gap-1.5 sm:gap-2 shadow-2xl shadow-black/50 border border-white/10 select-none max-w-full overflow-x-auto no-scrollbar">
      {NAV_ITEMS.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => handleTabChange(item.id)}
            className={`group relative flex items-center justify-center rounded-full outline-none active:scale-95 transition-all duration-200 ${
              isActive ? '' : 'p-2.5 w-10 h-10 sm:w-11 sm:h-11 text-white/70 hover:text-white'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="active-pill"
                transition={{
                  type: 'spring',
                  stiffness: 420,
                  damping: 32,
                  mass: 0.8,
                }}
                className="absolute inset-0 rounded-full bg-[#252528] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_4px_12px_rgba(0,0,0,0.4)] border border-white/10"
              />
            )}
            <div className={`relative z-10 flex items-center justify-center font-medium ${
              isActive ? 'py-2 sm:py-2.5 px-3.5 sm:px-4.5 gap-2 text-[13px] sm:text-[14.5px] text-white' : ''
            }`}>
              <motion.div layout transition={{ type: 'spring', stiffness: 420, damping: 32 }}>
                {item.icon ? item.icon(isActive) : null}
              </motion.div>
              {isActive && (
                <motion.span
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="font-semibold text-white whitespace-nowrap pl-0.5"
                >
                  {item.label}
                </motion.span>
              )}
            </div>
          </button>
        );
      })}
    </nav>
  );
};

export default AnimatedNavbar;