import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import { BrandLogo } from "../config/assets";

const data = SLIDES[1];

const FEATURES = [
  { icon: "gear", title: "Custom Software\nDevelopment", subtitle: "Built for your unique needs" },
  { icon: "cloud", title: "Cloud & SaaS\nSolutions", subtitle: "Flexible and scalable" },
  { icon: "mobile", title: "Mobile App\nDevelopment", subtitle: "iOS & Android" },
  { icon: "globe", title: "Web Solutions", subtitle: "Modern. Fast. Responsive." },
  { icon: "pen", title: "UI/UX Design", subtitle: "Designs that engage" },
  { icon: "headset", title: "Ongoing Support", subtitle: "Always with you" },
];

const BADGES = [
  { label: "Clean Code", subtitle: "Efficient & Reliable", icon: "code", pos: { top: "8%", left: "-8%" } },
  { label: "Smart Solutions", subtitle: "Innovative. Scalable. Future-ready.", icon: "lightbulb", pos: { top: "-5%", right: "-12%" } },
  { label: "Secure & Reliable", subtitle: "Your Data. Our Priority.", icon: "shield", pos: { bottom: "10%", right: "-15%" } },
  { label: "Business Growth", subtitle: "Technology that scales.", icon: "rocket", pos: { bottom: "-5%", left: "-5%" } },
];

const featureIconSvgs = {
  gear: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  cloud: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
  mobile: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
  globe: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  pen: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
  headset: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>,
};

const badgeIconSvgs = {
  code: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  lightbulb: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>,
  shield: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  rocket: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>,
};

