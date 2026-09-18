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
      {/* Real photographic office background */}
      <div style={S.photoBg} />

      {/* Dark blue tint overlay */}
      <div style={S.tintOverlay} />

      {/* Deep background gradient layer */}
      <div style={S.bgDeepLayer} />

      {/* Subtle grid overlay */}
      <div className="bg-grid" />

      {/* Right-side strong cyan ambient glow */}
      <div style={S.rightGlow} />

      {/* Bottom subtle blue glow */}
      <div style={S.bottomGlow} />

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
            {/* Floating text overlay matching the reference design */}
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
    background: "#050A14",
  },
  photoBg: {
    position: "absolute",
    inset: 0,
    backgroundImage: "url('/background.png')",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    pointerEvents: "none",
    zIndex: 0,
  },
  tintOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(90deg, rgba(5,10,20,0.92) 0%, rgba(5,10,20,0.75) 35%, rgba(5,10,20,0.2) 65%, transparent 100%)",
    pointerEvents: "none",
    zIndex: 1,
  },
  bgDeepLayer: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(5,10,20,0.3) 0%, transparent 30%, transparent 70%, rgba(5,10,20,0.4) 100%)",
    pointerEvents: "none",
    zIndex: 2,
  },
  rightGlow: {
    position: "absolute",
    top: "10%",
    right: "-5%",
    width: "clamp(400px, 45vw, 650px)",
    height: "clamp(400px, 50vh, 700px)",
    borderRadius: "30%",
    background: "radial-gradient(ellipse at center, rgba(0,140,220,0.18) 0%, rgba(0,100,200,0.1) 30%, rgba(0,60,140,0.05) 55%, transparent 75%)",
    filter: "blur(40px)",
    pointerEvents: "none",
    zIndex: 3,
  },
  bottomGlow: {
    position: "absolute",
    bottom: "-10%",
    left: "20%",
    width: "clamp(500px, 60vw, 900px)",
    height: "clamp(200px, 25vh, 350px)",
    borderRadius: "50%",
    background: "radial-gradient(ellipse at center, rgba(0,120,200,0.1) 0%, rgba(0,80,160,0.04) 40%, transparent 70%)",
    filter: "blur(50px)",
    pointerEvents: "none",
    zIndex: 3,
  },
  container: {
    width: "100%",
    maxWidth: 1280,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    zIndex: 10,
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
