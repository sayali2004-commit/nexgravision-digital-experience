import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import { IMAGES } from "../config/assets";

const data = SLIDES[5];

export default function Slide13({ isActive }) {
  const wrapRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const cardRefs = useRef([]);
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

    // 2 Cards
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: 0, y: 35, scale: 0.95 });
      tl.to(el, { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "expo.out" }, 0.45 + i * 0.15);
    });

    // Counter
    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 1.1);
  }, [isActive]);

  return (
    <div ref={wrapRef} style={styles.wrap}>
      {/* Mountain Sunset Backdrop */}
      <div style={styles.bgImageWrap}>
        <img
          src={IMAGES.mountainSunset}
          alt="Sunset mountains"
          style={styles.bgImage}
        />
        <div style={styles.bgGradientWash} />
      </div>

      <div style={styles.container}>
        <div style={styles.header}>
          <div ref={tagRef} className="section-tag">
            // Our Mission & Vision
          </div>
          <h2 ref={headlineRef} style={styles.headline}>
            {data.headline}
          </h2>
        </div>

        {/* 2 Glass Cards */}
        <div className="grid-2-responsive" style={styles.cardsRow}>
          {/* Mission Card */}
          <div
            ref={(el) => (cardRefs.current[0] = el)}
            className="glass-card"
            style={styles.card}
            onMouseEnter={(e) => gsap.to(e.currentTarget, { y: -6, duration: 0.3 })}
            onMouseLeave={(e) => gsap.to(e.currentTarget, { y: 0, duration: 0.3 })}
          >
            <div style={styles.iconCircle}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
              </svg>
            </div>
            <h3 style={styles.cardTitle}>{data.mission.title}</h3>
            <p style={styles.cardDesc}>{data.mission.description}</p>
          </div>

          {/* Vision Card */}
          <div
            ref={(el) => (cardRefs.current[1] = el)}
            className="glass-card"
            style={styles.card}
            onMouseEnter={(e) => gsap.to(e.currentTarget, { y: -6, duration: 0.3 })}
            onMouseLeave={(e) => gsap.to(e.currentTarget, { y: 0, duration: 0.3 })}
          >
            <div style={styles.iconCircle}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3 style={styles.cardTitle}>{data.vision.title}</h3>
            <p style={styles.cardDesc}>{data.vision.description}</p>
          </div>
        </div>
      </div>

      <div ref={counterRef} className="slide-counter">
        06 / 8
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
  bgImageWrap: {
    position: "absolute",
    inset: 0,
    zIndex: 0,
    pointerEvents: "none",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(0.55) contrast(1.1)",
  },
  bgGradientWash: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(6,11,24,0.85) 0%, rgba(6,11,24,0.4) 50%, rgba(6,11,24,0.9) 100%)",
  },
  container: {
    width: "100%",
    maxWidth: 1040,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    zIndex: 2,
    position: "relative",
  },
  header: {
    marginBottom: 44,
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
  cardsRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 36,
    width: "100%",
  },
  card: {
    padding: "clamp(20px, 3vw, 36px) clamp(16px, 2.5vw, 32px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 16,
    borderRadius: 20,
    background: "rgba(10, 17, 40, 0.75)",
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 14,
    background: "rgba(0, 180, 216, 0.12)",
    border: "1px solid rgba(0, 180, 216, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 0 20px rgba(0, 180, 216, 0.2)",
  },
  cardTitle: {
    fontFamily: "var(--font-sans)",
    fontSize: 18,
    fontWeight: 700,
    color: "#FFFFFF",
  },
  cardDesc: {
    fontFamily: "var(--font-sans)",
    fontSize: 14,
    color: "#CBD5E1",
    lineHeight: 1.65,
  },
};
