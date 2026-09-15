import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import { CLIENT_LOGOS } from "../config/assets";
import SlideBackground from "../components/SlideBackground";

const data = SLIDES[1];

const LOGOS = CLIENT_LOGOS.map((logo, i) => ({
  ...logo,
  x: [12, 82, 10, 85, 48, 55, 5, 90][i],
  y: [20, 15, 72, 68, 6, 82, 45, 40][i],
  w: [130, 100, 110, 140, 90, 120, 80, 105][i],
  h: [100, 80, 90, 110, 72, 95, 65, 85][i],
  floatDur: [5.2, 6.0, 4.8, 6.5, 5.5, 5.8, 5.0, 6.2][i],
  floatAmp: [10, 7, 9, 12, 6, 11, 5, 8][i],
  entryDelay: [0.9, 1.1, 1.3, 1.0, 1.5, 1.2, 1.7, 1.4][i],
}));

const TRAILS = [
  { x1: 12, y1: 24, cx: 28, cy: 36, x2: 50, y2: 50 },
  { x1: 82, y1: 19, cx: 70, cy: 32, x2: 50, y2: 50 },
  { x1: 10, y1: 76, cx: 26, cy: 62, x2: 50, y2: 50 },
  { x1: 85, y1: 72, cx: 72, cy: 60, x2: 50, y2: 50 },
  { x1: 48, y1: 10, cx: 49, cy: 28, x2: 50, y2: 50 },
  { x1: 55, y1: 86, cx: 53, cy: 68, x2: 50, y2: 50 },
  { x1: 5, y1: 49, cx: 24, cy: 50, x2: 50, y2: 50 },
  { x1: 90, y1: 44, cx: 74, cy: 48, x2: 50, y2: 50 },
];

