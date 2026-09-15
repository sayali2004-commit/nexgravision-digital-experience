import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import { CLIENT_LOGOS } from "../config/assets";
import SlideBackground from "../components/SlideBackground";

const data = SLIDES[1];

const ORBIT_CONFIG = [
  { radius: 0.32, speed: 0.15, depth: 0.6, startAngle: 0 },
  { radius: 0.28, speed: -0.12, depth: 0.8, startAngle: 1.2 },
  { radius: 0.38, speed: 0.1, depth: 0.4, startAngle: 2.4 },
  { radius: 0.25, speed: -0.18, depth: 0.9, startAngle: 3.6 },
  { radius: 0.35, speed: 0.13, depth: 0.5, startAngle: 4.8 },
  { radius: 0.3, speed: -0.14, depth: 0.7, startAngle: 0.8 },
  { radius: 0.36, speed: 0.11, depth: 0.3, startAngle: 2.0 },
  { radius: 0.27, speed: -0.16, depth: 0.85, startAngle: 3.2 },
];

const CONNECTIONS = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [4, 5], [5, 6], [6, 7], [7, 0],
  [0, 3], [1, 5], [2, 6], [4, 7],
];

export default function Slide17({ isActive }) {
  const wrapRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const descRef = useRef(null);
  const canvasRef = useRef(null);
  const stageRef = useRef(null);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);
  const angleRef = useRef(ORBIT_CONFIG.map(c => c.startAngle));
  const rafRef = useRef(null);
  const pausedRef = useRef(false);
  const hoveredRef = useRef(null);
  const positionsRef = useRef([]);
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

    gsap.set(stageRef.current, { opacity: 0 });
    tl.to(stageRef.current, { opacity: 1, duration: 1.0, ease: "power2.out" }, 0.5);

    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 0.8);
  }, [isActive]);

  const drawLines = useCallback((ctx, positions, w, h) => {
    ctx.clearRect(0, 0, w, h);
    CONNECTIONS.forEach(([a, b]) => {
      const pa = positions[a];
      const pb = positions[b];
      if (!pa || !pb) return;

      const dist = Math.hypot(pa.x - pb.x, pa.y - pb.y);
      const maxDist = w * 0.45;
      if (dist > maxDist) return;

      const alpha = (1 - dist / maxDist) * 0.18;
      const depthAvg = (pa.depth + pb.depth) / 2;
      const lineAlpha = alpha * (0.4 + depthAvg * 0.6);

      ctx.beginPath();
      ctx.moveTo(pa.x, pa.y);
      ctx.lineTo(pb.x, pb.y);
      ctx.strokeStyle = `rgba(0, 180, 216, ${lineAlpha})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();
    });
  }, []);

  const animate = useCallback(() => {
    if (!stageRef.current || !canvasRef.current) {
      rafRef.current = requestAnimationFrame(animate);
      return;
    }

    const stage = stageRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const w = stage.offsetWidth;
    const h = stage.offsetHeight;

    canvas.width = w * window.devicePixelRatio;
    canvas.height = h * window.devicePixelRatio;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const cx = w / 2;
    const cy = h / 2;
    const items = stage.querySelectorAll(".orbit-logo");
    const positions = [];

    if (!pausedRef.current) {
      for (let i = 0; i < ORBIT_CONFIG.length; i++) {
        angleRef.current[i] += ORBIT_CONFIG[i].speed * 0.016;
      }
    }

    for (let i = 0; i < CLIENT_LOGOS.length; i++) {
      const cfg = ORBIT_CONFIG[i];
      const angle = angleRef.current[i];
      const rx = w * cfg.radius;
      const ry = h * cfg.radius * 0.55;

      const x = cx + Math.cos(angle) * rx;
      const y = cy + Math.sin(angle) * ry;
      const depth = (Math.sin(angle) + 1) / 2;

      const isHovered = hoveredRef.current === i;
      const baseScale = 0.55 + depth * 0.5;
      const scale = isHovered ? 1.15 : baseScale;
      const opacity = isHovered ? 1 : (0.3 + depth * 0.6);
      const blur = isHovered ? 0 : (1 - depth) * 1.5;
      const zIndex = Math.round(depth * 100);

      positions.push({ x, y, depth });

      if (items[i]) {
        items[i].style.transform = `translate(-50%, -50%) translate(${x - cx}px, ${y - cy}px) scale(${scale})`;
        items[i].style.opacity = opacity;
        items[i].style.filter = `blur(${blur}px) brightness(${0.75 + depth * 0.35})`;
        items[i].style.zIndex = zIndex;

        const glowEl = items[i].querySelector(".orbit-glow");
        if (glowEl) {
          const glowAlpha = isHovered ? 0.6 : depth * 0.3;
          glowEl.style.opacity = glowAlpha;
        }

        const nameEl = items[i].querySelector(".orbit-name");
        if (nameEl) {
          nameEl.style.opacity = isHovered ? 1 : 0.3 + depth * 0.5;
          nameEl.style.color = isHovered ? "#7DD3FC" : "#64748B";
        }
      }
    }

    positionsRef.current = positions;
    drawLines(ctx, positions, w, h);

    rafRef.current = requestAnimationFrame(animate);
  }, [drawLines]);

  useEffect(() => {
    if (!isActive) return;
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isActive, animate]);

  const handleLogoEnter = (i) => {
    hoveredRef.current = i;
    setHoveredIdx(i);
    pausedRef.current = true;
  };

  const handleLogoLeave = () => {
    hoveredRef.current = null;
    setHoveredIdx(null);
    pausedRef.current = false;
  };

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

        <div ref={stageRef} style={styles.stage}>
          {/* Center glow */}
          <div style={styles.centerGlow} />

          {/* Connection lines canvas */}
          <canvas ref={canvasRef} style={styles.canvas} />

          {/* Orbiting logos */}
          {CLIENT_LOGOS.map((logo, i) => (
            <div
              key={i}
              className="orbit-logo"
              style={styles.orbitItem}
              onMouseEnter={() => handleLogoEnter(i)}
              onMouseLeave={handleLogoLeave}
            >
              <div className="orbit-glow" style={styles.orbitGlow} />
              <div style={{
                ...styles.logoCard,
                borderColor: hoveredIdx === i
                  ? "rgba(0,180,216,0.5)"
                  : "rgba(0,180,216,0.1)",
                boxShadow: hoveredIdx === i
                  ? "0 0 30px rgba(0,180,216,0.2), 0 8px 32px rgba(0,0,0,0.5)"
                  : "0 4px 20px rgba(0,0,0,0.4)",
              }}>
                <img src={logo.url} alt={logo.name} style={styles.logoImg} />
              </div>
              <div className="orbit-name" style={styles.logoName}>
                {logo.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div ref={counterRef} className="slide-counter">
        02 / 4
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
    padding: "clamp(16px, 3vw, 40px) 0",
    overflow: "hidden",
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 2,
    position: "relative",
  },
  header: {
    textAlign: "center",
    padding: "0 24px",
    marginBottom: "clamp(8px, 2vw, 24px)",
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
  stage: {
    position: "relative",
    width: "100%",
    maxWidth: 900,
    height: "clamp(280px, 50vh, 420px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  centerGlow: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "clamp(100px, 18vw, 180px)",
    height: "clamp(100px, 18vw, 180px)",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(0,180,216,0.12) 0%, rgba(0,180,216,0.03) 40%, transparent 70%)",
    filter: "blur(20px)",
    pointerEvents: "none",
  },
  canvas: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 0,
  },
  orbitItem: {
    position: "absolute",
    top: "50%",
    left: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    cursor: "default",
    transition: "filter 0.3s ease",
    willChange: "transform, opacity",
  },
  orbitGlow: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "clamp(80px, 12vw, 120px)",
    height: "clamp(80px, 12vw, 120px)",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(0,180,216,0.3) 0%, transparent 70%)",
    filter: "blur(12px)",
    pointerEvents: "none",
    opacity: 0,
    transition: "opacity 0.4s ease",
  },
  logoCard: {
    width: "clamp(64px, 10vw, 96px)",
    height: "clamp(64px, 10vw, 96px)",
    borderRadius: 16,
    border: "1px solid rgba(0,180,216,0.1)",
    background: "linear-gradient(145deg, rgba(16,24,40,0.85) 0%, rgba(8,13,26,0.95) 100%)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "clamp(10px, 1.5vw, 16px)",
    transition: "border-color 0.4s ease, box-shadow 0.4s ease",
    position: "relative",
    zIndex: 1,
  },
  logoImg: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    filter: "saturate(0.85)",
  },
  logoName: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(9px, 0.9vw, 11px)",
    fontWeight: 600,
    letterSpacing: "0.04em",
    textAlign: "center",
    whiteSpace: "nowrap",
    position: "relative",
    zIndex: 1,
    transition: "color 0.3s ease, opacity 0.3s ease",
  },
};
