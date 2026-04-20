import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * Apple touch icon — same house silhouette as the favicon, larger
 * for iOS/Android home screen use with room for more detail.
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
          borderRadius: "38px",
        }}
      >
        <svg
          width="140"
          height="140"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* House silhouette */}
          <path
            d="M24 5 L3 22 L8 22 L8 43 L40 43 L40 22 L45 22 Z"
            fill="#ffffff"
            strokeLinejoin="round"
          />
          {/* Windows visible at this size */}
          <rect x="12" y="27" width="5" height="5" fill="#182D4A" rx="0.5" />
          <rect x="31" y="27" width="5" height="5" fill="#182D4A" rx="0.5" />
          {/* Door */}
          <rect x="20" y="28" width="8" height="15" fill="#182D4A" rx="1" />
        </svg>
      </div>
    ),
    size
  );
}
