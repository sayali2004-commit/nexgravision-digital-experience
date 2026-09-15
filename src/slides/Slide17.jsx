import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import { CLIENT_LOGOS } from "../config/assets";
import SlideBackground from "../components/SlideBackground";

const data = SLIDES[1];

const LOGO_LAYOUT = [
  { x: 8,  y: 18, size: 1.0,  depth: 0.7 },
  { x: 78, y: 12, size: 0.85, depth: 0.5 },
  { x: 15, y: 68, size: 0.9,  depth: 0.6 },
  { x: 82, y: 62, size: 1.1,  depth: 0.8 },
  { x: 42, y: 8,  size: 0.8,  depth: 0.4 },
  { x: 58, y: 78, size: 0.95, depth: 0.65 },
  { x: 4,  y: 42, size: 0.75, depth: 0.45 },
  { x: 88, y: 38, size: 0.88, depth: 0.55 },
];

const FLOAT_DUR = [5.5, 6.2, 5.0, 6.8, 5.8, 6.0, 5.3, 6.5];
const FLOAT_DEL = [0, 1.2, 2.4, 0.6, 1.8, 3.0, 0.3, 1.5];

const TRAIL_PATHS = [
  "M 12 22 Q 30 35 50 50",
  "M 82 16 Q 68 32 50 50",
  "M 19 72 Q 34 60 50 50",
  "M 85 65 Q 70 58 50 50",
  "M 46 12 Q 48 30 50 50",
  "M 62 81 Q 56 66 50 50",
  "M 8 46 Q 28 48 50 50",
  "M 91 42 Q 72 46 50 50",
];

