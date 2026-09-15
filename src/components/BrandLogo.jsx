import React from "react";

export default function BrandLogo({ size = 38 }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <img
          src="/LOGOIMG.png"
          alt="NexGravision"
          className="brand-logo-img"
          style={{
            height: size,
            width: "auto",
            objectFit: "contain",
          }}
        />
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: size * 0.55,
            fontWeight: 700,
            letterSpacing: "0.04em",
            color: "#FFFFFF",
            lineHeight: 1.1,
          }}
        >
          NexGravision
        </div>
      </div>
      <div
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: Math.max(9, size * 0.22),
          fontWeight: 400,
          letterSpacing: "0.06em",
          color: "#94A3B8",
          marginTop: 4,
          marginLeft: size + 10,
        }}
      >
        Ideas to Intelligent Solutions
      </div>
    </div>
  );
}
