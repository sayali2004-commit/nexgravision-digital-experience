import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import { BrandLogo } from "../config/assets";

const data = SLIDES[3];

const CAROUSEL_LOGOS = [
  { id: "vithai", name: "Vithai", img: "https://cglzadzphyxgiqwwuwle.supabase.co/storage/v1/object/public/Logo/vithai%20%20logo.png", bg: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)" },
  { id: "bramha", name: "Bramha", img: "https://cglzadzphyxgiqwwuwle.supabase.co/storage/v1/object/public/Logo/bramha_logo1.png", bg: "linear-gradient(135deg, #FFFFFF 0%, #F0F7FF 100%)" },
  { id: "dafalapur", name: "Dafalapur Urban", img: "https://cglzadzphyxgiqwwuwle.supabase.co/storage/v1/object/public/Logo/Dafalapur%20Urban.png", bg: "linear-gradient(135deg, #FFFFFF 0%, #F5F8FF 100%)" },
  { id: "dhasampada", name: "Dhasampada", img: "https://cglzadzphyxgiqwwuwle.supabase.co/storage/v1/object/public/Logo/Dhasampada%20Logo.png", bg: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)", center: true },
  { id: "padmavati", name: "Padmavati", img: "https://cglzadzphyxgiqwwuwle.supabase.co/storage/v1/object/public/Logo/padmavati%20logo.png", bg: "linear-gradient(135deg, #FFFFFF 0%, #FFF8F5 100%)" },
  { id: "suryoday", name: "Suryoday", img: "https://cglzadzphyxgiqwwuwle.supabase.co/storage/v1/object/public/Logo/Suryoday%20Icon.png", bg: "linear-gradient(135deg, #FFFFFF 0%, #F0F5FF 100%)" },
  { id: "shri_vitthal", name: "Shri Vitthal", img: "https://cglzadzphyxgiqwwuwle.supabase.co/storage/v1/object/public/Logo/SHRI%20VITTHAL.png", bg: "linear-gradient(135deg, #FFFFFF 0%, #F5F8FF 100%)" },
  { id: "lkp", name: "LKP", img: "https://cglzadzphyxgiqwwuwle.supabase.co/storage/v1/object/public/Logo/LKP.png", bg: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)" },
];

