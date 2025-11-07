"use client";
import React from "react";

export type BoxProps = {
  /** Isi bebas di dalam box */
  children?: React.ReactNode;
  /** Tambahan class Tailwind opsional untuk box */
  className?: string;
  /** Tambahan class untuk isi dalam box */
  contentClassName?: string;
  /** Ukuran padding & font */
  size?: "sm" | "md" | "lg";
  /** Atur lebar manual (contoh: "w-80" atau "min-w-[320px]") */
  width?: string;
  /** Atur tinggi manual (contoh: "h-40" atau "min-h-[120px]") */
  height?: string;
};

// Map ukuran padding + font agar prop `size` tetap bisa dipakai
const sizeMap = {
  sm: "p-3 text-sm",
  md: "p-5 text-base",
  lg: "p-7 text-lg",
};

/**
 * Komponen Box sederhana berwarna putih.
 * ------------------------------------------------
 * - Bisa diatur manual width & height-nya.
 * - `size` hanya berpengaruh pada padding & ukuran teks.
 * - Warna putih dengan border lembut & shadow ringan.
 */
export default function Box({
  children,
  className = "",
  contentClassName = "",
  size = "md",
  width = "w-auto",
  height = "h-auto",
}: BoxProps) {
  return (
    <div
      className={[
        // warna & bentuk dasar
        "bg-white rounded-md border border-slate-200 shadow-sm",
        // layout fleksibel agar isi di tengah vertikal
        "flex flex-col justify-center box-border",
        // ukuran manual
        width,
        height,
        // padding & font berdasarkan size
        sizeMap[size],
        className,
      ].join(" ")}
    >
      <div className={["text-slate-800", contentClassName].join(" ")}>
        {children}
      </div>
    </div>
  );
}
