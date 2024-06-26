import React from "react";

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72"
        style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover" }}
      ></div>
      <div className="text-white rounded-b-xl bg--[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
