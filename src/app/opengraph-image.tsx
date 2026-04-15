import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "BabyMyDog — Premium Products for Dog Lovers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#C4704B",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <span style={{ fontSize: 80, fontWeight: 800, color: "white", letterSpacing: 4 }}>BABY</span>
          <span style={{ fontSize: 80, color: "rgba(255,255,255,0.9)", fontStyle: "italic" }}>my dog</span>
          <span style={{ fontSize: 60, marginLeft: 12 }}>&#128062;</span>
        </div>
        <p style={{ fontSize: 28, color: "rgba(255,255,255,0.85)", marginTop: 20 }}>
          Premium Products &amp; Care Guides for Dog Lovers
        </p>
        <p style={{ fontSize: 22, color: "rgba(255,255,255,0.6)", marginTop: 16 }}>
          260+ Expert-Reviewed Products &middot; 50 Breed Guides &middot; 45 Blog Posts
        </p>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.4)", marginTop: 40 }}>babymydog.com</p>
      </div>
    ),
    { ...size }
  );
}
