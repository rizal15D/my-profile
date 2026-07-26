"use client";

import Image from "next/image";
import { useEffect, useMemo, useSyncExternalStore } from "react";
import {
  ArrowDownToLine,
  ArrowUp,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Contact,
  Layers3,
  Menu,
  Moon,
  ServerCog,
  Sun,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  copy,
  experiences,
  type Locale,
  profile,
  projects,
  services,
  skillGroups,
} from "@/data/portfolio";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

const navIds = ["work", "services", "experience", "skills", "about"] as const;

const serviceIcons = [Layers3, ServerCog, BriefcaseBusiness] as const;
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

function SectionIntro({
  eyebrow,
  title,
  body,
  inverse = false,
}: {
  eyebrow: string;
  title: string;
  body: string;
  inverse?: boolean;
}) {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
      <div>
        <p
          className={cn(
            "mb-3 text-xs font-bold uppercase tracking-[0.16em]",
            inverse ? "text-teal-300" : "text-primary",
          )}
        >
          {eyebrow}
        </p>
        <h2
          className={cn(
            "max-w-2xl text-3xl font-bold leading-tight sm:text-4xl",
            inverse && "text-white",
          )}
        >
          {title}
        </h2>
      </div>
      <p
        className={cn(
          "max-w-2xl text-base leading-7",
          inverse ? "text-neutral-300" : "text-muted-foreground",
        )}
      >
        {body}
      </p>
    </div>
  );
}

