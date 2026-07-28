function resolveSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const vercelUrl =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  const candidate = configuredUrl ?? vercelUrl ?? "http://localhost:3000";
  const withProtocol = candidate.startsWith("http")
    ? candidate
    : `https://${candidate}`;

  return withProtocol.replace(/\/+$/, "");
}

export const siteConfig = {
  name: "Muhammad Rizal",
  title: "Muhammad Rizal | Fullstack Software Developer",
  description:
    "Portfolio dan artikel Muhammad Rizal tentang backend, frontend, API engineering, CQRS, dan software architecture.",
  url: resolveSiteUrl(),
  author: "Muhammad Rizal",
  locale: "id_ID",
  linkedIn: "https://www.linkedin.com/in/muhammadrizalgg/",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.url}/`).toString();
}
