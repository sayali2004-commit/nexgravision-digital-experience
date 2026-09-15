import React, { useEffect, useRef, useState, useCallback } from "react";
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
  const stageRef = useRef(null);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);
  const angleRef = useRef(0);
  const rafRef = useRef(null);
  const pausedRef = useRef(false);

  const logoCount = CLIENT_LOGOS.length;
  const angleStep = (2 * Math.PI) / logoCount;

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

    gsap.set(stageRef.current, { opacity: 0, scale: 0.9 });
    tl.to(stageRef.current, { opacity: 1, scale: 1, duration: 0.9, ease: "expo.out" }, 0.5);

    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 0.8);
  }, [isActive]);

  const animate = useCallback(() => {
    if (!stageRef.current || pausedRef.current) {
      rafRef.current = requestAnimationFrame(animate);
      return;
    }

    angleRef.current += 0.004;
    const items = stageRef.current.querySelectorAll(".showcase-item");
    const centerX = stageRef.current.offsetWidth / 2;

    items.forEach((item, i) => {
      const angle = angleRef.current + i * angleStep;
      const x = Math.sin(angle);
      const z = Math.cos(angle);

      const normalizedZ = (z + 1) / 2;
      const scale = 0.5 + normalizedZ * 0.6;
      const opacity = 0.25 + normalizedZ * 0.75;
      const blur = (1 - normalizedZ) * 2;
      const zIndex = Math.round(normalizedZ * 100);
      const translateX = x * 38;
      const translateZ = z * 60;

      item.style.transform = `translateX(${translateX}%) translateZ(${translateZ}px) scale(${scale})`;
      item.style.opacity = opacity;
      item.style.filter = `blur(${blur}px) brightness(${0.7 + normalizedZ * 0.45})`;
      item.style.zIndex = zIndex;

      const glowIntensity = Math.pow(normalizedZ, 3);
      const glowEl = item.querySelector(".logo-glow-ring");
      if (glowEl) {
        glowEl.style.opacity = glowIntensity * 0.7;
        glowEl.style.boxShadow = `0 0 ${20 + glowIntensity * 30}px ${5 + glowIntensity * 15}px rgba(0,180,216,${0.15 + glowIntensity * 0.35})`;
      }

      const nameEl = item.querySelector(".logo-label");
      if (nameEl) {
        nameEl.style.opacity = 0.3 + normalizedZ * 0.7;
        nameEl.style.color = normalizedZ > 0.85 ? "#7DD3FC" : "#64748B";
      }
    });

    rafRef.current = requestAnimationFrame(animate);
  }, [angleStep]);

  useEffect(() => {
    if (!isActive) return;
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isActive, animate]);

  const handleMouseEnter = () => { pausedRef.current = true; };
  const handleMouseLeave = () => { pausedRef.current = false; };

  return (
    <div ref={wrapRef} style={styles.wrap}>
      <SlideBackground
        orbColor="radial-gradient(circle, rgba(0,180,216,0.06) 0%, transparent 70%)"
        orbPosition={{ top: "55%", left: "50%" }}
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

        <div
          ref={stageRef}
          style={styles.stage}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {CLIENT_LOGOS.map((logo, i) => (
            <div key={i} className="showcase-item" style={styles.showcaseItem}>
              <div className="logo-glow-ring" style={styles.glowRing} />
              <div style={styles.logoCard}>
                <img src={logo.url} alt={logo.name} style={styles.logoImg} />
              </div>
              <div className="logo-label" style={styles.logoName}>
                {logo.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div ref={counterRef} className="slide-counter">
        02 / 4
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
    padding: "clamp(16px, 3vw, 40px) 0",
    overflow: "hidden",
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 2,
    position: "relative",
  },
  header: {
    textAlign: "center",
    padding: "0 24px",
    marginBottom: "clamp(20px, 3vw, 40px)",
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
  stage: {
    position: "relative",
    width: "100%",
    maxWidth: 1000,
    height: "clamp(200px, 35vh, 320px)",
    perspective: "900px",
    perspectiveOrigin: "50% 50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "default",
    marginTop: "clamp(10px, 2vw, 30px)",
  },
  showcaseItem: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
    transformStyle: "preserve-3d",
    transition: "none",
  },
  glowRing: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -55%)",
    width: "clamp(130px, 20vw, 180px)",
    height: "clamp(130px, 20vw, 180px)",
    borderRadius: "50%",
    background: "transparent",
    pointerEvents: "none",
    opacity: 0,
    zIndex: 0,
  },
  logoCard: {
    width: "clamp(100px, 16vw, 160px)",
    height: "clamp(100px, 16vw, 160px)",
    borderRadius: 20,
    border: "1px solid rgba(0,180,216,0.12)",
    background: "linear-gradient(145deg, rgba(16,24,40,0.85) 0%, rgba(8,13,26,0.95) 100%)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "clamp(16px, 2.5vw, 24px)",
    position: "relative",
    zIndex: 1,
    boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
  },
  logoImg: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    filter: "saturate(0.9)",
  },
  logoName: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(10px, 1vw, 13px)",
    fontWeight: 600,
    letterSpacing: "0.04em",
    textAlign: "center",
    whiteSpace: "nowrap",
    position: "relative",
    zIndex: 1,
    transition: "color 0.3s ease",
  },
};
