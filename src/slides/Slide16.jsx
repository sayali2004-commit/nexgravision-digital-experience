import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import { BrandLogo, IMAGES } from "../config/assets";

const data = SLIDES[4];

export default function Slide16({ isActive }) {
  const wrapRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const logoRef = useRef(null);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isActive || hasAnimated.current) return;
    hasAnimated.current = true;

    const tl = gsap.timeline({ delay: 0.2 });

    gsap.set(headingRef.current, { opacity: 0, scale: 0.9, y: 30, filter: "blur(6px)" });
    tl.to(headingRef.current, { opacity: 1, scale: 1, y: 0, filter: "blur(0px)", duration: 1.0, ease: "power3.out" }, 0.2);

    gsap.set(subRef.current, { opacity: 0, y: 20 });
    tl.to(subRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.55);

    gsap.set(logoRef.current, { opacity: 0, scale: 0.85, y: 20 });
    tl.to(logoRef.current, { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.4)" }, 0.8);

    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 0.8);
  }, [isActive]);

  return (
    <div ref={wrapRef} style={styles.wrap}>
      <div style={styles.bgImageWrap}>
        <img
          src={IMAGES.mountainSunset}
          alt="Sunset mountains"
          style={styles.bgImage}
        />
        <div style={styles.bgGradientWash} />
      </div>

      <div style={styles.container}>
        <h1 ref={headingRef} style={styles.heading}>
          {data.headline}
        </h1>

        <p ref={subRef} style={styles.subheading}>
          {data.subheadline}
        </p>

        <div ref={logoRef}>
          <BrandLogo size={64} />
        </div>
      </div>

      <div ref={counterRef} className="slide-counter">
        05 / 5
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
    overflow: "hidden",
  },
  bgImageWrap: {
    position: "absolute",
    inset: 0,
    zIndex: 0,
    pointerEvents: "none",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(0.65) contrast(1.1)",
  },
  bgGradientWash: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(6,11,24,0.7) 0%, rgba(6,11,24,0.3) 50%, rgba(6,11,24,0.85) 100%)",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    zIndex: 2,
    position: "relative",
    gap: 18,
  },
  heading: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(36px, 4.5vw, 58px)",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.1,
    letterSpacing: "-0.01em",
    textShadow: "0 10px 40px rgba(0,0,0,0.7)",
  },
  subheading: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(16px, 1.8vw, 22px)",
    fontWeight: 500,
    color: "#7DD3FC",
    letterSpacing: "0.02em",
    textShadow: "0 4px 20px rgba(0,0,0,0.8)",
  },
};
