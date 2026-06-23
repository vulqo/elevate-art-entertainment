import { ImageResponse } from "next/og";

export const alt =
  "Elevate Art Entertainment — Estudio de grabación en Downtown Cincinnati";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Imagen de marca para compartir en redes (OpenGraph/Twitter), generada.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(120% 120% at 80% 10%, #16202b 0%, #0c0e11 60%)",
          color: "#f4f5f6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            color: "#12a4db",
            fontSize: 30,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Elevate Art Entertainment
        </div>
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>
          Estudio de grabación en
        </div>
        <div
          style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1, color: "#12a4db" }}
        >
          Downtown Cincinnati
        </div>
        <div style={{ fontSize: 30, color: "#b9bcc1", marginTop: 36 }}>
          Grabación · Producción · Video · Hablamos español e inglés
        </div>
      </div>
    ),
    { ...size }
  );
}
