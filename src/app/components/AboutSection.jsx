"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TabData = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Next.js</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>VSCode</li>
        <li>PHP</li>
        <li>Laravel</li>
        <li>MySQL</li>
        <li>PosgreSQL</li>{" "}
      </ul>
    ),
  },
  {
    title: "Educations",
    id: "educations",
    content: (
      <ul className="list-disc pl-2">
        <li>D4 Computer Science of Politeknik Elektronika Negeri Surabaya</li>
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2">
        <li>Frontend E-Vote for HIMA</li>
        <li>Assisten Product Owner of Simple Wallet</li>
        <li>Backend Mail Sistem of Facult Univ</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <div className="h-full">
          {" "}
          <Image
            src={
              "/images/3d-style-cartoon-of-a-monitor-and-keyboard-vivid-colors-stands-out-against-a-clear-black-backgroun-690773638.jpeg"
            }
            width={500}
            height={500}
            alt="About-image"
            //   className="h-full"
          />
        </div>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            sint repellat natus, tempore ducimus sed! Numquam voluptas animi
            quo, similique odit qui, quibusdam libero incidunt ipsum ea nemo
            aperiam pariatur, doloremque dignissimos facilis quisquam soluta
            voluptatum ex sunt. Atque modi officia eos, minima placeat odit
            laboriosam voluptatem aliquam. Modi, blanditiis.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("educations")}
              active={tab === "educations"}
            >
              Educations{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experiences")}
              active={tab === "experiences"}
            >
              Experiences{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TabData.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
