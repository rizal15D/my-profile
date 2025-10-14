// app/components/SkillTags.tsx
"use client";
import React from "react";

export type SkillTagsProps = {
  items: string[];
  className?: string; // styling wrapper (gap, layout)
  itemClassName?: string; // styling tiap tag jika perlu override
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-3 py-1.5 text-sm",
  lg: "px-4 py-2 text-base",
};

export default function SkillTags({
  items,
  className = "",
  itemClassName = "",
  size = "md",
}: SkillTagsProps) {
  return (
    <div
      aria-label="Skill tags"
      className={`flex flex-wrap items-center gap-2 ${className}`}
    >
      {items.map((s) => (
        <span
          key={s}
          className={[
            // pill (kanan–kiri bulat)
            "inline-flex items-center rounded-full",
            // glassy chip
            "border border-white/15 bg-white/8 backdrop-blur-sm",
            // hover/focus
            "hover:bg-white/12 hover:border-white/25 transition",
            // text
            "text-slate-100",
            sizeMap[size],
            itemClassName,
          ].join(" ")}
        >
          {s}
        </span>
      ))}
    </div>
  );
}
