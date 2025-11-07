"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Section from "@/components/Section";
import SkillTags from "@/components/SkillTags";
import Starfield from "@/components/Starfield";

export default function HeroSection2() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const skills = [
    "Next JS",
    "Laravel",
    "Django",
    "React.js",
    "React Native",
    "Node.js",
    "NestJS",
    "FastAPI",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Docker",
    "RabbitMQ",
    "Grafana",
    "Prometheus",
    "TypeScript",
    "Git",
  ];

  return (
    <Section
      id="hero"
      className="
        relative min-h-svh flex items-center justify-center
        px-4 sm:px-6 md:px-8
        bg-gradient-to-b from-[#0B0D17]/80 to-[#020617]/80
        backdrop-blur-md
        overflow-hidden
      "
    >
      {/* Starfield canvas */}
      <Starfield className="absolute inset-0 z-0" density={1.2} />

      {/* Glow besar: sembunyikan di mobile untuk performa */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden hidden sm:block">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-purple-500/15 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      {/* Content panel */}
      <div
        className="
          relative z-10 w-full
          max-w-7xl        
          rounded-2xl sm:rounded-3xl
          border border-white/10
          bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)]
          p-4 sm:p-6 md:p-8 lg:p-10
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-center">
          {/* Text */}
          <div className="md:col-span-7 text-center md:text-left">
            <h1
              className="
                text-white font-extrabold mb-3 sm:mb-4
                text-[clamp(1.875rem,4vw,2.5rem)]     /* ~30px–40px */
                sm:text-[clamp(2.25rem,4vw,3rem)]     /* ~36px–48px */
                lg:text-[clamp(2.5rem,3.5vw,3.75rem)] /* ~40px–60px */
              "
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Hello, I am Fullstack
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  "Software Developer",
                  1000,
                  "Backend Developer",
                  1000,
                  "Frontend Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>

            <p
              className="
                mx-auto md:mx-0
                max-w-prose
                text-[#ADB7BE]
                leading-relaxed
                text-[clamp(0.95rem,1.3vw,1.125rem)] /* ~15px–18px */
                [text-align:justify] [text-justify:inter-word]
                mb-5 sm:mb-6 lg:mb-7
              "
            >
              <strong className="font-bold text-slate-100">
                Fullstack Developer
              </strong>{" "}
              with professional experience across various
              <strong className="font-semibold text-slate-100"> web</strong> and
              <strong className="font-semibold text-slate-100">
                {" "}
                mobile
              </strong>{" "}
              projects, ranging from
              <strong className="font-semibold text-slate-100">
                {" "}
                AI-powered agriculture systems
              </strong>
              ,
              <strong className="font-semibold text-slate-100">
                {" "}
                e-voting platforms
              </strong>
              , to
              <strong className="font-semibold text-slate-100">
                {" "}
                enterprise ERP solutions
              </strong>
              . Skilled in building
              <strong className="font-semibold text-slate-100">
                {" "}
                multi-service architectures
              </strong>{" "}
              using
              <strong className="font-semibold text-slate-100">
                {" "}
                React.js
              </strong>
              ,
              <strong className="font-semibold text-slate-100">
                {" "}
                React Native
              </strong>
              ,
              <strong className="font-semibold text-slate-100"> Laravel</strong>
              ,<strong className="font-semibold text-slate-100"> Django</strong>
              , and
              <strong className="font-semibold text-slate-100"> Node.js</strong>
              , as well as managing
              <strong className="font-semibold text-slate-100">
                {" "}
                PostgreSQL
              </strong>{" "}
              and
              <strong className="font-semibold text-slate-100">
                {" "}
                MySQL
              </strong>{" "}
              databases. Experienced in roles as
              <strong className="font-semibold text-slate-100">
                {" "}
                Developer
              </strong>
              ,
              <strong className="font-semibold text-slate-100">
                {" "}
                Assistant Project Manager
              </strong>
              , and
              <strong className="font-semibold text-slate-100">
                {" "}
                Assistant Product Owner
              </strong>
              , with expertise in
              <strong className="font-semibold text-slate-100">
                {" "}
                debugging
              </strong>
              ,
              <strong className="font-semibold text-slate-100">
                {" "}
                API testing
              </strong>
              ,
              <strong className="font-semibold text-slate-100">
                {" "}
                automated deployment
              </strong>
              , and
              <strong className="font-semibold text-slate-100">
                {" "}
                system monitoring
              </strong>{" "}
              using
              <strong className="font-semibold text-slate-100">
                {" "}
                Grafana
              </strong>{" "}
              and
              <strong className="font-semibold text-slate-100">
                {" "}
                Prometheus
              </strong>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://www.linkedin.com/in/muhammadrizalgg/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="px-6 py-3 w-full sm:w-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:opacity-90 transition">
                  Hire Me
                </button>
              </a>
              <a
                href="https://pdfs.cake.me/r/s--00BFBXzKtb7T33-gMygMEQ--/Muhammad%20Rizal.pdf"
                download="Muhammad_Rizal_CV.pdf"
                className="inline-block"
              >
                <button className="px-1 py-1 w-full sm:w-auto rounded-full bg-white/10 hover:bg-white/15 border border-white/15 transition">
                  <span className="block rounded-full px-5 py-2 text-white">
                    Download CV
                  </span>
                </button>
              </a>
            </div>

            {/* Skill tags: center di mobile, kiri di md+ */}
            <div className="mt-5 sm:mt-6">
              <SkillTags
                items={skills}
                className="justify-center md:justify-start"
                size="md"
              />
            </div>
          </div>

          {/* Portrait */}
          <div className="md:col-span-5 place-self-center order-first md:order-none">
            <div
              className="
                relative overflow-hidden backdrop-blur-sm
                rounded-full border border-white/10
                w-[200px] h-[200px]
                sm:w-[240px] sm:h-[240px]
                lg:w-[360px] lg:h-[360px]
                mx-auto
              "
            >
              <Image
                src="/images/Removal-10-2.png"
                alt="hero"
                width={720}
                height={720}
                sizes="(max-width: 640px) 200px, (max-width: 1024px) 240px, 360px"
                className="absolute transform scale-x-[-1] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
