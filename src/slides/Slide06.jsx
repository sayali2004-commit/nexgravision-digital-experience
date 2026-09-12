import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import SlideBackground from "../components/SlideBackground";

const data = SLIDES[5];

export default function Slide06({ isActive }) {
  const wrapRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const lineRef = useRef(null);
  const stepRefs = useRef([]);
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

    // Connecting line
    gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left" });
    tl.to(lineRef.current, { scaleX: 1, duration: 0.9, ease: "power2.inOut" }, 0.45);

    // Steps
    stepRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: 0, y: 30, scale: 0.9 });
      tl.to(el, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.4)" }, 0.6 + i * 0.12);
    });

    // Counter
    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 1.2);
  }, [isActive]);

  const stepIcons = [
    // 01 Discuss
    <svg key="discuss" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>,
    // 02 Plan & Design
    <svg key="plan" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>,
    // 03 Develop
    <svg key="develop" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>,
    // 04 Launch
    <svg key="launch" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>,
  ];

  return (
    <div ref={wrapRef} style={styles.wrap}>
      <SlideBackground
        orbColor="radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)"
        orbPosition={{ top: "45%", left: "50%" }}
      />

      <div style={styles.container}>
        <div style={styles.header}>
          <div ref={tagRef} className="section-tag">
            // How It Works
          </div>
          <h2 ref={headlineRef} style={styles.headline}>
            Simple Process,<br />
            Powerful Results
          </h2>
        </div>

        {/* 4-Step Horizontal Timeline */}
        <div style={styles.timelineContainer}>
          {/* Glowing connecting line */}
          <div ref={lineRef} style={styles.connectingLine} />

          <div style={styles.stepsRow}>
            {data.steps.map((step, i) => (
              <div
                key={i}
                ref={(el) => (stepRefs.current[i] = el)}
                style={styles.stepCol}
              >
                {/* Node Circle */}
                <div style={styles.nodeCircle}>
                  {stepIcons[i]}
                </div>

                {/* Step Content */}
                <div style={styles.stepContent}>
                  <div style={styles.stepNum}>{step.num}</div>
                  <div style={styles.stepTitle}>{step.title}</div>
                  <div style={styles.stepDesc}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div ref={counterRef} className="slide-counter">
        06 / 16
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
    marginBottom: 60,
    textAlign: "left",
  },
  headline: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(30px, 3.8vw, 48px)",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.15,
    letterSpacing: "-0.01em",
  },
  timelineContainer: {
    width: "100%",
    position: "relative",
  },
  connectingLine: {
    position: "absolute",
    top: 28,
    left: "10%",
    right: "10%",
    height: 2,
    background: "linear-gradient(90deg, rgba(245,158,11,0.2) 0%, rgba(245,158,11,0.7) 50%, rgba(56,189,248,0.4) 100%)",
    zIndex: 1,
  },
  stepsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 30,
    position: "relative",
    zIndex: 2,
  },
  stepCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  nodeCircle: {
    width: 58,
    height: 58,
    borderRadius: "50%",
    background: "#0A122E",
    border: "2px solid #F59E0B",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    boxShadow: "0 0 24px rgba(245, 158, 11, 0.35)",
  },
  stepContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
  },
  stepNum: {
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    fontWeight: 700,
    color: "#F59E0B",
    letterSpacing: "0.08em",
  },
  stepTitle: {
    fontFamily: "var(--font-sans)",
    fontSize: 16,
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.3,
    whiteSpace: "pre-line",
  },
  stepDesc: {
    fontFamily: "var(--font-sans)",
    fontSize: 13,
    color: "#94A3B8",
    lineHeight: 1.4,
    whiteSpace: "pre-line",
    marginTop: 2,
  },
};
