import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const runtime = "edge";
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function DefaultOgImage() {
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
            FixItReal
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              color: "#182D4A",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              maxWidth: 1000,
            }}
          >
            Fix it right, not twice.
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#424139",
              lineHeight: 1.3,
              maxWidth: 900,
            }}
          >
            Know what to fix, what to buy, and when to hire help.
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
          <div style={{ fontSize: 22, color: "#595751" }}>fixitreal.com</div>
          <div style={{ fontSize: 22, color: "#595751", fontStyle: "italic" }}>
            Consumer advocate · Home repair
          </div>
        </div>
      </div>
    ),
    size
  );
}
