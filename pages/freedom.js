import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { FaGithubAlt } from "react-icons/fa";
function easyTime() {
  return (
    <div>
      <Nav />
      {/* <img className="max-w-full" src="404.svg" alt="" /> */}
      <div className=" flex flex-col justify-center items-center m-auto max-w-screen-lg">
        <h1 className="mt-24 font-bold text-4xl">Freedom Website Blockeer</h1>
        <p className="mt-10 text-xl">Short Description</p>
        <a href="https://github.com/LihaoWang/Website-blocker">
          <button className="px-4 py-3 bg-gray-800 text-white text-xl my-10 flex flex-row justify-center items-center">
            <FaGithubAlt className="mr-2" />
            Github Repo
          </button>
        </a>{" "}
        <img className="mb-10" src="images/freedom-1.png" />
        <img className="mb-10" src="images/freedom-3.jpg" />
        <img src="images/freedom-2.png" />
      </div>
    </div>
  );
}

export default easyTime;
