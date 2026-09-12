import React from "react";

// Brand Monogram + Full Logo
export default function BrandLogo({ size = 38, showTagline = true }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 60 60"
        fill="none"
        style={{ flexShrink: 0, filter: "drop-shadow(0 4px 12px rgba(245, 158, 11, 0.4))" }}
      >
        <defs>
          <linearGradient id="nFold1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <linearGradient id="nFold2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <linearGradient id="nFold3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D97706" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#FDE68A" />
          </linearGradient>
        </defs>
        {/* Left vertical ribbon pillar */}
        <path d="M10 48 L10 14 C10 11.8 11.8 10 14 10 L22 10 L22 36 L12 49 Z" fill="url(#nFold1)" />
        {/* Diagonal bridge fold */}
        <path d="M18 11 L42 46 L50 46 C50 48.2 48.2 50 46 50 L38 50 L14 15 Z" fill="url(#nFold2)" opacity="0.9" />
        {/* Right vertical ribbon pillar */}
        <path d="M38 24 L48 11 L48 46 C48 48.2 46.2 50 44 50 L38 50 Z" fill="url(#nFold3)" />
        {/* Luminous light accent */}
        <circle cx="14" cy="13" r="2.5" fill="#FFFBEB" opacity="0.8" />
      </svg>
      <div>
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: size * 0.52,
            fontWeight: 700,
            letterSpacing: "0.04em",
            color: "#FFFFFF",
            lineHeight: 1.1,
          }}
        >
          NexGravision
        </div>
        {showTagline && (
          <div
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: Math.max(9, size * 0.24),
              fontWeight: 400,
              letterSpacing: "0.05em",
              color: "#94A3B8",
              marginTop: 2,
            }}
          >
            Ideas to Intelligent Solutions
          </div>
        )}
      </div>
    </div>
  );
}
