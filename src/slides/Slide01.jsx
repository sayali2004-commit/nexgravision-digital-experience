import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import { BrandLogo, IMAGES } from "../config/assets";
import SlideBackground from "../components/SlideBackground";

const data = SLIDES[0];

export default function Slide01({ isActive, onNavigate }) {
  const wrapRef = useRef(null);
  const logoRef = useRef(null);
  const headlineRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const visualRef = useRef(null);
  const counterRef = useRef(null);
  const streakRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isActive || hasAnimated.current) return;
    hasAnimated.current = true;

    const tl = gsap.timeline({ delay: 0.2 });

    gsap.set(logoRef.current, { opacity: 0, y: -20 });
    tl.to(logoRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.1);

    gsap.set(headlineRef.current, { opacity: 0, y: 30, filter: "blur(6px)" });
    tl.to(headlineRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.0, ease: "power3.out" }, 0.3);

    gsap.set(descRef.current, { opacity: 0, y: 20 });
    tl.to(descRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.6);

    gsap.set(ctaRef.current, { opacity: 0, scale: 0.9 });
    tl.to(ctaRef.current, { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.5)" }, 0.8);

    gsap.set(visualRef.current, { opacity: 0, x: 50, scale: 0.95 });
    tl.to(visualRef.current, { opacity: 1, x: 0, scale: 1, duration: 1.1, ease: "expo.out" }, 0.4);

    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 1.0);

    if (streakRef.current) {
      gsap.set(streakRef.current, { opacity: 0 });
      tl.to(streakRef.current, { opacity: 1, duration: 1.5, ease: "power2.out" }, 0.5);
    }
  }, [isActive]);

  return (
    <div ref={wrapRef} style={styles.wrap}>
      <SlideBackground
        orbColor="radial-gradient(circle, rgba(0,180,216,0.12) 0%, transparent 70%)"
        orbPosition={{ top: "40%", left: "70%" }}
      />

      {/* Diagonal blue light streaks */}
      <div ref={streakRef} style={styles.streaksWrap}>
        <div style={styles.streak1} />
        <div style={styles.streak2} />
        <div style={{...styles.streak1, right: "18%", width: 2, opacity: 0.6, filter: "blur(4px)"}} />
        <div style={{...styles.streak2, right: "22%", width: 2, opacity: 0.4, filter: "blur(5px)"}} />
        <div style={{...styles.streak1, right: "28%", width: 1.5, opacity: 0.3, filter: "blur(6px)"}} />
        {/* Left side streaks */}
        <div style={{...styles.streak1, right: "auto", left: "8%", width: 2, opacity: 0.3, filter: "blur(5px)"}} />
        <div style={{...styles.streak2, right: "auto", left: "15%", width: 1.5, opacity: 0.2, filter: "blur(6px)"}} />
      </div>

      <div style={styles.container}>
        <div ref={logoRef} style={styles.logoRow}>
          <BrandLogo size={64} />
        </div>

        <div style={styles.bodyRow}>
          <div style={styles.leftCol}>
            <h1 ref={headlineRef} style={styles.headline}>
              Innovative<br />
              <span style={styles.headlineHighlight}>Software Solutions</span><br />
              for a Smarter Tomorrow
            </h1>

            <p ref={descRef} style={styles.description}>
              {data.description}
            </p>

            <div ref={ctaRef} style={styles.ctaWrap}>
              <button
                className="btn-gold"
                onClick={() => onNavigate?.(4)}
              >
                {data.cta} &nbsp;&#8594;
              </button>
            </div>
          </div>

          <div ref={visualRef} style={styles.rightCol}>
            {/* Bright glow behind image */}
            <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "120%",
              height: "130%",
              background: "radial-gradient(ellipse at center, rgba(0,180,216,0.2) 0%, rgba(0,180,216,0.08) 40%, transparent 70%)",
              filter: "blur(30px)",
              pointerEvents: "none",
              zIndex: 0,
            }} />
            <div style={styles.imageMaskOuter}>
              <div style={styles.imageMaskInner}>
                <img
                  src={IMAGES.heroCity}
                  alt="NexGravision Smart Solutions"
                  style={styles.heroImage}
                />
                <div style={styles.imageOverlayGradient} />
              </div>
              <div style={styles.glowBorder} />
              <div style={styles.glowAccentLeft} />
            </div>
          </div>
        </div>
      </div>

      {/* Counter + progress bar at bottom-left */}
      <div ref={counterRef} style={styles.counterWrap}>
        <span className="slide-counter" style={{ position: "static" }}>
          01 / 4
        </span>
        <div style={styles.progressTrack}>
          <div style={styles.progressFill} />
        </div>
      </div>
    </div>
  );
}

