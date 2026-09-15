import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import { IMAGES } from "../config/assets";
import SlideBackground from "../components/SlideBackground";

const data = SLIDES[7];

export default function Slide07({ isActive }) {
  const wrapRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const cardRefs = useRef([]);
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

    // 4 Cards
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: 0, y: 25, scale: 0.95 });
      tl.to(el, { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "back.out(1.3)" }, 0.45 + i * 0.1);
    });

    // Right Visual
    gsap.set(visualRef.current, { opacity: 0, x: 40, scale: 0.95 });
    tl.to(visualRef.current, { opacity: 1, x: 0, scale: 1, duration: 0.9, ease: "expo.out" }, 0.35);

    // Counter
    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 1.1);
  }, [isActive]);

  const reasonIcons = [
    // Expert Team
    <svg key="team" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>,
    // On-Time Delivery
    <svg key="ontime" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>,
    // Transparent Process
    <svg key="transparent" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>,
    // Affordable Pricing
    <svg key="price" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>,
  ];

  return (
    <div ref={wrapRef} style={styles.wrap}>
      <SlideBackground
        orbColor="radial-gradient(circle, rgba(0,180,216,0.1) 0%, transparent 70%)"
        orbPosition={{ top: "40%", left: "70%" }}
      />

      <div style={styles.container}>
        {/* Left Column: Title + 2x2 Grid */}
        <div style={styles.leftCol}>
          <div ref={tagRef} className="section-tag">
            // Why Choose Us
          </div>

          <h2 ref={headlineRef} style={styles.headline}>
            Your Success<br />
            Is Our Priority
          </h2>

          <div style={styles.grid2x2}>
            {data.reasons.map((reason, i) => (
              <div
                key={i}
                ref={(el) => (cardRefs.current[i] = el)}
                className="glass-card"
                style={styles.card}
              >
                <div style={styles.iconWrap}>
                  {reasonIcons[i]}
                </div>
                <div style={styles.cardText}>
                  <div style={styles.cardTitle}>{reason.title}</div>
                  <div style={styles.cardDesc}>{reason.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Organic Frame Workspace Photo */}
        <div ref={visualRef} style={styles.rightCol}>
          <div style={styles.curvedFrameOuter}>
            <div style={styles.curvedFrameInner}>
              <img
                src={IMAGES.workspaceDesk}
                alt="Your Success"
                style={styles.photoImg}
              />
              <div style={styles.innerGlow} />
            </div>
            <div style={styles.frameBorder} />
          </div>
        </div>
      </div>

      <div ref={counterRef} className="slide-counter">
        08 / 17
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
    lineHeight: 1.18,
    marginBottom: 32,
    letterSpacing: "-0.01em",
  },
  grid2x2: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 20,
    width: "100%",
  },
  card: {
    padding: "20px 18px",
    display: "flex",
    alignItems: "flex-start",
    gap: 14,
    borderRadius: 14,
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 12,
    background: "rgba(0, 180, 216, 0.1)",
    border: "1px solid rgba(0, 180, 216, 0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  cardText: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  cardTitle: {
    fontFamily: "var(--font-sans)",
    fontSize: 14,
    fontWeight: 700,
    color: "#FFFFFF",
  },
  cardDesc: {
    fontFamily: "var(--font-sans)",
    fontSize: 12,
    color: "#94A3B8",
    lineHeight: 1.4,
    whiteSpace: "pre-line",
  },
  rightCol: {
    flex: "0 0 44%",
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
  photoImg: {
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
