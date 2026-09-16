import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import { BrandLogo } from "../config/assets";

const data = SLIDES[0];

const serviceIcons = {
  web: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7DD3FC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  mobile: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7DD3FC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="12" y1="18" x2="12" y2="18" strokeWidth="2" />
    </svg>
  ),
  cloud: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7DD3FC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  consulting: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7DD3FC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
};

export default function SlideHome({ isActive }) {
  const logoRef = useRef(null);
  const topRightRef = useRef(null);
  const headlineRef = useRef(null);
  const subHeadlineRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const visualRef = useRef(null);
  const servicesRef = useRef(null);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isActive || hasAnimated.current) return;
    hasAnimated.current = true;

    const tl = gsap.timeline({ delay: 0.2 });

    gsap.set(logoRef.current, { opacity: 0, y: -20 });
    tl.to(logoRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.1);

    gsap.set(topRightRef.current, { opacity: 0, x: 20 });
    tl.to(topRightRef.current, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }, 0.2);

    gsap.set(headlineRef.current, { opacity: 0, y: 40, filter: "blur(8px)" });
    tl.to(headlineRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.0, ease: "power3.out" }, 0.3);

    gsap.set(subHeadlineRef.current, { opacity: 0, y: 20 });
    tl.to(subHeadlineRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.5);

    gsap.set(descRef.current, { opacity: 0, y: 20 });
    tl.to(descRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.6);

    gsap.set(ctaRef.current, { opacity: 0, scale: 0.9 });
    tl.to(ctaRef.current, { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.5)" }, 0.8);

    gsap.set(visualRef.current, { opacity: 0, x: 60, scale: 0.95 });
    tl.to(visualRef.current, { opacity: 1, x: 0, scale: 1, duration: 1.1, ease: "expo.out" }, 0.4);

    gsap.set(servicesRef.current, { opacity: 0, y: 20 });
    tl.to(servicesRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.9);

    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 1.0);
  }, [isActive]);

  return (
    <div style={S.wrap}>
      {/* Ambient background effects */}
      <div className="bg-grid" />
      <div style={S.orbGlow} />

      {/* Diagonal light streaks */}
      <div style={S.streaksWrap}>
        <div style={S.streak1} />
        <div style={S.streak2} />
        <div style={{ ...S.streak1, right: "18%", width: 2, opacity: 0.5, filter: "blur(4px)" }} />
        <div style={{ ...S.streak2, right: "22%", width: 2, opacity: 0.3, filter: "blur(5px)" }} />
      </div>

      <div style={S.container}>
        {/* Header row: Logo + Top Right text */}
        <div style={S.headerRow}>
          <div ref={logoRef}>
            <BrandLogo size={48} />
          </div>
          <div ref={topRightRef} style={S.topRight}>
            {data.topRight}
          </div>
        </div>

        {/* Main content */}
        <div style={S.bodyRow}>
          <div style={S.leftCol}>
            <h1 ref={headlineRef} style={S.headline}>
              {data.headline}<br />
              <span style={S.headlineAccent}>{data.headlineAccent}</span>
            </h1>

            <p ref={subHeadlineRef} style={S.subheadline}>
              {data.subheadline}
            </p>

            <p ref={descRef} style={S.description}>
              {data.description}
            </p>

            <div ref={ctaRef}>
              <button className="btn-gold">
                {data.cta} &nbsp;&#8594;
              </button>
            </div>
          </div>

          <div ref={visualRef} style={S.rightCol}>
            {/* Glow behind laptop */}
            <div style={S.laptopGlow} />
            <div style={S.laptopFrame}>
              <div style={S.laptopScreen}>
                <div style={S.screenContent}>
                  <div style={S.screenHeader}>
                    <div style={S.screenDot} />
                    <div style={{ ...S.screenDot, background: "#F59E0B" }} />
                    <div style={{ ...S.screenDot, background: "#10B981" }} />
                  </div>
                  <div style={S.screenCode}>
                    <div style={{ ...S.codeLine, width: "60%" }} />
                    <div style={{ ...S.codeLine, width: "80%", opacity: 0.6 }} />
                    <div style={{ ...S.codeLine, width: "45%", opacity: 0.4 }} />
                    <div style={{ ...S.codeLine, width: "70%", opacity: 0.7 }} />
                    <div style={{ ...S.codeLine, width: "55%", opacity: 0.5 }} />
                  </div>
                  <div style={S.screenLogoOverlay}>
                    <img src="/LOGOIMG.png" alt="NexGravision" style={S.screenLogo} />
                    <div style={S.screenLogoText}>NEXGRAVISION</div>
                  </div>
                </div>
              </div>
              <div style={S.laptopBase} />
            </div>
            {/* Floating text overlay */}
            <div style={S.floatingText}>
              <span style={{ color: "#7DD3FC" }}>Ideas</span>
              <br />
              <span style={{ color: "#94A3B8", fontSize: "clamp(11px, 1.2vw, 14px)" }}>into</span>
              <br />
              <span style={{ color: "#FFFFFF", fontWeight: 600 }}>Digital</span>
              <br />
              <span style={{ color: "#FFFFFF", fontWeight: 600 }}>Solutions</span>
            </div>
          </div>
        </div>

        {/* Bottom services row */}
        <div ref={servicesRef} style={S.servicesRow}>
          {data.services.map((svc, i) => (
            <div key={i} style={S.serviceItem}>
              <div style={S.serviceIconWrap}>
                {serviceIcons[svc.icon]}
              </div>
              <span style={S.serviceLabel}>{svc.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Slide counter */}
      <div ref={counterRef} style={S.counterWrap}>
        <span className="slide-counter" style={{ position: "static" }}>
          01 / 05
        </span>
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
    background: "linear-gradient(180deg, #080D1A 0%, #0C1222 50%, #101828 100%)",
  },
  orbGlow: {
    position: "absolute",
    top: "35%",
    right: "20%",
    width: "clamp(300px, 40vw, 500px)",
    height: "clamp(300px, 40vw, 500px)",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(0,180,216,0.15) 0%, transparent 70%)",
    filter: "blur(60px)",
    pointerEvents: "none",
    zIndex: 0,
  },
  streaksWrap: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    zIndex: 1,
    overflow: "hidden",
  },
  streak1: {
    position: "absolute",
    top: "-20%",
    right: "5%",
    width: 3,
    height: "140%",
    background: "linear-gradient(180deg, transparent 0%, rgba(0,180,216,0.25) 40%, rgba(0,180,216,0.4) 50%, rgba(0,180,216,0.25) 60%, transparent 100%)",
    transform: "rotate(25deg)",
    filter: "blur(2px)",
  },
  streak2: {
    position: "absolute",
    top: "-10%",
    right: "12%",
    width: 2,
    height: "130%",
    background: "linear-gradient(180deg, transparent 0%, rgba(0,180,216,0.12) 45%, rgba(0,180,216,0.25) 50%, rgba(0,180,216,0.12) 55%, transparent 100%)",
    transform: "rotate(22deg)",
    filter: "blur(3px)",
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
    alignItems: "center",
    justifyContent: "space-between",
    gap: "clamp(20px, 4vw, 60px)",
    marginTop: "auto",
    marginBottom: "auto",
    flexWrap: "wrap",
  },
  leftCol: {
    flex: "1 1 420px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    minWidth: 0,
  },
  headline: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(32px, 4.5vw, 58px)",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
    marginBottom: 16,
  },
  headlineAccent: {
    background: "linear-gradient(90deg, #7DD3FC 0%, #00B4D8 50%, #0284C7 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "clamp(36px, 5vw, 64px)",
  },
  subheadline: {
    fontFamily: "var(--font-mono)",
    fontSize: "clamp(12px, 1.2vw, 15px)",
    fontWeight: 500,
    color: "#94A3B8",
    letterSpacing: "0.04em",
    marginBottom: 20,
  },
  description: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(13px, 1.3vw, 16px)",
    color: "#94A3B8",
    lineHeight: 1.7,
    maxWidth: 500,
    marginBottom: 32,
    fontWeight: 400,
  },
  rightCol: {
    flex: "1 1 380px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    minWidth: 0,
  },
  laptopGlow: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "120%",
    height: "130%",
    background: "radial-gradient(ellipse at center, rgba(0,180,216,0.18) 0%, rgba(0,180,216,0.06) 40%, transparent 70%)",
    filter: "blur(30px)",
    pointerEvents: "none",
    zIndex: 0,
  },
  laptopFrame: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  laptopScreen: {
    width: "clamp(280px, 32vw, 460px)",
    height: "clamp(180px, 20vw, 290px)",
    background: "#0F172A",
    borderRadius: "12px 12px 0 0",
    border: "2px solid #1E293B",
    overflow: "hidden",
    position: "relative",
    boxShadow: "0 0 40px rgba(0,180,216,0.2), 0 20px 60px rgba(0,0,0,0.5)",
  },
  screenContent: {
    width: "100%",
    height: "100%",
    padding: "12px 16px",
    position: "relative",
  },
  screenHeader: {
    display: "flex",
    gap: 6,
    marginBottom: 16,
  },
  screenDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "#EF4444",
  },
  screenCode: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  codeLine: {
    height: 6,
    borderRadius: 3,
    background: "linear-gradient(90deg, rgba(0,180,216,0.4) 0%, rgba(0,180,216,0.15) 100%)",
  },
  screenLogoOverlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
    opacity: 0.8,
  },
  screenLogo: {
    width: 36,
    height: 36,
    objectFit: "contain",
    filter: "drop-shadow(0 0 10px rgba(0,180,216,0.5))",
  },
  screenLogoText: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    fontWeight: 700,
    color: "#7DD3FC",
    letterSpacing: "0.15em",
  },
  laptopBase: {
    width: "clamp(320px, 36vw, 520px)",
    height: 14,
    background: "linear-gradient(180deg, #1E293B 0%, #0F172A 100%)",
    borderRadius: "0 0 8px 8px",
    border: "2px solid #1E293B",
    borderTop: "none",
  },
  floatingText: {
    position: "absolute",
    right: "clamp(-20px, -2vw, 10px)",
    top: "15%",
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(13px, 1.4vw, 17px)",
    fontWeight: 400,
    lineHeight: 1.5,
    textAlign: "left",
    zIndex: 2,
  },
  servicesRow: {
    display: "flex",
    alignItems: "center",
    gap: "clamp(20px, 3vw, 48px)",
    paddingTop: 16,
    flexWrap: "wrap",
  },
  serviceItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  serviceIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 10,
    background: "rgba(0,180,216,0.1)",
    border: "1px solid rgba(0,180,216,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  serviceLabel: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(11px, 1vw, 13px)",
    fontWeight: 500,
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
