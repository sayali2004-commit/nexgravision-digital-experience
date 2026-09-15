import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import { CLIENT_LOGOS } from "../config/assets";
import SlideBackground from "../components/SlideBackground";

const data = SLIDES[1];

const FLOAT_DURATIONS = [3.2, 3.8, 4.1, 3.5, 4.4, 3.0, 3.7, 4.0];
const FLOAT_DELAYS = [0, 0.6, 1.2, 0.3, 0.9, 1.5, 0.4, 1.0];

export default function Slide17({ isActive }) {
  const wrapRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const descRef = useRef(null);
  const gridRef = useRef(null);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useEffect(() => {
    if (!isActive || hasAnimated.current) return;
    hasAnimated.current = true;

    const tl = gsap.timeline({ delay: 0.2 });

    gsap.set(tagRef.current, { opacity: 0, x: -15 });
    tl.to(tagRef.current, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }, 0.1);

    gsap.set(headlineRef.current, { opacity: 0, y: 25 });
    tl.to(headlineRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.25);

    gsap.set(descRef.current, { opacity: 0, y: 15 });
    tl.to(descRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.45);

    const cards = gridRef.current?.querySelectorAll(".client-card");
    if (cards) {
      cards.forEach((card, i) => {
        gsap.set(card, { opacity: 0, y: 25, scale: 0.95 });
        tl.to(card, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.2)" }, 0.5 + i * 0.07);
      });
    }

    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 0.9);
  }, [isActive]);

  return (
    <div ref={wrapRef} style={styles.wrap}>
      <SlideBackground
        orbColor="radial-gradient(circle, rgba(0,180,216,0.05) 0%, transparent 70%)"
        orbPosition={{ top: "55%", left: "50%" }}
      />

      <div style={styles.container}>
        <div style={styles.header}>
          <div ref={tagRef} className="section-tag">
            // Our Clients
          </div>
          <h2 ref={headlineRef} style={styles.headline}>
            {data.headline}
          </h2>
          <p ref={descRef} style={styles.description}>
            {data.description}
          </p>
        </div>

        <div ref={gridRef} className="client-grid-responsive" style={styles.grid}>
          {CLIENT_LOGOS.map((logo, i) => (
            <div
              key={i}
              className="client-card"
              style={{
                ...styles.card,
                animationDuration: `${FLOAT_DURATIONS[i]}s`,
                animationDelay: `${FLOAT_DELAYS[i]}s`,
                transform: hoveredIdx === i ? "translateY(-6px) scale(1.04)" : undefined,
                borderColor: hoveredIdx === i ? "rgba(0,180,216,0.35)" : undefined,
                boxShadow: hoveredIdx === i
                  ? "0 8px 32px rgba(0,180,216,0.12), 0 0 0 1px rgba(0,180,216,0.1)"
                  : undefined,
              }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div style={styles.logoWrap}>
                <img src={logo.url} alt={logo.name} style={styles.logoImg} />
              </div>
              <div style={{
                ...styles.name,
                color: hoveredIdx === i ? "#7DD3FC" : "#94A3B8",
              }}>
                {logo.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div ref={counterRef} className="slide-counter">
        02 / 5
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
  container: {
    width: "100%",
    maxWidth: 1000,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 2,
    position: "relative",
  },
  header: {
    textAlign: "center",
    marginBottom: "clamp(24px, 4vw, 48px)",
  },
  headline: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(22px, 2.8vw, 34px)",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.15,
    letterSpacing: "-0.01em",
    marginBottom: 10,
  },
  description: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(13px, 1.2vw, 15px)",
    color: "#94A3B8",
    lineHeight: 1.6,
    maxWidth: 460,
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "clamp(12px, 2vw, 20px)",
    width: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    padding: "clamp(20px, 2.5vw, 32px) clamp(12px, 1.5vw, 20px)",
    borderRadius: 16,
    border: "1px solid rgba(0,180,216,0.08)",
    background: "linear-gradient(145deg, rgba(16,24,40,0.6) 0%, rgba(10,16,30,0.7) 100%)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    cursor: "default",
    transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
    animation: "float-gentle ease-in-out infinite",
    willChange: "transform",
  },
  logoWrap: {
    width: "clamp(52px, 7vw, 72px)",
    height: "clamp(52px, 7vw, 72px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoImg: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  },
  name: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(10px, 1vw, 12px)",
    fontWeight: 600,
    letterSpacing: "0.03em",
    textAlign: "center",
    whiteSpace: "nowrap",
    transition: "color 0.3s ease",
  },
};
