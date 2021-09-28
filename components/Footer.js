import React from "react";
import { FaGithubAlt, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";

function Footer({ href }) {
  return (
    <div className="">
      <div className="max-w-screen-lg mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center justify-center py-10">
          <Link href={href}>
            <div className="flex flex-col justify-center items-center text-gray-400 cursor-pointer hover:text-gray-800 md:text-xl mb-3 md:mb-8">
              <IoIosArrowUp />
              <p>Back to top</p>
            </div>
          </Link>

          <p className="text-gray-400">
            Made with
            <span role="img" aria-label="love">
              ❤️
            </span>
            by Leo. 2021.
          </p>
          <div className="flex flex-row text-3xl text-gray-400 mt-5">
            <a href="https://github.com/LihaoWang">
              <FaGithubAlt className="mx-4 hover:text-gray-800" />
            </a>
            <a href="https://www.linkedin.com/in/lihaowang98/">
              <FaLinkedin className="mx-4 hover:text-gray-800" />
            </a>
            <a href="https://www.instagram.com/llleowang/">
              <FaInstagram className="mx-4 hover:text-gray-800" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
