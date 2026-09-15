import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import { IMAGES } from "../config/assets";
import SlideBackground from "../components/SlideBackground";

const data = SLIDES[2];

export default function Slide02({ isActive }) {
  const wrapRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const descRef = useRef(null);
  const badgesRef = useRef([]);
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

    // Desc
    gsap.set(descRef.current, { opacity: 0, y: 20 });
    tl.to(descRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.45);

    // Badges stagger
    badgesRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: 0, y: 20, scale: 0.95 });
      tl.to(el, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.4)" }, 0.65 + i * 0.1);
    });

    // Right visual
    gsap.set(visualRef.current, { opacity: 0, x: 40, scale: 0.96 });
    tl.to(visualRef.current, { opacity: 1, x: 0, scale: 1, duration: 0.9, ease: "expo.out" }, 0.35);

    // Counter
    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 0.9);
  }, [isActive]);

  const valueIcons = [
    // Innovation Driven
    <svg key="inno" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>,
    // Client Focused
    <svg key="client" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>,
    // Quality First
    <svg key="quality" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>,
    // Long-Term Support
    <svg key="support" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>,
  ];

  return (
    <div ref={wrapRef} style={styles.wrap}>
      <SlideBackground
        orbColor="radial-gradient(circle, rgba(0,180,216,0.12) 0%, transparent 70%)"
        orbPosition={{ top: "35%", left: "65%" }}
      />

      <div style={styles.container}>
        {/* Left Column */}
        <div style={styles.leftCol}>
          <div ref={tagRef} className="section-tag">
            // About Us
          </div>

          <h2 ref={headlineRef} style={styles.headline}>
            Building Digital<br />
            Solutions with Passion
          </h2>

          <p ref={descRef} style={styles.description}>
            {data.description}
          </p>

          {/* 4 Feature Badges */}
          <div style={styles.badgesRow} className="grid-2-responsive">
            {data.values.map((v, i) => (
              <div
                key={i}
                ref={(el) => (badgesRef.current[i] = el)}
                style={styles.badgeItem}
              >
                <div style={styles.iconCircle}>
                  {valueIcons[i]}
                </div>
                <div style={styles.badgeTitle}>{v.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Curved Laptop Photo Frame */}
        <div ref={visualRef} style={styles.rightCol}>
          <div style={styles.curvedFrameOuter}>
            <div style={styles.curvedFrameInner}>
              <img
                src={IMAGES.workspaceLaptop}
                alt="Building digital solutions"
                style={styles.workspaceImg}
              />
              <div style={styles.innerGlow} />
            </div>
            <div style={styles.frameBorder} />
          </div>
        </div>
      </div>

      <div ref={counterRef} className="slide-counter">
        03 / 16
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
  },
  container: {
    width: "100%",
    maxWidth: 1200,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "clamp(24px, 4vw, 56px)",
    flexWrap: "wrap",
    zIndex: 2,
    position: "relative",
  },
  leftCol: {
    flex: "1 1 400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  headline: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(22px, 2.8vw, 34px)",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.18,
    marginBottom: 20,
    letterSpacing: "-0.01em",
  },
  description: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(13px, 1.35vw, 16px)",
    color: "#94A3B8",
    lineHeight: 1.65,
    maxWidth: 480,
    marginBottom: 36,
  },
  badgesRow: {
    display: "flex",
    gap: 20,
    width: "100%",
    maxWidth: 480,
  },
  badgeItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    flex: 1,
    gap: 10,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 14,
    background: "rgba(0, 180, 216, 0.08)",
    border: "1px solid rgba(0, 180, 216, 0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
    transition: "all 0.3s ease",
  },
  badgeTitle: {
    fontFamily: "var(--font-sans)",
    fontSize: 12,
    fontWeight: 600,
    color: "#E2E8F0",
    lineHeight: 1.3,
    whiteSpace: "pre-line",
  },
  rightCol: {
    flex: "1 1 350px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  curvedFrameOuter: {
    position: "relative",
    width: "100%",
    maxWidth: 460,
    height: "clamp(280px, 42vh, 380px)",
    borderRadius: "140px 24px 24px 140px",
    padding: 2,
    background: "linear-gradient(135deg, rgba(0, 180, 216, 0.5) 0%, rgba(56, 189, 248, 0.15) 100%)",
    boxShadow: "0 20px 50px -10px rgba(0,0,0,0.7), 0 0 35px rgba(0,180,216,0.15)",
  },
  curvedFrameInner: {
    width: "100%",
    height: "100%",
    borderRadius: "138px 22px 22px 138px",
    overflow: "hidden",
    position: "relative",
  },
  workspaceImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  innerGlow: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(6,11,24,0.1) 0%, rgba(6,11,24,0.6) 100%)",
    mixBlendMode: "multiply",
  },
  frameBorder: {
    position: "absolute",
    inset: -1,
    borderRadius: "140px 24px 24px 140px",
    border: "1px solid rgba(0, 180, 216, 0.35)",
    pointerEvents: "none",
  },
};
