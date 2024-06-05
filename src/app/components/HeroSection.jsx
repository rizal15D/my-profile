"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Hello, I am {""}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Mamad",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "Backend Developer",
                1000,
                "Frontend Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              //   style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base mb-6 sm:text-lg lg:text-xl">
            I am a student at the Politeknik Elektronika Negeri Surabaya. I
            majored in Informatics Engineering. I am interested in the elds of
            Frontend, Mobile and Backend development. For studies, I have
            experience in Flutter Mobile, Software Quality Assurance, and served
            as Assistant Product Owner of Simple Wallet. I also have experience
            in Frontend and Backend development.
          </p>
          <div>
            <a
              href="https://www.linkedin.com/in/muhammadrizalgg/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
                Hire Me
              </button>
            </a>
            <a
              href="/documents/Muhammad Rizal_CV.pdf"
              download="Muhammad_Rizal_CV.pdf"
            >
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800  text-white mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/Removal-10-2.png"
              alt="hero"
              width={300}
              height={300}
              className="absolute transform scale-x-[-1] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
