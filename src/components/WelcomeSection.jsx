import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Globe, Shield } from "lucide-react";

const WelcomeSection = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cardsData = {
    workshops: {
      id: 1,
      title: "EXPLORE & LEARN: DEDICATED WORKSHOPS",
      subtitle: "Hands-on learning in data analytics, coding, and design.",
      badge: "STEP 1",
      image: "/figma/generated/workshops.png",
      details: [
        "Interactive workshops covering Python, Data Analytics, & UI/UX.",
        "Peer-to-peer coding sessions and real-time debugging labs.",
        "Certificate of completion for all core modules.",
      ],
    },
    labs: {
      id: 2,
      title: "INNOVATE & CREATE: CREATIVE LABS",
      subtitle: "Rapid prototyping, hardware experiments, and tech experimentation.",
      badge: "STEP 2",
      image: "/figma/generated/creativelabs.png",
      details: [
        "Access to hardware development kits, microcontrollers & IoT tools.",
        "UAV dynamics & autonomous system prototyping.",
        "Generative AI & creative media tinkering space.",
      ],
    },
    hub: {
      id: 3,
      title: "CONNECT & COLLABORATE: NETWORKING HUB",
      subtitle: "Fostering peer-to-peer connections and collaboration.",
      badge: "STEP 3",
      image: "/figma/generated/networkinghub.png",
      details: [
        "Join multi-disciplinary project teams combining developers, designers & creators.",
        "Industry mentorship & alumni networking sessions.",
        "Collaborative hackathon preparation groups.",
      ],
    },
    showcase: {
      id: 4,
      title: "DEMO & PRESENT: SHOWCASE PLATFORMS",
      subtitle: "Symposia, pitch competitions, and innovation demos.",
      badge: "STEP 4",
      image: "/figma/generated/showcase.png",
      details: [
        "Annual Multimedia Tech Symposium presentation opportunities.",
        "National hackathon stage pitching.",
        "Featured spotlight on the Matrix Club global website.",
      ],
    },
  };

  return (
    <section
      id="welcome-section"
      className="relative w-full py-16 px-4 md:px-8 text-white flex flex-col justify-center items-center overflow-hidden"
    >
      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -40; }
        }
        .animate-circuit-dash {
          stroke-dasharray: 8, 12;
          animation: dash 3s linear infinite;
        }
        .chalk-header {
          font-family: 'Comic Sans MS', 'Outfit', sans-serif;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.9);
        }
        .card-container {
          background: rgba(11, 12, 16, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: inset 0 0 10px rgba(0,0,0,0.5), 0 5px 15px rgba(0,0,0,0.5);
          transition: all 0.3s ease;
        }
        .card-container:hover {
          border-color: rgba(251, 191, 36, 0.5);
          box-shadow: inset 0 0 10px rgba(0,0,0,0.5), 0 0 20px rgba(251, 191, 36, 0.2);
        }
        .card-badge {
          background-color: #f59e0b; /* amber-500 */
          color: #000;
          font-weight: 900;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>

      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
        
        {/* Title Header */}
        <div className="text-center flex flex-col items-center gap-2 px-4">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-amber-500 tracking-wide uppercase chalk-header"
          >
            Welcome to the Matrix Club
          </motion.h2>
          <p className="text-sm md:text-lg font-black tracking-widest text-gray-200 uppercase opacity-95 text-center mt-2">
            The Pulse of Innovation. The Community of Tomorrow.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Diagram Area (Left) */}
          <div className="lg:col-span-9 relative">
            
            {/* SVG Connecting Lines (Visible only on medium screens and up) */}
            <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 600" fill="none">
                {/* Center to Top-Left */}
                <path d="M 500 300 H 300 V 150 H 50" stroke="#f59e0b" strokeWidth="2" className="opacity-20" />
                <path d="M 500 300 H 300 V 150 H 50" stroke="#fbbf24" strokeWidth="2.5" className="animate-circuit-dash" />
                
                {/* Center to Bottom-Left */}
                <path d="M 500 300 H 300 V 450 H 50" stroke="#f59e0b" strokeWidth="2" className="opacity-20" />
                <path d="M 500 300 H 300 V 450 H 50" stroke="#fbbf24" strokeWidth="2.5" className="animate-circuit-dash" />

                {/* Center to Top-Right */}
                <path d="M 500 300 H 700 V 150 H 950" stroke="#f59e0b" strokeWidth="2" className="opacity-20" />
                <path d="M 500 300 H 700 V 150 H 950" stroke="#fbbf24" strokeWidth="2.5" className="animate-circuit-dash" />

                {/* Center to Bottom-Right */}
                <path d="M 500 300 H 700 V 450 H 950" stroke="#f59e0b" strokeWidth="2" className="opacity-20" />
                <path d="M 500 300 H 700 V 450 H 950" stroke="#fbbf24" strokeWidth="2.5" className="animate-circuit-dash" />
              </svg>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 h-full relative z-10">
              
              {/* Column 1: Left Cards */}
              <div className="flex flex-col justify-between gap-8 h-full">
                {/* Card 1 */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedCard(cardsData.workshops)}
                  className="card-container rounded-2xl p-4 md:p-5 flex flex-col gap-3 cursor-pointer relative"
                >
                  <div className="flex items-center gap-2">
                    <span className="card-badge w-6 h-6 text-xs shadow-md">1</span>
                    <h3 className="text-sm md:text-[13px] font-black tracking-wider text-amber-500 uppercase">
                      Explore & Learn
                    </h3>
                  </div>
                  <div className="w-full h-32 md:h-28 lg:h-36 rounded-lg overflow-hidden border border-white/10">
                    <img src={cardsData.workshops.image} alt="Workshops" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs md:text-[11px] lg:text-xs font-bold text-gray-200 uppercase">
                      Dedicated Workshops
                    </span>
                    <span className="text-xs md:text-[10px] lg:text-xs text-gray-400 leading-tight">
                      Hands-on learning in data analytics, coding, and design.
                    </span>
                  </div>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedCard(cardsData.hub)}
                  className="card-container rounded-2xl p-4 md:p-5 flex flex-col gap-3 cursor-pointer relative"
                >
                  <div className="flex items-center gap-2">
                    <span className="card-badge w-6 h-6 text-xs shadow-md">3</span>
                    <h3 className="text-sm md:text-[13px] font-black tracking-wider text-amber-500 uppercase">
                      Connect & Collaborate
                    </h3>
                  </div>
                  <div className="w-full h-32 md:h-28 lg:h-36 rounded-lg overflow-hidden border border-white/10">
                    <img src={cardsData.hub.image} alt="Networking Hub" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs md:text-[11px] lg:text-xs font-bold text-gray-200 uppercase">
                      Networking Hub
                    </span>
                    <span className="text-xs md:text-[10px] lg:text-xs text-gray-400 leading-tight">
                      Fostering peer-to-peer connections and collaboration.
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Column 2: Center Avatar */}
              <div className="flex flex-col justify-center items-center py-6 md:py-0">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 15px rgba(245,158,11,0.2)",
                      "0 0 35px rgba(245,158,11,0.5)",
                      "0 0 15px rgba(245,158,11,0.2)",
                    ],
                  }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-amber-500 bg-[#0c0d12] flex flex-col items-center justify-center p-3 text-center shadow-lg"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden mb-2 border border-amber-400">
                    <img
                      src="/figma/illustrations/avatar.png"
                      alt="Matrix Vision"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[10px] md:text-xs uppercase font-black text-amber-500 tracking-wider leading-none">
                    Matrix Club
                  </span>
                  <span className="text-[9px] md:text-[10px] uppercase font-bold text-gray-300 leading-none mt-1">
                    Vision
                  </span>
                </motion.div>
              </div>

              {/* Column 3: Right Cards */}
              <div className="flex flex-col justify-between gap-8 h-full">
                {/* Card 2 */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedCard(cardsData.labs)}
                  className="card-container rounded-2xl p-4 md:p-5 flex flex-col gap-3 cursor-pointer relative"
                >
                  <div className="flex items-center gap-2">
                    <span className="card-badge w-6 h-6 text-xs shadow-md">2</span>
                    <h3 className="text-sm md:text-[13px] font-black tracking-wider text-amber-500 uppercase">
                      Innovate & Create
                    </h3>
                  </div>
                  <div className="w-full h-32 md:h-28 lg:h-36 rounded-lg overflow-hidden border border-white/10">
                    <img src={cardsData.labs.image} alt="Creative Labs" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs md:text-[11px] lg:text-xs font-bold text-gray-200 uppercase">
                      Creative Labs
                    </span>
                    <span className="text-xs md:text-[10px] lg:text-xs text-gray-400 leading-tight">
                      Rapid prototyping and tech experimentation.
                    </span>
                  </div>
                </motion.div>

                {/* Card 4 */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedCard(cardsData.showcase)}
                  className="card-container rounded-2xl p-4 md:p-5 flex flex-col gap-3 cursor-pointer relative"
                >
                  <div className="flex items-center gap-2">
                    <span className="card-badge w-6 h-6 text-xs shadow-md">4</span>
                    <h3 className="text-sm md:text-[13px] font-black tracking-wider text-amber-500 uppercase">
                      Demo & Present
                    </h3>
                  </div>
                  <div className="w-full h-32 md:h-28 lg:h-36 rounded-lg overflow-hidden border border-white/10">
                    <img src={cardsData.showcase.image} alt="Showcase Platforms" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs md:text-[11px] lg:text-xs font-bold text-gray-200 uppercase">
                      Showcase Platforms
                    </span>
                    <span className="text-xs md:text-[10px] lg:text-xs text-gray-400 leading-tight">
                      Symposia and innovation demos.
                    </span>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>

          {/* Sidebar Area (Right) */}
          <div className="lg:col-span-3 flex flex-col gap-6 md:gap-8 h-full">
            
            {/* Global Reach Map */}
            <div className="card-container p-5 rounded-2xl flex flex-col gap-4">
              <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                <Globe className="w-5 h-5 text-gray-300" />
                <h3 className="text-xs lg:text-[11px] xl:text-xs font-black tracking-widest text-gray-200 uppercase">
                  Global Reach Map
                </h3>
              </div>
              <div className="relative h-32 md:h-40 lg:h-32 w-full bg-black/40 border border-white/10 rounded-lg overflow-hidden flex items-center justify-center p-2">
                <img
                  src="/figma/illustrations/map.png"
                  alt="Global Map"
                  className="h-full object-contain opacity-75"
                />
                <div className="absolute top-6 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                <div className="absolute top-6 left-1/4 w-1.5 h-1.5 bg-red-500 rounded-full" />
              </div>
            </div>

            {/* Pillars of Excellence */}
            <div className="card-container p-5 rounded-2xl flex flex-col gap-4 flex-grow">
              <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                <Shield className="w-5 h-5 text-gray-300" />
                <h3 className="text-xs lg:text-[11px] xl:text-xs font-black tracking-widest text-gray-200 uppercase">
                  Our Pillars of Excellence
                </h3>
              </div>
              
              <ul className="flex flex-col gap-3 justify-center h-full">
                {[
                  { name: "Innovation", desc: "Pushing limits of design & code." },
                  { name: "Skill Development", desc: "Hands-on learning." },
                  { name: "Community", desc: "Connecting creative tech minds." },
                  { name: "Showcase", desc: "Sharing amazing projects." },
                ].map((pillar, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-amber-500 font-black text-sm leading-none mt-0.5">~</span>
                    <div className="flex flex-col">
                      <span className="text-[13px] lg:text-xs xl:text-[13px] font-bold text-gray-200 uppercase">
                        {pillar.name}
                      </span>
                      <span className="text-[11px] lg:text-[10px] xl:text-[11px] text-gray-400">
                        {pillar.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Footer Area */}
        <div className="w-full pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-amber-500 text-lg md:text-2xl font-black tracking-wider uppercase chalk-header text-center md:text-left">
            Shape the Future. Embrace the Matrix.
          </span>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <span className="text-xs font-black text-gray-400 uppercase tracking-widest">
              Our Visionaries & Supporters
            </span>
            <div className="flex items-center gap-2 bg-black/40 py-2 px-4 rounded-full border border-white/10">
              {["React", "Vite", "Tailwind", "Framer"].map((tech, idx) => (
                <div
                  key={idx}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold text-gray-400 shadow-sm"
                  title={tech}
                >
                  {tech[0]}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Detail Modal */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0f1017] border border-white/20 p-6 md:p-8 rounded-3xl max-w-xl w-full flex flex-col gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative"
            >
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full h-56 rounded-2xl overflow-hidden border border-white/10 relative">
                <img
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-amber-500/40 text-[10px] font-black text-amber-400 uppercase tracking-widest">
                  {selectedCard.badge}
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-black text-white uppercase tracking-tight">
                  {selectedCard.title}
                </h3>
                <p className="text-sm text-gray-300 font-medium leading-relaxed">
                  {selectedCard.subtitle}
                </p>

                <div className="border-t border-white/10 pt-4 mt-2 flex flex-col gap-3">
                  <span className="text-[11px] font-black text-amber-500 uppercase tracking-widest">
                    KEY HIGHLIGHTS:
                  </span>
                  <ul className="flex flex-col gap-2">
                    {selectedCard.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                        <span className="text-amber-500 font-bold mt-0.5">✓</span>
                        <span className="leading-snug">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default WelcomeSection;
