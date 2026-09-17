import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import { BrandLogo } from "../config/assets";

const data = SLIDES[1];

const FEATURES = [
  { icon: "gear", title: "Custom Software Development", subtitle: "Built for your unique needs" },
  { icon: "cloud", title: "Cloud & SaaS Solutions", subtitle: "Flexible and scalable" },
  { icon: "mobile", title: "Mobile App Development", subtitle: "iOS & Android" },
  { icon: "globe", title: "Web Solutions", subtitle: "Modern. Fast. Responsive." },
  { icon: "pen", title: "UI/UX Design", subtitle: "Designs that engage" },
  { icon: "headset", title: "Ongoing Support", subtitle: "Always with you" },
];

const BADGES = [
  {
    label: "Clean Code",
    subtitle: "Efficient & Reliable",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    iconBg: "linear-gradient(135deg, #E0F7FA 0%, #B2EBF2 100%)",
    iconBorder: "rgba(0,180,216,0.25)",
    top: "18%",
    left: "-5%",
  },
  {
    label: "Smart Solutions",
    subtitle: "Innovative. Scalable. Future-ready.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" /><path d="M10 22h4" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
      </svg>
    ),
    iconBg: "linear-gradient(135deg, #F3E8FF 0%, #E9D5FF 100%)",
    iconBorder: "rgba(124,58,237,0.25)",
    top: "5%",
    right: "-8%",
  },
  {
    label: "Secure & Reliable",
    subtitle: "Your Data. Our Priority.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    iconBg: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
    iconBorder: "rgba(59,130,246,0.25)",
    bottom: "18%",
    right: "-12%",
  },
  {
    label: "Business Growth",
    subtitle: "Technology that scales.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
    iconBg: "linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)",
    iconBorder: "rgba(139,92,246,0.25)",
    bottom: "5%",
    left: "-8%",
  },
];

