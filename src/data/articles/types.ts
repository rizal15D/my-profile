import type { LocalizedText } from "@/data/portfolio";

export type ArticleTheme = "cqrs" | "contract" | "ledgerbank";

export type ArticleParagraph = {
  text: LocalizedText;
  citations?: ReadonlyArray<number>;
};

export type ArticleBullet = {
  title: LocalizedText;
  text: LocalizedText;
};

export type ArticleStep = {
  title: LocalizedText;
  text: LocalizedText;
};

export type ArticleTable = {
  caption: LocalizedText;
  headers: ReadonlyArray<LocalizedText>;
  rows: ReadonlyArray<ReadonlyArray<LocalizedText>>;
};

export type ArticleCode = {
  label: LocalizedText;
  language: string;
  filename: string;
  code: string;
};

export type ArticleCallout = {
  tone: "info" | "warning" | "success";
  title: LocalizedText;
  text: LocalizedText;
};

export type ArticleSection = {
  id: string;
  heading: LocalizedText;
  paragraphs?: ReadonlyArray<ArticleParagraph>;
  bullets?: ReadonlyArray<ArticleBullet>;
  steps?: ReadonlyArray<ArticleStep>;
  table?: ArticleTable;
  code?: ArticleCode;
  callout?: ArticleCallout;
};

export type ArticleFaq = {
  question: LocalizedText;
  answer: LocalizedText;
};

export type ArticleReference = {
  kind: "journal" | "proceeding" | "standard" | "documentation";
  authors: string;
  title: string;
  publication: string;
  year: string;
  url: string;
  note: LocalizedText;
};

export type Article = {
  slug: string;
  theme: ArticleTheme;
  category: LocalizedText;
  title: LocalizedText;
  excerpt: LocalizedText;
  seoDescription: LocalizedText;
  directAnswer: LocalizedText;
  publishedAt: string;
  modifiedAt: string;
  publishedLabel: LocalizedText;
  modifiedLabel: LocalizedText;
  readingTime: LocalizedText;
  keywords: ReadonlyArray<string>;
  takeaways: ReadonlyArray<LocalizedText>;
  sections: ReadonlyArray<ArticleSection>;
  faqs: ReadonlyArray<ArticleFaq>;
  references: ReadonlyArray<ArticleReference>;
};
