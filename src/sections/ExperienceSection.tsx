"use client";
import React, { useRef } from "react";
import Section from "@/components/Section";
import Box from "@/components/Box";
import Starfield from "@/components/Starfield";

export default function ExperienceSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const experiences = [
    {
      role: "Fullstack Developer",
      company: "Wijoyo Dev",
      date: "Apr 2025 – Present",
      desc: "Debugged and optimized React.js & React Native apps for 1,500+ users. Refactored Express.js backend, implemented Node.js caching, managed MySQL, automated deployments, and monitored system uptime via Grafana & Prometheus.",
    },
    {
      role: "Fullstack Developer",
      company: "Final Project – PENS",
      date: "Jan 2024 – Aug 2025",
      desc: "Built AI-powered agriculture platform with interactive maps, dashboards, and LLM chatbot. Integrated YOLOv8 detection with OpenStreetMap and FastAPI services; deployed to Ubuntu VPS with JWT authentication.",
    },
    {
      role: "Django Developer (Intern)",
      company: "CV Sejahtera Mandiri Solusindo",
      date: "Sep 2024 – Jan 2025",
      desc: "Developed ERP system with Django & PostgreSQL. Implemented Redis caching, CRUD APIs, and responsive UI using jQuery. Applied microservices architecture and GitHub for version control.",
    },
    {
      role: "Fullstack Developer",
      company: "Jagapadi",
      date: "Aug 2024 – Nov 2024",
      desc: "Developed research system integrating Laravel, FastAPI, and Next.js. Managed PostgreSQL for field data, added drone data visualization, and deployed app to VPS using GitLab CI/CD.",
    },
    {
      role: "Fullstack Developer (Intern)",
      company: "CV Sejahtera Mandiri Solusindo",
      date: "May 2024 – Aug 2024",
      desc: "Served as Assistant Project Manager. Built Express.js APIs, PostgreSQL databases, and frontend using Next.js & TypeScript. App adopted by 8 divisions for digitalizing faculty processes.",
    },
    {
      role: "Backend Developer (Intern)",
      company: "CV Sejahtera Mandiri Solusindo",
      date: "Dec 2023 – May 2024",
      desc: "Developed backend using Express.js and PostgreSQL. Deployed apps to Windows Server, ensuring system stability in production. Coordinated development workflow as Assistant Project Manager.",
    },
    {
      role: "Assistant Product Owner",
      company: "Agile Teknik",
      date: "Feb 2023 – Nov 2023",
      desc: "Coordinated Simple Wallet team, acted as SQA for bug testing & documentation, supported Flutter developers, and contributed to Laravel backend integration.",
    },
    {
      role: "Steering Committee",
      company: "Department Orientation – PENS",
      date: "Jun 2022 – Jan 2023",
      desc: "Led 100+ committee members in organizing Informatics Department orientation and student data collection for 125+ participants.",
    },
    {
      role: "Frontend Developer",
      company: "E-Code",
      date: "Dec 2021 – May 2023",
      desc: "Built e-voting system using Laravel for Informatics Student Association elections, used by 500+ participants with secure and transparent results.",
    },
  ];

  return (
    <Section
      id="experience"
      className="relative flex items-center justify-center min-h-svh px-4 sm:px-6 md:px-8 overflow-hidden"
    >
      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-[#030014]" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/30 rounded-full blur-[160px]" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-pink-500/30 rounded-full blur-[180px]" />
        <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-indigo-700/40 rounded-full blur-[160px]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00000066] to-[#000000aa]" />
      <Starfield className="absolute inset-0 z-0" density={1.2} />

      {/* 🌟 Main Content */}
      <div className="relative z-10 w-full max-w-6xl border border-white/10 rounded-2xl bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.25)] p-6 sm:p-8 md:p-10">
        <div className="text-center mb-12 pt-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Experience
          </h2>
          <p className="text-slate-300 mt-2">
            My professional journey (2021 → 2025)
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2">
            <div className="absolute inset-y-0 w-[2px] bg-gradient-to-b from-transparent via-white/40 to-transparent animate-pulse" />
          </div>

          <div className="flex flex-col gap-16 md:gap-20">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`flex flex-col md:flex-row ${
                    isLeft
                      ? "md:justify-end md:pr-8"
                      : "md:justify-start md:pl-8"
                  } items-start md:items-center`}
                >
                  <div
                    className={`hidden md:block absolute left-1/2 w-4 h-4 rounded-full border-2 border-white bg-slate-900 -translate-x-1/2 ${
                      isLeft ? "-translate-y-6" : "translate-y-6"
                    }`}
                  ></div>

                  <Box
                    width="w-full md:w-[360px]"
                    height="h-auto"
                    className="transition-all duration-300 hover:scale-[1.02] hover:shadow-xl bg-white/10 border-white/15 text-white p-4"
                  >
                    <ul className="list-none space-y-1">
                      <li className="text-lg font-semibold text-white">
                        {exp.role}
                      </li>
                      <li className="text-slate-300">{exp.company}</li>
                      <li className="text-slate-400 text-sm">{exp.date}</li>
                      <li className="text-slate-400 text-sm mt-2 leading-relaxed">
                        {exp.desc}
                      </li>
                    </ul>
                  </Box>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
