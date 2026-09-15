import React from "react";

export default function BrandLogo({ size = 38 }) {
  const textOffset = size + 10;

  return (
    <div style={{ display: "inline-flex", flexDirection: "column", gap: 0 }}>
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
            fontSize: size * 0.5,
            fontWeight: 700,
            letterSpacing: "0.03em",
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
          fontSize: Math.max(8, size * 0.2),
          fontWeight: 400,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#64748B",
          paddingLeft: textOffset,
          marginTop: 4,
        }}
      >
        Ideas to Intelligent Solutions
      </div>
    </div>
  );
}
