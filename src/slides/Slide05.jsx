import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import { IMAGES } from "../config/assets";
import SlideBackground from "../components/SlideBackground";

const data = SLIDES[4];

export default function Slide05({ isActive }) {
  const wrapRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const descRef = useRef(null);
  const cardRefs = useRef([]);
  const linkRef = useRef(null);
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
      gsap.set(el, { opacity: 0, y: 35, scale: 0.95 });
      tl.to(el, { opacity: 1, y: 0, scale: 1, duration: 0.65, ease: "expo.out" }, 0.5 + i * 0.12);
    });

    // Link
    gsap.set(linkRef.current, { opacity: 0, x: 15 });
    tl.to(linkRef.current, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }, 1.0);

    // Counter
    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 1.1);
  }, [isActive]);

  const projectImages = [
    IMAGES.cropDetection,
    IMAGES.nursingCollege,
    IMAGES.sharadaConsultant,
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
            // Featured Projects
          </div>
          <h2 ref={headlineRef} style={styles.headline}>
            {data.headline}
          </h2>
          <p ref={descRef} style={styles.description}>
            {data.description}
          </p>
        </div>

        {/* 3 Project Cards */}
        <div style={styles.cardsRow}>
          {data.projects.map((project, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="glass-card"
              style={styles.card}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, { y: -6, duration: 0.3, ease: "power2.out" });
                gsap.to(e.currentTarget.querySelector(".project-img"), { scale: 1.06, duration: 0.4 });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, { y: 0, duration: 0.3, ease: "power2.out" });
                gsap.to(e.currentTarget.querySelector(".project-img"), { scale: 1.0, duration: 0.4 });
              }}
            >
              <div style={styles.imageContainer}>
                <img
                  src={projectImages[i]}
                  alt={project.title}
                  className="project-img"
                  style={styles.projectImage}
                />
                <div style={styles.imageGradientOverlay} />
              </div>

              <div style={styles.cardInfo}>
                <div style={styles.projectTitle}>{project.title}</div>
                <div style={styles.projectTags}>{project.tags}</div>
                <div style={styles.categoryPill}>{project.category}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Right "View All Projects ->" */}
        <div style={styles.bottomRow}>
          <div ref={linkRef} style={styles.viewAllLink}>
            View All Projects →
          </div>
        </div>
      </div>

      <div ref={counterRef} className="slide-counter">
        06 / 17
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
    marginBottom: 32,
    textAlign: "left",
  },
  headline: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(22px, 2.8vw, 34px)",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.15,
    marginBottom: 12,
    letterSpacing: "-0.01em",
  },
  description: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(13px, 1.35vw, 16px)",
    color: "#94A3B8",
    maxWidth: 580,
    lineHeight: 1.6,
  },
  cardsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24,
    width: "100%",
  },
  card: {
    borderRadius: 16,
    overflow: "hidden",
    padding: 10,
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
  },
  imageContainer: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    overflow: "hidden",
    position: "relative",
    background: "#0C1424",
  },
  projectImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.4s ease",
  },
  imageGradientOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, transparent 40%, rgba(6,11,24,0.6) 100%)",
  },
  cardInfo: {
    padding: "16px 8px 10px",
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  projectTitle: {
    fontFamily: "var(--font-sans)",
    fontSize: 16,
    fontWeight: 700,
    color: "#FFFFFF",
  },
  projectTags: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    color: "#64748B",
    letterSpacing: "0.04em",
  },
  categoryPill: {
    marginTop: 6,
    alignSelf: "flex-start",
    fontSize: 11,
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    color: "#00B4D8",
    background: "rgba(0, 180, 216, 0.12)",
    border: "1px solid rgba(0, 180, 216, 0.25)",
    padding: "4px 10px",
    borderRadius: 9999,
  },
  bottomRow: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  viewAllLink: {
    fontFamily: "var(--font-sans)",
    fontSize: 13,
    fontWeight: 600,
    color: "#00B4D8",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    letterSpacing: "0.02em",
    transition: "transform 0.2s ease",
  },
};
