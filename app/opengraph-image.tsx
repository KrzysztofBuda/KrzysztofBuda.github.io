import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt =
  "Krzysztof Buda — Developer Portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050505",
          color: "#f5f5f5",
          padding: "72px 80px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "monospace",
        }}
      >
        {/* BACKGROUND GLOW */}

        <div
          style={{
            position: "absolute",
            width: "520px",
            height: "520px",
            borderRadius: "999px",
            background:
              "rgba(124, 58, 237, 0.18)",
            filter: "blur(90px)",
            right: "-100px",
            top: "-120px",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "420px",
            height: "420px",
            borderRadius: "999px",
            background:
              "rgba(59, 130, 246, 0.10)",
            filter: "blur(100px)",
            left: "-120px",
            bottom: "-160px",
          }}
        />

        {/* TOP */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "20px",
                border:
                  "2px solid rgba(255,255,255,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#09090b",
                fontSize: "28px",
                fontWeight: 700,
              }}
            >
              KB
              <span
                style={{
                  color: "#8b5cf6",
                }}
              >
                .
              </span>
            </div>

            <div
              style={{
                color: "#71717a",
                fontSize: "22px",
              }}
            >
              krzysztofbuda.github.io
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "#a1a1aa",
              fontSize: "18px",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "999px",
                background: "#34d399",
              }}
            />

            Available for collaboration
          </div>
        </div>

        {/* MAIN */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            maxWidth: "950px",
          }}
        >
          <div
            style={{
              color: "#8b5cf6",
              fontSize: "22px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Software Developer
          </div>

          <div
            style={{
              fontSize: "68px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-3px",
            }}
          >
            Krzysztof Buda
          </div>

          <div
            style={{
              marginTop: "28px",
              fontSize: "28px",
              lineHeight: 1.45,
              color: "#a1a1aa",
              maxWidth: "900px",
            }}
          >
            Backend • APIs • Android • Databases •
            Embedded Systems
          </div>
        </div>

        {/* BOTTOM */}

        <div
          style={{
            display: "flex",
            gap: "16px",
            position: "relative",
          }}
        >
          {[
            "Python",
            "Kotlin",
            "FastAPI",
            "SQL",
            "Android",
            "Embedded",
          ].map((technology) => (
            <div
              key={technology}
              style={{
                border:
                  "1px solid rgba(255,255,255,0.10)",
                borderRadius: "999px",
                padding: "10px 18px",
                fontSize: "16px",
                color: "#a1a1aa",
                background:
                  "rgba(255,255,255,0.025)",
              }}
            >
              {technology}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}