export default function SlideSoftware({ isActive }) {
  const logoRef = useRef(null);
  const topRightRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const descRef = useRef(null);
  const featuresRef = useRef(null);
  const circleRef = useRef(null);
  const badgesRef = useRef(null);
  const photosRef = useRef(null);
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

    gsap.set(headlineRef.current, { opacity: 0, y: 35, filter: "blur(8px)" });
    tl.to(headlineRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.0, ease: "power3.out" }, 0.3);

    gsap.set(descRef.current, { opacity: 0, y: 20 });
    tl.to(descRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.5);

    gsap.set(featuresRef.current, { opacity: 0, y: 30 });
    tl.to(featuresRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.6);

    gsap.set(circleRef.current, { opacity: 0, scale: 0.7, rotate: -10 });
    tl.to(circleRef.current, { opacity: 1, scale: 1, rotate: 0, duration: 1.2, ease: "expo.out" }, 0.4);

    if (photosRef.current) {
      gsap.set(photosRef.current.children, { opacity: 0, scale: 0.6 });
      tl.to(photosRef.current.children, { opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: "back.out(1.5)" }, 0.7);
    }

    if (badgesRef.current) {
      gsap.set(badgesRef.current.children, { opacity: 0, scale: 0.7, y: 20 });
      tl.to(badgesRef.current.children, { opacity: 1, scale: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "back.out(1.7)" }, 0.9);
    }

    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 1.1);
  }, [isActive]);

  return (
    <div style={S.wrap}>
      {/* Subtle background circles */}
      <div style={S.bgCircle1} />
      <div style={S.bgCircle2} />

      <div style={S.container}>
        {/* Header */}
        <div style={S.headerRow}>
          <div ref={logoRef}>
            <BrandLogo size={42} />
          </div>
          <div ref={topRightRef} style={S.topRightWrap}>
            <div style={S.topRightLine} />
            <span style={S.topRight}>{data.topRight}</span>
          </div>
        </div>

        {/* Body */}
        <div style={S.bodyRow}>
          {/* Left Column */}
          <div style={S.leftCol}>
            <div ref={tagRef} style={S.sectionTag}>{data.sectionTag}</div>
            <h2 ref={headlineRef} style={S.headline}>
              {data.headline}<br />
              <span style={S.headlineAccent}>Our {data.headlineAccent}</span>
            </h2>
            <p ref={descRef} style={S.description}>{data.description}</p>

            <div ref={featuresRef} style={S.featuresGrid}>
              {FEATURES.map((feat, i) => (
                <div key={i} style={S.featureCard}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,180,216,0.12)"; e.currentTarget.style.borderColor = "rgba(0,180,216,0.3)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "rgba(0,180,216,0.1)"; }}
                >
                  <div style={S.featureIconWrap}>
                    {featureIconSvgs[feat.icon]}
                  </div>
                  <div style={S.featureTextWrap}>
                    <div style={S.featureTitle}>{feat.title}</div>
                    <div style={S.featureSubtitle}>{feat.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Circular Visual */}
          <div style={S.rightCol}>
            <div style={S.circleVisualWrap}>
              {/* Outer ring decorations */}
              <div style={S.outerRing1} />
              <div style={S.outerRing2} />

              {/* Main circle */}
              <div ref={circleRef} style={S.mainCircle}>
                <div style={S.mainCircleInner}>
                  <img src="/LOGOIMG.png" alt="NexGravision" style={S.centerLogo} />
                  <div style={S.centerText}>NEXGRAVISION</div>
                </div>
                <div style={S.glowRing} />
              </div>

              {/* Photo circles */}
              <div ref={photosRef} style={S.photosWrap}>
                <div style={S.photoCircle1}>
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80" alt="Professional" style={S.photoImg} />
                </div>
                <div style={S.photoCircle2}>
                  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&q=80" alt="Developer" style={S.photoImg} />
                </div>
              </div>

              {/* Floating badges */}
              <div ref={badgesRef} style={S.badgesWrap}>
                {BADGES.map((badge, i) => (
                  <div key={i} style={{ ...S.badge, ...badge.pos }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,180,216,0.15)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)"; }}
                  >
                    <div style={S.badgeIconWrap}>
                      {badgeIconSvgs[badge.icon]}
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
    padding: "clamp(16px, 3vw, 40px) clamp(16px, 4vw, 56px)",
    overflow: "hidden",
    background: "linear-gradient(160deg, #FFFFFF 0%, #F0F5FB 30%, #E8F0FA 60%, #F5F8FC 100%)",
  },
  bgCircle1: {
    position: "absolute",
    top: "-15%",
    right: "-10%",
    width: "clamp(400px, 50vw, 700px)",
    height: "clamp(400px, 50vw, 700px)",
    borderRadius: "50%",
    border: "1px solid rgba(0,180,216,0.06)",
    pointerEvents: "none",
  },
  bgCircle2: {
    position: "absolute",
    bottom: "-20%",
    left: "-15%",
    width: "clamp(350px, 45vw, 600px)",
    height: "clamp(350px, 45vw, 600px)",
    borderRadius: "50%",
    border: "1px solid rgba(0,180,216,0.04)",
    pointerEvents: "none",
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
    gap: 12,
  },
  topRightLine: {
    width: 40,
    height: 2,
    background: "linear-gradient(90deg, transparent, #00B4D8)",
    borderRadius: 1,
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
    flex: "1 1 440px",
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
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    marginBottom: 14,
  },
  headline: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(30px, 4vw, 50px)",
    fontWeight: 700,
    color: "#0F172A",
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
    marginBottom: 18,
  },
  headlineAccent: {
    background: "linear-gradient(135deg, #7C3AED 0%, #6366F1 30%, #3B82F6 70%, #00B4D8 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  description: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(13px, 1.3vw, 16px)",
    color: "#475569",
    lineHeight: 1.75,
    maxWidth: 500,
    marginBottom: 32,
    fontWeight: 400,
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "clamp(10px, 1.2vw, 16px)",
    width: "100%",
    maxWidth: 560,
  },
  featureCard: {
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
    padding: "14px 12px",
    borderRadius: 14,
    background: "rgba(255,255,255,0.8)",
    border: "1px solid rgba(0,180,216,0.1)",
    transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
    cursor: "default",
  },
  featureIconWrap: {
    width: 40,
    height: 40,
    minWidth: 40,
    borderRadius: 10,
    background: "linear-gradient(135deg, rgba(0,180,216,0.08) 0%, rgba(99,102,241,0.06) 100%)",
    border: "1px solid rgba(0,180,216,0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  featureTextWrap: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  featureTitle: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(11px, 1vw, 13px)",
    fontWeight: 600,
    color: "#0F172A",
    lineHeight: 1.3,
    whiteSpace: "pre-line",
  },
  featureSubtitle: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(9px, 0.8vw, 11px)",
    color: "#64748B",
    lineHeight: 1.4,
  },
  rightCol: {
    flex: "1 1 400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    minHeight: 420,
  },
  circleVisualWrap: {
    position: "relative",
    width: "clamp(320px, 35vw, 480px)",
    height: "clamp(320px, 35vw, 480px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  outerRing1: {
    position: "absolute",
    inset: -20,
    borderRadius: "50%",
    border: "1.5px solid rgba(0,180,216,0.1)",
  },
  outerRing2: {
    position: "absolute",
    inset: -40,
    borderRadius: "50%",
    border: "1px solid rgba(0,180,216,0.05)",
  },
  mainCircle: {
    width: "clamp(160px, 18vw, 220px)",
    height: "clamp(160px, 18vw, 220px)",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    zIndex: 5,
    boxShadow: "0 20px 60px rgba(0,0,0,0.15), 0 0 50px rgba(0,180,216,0.2)",
  },
  mainCircleInner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  centerLogo: {
    width: 52,
    height: 52,
    objectFit: "contain",
    filter: "drop-shadow(0 0 15px rgba(0,180,216,0.5))",
  },
  centerText: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 700,
    color: "#7DD3FC",
    letterSpacing: "0.18em",
  },
  glowRing: {
    position: "absolute",
    inset: -6,
    borderRadius: "50%",
    border: "2.5px solid rgba(0,180,216,0.4)",
    boxShadow: "0 0 25px rgba(0,180,216,0.3), inset 0 0 20px rgba(0,180,216,0.1)",
  },
  photosWrap: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
  },
  photoCircle1: {
    position: "absolute",
    top: "0%",
    right: "8%",
    width: "clamp(100px, 11vw, 150px)",
    height: "clamp(100px, 11vw, 150px)",
    borderRadius: "50%",
    overflow: "hidden",
    border: "3px solid rgba(255,255,255,0.9)",
    boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
    zIndex: 3,
  },
  photoCircle2: {
    position: "absolute",
    bottom: "5%",
    right: "0%",
    width: "clamp(90px, 10vw, 130px)",
    height: "clamp(90px, 10vw, 130px)",
    borderRadius: "50%",
    overflow: "hidden",
    border: "3px solid rgba(255,255,255,0.9)",
    boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
    zIndex: 3,
  },
  photoImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  badgesWrap: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
  },
  badge: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "12px 16px",
    borderRadius: 14,
    background: "rgba(255,255,255,0.95)",
    border: "1px solid rgba(0,180,216,0.1)",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    whiteSpace: "nowrap",
    pointerEvents: "auto",
    transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
    zIndex: 10,
    backdropFilter: "blur(8px)",
  },
  badgeIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 10,
    background: "linear-gradient(135deg, rgba(0,180,216,0.08) 0%, rgba(99,102,241,0.06) 100%)",
    border: "1px solid rgba(0,180,216,0.12)",
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
    marginTop: 1,
  },
  counterWrap: {
    position: "absolute",
    bottom: 28,
    right: 48,
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
    background: "rgba(0,180,216,0.15)",
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
