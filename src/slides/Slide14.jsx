import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import SlideBackground from "../components/SlideBackground";

const data = SLIDES[13];

export default function Slide14({ isActive }) {
  const wrapRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const cardRefs = useRef([]);
  const waveRef = useRef(null);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isActive || hasAnimated.current) return;
    hasAnimated.current = true;

    const tl = gsap.timeline({ delay: 0.2 });

    // Tag
    gsap.set(tagRef.current, { opacity: 0, x: -15 });
    tl.to(tagRef.current, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }, 0.1);

    // Headline
    gsap.set(headlineRef.current, { opacity: 0, y: 25 });
    tl.to(headlineRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.25);

    // 4 Cards
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: 0, y: 30, scale: 0.95 });
      tl.to(el, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.3)" }, 0.45 + i * 0.1);
    });

    // Golden Wave
    gsap.set(waveRef.current, { opacity: 0, y: 30 });
    tl.to(waveRef.current, { opacity: 0.6, y: 0, duration: 1.2, ease: "power2.out" }, 0.7);

    // Counter
    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 1.1);
  }, [isActive]);

  return (
    <div ref={wrapRef} style={styles.wrap}>
      <SlideBackground
        orbColor="radial-gradient(circle, rgba(0,180,216,0.12) 0%, transparent 70%)"
        orbPosition={{ top: "45%", left: "50%" }}
      />

      <div style={styles.container}>
        <div style={styles.header}>
          <div ref={tagRef} className="section-tag">
            // Our Impact
          </div>
          <h2 ref={headlineRef} style={styles.headline}>
            {data.headline}
          </h2>
        </div>

        {/* 4 Stat Cards */}
        <div style={styles.statsRow}>
          {data.stats.map((stat, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="glass-card"
              style={styles.card}
              onMouseEnter={(e) => gsap.to(e.currentTarget, { y: -5, duration: 0.3 })}
              onMouseLeave={(e) => gsap.to(e.currentTarget, { y: 0, duration: 0.3 })}
            >
              <div style={styles.statNumber}>{stat.number}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Luminous Golden Wave Ribbons */}
      <div ref={waveRef} style={styles.waveWrap}>
        <svg viewBox="0 0 1440 220" fill="none" style={styles.waveSvg} preserveAspectRatio="none">
          <defs>
            <linearGradient id="goldWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00B4D8" stopOpacity="0" />
              <stop offset="35%" stopColor="#7DD3FC" stopOpacity="0.4" />
              <stop offset="65%" stopColor="#00B4D8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="goldWaveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00B4D8" stopOpacity="0" />
              <stop offset="45%" stopColor="#00B4D8" stopOpacity="0.25" />
              <stop offset="75%" stopColor="#7DD3FC" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,120 C320,180 500,40 820,110 C1140,180 1280,70 1440,90"
            stroke="url(#goldWaveGrad)"
            strokeWidth="2"
          />
          <path
            d="M0,150 C280,90 600,190 920,120 C1240,50 1360,130 1440,110"
            stroke="url(#goldWaveGrad2)"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div ref={counterRef} className="slide-counter">
        14 / 17
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
    padding: "48px 72px",
    overflow: "hidden",
  },
  container: {
    width: "100%",
    maxWidth: 1100,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    zIndex: 2,
    position: "relative",
  },
  header: {
    marginBottom: 52,
    textAlign: "left",
  },
  headline: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(22px, 2.8vw, 34px)",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.15,
    letterSpacing: "-0.01em",
  },
  statsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 24,
    width: "100%",
  },
  card: {
    padding: "36px 24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    gap: 12,
    borderRadius: 18,
    minHeight: 160,
  },
  statNumber: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(26px, 3vw, 38px)",
    fontWeight: 700,
    background: "linear-gradient(135deg, #7DD3FC 0%, #00B4D8 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    lineHeight: 1,
    filter: "drop-shadow(0 2px 10px rgba(0,180,216,0.25))",
  },
  statLabel: {
    fontFamily: "var(--font-sans)",
    fontSize: 13,
    fontWeight: 600,
    color: "#94A3B8",
    letterSpacing: "0.02em",
  },
  waveWrap: {
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
    height: 180,
    pointerEvents: "none",
    zIndex: 1,
  },
  waveSvg: {
    width: "100%",
    height: "100%",
  },
};
