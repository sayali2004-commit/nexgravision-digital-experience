import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import { BrandLogo } from "../config/assets";

const data = SLIDES[1];

const FEATURES = [
  { icon: "code", title: "Custom Software Development", subtitle: "Tailored to your needs" },
  { icon: "cloud", title: "Cloud & Web Solutions", subtitle: "Secure & Scalable" },
  { icon: "mobile", title: "Mobile App Development", subtitle: "iOS & Android" },
  { icon: "pen", title: "UI/UX Design", subtitle: "Simple, Beautiful, Effective" },
  { icon: "headset", title: "Ongoing Support", subtitle: "Always with you" },
  { icon: "chart", title: "Digital Transformation", subtitle: "For a smarter tomorrow" },
];

const INFO_CARDS = [
  {
    label: "Grow Faster",
    desc: "Scalable Solutions",
    iconBg: "linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)",
    iconBorder: "rgba(59,130,246,0.3)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    top: "8%",
    left: "0%",
  },
  {
    label: "Work Smarter",
    desc: "Automate & Save Time",
    iconBg: "linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)",
    iconBorder: "rgba(59,130,246,0.3)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    ),
    top: "4%",
    right: "2%",
  },
  {
    label: "Secure & Reliable",
    desc: "Your Data, Our Priority",
    iconBg: "linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)",
    iconBorder: "rgba(59,130,246,0.3)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    bottom: "18%",
    left: "5%",
  },
  {
    label: "Better Experience",
    desc: "For Your Customers",
    iconBg: "linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)",
    iconBorder: "rgba(59,130,246,0.3)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
    bottom: "12%",
    right: "0%",
  },
];

const featureIcons = {
  code: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
  cloud: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
  mobile: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
  pen: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
  headset: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>,
  chart: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
};

