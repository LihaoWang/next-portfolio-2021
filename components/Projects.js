import React from "react";
import Link from "next/link";
function Projects() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2  my-10  gap-5">
        <div className="bg-gray-100 rounded-lg cursor-pointer relative ">
          <Link href="/easyTime">
            <img className="max-w-full  rounded-lg" src="thumb.png"></img>
          </Link>
          <div class="absolute top-2 left-2 md:top-4 md:left-4">
            <p className="text-sm text-gray-400 font-bold uppercase">
              Personal Project
            </p>
            <p className="md:text-2xl">Easy Time Complexity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
