import React from "react";
import { FaGithubAlt } from "react-icons/fa";
function GithubButton({ href }) {
  return (
    <div>
      <a href={href}>
        <button className="px-4 py-3 bg-gray-600 text-white text-xl my-10 flex flex-row justify-center items-center hover:bg-black">
          <FaGithubAlt className="mr-2" />
          Github Repo
        </button>
      </a>
    </div>
  );
}

export default GithubButton;
