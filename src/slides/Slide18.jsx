import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import SlideBackground from "../components/SlideBackground";

const data = SLIDES[2];

const SOLUTIONS = [
  "Web Applications",
  "Mobile Experiences",
  "Cloud Solutions",
  "AI & Automation",
  "Business Systems",
  "Digital Experiences",
];

const FLOAT_DURATIONS = [4.5, 5.0, 4.2, 5.3, 4.8, 4.6];
const FLOAT_DELAYS = [0, 0.8, 1.6, 0.4, 1.2, 2.0];

export default function Slide18({ isActive }) {
  const wrapRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const coreRef = useRef(null);
  const coreRingRef = useRef(null);
  const linesRef = useRef(null);
  const solutionsRef = useRef(null);
  const subRef = useRef(null);
  const brandRef = useRef(null);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const buildEntrance = useCallback(() => {
    if (!coreRef.current || !linesRef.current || !solutionsRef.current) return;

    const tl = gsap.timeline({ delay: 0.3 });

    gsap.set(tagRef.current, { opacity: 0, x: -15 });
    tl.to(tagRef.current, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }, 0.1);

    gsap.set(coreRef.current, { opacity: 0, scale: 0.5 });
    tl.to(coreRef.current, { opacity: 1, scale: 1, duration: 1.0, ease: "back.out(1.4)" }, 0.3);

    gsap.set(coreRingRef.current, { opacity: 0, scale: 0.3 });
    tl.to(coreRingRef.current, { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }, 0.5);

    const lineEls = linesRef.current.querySelectorAll(".conn-line");
    lineEls.forEach((line, i) => {
      const len = line.getTotalLength();
      gsap.set(line, { strokeDasharray: len, strokeDashoffset: len, opacity: 0 });
      tl.to(line, { strokeDashoffset: 0, opacity: 1, duration: 0.7, ease: "power2.inOut" }, 0.8 + i * 0.1);
    });

    const solEls = solutionsRef.current.querySelectorAll(".solution-node");
    solEls.forEach((el, i) => {
      gsap.set(el, { opacity: 0, scale: 0.7 });
      tl.to(el, { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.3)" }, 1.0 + i * 0.12);
    });

    gsap.set(line1Ref.current, { opacity: 0, y: 30, filter: "blur(6px)" });
    tl.to(line1Ref.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, ease: "power3.out" }, 1.6);

    gsap.set(line2Ref.current, { opacity: 0, y: 30, filter: "blur(6px)" });
    tl.to(line2Ref.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, ease: "power3.out" }, 1.8);

    gsap.set(subRef.current, { opacity: 0, y: 15 });
    tl.to(subRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 2.1);

    gsap.set(brandRef.current, { opacity: 0 });
    tl.to(brandRef.current, { opacity: 1, duration: 0.5 }, 2.3);

    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 2.4);
  }, []);

  useEffect(() => {
    if (!isActive || hasAnimated.current) return;
    hasAnimated.current = true;
    buildEntrance();
  }, [isActive, buildEntrance]);

  useEffect(() => {
    if (isActive && hasAnimated.current) {
      hasAnimated.current = false;
      const timer = setTimeout(() => {
        hasAnimated.current = true;
        buildEntrance();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isActive, buildEntrance]);

  const getSolutionPosition = (index, containerW, containerH) => {
    const angle = (index * 60 - 90) * (Math.PI / 180);
    const isMobile = containerW < 600;
    const radiusX = isMobile ? containerW * 0.32 : containerW * 0.35;
    const radiusY = isMobile ? containerH * 0.32 : containerH * 0.35;
    return {
      x: containerW / 2 + Math.cos(angle) * radiusX,
      y: containerH / 2 + Math.sin(angle) * radiusY,
    };
  };

  return (
    <div ref={wrapRef} style={styles.wrap}>
      <SlideBackground
        orbColor="radial-gradient(circle, rgba(0,180,216,0.06) 0%, transparent 70%)"
        orbPosition={{ top: "45%", left: "50%" }}
      />

      <div style={styles.layout}>
        {/* Header */}
        <div style={styles.header}>
          <div ref={tagRef} className="section-tag">
            // One Core. Every Possibility.
          </div>
          <div ref={headlineRef} style={styles.headlineBlock}>
            <span ref={line1Ref} style={styles.line1}>One Company.</span>
            <span ref={line2Ref} style={styles.line2}>One Software.</span>
          </div>
        </div>

        {/* Ecosystem Visual */}
        <div style={styles.ecosystem}>
          <div style={styles.ecosystemInner}>
            {/* Connection Lines SVG */}
            <svg ref={linesRef} style={styles.linesSvg} viewBox="0 0 600 400" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00B4D8" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#00B4D8" stopOpacity="0.15" />
                </linearGradient>
              </defs>
              {SOLUTIONS.map((_, i) => {
                const pos = getSolutionPosition(i, 600, 400);
                const isHov = hoveredIdx === i;
                return (
                  <line
                    key={i}
                    className="conn-line"
                    x1={300}
                    y1={200}
                    x2={pos.x}
                    y2={pos.y}
                    stroke={isHov ? "rgba(0,180,216,0.6)" : "url(#lineGrad)"}
                    strokeWidth={isHov ? 1.5 : 0.8}
                    style={{ transition: "stroke 0.3s ease, stroke-width 0.3s ease" }}
                  />
                );
              })}
              {/* Subtle particles on lines */}
              {SOLUTIONS.map((_, i) => {
                const pos = getSolutionPosition(i, 600, 400);
                return (
                  <circle key={`p-${i}`} r="2" fill="rgba(0,180,216,0.4)">
                    <animateMotion
                      dur={`${3 + i * 0.5}s`}
                      repeatCount="indefinite"
                      path={`M300,200 L${pos.x},${pos.y}`}
                    />
                    <animate
                      attributeName="opacity"
                      values="0;0.6;0"
                      dur={`${3 + i * 0.5}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                );
              })}
            </svg>

            {/* Central Core */}
            <div ref={coreRef} style={styles.coreWrap}>
              <div ref={coreRingRef} style={styles.coreRing} />
              <div style={styles.coreInner}>
                <div style={styles.coreDot} />
                <div style={styles.coreLabel}>DIGITAL<br/>CORE</div>
              </div>
            </div>

            {/* Solution Nodes */}
            <div ref={solutionsRef} style={styles.solutionsLayer}>
              {SOLUTIONS.map((name, i) => {
                const pos = getSolutionPosition(i, 100, 100);
                const isHov = hoveredIdx === i;
                return (
                  <div
                    key={i}
                    className="solution-node"
                    style={{
                      ...styles.solutionNode,
                      left: `${pos.x}%`,
                      top: `${pos.y}%`,
                      transform: `translate(-50%, -50%) ${isHov ? "scale(1.1)" : "scale(1)"}`,
                      animationDuration: `${FLOAT_DURATIONS[i]}s`,
                      animationDelay: `${FLOAT_DELAYS[i]}s`,
                    }}
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                  >
                    <div style={{
                      ...styles.nodeGlow,
                      opacity: isHov ? 0.5 : 0.15,
                      boxShadow: isHov
                        ? "0 0 24px rgba(0,180,216,0.4), 0 0 48px rgba(0,180,216,0.15)"
                        : "0 0 12px rgba(0,180,216,0.15)",
                    }} />
                    <div style={{
                      ...styles.nodeDot,
                      background: isHov ? "#7DD3FC" : "#00B4D8",
                      boxShadow: isHov
                        ? "0 0 12px rgba(0,180,216,0.6)"
                        : "0 0 6px rgba(0,180,216,0.3)",
                    }} />
                    <div style={{
                      ...styles.nodeLabel,
                      color: isHov ? "#E0F2FE" : "#CBD5E1",
                    }}>
                      {name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Supporting text */}
        <div style={styles.bottom}>
          <p ref={subRef} style={styles.subtext}>
            {data.subheadline}
          </p>
          <div ref={brandRef} style={styles.brandTag}>
            <div style={styles.brandDot} />
            <span style={styles.brandText}>NexGravision</span>
          </div>
        </div>
      </div>

      <div ref={counterRef} className="slide-counter">
        03 / 5
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
    padding: "clamp(12px, 2vw, 32px) clamp(16px, 4vw, 60px)",
    overflow: "hidden",
  },
  layout: {
    width: "100%",
    maxWidth: 1100,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 2,
    position: "relative",
  },
  header: {
    textAlign: "center",
    flexShrink: 0,
  },
  headlineBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
  },
  line1: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(24px, 4vw, 48px)",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
    display: "block",
  },
  line2: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(24px, 4vw, 48px)",
    fontWeight: 700,
    background: "linear-gradient(135deg, #7DD3FC 0%, #00B4D8 40%, #0284C7 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
    display: "block",
    filter: "drop-shadow(0 2px 16px rgba(0,180,216,0.25))",
  },
  ecosystem: {
    flex: 1,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 0,
  },
  ecosystemInner: {
    position: "relative",
    width: "100%",
    maxWidth: 700,
    aspectRatio: "3 / 2",
  },
  linesSvg: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 0,
  },
  coreWrap: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
  },
  coreRing: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "clamp(90px, 14vw, 130px)",
    height: "clamp(90px, 14vw, 130px)",
    borderRadius: "50%",
    border: "1px solid rgba(0,180,216,0.2)",
    animation: "core-pulse 4s ease-in-out infinite",
  },
  coreInner: {
    width: "clamp(72px, 11vw, 100px)",
    height: "clamp(72px, 11vw, 100px)",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(0,180,216,0.15) 0%, rgba(0,180,216,0.05) 60%, transparent 100%)",
    border: "1.5px solid rgba(0,180,216,0.3)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    boxShadow: "0 0 40px rgba(0,180,216,0.15), inset 0 0 20px rgba(0,180,216,0.05)",
  },
  coreDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "#00B4D8",
    boxShadow: "0 0 12px rgba(0,180,216,0.6)",
  },
  coreLabel: {
    fontFamily: "var(--font-mono)",
    fontSize: "clamp(7px, 0.8vw, 9px)",
    fontWeight: 700,
    color: "#7DD3FC",
    letterSpacing: "0.15em",
    textAlign: "center",
    lineHeight: 1.3,
  },
  solutionsLayer: {
    position: "absolute",
    inset: 0,
    zIndex: 3,
  },
  solutionNode: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
    cursor: "default",
    transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
    animation: "float-node ease-in-out infinite",
  },
  nodeGlow: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 48,
    height: 48,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(0,180,216,0.3) 0%, transparent 70%)",
    pointerEvents: "none",
    transition: "opacity 0.3s ease, box-shadow 0.3s ease",
  },
  nodeDot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    transition: "all 0.3s ease",
    zIndex: 1,
  },
  nodeLabel: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(9px, 1vw, 12px)",
    fontWeight: 600,
    letterSpacing: "0.02em",
    textAlign: "center",
    whiteSpace: "nowrap",
    transition: "color 0.3s ease",
    textShadow: "0 1px 8px rgba(0,0,0,0.6)",
  },
  bottom: {
    flexShrink: 0,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
  },
  subtext: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(12px, 1.2vw, 15px)",
    color: "#94A3B8",
    lineHeight: 1.7,
    maxWidth: 480,
    fontWeight: 400,
  },
  brandTag: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  brandDot: {
    width: 5,
    height: 5,
    borderRadius: "50%",
    background: "#00B4D8",
    boxShadow: "0 0 6px rgba(0,180,216,0.4)",
  },
  brandText: {
    fontFamily: "var(--font-mono)",
    fontSize: "clamp(9px, 0.9vw, 11px)",
    fontWeight: 500,
    color: "#64748B",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
  },
};
