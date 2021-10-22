import React from "react";

function ProjectHeader({ text }) {
  return (
    <div>
      <h1 className="mt-24 font-medium text-4xl text-center px-5 dark:text-white">
        {text}
      </h1>
    </div>
  );
}

export default ProjectHeader;
