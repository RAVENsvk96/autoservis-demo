import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#09090b",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div style={{ fontSize: 32, color: "#f97316", fontWeight: 700 }}>
          AutoServis v Nitre
        </div>

        <div style={{ marginTop: 32, fontSize: 72, fontWeight: 800 }}>
          Rýchly, férový a spoľahlivý autoservis
        </div>

        <div style={{ marginTop: 32, fontSize: 32, color: "#d4d4d8" }}>
          Diagnostika • Brzdy • Pneuservis • Výmena oleja
        </div>
      </div>
    ),
    size
  );
}