const BOTTOM_LOGOS = [];

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
  const particlesRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(3);
  const autoRotateRef = useRef(null);
  const hasAnimated = useRef(false);

  const rotateNext = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % CAROUSEL_LOGOS.length);
  }, []);

  const rotatePrev = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + CAROUSEL_LOGOS.length) % CAROUSEL_LOGOS.length);
  }, []);

  useEffect(() => {
    if (!isActive) {
      clearInterval(autoRotateRef.current);
      return;
    }
    autoRotateRef.current = setInterval(rotateNext, 3000);
    return () => clearInterval(autoRotateRef.current);
  }, [isActive, rotateNext]);

  useEffect(() => {
    if (!isActive || hasAnimated.current) return;
    hasAnimated.current = true;

    const tl = gsap.timeline({ delay: 0.2 });

    gsap.set(logoRef.current, { opacity: 0, y: -20 });
    tl.to(logoRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.1);

    gsap.set(topRightRef.current, { opacity: 0, x: 20 });
    tl.to(topRightRef.current, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }, 0.15);

    gsap.set(tagRef.current, { opacity: 0, scaleX: 0 });
    tl.to(tagRef.current, { opacity: 1, scaleX: 1, duration: 0.8, ease: "power3.out" }, 0.2);

    gsap.set(headlineRef.current, { opacity: 0, y: 40, filter: "blur(10px)" });
    tl.to(headlineRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.0, ease: "power3.out" }, 0.3);

    gsap.set(descRef.current, { opacity: 0, y: 20 });
    tl.to(descRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.5);

    gsap.set(ringsRef.current, { opacity: 0, scale: 0.7, rotateX: 20 });
    tl.to(ringsRef.current, { opacity: 1, scale: 1, rotateX: 0, duration: 1.4, ease: "expo.out" }, 0.4);

    gsap.set(carouselRef.current, { opacity: 0, y: 60, scale: 0.85 });
    tl.to(carouselRef.current, { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "expo.out" }, 0.5);

    if (particlesRef.current) {
      gsap.set(particlesRef.current.children, { opacity: 0, scale: 0 });
      tl.to(particlesRef.current.children, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: "back.out(2)",
      }, 0.8);
    }

    gsap.set(bottomLogosRef.current, { opacity: 0, y: 30 });
    tl.to(bottomLogosRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.9);

    gsap.set(statsRef.current, { opacity: 0, y: 20 });
    tl.to(statsRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 1.0);

    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 1.1);
  }, [isActive]);

  const getCardTransform = (index) => {
    const n = CAROUSEL_LOGOS.length;
    let diff = index - activeIdx;
    if (diff > n / 2) diff -= n;
    if (diff < -n / 2) diff += n;

    const absD = Math.abs(diff);
    const isCenter = diff === 0;
    const isNear = absD === 1;
    const isMid = absD === 2;
    const isFar = absD >= 3;

    let scale, tx, tz, opacity, zIndex, rotateY;

    if (isCenter) {
      scale = 1.4; tx = 0; tz = 80; opacity = 1; zIndex = 10; rotateY = 0;
    } else if (isNear) {
      scale = 1.0; tx = diff * 190; tz = 20; opacity = 0.92; zIndex = 6; rotateY = diff * -10;
    } else if (isMid) {
      scale = 0.7; tx = diff * 220; tz = -20; opacity = 0.55; zIndex = 3; rotateY = diff * -14;
    } else {
      scale = 0.45; tx = diff * 230; tz = -60; opacity = 0.2; zIndex = 1; rotateY = diff * -18;
    }

    return {
      transform: `translateX(${tx}px) scale(${scale}) translateZ(${tz}px) perspective(900px) rotateY(${rotateY}deg)`,
      opacity,
      zIndex,
    };
  };

  return (
    <div style={S.wrap}>
      {/* Animated wave background */}
      <div style={S.waveContainer}>
        <svg viewBox="0 0 1440 500" preserveAspectRatio="none" style={S.wave1}>
          <defs>
            <linearGradient id="wg1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0,100,200,0)" />
              <stop offset="50%" stopColor="rgba(0,140,230,0.35)" />
              <stop offset="100%" stopColor="rgba(0,100,200,0)" />
            </linearGradient>
          </defs>
          <path d="M0,300 C240,200 480,380 720,280 C960,180 1200,350 1440,300 L1440,500 L0,500 Z" fill="url(#wg1)" />
        </svg>
        <svg viewBox="0 0 1440 500" preserveAspectRatio="none" style={S.wave2}>
          <defs>
            <linearGradient id="wg2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0,80,180,0)" />
              <stop offset="50%" stopColor="rgba(0,120,220,0.22)" />
              <stop offset="100%" stopColor="rgba(0,80,180,0)" />
            </linearGradient>
          </defs>
          <path d="M0,350 C360,250 720,400 1080,300 C1260,250 1380,320 1440,350 L1440,500 L0,500 Z" fill="url(#wg2)" />
        </svg>
        {/* Wave line strokes */}
        <svg viewBox="0 0 1440 500" preserveAspectRatio="none" style={S.waveLine1}>
          <path d="M0,320 C240,220 480,400 720,300 C960,200 1200,370 1440,320" fill="none" stroke="rgba(0,160,240,0.4)" strokeWidth="2" />
        </svg>
        <svg viewBox="0 0 1440 500" preserveAspectRatio="none" style={S.waveLine2}>
          <path d="M0,360 C360,260 720,420 1080,320 C1260,270 1380,340 1440,360" fill="none" stroke="rgba(0,140,220,0.3)" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Ambient glow */}
      <div style={S.glowTop} />
      <div style={S.glowCenter} />

      {/* Floating particles */}
      <div ref={particlesRef} style={S.particlesWrap}>
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              borderRadius: "50%",
              background: `rgba(0,180,216,${0.2 + Math.random() * 0.4})`,
              left: `${10 + Math.random() * 80}%`,
              top: `${20 + Math.random() * 60}%`,
              boxShadow: `0 0 ${4 + Math.random() * 6}px rgba(0,180,216,0.3)`,
            }}
          />
        ))}
      </div>

      <div style={S.container}>
        {/* Header */}
        <div style={S.headerRow}>
          <div ref={logoRef}>
            <BrandLogo size={48} />
          </div>
          <div ref={topRightRef} style={S.topRightWrap}>
            <div style={S.topRightLine} />
            <span style={S.topRight}>{data.topRight}</span>
          </div>
        </div>

        {/* Main content */}
        <div style={S.centerContent}>
          {/* Section tag */}
          <div ref={tagRef} style={S.sectionTag}>
            <span style={S.tagDecorLine} />
            <span style={S.tagText}>{data.sectionTag}</span>
            <span style={S.tagDecorLine} />
          </div>

          {/* Headline */}
          <h2 ref={headlineRef} style={S.headline}>
            {data.headline}{" "}
            <span style={S.headlineAccent}>{data.headlineAccent}</span>
          </h2>

          {/* Description */}
          <p ref={descRef} style={S.description}>{data.description}</p>

          {/* Carousel Area */}
          <div style={S.carouselArea}>
            {/* Glowing elliptical rings */}
            <div ref={ringsRef} style={S.ringsContainer}>
              <div style={S.ringOuter} />
              <div style={S.ringMiddle} />
              <div style={S.ringInner} />
              <div style={S.ringGlowEffect} />
              <div style={S.ringReflection} />
              {/* Center vertical light beam */}
              <div style={S.lightBeam} />
              <div style={S.lightBeamGlow} />
            </div>

            {/* Carousel */}
            <div ref={carouselRef} style={S.carouselWrap}>
              <div style={S.carouselInner}>
                {CAROUSEL_LOGOS.map((logo, i) => {
                  const cardStyle = getCardTransform(i);
                  const isActiveCard = i === activeIdx;
                  return (
                    <div
                      key={logo.id}
                      style={{
                        ...S.card,
                        ...cardStyle,
                        background: logo.bg,
                        borderColor: isActiveCard ? "rgba(0,180,216,0.7)" : "rgba(255,255,255,0.2)",
                        boxShadow: isActiveCard
                          ? "0 0 60px rgba(0,180,216,0.5), 0 0 120px rgba(0,180,216,0.2), 0 25px 60px rgba(0,0,0,0.5)"
                          : "0 8px 30px rgba(0,0,0,0.35), 0 2px 10px rgba(0,0,0,0.2)",
                      }}
                    >
                      {isActiveCard && <div style={S.activeCardBorder} />}
                      <div style={isActiveCard ? S.cardContentCenter : S.cardContent}>
                        {logo.img ? (
                          <img
                            src={logo.img}
                            alt={logo.name}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                              filter: isActiveCard ? "drop-shadow(0 3px 10px rgba(0,0,0,0.2)) contrast(1.1)" : "drop-shadow(0 2px 6px rgba(0,0,0,0.15)) contrast(1.05)",
                            }}
                          />
                        ) : (
                          <div style={{ ...S.logoText, color: logo.textColor, fontSize: isActiveCard ? "clamp(30px, 4vw, 46px)" : "clamp(15px, 1.9vw, 24px)" }}>
                            {logo.name}
                          </div>
                        )}
                        {logo.subtitle && (
                          <div style={S.logoSubtitle}>{logo.subtitle}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} style={S.statsRow}>
          {data.stats.map((stat, i) => (
            <div key={i} style={S.statItem}>
              <div style={S.statIcon}>
                {i === 0 && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                )}
                {i === 1 && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" /><polyline points="9 16 10 17 14 13" />
                  </svg>
                )}
                {i === 2 && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                )}
              </div>
              <div style={S.statContent}>
                <div style={S.statValue}>{stat.value}</div>
                <div style={S.statLabel}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Counter */}
      <div ref={counterRef} style={S.counterWrap}>
        <span style={S.counterText}>04 / 05</span>
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
    padding: "clamp(14px, 2.5vw, 36px) clamp(16px, 4vw, 56px)",
    overflow: "hidden",
    background: "linear-gradient(175deg, #050D1F 0%, #081830 25%, #0A2040 50%, #0C1E3A 75%, #060E1F 100%)",
  },
  waveContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "45%",
    pointerEvents: "none",
    zIndex: 0,
  },
  wave1: { position: "absolute", bottom: 0, left: 0, width: "100%", height: "100%", opacity: 0.7 },
  wave2: { position: "absolute", bottom: 0, left: 0, width: "100%", height: "85%", opacity: 0.5 },
  waveLine1: { position: "absolute", bottom: 0, left: 0, width: "100%", height: "100%", opacity: 0.8 },
  waveLine2: { position: "absolute", bottom: 0, left: 0, width: "100%", height: "85%", opacity: 0.6 },
  glowTop: {
    position: "absolute",
    top: "15%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "clamp(550px, 65vw, 950px)",
    height: "clamp(280px, 33vw, 480px)",
    borderRadius: "50%",
    background: "radial-gradient(ellipse, rgba(0,120,216,0.16) 0%, rgba(0,80,180,0.06) 50%, transparent 70%)",
    filter: "blur(50px)",
    pointerEvents: "none",
  },
  glowCenter: {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "clamp(340px, 38vw, 550px)",
    height: "clamp(170px, 20vw, 280px)",
    borderRadius: "50%",
    background: "radial-gradient(ellipse, rgba(0,160,240,0.22) 0%, transparent 65%)",
    filter: "blur(40px)",
    pointerEvents: "none",
  },
  particlesWrap: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    zIndex: 1,
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
    gap: 14,
  },
  topRightLine: {
    width: 48,
    height: 2,
    background: "linear-gradient(90deg, transparent, #00B4D8)",
    borderRadius: 1,
  },
  topRight: {
    fontFamily: "var(--font-mono)",
    fontSize: "clamp(11px, 1.1vw, 14px)",
    fontWeight: 500,
    color: "#94A3B8",
    letterSpacing: "0.06em",
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
    gap: 18,
    marginBottom: 10,
  },
  tagDecorLine: {
    width: 44,
    height: 1.5,
    background: "linear-gradient(90deg, transparent, rgba(0,180,216,0.5), transparent)",
    borderRadius: 1,
  },
  tagText: {
    fontFamily: "var(--font-mono)",
    fontSize: "clamp(12px, 1.2vw, 15px)",
    fontWeight: 600,
    color: "#00B4D8",
    letterSpacing: "0.25em",
  },
  headline: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(34px, 5vw, 60px)",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.08,
    letterSpacing: "-0.025em",
    marginBottom: 14,
  },
  headlineAccent: {
    background: "linear-gradient(135deg, #7DD3FC 0%, #00B4D8 45%, #0284C7 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  description: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(13px, 1.3vw, 16px)",
    color: "#94A3B8",
    lineHeight: 1.7,
    maxWidth: 520,
    marginBottom: 20,
  },
  carouselArea: {
    position: "relative",
    width: "100%",
    maxWidth: 1050,
    height: "clamp(180px, 26vh, 300px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  ringsContainer: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
  },
  ringOuter: {
    position: "absolute",
    width: "clamp(540px, 66vw, 840px)",
    height: "clamp(100px, 12vw, 155px)",
    borderRadius: "50%",
    border: "1.5px solid rgba(0,140,220,0.25)",
    transform: "perspective(700px) rotateX(68deg)",
    boxShadow: "0 0 30px rgba(0,140,220,0.12), inset 0 0 30px rgba(0,140,220,0.08)",
  },
  ringMiddle: {
    position: "absolute",
    width: "clamp(460px, 56vw, 720px)",
    height: "clamp(85px, 10.5vw, 132px)",
    borderRadius: "50%",
    border: "1.5px solid rgba(0,160,240,0.35)",
    transform: "perspective(700px) rotateX(68deg)",
    boxShadow: "0 0 40px rgba(0,160,240,0.18), inset 0 0 35px rgba(0,160,240,0.12)",
  },
  ringInner: {
    position: "absolute",
    width: "clamp(370px, 46vw, 590px)",
    height: "clamp(70px, 9vw, 110px)",
    borderRadius: "50%",
    border: "2.5px solid rgba(0,180,255,0.45)",
    transform: "perspective(700px) rotateX(68deg)",
    boxShadow: "0 0 55px rgba(0,180,255,0.3), inset 0 0 40px rgba(0,180,255,0.15)",
  },
  ringGlowEffect: {
    position: "absolute",
    width: "clamp(430px, 53vw, 690px)",
    height: "clamp(80px, 10vw, 125px)",
    borderRadius: "50%",
    background: "radial-gradient(ellipse, rgba(0,180,255,0.2) 0%, rgba(0,140,220,0.08) 50%, transparent 70%)",
    transform: "perspective(700px) rotateX(68deg)",
    filter: "blur(8px)",
  },
  ringReflection: {
    position: "absolute",
    bottom: "15%",
    width: "clamp(380px, 48vw, 610px)",
    height: "clamp(45px, 5.5vw, 72px)",
    borderRadius: "50%",
    background: "radial-gradient(ellipse, rgba(0,140,220,0.15) 0%, transparent 70%)",
    transform: "perspective(700px) rotateX(68deg)",
    filter: "blur(10px)",
  },
  lightBeam: {
    position: "absolute",
    width: 2.5,
    height: "clamp(180px, 25vh, 310px)",
    background: "linear-gradient(180deg, transparent 0%, rgba(0,180,255,0.6) 35%, rgba(0,200,255,0.8) 50%, rgba(0,180,255,0.6) 65%, transparent 100%)",
    top: "5%",
  },
  lightBeamGlow: {
    position: "absolute",
    width: 10,
    height: "clamp(160px, 20vh, 260px)",
    background: "linear-gradient(180deg, transparent 0%, rgba(0,180,255,0.2) 35%, rgba(0,200,255,0.3) 50%, rgba(0,180,255,0.2) 65%, transparent 100%)",
    filter: "blur(5px)",
    top: "8%",
  },
  navLeft: {
    position: "absolute",
    left: "clamp(-8px, -1vw, -4px)",
    top: "50%",
    transform: "translateY(-50%)",
    width: 52,
    height: 52,
    borderRadius: "50%",
    border: "2px solid rgba(0,180,216,0.4)",
    background: "rgba(0,20,50,0.65)",
    backdropFilter: "blur(12px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 20,
    transition: "all 0.3s ease",
    boxShadow: "0 0 18px rgba(0,180,216,0.2), inset 0 0 12px rgba(0,180,216,0.08)",
    outline: "none",
  },
  navRight: {
    position: "absolute",
    right: "clamp(-8px, -1vw, -4px)",
    top: "50%",
    transform: "translateY(-50%)",
    width: 52,
    height: 52,
    borderRadius: "50%",
    border: "2px solid rgba(0,180,216,0.4)",
    background: "rgba(0,20,50,0.65)",
    backdropFilter: "blur(12px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 20,
    transition: "all 0.3s ease",
    boxShadow: "0 0 18px rgba(0,180,216,0.2), inset 0 0 12px rgba(0,180,216,0.08)",
    outline: "none",
  },
  carouselWrap: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    perspective: "1400px",
  },
  carouselInner: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    position: "absolute",
    width: "clamp(100px, 12vw, 160px)",
    height: "clamp(100px, 12vw, 160px)",
    borderRadius: "50%",
    border: "1.5px solid rgba(255,255,255,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    transition: "all 0.65s cubic-bezier(0.22, 1, 0.36, 1)",
    backdropFilter: "blur(8px)",
  },
  activeCardBorder: {
    position: "absolute",
    inset: -2,
    borderRadius: "50%",
    border: "2px solid rgba(0,180,216,0.7)",
    boxShadow: "0 0 35px rgba(0,180,216,0.4), inset 0 0 30px rgba(0,180,216,0.1)",
    pointerEvents: "none",
    animation: "ring-pulse 2s ease-in-out infinite",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
    padding: "6px 10px",
    width: "100%",
    height: "100%",
  },
  cardContentCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    padding: "8px 12px",
    width: "100%",
    height: "100%",
  },
  logoText: {
    fontFamily: "var(--font-sans)",
    fontWeight: 800,
    letterSpacing: "0.02em",
    lineHeight: 1.1,
    transition: "font-size 0.6s ease",
  },
  logoSubtitle: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(5px, 0.5vw, 7px)",
    color: "#94A3B8",
    textAlign: "center",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  bottomRow: {
    display: "flex",
    justifyContent: "center",
    gap: "clamp(16px, 2.2vw, 30px)",
    flexWrap: "wrap",
    marginBottom: 4,
  },
  bottomCard: {
    width: "clamp(100px, 11.5vw, 145px)",
    height: "clamp(65px, 7.5vw, 95px)",
    borderRadius: 14,
    background: "linear-gradient(135deg, rgba(255,255,255,0.93) 0%, rgba(240,248,255,0.88) 100%)",
    border: "1px solid rgba(255,255,255,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 6px 20px rgba(0,0,0,0.3), 0 0 15px rgba(0,180,216,0.08)",
    transition: "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
    cursor: "default",
  },
  bottomCardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    padding: "6px 8px",
    width: "100%",
    height: "100%",
  },
  bottomLogoText: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(13px, 1.5vw, 19px)",
    fontWeight: 800,
    letterSpacing: "0.02em",
  },
  bottomSubtitle: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(6px, 0.55vw, 8px)",
    color: "#64748B",
    letterSpacing: "0.04em",
  },
  statsRow: {
    display: "flex",
    justifyContent: "center",
    gap: "clamp(28px, 4.5vw, 70px)",
    flexWrap: "wrap",
  },
  statItem: {
    display: "flex",
    alignItems: "center",
    gap: 14,
  },
  statIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    background: "rgba(0,180,216,0.06)",
    border: "1.5px solid rgba(0,180,216,0.18)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  statContent: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
  },
  statValue: {
    fontFamily: "var(--font-mono)",
    fontSize: "clamp(28px, 3.5vw, 44px)",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1,
  },
  statLabel: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(11px, 1vw, 13px)",
    color: "#94A3B8",
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
    color: "#64748B",
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
    width: "80%",
    height: "100%",
    borderRadius: 2,
    background: "linear-gradient(90deg, #0284C7, #00B4D8)",
    boxShadow: "0 0 8px rgba(0,180,216,0.5)",
  },
};