export default function Portfolio() {
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

  const t = copy[locale];
  const navItems = useMemo(
    () =>
      navIds.map((id) => ({
        id,
        label: t.nav[id],
      })),
    [t],
  );

  function changeLocale(nextLocale: Locale) {
    window.localStorage.setItem("portfolio-locale", nextLocale);
    window.dispatchEvent(new Event(preferenceEvent));
  }

  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";
    window.localStorage.setItem("portfolio-theme", nextTheme);
    window.dispatchEvent(new Event(preferenceEvent));
  }

  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a
            href="#top"
            className="flex items-center gap-3 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span className="grid size-8 place-items-center rounded-sm bg-foreground text-sm font-bold text-background">
              {profile.names[locale].charAt(0)}
            </span>
            <span className="text-sm font-bold">{profile.names[locale]}</span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navItems.map((item) => (
              <Button key={item.id} variant="ghost" size="sm" asChild>
                <a href={`#${item.id}`}>{item.label}</a>
              </Button>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <div
              className="flex h-9 items-center rounded-md border border-border bg-muted p-0.5"
              aria-label={t.language}
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
              title={t.theme}
              aria-label={t.theme}
            >
              {theme === "light" ? <Moon /> : <Sun />}
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="lg:hidden"
                  aria-label={t.menu}
                  title={t.menu}
                >
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetTitle>{profile.names[locale]}</SheetTitle>
                <nav
                  className="mt-8 flex flex-col gap-1"
                  aria-label="Mobile primary"
                >
                  {navItems.map((item) => (
                    <SheetClose key={item.id} asChild>
                      <a
                        href={`#${item.id}`}
                        className="rounded-md px-3 py-3 text-lg font-semibold outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {item.label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto grid gap-3">
                  <Button size="lg" asChild>
                    <a
                      href={profile.linkedIn}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Contact />
                      {t.contact}
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href={profile.cv} download>
                      <ArrowDownToLine />
                      {t.downloadCv}
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative flex min-h-[calc(100svh-5rem)] items-center border-b border-border pt-28 pb-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-20"
            aria-hidden="true"
          >
            <div className="hero-grid absolute inset-0" />
          </div>

          <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <Badge
                variant="outline"
                className="mb-6 border-primary/30 bg-primary/5 px-3 py-1.5 text-primary"
              >
                <span className="size-2 rounded-full bg-emerald-500" />
                {t.availability}
              </Badge>

              <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-muted-foreground">
                {t.role}
              </p>
              <h1 className="max-w-4xl text-6xl font-bold leading-[0.95] text-balance sm:text-7xl lg:text-[6.75rem]">
                {t.headline}
                <span className="text-primary">.</span>
              </h1>
              <p className="mt-6 max-w-3xl text-2xl font-semibold leading-tight sm:text-3xl">
                {t.heroLead}
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                {t.heroBody}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <a
                    href={profile.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Contact />
                    {t.contact}
                    <ArrowUpRight />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={profile.cv} download>
                    <ArrowDownToLine />
                    {t.downloadCv}
                  </a>
                </Button>
              </div>

              <dl className="mt-10 grid max-w-2xl grid-cols-3 border-y border-border">
                {t.proof.map((item, index) => (
                  <div
                    key={item.label}
                    className={cn(
                      "py-4 pr-3",
                      index > 0 && "border-l border-border pl-4",
                    )}
                  >
                    <dt className="text-xl font-bold sm:text-2xl">
                      {item.value}
                    </dt>
                    <dd className="mt-1 text-xs leading-5 text-muted-foreground sm:text-sm">
                      {item.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
              <div
                className="absolute -left-4 top-8 h-[calc(100%-4rem)] w-full rounded-sm bg-primary"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border bg-[#dce5e2] dark:bg-[#1c2926]">
                <Image
                  src={profile.portrait}
                  alt={t.portraitAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 28rem, 32vw"
                  className="object-contain object-bottom"
                />
              </div>
              <div className="absolute -right-3 bottom-6 border border-border bg-background px-4 py-3 shadow-lg">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  Surabaya, Indonesia
                </p>
                <p className="mt-1 font-semibold">{t.role}</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="work"
          className="scroll-mt-16 border-b border-border bg-muted/45 py-24"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionIntro
              eyebrow={t.workEyebrow}
              title={t.workTitle}
              body={t.workBody}
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {projects.map((project) => (
                <Card key={project.title.en} className="overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-muted">
                    <Image
                      src={project.image}
                      alt={project.title[locale]}
                      fill
                      loading="eager"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 hover:scale-[1.015]"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <Badge key={technology} variant="secondary">
                          {technology}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="pt-3 text-2xl">
                      {project.title[locale]}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {project.description[locale]}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                        {t.roleLabel}
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-6">
                        {project.role[locale]}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                        {t.outcomeLabel}
                      </p>
                      <p className="mt-2 text-sm leading-6">
                        {project.outcome[locale]}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-16 border-b border-border py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionIntro
              eyebrow={t.servicesEyebrow}
              title={t.servicesTitle}
              body={t.servicesBody}
            />

            <div className="mt-12 grid border-y border-border md:grid-cols-3">
              {services.map((service, index) => {
                const Icon = serviceIcons[index] ?? Code2;

                return (
                  <article
                    key={service.number}
                    className={cn(
                      "group px-1 py-8 md:px-7",
                      index > 0 && "border-t border-border md:border-t-0 md:border-l",
                    )}
                  >
                    <div className="mb-10 flex items-center justify-between">
                      <span className="font-mono text-sm text-muted-foreground">
                        {service.number}
                      </span>
                      <span className="grid size-10 place-items-center rounded-sm bg-muted text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="size-5" />
                      </span>
                    </div>
                    <h3 className="text-xl font-bold">
                      {service.title[locale]}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {service.description[locale]}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="scroll-mt-16 bg-[#151918] py-24 text-white"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionIntro
              eyebrow={t.experienceEyebrow}
              title={t.experienceTitle}
              body={t.experienceBody}
              inverse
            />

            <Tabs defaultValue="summary" className="mt-12">
              <TabsList className="bg-white/10 text-neutral-300">
                <TabsTrigger
                  value="summary"
                  className="data-[state=active]:bg-white data-[state=active]:text-neutral-950"
                >
                  {t.experienceSummary}
                </TabsTrigger>
                <TabsTrigger
                  value="details"
                  className="data-[state=active]:bg-white data-[state=active]:text-neutral-950"
                >
                  {t.experienceDetails}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="summary" className="mt-5">
                <p className="mb-5 text-sm text-neutral-400">
                  {t.experienceSummaryHint}
                </p>
                <div className="border-t border-white/15">
                  {experiences.map((experience, index) => (
                    <article
                      key={`${experience.company}-${experience.date.en}`}
                      className="grid gap-4 border-b border-white/15 py-8 md:grid-cols-[3rem_1fr_1fr] md:gap-8"
                    >
                      <span className="font-mono text-xs text-neutral-500">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold">{experience.role}</h3>
                        <p className="mt-1 text-sm text-teal-300">
                          {experience.company}
                        </p>
                        <p className="mt-2 text-sm text-neutral-400">
                          {experience.date[locale]}
                        </p>
                      </div>
                      <p className="text-sm leading-7 text-neutral-300">
                        {experience.description[locale]}
                      </p>
                    </article>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="details" className="mt-5">
                <p className="mb-5 text-sm text-neutral-400">
                  {t.experienceDetailsHint}
                </p>
                <div className="border-t border-white/15">
                  {experiences.map((experience, index) => (
                    <article
                      key={`${experience.company}-${experience.date.en}-details`}
                      className="grid gap-5 border-b border-white/15 py-9 md:grid-cols-[3rem_0.7fr_1.3fr] md:gap-8"
                    >
                      <span className="font-mono text-xs text-neutral-500">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold">{experience.role}</h3>
                        <p className="mt-1 text-sm text-teal-300">
                          {experience.company}
                        </p>
                        <p className="mt-2 text-sm text-neutral-400">
                          {experience.date[locale]}
                        </p>
                        <p className="mt-1 text-xs text-neutral-500">
                          {experience.location}
                        </p>
                      </div>
                      <ul className="space-y-3">
                        {experience.details[locale].map((detail) => (
                          <li
                            key={detail}
                            className="grid grid-cols-[0.5rem_1fr] gap-3 text-sm leading-7 text-neutral-300"
                          >
                            <span className="mt-3 size-1.5 rounded-full bg-teal-300" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="skills" className="scroll-mt-16 border-b border-border py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionIntro
              eyebrow={t.skillsEyebrow}
              title={t.skillsTitle}
              body={t.skillsBody}
            />

            <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {skillGroups.map((group) => (
                <div key={group.title.en} className="bg-background p-6">
                  <h3 className="min-h-12 text-base font-bold">
                    {group.title[locale]}
                  </h3>
                  <Separator className="my-5" />
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                      >
                        <span className="size-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-16 border-b border-border bg-muted/45 py-24"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                {t.aboutEyebrow}
              </p>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                {t.aboutTitle}
              </h2>
            </div>

            <div>
              <p className="text-xl font-medium leading-8">{t.aboutBody}</p>
              <dl className="mt-10 grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    {t.educationLabel}
                  </dt>
                  <dd className="mt-3 text-sm leading-6">{t.education}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    {t.collaborationLabel}
                  </dt>
                  <dd className="mt-3 text-sm leading-6">
                    {t.collaboration}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="bg-primary py-24 text-primary-foreground">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground/70">
                {t.contactEyebrow}
              </p>
              <h2 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
                {t.contactTitle}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-primary-foreground/80">
                {t.contactBody}
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-white text-neutral-950 hover:bg-neutral-100"
                asChild
              >
                <a
                  href={profile.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Contact />
                  {t.contactLinkedIn}
                  <ArrowUpRight />
                </a>
              </Button>
              <p className="max-w-sm text-sm text-primary-foreground/65 lg:text-right">
                {t.contactNote}
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t.footer}
          </p>
          <Button variant="ghost" size="sm" asChild>
            <a href="#top">
              {t.backToTop}
              <ArrowUp />
            </a>
          </Button>
        </div>
      </footer>
    </div>
  );
}
