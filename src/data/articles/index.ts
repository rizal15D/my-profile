import { apiContractArticle } from "./kontrak-backend-frontend-api-contract-first";
import { cqrsArticle } from "./cqrs-command-query-responsibility-segregation";
import { ledgerBankArticle } from "./ledgerbank-core-banking-simulator";
import type { Article } from "./types";

export type * from "./types";

export const articles: ReadonlyArray<Article> = [
  cqrsArticle,
  apiContractArticle,
  ledgerBankArticle,
].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
