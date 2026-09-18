import React from "react";

export default function BrandLogo({ size = 38, dark = false }) {
  const nameColor = dark ? "#0F172A" : "#FFFFFF";
  const tagColor = dark ? "#64748B" : "#94A3B8";

  return (
    <div style={{ display: "inline-flex", flexDirection: "column", gap: 0 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <img
          src="/LOGOIMG.png"
          alt="NexGravision"
          className="brand-logo-img"
          style={{
            height: size * 1.4,
            width: "auto",
            objectFit: "contain",
          }}
        />
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: size * 0.62,
            fontWeight: 700,
            letterSpacing: "0.03em",
            color: nameColor,
            lineHeight: 1.1,
          }}
        >
          NexGravision
        </div>
        <div
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: Math.max(9, size * 0.22),
            fontWeight: 400,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: tagColor,
            borderLeft: `1px solid ${tagColor}33`,
            paddingLeft: 12,
            marginLeft: 4,
          }}
        >
          Digital Solution and Services.
        </div>
      </div>
    </div>
  );
}
