import React from "react";
import Nav from "../components/Nav";
import GithubButton from "../components/GithubButton";
import DemoButton from "../components/DemoButton";
import Head from "next/head";
import Footer from "../components/Footer";
function xchange() {
  return (
    <div>
      <Head>
        <title>Xchange</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Nav />
      <div className=" flex flex-col justify-center items-center m-auto max-w-screen-lg">
        <h1 className="mt-24 font-medium text-4xl text-center px-5">Xchange</h1>
        <p className="mt-10 text-xl md:w-1/2 text-center px-5">
          Xchange is a unique currency converter app that displays up to 170
          currency exchange rates on one page. Users can easily copy the
          converted results, for maximum efficiency.
        </p>
        <GithubButton href="https://github.com/LihaoWang/xchange" />
        <DemoButton href="https://x-change.xyz" />

        <img className="mb-2" src="images/xchange-0.png" />
        <img className="mb-2" src="images/xchange-1.png" />
        <img className="mb-2" src="images/xchange-2.png" />
        <img className="mb-2" src="images/xchange-3.png" />
      </div>
      <Footer href="/xchange" />
    </div>
  );
}

export default xchange;
