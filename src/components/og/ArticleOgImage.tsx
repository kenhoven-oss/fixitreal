import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

type ArticleOgInput = {
  eyebrow: string;
  title: string;
};

/**
 * Per-article dynamic OG image. Rendered at the Vercel edge.
 *
 * Visual treatment matches the default OG (cream surface, navy/amber editorial
 * brand) but swaps the static tagline for the article-specific title and an
 * eyebrow indicating the section (e.g. "DIY or Hire").
 */
export function renderArticleOgImage({ eyebrow, title }: ArticleOgInput) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#ffffff",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "999px",
              background: "#D4A038",
            }}
          />
          <div
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: "#182D4A",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            {site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: "#9B6E1B",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              fontSize: title.length > 60 ? 64 : 76,
              fontWeight: 700,
              color: "#182D4A",
              letterSpacing: "-0.02em",
              lineHeight: 1.08,
              maxWidth: 1040,
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid #D4A038",
            paddingTop: "24px",
          }}
        >
          <div style={{ fontSize: 22, color: "#595751" }}>{site.domain}</div>
          <div style={{ fontSize: 22, color: "#595751", fontStyle: "italic" }}>
            Consumer advocate · Home repair
          </div>
        </div>
      </div>
    ),
    ogSize
  );
}
