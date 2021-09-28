import React from "react";
import Nav from "../components/Nav";
import GithubButton from "../components/GithubButton";
import { FaGithubAlt } from "react-icons/fa";
// import DevIcon from "devicon-react-svg";
import Footer from "../components/Footer";
function easyTime() {
  return (
    <div>
      <Nav />
      {/* <img className="max-w-full" src="404.svg" alt="" /> */}
      <div className=" flex flex-col justify-center items-center m-auto max-w-screen-lg">
        <h1 className="mt-24 font-bold text-4xl">Easy Time Complexity</h1>
        <p className="mt-10 text-xl">Short Description</p>
        <GithubButton href="https://github.com/LihaoWang/next-portfolio-2021" />
        {/* <a href="https://github.com/LihaoWang/next-portfolio-2021">
          <button className="px-4 py-3 bg-gray-800 text-white text-xl my-10 flex flex-row justify-center items-center">
            <FaGithubAlt className="mr-2" />
            Github Repo
          </button>
        </a>{" "} */}
        {/* <div className="flex flex-row text-gray-500">
          <DevIcon icon="react" className="w-10 fill-current" />
          <DevIcon icon="css3" className="w-10 fill-current" />
        </div> */}
        <img src="images/easy-time-1.png" />
      </div>
      <Footer href="/easyTime" />
    </div>
  );
}

export default easyTime;