const featureIcons = {
  gear: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  cloud: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
  mobile: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
  globe: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  pen: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
  headset: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>,
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

    // Composition entrance
    const comp = compositionRef.current;
    if (comp) {
      const center = comp.querySelector('.center-circle');
      const photos = comp.querySelectorAll('.photo-item');
      const badges = comp.querySelectorAll('.badge-item');
      const rings = comp.querySelectorAll('.deco-ring');

      gsap.set(rings, { opacity: 0, scale: 0.8 });
      tl.to(rings, { opacity: 1, scale: 1, duration: 1.0, stagger: 0.1, ease: "expo.out" }, 0.3);

      gsap.set(center, { opacity: 0, scale: 0.5 });
      tl.to(center, { opacity: 1, scale: 1, duration: 1.1, ease: "back.out(1.3)" }, 0.4);

      gsap.set(photos, { opacity: 0, scale: 0.4 });
      tl.to(photos, { opacity: 1, scale: 1, duration: 0.9, stagger: 0.12, ease: "back.out(1.5)" }, 0.7);

      gsap.set(badges, { opacity: 0, scale: 0.6, y: 15 });
      tl.to(badges, { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "back.out(1.8)" }, 1.0);
    }

    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 1.2);
  }, [isActive]);

  return (
    <div style={S.wrap}>
      <div style={S.container}>
        {/* Header */}
        <div style={S.headerRow}>
          <div ref={logoRef}>
            <BrandLogo size={42} />
          </div>
          <div ref={topRightRef} style={S.topRightWrap}>
            <div style={S.topRightLine} />
            <span style={S.topRightText}>Trusted by Businesses Worldwide</span>
          </div>
        </div>

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
              We build custom, scalable and secure software solutions that solve real problems. Our technology helps businesses grow, improve efficiency and stay ahead in a competitive world — today and for what's next.
            </p>

            <div ref={featuresRef} style={S.featuresGrid}>
              {FEATURES.map((feat, i) => (
                <div
                  key={i}
                  style={S.featureCard}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,140,216,0.12)"; }}
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

          {/* RIGHT COLUMN - Circular Composition */}
          <div style={S.rightCol}>
            <div ref={compositionRef} style={S.composition}>
              {/* Decorative rings */}
              <div className="deco-ring" style={S.ringOuter} />
              <div className="deco-ring" style={S.ringMiddle} />

              {/* Center circle */}
              <div className="center-circle" style={S.centerCircle}>
                <div style={S.centerGlowRing} />
                <img src="/LOGOIMG.png" alt="NexGravision" style={S.centerLogo} />
                <div style={S.centerText}>NEXGRAVISION</div>
              </div>

              {/* Photo 1: Top-right - woman professional */}
              <div className="photo-item" style={S.photo1}>
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
                  alt="Professional"
                  style={S.photoImg}
                />
              </div>

              {/* Photo 2: Right - developer coding */}
              <div className="photo-item" style={S.photo2}>
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80"
                  alt="Developer"
                  style={S.photoImg}
                />
              </div>

              {/* Photo 3: Left - workspace */}
              <div className="photo-item" style={S.photo3}>
                <img
                  src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=400&q=80"
                  alt="Workspace"
                  style={S.photoImg}
                />
              </div>

              {/* Floating Badges */}
              {BADGES.map((badge, i) => (
                <div
                  key={i}
                  className="badge-item"
                  style={{
                    ...S.badge,
                    top: badge.top,
                    right: badge.right,
                    bottom: badge.bottom,
                    left: badge.left,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.06)"; e.currentTarget.style.boxShadow = "0 10px 35px rgba(0,140,216,0.15)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.08)"; }}
                >
                  <div style={{ ...S.badgeIcon, background: badge.iconBg, borderColor: badge.iconBorder }}>
                    {badge.icon}
                  </div>
                  <div>
                    <div style={S.badgeLabel}>{badge.label}</div>
                    <div style={S.badgeSubtitle}>{badge.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Counter */}
      <div ref={counterRef} style={S.counterWrap}>
        <span style={S.counterText}>02 / 05</span>
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
  },
  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  topRightWrap: {
    display: "flex",
    alignItems: "center",
    gap: 14,
  },
  topRightLine: {
    width: 48,
    height: 2,
    background: "linear-gradient(90deg, transparent, #00B4D8)",
    borderRadius: 1,
  },
  topRightText: {
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
    color: "#00B4D8",
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
    gap: "clamp(10px, 1.2vw, 16px)",
    width: "100%",
    maxWidth: 540,
  },
  featureCard: {
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
    padding: "14px 12px",
    borderRadius: 14,
    background: "rgba(255,255,255,0.85)",
    border: "1px solid rgba(0,180,216,0.08)",
    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
    transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
    cursor: "default",
  },
  featureIconCircle: {
    width: 42,
    height: 42,
    minWidth: 42,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #EFF8FF 0%, #E0F2FE 100%)",
    border: "1px solid rgba(0,180,216,0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  featureTextCol: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
    minWidth: 0,
  },
  featureTitle: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(11px, 1vw, 13px)",
    fontWeight: 600,
    color: "#0F172A",
    lineHeight: 1.3,
  },
  featureSubtitle: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(9px, 0.8vw, 11px)",
    color: "#64748B",
    lineHeight: 1.4,
  },
  rightCol: {
    flex: "1 1 440px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    minHeight: 460,
  },
  composition: {
    position: "relative",
    width: "clamp(380px, 42vw, 560px)",
    height: "clamp(380px, 42vw, 560px)",
  },
  ringOuter: {
    position: "absolute",
    inset: 0,
    borderRadius: "50%",
    border: "1.5px solid rgba(0,180,216,0.08)",
  },
  ringMiddle: {
    position: "absolute",
    inset: 30,
    borderRadius: "50%",
    border: "1px solid rgba(0,180,216,0.05)",
  },
  centerCircle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "clamp(160px, 18vw, 220px)",
    height: "clamp(160px, 18vw, 220px)",
    borderRadius: "50%",
    background: "linear-gradient(145deg, #0B1120 0%, #162032 50%, #0F172A 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    zIndex: 5,
    boxShadow: "0 20px 60px rgba(0,0,0,0.2), 0 0 50px rgba(0,180,216,0.15)",
  },
  centerGlowRing: {
    position: "absolute",
    inset: -8,
    borderRadius: "50%",
    border: "3px solid rgba(0,180,216,0.5)",
    boxShadow: "0 0 30px rgba(0,180,216,0.4), 0 0 60px rgba(0,180,216,0.15), inset 0 0 20px rgba(0,180,216,0.1)",
    pointerEvents: "none",
  },
  centerLogo: {
    width: 52,
    height: 52,
    objectFit: "contain",
    filter: "drop-shadow(0 0 15px rgba(0,180,216,0.5))",
  },
  centerText: {
    fontFamily: "var(--font-mono)",
    fontSize: "clamp(10px, 1vw, 13px)",
    fontWeight: 700,
    color: "#7DD3FC",
    letterSpacing: "0.2em",
  },
  photo1: {
    position: "absolute",
    top: "5%",
    right: "15%",
    width: "clamp(100px, 12vw, 160px)",
    height: "clamp(100px, 12vw, 160px)",
    borderRadius: "50%",
    overflow: "hidden",
    border: "4px solid rgba(255,255,255,0.95)",
    boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
    zIndex: 4,
  },
  photo2: {
    position: "absolute",
    right: "5%",
    bottom: "20%",
    width: "clamp(90px, 10.5vw, 140px)",
    height: "clamp(90px, 10.5vw, 140px)",
    borderRadius: "50%",
    overflow: "hidden",
    border: "4px solid rgba(255,255,255,0.95)",
    boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
    zIndex: 4,
  },
  photo3: {
    position: "absolute",
    left: "8%",
    bottom: "25%",
    width: "clamp(85px, 10vw, 130px)",
    height: "clamp(85px, 10vw, 130px)",
    borderRadius: "50%",
    overflow: "hidden",
    border: "4px solid rgba(255,255,255,0.95)",
    boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
    zIndex: 4,
  },
  photoImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  badge: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "12px 16px",
    borderRadius: 14,
    background: "rgba(255,255,255,0.95)",
    border: "1px solid rgba(0,180,216,0.08)",
    boxShadow: "0 6px 24px rgba(0,0,0,0.08)",
    whiteSpace: "nowrap",
    transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
    zIndex: 10,
    backdropFilter: "blur(10px)",
  },
  badgeIcon: {
    width: 38,
    height: 38,
    borderRadius: "50%",
    border: "1px solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  badgeLabel: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(11px, 1vw, 13px)",
    fontWeight: 600,
    color: "#0F172A",
  },
  badgeSubtitle: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(8px, 0.7vw, 10px)",
    color: "#64748B",
  },
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
    background: "rgba(0,180,216,0.12)",
    overflow: "hidden",
  },
  counterFill: {
    width: "40%",
    height: "100%",
    borderRadius: 2,
    background: "linear-gradient(90deg, #0284C7, #00B4D8)",
    boxShadow: "0 0 8px rgba(0,180,216,0.5)",
  },
};
