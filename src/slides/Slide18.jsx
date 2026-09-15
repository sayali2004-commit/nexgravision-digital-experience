import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import SlideBackground from "../components/SlideBackground";

const data = SLIDES[2];

export default function Slide18({ isActive }) {
  const wrapRef = useRef(null);
  const headlineRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const subRef = useRef(null);
  const visualRef = useRef(null);
  const brandRef = useRef(null);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isActive || hasAnimated.current) return;
    hasAnimated.current = true;

    const tl = gsap.timeline({ delay: 0.3 });

    gsap.set(line1Ref.current, { opacity: 0, y: 40, filter: "blur(8px)" });
    tl.to(line1Ref.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.0, ease: "power3.out" }, 0.2);

    gsap.set(line2Ref.current, { opacity: 0, y: 40, filter: "blur(8px)" });
    tl.to(line2Ref.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.0, ease: "power3.out" }, 0.45);

    gsap.set(subRef.current, { opacity: 0, y: 20 });
    tl.to(subRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.75);

    gsap.set(visualRef.current, { opacity: 0, scale: 0.85 });
    tl.to(visualRef.current, { opacity: 1, scale: 1, duration: 1.2, ease: "expo.out" }, 0.5);

    gsap.set(brandRef.current, { opacity: 0, y: 10 });
    tl.to(brandRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 1.0);

    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 1.1);
  }, [isActive]);

  return (
    <div ref={wrapRef} style={styles.wrap}>
      <SlideBackground
        orbColor="radial-gradient(circle, rgba(0,180,216,0.07) 0%, transparent 70%)"
        orbPosition={{ top: "45%", left: "50%" }}
      />

      {/* Ambient fine lines */}
      <div style={styles.fineLines}>
        <svg width="100%" height="100%" viewBox="0 0 1200 700" fill="none" style={styles.fineSvg}>
          <line x1="200" y1="0" x2="200" y2="700" stroke="rgba(0,180,216,0.04)" strokeWidth="0.5" />
          <line x1="1000" y1="0" x2="1000" y2="700" stroke="rgba(0,180,216,0.04)" strokeWidth="0.5" />
          <line x1="0" y1="200" x2="1200" y2="200" stroke="rgba(0,180,216,0.03)" strokeWidth="0.5" />
          <line x1="0" y1="500" x2="1200" y2="500" stroke="rgba(0,180,216,0.03)" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Digital visual element */}
      <div ref={visualRef} style={styles.visualWrap}>
        <div style={styles.orbitalRing1} />
        <div style={styles.orbitalRing2} />
        <div style={styles.orbitalRing3} />
        <div style={styles.centerDot} />
        {/* Node points on rings */}
        <div style={{ ...styles.node, top: "8%", left: "50%", transform: "translate(-50%, -50%)" }} />
        <div style={{ ...styles.node, top: "50%", right: "5%", transform: "translate(50%, -50%)" }} />
        <div style={{ ...styles.node, bottom: "12%", left: "50%", transform: "translate(-50%, 50%)" }} />
        <div style={{ ...styles.node, top: "50%", left: "8%", transform: "translate(-50%, -50%)" }} />
        <div style={{ ...styles.nodeSmall, top: "22%", right: "18%", transform: "translate(50%, -50%)" }} />
        <div style={{ ...styles.nodeSmall, bottom: "22%", left: "18%", transform: "translate(-50%, 50%)" }} />
      </div>

      {/* Headline */}
      <div style={styles.content}>
        <div ref={headlineRef} style={styles.headlineBlock}>
          <span ref={line1Ref} style={styles.line1}>One Company.</span>
          <span ref={line2Ref} style={styles.line2}>One Software.</span>
        </div>

        <p ref={subRef} style={styles.subtext}>
          {data.subheadline}
        </p>

        <div ref={brandRef} style={styles.brandTag}>
          <div style={styles.brandDot} />
          <span style={styles.brandText}>NexGravision</span>
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
    padding: "clamp(16px, 3vw, 40px) clamp(16px, 5vw, 72px)",
    overflow: "hidden",
  },
  fineLines: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    zIndex: 0,
  },
  fineSvg: {
    width: "100%",
    height: "100%",
  },
  visualWrap: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "clamp(260px, 45vw, 480px)",
    height: "clamp(260px, 45vw, 480px)",
    pointerEvents: "none",
    zIndex: 0,
  },
  orbitalRing1: {
    position: "absolute",
    inset: 0,
    borderRadius: "50%",
    border: "0.5px solid rgba(0,180,216,0.1)",
    animation: "spin-slow 25s linear infinite",
  },
  orbitalRing2: {
    position: "absolute",
    inset: "15%",
    borderRadius: "50%",
    border: "0.5px solid rgba(0,180,216,0.08)",
    transform: "rotateX(60deg)",
    animation: "spin-medium 18s linear infinite reverse",
  },
  orbitalRing3: {
    position: "absolute",
    inset: "30%",
    borderRadius: "50%",
    border: "0.5px solid rgba(0,180,216,0.06)",
    transform: "rotateY(60deg)",
    animation: "spin-slow 30s linear infinite",
  },
  centerDot: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "#00B4D8",
    boxShadow: "0 0 20px rgba(0,180,216,0.5), 0 0 40px rgba(0,180,216,0.2)",
  },
  node: {
    position: "absolute",
    width: 5,
    height: 5,
    borderRadius: "50%",
    background: "rgba(0,180,216,0.5)",
    boxShadow: "0 0 8px rgba(0,180,216,0.3)",
  },
  nodeSmall: {
    position: "absolute",
    width: 3,
    height: 3,
    borderRadius: "50%",
    background: "rgba(0,180,216,0.3)",
    boxShadow: "0 0 6px rgba(0,180,216,0.2)",
  },
  content: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "clamp(16px, 2.5vw, 28px)",
  },
  headlineBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
  },
  line1: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(28px, 5vw, 60px)",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
    display: "block",
  },
  line2: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(28px, 5vw, 60px)",
    fontWeight: 700,
    background: "linear-gradient(135deg, #7DD3FC 0%, #00B4D8 40%, #0284C7 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
    display: "block",
    filter: "drop-shadow(0 2px 20px rgba(0,180,216,0.3))",
  },
  subtext: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(13px, 1.4vw, 17px)",
    color: "#94A3B8",
    lineHeight: 1.7,
    maxWidth: 480,
    fontWeight: 400,
  },
  brandTag: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginTop: "clamp(8px, 1.5vw, 16px)",
  },
  brandDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "#00B4D8",
    boxShadow: "0 0 8px rgba(0,180,216,0.4)",
  },
  brandText: {
    fontFamily: "var(--font-mono)",
    fontSize: "clamp(10px, 1vw, 12px)",
    fontWeight: 500,
    color: "#64748B",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
  },
};
