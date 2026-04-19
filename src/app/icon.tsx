import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/**
 * Favicon — house silhouette with amber accent wrench slash.
 * Generated at build time by Next.js, served at /icon.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#182D4A",
          borderRadius: "12px",
        }}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* House silhouette */}
          <path
            d="M24 6 L6 20 L6 42 L42 42 L42 20 Z"
            fill="#ffffff"
            stroke="#ffffff"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          {/* Amber accent diagonal (wrench mark) */}
          <path
            d="M14 36 L32 18"
            stroke="#D4A038"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    size
  );
}
