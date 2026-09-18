import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SlideBackground from "../components/SlideBackground";

const capabilities = [
  { label: "Web Applications", icon: "W", desc: "Enterprise-grade platforms" },
  { label: "Mobile Experiences", icon: "M", desc: "Cross-device native apps" },
  { label: "Digital Experiences", icon: "D", desc: "Seamless user journeys" },
  { label: "Business Systems", icon: "B", desc: "Core operational backbone" },
  { label: "Cloud Solutions", icon: "C", desc: "Scalable cloud architecture" },
];

export default function Slide19({ isActive }) {
  const wrapRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const problemRef = useRef(null);
  const qualityRef = useRef(null);
  const hubRef = useRef(null);
  const nodeRefs = useRef([]);
  const statRefs = useRef([]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isActive || hasAnimated.current) return;
    hasAnimated.current = true;

    const tl = gsap.timeline({ delay: 0.2 });

    // Tag
    gsap.set(tagRef.current, { opacity: 0, y: -10 });
    tl.to(tagRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0.1);

    // Headline
    gsap.set(headlineRef.current, { opacity: 0, y: 30, filter: "blur(6px)" });
    tl.to(headlineRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power3.out" }, 0.25);

    // Problem statement
    gsap.set(problemRef.current, { opacity: 0, y: 20 });
    tl.to(problemRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.45);

    // Quality row
    qualityRef.current?.querySelectorAll(".q-badge").forEach((el, i) => {
      gsap.set(el, { opacity: 0, y: 15, scale: 0.95 });
      tl.to(el, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.4)" }, 0.7 + i * 0.08);
    });

    // Hub
    gsap.set(hubRef.current, { opacity: 0, scale: 0.85, rotation: -5 });
    tl.to(hubRef.current, { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "back.out(1.3)" }, 0.55);

    // Nodes
    nodeRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: 0, scale: 0.85 });
      tl.to(el, { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.3)" }, 0.8 + i * 0.1);
    });

    // Stats
    statRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: 0, y: 10 });
      tl.to(el, { opacity: 1, y: 0, duration: 0.6 }, 1.0 + i * 0.1);
    });
  }, [isActive]);

  return (
    <div ref={wrapRef} style={styles.wrap}>
      <SlideBackground
        orbColor="radial-gradient(circle at 30% 40%, rgba(0,180,216,0.14) 0%, transparent 55%), radial-gradient(circle at 75% 60%, rgba(245,158,11,0.07) 0%, transparent 50%)"
        orbPosition={{ top: "35%", left: "60%" }}
      />

      {/* Subtle grid */}
      <div className="bg-grid" style={{ opacity: 0.25 }} />

      {/* Ambient glow orbs */}
      <div style={styles.orb1} />
      <div style={styles.orb2} />

      <div style={styles.container}>
        {/* LEFT: Market Reality + Quality */}
        <div style={styles.leftCol}>
          <div ref={tagRef} className="section-tag" style={{ letterSpacing: "0.16em", color: "#38BDF8" }}>
            // WHY NOW / MARKET REALITY
          </div>

          <h1 ref={headlineRef} style={styles.headline}>
            Businesses Don't Need
            <br />
            <span style={styles.highlight}>Another Tool.</span>
            <br />
            <span style={styles.accent}>They Need One System.</span>
          </h1>

          <div ref={problemRef} style={styles.problemBlock}>
            <p style={styles.problemText}>
              In today's market, companies juggle fragmented software stacks — separate CRMs, ERPs, HR platforms, analytics tools, and cloud vendors. The result? Data silos, rising costs, broken workflows, and lost productivity. The modern business doesn't need more vendors; it needs a unified digital core.
            </p>
          </div>

          <div ref={qualityRef} style={styles.qualityRow}>
            {["Enterprise Security", "Cloud Native", "Scalable Architecture", "Real-Time Analytics"].map((label, i) => (
              <div key={i} className="q-badge glass-card" style={styles.qualityBadge}>
                <div style={styles.badgeDot} />
                <span style={styles.badgeText}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Central Hub + Capabilities */}
        <div style={styles.rightCol}>
          <div ref={hubRef} style={styles.hubCore}>
            <div style={styles.hubRing} />
            <div style={styles.hubGlow} />
            <div style={styles.hubInner}>
              <div style={styles.hubIcon}>◆</div>
              <div style={styles.hubBrand}>NEXGRAVISION</div>
              <div style={styles.hubTagline}>Digital Core</div>
            </div>
          </div>

          {/* Orbiting capability nodes */}
          <div style={styles.orbitArea}>
            {capabilities.map((cap, i) => {
              const angle = (i / capabilities.length) * 360 - 90;
              const radius = 210;
              const rad = (angle * Math.PI) / 180;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;
              return (
                <div
                  key={i}
                  ref={(el) => (nodeRefs.current[i] = el)}
                  className="glass-card"
                  style={{
                    ...styles.capNode,
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                >
                  <div style={styles.capBadge}>{cap.icon}</div>
                  <div style={styles.capTitle}>{cap.label}</div>
                  <div style={styles.capDesc}>{cap.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* BOTTOM: Proof / Stats */}
      <div style={styles.bottomStrip}>
        <div ref={(el) => (statRefs.current[0] = el)} style={styles.statItem}>
          <div style={styles.statValue}>5</div>
          <div style={styles.statLabel}>Core Systems</div>
        </div>
        <div style={styles.statDivider} />
        <div ref={(el) => (statRefs.current[1] = el)} style={styles.statItem}>
          <div style={styles.statValue}>1</div>
          <div style={styles.statLabel}>Unified Platform</div>
        </div>
        <div style={styles.statDivider} />
        <div ref={(el) => (statRefs.current[2] = el)} style={styles.statItem}>
          <div style={styles.statValue}>100%</div>
          <div style={styles.statLabel}>Integrated Stack</div>
        </div>
      </div>

      {/* Counter */}
      <div style={styles.counter}>
        05 / 16
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
    padding: "clamp(28px, 5vw, 72px) clamp(16px, 5vw, 72px)",
    overflow: "hidden",
  },
  orb1: {
    position: "absolute",
    width: 600,
    height: 600,
    borderRadius: "50%",
    top: "-10%",
    right: "-8%",
    background: "radial-gradient(circle, rgba(0,180,216,0.10) 0%, transparent 70%)",
    filter: "blur(100px)",
    pointerEvents: "none",
    zIndex: 0,
  },
  orb2: {
    position: "absolute",
    width: 400,
    height: 400,
    borderRadius: "50%",
    bottom: "-5%",
    left: "5%",
    background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)",
    filter: "blur(80px)",
    pointerEvents: "none",
    zIndex: 0,
  },
  container: {
    width: "100%",
    maxWidth: 1280,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 60,
    zIndex: 2,
    position: "relative",
    flexWrap: "wrap",
  },
  leftCol: {
    flex: "1 1 480px",
    maxWidth: 520,
    display: "flex",
    flexDirection: "column",
    gap: 28,
  },
  headline: {
    fontFamily: "var(--font-display)",
    fontSize: "clamp(34px, 5.5vw, 64px)",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.05,
    letterSpacing: "-0.035em",
    margin: 0,
  },
  highlight: {
    color: "#FBBF24",
  },
  accent: {
    color: "#00B4D8",
  },
  problemBlock: {
    borderLeft: "2px solid rgba(245,158,11,0.4)",
    paddingLeft: 20,
  },
  problemText: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(14px, 1.2vw, 16px)",
    color: "#CBD5E1",
    lineHeight: 1.75,
  },
  qualityRow: {
    display: "flex",
    gap: 14,
    flexWrap: "wrap",
  },
  qualityBadge: {
    padding: "10px 18px",
    borderRadius: 9999,
    background: "rgba(16, 24, 40, 0.55)",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  badgeDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #F59E0B, #FBBF24)",
    boxShadow: "0 0 6px rgba(245,158,11,0.4)",
    flexShrink: 0,
  },
  badgeText: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: 600,
    color: "#E2E8F0",
    letterSpacing: "0.03em",
  },
  rightCol: {
    flex: "1 1 520px",
    position: "relative",
    height: 520,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  hubCore: {
    position: "relative",
    width: 200,
    height: 200,
    borderRadius: "50%",
    background: "radial-gradient(circle at 40% 30%, rgba(255,255,255,0.06) 0%, rgba(0,180,216,0.15) 30%, rgba(0,0,0,0.5) 100%)",
    border: "1.5px solid rgba(0,180,216,0.35)",
    boxShadow: "0 0 100px rgba(0,180,216,0.3), 0 0 0 4px rgba(0,180,216,0.06), inset 0 0 50px rgba(245,158,11,0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  hubRing: {
    position: "absolute",
    inset: -22,
    borderRadius: "50%",
    border: "1.5px dashed rgba(245,158,11,0.2)",
    animation: "spin-slow 25s linear infinite",
  },
  hubGlow: {
    position: "absolute",
    inset: -10,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%)",
    filter: "blur(20px)",
  },
  hubInner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
  },
  hubIcon: {
    fontFamily: "var(--font-display)",
    fontSize: 20,
    color: "#FBBF24",
    lineHeight: 1,
  },
  hubBrand: {
    fontFamily: "var(--font-display)",
    fontSize: 16,
    fontWeight: 700,
    color: "#FFFFFF",
    letterSpacing: "0.15em",
  },
  hubTagline: {
    fontFamily: "var(--font-mono)",
    fontSize: 9,
    color: "#38BDF8",
    letterSpacing: "0.2em",
  },
  orbitArea: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
  },
  capNode: {
    position: "absolute",
    width: 140,
    height: 88,
    background: "rgba(16, 24, 40, 0.65)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 14,
    padding: "14px 12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    gap: 6,
    boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
    pointerEvents: "auto",
    transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
  },
  capBadge: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    background: "linear-gradient(135deg, rgba(0,180,216,0.25), rgba(245,158,11,0.15))",
    border: "1px solid rgba(0,180,216,0.35)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-display)",
    fontSize: 14,
    fontWeight: 700,
    color: "#FBBF24",
  },
  capTitle: {
    fontFamily: "var(--font-sans)",
    fontSize: 12,
    fontWeight: 700,
    color: "#FFFFFF",
  },
  capDesc: {
    fontFamily: "var(--font-sans)",
    fontSize: 9,
    color: "#94A3B8",
    lineHeight: 1.3,
  },
  bottomStrip: {
    position: "absolute",
    bottom: 36,
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    alignItems: "center",
    gap: 40,
    zIndex: 10,
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
  },
  statValue: {
    fontFamily: "var(--font-display)",
    fontSize: 24,
    fontWeight: 700,
    background: "linear-gradient(135deg, #FBBF24 0%, #F59E0B 50%, #00B4D8 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  statLabel: {
    fontFamily: "var(--font-mono)",
    fontSize: 9,
    color: "#64748B",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
  },
  statDivider: {
    width: 1,
    height: 28,
    background: "rgba(255,255,255,0.08)",
  },
  counter: {
    position: "absolute",
    bottom: 36,
    left: 56,
    fontFamily: "var(--font-mono)",
    fontSize: 13,
    color: "#64748B",
    letterSpacing: "0.1em",
  },
};
