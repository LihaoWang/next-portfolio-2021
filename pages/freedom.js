import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import GithubButton from "../components/GithubButton";
import DemoButton from "../components/DemoButton";
function freedom() {
  return (
    <div>
      <Nav />
      <div className="flex flex-col justify-center items-center m-auto max-w-screen-lg">
        <h1 className="mt-24 font-medium text-4xl text-center">
          Freedom Website Blocker
        </h1>
        <p className="mt-10 text-xl md:w-1/2 text-center">
          Ulinks is bio link platform where users could share their links,
          products, videos, and more on one page.
        </p>
        <GithubButton href="https://github.com/LihaoWang/Website-blocker" />
        <DemoButton href="https://chrome.google.com/webstore/detail/freedom-website-blocker/addknbmjckakcnlnmpddbaofgjllpamd" />
        <img className="mb-5" src="images/freedom-1.png" />
        <img className="mb-5" src="images/freedom-3.jpg" />
        <img src="images/freedom-2.png" />
      </div>
      <Footer href="/freedom" />
    </div>
  );
}

export default freedom;
