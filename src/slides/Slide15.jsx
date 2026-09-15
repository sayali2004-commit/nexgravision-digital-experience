import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import { BRAND } from "../config/brand";
import { BrandLogo } from "../config/assets";
import SlideBackground from "../components/SlideBackground";

const data = SLIDES[14];

export default function Slide15({ isActive, onNavigate }) {
  const wrapRef = useRef(null);
  const brandRef = useRef(null);
  const colRefs = useRef([]);
  const bottomBarRef = useRef(null);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isActive || hasAnimated.current) return;
    hasAnimated.current = true;

    const tl = gsap.timeline({ delay: 0.2 });

    // Brand Block
    gsap.set(brandRef.current, { opacity: 0, x: -25 });
    tl.to(brandRef.current, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }, 0.1);

    // 3 Columns
    colRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: 0, y: 25 });
      tl.to(el, { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" }, 0.35 + i * 0.1);
    });

    // Bottom Bar
    gsap.set(bottomBarRef.current, { opacity: 0, y: 15 });
    tl.to(bottomBarRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, 0.8);

    // Counter
    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 1.1);
  }, [isActive]);

  const slideNavMap = {
    Home: 0,
    About: 1,
    Services: 2,
    Projects: 4,
    Contact: 11,
  };

  return (
    <div ref={wrapRef} style={styles.wrap}>
      <SlideBackground
        orbColor="radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)"
        orbPosition={{ top: "45%", left: "30%" }}
      />

      <div style={styles.container}>
        {/* Main Grid: Left Brand Block + 3 Columns */}
        <div style={styles.mainContent}>
          {/* Brand Info */}
          <div ref={brandRef} style={styles.brandBlock}>
            <BrandLogo size={42} />

            <p style={styles.brandDesc}>
              Let's build something amazing together.<br />
              <span style={styles.descHighlight}>Your Vision • Our Technology • Success.</span>
            </p>

            {/* Social Icons */}
            <div style={styles.socialRow}>
              {/* LinkedIn */}
              <a href={BRAND.social.linkedin} target="_blank" rel="noreferrer" style={styles.socialBtn}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href={BRAND.social.instagram} target="_blank" rel="noreferrer" style={styles.socialBtn}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Twitter/X */}
              <a href={BRAND.social.twitter} target="_blank" rel="noreferrer" style={styles.socialBtn}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* GitHub */}
              <a href={BRAND.social.github} target="_blank" rel="noreferrer" style={styles.socialBtn}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 1: Quick Links */}
          <div ref={(el) => (colRefs.current[0] = el)} style={styles.column}>
            <div style={styles.colHeader}>Quick Links</div>
            <div style={styles.linkList}>
              {data.quickLinks.map((link, i) => (
                <div
                  key={i}
                  style={styles.linkItem}
                  onClick={() => onNavigate?.(slideNavMap[link] || 0)}
                >
                  {link}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div ref={(el) => (colRefs.current[1] = el)} style={styles.column}>
            <div style={styles.colHeader}>Services</div>
            <div style={styles.linkList}>
              {data.services.map((svc, i) => (
                <div key={i} style={styles.linkItem}>
                  {svc}
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div ref={(el) => (colRefs.current[2] = el)} style={styles.column}>
            <div style={styles.colHeader}>Contact Info</div>
            <div style={styles.contactList}>
              <div style={styles.contactLine}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>{data.contactInfo.phone}</span>
              </div>

              <div style={styles.contactLine}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>{data.contactInfo.email}</span>
              </div>

              <div style={styles.contactLine}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{data.contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line Bar */}
        <div ref={bottomBarRef} style={styles.bottomBar}>
          <div style={styles.copyText}>
            © 2025 NexGravision. All rights reserved.
          </div>
          <div style={styles.designedBy}>
            Designed with <span style={{ color: "#EF4444", margin: "0 3px" }}>❤️</span> by NexGravision.
          </div>
        </div>
      </div>

      <div ref={counterRef} className="slide-counter">
        15 / 16
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
    maxWidth: 1140,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "clamp(420px, 60vh, 520px)",
    zIndex: 2,
    position: "relative",
  },
  mainContent: {
    display: "grid",
    gridTemplateColumns: "1.4fr 0.9fr 1fr 1.1fr",
    gap: 40,
    width: "100%",
    alignItems: "flex-start",
  },
  brandBlock: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  brandDesc: {
    fontFamily: "var(--font-sans)",
    fontSize: 13,
    color: "#94A3B8",
    lineHeight: 1.6,
    maxWidth: 260,
  },
  descHighlight: {
    color: "#CBD5E1",
    fontWeight: 500,
  },
  socialRow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginTop: 4,
  },
  socialBtn: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#CBD5E1",
    transition: "all 0.25s ease",
    textDecoration: "none",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  colHeader: {
    fontFamily: "var(--font-sans)",
    fontSize: 15,
    fontWeight: 700,
    color: "#FFFFFF",
    letterSpacing: "0.02em",
  },
  linkList: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  linkItem: {
    fontFamily: "var(--font-sans)",
    fontSize: 13,
    color: "#94A3B8",
    cursor: "pointer",
    transition: "color 0.2s ease",
  },
  contactList: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  contactLine: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontFamily: "var(--font-sans)",
    fontSize: 13,
    color: "#94A3B8",
  },
  bottomBar: {
    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
    paddingTop: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  copyText: {
    fontFamily: "var(--font-sans)",
    fontSize: 12,
    color: "#64748B",
  },
  designedBy: {
    fontFamily: "var(--font-sans)",
    fontSize: 12,
    color: "#64748B",
  },
};
