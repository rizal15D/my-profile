import Portfolio from "@/components/Portfolio";
import { absoluteUrl } from "@/lib/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${absoluteUrl("/")}#person`,
        name: "Muhammad Rizal",
        alternateName: ["Rizal", "Mehmed"],
        url: absoluteUrl("/"),
        jobTitle: "Fullstack Software Developer",
        homeLocation: {
          "@type": "Place",
          name: "Surabaya, Indonesia",
        },
        sameAs: ["https://www.linkedin.com/in/muhammadrizalgg/"],
        knowsAbout: [
          "Full-stack web development",
          "Backend development",
          "API engineering",
          "CQRS",
          "Software architecture",
          "DevOps",
          "Observability",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${absoluteUrl("/")}#website`,
        url: absoluteUrl("/"),
        name: "Muhammad Rizal Portfolio",
        inLanguage: ["id-ID", "en-US"],
        author: {
          "@id": `${absoluteUrl("/")}#person`,
        },
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
      <Portfolio />
    </>
  );
}
