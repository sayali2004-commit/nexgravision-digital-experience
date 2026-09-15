import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import { CLIENT_LOGOS } from "../config/assets";
import SlideBackground from "../components/SlideBackground";

const data = SLIDES[1];

export default function Slide17({ isActive }) {
  const wrapRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const descRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isActive || hasAnimated.current) return;
    hasAnimated.current = true;

    const tl = gsap.timeline({ delay: 0.2 });

    gsap.set(tagRef.current, { opacity: 0, x: -15 });
    tl.to(tagRef.current, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }, 0.1);

    gsap.set(headlineRef.current, { opacity: 0, y: 25 });
    tl.to(headlineRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.25);

    gsap.set(descRef.current, { opacity: 0, y: 15 });
    tl.to(descRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.45);

    gsap.set([row1Ref.current, row2Ref.current], { opacity: 0, y: 20 });
    tl.to(row1Ref.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.5);
    tl.to(row2Ref.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.65);

    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 0.8);
  }, [isActive]);

  const duplicatedRow1 = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];
  const duplicatedRow2 = [...CLIENT_LOGOS.slice(4), ...CLIENT_LOGOS.slice(0, 4), ...CLIENT_LOGOS.slice(4), ...CLIENT_LOGOS.slice(0, 4), ...CLIENT_LOGOS.slice(4), ...CLIENT_LOGOS.slice(0, 4)];

  return (
    <div ref={wrapRef} style={styles.wrap}>
      <SlideBackground
        orbColor="radial-gradient(circle, rgba(0,180,216,0.08) 0%, transparent 70%)"
        orbPosition={{ top: "50%", left: "50%" }}
      />

      <div style={styles.container}>
        <div style={styles.header}>
          <div ref={tagRef} className="section-tag">
            // Our Clients
          </div>
          <h2 ref={headlineRef} style={styles.headline}>
            {data.headline}
          </h2>
          <p ref={descRef} style={styles.description}>
            {data.description}
          </p>
        </div>

        {/* Row 1 - scrolls left */}
        <div ref={row1Ref} style={styles.marqueeWrap}>
          <div style={styles.marqueeTrack} className="marquee-left">
            {duplicatedRow1.map((logo, i) => (
              <div key={`r1-${i}`} style={styles.logoCard}>
                <div style={styles.logoGlow} />
                <img src={logo.url} alt={logo.name} style={styles.logoImg} />
                <div style={styles.logoName}>{logo.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - scrolls right */}
        <div ref={row2Ref} style={styles.marqueeWrap}>
          <div style={styles.marqueeTrack} className="marquee-right">
            {duplicatedRow2.map((logo, i) => (
              <div key={`r2-${i}`} style={styles.logoCard}>
                <div style={styles.logoGlow} />
                <img src={logo.url} alt={logo.name} style={styles.logoImg} />
                <div style={styles.logoName}>{logo.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div ref={counterRef} className="slide-counter">
        02 / 16
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
    padding: "clamp(20px, 4vw, 48px) 0",
    overflow: "hidden",
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 2,
    position: "relative",
    gap: "clamp(16px, 2.5vw, 28px)",
  },
  header: {
    textAlign: "center",
    padding: "0 24px",
  },
  headline: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(22px, 2.8vw, 34px)",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.15,
    letterSpacing: "-0.01em",
    marginBottom: 10,
  },
  description: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(13px, 1.2vw, 15px)",
    color: "#94A3B8",
    lineHeight: 1.6,
    maxWidth: 460,
    margin: "0 auto",
  },
  marqueeWrap: {
    width: "100%",
    overflow: "hidden",
    position: "relative",
    maskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
    padding: "8px 0",
  },
  marqueeTrack: {
    display: "flex",
    gap: "clamp(12px, 2vw, 24px)",
    width: "max-content",
  },
  logoCard: {
    position: "relative",
    flexShrink: 0,
    width: "clamp(140px, 18vw, 200px)",
    height: "clamp(120px, 15vw, 160px)",
    borderRadius: 18,
    border: "1px solid rgba(0,180,216,0.15)",
    background: "linear-gradient(145deg, rgba(16,24,40,0.8) 0%, rgba(10,16,30,0.9) 100%)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: "16px 12px",
    cursor: "default",
    transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
    overflow: "hidden",
  },
  logoGlow: {
    position: "absolute",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%",
    background: "radial-gradient(circle at 50% 50%, rgba(0,180,216,0.06) 0%, transparent 50%)",
    pointerEvents: "none",
    transition: "opacity 0.4s ease",
  },
  logoImg: {
    maxWidth: "70%",
    maxHeight: "65%",
    objectFit: "contain",
    filter: "brightness(0.95) saturate(0.9)",
    transition: "all 0.4s ease",
    position: "relative",
    zIndex: 1,
  },
  logoName: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(10px, 1vw, 12px)",
    fontWeight: 500,
    color: "#64748B",
    letterSpacing: "0.04em",
    textAlign: "center",
    position: "relative",
    zIndex: 1,
    transition: "color 0.4s ease",
  },
};
