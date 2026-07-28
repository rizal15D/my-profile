import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

import { siteConfig } from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Rizal | Fullstack Software Developer",
    template: "%s | Rizal",
  },
  description:
    "Portfolio Muhammad Rizal, a fullstack software developer building web, mobile, backend, and production infrastructure.",
  keywords: [
    "Muhammad Rizal",
    "Mehmed",
    "Fullstack Software Developer",
    "Next.js Developer",
    "Backend Developer",
    "Freelance Developer Indonesia",
  ],
  authors: [{ name: "Muhammad Rizal" }],
  creator: "Muhammad Rizal",
  publisher: "Muhammad Rizal",
  category: "technology",
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US",
    title: "Rizal | Fullstack Software Developer",
    description:
      "Fullstack software developer building reliable digital products from interface to infrastructure.",
    siteName: "Muhammad Rizal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rizal | Fullstack Software Developer",
    description:
      "Fullstack software developer building reliable digital products from interface to infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
