import React from "react";
import { motion } from "framer-motion";
function Hero() {
  return (
    <div className="flex flex-col justify-center mb-10 md:mb-20 mt-20 relative">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        className="w-20 md:w-28 "
      >
        <img src="coding.png" alt="" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        className="flex flex-col justify-center  mt-5 md:mt-10 "
      >
        <p className="text-3xl text-gray-500 tracking-wider font-bold dark:text-gray-400">
          HI I&apos;M LEO{" "}
        </p>
        <h1 className="text-4xl md:text-4xl font-medium  dark:text-white mt-4">
          Software Engineer | Web Designer
        </h1>
        {/* <p className="text-2xl font-medium mt-2 dark:text-white">
          Also a Filmmaker / Technology Enthusiast / Public Speaker
        </p> */}
        {/* <h1 className="text-4xl font-medium mt-2 dark:text-white">
          Second-year Master&apos;s at NYU
        </h1> */}
        <p className="md:max-w-2xl text-2xl text-gray-500 mt-4 dark:text-gray-400">
          I specialize in developing minimal web applications that solve real
          world problems{" "}
        </p>
      </motion.div>
    </div>
  );
}

export default Hero;
