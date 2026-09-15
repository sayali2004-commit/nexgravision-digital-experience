import React from "react";

export default function BrandLogo({ size = 38 }) {
  return (
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
      <div>
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
    </div>
  );
}
