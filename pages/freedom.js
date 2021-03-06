import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import GithubButton from "../components/GithubButton";
import DemoButton from "../components/DemoButton";
import ProjectHeader from "../components/ProjectHeader";
import ProjectDescription from "../components/ProjectDescription";
import { useTheme } from "../ToggleContext";
function freedom() {
  const darkTheme = useTheme();
  const description = `Freedom is a simple Chrome extension that blocks any (distracting) websites. So you can focus on what's important.`;
  return (
    <div className={darkTheme ? "dark" : ""}>
      <Head>
        <title>Freedom Website Blocker</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Nav />
      <div className="w-full dark:bg-black">
        <div className="flex flex-col justify-center items-center m-auto max-w-screen-lg">
          <ProjectHeader text="Freedom Website Blocker" />
          <ProjectDescription text={description} />
          <GithubButton href="https://github.com/LihaoWang/Website-blocker" />
          <DemoButton href="https://chrome.google.com/webstore/detail/freedom-website-blocker/addknbmjckakcnlnmpddbaofgjllpamd" />
          <img className="mb-5" src="images/freedom-1.png" />
          <img className="mb-5" src="images/freedom-3.jpg" />
          <img src="images/freedom-2.png" />
        </div>

        <Footer href="/freedom" />
      </div>
    </div>
  );
}

export default freedom;
