import { ImageResponse } from "next/og";
import { getJob, getAllJobSlugs } from "@/content/jobs";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllJobSlugs().map((job) => ({ job }));
}

export default async function JobOgImage({
  params,
}: {
  params: Promise<{ job: string }>;
}) {
  const { job } = await params;
  const j = getJob(job);

  const verdictLabel = j
    ? j.verdict === "diy-recommended"
      ? "DIY Recommended"
      : j.verdict === "maybe-diy"
        ? "Maybe DIY"
        : "Hire a Pro"
    : "FixItReal";
  const verdictColor = j
    ? j.verdict === "diy-recommended"
      ? "#2d6a4f"
      : j.verdict === "maybe-diy"
        ? "#b68325"
        : "#9b2c2c"
    : "#182D4A";

  const title = j ? `Should you ${j.name.toLowerCase()}?` : "DIY or Hire";
  const cost =
    j &&
    `DIY $${j.cost.diy.low.toLocaleString()}–$${j.cost.diy.high.toLocaleString()} · Pro $${j.cost.pro.low.toLocaleString()}–$${j.cost.pro.high.toLocaleString()}`;

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
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
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
            FixItReal · DIY or Hire
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "8px 20px",
              borderRadius: "999px",
              background: verdictColor,
              color: "white",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "0.5px",
            }}
          >
            {verdictLabel}
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#182D4A",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          {cost && (
            <div style={{ fontSize: 28, color: "#424139", maxWidth: 1000 }}>
              {cost}
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid #D4A038",
            paddingTop: "22px",
          }}
        >
          <div style={{ fontSize: 22, color: "#595751" }}>fixitreal.com</div>
          <div style={{ fontSize: 22, color: "#595751", fontStyle: "italic" }}>
            Fix it right, not twice.
          </div>
        </div>
      </div>
    ),
    size
  );
}
