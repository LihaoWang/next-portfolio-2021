import React from "react";

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center mb-20 mt-20">
      <img className="max-w-full w-40" src="avatar.png" alt="" />
      <div className="flex flex-col justify-center items-center mt-5 md:mt-10 ">
        <p className="text-xl text-gray-500 tracking-wider font-bold dark:text-gray-400">
          HI I&apos;M LEO{" "}
        </p>
        <h1 className="text-4xl font-medium  dark:text-white">
          Software Engineer / Web Designer
        </h1>
        <p className="text-2xl font-medium mt-2 dark:text-white">
          Also a Filmmaker / Technology Enthusiast / Public Speaker
        </p>
        {/* <h1 className="text-4xl font-medium mt-2 dark:text-white">
          Second-year Master&apos;s at NYU
        </h1> */}
        <p className="text-xl text-gray-500 mt-2 dark:text-gray-400">
          I specialize in developing minimal web applications that solves real
          world problems{" "}
        </p>
      </div>
    </div>
  );
}

export default Hero;
