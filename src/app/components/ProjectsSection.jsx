import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "E-Vote",
    description: "Project 1 description",
    image: "/images/screenshot (305).png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Simple Wallet",
    description: "Project 2 description",
    image: "/images/screenshot (307).png",
    tag: ["All", "Web", "Android"],
  },
];
const ProjectsSection = () => {
  return (
    <>
      <h2>Projects</h2>
      <div>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tag={project.tag}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
