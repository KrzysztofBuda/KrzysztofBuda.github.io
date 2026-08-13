import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

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
          background: "#050505",
          borderRadius: "36px",
          border: "4px solid #27272a",
          fontFamily: "monospace",
          fontWeight: 700,
        }}
      >
        <span
          style={{
            fontSize: 70,
            color: "#f5f5f5",
            letterSpacing: "-5px",
          }}
        >
          KB
        </span>

        <span
          style={{
            width: 14,
            height: 14,
            marginLeft: 5,
            marginTop: 42,
            borderRadius: "50%",
            background: "#8b5cf6",
          }}
        />
      </div>
    ),
    {
      ...size,
    },
  );
}