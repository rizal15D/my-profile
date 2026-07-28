"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenText,
  CalendarDays,
  Check,
  CircleAlert,
  ExternalLink,
  FileText,
  Lightbulb,
  List,
  RefreshCw,
  Timer,
  UserRound,
} from "lucide-react";

import { ArticleArtwork } from "@/components/ArticleArtwork";
import { ArticleHeader } from "@/components/ArticleHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  articles,
  type Article,
  type ArticleCallout,
} from "@/data/articles";
import { profile, type Locale } from "@/data/portfolio";
import { usePortfolioPreferences } from "@/hooks/use-portfolio-preferences";
import { cn } from "@/lib/utils";

const detailCopy = {
  id: {
    back: "Semua artikel",
    breadcrumbHome: "Beranda",
    breadcrumbArticles: "Artikel",
    author: "Muhammad Rizal",
    updated: "Diperbarui",
    answer: "Jawaban singkat",
    takeaways: "Yang akan Anda pelajari",
    toc: "Dalam artikel ini",
    faq: "Pertanyaan yang sering diajukan",
    references: "Referensi & bacaan lanjutan",
    referencesBody:
      "Klaim teknis utama dalam artikel ini dirangkum dari publikasi akademik dan spesifikasi primer berikut.",
    referenceCount: "sumber primer",
    openReference: "Buka sumber",
    next: "Lanjutkan membaca",
    more: "Baca artikel berikutnya",
    authorTitle: "Tentang penulis",
    authorBio:
      "Muhammad Rizal adalah Fullstack Software Developer yang membangun frontend, backend multi-service, API, deployment, dan observability untuk produk digital.",
    connect: "Terhubung di LinkedIn",
    footer: "Ditulis dan dibangun oleh Muhammad Rizal.",
    code: "Contoh kode",
    journal: "Jurnal",
    proceeding: "Prosiding",
    standard: "Spesifikasi",
    documentation: "Dokumentasi resmi",
    citedSource: "Lihat sumber",
  },
  en: {
    back: "All articles",
    breadcrumbHome: "Home",
    breadcrumbArticles: "Articles",
    author: "Muhammad Rizal",
    updated: "Updated",
    answer: "Short answer",
    takeaways: "What you will learn",
    toc: "In this article",
    faq: "Frequently asked questions",
    references: "References & further reading",
    referencesBody:
      "The core technical claims in this article are synthesized from the following academic publications and primary specifications.",
    referenceCount: "primary sources",
    openReference: "Open source",
    next: "Continue reading",
    more: "Read the next article",
    authorTitle: "About the author",
    authorBio:
      "Muhammad Rizal is a Fullstack Software Developer who builds frontend applications, multi-service backends, APIs, deployments, and observability for digital products.",
    connect: "Connect on LinkedIn",
    footer: "Written and built by Muhammad Rizal.",
    code: "Code example",
    journal: "Journal",
    proceeding: "Proceeding",
    standard: "Specification",
    documentation: "Official docs",
    citedSource: "View source",
  },
} as const;

const calloutStyles: Record<
  ArticleCallout["tone"],
  { wrapper: string; icon: string }
> = {
  info: {
    wrapper:
      "border-blue-200 bg-blue-50/80 dark:border-blue-900 dark:bg-blue-950/45",
    icon: "bg-blue-600 text-white dark:bg-blue-400 dark:text-blue-950",
  },
  warning: {
    wrapper:
      "border-amber-200 bg-amber-50/80 dark:border-amber-900 dark:bg-amber-950/35",
    icon: "bg-amber-500 text-white dark:bg-amber-400 dark:text-amber-950",
  },
  success: {
    wrapper:
      "border-emerald-200 bg-emerald-50/80 dark:border-emerald-900 dark:bg-emerald-950/35",
    icon:
      "bg-emerald-600 text-white dark:bg-emerald-400 dark:text-emerald-950",
  },
};

function CitationLinks({
  article,
  citations,
  locale,
}: {
  article: Article;
  citations?: ReadonlyArray<number>;
  locale: Locale;
}) {
  if (!citations?.length) {
    return null;
  }

  return (
    <span className="ml-1 inline-flex translate-y-[-0.15em] gap-1">
      {citations.map((citation) => {
        const reference = article.references[citation - 1];

        if (!reference) {
          return null;
        }

        return (
          <a
            key={citation}
            href={`#reference-${citation}`}
            aria-label={`${detailCopy[locale].citedSource}: ${reference.title}`}
            title={reference.title}
            className="rounded bg-primary/10 px-1.5 py-0.5 font-mono text-[0.65rem] font-bold text-primary no-underline transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {citation}
          </a>
        );
      })}
    </span>
  );
}

