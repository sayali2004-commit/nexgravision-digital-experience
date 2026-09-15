import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import SlideBackground from "../components/SlideBackground";

const data = SLIDES[3];

export default function Slide03({ isActive }) {
  const wrapRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const descRef = useRef(null);
  const cardRefs = useRef([]);
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
    tl.to(descRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.4);

    // Cards
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: 0, y: 30, scale: 0.95 });
      tl.to(el, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.3)" }, 0.5 + i * 0.08);
    });

    // Counter
    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 1.1);
  }, [isActive]);

  const serviceIcons = [
    // Web
    <svg key="web" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>,
    // Mobile
    <svg key="mobile" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>,
    // Cloud
    <svg key="cloud" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>,
    // UI/UX
    <svg key="uiux" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r=".5" fill="#00B4D8" />
      <circle cx="17.5" cy="10.5" r=".5" fill="#00B4D8" />
      <circle cx="8.5" cy="7.5" r=".5" fill="#00B4D8" />
      <circle cx="6.5" cy="12.5" r=".5" fill="#00B4D8" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>,
    // API
    <svg key="api" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>,
    // Support
    <svg key="support" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>,
  ];

  return (
    <div ref={wrapRef} style={styles.wrap}>
      <SlideBackground
        orbColor="radial-gradient(circle, rgba(0,180,216,0.1) 0%, transparent 70%)"
        orbPosition={{ top: "50%", left: "50%" }}
      />

      <div style={styles.container}>
        <div style={styles.header}>
          <div ref={tagRef} className="section-tag">
            // Our Services
          </div>
          <h2 ref={headlineRef} style={styles.headline}>
            {data.headline}
          </h2>
          <p ref={descRef} style={styles.description}>
            {data.description}
          </p>
        </div>

        {/* 3x2 Grid */}
        <div style={styles.grid}>
          {data.services.map((svc, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="glass-card"
              style={styles.card}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, { y: -5, duration: 0.3, ease: "power2.out" });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, { y: 0, duration: 0.3, ease: "power2.out" });
              }}
            >
              <div style={styles.iconWrap}>
                {serviceIcons[i]}
              </div>
              <div style={styles.cardTitle}>{svc.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div ref={counterRef} className="slide-counter">
        04 / 17
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
    marginBottom: 36,
    textAlign: "left",
  },
  headline: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(22px, 2.8vw, 34px)",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.15,
    marginBottom: 14,
    letterSpacing: "-0.01em",
  },
  description: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(13px, 1.35vw, 16px)",
    color: "#94A3B8",
    maxWidth: 620,
    lineHeight: 1.6,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24,
    width: "100%",
  },
  card: {
    padding: "32px 24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    minHeight: 150,
    gap: 16,
    cursor: "default",
  },
  iconWrap: {
    width: 52,
    height: 52,
    borderRadius: 14,
    background: "rgba(0, 180, 216, 0.08)",
    border: "1px solid rgba(0, 180, 216, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    fontFamily: "var(--font-sans)",
    fontSize: 14,
    fontWeight: 600,
    color: "#F8FAFC",
    lineHeight: 1.4,
    whiteSpace: "pre-line",
  },
};
