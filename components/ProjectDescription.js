import React from "react";

function ProjectDescription({ text }) {
  return (
    <div className="mt-10 text-xl md:w-1/2 text-center px-5 dark:text-white">
      <p>{text}</p>
    </div>
  );
}

export default ProjectDescription;
