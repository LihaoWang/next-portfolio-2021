import React from "react";

import { BiShow } from "react-icons/bi";
function DemoButton({ href }) {
  return (
    <div>
      <a href={href}>
        <button className="px-4 py-3 bg-gray-200 text-black text-lg mb-10 flex flex-row justify-center items-center hover:bg-gray-300">
          <BiShow className="mr-2" />
          Demo
        </button>
      </a>
    </div>
  );
}

export default DemoButton;
