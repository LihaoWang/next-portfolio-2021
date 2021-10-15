import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
function about() {
  return (
    <div>
      <Nav />
      <div className=" flex flex-col justify-center items-center m-auto max-w-screen-lg">
        <div className="w-full flex flex-col md:flex-row justify-around md:mt-14 mt-10 px-4 lg:px-8">
          <div className="md:w-2/3 ">
            <h2 className="text-lg text-gray-400">HELLO</h2>
            <h1 className="text-4xl mt-1 font-medium">Nice to meet you!</h1>
            <p className="mt-2 text-gray-600 font-medium text-xl">
              I am a Computer Science student at NYU
            </p>
            <p className="md:mt-5 text-gray-600 text-xl mt-3">
              My passion for creating aesthetic and intuitive products
              originates from the desire to impact and help others. I am always
              motivated to work with talented people and create meaningful
              products or services that have a positive impact on the society.
            </p>
            <div className="md:mt-10 mt-5 font-bold hover:text-blue-400">
              <a href="#">Get my resume</a>
            </div>
          </div>
          <div className="md:w-1/3 md:px-5 p-10">
            <img className="rounded-full" src="me.png" />
          </div>
        </div>
        <div className="w-full px-4 lg:px-8  md:mt-20">
          <h1 className="text-3xl md:text-4xl mt-12 font-medium">
            Outside of Work
          </h1>
          <div className="mt-5 mb-10">
            <a href="https://youtu.be/UQQcZKcCItA">
              <img className="rounded-xl" src="images/cinema.jpg" />
            </a>
            {/* <h1 className="text-center text-xl mt-5 text-gray-500 ">
              I make videos
            </h1> */}
          </div>
        </div>
      </div>
      <Footer href="/about" />
    </div>
  );
}

export default about;
