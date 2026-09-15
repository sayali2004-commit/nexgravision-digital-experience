import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import { IMAGES } from "../config/assets";
import SlideBackground from "../components/SlideBackground";

const data = SLIDES[7];

export default function Slide08({ isActive }) {
  const wrapRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
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

    // 3 Cards
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: 0, y: 35, scale: 0.95 });
      tl.to(el, { opacity: 1, y: 0, scale: 1, duration: 0.65, ease: "expo.out" }, 0.45 + i * 0.12);
    });

    // Counter
    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 1.1);
  }, [isActive]);

  const clientAvatars = [
    IMAGES.priyaSharma,
    IMAGES.rahulDeshmukh,
    IMAGES.snehaKulkarni,
  ];

  return (
    <div ref={wrapRef} style={styles.wrap}>
      <SlideBackground
        orbColor="radial-gradient(circle, rgba(0,180,216,0.1) 0%, transparent 70%)"
        orbPosition={{ top: "45%", left: "50%" }}
      />

      <div style={styles.container}>
        <div style={styles.header}>
          <div ref={tagRef} className="section-tag">
            // Testimonials
          </div>
          <h2 ref={headlineRef} style={styles.headline}>
            {data.headline}
          </h2>
        </div>

        {/* 3 Testimonial Cards */}
        <div style={styles.cardsRow}>
          {data.testimonials.map((t, i) => (
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
              {/* Golden Quote Mark */}
              <div style={styles.quoteMark}>“</div>

              <p style={styles.quoteText}>{t.quote}</p>

              {/* Author Row */}
              <div style={styles.authorRow}>
                <div style={styles.avatarWrap}>
                  <img
                    src={clientAvatars[i]}
                    alt={t.name}
                    style={styles.avatarImg}
                  />
                </div>
                <div style={styles.authorInfo}>
                  <div style={styles.authorName}>{t.name}</div>
                  <div style={styles.authorRole}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div ref={counterRef} className="slide-counter">
        09 / 17
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
    marginBottom: 48,
    textAlign: "left",
  },
  headline: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(22px, 2.8vw, 34px)",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.15,
    letterSpacing: "-0.01em",
  },
  cardsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 28,
    width: "100%",
  },
  card: {
    padding: "32px 28px 28px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: 240,
    position: "relative",
    borderRadius: 18,
  },
  quoteMark: {
    fontFamily: "var(--font-serif)",
    fontSize: 44,
    lineHeight: 1,
    color: "#00B4D8",
    marginBottom: 14,
    opacity: 0.9,
  },
  quoteText: {
    fontFamily: "var(--font-sans)",
    fontSize: 14,
    color: "#CBD5E1",
    lineHeight: 1.65,
    marginBottom: 28,
  },
  authorRow: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    marginTop: "auto",
  },
  avatarWrap: {
    width: 44,
    height: 44,
    borderRadius: "50%",
    overflow: "hidden",
    border: "2px solid rgba(0, 180, 216, 0.5)",
    boxShadow: "0 0 14px rgba(0, 180, 216, 0.25)",
    flexShrink: 0,
  },
  avatarImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  authorInfo: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  authorName: {
    fontFamily: "var(--font-sans)",
    fontSize: 14,
    fontWeight: 700,
    color: "#FFFFFF",
  },
  authorRole: {
    fontFamily: "var(--font-sans)",
    fontSize: 12,
    color: "#94A3B8",
  },
};
