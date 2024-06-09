"use client";

import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "E-Vote",
    description: "Project 1 description",
    image: "/images/e-vote.png",
    tag: ["All", "Web"],
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Simple Wallet",
    description: "Project 2 description",
    image: "/images/simple_wallet.png",
    tag: ["All", "Web", "Android"],
    previewUrl: "https://simplewallet.agileteknik.com/",
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <>
      <h2 className="text-4xl font-bold text-white mb-4 text-center">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center item-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Android"
          isSelected={tag === "Android"}
        />
      </div>
      <div>
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tag={project.tag}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
