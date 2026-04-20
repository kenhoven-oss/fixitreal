import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * Apple touch icon — same house silhouette, sized for iOS home screen.
 */
export default function AppleIcon() {
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
          borderRadius: "32px",
        }}
      >
        <svg
          width="128"
          height="128"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 6 L6 20 L6 42 L42 42 L42 20 Z"
            fill="#ffffff"
            stroke="#ffffff"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          <path
            d="M14 36 L32 18"
            stroke="#182D4A"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    size
  );
}
