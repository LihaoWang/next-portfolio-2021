import React from "react";

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center mb-20 mt-10">
      <img className="max-w-full w-40" src="avatar.png" alt="" />
      <div className="flex flex-col justify-start items-start mt-5">
        <p className="text-xl text-gray-500 tracking-wider font-bold">
          HI I&apos;M LEO{" "}
        </p>
        <h1 className="text-3xl font-medium  ">
          Software Engineer / Web Designer
        </h1>
        <h1 className="text-3xl font-medium  ">
          Second-year Master&apos;s at NYU
        </h1>
        <p className="text-xl text-gray-500 ">I specialized in ... </p>
      </div>
    </div>
  );
}

export default Hero;
