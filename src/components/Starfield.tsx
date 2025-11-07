"use client";
import React, { useEffect, useRef } from "react";

/**
 * 🌌 Starfield Component
 * -----------------------
 * - Menggambar efek bintang berkelap-kelip pada <canvas>.
 * - Responsif dan otomatis menyesuaikan density sesuai ukuran layar.
 * - Dapat digunakan di mana saja dengan posisi absolute/fixed.
 *
 * Props opsional:
 * - `className`: untuk mengatur posisi atau z-index (mis. "absolute inset-0 z-0")
 * - `blur`: apakah bintang punya efek lembut / blur halus (default: true)
 * - `density`: multiplier jumlah bintang (default: 1)
 * - `color`: warna utama bintang (default: #fff)
 */

interface StarfieldProps {
  className?: string;
  blur?: boolean;
  density?: number;
  color?: string;
}

export default function Starfield({
  className = "absolute inset-0",
  blur = true,
  density = 1,
  color = "#ffffff",
}: StarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const fit = () => {
      const r = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      const parent = canvas.parentElement!;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      canvas.width = Math.floor(w * r);
      canvas.height = Math.floor(h * r);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(r, 0, 0, r, 0, 0);
    };
    fit();

    type Star = { x: number; y: number; r: number; p: number; tw: number };
    const stars: Star[] = [];

    const regen = () => {
      stars.length = 0;
      const w = canvas.parentElement!.clientWidth;
      const h = canvas.parentElement!.clientHeight;

      const baseDiv = w < 420 ? 12000 : w < 768 ? 10000 : 9000;
      const count = Math.max(
        40,
        Math.min(250, Math.floor((w * h) / baseDiv) * density)
      );

      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.3 + 0.4,
          p: Math.random() * Math.PI * 2,
          tw: prefersReduced ? 0 : 1.3 + Math.random() * 2.1,
        });
      }
    };
    regen();

    let tResize: any;
    const onResize = () => {
      clearTimeout(tResize);
      tResize = setTimeout(() => {
        fit();
        regen();
      }, 150);
    };

    const draw = (t: number) => {
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, w, h);

      for (const s of stars) {
        const a =
          s.tw === 0
            ? 0.7
            : 0.25 + 0.75 * (0.5 + 0.5 * Math.sin(s.p + (t / 1000) * s.tw));
        ctx.globalAlpha = a;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();

        if (blur) {
          ctx.globalAlpha = a * 0.35;
          ctx.fillStyle = Math.random() < 0.5 ? "#B3C7FF" : "#E7B3FF";
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    const onVis = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVis);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [blur, density, color]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
    />
  );
}
