import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/**
 * Favicon — orange rounded square with a chunky white pitched-roof
 * house silhouette and a navy door. Designed to stay legible at 16px.
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
          background: "#EC7E28",
          borderRadius: "14px",
        }}
      >
        <svg
          width="54"
          height="54"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* House silhouette: pitched roof + body as one path */}
          <path
            d="M24 5 L3 22 L8 22 L8 43 L40 43 L40 22 L45 22 Z"
            fill="#ffffff"
            strokeLinejoin="round"
          />
          {/* Door */}
          <rect x="20" y="28" width="8" height="15" fill="#182D4A" rx="1" />
        </svg>
      </div>
    ),
    size
  );
}
