import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ArticleDetail from "@/components/ArticleDetail";
import { articles, getArticleBySlug, type Article } from "@/data/articles";
import { absoluteUrl } from "@/lib/site";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getArticleWordCount(article: Article) {
  const text = [
    article.title.id,
    article.excerpt.id,
    article.directAnswer.id,
    ...article.takeaways.map((takeaway) => takeaway.id),
    ...article.sections.flatMap((section) => [
      section.heading.id,
      ...(section.paragraphs?.map((paragraph) => paragraph.text.id) ?? []),
      ...(section.bullets?.flatMap((bullet) => [
        bullet.title.id,
        bullet.text.id,
      ]) ?? []),
      ...(section.steps?.flatMap((step) => [step.title.id, step.text.id]) ??
        []),
      ...(section.table
        ? [
            section.table.caption.id,
            ...section.table.headers.map((header) => header.id),
            ...section.table.rows.flatMap((row) =>
              row.map((cell) => cell.id),
            ),
          ]
        : []),
      ...(section.callout
        ? [section.callout.title.id, section.callout.text.id]
        : []),
    ]),
    ...article.faqs.flatMap((faq) => [faq.question.id, faq.answer.id]),
  ].join(" ");

  return text.split(/\s+/).filter(Boolean).length;
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Artikel tidak ditemukan",
    };
  }

  return {
    title: article.title.id,
    description: article.seoDescription.id,
    keywords: [...article.keywords],
    authors: [{ name: "Muhammad Rizal" }],
    creator: "Muhammad Rizal",
    publisher: "Muhammad Rizal",
    category: article.category.id,
    alternates: {
      canonical: `/articles/${article.slug}`,
    },
    openGraph: {
      title: article.title.id,
      description: article.seoDescription.id,
      type: "article",
      url: `/articles/${article.slug}`,
      siteName: "Muhammad Rizal Portfolio",
      locale: "id_ID",
      publishedTime: article.publishedAt,
      modifiedTime: article.modifiedAt,
      authors: ["Muhammad Rizal"],
      section: article.category.id,
      tags: [...article.keywords],
      images: [
        {
          url: `/articles/${article.slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: article.title.id,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title.id,
      description: article.seoDescription.id,
      images: [`/articles/${article.slug}/opengraph-image`],
    },
  };
}

export default async function Page({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const articleUrl = absoluteUrl(`/articles/${article.slug}`);
  const imageUrl = absoluteUrl(
    `/articles/${article.slug}/opengraph-image`,
  );
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `${articleUrl}#article`,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": articleUrl,
        },
        headline: article.title.id,
        alternativeHeadline: article.directAnswer.id,
        description: article.seoDescription.id,
        image: imageUrl,
        datePublished: article.publishedAt,
        dateModified: article.modifiedAt,
        inLanguage: "id-ID",
        isAccessibleForFree: true,
        articleSection: article.category.id,
        keywords: article.keywords.join(", "),
        wordCount: getArticleWordCount(article),
        author: {
          "@type": "Person",
          "@id": `${absoluteUrl("/")}#person`,
          name: "Muhammad Rizal",
          url: absoluteUrl("/"),
          sameAs: ["https://www.linkedin.com/in/muhammadrizalgg/"],
          jobTitle: "Fullstack Software Developer",
        },
        publisher: {
          "@type": "Person",
          "@id": `${absoluteUrl("/")}#person`,
          name: "Muhammad Rizal",
        },
        citation: article.references.map((reference) => reference.url),
        about: article.keywords.slice(0, 5).map((keyword) => ({
          "@type": "Thing",
          name: keyword,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${articleUrl}#faq`,
        mainEntity: article.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question.id,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer.id,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${articleUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Beranda",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Artikel",
            item: absoluteUrl("/articles"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.title.id,
            item: articleUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ArticleDetail article={article} />
    </>
  );
}