export default function SlideSoftware({ isActive }) {
  const logoRef = useRef(null);
  const topRightRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const descRef = useRef(null);
  const featuresRef = useRef(null);
  const compositionRef = useRef(null);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isActive || hasAnimated.current) return;
    hasAnimated.current = true;

    const tl = gsap.timeline({ delay: 0.15 });

    gsap.set(logoRef.current, { opacity: 0, y: -20 });
    tl.to(logoRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.05);

    gsap.set(topRightRef.current, { opacity: 0, x: 20 });
    tl.to(topRightRef.current, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }, 0.1);

    gsap.set(tagRef.current, { opacity: 0, x: -20 });
    tl.to(tagRef.current, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }, 0.15);

    gsap.set(headlineRef.current, { opacity: 0, y: 35, filter: "blur(8px)" });
    tl.to(headlineRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.0, ease: "power3.out" }, 0.25);

    gsap.set(descRef.current, { opacity: 0, y: 20 });
    tl.to(descRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.45);

    if (featuresRef.current) {
      gsap.set(featuresRef.current.children, { opacity: 0, y: 20 });
      tl.to(featuresRef.current.children, { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power3.out" }, 0.55);
    }

    const comp = compositionRef.current;
    if (comp) {
      const laptop = comp.querySelector('.laptop-wrap');
      const phone = comp.querySelector('.phone-wrap');
      const floats = comp.querySelectorAll('.float-el');
      const infos = comp.querySelectorAll('.info-card-el');

      if (laptop) { gsap.set(laptop, { opacity: 0, y: 40, scale: 0.9 }); tl.to(laptop, { opacity: 1, y: 0, scale: 1, duration: 1.0, ease: "power3.out" }, 0.4); }
      if (phone) { gsap.set(phone, { opacity: 0, y: 30, scale: 0.9 }); tl.to(phone, { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out" }, 0.6); }
      if (floats.length) { gsap.set(floats, { opacity: 0, scale: 0.5 }); tl.to(floats, { opacity: 1, scale: 1, duration: 0.7, stagger: 0.08, ease: "back.out(1.5)" }, 0.7); }
      if (infos.length) { gsap.set(infos, { opacity: 0, y: 15 }); tl.to(infos, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power3.out" }, 0.9); }
    }

    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 1.2);
  }, [isActive]);

  return (
    <div style={S.wrap}>
      {/* Header - full width */}
      <div style={S.headerRow}>
        <div ref={logoRef}>
          <BrandLogo size={48} dark />
        </div>
        <div ref={topRightRef} style={S.topRightWrap}>
          <span style={S.topRightText}>Smart Software</span>
          <div style={S.topRightDivider} />
          <span style={S.topRightText}>Better Business</span>
        </div>
      </div>

      <div style={S.container}>
        {/* Body */}
        <div style={S.bodyRow}>
          {/* LEFT COLUMN */}
          <div style={S.leftCol}>
            <div ref={tagRef} style={S.sectionTag}>OUR SOFTWARE</div>
            <h2 ref={headlineRef} style={S.headline}>
              What We Give<br />
              Our <span style={S.headlineAccent}>Customers</span>
            </h2>
            <p ref={descRef} style={S.description}>
              We build custom, scalable and user-friendly software solutions that solve real problems. Our technology helps businesses save time, reduce costs and achieve more — in today's fast-changing world.
            </p>

            <div ref={featuresRef} style={S.featuresGrid}>
              {FEATURES.map((feat, i) => (
                <div
                  key={i}
                  style={S.featureCard}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(59,130,246,0.12)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)"; }}
                >
                  <div style={S.featureIconCircle}>{featureIcons[feat.icon]}</div>
                  <div style={S.featureTextCol}>
                    <div style={S.featureTitle}>{feat.title}</div>
                    <div style={S.featureSubtitle}>{feat.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - Laptop/Phone Composition */}
          <div style={S.rightCol}>
            <div ref={compositionRef} style={S.composition}>
              {/* Background blobs */}
              <div style={S.bgBlob1} />
              <div style={S.bgBlob2} />
              <div style={S.bgBlob3} />

              {/* Laptop */}
              <div className="laptop-wrap" style={S.laptopWrap}>
                <div style={S.laptopScreen}>
                  <div style={S.laptopScreenInner}>
                    {/* Code lines */}
                    <div style={{ ...S.codeLine, width: "60%", background: "rgba(0,200,255,0.6)" }} />
                    <div style={{ ...S.codeLine, width: "45%", background: "rgba(168,85,247,0.5)", marginLeft: 16 }} />
                    <div style={{ ...S.codeLine, width: "70%", background: "rgba(59,130,246,0.5)", marginLeft: 8 }} />
                    <div style={{ ...S.codeLine, width: "35%", background: "rgba(16,185,129,0.5)", marginLeft: 24 }} />
                    <div style={{ ...S.codeLine, width: "55%", background: "rgba(0,200,255,0.4)", marginLeft: 12 }} />
                    <div style={{ ...S.codeLine, width: "40%", background: "rgba(249,115,22,0.4)", marginLeft: 20 }} />
                    <div style={{ ...S.codeLine, width: "65%", background: "rgba(59,130,246,0.4)", marginLeft: 8 }} />
                    <div style={{ ...S.codeLine, width: "30%", background: "rgba(168,85,247,0.4)", marginLeft: 16 }} />
                  </div>
                </div>
                <div style={S.laptopBase} />
              </div>

              {/* Phone */}
              <div className="phone-wrap" style={S.phoneWrap}>
                <div style={S.phoneScreen}>
                  <div style={S.phoneNotch} />
                  <div style={S.phoneContent}>
                    <div style={{ ...S.phoneBar, width: "70%", background: "rgba(59,130,246,0.5)" }} />
                    <div style={{ ...S.phoneBar, width: "50%", background: "rgba(168,85,247,0.4)" }} />
                    <div style={S.phoneCircle} />
                    <div style={{ ...S.phoneBar, width: "80%", background: "rgba(0,200,255,0.4)" }} />
                  </div>
                </div>
              </div>

              {/* Floating UI elements */}
              <div className="float-el" style={S.floatCode}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
              </div>
              <div className="float-el" style={S.floatCloud}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
              </div>
              <div className="float-el" style={S.floatChart}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="12" width="4" height="9" /><rect x="10" y="7" width="4" height="14" /><rect x="17" y="3" width="4" height="18" /></svg>
              </div>

              {/* Plant */}
              <div style={S.plantWrap}>
                <div style={S.plantPot} />
                <div style={S.plantLeaf1} />
                <div style={S.plantLeaf2} />
                <div style={S.plantLeaf3} />
              </div>

              {/* Info cards */}
              {INFO_CARDS.map((card, i) => (
                <div
                  key={i}
                  className="info-card-el"
                  style={{
                    ...S.infoCard,
                    top: card.top,
                    right: card.right,
                    bottom: card.bottom,
                    left: card.left,
                  }}
                >
                  <div style={{ ...S.infoIcon, background: card.iconBg, borderColor: card.iconBorder }}>
                    {card.icon}
                  </div>
                  <div style={S.infoTextCol}>
                    <div style={S.infoLabel}>{card.label}</div>
                    <div style={S.infoDesc}>{card.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Counter */}
      <div ref={counterRef} style={S.counterWrap}>
        <span style={S.counterText}>02 / 06</span>
        <div style={S.counterBar}>
          <div style={S.counterFill} />
        </div>
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
    padding: "clamp(16px, 3vw, 36px) clamp(16px, 4vw, 56px)",
    overflow: "hidden",
    background: "linear-gradient(160deg, #FFFFFF 0%, #F4F7FB 40%, #EDF2F9 70%, #F8FAFC 100%)",
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
    paddingTop: "clamp(80px, 10vh, 120px)",
  },
  headerRow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "clamp(16px, 3vw, 36px) clamp(16px, 4vw, 56px)",
    zIndex: 20,
  },
  topRightWrap: {
    display: "flex",
    alignItems: "center",
    gap: 16,
  },
  topRightText: {
    fontFamily: "var(--font-mono)",
    fontSize: "clamp(12px, 1.1vw, 14px)",
    fontWeight: 500,
    color: "#64748B",
    letterSpacing: "0.05em",
  },
  topRightDivider: {
    width: 2,
    height: 16,
    background: "rgba(0,180,216,0.3)",
    borderRadius: 1,
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
    flex: "1 1 420px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    minWidth: 0,
  },
  sectionTag: {
    fontFamily: "var(--font-mono)",
    fontSize: "clamp(12px, 1.1vw, 14px)",
    fontWeight: 600,
    color: "#3B82F6",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    marginBottom: 12,
  },
  headline: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(32px, 4.2vw, 54px)",
    fontWeight: 700,
    color: "#0F172A",
    lineHeight: 1.08,
    letterSpacing: "-0.025em",
    marginBottom: 18,
  },
  headlineAccent: {
    background: "linear-gradient(135deg, #7C3AED 0%, #6366F1 35%, #3B82F6 70%, #00B4D8 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  description: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(13px, 1.3vw, 16px)",
    color: "#475569",
    lineHeight: 1.75,
    maxWidth: 480,
    marginBottom: 30,
    fontWeight: 400,
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridAutoRows: "1fr",
    gap: "clamp(10px, 1.2vw, 16px)",
    width: "100%",
    maxWidth: 620,
  },
  featureCard: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    padding: "clamp(20px, 2.2vw, 28px)",
    borderRadius: 16,
    background: "rgba(255,255,255,0.85)",
    border: "1px solid rgba(59,130,246,0.08)",
    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
    transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
    cursor: "default",
    height: "clamp(120px, 15vh, 160px)",
  },
  featureIconCircle: {
    width: 62,
    height: 62,
    minWidth: 62,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #EFF8FF 0%, #DBEAFE 100%)",
    border: "1px solid rgba(59,130,246,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  featureTextCol: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    minWidth: 0,
    overflow: "hidden",
  },
  featureTitle: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(13px, 1.2vw, 15px)",
    fontWeight: 600,
    color: "#0F172A",
    lineHeight: 1.3,
  },
  featureSubtitle: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(11px, 1vw, 13px)",
    color: "#64748B",
    lineHeight: 1.4,
  },
  rightCol: {
    flex: "1 1 480px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    minHeight: 500,
  },
  composition: {
    position: "relative",
    width: "clamp(480px, 52vw, 680px)",
    height: "clamp(420px, 46vw, 580px)",
  },
  /* Background blobs */
  bgBlob1: {
    position: "absolute",
    top: "5%",
    right: "0%",
    width: "60%",
    height: "55%",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
    filter: "blur(40px)",
    pointerEvents: "none",
  },
  bgBlob2: {
    position: "absolute",
    bottom: "5%",
    left: "10%",
    width: "50%",
    height: "50%",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)",
    filter: "blur(35px)",
    pointerEvents: "none",
  },
  bgBlob3: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    height: "70%",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 60%)",
    filter: "blur(50px)",
    pointerEvents: "none",
  },
  /* Laptop */
  laptopWrap: {
    position: "absolute",
    top: "18%",
    left: "15%",
    width: "clamp(280px, 30vw, 400px)",
    zIndex: 3,
  },
  laptopScreen: {
    width: "100%",
    height: "clamp(180px, 20vw, 260px)",
    background: "linear-gradient(135deg, #0B1120 0%, #1A1F35 100%)",
    borderRadius: "12px 12px 0 0",
    border: "3px solid #2A3050",
    padding: 12,
    overflow: "hidden",
    boxShadow: "0 20px 60px rgba(0,0,0,0.3), 0 0 40px rgba(59,130,246,0.15)",
  },
  laptopScreenInner: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    paddingTop: 8,
  },
  codeLine: {
    height: 4,
    borderRadius: 2,
  },
  laptopBase: {
    width: "110%",
    height: 12,
    background: "linear-gradient(180deg, #3A4060 0%, #2A3050 100%)",
    borderRadius: "0 0 8px 8px",
    marginLeft: "-5%",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
  },
  /* Phone */
  phoneWrap: {
    position: "absolute",
    top: "25%",
    right: "15%",
    width: "clamp(80px, 8vw, 110px)",
    zIndex: 4,
  },
  phoneScreen: {
    width: "100%",
    height: "clamp(160px, 17vw, 220px)",
    background: "linear-gradient(180deg, #1E293B 0%, #0F172A 100%)",
    borderRadius: 16,
    border: "3px solid #334155",
    padding: 8,
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 15px 40px rgba(0,0,0,0.3), 0 0 25px rgba(59,130,246,0.1)",
  },
  phoneNotch: {
    width: "40%",
    height: 6,
    background: "#1A1F35",
    borderRadius: 4,
    margin: "0 auto 8px",
  },
  phoneContent: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    alignItems: "center",
  },
  phoneBar: {
    height: 3,
    borderRadius: 2,
  },
  phoneCircle: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    background: "linear-gradient(135deg, rgba(59,130,246,0.3) 0%, rgba(168,85,247,0.3) 100%)",
    margin: "4px 0",
  },
  /* Floating UI elements */
  floatCode: {
    position: "absolute",
    top: "22%",
    left: "35%",
    width: 52,
    height: 52,
    borderRadius: 14,
    background: "rgba(255,255,255,0.95)",
    border: "1px solid rgba(59,130,246,0.15)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 6,
  },
  floatCloud: {
    position: "absolute",
    top: "35%",
    right: "8%",
    width: 52,
    height: 52,
    borderRadius: 14,
    background: "rgba(255,255,255,0.95)",
    border: "1px solid rgba(59,130,246,0.15)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 6,
  },
  floatChart: {
    position: "absolute",
    bottom: "30%",
    left: "8%",
    width: 52,
    height: 52,
    borderRadius: 14,
    background: "rgba(255,255,255,0.95)",
    border: "1px solid rgba(59,130,246,0.15)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 6,
  },
  /* Plant */
  plantWrap: {
    position: "absolute",
    bottom: "20%",
    right: "5%",
    zIndex: 5,
  },
  plantPot: {
    width: 30,
    height: 24,
    background: "linear-gradient(180deg, #D4A574 0%, #B8865A 100%)",
    borderRadius: "0 0 6px 6px",
    margin: "0 auto",
  },
  plantLeaf1: {
    width: 14,
    height: 20,
    background: "#22C55E",
    borderRadius: "50% 0 50% 0",
    position: "absolute",
    top: -16,
    left: "50%",
    transform: "translateX(-50%) rotate(-15deg)",
  },
  plantLeaf2: {
    width: 12,
    height: 18,
    background: "#16A34A",
    borderRadius: "0 50% 0 50%",
    position: "absolute",
    top: -14,
    left: "30%",
    transform: "rotate(20deg)",
  },
  plantLeaf3: {
    width: 12,
    height: 18,
    background: "#4ADE80",
    borderRadius: "50% 0 50% 0",
    position: "absolute",
    top: -12,
    left: "65%",
    transform: "rotate(-25deg)",
  },
  /* Info cards */
  infoCard: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "12px 16px",
    borderRadius: 14,
    background: "rgba(255,255,255,0.96)",
    border: "1px solid rgba(59,130,246,0.1)",
    boxShadow: "0 6px 24px rgba(0,0,0,0.06), 0 0 10px rgba(59,130,246,0.03)",
    backdropFilter: "blur(10px)",
    zIndex: 10,
    whiteSpace: "nowrap",
  },
  infoIcon: {
    width: 40,
    height: 40,
    minWidth: 40,
    borderRadius: "50%",
    border: "1px solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  infoTextCol: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
  },
  infoLabel: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(12px, 1.1vw, 14px)",
    fontWeight: 600,
    color: "#0F172A",
    lineHeight: 1.3,
  },
  infoDesc: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(10px, 0.9vw, 12px)",
    color: "#64748B",
    lineHeight: 1.3,
  },
  /* Counter */
  counterWrap: {
    position: "absolute",
    bottom: 24,
    right: 44,
    display: "flex",
    alignItems: "center",
    gap: 12,
    zIndex: 10,
    pointerEvents: "none",
  },
  counterText: {
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    fontWeight: 500,
    color: "#94A3B8",
    letterSpacing: "0.1em",
  },
  counterBar: {
    width: 44,
    height: 3,
    borderRadius: 2,
    background: "rgba(59,130,246,0.12)",
    overflow: "hidden",
  },
  counterFill: {
    width: "33%",
    height: "100%",
    borderRadius: 2,
    background: "linear-gradient(90deg, #2563EB, #3B82F6)",
    boxShadow: "0 0 8px rgba(59,130,246,0.5)",
  },
};
