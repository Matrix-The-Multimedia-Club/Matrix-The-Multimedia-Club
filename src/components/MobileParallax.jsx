import { motion } from "motion/react";

const ParallaxBackground = () => {
  return (
    <div
      className="relative w-full h-[94vh] sm:h-[85vh] md:h-screen min-h-[420px] overflow-hidden"
      style={{
        backgroundImage: "url(/back.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* upper  iska mobile responsive ho gya hai*/}
      <div className="flex justify-between items-start w-full">
        <motion.img
          src="phone.png"
          alt="Mobile"
          className="w-[10vw] h-[5vh] -translate-x-5"
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.img
          src="apple.png"
          alt="Apple"
          className="w-[80vw] h-[7vh]"
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <span className="w-[10vw] max-w-[120px] flex justify-end">
          <motion.img
            src="CUP2.png"
            alt="cup"
            className="w-[10vw] translate-y-5"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </span>
      </div>

      <div className="relative flex w-full h-[45%]">
        {/* middle left layer optimised for mobilee donen */}
        <div >
          <span className="flex items-center gap-3 mt-4">
            <span>
              <motion.img
                src="CART.png"
                alt="cart"
                className="ml-2 max-w-[40px] min-w-[32px] h-auto"
                initial={{ x: "-500%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </span>
            <span className="">
              <motion.img
                src="shield.png"
                alt="shield"
                className=" max-w-[55px] translate-y-15 -translate-x-8"
                initial={{ x: "-500%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </span>
            <span>
              <motion.img
                src="LAPTOP2.png"
                alt="laptop"
                className="max-w-[180px] min-w-[90px] translate-y-2 -translate-x-13 h-auto"
                initial={{ x: "-200%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </span>
          </span>
          <span className="absolute mt-50">
            <span>
              <motion.img
                src="call.png"
                alt="call"
                className="max-w-[100px] mt-10 translate-x-5"
                initial={{ x: "-500%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </span>
            <span className="flex mt-5 gap-3">
              <motion.img
                src="mail.png"
                alt="mail"
                className="max-w-[60px] ml-2"
                initial={{ x: "-500%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.img
                src="SUN.png"
                alt="sun"
                className="max-w-[80px]"
                initial={{ x: "-500%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </span>
            
          </span>
        </div>

        {/* middle center layer  iska mobile responsive  ho gya hai*/}
        <div className="absolute inset-x-0 flex flex-col items-center h-[75vh] justify-center gap-2">
          <motion.img
            src="MATRIX.png"
            alt="matrix"
            className=" max-w-[150px] min-w-[100px]"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 8, type: "spring", stiffness: 100 }}
          />
          <motion.img
            src="THE.png"
            alt="the"
            className="max-w-[60px] min-w-[40px]"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 8, type: "spring", stiffness: 100 }}
          />
          <motion.img
            src="MULTIMEDIA.png"
            alt="matrix"
            className="max-w-[300px] min-w-[180px]"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 8, type: "spring", stiffness: 100 }}
          />
          <motion.img
            src="CLUB.png"
            alt="matrix"
            className=" max-w-[110px] min-w-[70px]"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 8, type: "spring", stiffness: 100 }}
          />
        </div>

        {/* middle right layer mobile responsiveness ho gya hai iska*/}
        <div className="flex absolute inset-x-0 justify-end mt-8">
          <span className="flex items-center gap-3 mr-3">
            <span className="">
              <motion.img
                src="MUSIC.png"
                alt="music"
                className="max-w-[50px] translate-15"
                initial={{ x: "650%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </span>
            <span>
              <motion.img
                src="EARTH.png"
                alt="earth"
                className="max-w-[90px] min-w-[50px] translate-x-10"
                initial={{ x: "500%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </span>
            <span>
              <motion.img
                src="CLOUD.png"
                alt="cloud"
                className="max-w-[50px] translate-y-20"
                initial={{ x: "500%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </span>
          </span>
          <motion.img
            src="BULB.png"
            alt="bulb"
            className=" max-w-[60px] absolute translate-y-45 -translate-x-8"
            initial={{ x: "500%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>
        <motion.img
          src="people.png"
          alt="people"
          className="max-w-[90px] absolute translate-y-55 ml-5"
          initial={{ x: "-120%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>

      {/* second lower  */}
      <div
        className="flex absolute inset-x-0 justify-end gap-5"
        style={{ top: "62%" }}
      >
        <motion.span
          initial={{ x: "500%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <img
            src="GLASS.png"
            alt="messages"
            className="max-w-[80px] translate-x-55"
          />
        </motion.span>
        <span>
          <motion.img
            src="MESSAGES.png"
            alt="messages"
            className="max-w-[100px] translate-y-40 -translate-x-10"
            initial={{ x: "-500%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </span>
        <span>
          <motion.img
            src="MAPS.png"
            alt="maps"
            className="max-w-[100px] translate-y-25"
            initial={{ x: "500%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </span>
        <span>
          <motion.img
            src="PHONE1.png"
            alt="maps"
            className="max-w-[80px] mr-2"
            initial={{ x: "500%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </span>
      </div>

      {/* lower mobile responsiveness ho gya hai iska*/}
      <div className="absolute bottom-0 inset-x-0 flex justify-between items-end px-1 sm:px-2">
        <motion.img
          src="MOBILEPEN.png"
          alt="mobile and pen"
          className="w-[25vw] h-[5vh]"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.img
          src="key.png"
          alt="keyboard"
          className="w-[30vw] h-[5vh]"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.img
          src="TAB.png"
          alt="ktab"
          className="w-[20vw] h-[3vh]"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.img
          src="MOUSE.png"
          alt="keyboard"
          className="w-[15vw] h-[5vh]"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default ParallaxBackground;
