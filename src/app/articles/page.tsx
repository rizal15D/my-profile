import type { Metadata } from "next";

import ArticlesPage from "@/components/ArticlesPage";
import { articles } from "@/data/articles";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Artikel CQRS & API Contract",
  description:
    "Panduan mendalam berbahasa Indonesia tentang CQRS dan kontrak backend–frontend, lengkap dengan diagram, contoh, checklist, FAQ, dan referensi akademik.",
  keywords: [
    "CQRS",
    "kontrak backend frontend",
    "API contract",
    "OpenAPI",
    "software architecture",
    "contract testing",
  ],
  alternates: {
    canonical: "/articles",
  },
  openGraph: {
    title: "Artikel CQRS & API Contract | Muhammad Rizal",
    description:
      "Panduan software architecture berbasis publikasi akademik, dilengkapi diagram, contoh, checklist, dan FAQ.",
    type: "website",
    url: "/articles",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artikel CQRS & API Contract | Muhammad Rizal",
    description:
      "Panduan software architecture berbasis publikasi akademik dan spesifikasi primer.",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": absoluteUrl("/articles#blog"),
    url: absoluteUrl("/articles"),
    name: "Artikel Engineering Muhammad Rizal",
    description:
      "Panduan tentang CQRS, API contract, dan integrasi backend–frontend.",
    inLanguage: "id-ID",
    author: {
      "@type": "Person",
      name: "Muhammad Rizal",
      url: absoluteUrl("/"),
    },
    blogPost: articles.map((article) => ({
      "@type": "TechArticle",
      headline: article.title.id,
      description: article.seoDescription.id,
      datePublished: article.publishedAt,
      dateModified: article.modifiedAt,
      url: absoluteUrl(`/articles/${article.slug}`),
      keywords: article.keywords.join(", "),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ArticlesPage />
    </>
  );
}
