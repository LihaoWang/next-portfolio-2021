import React, { useState } from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useTheme } from "../ToggleContext";
function about() {
  const darkTheme = useTheme();
  return (
    <div className={darkTheme ? "dark" : ""}>
      <Head>
        <title>Leo Wang | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="dark:bg-black">
        <div className=" flex flex-col justify-center items-center m-auto max-w-screen-lg">
          <div className="w-full flex flex-col md:flex-row justify-around md:mt-14 mt-10 px-4 lg:px-8">
            <div className="md:w-2/3 ">
              <h2 className="text-lg text-gray-400 dark:text-white">HELLO</h2>
              <h1 className="text-4xl mt-1 font-medium dark:text-white">
                Nice to meet you!
              </h1>
              <p className="mt-2 text-gray-600 font-medium text-xl dark:text-white">
                I am a Computer Science student at NYU
              </p>
              <p className="md:mt-5 text-gray-600 text-l mt-3 dark:text-white">
                My passion for creating aesthetic and intuitive products
                originates from the desire to impact and help others. I am
                always motivated to work with talented people and create
                meaningful products or services that have a positive impact on
                the society.
              </p>
              <div className="md:mt-10 mt-5 font-bold hover:text-blue-400 dark:text-white dark:hover:text-blue-400">
                <a
                  href="https://lihaowangresume.s3.us-east-2.amazonaws.com/2021-09-18_Lihao_Wang_NYU_2022.pdf"
                  target="_blank"
                >
                  Get my resume
                </a>
              </div>
            </div>
            <div className="w-5/6 md:w-1/3 md:px-5 p-10 m-auto">
              <img className="rounded-full" src="me.png" />
            </div>
          </div>
          <div className="w-full px-4 lg:px-8  md:mt-20">
            <h1 className="text-3xl md:text-4xl md:mt-12 font-medium dark:text-white">
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
      </main>
    </div>
  );
}

export default about;
