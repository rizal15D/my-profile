"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Section from "@/components/Section";

export default function HeroSection2() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;

    // handle DPR + resize
    const resize = () => {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      const { clientWidth: w, clientHeight: h } = canvas.parentElement!;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // generate stars
    type Star = { x: number; y: number; r: number; phase: number; tw: number };
    const stars: Star[] = [];
    const gen = () => {
      stars.length = 0;
      const { clientWidth: w, clientHeight: h } = canvas.parentElement!;
      const count = Math.floor((w * h) / 9000); // density
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.3 + 0.4, // radius 0.4–1.7
          phase: Math.random() * Math.PI * 2, // start phase
          tw: 1.5 + Math.random() * 2.2, // twinkle speed
        });
      }
    };
    gen();

    // re-gen on resize (debounced)
    let tResize: any;
    const onResize = () => {
      clearTimeout(tResize);
      tResize = setTimeout(() => {
        resize();
        gen();
      }, 150);
    };
    window.addEventListener("resize", onResize);

    // animate
    const render = (t: number) => {
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, w, h);

      // subtle vignette (opsional)
      const grd = ctx.createRadialGradient(
        w / 2,
        h / 2,
        0,
        w / 2,
        h / 2,
        Math.max(w, h) / 1.2
      );
      grd.addColorStop(0, "rgba(255,255,255,0)");
      grd.addColorStop(1, "rgba(0,0,0,0.15)");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);

      for (const s of stars) {
        const a =
          0.25 + 0.75 * (0.5 + 0.5 * Math.sin(s.phase + (t / 1000) * s.tw)); // 0.25–1
        ctx.globalAlpha = a;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();

        // tiny color shift (super halus): biru/ungu sangat samar
        ctx.globalAlpha = a * 0.35;
        ctx.fillStyle = Math.random() < 0.5 ? "#B3C7FF" : "#E7B3FF";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 0.8, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1.0;
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <Section
      id="hero"
      className="
        relative min-h-screen flex items-center justify-center
        px-6 sm:px-12
        bg-gradient-to-b from-[#0B0D17]/80 to-[#020617]/80
        backdrop-blur-md
        overflow-hidden
      "
    >
      {/* Starfield canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      />

      {/* decorative glow (opsional) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-purple-500/15 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      {/* Content panel */}
      <div
        className="
          container mx-auto grid grid-cols-1 sm:grid-cols-12 gap-8
          relative z-10
          rounded-3xl border border-white/10
          bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)]
          p-6 sm:p-10
        "
      >
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
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

          <p className="text-[#ADB7BE] text-base mb-6 sm:text-lg lg:text-xl leading-relaxed [text-align:justify] [text-justify:inter-word]">
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
            <strong className="font-semibold text-slate-100"> React.js</strong>,
            <strong className="font-semibold text-slate-100">
              {" "}
              React Native
            </strong>
            ,<strong className="font-semibold text-slate-100"> Laravel</strong>,
            <strong className="font-semibold text-slate-100"> Django</strong>,
            and
            <strong className="font-semibold text-slate-100"> Node.js</strong>,
            as well as managing
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
            <strong className="font-semibold text-slate-100"> Developer</strong>
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
            <strong className="font-semibold text-slate-100"> debugging</strong>
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

          <div className="flex flex-col sm:flex-row gap-3">
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
              href="/documents/Muhammad Rizal_cv.pdf"
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
        </div>

        <div className="col-span-5 place-self-center">
          <div className="relative rounded-full bg-white/5 border border-white/10 w-[260px] h-[260px] lg:w-[420px] lg:h-[420px] overflow-hidden backdrop-blur-sm">
            <Image
              src="/images/Removal-10-2.png"
              alt="hero"
              width={420}
              height={420}
              className="absolute transform scale-x-[-1] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              priority
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
