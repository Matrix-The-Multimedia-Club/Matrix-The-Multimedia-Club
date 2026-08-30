import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Camera, Film, X, Calendar } from "lucide-react";

const GlimpsesSection = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const constraintsRef = useRef(null);

  const glimpsesData = [
    {
      id: 1,
      image: "/figma/generated/glimpse_ds.png",
      title: "Data Science Workshop",
      date: "Oct 2023",
      category: "WORKSHOP",
      tilt: "-rotate-2",
      description: "Comprehensive hands-on workshop covering data analytics, predictive modeling, and neural network architectures.",
    },
    {
      id: 2,
      image: "/figma/generated/glimpse_robotics.png",
      title: "Robotics Hackathon",
      date: "Jan 2024",
      category: "HACKATHON",
      tilt: "rotate-1",
      description: "24-hour autonomous robot building hackathon featuring kinematics challenges and micro-controller programming.",
    },
    {
      id: 3,
      image: "/figma/generated/workshops.png",
      title: "Community Networking Mixer",
      date: "Mar 2024",
      category: "SOCIAL",
      tilt: "-rotate-1",
      description: "Matrix Club social networking mixer connecting designers, developers, and media creators across domains.",
    },
    {
      id: 4,
      image: "/figma/generated/glimpse_arvr.png",
      title: "AR/VR Project Showcase",
      date: "June 2024",
      category: "SHOWCASE",
      tilt: "rotate-2",
      description: "Immersive spatial computing exhibition featuring VR headsets, gesture controls, and 3D holographic wireframes.",
    },
    {
      id: 5,
      image: "/figma/generated/showcase.png",
      title: "Annual Tech Symposium",
      date: "August 2024",
      category: "SYMPOSIUM",
      tilt: "-rotate-2",
      description: "Keynote presentation and project awards ceremony spotlighting the best student innovations of the year.",
    },
  ];

  return (
    <section
      id="glimpses-section"
      className="relative w-full py-16 px-4 md:px-8 text-white flex flex-col justify-center items-center overflow-hidden"
    >
      <style>{`
        .filmstrip-sprockets {
          background-image: repeating-linear-gradient(
            to right,
            transparent,
            transparent 16px,
            rgba(255, 255, 255, 0.8) 16px,
            rgba(255, 255, 255, 0.8) 32px
          );
          background-size: 40px 100%;
        }
        .chalk-caption {
          font-family: 'Comic Sans MS', 'Outfit', sans-serif;
        }
        .polaroid-card {
          background-color: #fdfdfb;
          border: 1px solid #e5e7eb;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .polaroid-card:hover {
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.7);
          z-index: 30;
        }
      `}</style>

      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-10 relative z-10 items-center">
        
        {/* Header Board */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 bg-[rgba(11,12,16,0.95)] px-6 py-4 md:px-10 md:py-6 rounded-2xl border border-white/20 shadow-2xl"
        >
          <Film className="w-8 h-8 text-amber-500 hidden md:block" />
          <h2 className="text-3xl md:text-5xl font-black text-amber-500 tracking-wider uppercase chalk-caption text-center">
            Glimpses of Matrix Club
          </h2>
          <Camera className="w-8 h-8 text-amber-500 hidden md:block" />
        </motion.div>

        {/* Filmstrip Track */}
        <div className="w-full relative py-8 select-none my-4">
          
          {/* Top Film Sprockets */}
          <div className="absolute top-0 left-0 w-full h-8 bg-black border-t border-b border-white/20 flex items-center z-10 shadow-lg">
            <div className="w-full h-3 filmstrip-sprockets opacity-90 mx-2" />
          </div>

          {/* Draggable Glimpses Slider Area */}
          <div ref={constraintsRef} className="w-full overflow-hidden py-10 px-4 cursor-grab active:cursor-grabbing bg-[#111]">
            <motion.div
              drag="x"
              dragConstraints={constraintsRef}
              className="flex gap-8 md:gap-12 w-max px-8 justify-center"
            >
              {glimpsesData.map((item) => (
                <motion.div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className={`polaroid-card p-4 pb-6 rounded-sm ${item.tilt} w-[260px] md:w-[300px] shrink-0 flex flex-col gap-3 relative cursor-pointer group`}
                >
                  {/* Tape Decorator */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/40 backdrop-blur-[2px] rotate-2 shadow-sm border border-white/20 opacity-80 z-20" />
                  
                  {/* Polaroid Image Area */}
                  <div className="w-full h-[180px] md:h-[200px] bg-zinc-800 overflow-hidden relative border border-zinc-300">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover filter brightness-95 group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>

                  {/* Polaroid Handwritten Caption */}
                  <div className="flex flex-col text-center mt-2 select-none">
                    <span className="text-sm md:text-base font-black tracking-wider text-zinc-900 chalk-caption leading-tight">
                      {item.title}
                    </span>
                    <span className="text-xs md:text-sm font-black text-amber-700 chalk-caption mt-1">
                      {item.date}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Film Sprockets */}
          <div className="absolute bottom-0 left-0 w-full h-8 bg-black border-t border-b border-white/20 flex items-center z-10 shadow-lg">
            <div className="w-full h-3 filmstrip-sprockets opacity-90 mx-2" />
          </div>
        </div>

        {/* Footer Tagline */}
        <div className="text-center pt-4">
          <span className="text-lg md:text-xl font-black tracking-widest text-emerald-500 uppercase select-none border-b-2 border-emerald-500/40 pb-2 chalk-caption">
            Partner with us & Supporters
          </span>
        </div>

      </div>

      {/* Lightbox Modal Preview */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0f1017] border border-white/20 p-6 md:p-8 rounded-3xl max-w-2xl w-full flex flex-col gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative text-white"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-white/10 relative">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-500 text-xs font-black uppercase tracking-wider">
                    {selectedItem.category}
                  </span>
                  <span className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> {selectedItem.date}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide">
                  {selectedItem.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 font-medium leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default GlimpsesSection;