const styles = {
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
    width: 4,
    height: "140%",
    background: "linear-gradient(180deg, transparent 0%, rgba(0,180,216,0.3) 40%, rgba(0,180,216,0.5) 50%, rgba(0,180,216,0.3) 60%, transparent 100%)",
    transform: "rotate(25deg)",
    filter: "blur(2px)",
  },
  streak2: {
    position: "absolute",
    top: "-10%",
    right: "12%",
    width: 3,
    height: "130%",
    background: "linear-gradient(180deg, transparent 0%, rgba(0,180,216,0.15) 45%, rgba(0,180,216,0.3) 50%, rgba(0,180,216,0.15) 55%, transparent 100%)",
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
  logoRow: {
    paddingTop: 10,
  },
  bodyRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "clamp(20px, 4vw, 40px)",
    marginTop: "auto",
    marginBottom: "auto",
    flexWrap: "wrap",
  },
  leftCol: {
    flex: "1 1 400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    minWidth: 0,
  },
  headline: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(30px, 4vw, 52px)",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.12,
    letterSpacing: "-0.015em",
    marginBottom: 24,
  },
  headlineHighlight: {
    background: "linear-gradient(90deg, #FFFFFF 0%, #7DD3FC 50%, #00B4D8 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  description: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(14px, 1.4vw, 17px)",
    color: "#94A3B8",
    lineHeight: 1.7,
    maxWidth: 520,
    marginBottom: 36,
    fontWeight: 400,
  },
  ctaWrap: {
    display: "flex",
    alignItems: "center",
  },
  rightCol: {
    flex: "1 1 350px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
    minWidth: 0,
  },
  imageMaskOuter: {
    position: "relative",
    width: "100%",
    maxWidth: 560,
    height: "clamp(240px, 40vh, 480px)",
    borderRadius: "200px 28px 28px 200px",
    padding: 2,
    background: "linear-gradient(135deg, rgba(0,180,216,0.8) 0%, rgba(0,180,216,0.45) 40%, rgba(56,189,248,0.25) 70%, transparent 100%)",
    boxShadow: "0 20px 60px -15px rgba(0,0,0,0.8), 0 0 60px rgba(0,180,216,0.3), 0 0 120px rgba(0,180,216,0.12)",
  },
  imageMaskInner: {
    width: "100%",
    height: "100%",
    borderRadius: "198px 26px 26px 198px",
    overflow: "hidden",
    position: "relative",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transform: "scale(1.04)",
  },
  imageOverlayGradient: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(8,13,26,0.1) 0%, rgba(8,13,26,0.55) 100%)",
    mixBlendMode: "multiply",
  },
  glowBorder: {
    position: "absolute",
    inset: -1,
    borderRadius: "200px 28px 28px 200px",
    border: "1px solid rgba(0,180,216,0.5)",
    pointerEvents: "none",
  },
  glowAccentLeft: {
    position: "absolute",
    left: -30,
    top: "10%",
    width: 60,
    height: "80%",
    background: "radial-gradient(ellipse at right, rgba(0,180,216,0.5) 0%, transparent 70%)",
    filter: "blur(15px)",
    pointerEvents: "none",
  },
  counterWrap: {
    position: "absolute",
    bottom: 36,
    left: 56,
    display: "flex",
    flexDirection: "column",
    gap: 8,
    zIndex: 10,
    pointerEvents: "none",
  },
  progressTrack: {
    width: 120,
    height: 3,
    borderRadius: 2,
    background: "rgba(0, 180, 216, 0.15)",
    overflow: "hidden",
  },
  progressFill: {
    width: "6.25%",
    height: "100%",
    borderRadius: 2,
    background: "linear-gradient(90deg, #0284C7, #00B4D8)",
    boxShadow: "0 0 8px rgba(0,180,216,0.5)",
  },
};
