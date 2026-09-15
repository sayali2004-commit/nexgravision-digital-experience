import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import { IMAGES } from "../config/assets";
import SlideBackground from "../components/SlideBackground";

const data = SLIDES[11];

export default function Slide11({ isActive }) {
  const wrapRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const descRef = useRef(null);
  const memberRefs = useRef([]);
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

    // Members
    memberRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: 0, y: 30, scale: 0.9 });
      tl.to(el, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.4)" }, 0.55 + i * 0.1);
    });

    // Counter
    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 1.1);
  }, [isActive]);

  const teamAvatars = [
    IMAGES.sayaliPatil,
    IMAGES.anantPatil,
    IMAGES.snehaMore,
    IMAGES.rohitDeshmukh,
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
            // Our Team
          </div>
          <h2 ref={headlineRef} style={styles.headline}>
            {data.headline}
          </h2>
          <p ref={descRef} style={styles.description}>
            {data.description}
          </p>
        </div>

        {/* 4 Team Member Columns */}
        <div style={styles.teamRow}>
          {data.team.map((member, i) => (
            <div
              key={i}
              ref={(el) => (memberRefs.current[i] = el)}
              style={styles.memberCol}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget.querySelector(".team-avatar-ring"), {
                  scale: 1.06,
                  borderColor: "rgba(0, 180, 216, 0.8)",
                  boxShadow: "0 0 30px rgba(0, 180, 216, 0.4)",
                  duration: 0.3,
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget.querySelector(".team-avatar-ring"), {
                  scale: 1.0,
                  borderColor: "rgba(0, 180, 216, 0.4)",
                  boxShadow: "0 0 16px rgba(0, 180, 216, 0.2)",
                  duration: 0.3,
                });
              }}
            >
              <div className="team-avatar-ring" style={styles.avatarRing}>
                <img
                  src={teamAvatars[i]}
                  alt={member.name}
                  style={styles.avatarImg}
                />
              </div>
              <div style={styles.memberName}>{member.name}</div>
              <div style={styles.memberRole}>{member.role}</div>
            </div>
          ))}
        </div>
      </div>

      <div ref={counterRef} className="slide-counter">
        12 / 16
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
    marginBottom: 56,
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
  teamRow: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 32,
    width: "100%",
  },
  memberCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    cursor: "default",
  },
  avatarRing: {
    width: 104,
    height: 104,
    borderRadius: "50%",
    padding: 3,
    border: "2px solid rgba(0, 180, 216, 0.4)",
    boxShadow: "0 0 16px rgba(0, 180, 216, 0.2)",
    marginBottom: 18,
    transition: "all 0.3s ease",
    background: "#0C1424",
  },
  avatarImg: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
  },
  memberName: {
    fontFamily: "var(--font-sans)",
    fontSize: 16,
    fontWeight: 700,
    color: "#FFFFFF",
    marginBottom: 4,
  },
  memberRole: {
    fontFamily: "var(--font-sans)",
    fontSize: 13,
    color: "#94A3B8",
    fontWeight: 500,
  },
};
