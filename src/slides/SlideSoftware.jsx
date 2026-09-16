import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import { BrandLogo } from "../config/assets";

const data = SLIDES[1];

const featureIcons = {
  code: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  cloud: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  mobile: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="12" y1="18" x2="12" y2="18" strokeWidth="2.5" />
    </svg>
  ),
  design: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  ),
  support: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  transform: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  ),
};

export default function SlideSoftware({ isActive }) {
  const logoRef = useRef(null);
  const topRightRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const descRef = useRef(null);
  const featuresRef = useRef(null);
  const visualRef = useRef(null);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isActive || hasAnimated.current) return;
    hasAnimated.current = true;

    const tl = gsap.timeline({ delay: 0.2 });

    gsap.set(logoRef.current, { opacity: 0, y: -20 });
    tl.to(logoRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.1);

    gsap.set(topRightRef.current, { opacity: 0, x: 20 });
    tl.to(topRightRef.current, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }, 0.15);

    gsap.set(tagRef.current, { opacity: 0, x: -20 });
    tl.to(tagRef.current, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }, 0.2);

    gsap.set(headlineRef.current, { opacity: 0, y: 30, filter: "blur(6px)" });
    tl.to(headlineRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, ease: "power3.out" }, 0.3);

    gsap.set(descRef.current, { opacity: 0, y: 20 });
    tl.to(descRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.5);

    gsap.set(featuresRef.current, { opacity: 0, y: 30 });
    tl.to(featuresRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.6);

    gsap.set(visualRef.current, { opacity: 0, scale: 0.9, x: 40 });
    tl.to(visualRef.current, { opacity: 1, scale: 1, x: 0, duration: 1.0, ease: "expo.out" }, 0.4);

    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 1.0);
  }, [isActive]);

  return (
    <div style={S.wrap}>
      <div style={S.container}>
        {/* Header */}
        <div style={S.headerRow}>
          <div ref={logoRef}>
            <BrandLogo size={42} />
          </div>
          <div ref={topRightRef} style={S.topRight}>
            {data.topRight}
          </div>
        </div>

        {/* Body */}
        <div style={S.bodyRow}>
          <div style={S.leftCol}>
            <div ref={tagRef} className="section-tag">{data.sectionTag}</div>
            <h2 ref={headlineRef} style={S.headline}>
              {data.headline}<br />
              <span style={S.headlineAccent}>{data.headlineAccent}</span>
            </h2>
            <p ref={descRef} style={S.description}>{data.description}</p>

            <div ref={featuresRef} style={S.featuresGrid}>
              {data.features.map((feat, i) => (
                <div key={i} style={S.featureCard}>
                  <div style={S.featureIconWrap}>
                    {featureIcons[feat.icon]}
                  </div>
                  <div>
                    <div style={S.featureTitle}>{feat.title}</div>
                    <div style={S.featureSubtitle}>{feat.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={visualRef} style={S.rightCol}>
            {/* Circular visual with NexGravision logo */}
            <div style={S.circleOuter}>
              <div style={S.circleInner}>
                <div style={S.circleContent}>
                  <img src="/LOGOIMG.png" alt="NexGravision" style={S.circleLogo} />
                  <div style={S.circleText}>NEXGRAVISION</div>
                </div>
                <div style={S.circleRing} />
              </div>

              {/* Floating badges */}
              {data.badges.map((badge, i) => {
                const positions = [
                  { top: "5%", right: "-30%" },
                  { top: "-10%", right: "15%" },
                  { bottom: "5%", right: "-25%" },
                  { bottom: "-5%", right: "20%" },
                ];
                return (
                  <div key={i} style={{ ...S.badge, ...positions[i] }}>
                    <div style={S.badgeDot} />
                    <div>
                      <div style={S.badgeLabel}>{badge.label}</div>
                      <div style={S.badgeSubtitle}>{badge.subtitle}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Counter */}
      <div ref={counterRef} style={S.counterWrap}>
        <span className="slide-counter" style={{ position: "static" }}>02 / 05</span>
      </div>
    </div>
  );
}

const S = {
  wrap: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "clamp(20px, 4vw, 48px) clamp(16px, 5vw, 72px)",
    overflow: "hidden",
    background: "linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 50%, #F0F4F8 100%)",
  },
  container: {
    width: "100%",
    maxWidth: 1280,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    zIndex: 2,
    position: "relative",
  },
  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  topRight: {
    fontFamily: "var(--font-mono)",
    fontSize: "clamp(11px, 1.1vw, 14px)",
    fontWeight: 500,
    color: "#64748B",
    letterSpacing: "0.05em",
  },
  bodyRow: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "clamp(20px, 4vw, 60px)",
    marginTop: "auto",
    marginBottom: "auto",
    flexWrap: "wrap",
  },
  leftCol: {
    flex: "1 1 450px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    minWidth: 0,
  },
  headline: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(28px, 3.5vw, 46px)",
    fontWeight: 700,
    color: "#1E293B",
    lineHeight: 1.15,
    letterSpacing: "-0.015em",
    marginBottom: 16,
  },
  headlineAccent: {
    background: "linear-gradient(90deg, #0284C7 0%, #00B4D8 50%, #38BDF8 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  description: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(13px, 1.3vw, 16px)",
    color: "#475569",
    lineHeight: 1.7,
    maxWidth: 520,
    marginBottom: 32,
    fontWeight: 400,
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "clamp(12px, 1.5vw, 20px)",
    width: "100%",
    maxWidth: 600,
  },
  featureCard: {
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
    padding: "12px 10px",
    borderRadius: 12,
    background: "rgba(255,255,255,0.7)",
    border: "1px solid rgba(0,180,216,0.12)",
    transition: "all 0.3s ease",
  },
  featureIconWrap: {
    width: 36,
    height: 36,
    minWidth: 36,
    borderRadius: 8,
    background: "rgba(0,180,216,0.08)",
    border: "1px solid rgba(0,180,216,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  featureTitle: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(11px, 1vw, 13px)",
    fontWeight: 600,
    color: "#1E293B",
    lineHeight: 1.3,
  },
  featureSubtitle: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(9px, 0.8vw, 11px)",
    color: "#64748B",
    marginTop: 2,
  },
  rightCol: {
    flex: "1 1 350px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    minHeight: 350,
  },
  circleOuter: {
    position: "relative",
    width: "clamp(250px, 25vw, 320px)",
    height: "clamp(250px, 25vw, 320px)",
  },
  circleInner: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxShadow: "0 20px 60px rgba(0,0,0,0.15), 0 0 40px rgba(0,180,216,0.15)",
  },
  circleContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  circleLogo: {
    width: 48,
    height: 48,
    objectFit: "contain",
    filter: "drop-shadow(0 0 12px rgba(0,180,216,0.5))",
  },
  circleText: {
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    fontWeight: 700,
    color: "#7DD3FC",
    letterSpacing: "0.15em",
  },
  circleRing: {
    position: "absolute",
    inset: -8,
    borderRadius: "50%",
    border: "1.5px solid rgba(0,180,216,0.2)",
  },
  badge: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "10px 14px",
    borderRadius: 10,
    background: "rgba(255,255,255,0.9)",
    border: "1px solid rgba(0,180,216,0.15)",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    whiteSpace: "nowrap",
  },
  badgeDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "#00B4D8",
    flexShrink: 0,
  },
  badgeLabel: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(10px, 0.9vw, 12px)",
    fontWeight: 600,
    color: "#1E293B",
  },
  badgeSubtitle: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(8px, 0.7vw, 10px)",
    color: "#64748B",
  },
  counterWrap: {
    position: "absolute",
    bottom: 36,
    right: 56,
    zIndex: 10,
    pointerEvents: "none",
  },
};
