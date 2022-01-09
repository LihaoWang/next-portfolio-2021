import React from "react";
import Link from "next/link";
import projectsList from "../data.json";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2  my-10  gap-5">
        {projectsList.map((data, key) => {
          return <ProjectItem data={data} key={key} delay={0.2 + key / 10} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
