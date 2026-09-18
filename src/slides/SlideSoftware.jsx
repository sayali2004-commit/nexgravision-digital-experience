import React, { useEffect, useRef, useCallback } from "react";
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

const ORBIT_IMAGES = [
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=400&q=80",
];

const INFO_CARDS = [
  {
    label: "Grow Faster",
    desc: "Scalable Solutions",
    iconBg: "linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)",
    iconBorder: "rgba(16,185,129,0.3)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    top: "2%",
    left: "-6%",
  },
  {
    label: "Work Smarter",
    desc: "Automate & Save Time",
    iconBg: "linear-gradient(135deg, #F3E8FF 0%, #E9D5FF 100%)",
    iconBorder: "rgba(124,58,237,0.3)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" /><path d="M10 22h4" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
      </svg>
    ),
    top: "0%",
    right: "-4%",
  },
  {
    label: "Better Experience",
    desc: "For Your Customers",
    iconBg: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
    iconBorder: "rgba(59,130,246,0.3)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    bottom: "12%",
    right: "-6%",
  },
  {
    label: "Secure & Reliable",
    desc: "Your Data, Our Priority",
    iconBg: "linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)",
    iconBorder: "rgba(249,115,22,0.3)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    bottom: "8%",
    left: "-4%",
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

const CARD_COUNT = 4;
const ANGLE_STEP = 360 / CARD_COUNT;
const ORBIT_RADIUS = 185;
const CARD_SIZE = 130;
const INFO_WIDTH = 160;
const INFO_HEIGHT = 68;
const SPEED = 0.12;
const FRONT_SCALE = 1.12;
const BACK_SCALE = 0.82;
const FRONT_OPACITY = 1;
const BACK_OPACITY = 0.55;

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

  const cardRefs = useRef([]);
  const orbitAngle = useRef(0);
  const rafId = useRef(null);
  const isRunning = useRef(false);

  const setCardRef = useCallback((el, i) => { cardRefs.current[i] = el; }, []);

  const updateOrbit = useCallback(() => {
    orbitAngle.current = (orbitAngle.current + SPEED) % 360;

    for (let i = 0; i < CARD_COUNT; i++) {
      const card = cardRefs.current[i];
      if (!card) continue;

      const rawAngle = i * ANGLE_STEP + orbitAngle.current;
      const normalizedAngle = ((rawAngle % 360) + 360) % 360;
      const rad = (normalizedAngle * Math.PI) / 180;

      const x = Math.sin(rad) * ORBIT_RADIUS;
      const y = -Math.cos(rad) * ORBIT_RADIUS;

      const depthFactor = Math.cos(rad);
      const t = (depthFactor + 1) / 2;
      const scale = FRONT_SCALE + (BACK_SCALE - FRONT_SCALE) * (1 - t);
      const opacity = FRONT_OPACITY + (BACK_OPACITY - FRONT_OPACITY) * (1 - t);
      const zIndex = Math.round(t * 10);

      const blur = (1 - t) * 2;

      card.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${scale})`;
      card.style.opacity = opacity;
      card.style.zIndex = zIndex;
      card.style.filter = blur > 0.3 ? `blur(${blur}px)` : "none";
    }

    rafId.current = requestAnimationFrame(updateOrbit);
  }, []);

  useEffect(() => {
    if (isActive) {
      isRunning.current = true;
      rafId.current = requestAnimationFrame(updateOrbit);
    }
    return () => {
      isRunning.current = false;
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isActive, updateOrbit]);

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
      const center = comp.querySelector('.center-circle');
      gsap.set(center, { opacity: 0, scale: 0.5 });
      tl.to(center, { opacity: 1, scale: 1, duration: 1.1, ease: "back.out(1.3)" }, 0.4);

      cardRefs.current.forEach((c) => { if (c) gsap.set(c, { opacity: 0, scale: 0.4 }); });
      tl.to(cardRefs.current.filter(Boolean), { opacity: 1, scale: 1, duration: 0.9, stagger: 0.12, ease: "back.out(1.5)" }, 0.7);
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
          <div style={S.topRightLine} />
          <span style={S.topRightText}>Trusted by Businesses Worldwide</span>
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

          {/* RIGHT COLUMN - Circular Orbit Carousel */}
          <div style={S.rightCol}>
            <div ref={compositionRef} style={S.composition}>
              {/* Background gradient shapes */}
              <div style={S.bgBlob1} />
              <div style={S.bgBlob2} />
              <div style={S.bgBlob3} />

              {/* Orbit ring decorations */}
              <div style={S.orbitRingOuter} />
              <div style={S.orbitRingMid} />
              <div style={S.orbitRingInner} />

              {/* Atmospheric glow */}
              <div style={S.compGlow} />

              {/* Center fixed hub */}
              <div className="center-circle" style={S.centerCircle}>
                <div style={S.centerGlowRing} />
                <div style={S.centerPurpleRing} />
                <img src="/LOGOIMG.png" alt="NexGravision" style={S.centerLogo} />
                <div style={S.centerText}>NEXGRAVISION</div>
              </div>

              {/* Orbiting image cards */}
              {ORBIT_IMAGES.map((img, i) => (
                <div
                  key={i}
                  ref={(el) => setCardRef(el, i)}
                  style={S.orbitCard}
                >
                  <div style={S.orbitCardRing} />
                  <img src={img} alt={`Team ${i + 1}`} style={S.orbitCardImg} />
                </div>
              ))}

              {/* Floating info cards - positioned at edges */}
              {INFO_CARDS.map((card, i) => (
                <div
                  key={i}
                  style={{
                    ...S.infoCard,
                    top: card.top,
                    right: card.right,
                    bottom: card.bottom,
                    left: card.left,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px) scale(1.03)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.12), 0 0 15px rgba(0,180,216,0.06)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.06), 0 0 10px rgba(0,180,216,0.03)"; }}
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
    gridAutoRows: "1fr",
    gap: "clamp(10px, 1.2vw, 16px)",
    width: "100%",
    maxWidth: 540,
  },
  featureCard: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "clamp(16px, 1.8vw, 24px)",
    borderRadius: 16,
    background: "rgba(255,255,255,0.85)",
    border: "1px solid rgba(0,180,216,0.08)",
    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
    transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
    cursor: "default",
    height: "clamp(100px, 12vh, 130px)",
  },
  featureIconCircle: {
    width: 52,
    height: 52,
    minWidth: 52,
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
    gap: 2,
    minWidth: 0,
    overflow: "hidden",
  },
  featureTitle: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(12px, 1.1vw, 14px)",
    fontWeight: 600,
    color: "#0F172A",
    lineHeight: 1.3,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  featureSubtitle: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(10px, 0.9vw, 12px)",
    color: "#64748B",
    lineHeight: 1.4,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  rightCol: {
    flex: "1 1 440px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    minHeight: 480,
  },
  composition: {
    position: "relative",
    width: "clamp(440px, 48vw, 620px)",
    height: "clamp(440px, 48vw, 620px)",
  },
  /* Background gradient blobs */
  bgBlob1: {
    position: "absolute",
    top: "-5%",
    left: "10%",
    width: "55%",
    height: "50%",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(0,180,216,0.08) 0%, transparent 70%)",
    filter: "blur(40px)",
    pointerEvents: "none",
  },
  bgBlob2: {
    position: "absolute",
    bottom: "0%",
    right: "5%",
    width: "50%",
    height: "45%",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(120,80,220,0.06) 0%, transparent 70%)",
    filter: "blur(35px)",
    pointerEvents: "none",
  },
  bgBlob3: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "80%",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(0,180,216,0.04) 0%, transparent 60%)",
    filter: "blur(50px)",
    pointerEvents: "none",
  },
  /* Orbit ring decorations */
  orbitRingOuter: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: ORBIT_RADIUS * 2 + CARD_SIZE + 20,
    height: ORBIT_RADIUS * 2 + CARD_SIZE + 20,
    borderRadius: "50%",
    border: "1.5px solid rgba(0,180,216,0.15)",
    boxShadow: "0 0 25px rgba(0,180,216,0.06), inset 0 0 25px rgba(0,180,216,0.03)",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
  },
  orbitRingMid: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: ORBIT_RADIUS * 2 - 10,
    height: ORBIT_RADIUS * 2 - 10,
    borderRadius: "50%",
    border: "1px solid rgba(0,180,216,0.12)",
    boxShadow: "0 0 18px rgba(0,180,216,0.04), inset 0 0 18px rgba(0,180,216,0.02)",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
  },
  orbitRingInner: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: ORBIT_RADIUS * 2 - CARD_SIZE - 30,
    height: ORBIT_RADIUS * 2 - CARD_SIZE - 30,
    borderRadius: "50%",
    border: "1px solid rgba(120,80,220,0.08)",
    boxShadow: "0 0 12px rgba(120,80,220,0.04), inset 0 0 12px rgba(120,80,220,0.02)",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
  },
  /* Atmospheric glow */
  compGlow: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    height: "70%",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(0,180,216,0.06) 0%, rgba(0,140,220,0.03) 40%, transparent 70%)",
    filter: "blur(30px)",
    pointerEvents: "none",
    zIndex: 0,
  },
  /* Center hub */
  centerCircle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "clamp(140px, 16vw, 200px)",
    height: "clamp(140px, 16vw, 200px)",
    borderRadius: "50%",
    background: "linear-gradient(145deg, #0B1120 0%, #162032 50%, #0F172A 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    zIndex: 5,
    boxShadow: "0 25px 70px rgba(0,0,0,0.25), 0 0 60px rgba(0,180,216,0.18), 0 0 100px rgba(120,80,220,0.08)",
  },
  centerGlowRing: {
    position: "absolute",
    inset: -10,
    borderRadius: "50%",
    border: "3px solid rgba(0,180,216,0.55)",
    boxShadow: "0 0 35px rgba(0,180,216,0.45), 0 0 70px rgba(0,180,216,0.18), inset 0 0 25px rgba(0,180,216,0.12)",
    pointerEvents: "none",
    animation: "core-pulse 3s ease-in-out infinite",
  },
  centerPurpleRing: {
    position: "absolute",
    inset: -20,
    borderRadius: "50%",
    border: "1.5px solid rgba(120,80,220,0.25)",
    boxShadow: "0 0 20px rgba(120,80,220,0.15), inset 0 0 15px rgba(120,80,220,0.06)",
    pointerEvents: "none",
  },
  centerLogo: {
    width: 52,
    height: 52,
    objectFit: "contain",
    filter: "drop-shadow(0 0 18px rgba(0,180,216,0.55))",
  },
  centerText: {
    fontFamily: "var(--font-mono)",
    fontSize: "clamp(9px, 0.9vw, 12px)",
    fontWeight: 700,
    color: "#7DD3FC",
    letterSpacing: "0.2em",
  },
  /* Orbiting image cards */
  orbitCard: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: CARD_SIZE,
    height: CARD_SIZE,
    borderRadius: "50%",
    overflow: "hidden",
    border: "3px solid rgba(255,255,255,0.92)",
    boxShadow: "0 14px 45px rgba(0,0,0,0.22), 0 0 20px rgba(0,180,216,0.1)",
    zIndex: 4,
    willChange: "transform, opacity, filter, z-index",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    transition: "box-shadow 0.3s ease",
  },
  orbitCardRing: {
    position: "absolute",
    inset: -6,
    borderRadius: "50%",
    border: "1.5px solid rgba(0,180,216,0.2)",
    boxShadow: "0 0 12px rgba(0,180,216,0.1)",
    pointerEvents: "none",
  },
  orbitCardImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  /* Floating info cards - positioned at edges */
  infoCard: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "12px 14px",
    borderRadius: 14,
    background: "rgba(255,255,255,0.96)",
    border: "1px solid rgba(0,180,216,0.08)",
    boxShadow: "0 6px 24px rgba(0,0,0,0.06), 0 0 10px rgba(0,180,216,0.03)",
    backdropFilter: "blur(10px)",
    zIndex: 10,
    whiteSpace: "nowrap",
    transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
    cursor: "default",
  },
  infoIcon: {
    width: 38,
    height: 38,
    minWidth: 38,
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
    minWidth: 0,
  },
  infoLabel: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(11px, 1vw, 13px)",
    fontWeight: 600,
    color: "#0F172A",
    lineHeight: 1.3,
  },
  infoDesc: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(9px, 0.8vw, 11px)",
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