export default function Slide17({ isActive }) {
  const wrapRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const descRef = useRef(null);
  const coreRef = useRef(null);
  const logosRef = useRef(null);
  const trailsSvgRef = useRef(null);
  const counterRef = useRef(null);
  const focusTimer = useRef(null);
  const hasAnimated = useRef(false);
  const [hovered, setHovered] = useState(-1);
  const [focused, setFocused] = useState(-1);

  const startFocusCycle = useCallback(() => {
    if (focusTimer.current) clearInterval(focusTimer.current);
    let idx = 0;
    const tick = () => {
      setFocused(idx);
      setTimeout(() => setFocused(-1), 2000);
      idx = (idx + 1) % LOGOS.length;
    };
    tick();
    focusTimer.current = setInterval(tick, 4000);
  }, []);

  const playEntrance = useCallback(() => {
    const tl = gsap.timeline({ delay: 0.15 });

    gsap.set(tagRef.current, { opacity: 0, x: -20 });
    tl.to(tagRef.current, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }, 0);

    gsap.set(headlineRef.current, { opacity: 0, y: 30 });
    tl.to(headlineRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.1);

    gsap.set(descRef.current, { opacity: 0, y: 15 });
    tl.to(descRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.25);

    gsap.set(coreRef.current, { opacity: 0, scale: 0.6 });
    tl.to(coreRef.current, { opacity: 1, scale: 1, duration: 1.1, ease: "back.out(1.3)" }, 0.3);

    const paths = trailsSvgRef.current?.querySelectorAll(".t-path");
    if (paths) {
      paths.forEach((p, i) => {
        const len = p.getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len, opacity: 0 });
        tl.to(p, { strokeDashoffset: 0, opacity: 1, duration: 0.8, ease: "power2.inOut" }, 0.6 + i * 0.06);
      });
    }

    const nodes = logosRef.current?.querySelectorAll(".g-logo");
    if (nodes) {
      const dirs = [
        { x: -50, y: -40 }, { x: 50, y: -40 },
        { x: -50, y: 40 },  { x: 50, y: 40 },
        { x: 0, y: -50 },   { x: 0, y: 50 },
        { x: -50, y: 0 },   { x: 50, y: 0 },
      ];
      nodes.forEach((n, i) => {
        const d = dirs[i];
        gsap.set(n, { opacity: 0, x: d.x, y: d.y, scale: 0.7 });
        tl.to(n, { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.75, ease: "back.out(1.2)" }, 0.85 + i * 0.09);
      });
    }

    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.4 }, 1.8);
    tl.call(() => startFocusCycle(), null, 2.0);
  }, [startFocusCycle]);

  useEffect(() => {
    if (!isActive || hasAnimated.current) return;
    hasAnimated.current = true;
    playEntrance();
    return () => { if (focusTimer.current) clearInterval(focusTimer.current); };
  }, [isActive, playEntrance]);

  useEffect(() => {
    if (!isActive || !hasAnimated.current) return;
    hasAnimated.current = false;
    const t = setTimeout(() => { hasAnimated.current = true; playEntrance(); }, 60);
    return () => { clearTimeout(t); if (focusTimer.current) clearInterval(focusTimer.current); };
  }, [isActive, playEntrance]);

  return (
    <div ref={wrapRef} style={S.wrap}>
      <SlideBackground
        orbColor="radial-gradient(circle, rgba(0,180,216,0.04) 0%, transparent 70%)"
        orbPosition={{ top: "50%", left: "50%" }}
      />

      {/* Ambient floating particles */}
      <div style={S.particles}>
        {[...Array(12)].map((_, i) => (
          <div key={i} style={{
            ...S.particle,
            left: `${8 + (i * 7.5) % 85}%`,
            top: `${10 + (i * 13) % 80}%`,
            width: 2 + (i % 3),
            height: 2 + (i % 3),
            animationDuration: `${3 + (i * 0.7)}s`,
            animationDelay: `${i * 0.4}s`,
          }} />
        ))}
      </div>

      <div style={S.container}>
        {/* Header */}
        <div style={S.header}>
          <div ref={tagRef} className="section-tag">// Our Clients</div>
          <h2 ref={headlineRef} style={S.headline}>{data.headline}</h2>
          <p ref={descRef} style={S.desc}>{data.description}</p>
        </div>

        {/* Gallery stage */}
        <div style={S.stage}>
          {/* SVG trails + glow nodes */}
          <svg ref={trailsSvgRef} style={S.trailsSvg} viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="tg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00B4D8" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#00B4D8" stopOpacity="0.05" />
              </linearGradient>
              <filter id="tglow">
                <feGaussianBlur stdDeviation="0.8" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            {TRAILS.map((t, i) => (
              <path
                key={i}
                className="t-path"
                d={`M ${t.x1} ${t.y1} Q ${t.cx} ${t.cy} ${t.x2} ${t.y2}`}
                fill="none"
                stroke="url(#tg)"
                strokeWidth={hovered === i || focused === i ? "0.5" : "0.25"}
                strokeLinecap="round"
                filter={hovered === i || focused === i ? "url(#tglow)" : undefined}
                style={{ transition: "stroke-width 0.4s ease" }}
              />
            ))}
            {TRAILS.map((t, i) => {
              const mx = (t.x1 + t.cx + t.x2) / 3;
              const my = (t.y1 + t.cy + t.y2) / 3;
              return (
                <circle key={`g${i}`} cx={mx} cy={my} r="0.5" fill="#00B4D8" opacity="0.3">
                  <animate attributeName="opacity" values="0.15;0.6;0.15" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
                  <animate attributeName="r" values="0.3;0.7;0.3" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
                </circle>
              );
            })}
          </svg>

          {/* Central core */}
          <div ref={coreRef} style={S.core}>
            <div style={S.coreRingOuter} />
            <div style={S.coreRingInner} />
            <div style={S.coreGlow} />
            <div style={S.coreBox}>
              <div style={S.coreIcon}>
                <div style={S.coreDiamond} />
              </div>
              <div style={S.coreBrand}>NEXGRAVISION</div>
              <div style={S.coreDivider} />
              <div style={S.coreSub}>Digital Partnerships</div>
            </div>
          </div>

          {/* Logo tiles */}
          <div ref={logosRef} style={S.logosLayer}>
            {LOGOS.map((logo, i) => {
              const isH = hovered === i;
              const isF = focused === i;
              const isQ = (focused >= 0 && focused !== i && !isH) || (hovered >= 0 && hovered !== i && !isF);

              return (
                <div
                  key={i}
                  className="g-logo"
                  style={{
                    ...S.tile,
                    left: `${logo.x}%`,
                    top: `${logo.y}%`,
                    width: logo.w,
                    height: logo.h,
                    animationDuration: `${logo.floatDur}s`,
                    animationDelay: `${i * 0.3}s`,
                    "--float-amp": `${logo.floatAmp}px`,
                    opacity: isH ? 1 : isF ? 0.95 : isQ ? 0.35 : 0.7,
                    transform: `translate(-50%, -50%) scale(${isH ? 1.15 : isF ? 1.1 : 1})`,
                    borderColor: isH ? "rgba(0,180,216,0.5)" : isF ? "rgba(0,180,216,0.3)" : "rgba(0,180,216,0.07)",
                    boxShadow: isH
                      ? "0 12px 48px rgba(0,180,216,0.25), 0 0 0 1px rgba(0,180,216,0.2), inset 0 0 20px rgba(0,180,216,0.05)"
                      : isF
                      ? "0 8px 32px rgba(0,180,216,0.15), inset 0 0 12px rgba(0,180,216,0.03)"
                      : "0 4px 16px rgba(0,0,0,0.2)",
                    zIndex: isH ? 30 : isF ? 25 : 10,
                    filter: isQ ? "brightness(0.6)" : "none",
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(-1)}
                >
                  {/* Inner glow on hover/focus */}
                  <div style={{
                    ...S.tileGlow,
                    opacity: isH ? 0.6 : isF ? 0.3 : 0,
                  }} />
                  <img src={logo.url} alt={logo.name} style={{
                    ...S.tileImg,
                    filter: isH ? "brightness(1.1) drop-shadow(0 2px 8px rgba(0,180,216,0.3))" : "brightness(0.85)",
                  }} />
                  <div style={{
                    ...S.tileName,
                    opacity: isH ? 1 : isF ? 0.7 : 0,
                    transform: `translateY(${isH ? 0 : 4}px)`,
                  }}>
                    {logo.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div ref={counterRef} className="slide-counter">02 / 5</div>
    </div>
  );
}

const S = {
  wrap: {
    position: "absolute", inset: 0, width: "100%", height: "100%",
    display: "flex", alignItems: "center", justifyContent: "center",
    padding: "clamp(12px, 2.5vw, 36px) clamp(14px, 3.5vw, 56px)",
    overflow: "hidden",
  },
  particles: {
    position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
  },
  particle: {
    position: "absolute", borderRadius: "50%", background: "rgba(0,180,216,0.25)",
    animation: "particle-drift ease-in-out infinite",
  },
  container: {
    width: "100%", maxWidth: 1200, height: "100%",
    display: "flex", flexDirection: "column", alignItems: "center",
    zIndex: 2, position: "relative",
  },
  header: {
    textAlign: "center", flexShrink: 0, marginBottom: "clamp(8px, 1.5vw, 20px)",
  },
  headline: {
    fontFamily: "var(--font-serif)", fontSize: "clamp(24px, 3vw, 38px)",
    fontWeight: 700, color: "#FFF", lineHeight: 1.15,
    letterSpacing: "-0.01em", marginBottom: 8,
  },
  desc: {
    fontFamily: "var(--font-sans)", fontSize: "clamp(12px, 1.1vw, 14px)",
    color: "#94A3B8", lineHeight: 1.6, maxWidth: 440, margin: "0 auto",
  },
  stage: {
    flex: 1, width: "100%", position: "relative", minHeight: 0,
  },
  trailsSvg: {
    position: "absolute", inset: 0, width: "100%", height: "100%",
    pointerEvents: "none", zIndex: 0,
  },
  core: {
    position: "absolute", top: "50%", left: "50%",
    transform: "translate(-50%, -50%)", zIndex: 5,
    display: "flex", alignItems: "center", justifyContent: "center",
  },
  coreRingOuter: {
    position: "absolute", width: "clamp(140px, 18vw, 190px)", height: "clamp(140px, 18vw, 190px)",
    borderRadius: "50%", border: "1px solid rgba(0,180,216,0.1)",
    animation: "core-pulse 5s ease-in-out infinite",
  },
  coreRingInner: {
    position: "absolute", width: "clamp(110px, 14vw, 150px)", height: "clamp(110px, 14vw, 150px)",
    borderRadius: "50%", border: "0.5px solid rgba(0,180,216,0.15)",
    animation: "core-pulse 5s ease-in-out infinite 0.5s",
  },
  coreGlow: {
    position: "absolute", width: "clamp(80px, 10vw, 110px)", height: "clamp(80px, 10vw, 110px)",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(0,180,216,0.12) 0%, transparent 70%)",
    animation: "core-pulse 4s ease-in-out infinite 1s",
  },
  coreBox: {
    display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
    padding: "clamp(18px, 2.5vw, 30px) clamp(24px, 3vw, 40px)",
    borderRadius: 18,
    background: "linear-gradient(145deg, rgba(8,14,28,0.92) 0%, rgba(4,8,18,0.95) 100%)",
    border: "1px solid rgba(0,180,216,0.12)",
    backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
    boxShadow: "0 0 50px rgba(0,180,216,0.1), 0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(0,180,216,0.08)",
  },
  coreIcon: {
    width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center",
    marginBottom: 2,
  },
  coreDiamond: {
    width: 12, height: 12, borderRadius: 2,
    background: "linear-gradient(135deg, #00B4D8, #0284C7)",
    transform: "rotate(45deg)",
    boxShadow: "0 0 12px rgba(0,180,216,0.5)",
  },
  coreBrand: {
    fontFamily: "var(--font-mono)", fontSize: "clamp(12px, 1.4vw, 16px)",
    fontWeight: 700, color: "#E0F2FE", letterSpacing: "0.22em", textAlign: "center",
  },
  coreDivider: {
    width: "60%", height: 1, borderRadius: 1,
    background: "linear-gradient(90deg, transparent, rgba(0,180,216,0.3), transparent)",
  },
  coreSub: {
    fontFamily: "var(--font-serif)", fontSize: "clamp(10px, 1vw, 13px)",
    fontWeight: 400, fontStyle: "italic", color: "#7DD3FC",
    letterSpacing: "0.06em", textAlign: "center",
  },
  logosLayer: {
    position: "absolute", inset: 0, zIndex: 10,
  },
  tile: {
    position: "absolute", transform: "translate(-50%, -50%)",
    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6,
    padding: "clamp(10px, 1.2vw, 16px)",
    borderRadius: 14,
    border: "1px solid rgba(0,180,216,0.07)",
    background: "linear-gradient(155deg, rgba(14,22,40,0.7) 0%, rgba(8,14,28,0.8) 100%)",
    backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
    cursor: "default",
    transition: "all 0.45s cubic-bezier(0.16,1,0.3,1)",
    animation: "float-gallery ease-in-out infinite",
    willChange: "transform, opacity",
  },
  tileGlow: {
    position: "absolute", inset: -4, borderRadius: 18,
    background: "radial-gradient(circle, rgba(0,180,216,0.15) 0%, transparent 70%)",
    pointerEvents: "none", transition: "opacity 0.4s ease",
  },
  tileImg: {
    maxWidth: "75%", maxHeight: "60%", objectFit: "contain",
    transition: "filter 0.35s ease",
  },
  tileName: {
    fontFamily: "var(--font-sans)", fontSize: "clamp(9px, 0.85vw, 11px)",
    fontWeight: 600, color: "#CBD5E1", letterSpacing: "0.03em",
    textAlign: "center", whiteSpace: "nowrap",
    transition: "all 0.35s ease",
  },
};
