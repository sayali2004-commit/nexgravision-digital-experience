import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import { BrandLogo } from "../config/assets";

const data = SLIDES[2];

const serviceIcons = {
  web: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7DD3FC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  mobile: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7DD3FC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12" y2="18" strokeWidth="2" />
    </svg>
  ),
  design: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7DD3FC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  ),
  cloud: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7DD3FC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
};

export default function SlideProjects({ isActive }) {
  const logoRef = useRef(null);
  const topRightRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const descRef = useRef(null);
  const projectsRef = useRef(null);
  const servicesRef = useRef(null);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isActive || hasAnimated.current) return;
    hasAnimated.current = true;

    const tl = gsap.timeline({ delay: 0.2 });

    gsap.set(logoRef.current, { opacity: 0, y: -20 });
    tl.to(logoRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.1);

    gsap.set(topRightRef.current, { opacity: 0, x: 20 });
    tl.to(topRightRef.current, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }, 0.15);

    gsap.set(tagRef.current, { opacity: 0, x: -20 });
    tl.to(tagRef.current, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }, 0.2);

    gsap.set(headlineRef.current, { opacity: 0, y: 30, filter: "blur(6px)" });
    tl.to(headlineRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, ease: "power3.out" }, 0.3);

    gsap.set(descRef.current, { opacity: 0, y: 20 });
    tl.to(descRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.5);

    gsap.set(projectsRef.current, { opacity: 0, y: 40 });
    tl.to(projectsRef.current, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, 0.6);

    gsap.set(servicesRef.current, { opacity: 0, y: 20 });
    tl.to(servicesRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.9);

    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 1.0);
  }, [isActive]);

  return (
    <div style={S.wrap}>
      <div className="bg-grid" />
      <div style={S.orbGlow} />

      <div style={S.container}>
        {/* Header */}
        <div style={S.headerRow}>
          <div ref={logoRef}>
            <BrandLogo size={42} />
          </div>
          <div ref={topRightRef} style={S.topRight}>
            {data.topRight}
          </div>
        </div>

        {/* Content */}
        <div style={S.contentArea}>
          <div ref={tagRef} className="section-tag">{data.sectionTag}</div>
          <h2 ref={headlineRef} style={S.headline}>
            {data.headline}<br />
            <span style={S.headlineAccent}>{data.headlineAccent}</span>
          </h2>
          <p ref={descRef} style={S.description}>{data.description}</p>

          <div ref={projectsRef} style={S.projectsRow}>
            {data.projects.map((proj, i) => (
              <div key={i} style={S.projectCard}>
                <div style={S.projectImageWrap}>
                  <img src={proj.image} alt={proj.title} style={S.projectImage} />
                  <div style={S.projectImageOverlay} />
                </div>
                <div style={S.projectInfo}>
                  <div style={S.projectTitle}>{proj.title}</div>
                  <div style={S.projectDesc}>{proj.description}</div>
                  <div style={S.projectLink}>View Project &rarr;</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom services */}
        <div ref={servicesRef} style={S.servicesRow}>
          {data.services.map((svc, i) => (
            <div key={i} style={S.serviceItem}>
              <div style={S.serviceIconWrap}>{serviceIcons[svc.icon]}</div>
              <span style={S.serviceLabel}>{svc.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div ref={counterRef} style={S.counterWrap}>
        <span className="slide-counter" style={{ position: "static" }}>03 / 05</span>
      </div>
    </div>
  );
}

const S = {
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
    background: "linear-gradient(180deg, #080D1A 0%, #0C1222 50%, #101828 100%)",
  },
  orbGlow: {
    position: "absolute",
    top: "20%",
    left: "30%",
    width: "clamp(300px, 40vw, 500px)",
    height: "clamp(300px, 40vw, 500px)",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(0,180,216,0.12) 0%, transparent 70%)",
    filter: "blur(60px)",
    pointerEvents: "none",
  },
  container: {
    width: "100%",
    maxWidth: 1280,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    zIndex: 2,
    position: "relative",
  },
  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  topRight: {
    fontFamily: "var(--font-mono)",
    fontSize: "clamp(11px, 1.1vw, 14px)",
    fontWeight: 500,
    color: "#64748B",
    letterSpacing: "0.05em",
  },
  contentArea: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  headline: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(28px, 3.5vw, 46px)",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.15,
    letterSpacing: "-0.015em",
    marginBottom: 12,
  },
  headlineAccent: {
    background: "linear-gradient(90deg, #7DD3FC 0%, #00B4D8 50%, #0284C7 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  description: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(13px, 1.3vw, 16px)",
    color: "#94A3B8",
    lineHeight: 1.7,
    maxWidth: 600,
    marginBottom: 36,
  },
  projectsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "clamp(16px, 2vw, 28px)",
    width: "100%",
  },
  projectCard: {
    borderRadius: 16,
    overflow: "hidden",
    background: "rgba(16,24,40,0.6)",
    border: "1px solid rgba(255,255,255,0.06)",
    transition: "all 0.3s ease",
  },
  projectImageWrap: {
    width: "100%",
    height: "clamp(140px, 18vh, 200px)",
    overflow: "hidden",
    position: "relative",
  },
  projectImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease",
  },
  projectImageOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, transparent 40%, rgba(8,13,26,0.8) 100%)",
  },
  projectInfo: {
    padding: "clamp(14px, 1.5vw, 20px)",
  },
  projectTitle: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(14px, 1.3vw, 17px)",
    fontWeight: 600,
    color: "#FFFFFF",
    marginBottom: 8,
  },
  projectDesc: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(11px, 1vw, 13px)",
    color: "#94A3B8",
    lineHeight: 1.6,
    marginBottom: 12,
  },
  projectLink: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(11px, 1vw, 13px)",
    fontWeight: 600,
    color: "#00B4D8",
    cursor: "pointer",
  },
  servicesRow: {
    display: "flex",
    alignItems: "center",
    gap: "clamp(20px, 3vw, 48px)",
    paddingTop: 16,
    flexWrap: "wrap",
  },
  serviceItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  serviceIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 8,
    background: "rgba(0,180,216,0.1)",
    border: "1px solid rgba(0,180,216,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  serviceLabel: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(11px, 1vw, 13px)",
    fontWeight: 500,
    color: "#94A3B8",
  },
  counterWrap: {
    position: "absolute",
    bottom: 36,
    right: 56,
    zIndex: 10,
    pointerEvents: "none",
  },
};
