import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import { BrandLogo } from "../config/assets";

const data = SLIDES[4];

const valueIcons = {
  Innovate: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
    </svg>
  ),
  Build: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  Transform: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  ),
};

export default function SlideThankYou({ isActive }) {
  const headlineRef = useRef(null);
  const logoRef = useRef(null);
  const subRef = useRef(null);
  const descRef = useRef(null);
  const valuesRef = useRef(null);
  const ctaRef = useRef(null);
  const contactRef = useRef(null);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isActive || hasAnimated.current) return;
    hasAnimated.current = true;

    const tl = gsap.timeline({ delay: 0.3 });

    gsap.set(logoRef.current, { opacity: 0, y: -20 });
    tl.to(logoRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.1);

    gsap.set(headlineRef.current, { opacity: 0, scale: 0.8, filter: "blur(10px)" });
    tl.to(headlineRef.current, { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.2, ease: "expo.out" }, 0.1);

    gsap.set(subRef.current, { opacity: 0, y: 20 });
    tl.to(subRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.5);

    gsap.set(descRef.current, { opacity: 0, y: 20 });
    tl.to(descRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.6);

    gsap.set(valuesRef.current, { opacity: 0, y: 20 });
    tl.to(valuesRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.8);

    gsap.set(ctaRef.current, { opacity: 0, scale: 0.9 });
    tl.to(ctaRef.current, { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.5)" }, 0.9);

    gsap.set(contactRef.current, { opacity: 0, y: 20 });
    tl.to(contactRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 1.0);

    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 1.1);
  }, [isActive]);

  return (
    <div style={S.wrap}>
      {/* Mountain sunrise background */}
      <div style={S.mountainBg}>
        <div style={S.sunriseGlow} />
        <div style={S.mountain1} />
        <div style={S.mountain2} />
        <div style={S.mountain3} />
      </div>

      {/* Overlay gradient */}
      <div style={S.overlay} />

      {/* Header - full width */}
      <div style={S.headerRow}>
        <div ref={logoRef}>
          <BrandLogo size={48} />
        </div>
        <div style={S.topRight}>
          Together We Grow
        </div>
      </div>

      <div style={S.container}>
        {/* Center content */}
        <div style={S.centerContent}>
          <h1 ref={headlineRef} style={S.headline}>
            Thank You!
          </h1>

          <p ref={subRef} style={S.subheadline}>
            {data.subheadline}
          </p>

          <p ref={descRef} style={S.description}>
            {data.description}
          </p>

          {/* Values icons */}
          <div ref={valuesRef} style={S.valuesRow}>
            {data.values.map((val, i) => (
              <div key={i} style={S.valueItem}>
                <div style={S.valueIconWrap}>
                  {valueIcons[val]}
                </div>
                <span style={S.valueLabel}>{val}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div ref={ctaRef} style={S.ctaWrap}>
            <button className="btn-gold">
              {data.cta} &nbsp;&#8594;
            </button>
          </div>
        </div>

        {/* Footer contact */}
        <div ref={contactRef} style={S.footerRow}>
          <div style={S.contactItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
            </svg>
            <span style={S.contactText}>{data.contact.email}</span>
          </div>
          <div style={S.contactItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span style={S.contactText}>{data.contact.website}</span>
          </div>
        </div>
      </div>

      <div ref={counterRef} style={S.counterWrap}>
        <span className="slide-counter" style={{ position: "static" }}>05 / 05</span>
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
    overflow: "hidden",
    background: "#080D1A",
  },
  mountainBg: {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    zIndex: 0,
  },
  sunriseGlow: {
    position: "absolute",
    bottom: "20%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "120%",
    height: "60%",
    background: "radial-gradient(ellipse at center bottom, rgba(251,191,36,0.15) 0%, rgba(245,158,11,0.08) 30%, transparent 70%)",
    filter: "blur(40px)",
  },
  mountain1: {
    position: "absolute",
    bottom: 0,
    left: "-5%",
    width: "45%",
    height: "55%",
    background: "linear-gradient(180deg, #1E293B 0%, #0F172A 100%)",
    clipPath: "polygon(0% 100%, 50% 0%, 100% 100%)",
    opacity: 0.6,
  },
  mountain2: {
    position: "absolute",
    bottom: 0,
    left: "25%",
    width: "50%",
    height: "65%",
    background: "linear-gradient(180deg, #1E293B 0%, #0F172A 100%)",
    clipPath: "polygon(0% 100%, 45% 5%, 55% 10%, 100% 100%)",
    opacity: 0.8,
  },
  mountain3: {
    position: "absolute",
    bottom: 0,
    right: "-5%",
    width: "45%",
    height: "50%",
    background: "linear-gradient(180deg, #1E293B 0%, #0F172A 100%)",
    clipPath: "polygon(0% 100%, 60% 10%, 100% 100%)",
    opacity: 0.5,
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(8,13,26,0.7) 0%, rgba(8,13,26,0.3) 40%, rgba(8,13,26,0.6) 100%)",
    zIndex: 1,
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
    paddingTop: "clamp(80px, 10vh, 120px)",
  },
  headerRow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "clamp(16px, 3vw, 36px) clamp(16px, 4vw, 56px)",
    zIndex: 20,
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
    fontFamily: "var(--font-script)",
    fontSize: "clamp(48px, 8vw, 100px)",
    fontWeight: 400,
    color: "#FFFFFF",
    lineHeight: 1.1,
    marginBottom: 16,
    textShadow: "0 0 40px rgba(0,180,216,0.3)",
  },
  subheadline: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(18px, 2.5vw, 28px)",
    fontWeight: 600,
    color: "#F1F5F9",
    marginBottom: 16,
  },
  description: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(13px, 1.3vw, 16px)",
    color: "#94A3B8",
    lineHeight: 1.7,
    maxWidth: 500,
    marginBottom: 36,
  },
  valuesRow: {
    display: "flex",
    alignItems: "center",
    gap: "clamp(24px, 3vw, 48px)",
    marginBottom: 36,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  valueItem: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  valueIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 10,
    background: "rgba(0,180,216,0.1)",
    border: "1px solid rgba(0,180,216,0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  valueLabel: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(13px, 1.3vw, 16px)",
    fontWeight: 500,
    color: "#CBD5E1",
  },
  ctaWrap: {
    display: "flex",
    alignItems: "center",
  },
  footerRow: {
    display: "flex",
    justifyContent: "center",
    gap: "clamp(24px, 3vw, 48px)",
    paddingBottom: 8,
    flexWrap: "wrap",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  contactText: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(11px, 1vw, 13px)",
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
