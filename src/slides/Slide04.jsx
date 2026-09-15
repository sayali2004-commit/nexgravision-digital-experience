import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import { TECH_STACK } from "../config/assets";
import SlideBackground from "../components/SlideBackground";

const data = SLIDES[3];

export default function Slide04({ isActive }) {
  const wrapRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const descRef = useRef(null);
  const itemRefs = useRef([]);
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

    // Desc
    gsap.set(descRef.current, { opacity: 0, y: 20 });
    tl.to(descRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.4);

    // 12 Items
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: 0, scale: 0.85, y: 20 });
      tl.to(el, { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(1.4)" }, 0.5 + i * 0.05);
    });

    // Counter
    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 1.2);
  }, [isActive]);

  return (
    <div ref={wrapRef} style={styles.wrap}>
      <SlideBackground
        orbColor="radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)"
        orbPosition={{ top: "45%", left: "55%" }}
      />

      <div style={styles.container}>
        <div style={styles.header}>
          <div ref={tagRef} className="section-tag">
            // Our Tech Stack
          </div>
          <h2 ref={headlineRef} style={styles.headline}>
            {data.headline}
          </h2>
          <p ref={descRef} style={styles.description}>
            {data.description}
          </p>
        </div>

        {/* 6 Columns x 2 Rows Grid */}
        <div style={styles.grid}>
          {TECH_STACK.map((tech, i) => (
            <div
              key={i}
              ref={(el) => (itemRefs.current[i] = el)}
              className="glass-card"
              style={styles.techCard}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, { y: -4, borderColor: "rgba(0, 180, 216, 0.4)", duration: 0.25 });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, { y: 0, borderColor: "rgba(255, 255, 255, 0.08)", duration: 0.25 });
              }}
            >
              <div style={styles.iconContainer}>
                {tech.svg}
              </div>
              <span style={styles.techName}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div ref={counterRef} className="slide-counter">
        04 / 16
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
    marginBottom: 44,
    textAlign: "left",
  },
  headline: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(30px, 3.8vw, 48px)",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.15,
    marginBottom: 14,
    letterSpacing: "-0.01em",
  },
  description: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(13px, 1.35vw, 16px)",
    color: "#94A3B8",
    maxWidth: 620,
    lineHeight: 1.6,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gap: 20,
    width: "100%",
  },
  techCard: {
    padding: "24px 12px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    gap: 14,
    borderRadius: 14,
    cursor: "default",
    minHeight: 110,
  },
  iconContainer: {
    height: 38,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  techName: {
    fontFamily: "var(--font-sans)",
    fontSize: 12,
    fontWeight: 600,
    color: "#E2E8F0",
    letterSpacing: "0.01em",
  },
};
