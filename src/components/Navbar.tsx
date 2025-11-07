"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [{ title: "Experiences", href: "#experience" }];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav
      className="
        fixed inset-x-0 top-0 z-50
        bg-white/60 backdrop-blur-md
        supports-[backdrop-filter]:bg-white/40
        dark:bg-black/30 dark:supports-[backdrop-filter]:bg-black/20
        border-b border-black/5 dark:border-white/10
        shadow-sm
      "
      aria-label="Main Navigation"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 md:h-16 items-center justify-between">
          {/* Brand / Logo */}
          <Link
            href="#hero"
            className="text-lg md:text-2xl font-semibold tracking-tight text-slate-800 dark:text-slate-100"
          >
            Muhammad Rizal
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setNavbarOpen((s) => !s)}
              aria-label="Toggle menu"
              aria-expanded={navbarOpen}
              className="
                inline-flex items-center justify-center
                rounded-lg border border-slate-300/40 dark:border-white/10
                px-3 py-2
                text-slate-700 dark:text-slate-200
                hover:bg-white/40 hover:dark:bg-white/10
                transition
              "
            >
              {navbarOpen ? (
                <XMarkIcon className="h-5 w-5" />
              ) : (
                <Bars3Icon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <NavLink href={link.href} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile overlay menu */}
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
