"use client";

import { useEffect, useSyncExternalStore } from "react";

import type { Locale } from "@/data/portfolio";

export type Theme = "light" | "dark";

const preferenceEvent = "portfolio-preference-change";

function subscribeToPreferences(callback: () => void) {
  const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");
  window.addEventListener("storage", callback);
  window.addEventListener(preferenceEvent, callback);
  colorScheme.addEventListener("change", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(preferenceEvent, callback);
    colorScheme.removeEventListener("change", callback);
  };
}

function getLocaleSnapshot(): Locale {
  return window.localStorage.getItem("portfolio-locale") === "en" ? "en" : "id";
}

function getThemeSnapshot(): Theme {
  const storedTheme = window.localStorage.getItem("portfolio-theme");
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function usePortfolioPreferences() {
  const locale = useSyncExternalStore<Locale>(
    subscribeToPreferences,
    getLocaleSnapshot,
    () => "id",
  );
  const theme = useSyncExternalStore<Theme>(
    subscribeToPreferences,
    getThemeSnapshot,
    () => "light",
  );

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [locale, theme]);

  function changeLocale(nextLocale: Locale) {
    window.localStorage.setItem("portfolio-locale", nextLocale);
    window.dispatchEvent(new Event(preferenceEvent));
  }

  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";
    window.localStorage.setItem("portfolio-theme", nextTheme);
    window.dispatchEvent(new Event(preferenceEvent));
  }

  return {
    locale,
    theme,
    changeLocale,
    toggleTheme,
  };
}
