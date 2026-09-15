import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import SlideBackground from "../components/SlideBackground";

const data = SLIDES[2];

const SOLUTIONS = [
  { name: "Web Applications", icon: "◈" },
  { name: "Mobile Experiences", icon: "◇" },
  { name: "Cloud Solutions", icon: "△" },
  { name: "AI & Automation", icon: "○" },
  { name: "Business Systems", icon: "□" },
  { name: "Digital Experiences", icon: "◎" },
];

const ANGLES = [0, 60, 120, 180, 240, 300];

export default function Slide18({ isActive }) {
  const wrapRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const coreRef = useRef(null);
  const svgRef = useRef(null);
  const nodesRef = useRef(null);
  const subRef = useRef(null);
  const brandRef = useRef(null);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);
  const [hovered, setHovered] = useState(-1);

  const getNodePos = (angleDeg, containerSize) => {
    const rad = (angleDeg - 90) * (Math.PI / 180);
    const r = containerSize * 0.38;
    return { x: Math.cos(rad) * r, y: Math.sin(rad) * r };
  };

  const buildEntrance = useCallback(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    gsap.set(tagRef.current, { opacity: 0, x: -20 });
    tl.to(tagRef.current, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }, 0);

    gsap.set(headlineRef.current, { opacity: 0, y: 30, filter: "blur(8px)" });
    tl.to(headlineRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.0, ease: "power3.out" }, 0.15);

    gsap.set(coreRef.current, { opacity: 0, scale: 0.4 });
    tl.to(coreRef.current, { opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.2)" }, 0.4);

    const paths = svgRef.current?.querySelectorAll(".e-path");
    if (paths) {
      paths.forEach((p, i) => {
        const len = p.getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len, opacity: 0 });
        tl.to(p, { strokeDashoffset: 0, opacity: 1, duration: 0.8, ease: "power2.inOut" }, 0.8 + i * 0.08);
      });
    }

    const nds = nodesRef.current?.querySelectorAll(".e-node");
    if (nds) {
      nds.forEach((n, i) => {
        gsap.set(n, { opacity: 0, scale: 0.5 });
        tl.to(n, { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.4)" }, 1.0 + i * 0.1);
      });
    }

    gsap.set(subRef.current, { opacity: 0, y: 20 });
    tl.to(subRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 1.7);

    gsap.set(brandRef.current, { opacity: 0 });
    tl.to(brandRef.current, { opacity: 1, duration: 0.5 }, 2.0);

    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.4 }, 2.1);
  }, []);

  useEffect(() => {
    if (!isActive || hasAnimated.current) return;
    hasAnimated.current = true;
    buildEntrance();
  }, [isActive, buildEntrance]);

  useEffect(() => {
    if (!isActive || !hasAnimated.current) return;
    hasAnimated.current = false;
    const t = setTimeout(() => { hasAnimated.current = true; buildEntrance(); }, 60);
    return () => clearTimeout(t);
  }, [isActive, buildEntrance]);

  const svgSize = 600;

  return (
    <div ref={wrapRef} style={S.wrap}>
      <SlideBackground
        orbColor="radial-gradient(circle, rgba(0,180,216,0.06) 0%, transparent 70%)"
        orbPosition={{ top: "50%", left: "50%" }}
      />

      <div style={S.layout}>
        {/* Top section */}
        <div style={S.top}>
          <div ref={tagRef} className="section-tag">// One Core. Every Possibility.</div>
          <div ref={headlineRef} style={S.headlineWrap}>
            <span style={S.line1}>One Company.</span>
            <span style={S.line2}>One Software.</span>
          </div>
        </div>

        {/* Ecosystem — the main visual */}
        <div style={S.ecosystem}>
          <div style={S.ecoInner}>
            {/* SVG connection lines + particles */}
            <svg ref={svgRef} style={S.svg} viewBox={`-${svgSize/2} -${svgSize/2} ${svgSize} ${svgSize}`}>
              <defs>
                <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00B4D8" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#00B4D8" stopOpacity="0.08" />
                </linearGradient>
                <radialGradient id="coreRadial">
                  <stop offset="0%" stopColor="#00B4D8" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#00B4D8" stopOpacity="0" />
                </radialGradient>
                <filter id="glow1">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>

              {/* Ambient rings */}
              {[0.42, 0.36, 0.30].map((r, i) => (
                <circle key={`ring${i}`} cx={0} cy={0} r={svgSize * r} fill="none"
                  stroke="rgba(0,180,216,0.06)" strokeWidth="0.5"
                  strokeDasharray={i === 0 ? "none" : `${4 + i * 2} ${6 + i * 3}`}
                />
              ))}

              {/* Core glow */}
              <circle cx={0} cy={0} r={svgSize * 0.1} fill="url(#coreRadial)" />

              {/* Connection lines */}
              {ANGLES.map((angle, i) => {
                const pos = getNodePos(angle, svgSize);
                const isH = hovered === i;
                return (
                  <line key={`l${i}`} className="e-path"
                    x1={0} y1={0} x2={pos.x} y2={pos.y}
                    stroke={isH ? "rgba(0,180,216,0.6)" : "url(#lg1)"}
                    strokeWidth={isH ? 1.5 : 0.8}
                    filter={isH ? "url(#glow1)" : undefined}
                    style={{ transition: "all 0.35s ease" }}
                  />
                );
              })}

              {/* Traveling particles */}
              {ANGLES.map((angle, i) => {
                const pos = getNodePos(angle, svgSize);
                return (
                  <circle key={`p${i}`} r="2.5" fill="#00B4D8" opacity="0">
                    <animateMotion dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite"
                      path={`M0,0 L${pos.x},${pos.y}`} />
                    <animate attributeName="opacity" values="0;0.5;0"
                      dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite" />
                    <animate attributeName="r" values="1.5;3;1.5"
                      dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite" />
                  </circle>
                );
              })}
            </svg>

            {/* Core center */}
            <div ref={coreRef} style={S.core}>
              <div style={S.coreRingOuter} />
              <div style={S.coreRingMid} />
              <div style={S.coreRingInner} />
              <div style={S.coreBox}>
                <div style={S.coreIcon}>◆</div>
                <div style={S.coreTitle}>NEXGRAVISION</div>
                <div style={S.coreDivider} />
                <div style={S.coreSub}>Digital Core</div>
              </div>
            </div>

            {/* Solution nodes */}
            <div ref={nodesRef} style={S.nodesLayer}>
              {ANGLES.map((angle, i) => {
                const pos = getNodePos(angle, 100);
                const isH = hovered === i;
                const sol = SOLUTIONS[i];
                return (
                  <div key={i} className="e-node"
                    style={{
                      ...S.node,
                      left: `calc(50% + ${pos.x}%)`,
                      top: `calc(50% + ${pos.y}%)`,
                      transform: `translate(-50%, -50%) scale(${isH ? 1.12 : 1})`,
                    }}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(-1)}
                  >
                    <div style={{
                      ...S.nodeGlow,
                      opacity: isH ? 0.6 : 0.2,
                      boxShadow: isH
                        ? "0 0 30px rgba(0,180,216,0.4), 0 0 60px rgba(0,180,216,0.15)"
                        : "0 0 15px rgba(0,180,216,0.1)",
                    }} />
                    <div style={{
                      ...S.nodeDot,
                      background: isH
                        ? "linear-gradient(135deg, #7DD3FC, #00B4D8)"
                        : "linear-gradient(135deg, rgba(0,180,216,0.6), rgba(0,180,216,0.3))",
                      boxShadow: isH
                        ? "0 0 14px rgba(0,180,216,0.7)"
                        : "0 0 8px rgba(0,180,216,0.3)",
                    }}>
                      <span style={S.nodeIcon}>{sol.icon}</span>
                    </div>
                    <div style={{
                      ...S.nodeCard,
                      borderColor: isH ? "rgba(0,180,216,0.3)" : "rgba(0,180,216,0.08)",
                      background: isH
                        ? "linear-gradient(145deg, rgba(0,180,216,0.12) 0%, rgba(10,16,30,0.85) 100%)"
                        : "linear-gradient(145deg, rgba(16,24,40,0.6) 0%, rgba(10,16,30,0.75) 100%)",
                      boxShadow: isH
                        ? "0 8px 32px rgba(0,180,216,0.15), inset 0 1px 0 rgba(0,180,216,0.1)"
                        : "0 4px 16px rgba(0,0,0,0.2)",
                    }}>
                      <span style={{
                        ...S.nodeLabel,
                        color: isH ? "#E0F2FE" : "#CBD5E1",
                      }}>{sol.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={S.bottom}>
          <p ref={subRef} style={S.subtext}>{data.subheadline}</p>
          <div ref={brandRef} style={S.brandTag}>
            <div style={S.brandDot} />
            <span style={S.brandText}>NexGravision</span>
          </div>
        </div>
      </div>

      <div ref={counterRef} className="slide-counter">03 / 5</div>
    </div>
  );
}

const S = {
  wrap: {
    position: "absolute", inset: 0, width: "100%", height: "100%",
    display: "flex", alignItems: "center", justifyContent: "center",
    padding: "clamp(12px, 2vw, 32px) clamp(14px, 3.5vw, 56px)",
    overflow: "hidden",
  },
  layout: {
    width: "100%", maxWidth: 1100, height: "100%",
    display: "flex", flexDirection: "column", alignItems: "center",
    justifyContent: "space-between", zIndex: 2, position: "relative",
  },
  top: { textAlign: "center", flexShrink: 0 },
  headlineWrap: {
    display: "flex", flexDirection: "column", alignItems: "center", gap: 0, marginTop: 6,
  },
  line1: {
    fontFamily: "var(--font-serif)", fontSize: "clamp(22px, 3.2vw, 40px)",
    fontWeight: 700, color: "#FFFFFF", lineHeight: 1.1, letterSpacing: "-0.02em", display: "block",
  },
  line2: {
    fontFamily: "var(--font-serif)", fontSize: "clamp(22px, 3.2vw, 40px)",
    fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", display: "block",
    background: "linear-gradient(135deg, #7DD3FC 0%, #00B4D8 40%, #0284C7 100%)",
    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
    filter: "drop-shadow(0 2px 12px rgba(0,180,216,0.2))",
  },
  ecosystem: {
    flex: 1, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 0,
  },
  ecoInner: {
    position: "relative", width: "100%", maxWidth: 650, aspectRatio: "1 / 1",
  },
  svg: {
    position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0,
  },
  core: {
    position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 5,
    display: "flex", alignItems: "center", justifyContent: "center",
  },
  coreRingOuter: {
    position: "absolute", width: "clamp(100px, 15vw, 150px)", height: "clamp(100px, 15vw, 150px)",
    borderRadius: "50%", border: "1px solid rgba(0,180,216,0.12)",
    animation: "core-pulse 5s ease-in-out infinite",
  },
  coreRingMid: {
    position: "absolute", width: "clamp(80px, 12vw, 120px)", height: "clamp(80px, 12vw, 120px)",
    borderRadius: "50%", border: "0.5px solid rgba(0,180,216,0.18)",
    animation: "core-pulse 5s ease-in-out infinite 0.8s",
  },
  coreRingInner: {
    position: "absolute", width: "clamp(60px, 9vw, 90px)", height: "clamp(60px, 9vw, 90px)",
    borderRadius: "50%", border: "0.5px solid rgba(0,180,216,0.22)",
    animation: "core-pulse 4s ease-in-out infinite 1.6s",
  },
  coreBox: {
    display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
    padding: "clamp(14px, 2vw, 24px) clamp(20px, 2.5vw, 32px)",
    borderRadius: 16,
    background: "linear-gradient(145deg, rgba(8,14,28,0.95) 0%, rgba(4,8,18,0.98) 100%)",
    border: "1px solid rgba(0,180,216,0.15)",
    backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
    boxShadow: "0 0 50px rgba(0,180,216,0.1), 0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(0,180,216,0.08)",
  },
  coreIcon: {
    fontSize: "clamp(14px, 1.8vw, 20px)", color: "#00B4D8",
    textShadow: "0 0 12px rgba(0,180,216,0.6)", marginBottom: 2,
  },
  coreTitle: {
    fontFamily: "var(--font-mono)", fontSize: "clamp(10px, 1.2vw, 13px)",
    fontWeight: 700, color: "#E0F2FE", letterSpacing: "0.2em", textAlign: "center",
  },
  coreDivider: {
    width: "70%", height: 1, borderRadius: 1,
    background: "linear-gradient(90deg, transparent, rgba(0,180,216,0.3), transparent)",
    margin: "2px 0",
  },
  coreSub: {
    fontFamily: "var(--font-serif)", fontSize: "clamp(9px, 0.9vw, 11px)",
    fontWeight: 400, fontStyle: "italic", color: "#7DD3FC",
    letterSpacing: "0.06em", textAlign: "center",
  },
  nodesLayer: {
    position: "absolute", inset: 0, zIndex: 10,
  },
  node: {
    position: "absolute", display: "flex", flexDirection: "column", alignItems: "center",
    gap: 6, cursor: "default", transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
    animation: "float-node ease-in-out infinite",
  },
  nodeGlow: {
    position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
    width: 60, height: 60, borderRadius: "50%",
    background: "radial-gradient(circle, rgba(0,180,216,0.25) 0%, transparent 70%)",
    pointerEvents: "none", transition: "all 0.4s ease",
  },
  nodeDot: {
    width: "clamp(32px, 4vw, 44px)", height: "clamp(32px, 4vw, 44px)",
    borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
    transition: "all 0.35s ease", zIndex: 1,
  },
  nodeIcon: {
    fontSize: "clamp(12px, 1.4vw, 16px)", color: "#E0F2FE", opacity: 0.9,
  },
  nodeCard: {
    padding: "6px 14px", borderRadius: 10,
    border: "1px solid rgba(0,180,216,0.08)",
    backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
    transition: "all 0.35s ease",
  },
  nodeLabel: {
    fontFamily: "var(--font-sans)", fontSize: "clamp(9px, 0.9vw, 12px)",
    fontWeight: 600, letterSpacing: "0.02em", textAlign: "center",
    whiteSpace: "nowrap", transition: "color 0.3s ease",
  },
  bottom: {
    flexShrink: 0, textAlign: "center", display: "flex", flexDirection: "column",
    alignItems: "center", gap: 10,
  },
  subtext: {
    fontFamily: "var(--font-sans)", fontSize: "clamp(12px, 1.1vw, 14px)",
    color: "#94A3B8", lineHeight: 1.7, maxWidth: 460, fontWeight: 400,
  },
  brandTag: { display: "flex", alignItems: "center", gap: 8 },
  brandDot: {
    width: 5, height: 5, borderRadius: "50%", background: "#00B4D8",
    boxShadow: "0 0 6px rgba(0,180,216,0.4)",
  },
  brandText: {
    fontFamily: "var(--font-mono)", fontSize: "clamp(9px, 0.85vw, 11px)",
    fontWeight: 500, color: "#64748B", letterSpacing: "0.12em", textTransform: "uppercase",
  },
};