export default function Slide17({ isActive }) {
  const wrapRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const descRef = useRef(null);
  const coreRef = useRef(null);
  const logosLayerRef = useRef(null);
  const trailsRef = useRef(null);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);
  const focusTimerRef = useRef(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [focusIdx, setFocusIdx] = useState(-1);

  const runFocusCycle = useCallback(() => {
    if (focusTimerRef.current) clearInterval(focusTimerRef.current);
    let idx = 0;
    const cycle = () => {
      setFocusIdx(idx);
      setTimeout(() => setFocusIdx(-1), 2200);
      idx = (idx + 1) % CLIENT_LOGOS.length;
    };
    cycle();
    focusTimerRef.current = setInterval(cycle, 4500);
  }, []);

  useEffect(() => {
    if (!isActive || hasAnimated.current) return;
    hasAnimated.current = true;

    const tl = gsap.timeline({ delay: 0.2 });

    gsap.set(tagRef.current, { opacity: 0, x: -15 });
    tl.to(tagRef.current, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }, 0.1);

    gsap.set(headlineRef.current, { opacity: 0, y: 25 });
    tl.to(headlineRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.2);

    gsap.set(descRef.current, { opacity: 0, y: 15 });
    tl.to(descRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.35);

    gsap.set(coreRef.current, { opacity: 0, scale: 0.85 });
    tl.to(coreRef.current, { opacity: 1, scale: 1, duration: 1.0, ease: "power3.out" }, 0.4);

    const trailEls = trailsRef.current?.querySelectorAll(".trail-path");
    if (trailEls) {
      trailEls.forEach((path, i) => {
        const len = path.getTotalLength();
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len, opacity: 0 });
        tl.to(path, { strokeDashoffset: 0, opacity: 1, duration: 0.9, ease: "power2.inOut" }, 0.6 + i * 0.08);
      });
    }

    const logoEls = logosLayerRef.current?.querySelectorAll(".gallery-logo");
    if (logoEls) {
      const dirs = [
        { x: -40, y: -30 }, { x: 40, y: -30 },
        { x: -40, y: 30 },  { x: 40, y: 30 },
        { x: 0, y: -40 },   { x: 0, y: 40 },
        { x: -40, y: 0 },   { x: 40, y: 0 },
      ];
      logoEls.forEach((el, i) => {
        const d = dirs[i] || { x: 0, y: -30 };
        gsap.set(el, { opacity: 0, x: d.x, y: d.y, scale: 0.8 });
        tl.to(el, { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.1)" }, 0.9 + i * 0.1);
      });
    }

    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 1.8);

    tl.call(() => runFocusCycle(), null, 2.0);

    return () => {
      if (focusTimerRef.current) clearInterval(focusTimerRef.current);
    };
  }, [isActive, runFocusCycle]);

  useEffect(() => {
    if (isActive && hasAnimated.current) {
      hasAnimated.current = false;
      const timer = setTimeout(() => {
        hasAnimated.current = true;
        const tl = gsap.timeline({ delay: 0.2 });

        gsap.set(tagRef.current, { opacity: 0, x: -15 });
        tl.to(tagRef.current, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }, 0.1);
        gsap.set(headlineRef.current, { opacity: 0, y: 25 });
        tl.to(headlineRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.2);
        gsap.set(descRef.current, { opacity: 0, y: 15 });
        tl.to(descRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.35);
        gsap.set(coreRef.current, { opacity: 0, scale: 0.85 });
        tl.to(coreRef.current, { opacity: 1, scale: 1, duration: 1.0, ease: "power3.out" }, 0.4);

        const trailEls = trailsRef.current?.querySelectorAll(".trail-path");
        if (trailEls) {
          trailEls.forEach((path, i) => {
            const len = path.getTotalLength();
            gsap.set(path, { strokeDasharray: len, strokeDashoffset: len, opacity: 0 });
            tl.to(path, { strokeDashoffset: 0, opacity: 1, duration: 0.9, ease: "power2.inOut" }, 0.6 + i * 0.08);
          });
        }

        const logoEls = logosLayerRef.current?.querySelectorAll(".gallery-logo");
        if (logoEls) {
          const dirs = [
            { x: -40, y: -30 }, { x: 40, y: -30 },
            { x: -40, y: 30 },  { x: 40, y: 30 },
            { x: 0, y: -40 },   { x: 0, y: 40 },
            { x: -40, y: 0 },   { x: 40, y: 0 },
          ];
          logoEls.forEach((el, i) => {
            const d = dirs[i] || { x: 0, y: -30 };
            gsap.set(el, { opacity: 0, x: d.x, y: d.y, scale: 0.8 });
            tl.to(el, { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.1)" }, 0.9 + i * 0.1);
          });
        }

        gsap.set(counterRef.current, { opacity: 0 });
        tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 1.8);
        tl.call(() => runFocusCycle(), null, 2.0);
      }, 50);
      return () => {
        clearTimeout(timer);
        if (focusTimerRef.current) clearInterval(focusTimerRef.current);
      };
    }
  }, [isActive, runFocusCycle]);

  const isFocused = (i) => focusIdx === i;
  const isHovered = (i) => hoveredIdx === i;
  const isQuiet = (i) => focusIdx >= 0 && focusIdx !== i && !isHovered(i);

  return (
    <div ref={wrapRef} style={styles.wrap}>
      <SlideBackground
        orbColor="radial-gradient(circle, rgba(0,180,216,0.04) 0%, transparent 70%)"
        orbPosition={{ top: "50%", left: "50%" }}
      />

      <div style={styles.container}>
        {/* Header */}
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

        {/* Gallery */}
        <div style={styles.gallery}>
          {/* Light trails SVG */}
          <svg ref={trailsRef} style={styles.trailsSvg} viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="trailGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00B4D8" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#00B4D8" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#00B4D8" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            {TRAIL_PATHS.map((d, i) => (
              <path
                key={i}
                className="trail-path"
                d={d}
                fill="none"
                stroke="url(#trailGrad)"
                strokeWidth="0.3"
                strokeLinecap="round"
              />
            ))}
            {/* Glowing nodes on trails */}
            {[0, 1, 3, 5, 7].map((i) => {
              const parts = TRAIL_PATHS[i].split(/[MQ]/);
              const mid = parts.length > 1 ? parts[1].trim().split(" ") : ["50", "50"];
              return (
                <circle key={`n-${i}`} cx={mid[0]} cy={mid[1]} r="0.6" fill="rgba(0,180,216,0.5)">
                  <animate
                    attributeName="opacity"
                    values="0.2;0.7;0.2"
                    dur={`${2.5 + i * 0.3}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              );
            })}
          </svg>

          {/* Central focal element */}
          <div ref={coreRef} style={styles.core}>
            <div style={styles.coreRing} />
            <div style={styles.coreInner}>
              <div style={styles.coreBrand}>NEXGRAVISION</div>
              <div style={styles.coreSub}>Digital Partnerships</div>
            </div>
          </div>

          {/* Floating logos */}
          <div ref={logosLayerRef} style={styles.logosLayer}>
            {CLIENT_LOGOS.map((logo, i) => {
              const layout = LOGO_LAYOUT[i];
              const hov = isHovered(i);
              const foc = isFocused(i);
              const quiet = isQuiet(i);
              const baseW = 90 + layout.size * 40;
              const baseH = 70 + layout.size * 30;

              return (
                <div
                  key={i}
                  className="gallery-logo"
                  style={{
                    ...styles.logoTile,
                    left: `${layout.x}%`,
                    top: `${layout.y}%`,
                    width: `clamp(${baseW * 0.6}px, ${baseW * 0.09}vw, ${baseW}px)`,
                    height: `clamp(${baseH * 0.6}px, ${baseH * 0.09}vw, ${baseH}px)`,
                    animationDuration: `${FLOAT_DUR[i]}s`,
                    animationDelay: `${FLOAT_DEL[i]}s`,
                    opacity: hov ? 1 : foc ? 0.95 : quiet ? 0.45 : 0.75,
                    transform: hov
                      ? "translate(-50%, -50%) scale(1.12)"
                      : foc
                      ? "translate(-50%, -50%) scale(1.08)"
                      : "translate(-50%, -50%) scale(1)",
                    borderColor: hov
                      ? "rgba(0,180,216,0.4)"
                      : foc
                      ? "rgba(0,180,216,0.25)"
                      : "rgba(0,180,216,0.06)",
                    boxShadow: hov
                      ? "0 8px 40px rgba(0,180,216,0.2), 0 0 0 1px rgba(0,180,216,0.15)"
                      : foc
                      ? "0 4px 24px rgba(0,180,216,0.12)"
                      : "none",
                    zIndex: hov ? 20 : foc ? 15 : 1,
                    filter: quiet && !hov ? "brightness(0.7)" : "none",
                  }}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <img src={logo.url} alt={logo.name} style={styles.logoImg} />
                  <div style={{
                    ...styles.logoName,
                    opacity: hov ? 1 : 0,
                    transform: hov ? "translateY(0)" : "translateY(4px)",
                  }}>
                    {logo.name}
                  </div>
                </div>
              );
            })}
          </div>
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
    padding: "clamp(16px, 3vw, 40px) clamp(16px, 4vw, 60px)",
    overflow: "hidden",
  },
  container: {
    width: "100%",
    maxWidth: 1200,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 2,
    position: "relative",
  },
  header: {
    textAlign: "center",
    flexShrink: 0,
    marginBottom: "clamp(12px, 2vw, 24px)",
  },
  headline: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(22px, 2.8vw, 34px)",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.15,
    letterSpacing: "-0.01em",
    marginBottom: 8,
  },
  description: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(12px, 1.1vw, 14px)",
    color: "#94A3B8",
    lineHeight: 1.6,
    maxWidth: 440,
    margin: "0 auto",
  },
  gallery: {
    flex: 1,
    width: "100%",
    position: "relative",
    minHeight: 0,
  },
  trailsSvg: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 0,
  },
  core: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  coreRing: {
    position: "absolute",
    width: "clamp(110px, 16vw, 160px)",
    height: "clamp(110px, 16vw, 160px)",
    borderRadius: "50%",
    border: "1px solid rgba(0,180,216,0.12)",
    animation: "core-pulse 5s ease-in-out infinite",
  },
  coreInner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    padding: "clamp(16px, 2vw, 28px)",
    borderRadius: 20,
    background: "linear-gradient(145deg, rgba(10,16,30,0.8) 0%, rgba(6,10,20,0.9) 100%)",
    border: "1px solid rgba(0,180,216,0.1)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    boxShadow: "0 0 40px rgba(0,180,216,0.08), inset 0 1px 0 rgba(0,180,216,0.06)",
  },
  coreBrand: {
    fontFamily: "var(--font-mono)",
    fontSize: "clamp(11px, 1.3vw, 15px)",
    fontWeight: 700,
    color: "#E0F2FE",
    letterSpacing: "0.2em",
    textAlign: "center",
  },
  coreSub: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(10px, 1vw, 13px)",
    fontWeight: 400,
    fontStyle: "italic",
    color: "#7DD3FC",
    letterSpacing: "0.05em",
    textAlign: "center",
  },
  logosLayer: {
    position: "absolute",
    inset: 0,
    zIndex: 10,
  },
  logoTile: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    padding: "clamp(10px, 1.5vw, 18px)",
    borderRadius: 14,
    border: "1px solid rgba(0,180,216,0.06)",
    background: "linear-gradient(145deg, rgba(16,24,40,0.55) 0%, rgba(10,16,30,0.65) 100%)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    cursor: "default",
    transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
    animation: "float-gallery ease-in-out infinite",
    willChange: "transform, opacity",
  },
  logoImg: {
    maxWidth: "80%",
    maxHeight: "65%",
    objectFit: "contain",
    filter: "brightness(0.9) contrast(1.05)",
    transition: "filter 0.3s ease",
  },
  logoName: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(8px, 0.8vw, 10px)",
    fontWeight: 600,
    color: "#94A3B8",
    letterSpacing: "0.04em",
    textAlign: "center",
    whiteSpace: "nowrap",
    transition: "all 0.3s ease",
  },
};
