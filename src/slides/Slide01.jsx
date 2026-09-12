import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import { BrandLogo, IMAGES } from "../config/assets";
import SlideBackground from "../components/SlideBackground";

const data = SLIDES[0];

export default function Slide01({ isActive, onNavigate }) {
  const wrapRef = useRef(null);
  const logoRef = useRef(null);
  const headlineRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const visualRef = useRef(null);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isActive || hasAnimated.current) return;
    hasAnimated.current = true;

    const tl = gsap.timeline({ delay: 0.2 });

    // Logo reveal
    gsap.set(logoRef.current, { opacity: 0, y: -20 });
    tl.to(logoRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.1);

    // Headline reveal
    gsap.set(headlineRef.current, { opacity: 0, y: 30, filter: "blur(6px)" });
    tl.to(headlineRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.0, ease: "power3.out" }, 0.3);

    // Description
    gsap.set(descRef.current, { opacity: 0, y: 20 });
    tl.to(descRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.6);

    // CTA
    gsap.set(ctaRef.current, { opacity: 0, scale: 0.9 });
    tl.to(ctaRef.current, { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.5)" }, 0.8);

    // Right visual frame
    gsap.set(visualRef.current, { opacity: 0, x: 50, scale: 0.95 });
    tl.to(visualRef.current, { opacity: 1, x: 0, scale: 1, duration: 1.1, ease: "expo.out" }, 0.4);

    // Counter
    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 1.0);
  }, [isActive]);

  return (
    <div ref={wrapRef} style={styles.wrap}>
      <SlideBackground
        orbColor="radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)"
        orbPosition={{ top: "45%", left: "75%" }}
      />

      <div style={styles.container}>
        {/* Top-left Brand Logo */}
        <div ref={logoRef} style={styles.logoRow}>
          <BrandLogo size={42} showTagline={true} />
        </div>

        <div style={styles.bodyRow}>
          {/* Left Column: Text & CTA */}
          <div style={styles.leftCol}>
            <h1 ref={headlineRef} style={styles.headline}>
              Innovative<br />
              <span style={styles.headlineHighlight}>Software Solutions</span><br />
              for a Smarter Tomorrow
            </h1>

            <p ref={descRef} style={styles.description}>
              {data.description}
            </p>

            <div ref={ctaRef} style={styles.ctaWrap}>
              <button
                className="btn-gold"
                onClick={() => onNavigate?.(4)}
              >
                {data.cta} →
              </button>
            </div>
          </div>

          {/* Right Column: Organic Cityscape Visual */}
          <div ref={visualRef} style={styles.rightCol}>
            <div style={styles.imageMaskOuter}>
              <div style={styles.imageMaskInner}>
                <img
                  src={IMAGES.heroCity}
                  alt="NexGravision Smart Solutions"
                  style={styles.heroImage}
                />
                <div style={styles.imageOverlayGradient} />
              </div>
              <div style={styles.glowBorder} />
            </div>
          </div>
        </div>
      </div>

      <div ref={counterRef} className="slide-counter">
        01 / 16
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
    maxWidth: 1240,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    zIndex: 2,
    position: "relative",
  },
  logoRow: {
    marginBottom: "auto",
    paddingTop: 10,
  },
  bodyRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 56,
    marginTop: "auto",
    marginBottom: "auto",
  },
  leftCol: {
    flex: "0 0 54%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  headline: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(34px, 4.4vw, 56px)",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.15,
    letterSpacing: "-0.01em",
    marginBottom: 22,
  },
  headlineHighlight: {
    background: "linear-gradient(90deg, #FFFFFF 0%, #FDE68A 60%, #F59E0B 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  description: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(14px, 1.4vw, 16px)",
    color: "#94A3B8",
    lineHeight: 1.65,
    maxWidth: 500,
    marginBottom: 32,
    fontWeight: 400,
  },
  ctaWrap: {
    display: "flex",
    alignItems: "center",
  },
  rightCol: {
    flex: "0 0 46%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
  },
  imageMaskOuter: {
    position: "relative",
    width: "100%",
    maxWidth: 520,
    height: "clamp(320px, 46vh, 440px)",
    borderRadius: "160px 24px 24px 160px",
    padding: 2,
    background: "linear-gradient(135deg, rgba(245,158,11,0.6) 0%, rgba(56,189,248,0.2) 60%, transparent 100%)",
    boxShadow: "0 20px 60px -15px rgba(0,0,0,0.8), 0 0 40px rgba(245,158,11,0.18)",
  },
  imageMaskInner: {
    width: "100%",
    height: "100%",
    borderRadius: "158px 22px 22px 158px",
    overflow: "hidden",
    position: "relative",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transform: "scale(1.04)",
  },
  imageOverlayGradient: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(6,11,24,0.15) 0%, rgba(6,11,24,0.65) 100%)",
    mixBlendMode: "multiply",
  },
  glowBorder: {
    position: "absolute",
    inset: -1,
    borderRadius: "160px 24px 24px 160px",
    border: "1px solid rgba(245,158,11,0.4)",
    pointerEvents: "none",
  },
};
