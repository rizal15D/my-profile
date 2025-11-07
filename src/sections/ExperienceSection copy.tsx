"use client";
import React from "react";
import Section from "@/components/Section";
import Box from "@/components/Box";

/**
 * Improved ExperienceSection
 *
 * - Lebih rapi: heading, subtext, CTA (Download CV / LinkedIn)
 * - Responsive: two-column feel on wide screens but simple stacked on small screens
 * - Visual: subtle background glow, darker center line, short ticks, hover effect on Box
 * - Accessible: semantic heading, aria-labels for timeline region
 *
 * Requirements:
 * - Parent <Section> must render a container with `position: relative` (Section biasanya sudah).
 * - Komponen Box harus mendukung prop `anchorOffset` + `top`.
 */

export default function ExperienceSection() {
  return (
    <Section
      id="experience"
      // minimal styling here; Section may already add padding / layout in your project
      className="relative py-12 md:py-20"
    >
      {/* subtle background glow to lift the panel */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-56 h-56 rounded-full bg-sky-200/8 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 w-72 h-72 rounded-full bg-pink-200/6 blur-3xl" />
      </div>

      {/* Header: title + description + CTAs */}
      <header className="max-w-7xl mx-auto px-6 md:px-8 mb-6 md:mb-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Experience
            </h2>
          </div>
        </div>
      </header>
      <div className="h-[100px] bg-amber-400 w-[100px] grid grid-cols-2 gap-10 p-10  min-h-screen relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-300" />
        {/* Box di kiri */}
        <div className="flex justify-start w-full">
          <Box size="md">
            <p>Box di kiri</p>
          </Box>
        </div>

        <Box size="md" className="absolute top-[20%] right-[55%]">
          <p>Ini adalah box putih sederhana dengan isi bebasses.</p>
        </Box>
        <Box
          className="absolute top-[100%] left-[55%]" // 👈 ini juga digeser manual
        >
          <div className="font-semibold">Assistant Project Manager</div>
          <div className="text-sm text-gray-600">GovTech — 2021–2022</div>
        </Box>
      </div>
    </Section>
  );
}
