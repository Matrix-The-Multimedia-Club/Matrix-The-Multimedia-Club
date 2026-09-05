import { motion } from "motion/react";

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{
        backgroundImage: "url(/back.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* upper */}
      <div className="flex justify-between w-full">
        {/* phone Image */}
        <motion.img
          src="phone.png"
          alt="Mobile"
          className="w-[15vw]"
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.img
          src="apple.png"
          alt="Apple"
          className="w-[50vw] -translate-y-4"
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <span className="w-[20vw]">
          <motion.img
            src="CUP.png"
            alt="cup"
            className="w-[9vw]"
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </span>
      </div>

      <div className="relative flex w-full">
        {/* middle left layer */}
        <div>
          <span className="flex gap-4">
            <span className="w-[0.23vw]"></span>
            <span>
              <motion.img
                src="CART.png"
                alt="cart"
                className="w-17.5 h-auto"
                initial={{ x: "-500%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </span>
            <span>
              <motion.img
                src="shield.png"
                alt="shield"
                className="w-25"
                initial={{ x: "-500%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </span>
            <span>
              <motion.img
                src="LAPTOP2.png"
                alt="laptop"
                className="w-87.5 h-auto"
                initial={{ x: "-200%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </span>
          </span>
          <span className="absolute flex gap-4">
            <span className="w-[0.4vw]"></span>
            <span>
              <motion.img
                src="mail.png"
                alt="mail"
                className="w-25"
                initial={{ x: "-500%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </span>
            <span>
              <motion.img
                src="call.png"
                alt="call"
                className="w-45"
                initial={{ x: "-500%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </span>
            <span>
              <motion.img
                src="SUN.png"
                alt="sun"
                className="w-35 translate-10"
                initial={{ x: "-500%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </span>
          </span>
        </div>

        {/* middle center layer */}
        <div className="absolute inset-x-0 flex flex-col items-center justify-center gap-3">
          
          
          <motion.img
            src="join.png"
            alt="matrix"
            className="w-[50vw] z-10 translate-y-35"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 8,
              type: "spring",
              stiffness: 100,
            }}
          />
        </div>

        {/* middle right layer */}
        <div className="absolute inset-x-0 flex justify-end">
          <span className="flex items-center gap-7 mr-15">
            <span>
              <motion.img
                src="MUSIC.png"
                alt="music"
                className="w-20 -translate-9"
                initial={{ x: "650%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </span>
            <span>
              <motion.img
                src="EARTH.png"
                alt="earth"
                className="w-40"
                initial={{ x: "500%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </span>
            <span>
              <motion.img
                src="CLOUD.png"
                alt="cloud"
                className="w-25"
                initial={{ x: "500%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </span>
          </span>
          <motion.img
            src="BULB.png"
            alt="bulb"
            className="w-25 absolute translate-y-32"
            initial={{ x: "500%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>
        <motion.img
          src="people.png"
          alt="people"
          className="w-30 absolute translate-y-32 ml-5"
          initial={{ x: "-120%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>

      {/* second lower layer */}
      <div className="absolute inset-x-0 flex justify-end gap-5">
        <motion.span
          initial={{ x: "500%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <img
            src="GLASS.png"
            alt="messages"
            className="w-25 translate-y-12 mr-5"
          />
        </motion.span>
        <span>
          <motion.img
            src="MESSAGES.png"
            alt="messages"
            className="w-30"
            initial={{ x: "500%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </span>
        <span>
          <motion.img
            src="MAPS.png"
            alt="maps"
            className="w-30"
            initial={{ x: "500%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </span>
        <span>
          <motion.img
            src="PHONE1.png"
            alt="maps"
            className="w-25 mr-10 translate-y-10"
            initial={{ x: "500%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </span>
      </div>

      {/* lower */}
      <div className="absolute bottom-0 inset-x-0 flex justify-between">
        <motion.img
          src="MOBILEPEN.png"
          alt="mobile and pen"
          className="h-[5vw]"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.img
          src="key.png"
          alt="keyboard"
          className="h-[5vw]"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.img
          src="TAB.png"
          alt="keyboard"
          className="h-[5vw]"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.img
          src="MOUSE.png"
          alt="keyboard"
          className="h-[5vw]"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.img
          src="TAB2.png"
          alt="keyboard"
          className="h-[5vw]"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default Hero;
