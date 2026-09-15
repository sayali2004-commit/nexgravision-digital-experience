import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import { CLIENT_LOGOS } from "../config/assets";
import SlideBackground from "../components/SlideBackground";

const data = SLIDES[15];

export default function Slide17({ isActive }) {
  const wrapRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const descRef = useRef(null);
  const carouselRef = useRef(null);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

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

    gsap.set(carouselRef.current, { opacity: 0, scale: 0.95 });
    tl.to(carouselRef.current, { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }, 0.5);

    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 0.8);
  }, [isActive]);

  useEffect(() => {
    if (!isActive) return;
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CLIENT_LOGOS.length);
    }, 2200);
    return () => clearInterval(intervalRef.current);
  }, [isActive]);

  return (
    <div ref={wrapRef} style={styles.wrap}>
      <SlideBackground
        orbColor="radial-gradient(circle, rgba(0,180,216,0.1) 0%, transparent 70%)"
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

        <div ref={carouselRef} style={styles.carouselWrap}>
          {/* Left column - vertical scroll */}
          <div style={styles.logoColumn}>
            <div style={styles.logoTrack}>
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => {
                const realIndex = i % CLIENT_LOGOS.length;
                const isActiveLogo = realIndex === activeIndex;
                return (
                  <div
                    key={i}
                    style={{
                      ...styles.logoItem,
                      opacity: isActiveLogo ? 1 : 0.25,
                      transform: isActiveLogo ? "scale(1.1)" : "scale(0.85)",
                      filter: isActiveLogo ? "drop-shadow(0 0 20px rgba(0,180,216,0.4))" : "none",
                      transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
                    }}
                  >
                    <div style={{
                      ...styles.logoFrame,
                      borderColor: isActiveLogo ? "rgba(0,180,216,0.6)" : "rgba(0,180,216,0.12)",
                      boxShadow: isActiveLogo
                        ? "0 0 30px rgba(0,180,216,0.25), inset 0 0 20px rgba(0,180,216,0.1)"
                        : "none",
                    }}>
                      <img
                        src={logo.url}
                        alt={logo.name}
                        style={styles.logoImg}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Center - Active logo highlight */}
          <div style={styles.activeArea}>
            <div style={styles.activeFrame}>
              <div style={styles.activeGlow} />
              <div style={styles.activeBorder}>
                <img
                  src={CLIENT_LOGOS[activeIndex].url}
                  alt={CLIENT_LOGOS[activeIndex].name}
                  style={styles.activeImg}
                />
              </div>
              <div style={styles.activeName}>
                {CLIENT_LOGOS[activeIndex].name}
              </div>
            </div>
          </div>

          {/* Right column - vertical scroll (mirrored) */}
          <div style={styles.logoColumn}>
            <div style={styles.logoTrack}>
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => {
                const realIndex = i % CLIENT_LOGOS.length;
                const isActiveLogo = realIndex === activeIndex;
                return (
                  <div
                    key={i}
                    style={{
                      ...styles.logoItem,
                      opacity: isActiveLogo ? 1 : 0.25,
                      transform: isActiveLogo ? "scale(1.1)" : "scale(0.85)",
                      filter: isActiveLogo ? "drop-shadow(0 0 20px rgba(0,180,216,0.4))" : "none",
                      transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
                    }}
                  >
                    <div style={{
                      ...styles.logoFrame,
                      borderColor: isActiveLogo ? "rgba(0,180,216,0.6)" : "rgba(0,180,216,0.12)",
                      boxShadow: isActiveLogo
                        ? "0 0 30px rgba(0,180,216,0.25), inset 0 0 20px rgba(0,180,216,0.1)"
                        : "none",
                    }}>
                      <img
                        src={logo.url}
                        alt={logo.name}
                        style={styles.logoImg}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        <div style={styles.dotsRow}>
          {CLIENT_LOGOS.map((_, i) => (
            <div
              key={i}
              style={{
                ...styles.dot,
                width: i === activeIndex ? 24 : 8,
                background: i === activeIndex
                  ? "linear-gradient(90deg, #00B4D8, #7DD3FC)"
                  : "rgba(0,180,216,0.25)",
                boxShadow: i === activeIndex ? "0 0 10px rgba(0,180,216,0.5)" : "none",
              }}
            />
          ))}
        </div>
      </div>

      <div ref={counterRef} className="slide-counter">
        16 / 17
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
    overflow: "hidden",
  },
  container: {
    width: "100%",
    maxWidth: 1100,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 2,
    position: "relative",
  },
  header: {
    marginBottom: 40,
    textAlign: "center",
  },
  headline: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(22px, 2.8vw, 34px)",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.15,
    letterSpacing: "-0.01em",
    marginBottom: 12,
  },
  description: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(13px, 1.2vw, 15px)",
    color: "#94A3B8",
    lineHeight: 1.6,
    maxWidth: 460,
    margin: "0 auto",
  },
  carouselWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 48,
    width: "100%",
    height: "clamp(280px, 45vh, 400px)",
    position: "relative",
  },
  logoColumn: {
    flex: "0 0 100px",
    height: "100%",
    overflow: "hidden",
    position: "relative",
    maskImage: "linear-gradient(180deg, transparent 0%, black 20%, black 80%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(180deg, transparent 0%, black 20%, black 80%, transparent 100%)",
  },
  logoTrack: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    alignItems: "center",
  },
  logoItem: {
    flexShrink: 0,
  },
  logoFrame: {
    width: 80,
    height: 80,
    borderRadius: 16,
    border: "1.5px solid rgba(0,180,216,0.12)",
    background: "rgba(16,24,40,0.6)",
    backdropFilter: "blur(8px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
  },
  logoImg: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    filter: "brightness(1.1)",
  },
  activeArea: {
    flex: "0 0 260px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  activeFrame: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },
  activeGlow: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -55%)",
    width: 220,
    height: 220,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(0,180,216,0.2) 0%, transparent 70%)",
    filter: "blur(25px)",
    pointerEvents: "none",
  },
  activeBorder: {
    width: 180,
    height: 180,
    borderRadius: 24,
    border: "2px solid rgba(0,180,216,0.5)",
    background: "rgba(16,24,40,0.7)",
    backdropFilter: "blur(12px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    boxShadow: "0 0 40px rgba(0,180,216,0.2), 0 20px 50px -15px rgba(0,0,0,0.6)",
    position: "relative",
    zIndex: 1,
  },
  activeImg: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    filter: "brightness(1.15)",
  },
  activeName: {
    fontFamily: "var(--font-sans)",
    fontSize: 15,
    fontWeight: 600,
    color: "#7DD3FC",
    letterSpacing: "0.03em",
    textAlign: "center",
    position: "relative",
    zIndex: 1,
  },
  dotsRow: {
    display: "flex",
    gap: 6,
    alignItems: "center",
    marginTop: 32,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    transition: "all 0.4s ease",
  },
};