function Callout({
  callout,
  locale,
}: {
  callout: ArticleCallout;
  locale: Locale;
}) {
  const style = calloutStyles[callout.tone];
  const Icon =
    callout.tone === "warning"
      ? CircleAlert
      : callout.tone === "success"
        ? Check
        : Lightbulb;

  return (
    <aside
      className={cn(
        "mt-8 grid grid-cols-[2.5rem_1fr] gap-4 rounded-xl border p-5 sm:p-6",
        style.wrapper,
      )}
    >
      <span
        className={cn(
          "grid size-10 place-items-center rounded-lg",
          style.icon,
        )}
      >
        <Icon className="size-5" />
      </span>
      <div>
        <p className="font-bold text-foreground">
          {callout.title[locale]}
        </p>
        <p className="mt-1.5 text-sm leading-7 text-muted-foreground sm:text-base">
          {callout.text[locale]}
        </p>
      </div>
    </aside>
  );
}

export default function ArticleDetail({ article }: { article: Article }) {
  const preferences = usePortfolioPreferences();
  const { locale } = preferences;
  const t = detailCopy[locale];
  const currentIndex = articles.findIndex((item) => item.slug === article.slug);
  const nextArticle =
    articles.length > 1
      ? articles[(currentIndex + 1) % articles.length]
      : undefined;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ArticleHeader {...preferences} />

      <main>
        <article>
          <header className="relative overflow-hidden border-b border-border py-12 sm:py-20">
            <div
              className="blue-ambient pointer-events-none absolute inset-0"
              aria-hidden="true"
            />
            <div
              className="hero-grid pointer-events-none absolute inset-0 opacity-45 dark:opacity-20"
              aria-hidden="true"
            />

            <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(22rem,0.8fr)] lg:items-center">
              <div>
                <nav
                  aria-label="Breadcrumb"
                  className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
                >
                  <Link
                    href="/"
                    className="transition-colors hover:text-foreground"
                  >
                    {t.breadcrumbHome}
                  </Link>
                  <span aria-hidden="true">/</span>
                  <Link
                    href="/articles"
                    className="transition-colors hover:text-foreground"
                  >
                    {t.breadcrumbArticles}
                  </Link>
                  <span aria-hidden="true">/</span>
                  <span className="max-w-52 truncate text-foreground sm:max-w-sm">
                    {article.title[locale]}
                  </span>
                </nav>

                <Badge>{article.category[locale]}</Badge>
                <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-balance sm:text-6xl">
                  {article.title[locale]}
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  {article.excerpt[locale]}
                </p>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <UserRound className="size-4 text-primary" />
                    {t.author}
                  </span>
                  <time
                    dateTime={article.publishedAt}
                    className="inline-flex items-center gap-2"
                  >
                    <CalendarDays className="size-4 text-primary" />
                    {article.publishedLabel[locale]}
                  </time>
                  <span className="inline-flex items-center gap-2">
                    <Timer className="size-4 text-primary" />
                    {article.readingTime[locale]}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <BookOpenText className="size-4 text-primary" />
                    {article.references.length} {t.referenceCount}
                  </span>
                </div>
              </div>

              <ArticleArtwork
                theme={article.theme}
                locale={locale}
                variant="hero"
                className="shadow-2xl shadow-blue-950/15"
              />
            </div>
          </header>

          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[15rem_minmax(0,48rem)] lg:justify-center xl:gap-16">
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-foreground">
                  <List className="size-4 text-primary" />
                  {t.toc}
                </div>
                <nav aria-label={t.toc} className="mt-5">
                  <ol className="border-l border-border">
                    {article.sections.map((section, index) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="group grid grid-cols-[1.7rem_1fr] border-l-2 border-transparent py-2.5 pl-3 text-sm leading-5 text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                        >
                          <span className="font-mono text-[0.65rem] text-muted-foreground/70 group-hover:text-primary">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span>{section.heading[locale]}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>

                <div className="mt-8 rounded-lg border border-border bg-muted/45 p-4">
                  <p className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                    <RefreshCw className="size-3.5 text-primary" />
                    {t.updated}
                  </p>
                  <time
                    dateTime={article.modifiedAt}
                    className="mt-1 block text-sm font-bold"
                  >
                    {article.modifiedLabel[locale]}
                  </time>
                </div>
              </div>
            </aside>

            <div className="min-w-0">
              <section
                aria-labelledby="direct-answer-title"
                className="relative overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 dark:border-blue-900 dark:from-blue-950/70 dark:via-slate-950/40 dark:to-indigo-950/60 sm:p-8"
              >
                <div
                  className="absolute -right-12 -top-16 size-48 rounded-full bg-blue-400/15 blur-3xl"
                  aria-hidden="true"
                />
                <div className="relative">
                  <p
                    id="direct-answer-title"
                    className="text-xs font-bold uppercase tracking-[0.16em] text-primary"
                  >
                    {t.answer}
                  </p>
                  <p className="mt-4 text-lg font-medium leading-8 text-foreground sm:text-xl sm:leading-9">
                    {article.directAnswer[locale]}
                  </p>
                </div>
              </section>

              <section
                aria-labelledby="takeaways-title"
                className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
              >
                <h2
                  id="takeaways-title"
                  className="text-xl font-bold sm:text-2xl"
                >
                  {t.takeaways}
                </h2>
                <ul className="mt-5 space-y-4">
                  {article.takeaways.map((takeaway, index) => (
                    <li
                      key={takeaway.en}
                      className="grid grid-cols-[2rem_1fr] gap-3 text-sm leading-7 text-muted-foreground sm:text-base"
                    >
                      <span className="grid size-8 place-items-center rounded-full bg-primary/10 font-mono text-xs font-bold text-primary">
                        {index + 1}
                      </span>
                      <span>{takeaway[locale]}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <div className="mt-16 space-y-20">
                {article.sections.map((section, sectionIndex) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-24"
                  >
                    <div className="mb-6 flex items-start gap-4">
                      <span className="mt-1 font-mono text-xs font-bold text-primary">
                        {String(sectionIndex + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-2xl font-bold leading-tight tracking-[-0.02em] text-balance sm:text-3xl">
                        {section.heading[locale]}
                      </h2>
                    </div>

                    {section.paragraphs && (
                      <div className="space-y-5">
                        {section.paragraphs.map((paragraph, index) => (
                          <p
                            key={`${section.id}-paragraph-${index}`}
                            className="text-base leading-8 text-muted-foreground sm:text-lg"
                          >
                            {paragraph.text[locale]}
                            <CitationLinks
                              article={article}
                              citations={paragraph.citations}
                              locale={locale}
                            />
                          </p>
                        ))}
                      </div>
                    )}

                    {section.bullets && (
                      <ul className="mt-8 grid gap-3">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet.title.en}
                            className="grid grid-cols-[2.25rem_1fr] gap-4 rounded-xl border border-border bg-card p-4 sm:p-5"
                          >
                            <span className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary">
                              <Check className="size-4" />
                            </span>
                            <div>
                              <p className="font-bold text-foreground">
                                {bullet.title[locale]}
                              </p>
                              <p className="mt-1 text-sm leading-7 text-muted-foreground sm:text-base">
                                {bullet.text[locale]}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.steps && (
                      <ol className="relative mt-9 space-y-0 before:absolute before:bottom-5 before:left-[1.25rem] before:top-5 before:w-px before:bg-border">
                        {section.steps.map((step, index) => (
                          <li
                            key={step.title.en}
                            className="relative grid grid-cols-[2.5rem_1fr] gap-5 pb-8 last:pb-0"
                          >
                            <span className="z-10 grid size-10 place-items-center rounded-full border border-primary/25 bg-background font-mono text-xs font-bold text-primary shadow-sm">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <div className="pt-1.5">
                              <h3 className="font-bold text-foreground sm:text-lg">
                                {step.title[locale]}
                              </h3>
                              <p className="mt-1.5 text-sm leading-7 text-muted-foreground sm:text-base">
                                {step.text[locale]}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ol>
                    )}

                    {section.table && (
                      <div className="mt-9">
                        <p className="mb-3 text-sm font-semibold text-foreground">
                          {section.table.caption[locale]}
                        </p>
                        <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
                          <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
                            <thead className="bg-muted/70 text-foreground">
                              <tr>
                                {section.table.headers.map((header) => (
                                  <th
                                    key={header.en}
                                    scope="col"
                                    className="border-b border-border px-5 py-4 font-bold"
                                  >
                                    {header[locale]}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {section.table.rows.map((row, rowIndex) => (
                                <tr
                                  key={`${section.id}-row-${rowIndex}`}
                                  className="border-b border-border last:border-0"
                                >
                                  {row.map((cell, cellIndex) => (
                                    <td
                                      key={`${section.id}-cell-${rowIndex}-${cellIndex}`}
                                      className={cn(
                                        "px-5 py-4 align-top leading-6 text-muted-foreground",
                                        cellIndex === 0 &&
                                          "font-semibold text-foreground",
                                      )}
                                    >
                                      {cell[locale]}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {section.code && (
                      <figure className="mt-9 overflow-hidden rounded-xl border border-slate-700 bg-slate-950 shadow-xl shadow-slate-950/10">
                        <figcaption className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-white/[0.04] px-4 py-3 sm:px-5">
                          <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300">
                            <FileText className="size-3.5 text-blue-300" />
                            {section.code.filename}
                          </span>
                          <span className="rounded bg-white/5 px-2 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-slate-400">
                            {section.code.language}
                          </span>
                        </figcaption>
                        <div className="border-b border-white/5 px-4 py-2 text-xs text-slate-500 sm:px-5">
                          {section.code.label[locale] || t.code}
                        </div>
                        <pre className="overflow-x-auto p-5 text-[0.8rem] leading-7 text-slate-200 sm:p-6 sm:text-sm">
                          <code>{section.code.code}</code>
                        </pre>
                      </figure>
                    )}

                    {section.callout && (
                      <Callout callout={section.callout} locale={locale} />
                    )}
                  </section>
                ))}
              </div>

              <section
                id="faq"
                aria-labelledby="faq-title"
                className="mt-20 scroll-mt-24 border-t border-border pt-16"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  FAQ
                </p>
                <h2
                  id="faq-title"
                  className="mt-3 text-2xl font-bold tracking-[-0.02em] sm:text-3xl"
                >
                  {t.faq}
                </h2>
                <div className="mt-8 divide-y divide-border border-y border-border">
                  {article.faqs.map((faq) => (
                    <details key={faq.question.en} className="group py-1">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 font-bold outline-none transition-colors hover:text-primary focus-visible:text-primary">
                        <span>{faq.question[locale]}</span>
                        <span className="grid size-7 shrink-0 place-items-center rounded-full border border-border text-lg font-normal text-muted-foreground transition-transform group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="max-w-3xl pb-6 pr-10 text-sm leading-7 text-muted-foreground sm:text-base">
                        {faq.answer[locale]}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              <section
                id="references"
                aria-labelledby="references-title"
                className="mt-20 scroll-mt-24 rounded-2xl border border-border bg-muted/35 p-6 sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
                    <BookOpenText className="size-5" />
                  </span>
                  <div>
                    <h2
                      id="references-title"
                      className="text-2xl font-bold tracking-[-0.02em]"
                    >
                      {t.references}
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {t.referencesBody}
                    </p>
                  </div>
                </div>

                <ol className="mt-8 space-y-4">
                  {article.references.map((reference, index) => (
                    <li
                      key={reference.url}
                      id={`reference-${index + 1}`}
                      className="scroll-mt-24 rounded-xl border border-border bg-background p-4 sm:p-5"
                    >
                      <div className="grid grid-cols-[2rem_1fr] gap-3">
                        <span className="font-mono text-xs font-bold text-primary">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="min-w-0">
                          <div className="mb-2 flex flex-wrap items-center gap-2">
                            <Badge variant="secondary">
                              {t[reference.kind]}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {reference.year}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {reference.authors}
                          </p>
                          <a
                            href={reference.url}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-1.5 inline-flex items-start gap-2 font-bold leading-6 text-foreground transition-colors hover:text-primary"
                          >
                            <span>{reference.title}</span>
                            <ExternalLink className="mt-1 size-3.5 shrink-0" />
                          </a>
                          <p className="mt-1 text-xs italic text-muted-foreground">
                            {reference.publication}
                          </p>
                          <p className="mt-3 text-sm leading-6 text-muted-foreground">
                            {reference.note[locale]}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              <aside className="mt-12 grid gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                    {t.authorTitle}
                  </p>
                  <p className="mt-2 text-lg font-bold">{t.author}</p>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
                    {t.authorBio}
                  </p>
                </div>
                <Button variant="outline" asChild>
                  <Link
                    href={profile.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.connect}
                    <ExternalLink />
                  </Link>
                </Button>
              </aside>

              {nextArticle && (
                <aside className="blue-gradient relative mt-12 overflow-hidden rounded-2xl p-7 text-white sm:p-10">
                  <div
                    className="absolute -right-16 -top-20 size-56 rounded-full border border-white/10"
                    aria-hidden="true"
                  />
                  <div className="relative">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
                      {t.next}
                    </p>
                    <h2 className="mt-3 max-w-xl text-2xl font-bold leading-snug sm:text-3xl">
                      {nextArticle.title[locale]}
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-white/75">
                      {nextArticle.excerpt[locale]}
                    </p>
                    <Button
                      variant="outline"
                      className="mt-7 border-white bg-white text-neutral-950 hover:bg-neutral-100"
                      asChild
                    >
                      <Link href={`/articles/${nextArticle.slug}`}>
                        {t.more}
                        <ArrowRight />
                      </Link>
                    </Button>
                  </div>
                </aside>
              )}

              <Button variant="ghost" className="-ml-4 mt-10" asChild>
                <Link href="/articles">
                  <ArrowLeft />
                  {t.back}
                </Link>
              </Button>
            </div>
          </div>
        </article>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t.footer}
          </p>
          <Button variant="ghost" size="sm" asChild>
            <Link href={profile.linkedIn} target="_blank" rel="noreferrer">
              LinkedIn
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </footer>
    </div>
  );
}
