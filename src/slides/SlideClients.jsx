import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import { BrandLogo } from "../config/assets";

const data = SLIDES[3];

const CLIENT_CAROUSEL = [
  { name: "HCL", color: "#00A5EC" },
  { name: "Infosys", color: "#007CC3" },
  { name: "HDFC Bank", color: "#004B8D" },
  { name: "TATA", color: "#1B365D", center: true },
  { name: "TCS", color: "#1A4D8F" },
  { name: "TCS", color: "#1A4D8F", subtitle: "Tata Consultancy Services" },
  { name: "TCS", color: "#FF6B35" },
];

const BOTTOM_LOGOS = [
  { name: "wipro", color: "#2A2A6B" },
  { name: "Reliance", color: "#D42A2A" },
  { name: "ICICI Bank", color: "#F37B21" },
  { name: "IBM", color: "#0530AD" },
];

export default function SlideClients({ isActive }) {
  const logoRef = useRef(null);
  const topRightRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const descRef = useRef(null);
  const carouselRef = useRef(null);
  const bottomLogosRef = useRef(null);
  const statsRef = useRef(null);
  const counterRef = useRef(null);
  const ringsRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(3);
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

    gsap.set(headlineRef.current, { opacity: 0, y: 30, filter: "blur(8px)" });
    tl.to(headlineRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.0, ease: "power3.out" }, 0.3);

    gsap.set(descRef.current, { opacity: 0, y: 20 });
    tl.to(descRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.5);

    gsap.set(ringsRef.current, { opacity: 0, scale: 0.8 });
    tl.to(ringsRef.current, { opacity: 1, scale: 1, duration: 1.2, ease: "expo.out" }, 0.4);

    gsap.set(carouselRef.current, { opacity: 0, y: 50, scale: 0.9 });
    tl.to(carouselRef.current, { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: "expo.out" }, 0.5);

    gsap.set(bottomLogosRef.current, { opacity: 0, y: 30 });
    tl.to(bottomLogosRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.8);

    gsap.set(statsRef.current, { opacity: 0, y: 20 });
    tl.to(statsRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.9);

    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 1.0);
  }, [isActive]);

  const goNext = () => setActiveIndex((prev) => (prev + 1) % CLIENT_CAROUSEL.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + CLIENT_CAROUSEL.length) % CLIENT_CAROUSEL.length);

  const getCardStyle = (index) => {
    const diff = index - activeIndex;
    const normalized = ((diff + CLIENT_CAROUSEL.length + Math.floor(CLIENT_CAROUSEL.length / 2)) % CLIENT_CAROUSEL.length) - Math.floor(CLIENT_CAROUSEL.length / 2);

    const absNorm = Math.abs(normalized);
    const isCenter = normalized === 0;
    const isNear = absNorm === 1;
    const isFar = absNorm === 2;

    let scale = 1;
    let translateX = 0;
    let translateZ = 0;
    let opacity = 1;
    let zIndex = 5;

    if (isCenter) {
      scale = 1.35;
      translateX = 0;
      translateZ = 60;
      zIndex = 10;
    } else if (isNear) {
      scale = 0.95;
      translateX = normalized * 160;
      translateZ = -20;
      opacity = 0.85;
      zIndex = 4;
    } else if (isFar) {
      scale = 0.75;
      translateX = normalized * 180;
      translateZ = -60;
      opacity = 0.5;
      zIndex = 2;
    } else {
      scale = 0.6;
      translateX = normalized * 160;
      translateZ = -100;
      opacity = 0.25;
      zIndex = 1;
    }

    return {
      transform: `translateX(${translateX}px) scale(${scale}) perspective(800px) rotateY(${normalized * -8}deg)`,
      opacity,
      zIndex,
      transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
    };
  };

  return (
    <div style={S.wrap}>
      {/* Wave background */}
      <div style={S.waveBg}>
        <svg viewBox="0 0 1440 400" style={S.waveSvg1} preserveAspectRatio="none">
          <path d="M0,200 C360,350 720,50 1440,200 L1440,400 L0,400 Z" fill="rgba(0,60,120,0.15)" />
        </svg>
        <svg viewBox="0 0 1440 400" style={S.waveSvg2} preserveAspectRatio="none">
          <path d="M0,250 C480,100 960,350 1440,250 L1440,400 L0,400 Z" fill="rgba(0,80,160,0.1)" />
        </svg>
      </div>

      {/* Ambient glow orbs */}
      <div style={S.orbGlow1} />
      <div style={S.orbGlow2} />

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

        {/* Center content */}
        <div style={S.centerContent}>
          <div ref={tagRef} style={S.sectionTag}>
            <span style={S.tagLine} />
            <span style={S.tagText}>{data.sectionTag}</span>
            <span style={S.tagLine} />
          </div>

          <h2 ref={headlineRef} style={S.headline}>
            {data.headline}{" "}
            <span style={S.headlineAccent}>{data.headlineAccent}</span>
          </h2>

          <p ref={descRef} style={S.description}>{data.description}</p>

          {/* 3D Carousel Area */}
          <div style={S.carouselArea}>
            {/* Glowing rings */}
            <div ref={ringsRef} style={S.ringsWrap}>
              <div style={S.ring1} />
              <div style={S.ring2} />
              <div style={S.ring3} />
              <div style={S.ringGlow} />
              <div style={S.centerLightBeam} />
            </div>

            {/* Navigation arrows */}
            <button onClick={goPrev} style={S.navArrowLeft}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7DD3FC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Carousel */}
            <div ref={carouselRef} style={S.carouselContainer}>
              <div style={S.carouselInner}>
                {CLIENT_CAROUSEL.map((client, i) => {
                  const cardStyle = getCardStyle(i);
                  const isCenter = i === activeIndex;
                  return (
                    <div
                      key={i}
                      style={{
                        ...S.carouselCard,
                        ...cardStyle,
                        boxShadow: isCenter
                          ? "0 0 40px rgba(0,180,216,0.4), 0 0 80px rgba(0,180,216,0.2), 0 20px 40px rgba(0,0,0,0.5)"
                          : "0 8px 30px rgba(0,0,0,0.4)",
                        borderColor: isCenter ? "rgba(0,180,216,0.6)" : "rgba(255,255,255,0.1)",
                      }}
                    >
                      <div style={S.cardInner}>
                        <div style={{
                          ...S.cardLogo,
                          color: client.color,
                          fontSize: isCenter ? "clamp(22px, 3vw, 34px)" : "clamp(14px, 1.8vw, 22px)",
                        }}>
                          {client.name}
                        </div>
                        {client.subtitle && (
                          <div style={S.cardSubtitle}>{client.subtitle}</div>
                        )}
                      </div>
                      {isCenter && <div style={S.cardGlow} />}
                    </div>
                  );
                })}
              </div>
            </div>

            <button onClick={goNext} style={S.navArrowRight}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7DD3FC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Bottom logos row */}
          <div ref={bottomLogosRef} style={S.bottomLogosRow}>
            {BOTTOM_LOGOS.map((client, i) => (
              <div key={i} style={S.bottomCard}>
                <div style={S.bottomCardInner}>
                  <div style={{ ...S.bottomLogo, color: client.color }}>
                    {client.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div ref={statsRef} style={S.statsRow}>
          {data.stats.map((stat, i) => (
            <div key={i} style={S.statItem}>
              <div style={S.statIconWrap}>
                {i === 0 && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                )}
                {i === 1 && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <polyline points="9 16 10 17 14 13" />
                  </svg>
                )}
                {i === 2 && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                )}
              </div>
              <div style={S.statValue}>{stat.value}</div>
              <div style={S.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Counter */}
      <div ref={counterRef} style={S.counterWrap}>
        <span className="slide-counter" style={{ position: "static" }}>04 / 05</span>
        <div style={S.counterLine} />
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
    padding: "clamp(16px, 3vw, 40px) clamp(16px, 4vw, 60px)",
    overflow: "hidden",
    background: "linear-gradient(180deg, #060E1F 0%, #0A1A35 30%, #0C2040 60%, #081830 100%)",
  },
  waveBg: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "40%",
    pointerEvents: "none",
    zIndex: 0,
  },
  waveSvg1: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0.6,
  },
  waveSvg2: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "80%",
    opacity: 0.4,
  },
  orbGlow1: {
    position: "absolute",
    top: "25%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "clamp(400px, 55vw, 800px)",
    height: "clamp(300px, 40vw, 600px)",
    borderRadius: "50%",
    background: "radial-gradient(ellipse, rgba(0,120,216,0.15) 0%, rgba(0,80,180,0.05) 50%, transparent 70%)",
    filter: "blur(60px)",
    pointerEvents: "none",
  },
  orbGlow2: {
    position: "absolute",
    bottom: "5%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "clamp(300px, 40vw, 500px)",
    height: "clamp(100px, 15vw, 200px)",
    borderRadius: "50%",
    background: "radial-gradient(ellipse, rgba(0,100,200,0.2) 0%, transparent 70%)",
    filter: "blur(30px)",
    pointerEvents: "none",
  },
  container: {
    width: "100%",
    maxWidth: 1200,
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
    color: "#94A3B8",
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
  sectionTag: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    marginBottom: 12,
  },
  tagLine: {
    width: 40,
    height: 1.5,
    background: "linear-gradient(90deg, transparent, rgba(0,180,216,0.5))",
    borderRadius: 1,
  },
  tagText: {
    fontFamily: "var(--font-mono)",
    fontSize: "clamp(12px, 1.2vw, 15px)",
    fontWeight: 600,
    color: "#00B4D8",
    letterSpacing: "0.2em",
  },
  headline: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(32px, 4.5vw, 56px)",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
    marginBottom: 14,
  },
  headlineAccent: {
    background: "linear-gradient(90deg, #7DD3FC 0%, #00B4D8 40%, #0284C7 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  description: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(13px, 1.3vw, 16px)",
    color: "#94A3B8",
    lineHeight: 1.7,
    maxWidth: 520,
    marginBottom: 28,
    textAlign: "center",
  },
  carouselArea: {
    position: "relative",
    width: "100%",
    maxWidth: 900,
    height: "clamp(200px, 28vh, 320px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  ringsWrap: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
  },
  ring1: {
    position: "absolute",
    width: "clamp(400px, 50vw, 650px)",
    height: "clamp(80px, 10vw, 130px)",
    borderRadius: "50%",
    border: "1.5px solid rgba(0,150,220,0.25)",
    transform: "perspective(600px) rotateX(65deg)",
  },
  ring2: {
    position: "absolute",
    width: "clamp(340px, 42vw, 550px)",
    height: "clamp(68px, 8.5vw, 110px)",
    borderRadius: "50%",
    border: "1px solid rgba(0,150,220,0.15)",
    transform: "perspective(600px) rotateX(65deg)",
  },
  ring3: {
    position: "absolute",
    width: "clamp(460px, 58vw, 750px)",
    height: "clamp(92px, 11.5vw, 150px)",
    borderRadius: "50%",
    border: "1px solid rgba(0,120,200,0.1)",
    transform: "perspective(600px) rotateX(65deg)",
  },
  ringGlow: {
    position: "absolute",
    width: "clamp(380px, 48vw, 620px)",
    height: "clamp(76px, 9.5vw, 124px)",
    borderRadius: "50%",
    background: "radial-gradient(ellipse, rgba(0,150,230,0.2) 0%, transparent 60%)",
    transform: "perspective(600px) rotateX(65deg)",
    filter: "blur(8px)",
  },
  centerLightBeam: {
    position: "absolute",
    width: 2,
    height: "clamp(150px, 20vh, 250px)",
    background: "linear-gradient(180deg, transparent 0%, rgba(0,180,216,0.4) 40%, rgba(0,180,216,0.6) 50%, rgba(0,180,216,0.4) 60%, transparent 100%)",
    filter: "blur(2px)",
    top: "10%",
  },
  navArrowLeft: {
    position: "absolute",
    left: 0,
    top: "50%",
    transform: "translateY(-50%)",
    width: 40,
    height: 40,
    borderRadius: "50%",
    border: "1.5px solid rgba(0,180,216,0.3)",
    background: "rgba(0,20,40,0.6)",
    backdropFilter: "blur(8px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 20,
    transition: "all 0.3s ease",
    boxShadow: "0 0 15px rgba(0,180,216,0.15)",
  },
  navArrowRight: {
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
    width: 40,
    height: 40,
    borderRadius: "50%",
    border: "1.5px solid rgba(0,180,216,0.3)",
    background: "rgba(0,20,40,0.6)",
    backdropFilter: "blur(8px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 20,
    transition: "all 0.3s ease",
    boxShadow: "0 0 15px rgba(0,180,216,0.15)",
  },
  carouselContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    perspective: "1000px",
  },
  carouselInner: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  carouselCard: {
    position: "absolute",
    width: "clamp(100px, 12vw, 150px)",
    height: "clamp(70px, 8vw, 100px)",
    borderRadius: 14,
    background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,245,255,0.9) 100%)",
    border: "1px solid rgba(255,255,255,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  cardInner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    padding: 8,
  },
  cardLogo: {
    fontFamily: "var(--font-sans)",
    fontWeight: 800,
    letterSpacing: "0.02em",
    lineHeight: 1.1,
  },
  cardSubtitle: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(6px, 0.6vw, 8px)",
    color: "#64748B",
    textAlign: "center",
  },
  cardGlow: {
    position: "absolute",
    inset: -2,
    borderRadius: 16,
    border: "2px solid rgba(0,180,216,0.5)",
    boxShadow: "0 0 20px rgba(0,180,216,0.3), inset 0 0 20px rgba(0,180,216,0.1)",
    pointerEvents: "none",
  },
  bottomLogosRow: {
    display: "flex",
    justifyContent: "center",
    gap: "clamp(14px, 2vw, 28px)",
    flexWrap: "wrap",
    marginBottom: 8,
  },
  bottomCard: {
    width: "clamp(90px, 10vw, 130px)",
    height: "clamp(60px, 7vw, 85px)",
    borderRadius: 12,
    background: "linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(240,245,255,0.88) 100%)",
    border: "1px solid rgba(255,255,255,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 6px 24px rgba(0,0,0,0.3), 0 0 20px rgba(0,180,216,0.1)",
    transition: "all 0.3s ease",
  },
  bottomCardInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  bottomLogo: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(12px, 1.4vw, 18px)",
    fontWeight: 800,
    letterSpacing: "0.02em",
  },
  statsRow: {
    display: "flex",
    justifyContent: "center",
    gap: "clamp(32px, 5vw, 80px)",
    paddingTop: 8,
    flexWrap: "wrap",
  },
  statItem: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  statIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 12,
    background: "rgba(0,180,216,0.08)",
    border: "1px solid rgba(0,180,216,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  statValue: {
    fontFamily: "var(--font-mono)",
    fontSize: "clamp(26px, 3.2vw, 40px)",
    fontWeight: 700,
    color: "#FFFFFF",
  },
  statLabel: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(11px, 1vw, 13px)",
    color: "#94A3B8",
    marginLeft: -4,
  },
  counterWrap: {
    position: "absolute",
    bottom: 28,
    right: 48,
    display: "flex",
    alignItems: "center",
    gap: 10,
    zIndex: 10,
    pointerEvents: "none",
  },
  counterLine: {
    width: 40,
    height: 2,
    background: "linear-gradient(90deg, #00B4D8, rgba(0,180,216,0.3))",
    borderRadius: 1,
  },
};
