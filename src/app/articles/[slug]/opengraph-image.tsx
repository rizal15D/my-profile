import { ImageResponse } from "next/og";

import { getArticleBySlug } from "@/data/articles";

export const alt = "Artikel engineering oleh Muhammad Rizal";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

type OpenGraphImageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function OpenGraphImage({
  params,
}: OpenGraphImageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const isCqrs = article?.theme === "cqrs";
  const title = article?.title.id ?? "Engineering Notes";
  const category = article?.category.id ?? "Software Engineering";
  const keywords = article?.keywords.slice(0, 3) ?? [];

  return new ImageResponse(
    <div
      style={{
        alignItems: "stretch",
        background: isCqrs
          ? "linear-gradient(135deg, #07152f 0%, #0d2f67 55%, #083344 100%)"
          : "linear-gradient(135deg, #11113a 0%, #172554 52%, #083344 100%)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        overflow: "hidden",
        padding: "64px 72px",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          background: isCqrs
            ? "rgba(34, 211, 238, 0.17)"
            : "rgba(129, 140, 248, 0.2)",
          borderRadius: "999px",
          display: "flex",
          height: "430px",
          position: "absolute",
          right: "-120px",
          top: "-150px",
          width: "430px",
        }}
      />
      <div
        style={{
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "999px",
          bottom: "-210px",
          display: "flex",
          height: "480px",
          left: "-130px",
          position: "absolute",
          width: "480px",
        }}
      />

      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              alignItems: "center",
              background: "#3b82f6",
              borderRadius: 8,
              display: "flex",
              fontSize: 22,
              height: 42,
              justifyContent: "center",
              marginRight: 16,
              width: 42,
            }}
          >
            R
          </div>
          Muhammad Rizal
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.58)",
            display: "flex",
            fontFamily: "monospace",
            fontSize: 17,
          }}
        >
          ENGINEERING FIELD NOTES
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 950,
          position: "relative",
        }}
      >
        <div
          style={{
            color: isCqrs ? "#67e8f9" : "#a5b4fc",
            display: "flex",
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: "0.12em",
            marginBottom: 22,
            textTransform: "uppercase",
          }}
        >
          {category}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 58 ? 52 : 60,
            fontWeight: 800,
            letterSpacing: "-0.035em",
            lineHeight: 1.05,
          }}
        >
          {title}
        </div>
      </div>

      <div
        style={{
          alignItems: "center",
          borderTop: "1px solid rgba(255,255,255,0.14)",
          display: "flex",
          justifyContent: "space-between",
          paddingTop: 24,
          position: "relative",
        }}
      >
        <div style={{ display: "flex" }}>
          {keywords.map((keyword) => (
            <div
              key={keyword}
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 999,
                display: "flex",
                fontSize: 15,
                marginRight: 10,
                padding: "8px 14px",
              }}
            >
              {keyword}
            </div>
          ))}
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.62)",
            display: "flex",
            fontSize: 17,
          }}
        >
          Berbasis sumber akademik
        </div>
      </div>
    </div>,
    size,
  );
}
