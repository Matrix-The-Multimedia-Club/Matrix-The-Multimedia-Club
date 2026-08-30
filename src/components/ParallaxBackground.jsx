import { motion } from "motion/react";

const ParallaxBackground = () => {
  // Helper function to generate natural, continuous floating animations for each icon
  const getFloatAnim = (delay = 0, yRange = 10, rotRange = 3, duration = 4) => ({
    y: [0, -yRange, 0],
    rotate: [0, rotRange, -rotRange, 0],
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    },
  });

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden bg-black"
      style={{
        backgroundImage: "url(/back.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Top Monitor / Apple Graphic (matches the top center of the screenshot) */}
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[35vw] max-w-[400px] z-10"
      >
        <img src="apple.png" alt="Monitor Base" className="w-full opacity-90 drop-shadow-2xl" />
      </motion.div>

      {/* Central MULTIMEDIA Logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-20 pointer-events-none w-[85vw] max-w-[900px]">
         <motion.img 
            src="MULTIMEDIA.png" 
            alt="MULTIMEDIA" 
            className="w-full drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]" 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }} 
         />
      </div>

      {/* Floating Elements - Left Side */}
      <motion.img src="CART.png" className="absolute top-[25%] left-[8%] w-[6vw] min-w-[50px] max-w-[80px] z-10 drop-shadow-xl" animate={getFloatAnim(0, 15, 6, 5)} />
      <motion.img src="shield.png" className="absolute top-[32%] left-[15%] w-[9vw] min-w-[65px] max-w-[110px] z-10 drop-shadow-xl" animate={getFloatAnim(1, -12, 8, 4.5)} />
      <motion.img src="mail.png" className="absolute top-[45%] left-[8%] w-[8vw] min-w-[60px] max-w-[100px] z-10 drop-shadow-xl" animate={getFloatAnim(0.5, 10, -4, 4)} />
      <motion.img src="call.png" className="absolute top-[58%] left-[5%] w-[14vw] min-w-[80px] max-w-[180px] z-10 drop-shadow-xl" animate={getFloatAnim(2, 25, 10, 6)} />
      <motion.img src="SUN.png" className="absolute bottom-[22%] left-[18%] w-[11vw] min-w-[70px] max-w-[140px] z-10 drop-shadow-xl" animate={getFloatAnim(1.5, 15, 2, 5.5)} />
      
      {/* Floating Elements - Top/Center Left */}
      <motion.img src="LAPTOP2.png" className="absolute top-[20%] left-[28%] w-[18vw] min-w-[120px] max-w-[240px] z-10 drop-shadow-2xl" animate={getFloatAnim(0.2, 10, 1, 6)} />
      <motion.img src="CUP.png" className="absolute top-[6%] right-[15%] w-[6vw] min-w-[45px] max-w-[80px] z-10 drop-shadow-xl" animate={getFloatAnim(1.2, 12, -2, 5)} />
      
      {/* Floating Elements - Center Bottom */}
      <motion.img src="people.png" className="absolute bottom-[16%] left-[36%] w-[12vw] min-w-[90px] max-w-[160px] z-10 drop-shadow-xl" animate={getFloatAnim(0.8, 12, 3, 5)} />
      <motion.img src="MESSAGES.png" className="absolute bottom-[24%] right-[40%] w-[7vw] min-w-[50px] max-w-[90px] z-10 drop-shadow-xl" animate={getFloatAnim(0.4, 18, -5, 4.2)} />
      <motion.img src="MAPS.png" className="absolute bottom-[16%] right-[26%] w-[6vw] min-w-[45px] max-w-[80px] z-10 drop-shadow-xl" animate={getFloatAnim(1.8, 15, 4, 4.8)} />
      
      {/* Floating Elements - Right Side */}
      <motion.img src="EARTH.png" className="absolute top-[24%] right-[30%] w-[12vw] min-w-[90px] max-w-[160px] z-10 drop-shadow-2xl" animate={getFloatAnim(0.1, 15, 6, 6)} />
      <motion.img src="MUSIC.png" className="absolute top-[28%] right-[43%] w-[4.5vw] min-w-[35px] max-w-[60px] z-10 drop-shadow-xl" animate={getFloatAnim(1.3, -20, 15, 3.5)} />
      <motion.img src="CLOUD.png" className="absolute top-[28%] right-[15%] w-[9vw] min-w-[70px] max-w-[120px] z-10 drop-shadow-xl" animate={getFloatAnim(0.7, 10, -3, 5.2)} />
      <motion.img src="BULB.png" className="absolute top-[46%] right-[5%] w-[7vw] min-w-[55px] max-w-[90px] z-10 drop-shadow-xl" animate={getFloatAnim(2.2, 22, 8, 4)} />
      <motion.img src="PHONE1.png" className="absolute bottom-[22%] right-[8%] w-[8vw] min-w-[60px] max-w-[100px] z-10 drop-shadow-xl" animate={getFloatAnim(0.5, 12, -6, 5)} />
      <motion.img src="GLASS.png" className="absolute bottom-[30%] right-[18%] w-[6vw] min-w-[45px] max-w-[80px] z-10 drop-shadow-xl" animate={getFloatAnim(1.1, 18, 5, 4.5)} />

      {/* Bottom Desk Layer (Keyboards, tablets, mouse, etc.) */}
      <div className="absolute bottom-0 w-full flex justify-center items-end gap-[4vw] md:gap-[2vw] px-4 z-30 pointer-events-none drop-shadow-2xl">
        <img src="MOBILEPEN.png" alt="mobile" className="w-[10vw] max-w-[120px] object-contain object-bottom" />
        <img src="key.png" alt="keyboard" className="w-[28vw] max-w-[350px] object-contain object-bottom" />
        <img src="TAB.png" alt="tablet" className="w-[12vw] max-w-[150px] object-contain object-bottom" />
        <img src="MOUSE.png" alt="mouse" className="w-[6vw] max-w-[80px] object-contain object-bottom" />
        <img src="TAB2.png" alt="tablet2" className="w-[14vw] max-w-[180px] object-contain object-bottom -translate-y-2" />
      </div>
    </div>
  );
};

export default ParallaxBackground;
