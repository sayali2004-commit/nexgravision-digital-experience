import React from "react";

export default function BrandLogo({ size = 38 }) {
  return (
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
  );
}
