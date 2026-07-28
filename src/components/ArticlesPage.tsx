"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  CalendarDays,
  Home,
  Search,
  Timer,
} from "lucide-react";

import { ArticleArtwork } from "@/components/ArticleArtwork";
import { ArticleHeader } from "@/components/ArticleHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { articles } from "@/data/articles";
import { usePortfolioPreferences } from "@/hooks/use-portfolio-preferences";

const pageCopy = {
  id: {
    eyebrow: "Engineering field notes",
    title: "Arsitektur yang kuat dimulai dari keputusan yang bisa dijelaskan.",
    body: "Panduan mendalam tentang CQRS dan kontrak backend–frontend, dirancang untuk membantu engineer memilih trade-off, menjaga integrasi, dan membangun sistem yang dapat berevolusi.",
    proof: "Berbasis publikasi akademik dan spesifikasi primer",
    collection: "Panduan pilihan",
    collectionBody:
      "Mulai dari masalah yang sedang Anda hadapi. Setiap artikel memuat jawaban singkat, diagram, contoh implementasi, checklist, FAQ, dan referensi yang dapat ditelusuri.",
    read: "Baca panduan",
    sources: "sumber",
    home: "Kembali ke beranda",
    footer: "Ditulis oleh Muhammad Rizal.",
  },
  en: {
    eyebrow: "Engineering field notes",
    title: "Strong architecture starts with decisions you can explain.",
    body: "In-depth guides to CQRS and backend–frontend contracts, designed to help engineers choose trade-offs, protect integrations, and build systems that can evolve.",
    proof: "Grounded in academic publications and primary specifications",
    collection: "Selected guides",
    collectionBody:
      "Start with the problem in front of you. Every article includes a short answer, diagram, implementation example, checklist, FAQ, and traceable references.",
    read: "Read guide",
    sources: "sources",
    home: "Back to home",
    footer: "Written by Muhammad Rizal.",
  },
} as const;

export default function ArticlesPage() {
  const preferences = usePortfolioPreferences();
  const { locale } = preferences;
  const t = pageCopy[locale];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ArticleHeader {...preferences} />

      <main>
        <section className="relative overflow-hidden border-b border-border py-16 sm:py-24">
          <div
            className="blue-ambient pointer-events-none absolute inset-0"
            aria-hidden="true"
          />
          <div
            className="hero-grid pointer-events-none absolute inset-0 opacity-50 dark:opacity-20"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-primary">
              {t.eyebrow}
            </p>
            <h1 className="max-w-5xl text-4xl font-bold leading-[1.06] tracking-[-0.035em] text-balance sm:text-6xl lg:text-7xl">
              {t.title}
            </h1>
            <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <p className="max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                {t.body}
              </p>
              <div className="inline-flex w-fit items-center gap-3 rounded-full border border-border bg-background/75 px-4 py-2.5 text-xs font-semibold text-muted-foreground shadow-sm backdrop-blur">
                <BookOpenText className="size-4 text-primary" />
                {t.proof}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-10 grid gap-4 border-b border-border pb-8 sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  {t.collection}
                </p>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                  {t.collectionBody}
                </p>
              </div>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <Search className="size-4 text-primary" />
                {String(articles.length).padStart(2, "0")} /{" "}
                {String(articles.length).padStart(2, "0")}
              </div>
            </div>

            <div className="grid gap-7 lg:grid-cols-2">
              {articles.map((article) => (
                <Card
                  key={article.slug}
                  className="group h-full overflow-hidden rounded-2xl transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <ArticleArtwork
                    theme={article.theme}
                    locale={locale}
                    className="border-b border-border"
                  />

                  <CardHeader className="grow p-6 sm:p-7">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge>{article.category[locale]}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {article.references.length} {t.sources}
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="size-3.5" />
                        {article.publishedLabel[locale]}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Timer className="size-3.5" />
                        {article.readingTime[locale]}
                      </span>
                    </div>

                    <CardTitle className="pt-3 text-2xl leading-tight tracking-[-0.02em] sm:text-3xl">
                      <Link
                        href={`/articles/${article.slug}`}
                        className="outline-none transition-colors hover:text-primary focus-visible:text-primary"
                      >
                        {article.title[locale]}
                      </Link>
                    </CardTitle>
                    <CardDescription className="pt-2 text-sm leading-7 sm:text-base">
                      {article.excerpt[locale]}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-6 pt-0 sm:p-7 sm:pt-0">
                    <div className="mb-6 flex flex-wrap gap-2">
                      {article.keywords.slice(0, 3).map((keyword) => (
                        <span
                          key={keyword}
                          className="rounded-full bg-muted px-3 py-1 text-[0.7rem] font-medium text-muted-foreground"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                    <Button
                      variant="link"
                      className="h-auto p-0 font-bold"
                      asChild
                    >
                      <Link href={`/articles/${article.slug}`}>
                        {t.read}
                        <ArrowRight className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t.footer}
          </p>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <Home />
              {t.home}
            </Link>
          </Button>
        </div>
      </footer>
    </div>
  );
}
