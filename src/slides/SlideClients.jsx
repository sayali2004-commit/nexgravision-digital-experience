import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import { BrandLogo } from "../config/assets";

const data = SLIDES[3];

export default function SlideClients({ isActive }) {
  const logoRef = useRef(null);
  const topRightRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const descRef = useRef(null);
  const pedestalRef = useRef(null);
  const statsRef = useRef(null);
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

    gsap.set(pedestalRef.current, { opacity: 0, y: 40, scale: 0.95 });
    tl.to(pedestalRef.current, { opacity: 1, y: 0, scale: 1, duration: 1.0, ease: "expo.out" }, 0.5);

    gsap.set(statsRef.current, { opacity: 0, y: 20 });
    tl.to(statsRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.9);

    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 1.0);
  }, [isActive]);

  return (
    <div style={S.wrap}>
      {/* Ambient glow */}
      <div style={S.orbGlow1} />
      <div style={S.orbGlow2} />

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

        {/* Center content */}
        <div style={S.centerContent}>
          <div ref={tagRef} className="section-tag" style={{ justifyContent: "center" }}>{data.sectionTag}</div>
          <h2 ref={headlineRef} style={S.headline}>
            {data.headline}{" "}
            <span style={S.headlineAccent}>{data.headlineAccent}</span>
          </h2>
          <p ref={descRef} style={S.description}>{data.description}</p>

          {/* 3D Pedestal with client logos */}
          <div ref={pedestalRef} style={S.pedestalArea}>
            {/* Top row - 5 logos */}
            <div style={S.logoRow}>
              {data.clientLogos.slice(0, 5).map((client, i) => (
                <div key={i} style={S.logoCard}>
                  <div style={{ ...S.logoCircle, borderColor: `${client.color}40` }}>
                    <span style={{ ...S.logoInitial, color: client.color }}>
                      {client.name.charAt(0)}
                    </span>
                  </div>
                  <div style={S.logoName}>{client.name}</div>
                </div>
              ))}
            </div>

            {/* Bottom row - 3 logos */}
            <div style={S.logoRowBottom}>
              {data.clientLogos.slice(5, 8).map((client, i) => (
                <div key={i} style={S.logoCard}>
                  <div style={{ ...S.logoCircle, borderColor: `${client.color}40` }}>
                    <span style={{ ...S.logoInitial, color: client.color }}>
                      {client.name.charAt(0)}
                    </span>
                  </div>
                  <div style={S.logoName}>{client.name}</div>
                </div>
              ))}
            </div>

            {/* Pedestal base */}
            <div style={S.pedestalBase}>
              <div style={S.pedestalGlow} />
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div ref={statsRef} style={S.statsRow}>
          {data.stats.map((stat, i) => (
            <div key={i} style={S.statItem}>
              <div style={S.statIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {i === 0 && <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />}
                  {i === 0 && <circle cx="9" cy="7" r="4" />}
                  {i === 0 && <path d="M23 21v-2a4 4 0 0 0-3-3.87" />}
                  {i === 0 && <path d="M16 3.13a4 4 0 0 1 0 7.75" />}
                  {i === 1 && <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />}
                  {i === 1 && <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />}
                  {i === 2 && <circle cx="12" cy="12" r="10" />}
                  {i === 2 && <polyline points="12 6 12 12 16 14" />}
                </svg>
              </div>
              <div style={S.statValue}>{stat.value}</div>
              <div style={S.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div ref={counterRef} style={S.counterWrap}>
        <span className="slide-counter" style={{ position: "static" }}>04 / 05</span>
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
    background: "linear-gradient(180deg, #080D1A 0%, #0A1628 40%, #0C1E3A 100%)",
  },
  orbGlow1: {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "clamp(400px, 50vw, 700px)",
    height: "clamp(400px, 50vw, 700px)",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(0,180,216,0.12) 0%, transparent 70%)",
    filter: "blur(80px)",
    pointerEvents: "none",
  },
  orbGlow2: {
    position: "absolute",
    bottom: "10%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "clamp(300px, 40vw, 500px)",
    height: "clamp(150px, 20vw, 250px)",
    borderRadius: "50%",
    background: "radial-gradient(ellipse, rgba(0,180,216,0.2) 0%, transparent 70%)",
    filter: "blur(40px)",
    pointerEvents: "none",
  },
  container: {
    width: "100%",
    maxWidth: 1100,
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
  centerContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  headline: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(28px, 3.5vw, 46px)",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.15,
    letterSpacing: "-0.015em",
    marginBottom: 12,
  },
  headlineAccent: {
    background: "linear-gradient(90deg, #7DD3FC 0%, #00B4D8 50%, #0284C7 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  description: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(13px, 1.3vw, 16px)",
    color: "#94A3B8",
    lineHeight: 1.7,
    maxWidth: 550,
    marginBottom: 40,
    textAlign: "center",
  },
  pedestalArea: {
    position: "relative",
    width: "100%",
    maxWidth: 700,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logoRow: {
    display: "flex",
    justifyContent: "center",
    gap: "clamp(16px, 2.5vw, 36px)",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  logoRowBottom: {
    display: "flex",
    justifyContent: "center",
    gap: "clamp(16px, 2.5vw, 36px)",
    flexWrap: "wrap",
    marginBottom: 24,
  },
  logoCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    transition: "transform 0.3s ease",
  },
  logoCircle: {
    width: "clamp(56px, 6vw, 80px)",
    height: "clamp(56px, 6vw, 80px)",
    borderRadius: "50%",
    background: "rgba(16,24,40,0.6)",
    border: "2px solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
    backdropFilter: "blur(8px)",
  },
  logoInitial: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(18px, 2vw, 28px)",
    fontWeight: 700,
  },
  logoName: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(9px, 0.8vw, 11px)",
    fontWeight: 500,
    color: "#94A3B8",
  },
  pedestalBase: {
    width: "80%",
    height: 8,
    background: "linear-gradient(90deg, transparent 0%, rgba(0,180,216,0.3) 30%, rgba(0,180,216,0.5) 50%, rgba(0,180,216,0.3) 70%, transparent 100%)",
    borderRadius: 4,
    position: "relative",
  },
  pedestalGlow: {
    position: "absolute",
    top: -20,
    left: "10%",
    right: "10%",
    height: 40,
    background: "radial-gradient(ellipse at center, rgba(0,180,216,0.25) 0%, transparent 70%)",
    filter: "blur(10px)",
    pointerEvents: "none",
  },
  statsRow: {
    display: "flex",
    justifyContent: "center",
    gap: "clamp(30px, 5vw, 80px)",
    paddingTop: 16,
    flexWrap: "wrap",
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    background: "rgba(0,180,216,0.1)",
    border: "1px solid rgba(0,180,216,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  statValue: {
    fontFamily: "var(--font-mono)",
    fontSize: "clamp(24px, 3vw, 36px)",
    fontWeight: 700,
    color: "#FFFFFF",
  },
  statLabel: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(11px, 1vw, 13px)",
    color: "#94A3B8",
  },
  counterWrap: {
    position: "absolute",
    bottom: 36,
    right: 56,
    zIndex: 10,
    pointerEvents: "none",
  },
};
