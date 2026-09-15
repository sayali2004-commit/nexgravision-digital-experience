import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import { IMAGES } from "../config/assets";
import SlideBackground from "../components/SlideBackground";

const data = SLIDES[9];

export default function Slide09({ isActive }) {
  const wrapRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const stepRefs = useRef([]);
  const visualRef = useRef(null);
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

    // 4 Vertical Steps
    stepRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: 0, x: -25 });
      tl.to(el, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }, 0.45 + i * 0.12);
    });

    // Right Fluid Visual
    gsap.set(visualRef.current, { opacity: 0, scale: 0.92, x: 30 });
    tl.to(visualRef.current, { opacity: 1, scale: 1, x: 0, duration: 0.9, ease: "expo.out" }, 0.4);

    // Counter
    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 1.1);
  }, [isActive]);

  return (
    <div ref={wrapRef} style={styles.wrap}>
      <SlideBackground
        orbColor="radial-gradient(circle, rgba(0,180,216,0.1) 0%, transparent 70%)"
        orbPosition={{ top: "45%", left: "70%" }}
      />

      <div style={styles.container}>
        {/* Left: Title + 4 Vertical Steps */}
        <div style={styles.leftCol}>
          <div ref={tagRef} className="section-tag">
            // Our Process
          </div>

          <h2 ref={headlineRef} style={styles.headline}>
            {data.headline}
          </h2>

          <div style={styles.stepsList}>
            {data.processSteps.map((step, i) => (
              <div
                key={i}
                ref={(el) => (stepRefs.current[i] = el)}
                style={styles.stepItem}
              >
                <div style={styles.stepCircle}>
                  {step.num}
                </div>
                <div style={styles.stepText}>
                  <div style={styles.stepTitle}>{step.title}</div>
                  <div style={styles.stepDesc}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Fluid Organic Shape Workspace Photo */}
        <div ref={visualRef} style={styles.rightCol}>
          <div style={styles.organicMaskOuter}>
            <div style={styles.organicMaskInner}>
              <img
                src={IMAGES.workspaceLaptop}
                alt="From Idea to Impact"
                style={styles.workspacePhoto}
              />
              <div style={styles.innerGlow} />
            </div>
            <div style={styles.organicBorder} />
          </div>
        </div>
      </div>

      <div ref={counterRef} className="slide-counter">
        10 / 16
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
    maxWidth: 1200,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 56,
    zIndex: 2,
    position: "relative",
  },
  leftCol: {
    flex: "0 0 54%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  headline: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(22px, 2.8vw, 34px)",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.15,
    marginBottom: 36,
    letterSpacing: "-0.01em",
  },
  stepsList: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    width: "100%",
    maxWidth: 480,
  },
  stepItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 16,
  },
  stepCircle: {
    width: 38,
    height: 38,
    borderRadius: "50%",
    border: "1.5px solid #00B4D8",
    background: "rgba(0, 180, 216, 0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-mono)",
    fontSize: 13,
    fontWeight: 700,
    color: "#00B4D8",
    flexShrink: 0,
    marginTop: 2,
    boxShadow: "0 0 14px rgba(0, 180, 216, 0.2)",
  },
  stepText: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  stepTitle: {
    fontFamily: "var(--font-sans)",
    fontSize: 16,
    fontWeight: 700,
    color: "#FFFFFF",
  },
  stepDesc: {
    fontFamily: "var(--font-sans)",
    fontSize: 13,
    color: "#94A3B8",
    lineHeight: 1.4,
  },
  rightCol: {
    flex: "0 0 44%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  organicMaskOuter: {
    position: "relative",
    width: "100%",
    maxWidth: 460,
    height: "clamp(280px, 42vh, 390px)",
    borderRadius: "38% 62% 63% 37% / 41% 44% 56% 59%",
    padding: 2,
    background: "linear-gradient(135deg, rgba(0,180,216,0.6) 0%, rgba(56,189,248,0.2) 100%)",
    boxShadow: "0 20px 60px -15px rgba(0,0,0,0.8), 0 0 40px rgba(0,180,216,0.2)",
  },
  organicMaskInner: {
    width: "100%",
    height: "100%",
    borderRadius: "38% 62% 63% 37% / 41% 44% 56% 59%",
    overflow: "hidden",
    position: "relative",
  },
  workspacePhoto: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transform: "scale(1.06)",
  },
  innerGlow: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(6,11,24,0.1) 0%, rgba(6,11,24,0.6) 100%)",
    mixBlendMode: "multiply",
  },
  organicBorder: {
    position: "absolute",
    inset: -1,
    borderRadius: "38% 62% 63% 37% / 41% 44% 56% 59%",
    border: "1px solid rgba(0, 180, 216, 0.4)",
    pointerEvents: "none",
  },
};
