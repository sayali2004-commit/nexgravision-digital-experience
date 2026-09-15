import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import SlideBackground from "../components/SlideBackground";

const data = SLIDES[11];

export default function Slide12({ isActive }) {
  const wrapRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const descRef = useRef(null);
  const contactRefs = useRef([]);
  const formRef = useRef(null);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

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

    // Contact items
    contactRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: 0, x: -20 });
      tl.to(el, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }, 0.55 + i * 0.1);
    });

    // Form card
    gsap.set(formRef.current, { opacity: 0, scale: 0.95, y: 20 });
    tl.to(formRef.current, { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "expo.out" }, 0.45);

    // Counter
    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 1.1);
  }, [isActive]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div ref={wrapRef} style={styles.wrap}>
      <SlideBackground
        orbColor="radial-gradient(circle, rgba(0,180,216,0.12) 0%, transparent 70%)"
        orbPosition={{ top: "45%", left: "75%" }}
      />

      {/* Subtle top-right foliage accent */}
      <div style={styles.foliageAccent}>
        <svg width="220" height="220" viewBox="0 0 200 200" fill="none" opacity="0.18">
          <path d="M180 20 C140 30 110 70 120 120 C100 80 80 50 40 30 C70 80 80 120 70 180 C110 160 140 130 160 80 Z" fill="#10B981" />
          <path d="M190 0 C150 20 130 60 140 100 C110 70 90 40 60 20 C90 60 110 110 100 170 C140 140 160 100 180 50 Z" fill="#059669" opacity="0.6" />
        </svg>
      </div>

      <div style={styles.container}>
        {/* Left Column: Heading + Contact Details */}
        <div style={styles.leftCol}>
          <div ref={tagRef} className="section-tag">
            // Get In Touch
          </div>

          <h2 ref={headlineRef} style={styles.headline}>
            Let's Build<br />Something Great
          </h2>

          <p ref={descRef} style={styles.description}>
            Have a project in mind?<br />
            We'd love to hear from you.
          </p>

          <div style={styles.contactList}>
            {/* Phone */}
            <div
              ref={(el) => (contactRefs.current[0] = el)}
              style={styles.contactItem}
            >
              <div style={styles.contactIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <span style={styles.contactValue}>{data.contact.phone}</span>
            </div>

            {/* Email */}
            <div
              ref={(el) => (contactRefs.current[1] = el)}
              style={styles.contactItem}
            >
              <div style={styles.contactIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <span style={styles.contactValue}>{data.contact.email}</span>
            </div>

            {/* Location */}
            <div
              ref={(el) => (contactRefs.current[2] = el)}
              style={styles.contactItem}
            >
              <div style={styles.contactIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span style={styles.contactValue}>{data.contact.address}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Glass Contact Form */}
        <div ref={formRef} style={styles.rightCol}>
          <form className="glass-card" style={styles.formCard} onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <input
                type="text"
                placeholder="Your Name *"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <input
                type="email"
                placeholder="Your Email *"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <textarea
                placeholder="Your Message *"
                rows={4}
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                style={{ ...styles.input, resize: "none" }}
              />
            </div>

            <button type="submit" className="btn-gold" style={styles.submitBtn}>
              {submitted ? "Message Sent! ✓" : "Send Message →"}
            </button>
          </form>
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
  foliageAccent: {
    position: "absolute",
    top: 0,
    right: 0,
    pointerEvents: "none",
    zIndex: 1,
  },
  container: {
    width: "100%",
    maxWidth: 1140,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 60,
    zIndex: 2,
    position: "relative",
  },
  leftCol: {
    flex: "0 0 48%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  headline: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(30px, 3.8vw, 48px)",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.15,
    marginBottom: 16,
    letterSpacing: "-0.01em",
  },
  description: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(13px, 1.35vw, 16px)",
    color: "#94A3B8",
    lineHeight: 1.6,
    marginBottom: 36,
    whiteSpace: "pre-line",
  },
  contactList: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: 16,
  },
  contactIcon: {
    width: 42,
    height: 42,
    borderRadius: "50%",
    background: "rgba(0, 180, 216, 0.1)",
    border: "1px solid rgba(0, 180, 216, 0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  contactValue: {
    fontFamily: "var(--font-sans)",
    fontSize: 15,
    fontWeight: 500,
    color: "#E2E8F0",
  },
  rightCol: {
    flex: "0 0 46%",
    display: "flex",
    justifyContent: "flex-end",
  },
  formCard: {
    width: "100%",
    maxWidth: 440,
    padding: "36px 32px",
    display: "flex",
    flexDirection: "column",
    gap: 18,
    borderRadius: 20,
  },
  inputGroup: {
    width: "100%",
  },
  input: {
    width: "100%",
    background: "rgba(6, 11, 24, 0.6)",
    border: "1px solid rgba(255, 255, 255, 0.12)",
    borderRadius: 12,
    padding: "14px 18px",
    color: "#FFFFFF",
    fontFamily: "var(--font-sans)",
    fontSize: 14,
    outline: "none",
    transition: "all 0.25s ease",
  },
  submitBtn: {
    marginTop: 8,
    justifyContent: "center",
    width: "100%",
    padding: "14px",
    fontSize: 15,
  },
};
