"use client";

import Link from "next/link";
import { ArrowLeft, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { copy, type Locale, profile } from "@/data/portfolio";
import type { Theme } from "@/hooks/use-portfolio-preferences";
import { cn } from "@/lib/utils";

type ArticleHeaderProps = {
  locale: Locale;
  theme: Theme;
  changeLocale: (locale: Locale) => void;
  toggleTheme: () => void;
};

export function ArticleHeader({
  locale,
  theme,
  changeLocale,
  toggleTheme,
}: ArticleHeaderProps) {
  const labels = {
    id: {
      home: "Kembali ke portfolio",
      articles: "Artikel",
    },
    en: {
      home: "Back to portfolio",
      articles: "Articles",
    },
  } as const;

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <div className="flex min-w-0 items-center gap-5">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span className="blue-gradient grid size-8 place-items-center rounded-sm text-sm font-bold text-white">
              {profile.names[locale].charAt(0)}
            </span>
            <span className="hidden text-sm font-bold sm:inline">
              {profile.names[locale]}
            </span>
          </Link>
          <span className="hidden h-5 w-px bg-border sm:block" />
          <Link
            href="/articles"
            className="truncate text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            {labels[locale].articles}
          </Link>
        </div>

        <div className="flex items-center gap-1.5">
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:inline-flex"
            asChild
          >
            <Link href="/">
              <ArrowLeft />
              {labels[locale].home}
            </Link>
          </Button>

          <div
            className="flex h-9 items-center rounded-md border border-border bg-muted p-0.5"
            aria-label={copy[locale].language}
            role="group"
          >
            {(["id", "en"] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => changeLocale(item)}
                aria-pressed={locale === item}
                className={cn(
                  "h-7 min-w-9 rounded-sm px-2 text-xs font-bold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring",
                  locale === item
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {copy[item].localeName}
              </button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            title={copy[locale].theme}
            aria-label={copy[locale].theme}
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </Button>
        </div>
      </div>
    </header>
  );
}
