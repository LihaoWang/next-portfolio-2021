import React from "react";
import Link from "next/link";
function ProjectItem({ data }) {
  return (
    <div>
      <div className="bg-gray-100 rounded-lg cursor-pointer relative dark:bg-gray-500">
        <Link href={data.url}>
          <img className="max-w-full  rounded-lg" alt="" src={data.thumb}></img>
        </Link>
        <div className="absolute top-2 left-2 md:top-4 md:left-4 dark:text-white">
          <p className="text-sm text-gray-400 font-bold uppercase dark:text-gray-300">
            Personal Project
          </p>
          <p className="md:text-2xl">{data.title}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
