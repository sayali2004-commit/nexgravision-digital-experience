import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import SlideBackground from "../components/SlideBackground";

const data = SLIDES[9];

export default function Slide10({ isActive }) {
  const wrapRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const mockupsRef = useRef(null);
  const featureRefs = useRef([]);
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

    // Center Mockups
    gsap.set(mockupsRef.current, { opacity: 0, scale: 0.92, y: 20 });
    tl.to(mockupsRef.current, { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: "expo.out" }, 0.45);

    // Bottom 4 Badges
    featureRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: 0, y: 20 });
      tl.to(el, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, 0.75 + i * 0.08);
    });

    // Counter
    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 1.1);
  }, [isActive]);

  const featureIcons = [
    // Responsive Design
    <svg key="responsive" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>,
    // Fast Performance
    <svg key="fast" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>,
    // User Friendly
    <svg key="user" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>,
    // Scalable
    <svg key="scalable" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>,
  ];

  return (
    <div ref={wrapRef} style={styles.wrap}>
      <SlideBackground
        orbColor="radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)"
        orbPosition={{ top: "45%", left: "50%" }}
      />

      <div style={styles.container}>
        <div style={styles.header}>
          <div ref={tagRef} className="section-tag">
            // Build for Every Platform
          </div>
          <h2 ref={headlineRef} style={styles.headline}>
            {data.headline}
          </h2>
        </div>

        {/* Center Mockups (Phone + Laptop) */}
        <div ref={mockupsRef} style={styles.mockupContainer}>
          {/* Smartphone Mockup */}
          <div style={styles.phoneFrame}>
            <div style={styles.phoneSpeaker} />
            <div style={styles.phoneScreen}>
              <div style={styles.phoneHeader}>
                <div style={styles.phoneDot} />
                <div style={styles.phoneTitle}>NexMobile</div>
              </div>
              <div style={styles.phoneCard}>
                <div style={styles.phoneStatVal}>99.9%</div>
                <div style={styles.phoneStatLbl}>System Uptime</div>
              </div>
              <div style={styles.phoneCard}>
                <div style={styles.phoneStatVal}>12.4k</div>
                <div style={styles.phoneStatLbl}>Active Users</div>
              </div>
              <div style={styles.phoneGraphBar}>
                <div style={{ ...styles.phoneBarFill, width: "75%" }} />
              </div>
            </div>
          </div>

          {/* Laptop Mockup */}
          <div style={styles.laptopFrame}>
            <div style={styles.laptopScreen}>
              <div style={styles.laptopTopBar}>
                <div style={styles.trafficLights}>
                  <div style={{ ...styles.trafficDot, background: "#EF4444" }} />
                  <div style={{ ...styles.trafficDot, background: "#00B4D8" }} />
                  <div style={{ ...styles.trafficDot, background: "#10B981" }} />
                </div>
                <div style={styles.laptopUrl}>nexgravision.cloud/analytics</div>
              </div>

              <div style={styles.laptopBody}>
                <div style={styles.laptopSidebar}>
                  <div style={styles.sbActiveItem} />
                  <div style={styles.sbItem} />
                  <div style={styles.sbItem} />
                  <div style={styles.sbItem} />
                </div>
                <div style={styles.laptopMain}>
                  <div style={styles.dashboardStats}>
                    <div style={styles.dbStatBox}>
                      <div style={styles.dbStatNum}>$84.2K</div>
                      <div style={styles.dbStatLbl}>Monthly Growth</div>
                    </div>
                    <div style={styles.dbStatBox}>
                      <div style={styles.dbStatNum}>98.4%</div>
                      <div style={styles.dbStatLbl}>Conversion</div>
                    </div>
                  </div>
                  <div style={styles.dashboardChart}>
                    <div style={{ ...styles.chartBar, height: "45%" }} />
                    <div style={{ ...styles.chartBar, height: "70%" }} />
                    <div style={{ ...styles.chartBar, height: "55%" }} />
                    <div style={{ ...styles.chartBar, height: "85%" }} />
                    <div style={{ ...styles.chartBar, height: "65%" }} />
                    <div style={{ ...styles.chartBar, height: "95%", background: "#00B4D8" }} />
                  </div>
                </div>
              </div>
            </div>
            <div style={styles.laptopBase} />
          </div>
        </div>

        {/* Bottom Feature Badges */}
        <div style={styles.featuresRow}>
          {data.features.map((f, i) => (
            <div
              key={i}
              ref={(el) => (featureRefs.current[i] = el)}
              style={styles.featureItem}
            >
              <div style={styles.featureIconWrap}>
                {featureIcons[i]}
              </div>
              <div style={styles.featureTitle}>{f.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div ref={counterRef} className="slide-counter">
        11 / 17
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
    marginBottom: 28,
    textAlign: "left",
  },
  headline: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(22px, 2.8vw, 34px)",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.15,
    letterSpacing: "-0.01em",
  },
  mockupContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 36,
    marginBottom: 36,
  },
  phoneFrame: {
    width: 150,
    height: 270,
    borderRadius: 28,
    background: "#0C1424",
    border: "3px solid rgba(0, 180, 216, 0.4)",
    padding: "8px 6px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0 20px 40px rgba(0,0,0,0.6), 0 0 25px rgba(0,180,216,0.15)",
    flexShrink: 0,
  },
  phoneSpeaker: {
    width: 32,
    height: 4,
    borderRadius: 2,
    background: "#334155",
    marginBottom: 8,
  },
  phoneScreen: {
    width: "100%",
    flex: 1,
    borderRadius: 18,
    background: "#101E38",
    padding: "10px 8px",
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  phoneHeader: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    marginBottom: 2,
  },
  phoneDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "#00B4D8",
  },
  phoneTitle: {
    fontFamily: "var(--font-mono)",
    fontSize: 9,
    color: "#F8FAFC",
    fontWeight: 600,
  },
  phoneCard: {
    background: "rgba(255,255,255,0.05)",
    borderRadius: 8,
    padding: "6px 8px",
  },
  phoneStatVal: {
    fontFamily: "var(--font-sans)",
    fontSize: 13,
    fontWeight: 700,
    color: "#00B4D8",
  },
  phoneStatLbl: {
    fontSize: 8,
    color: "#94A3B8",
  },
  phoneGraphBar: {
    height: 6,
    borderRadius: 3,
    background: "rgba(255,255,255,0.06)",
    overflow: "hidden",
    marginTop: "auto",
  },
  phoneBarFill: {
    height: "100%",
    background: "linear-gradient(90deg, #38BDF8, #00B4D8)",
  },
  laptopFrame: {
    width: "clamp(340px, 44vw, 480px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  laptopScreen: {
    width: "100%",
    height: 250,
    borderRadius: "14px 14px 0 0",
    background: "#0C1424",
    border: "2px solid rgba(255,255,255,0.12)",
    borderBottom: "none",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
  },
  laptopTopBar: {
    height: 24,
    background: "#0E1830",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    display: "flex",
    alignItems: "center",
    padding: "0 10px",
    gap: 12,
  },
  trafficLights: {
    display: "flex",
    gap: 4,
  },
  trafficDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
  },
  laptopUrl: {
    fontFamily: "var(--font-mono)",
    fontSize: 8,
    color: "#64748B",
    background: "rgba(0,0,0,0.3)",
    padding: "2px 8px",
    borderRadius: 4,
  },
  laptopBody: {
    flex: 1,
    display: "flex",
  },
  laptopSidebar: {
    width: 44,
    background: "#0A1020",
    borderRight: "1px solid rgba(255,255,255,0.05)",
    padding: "12px 6px",
    display: "flex",
    flexDirection: "column",
    gap: 8,
    alignItems: "center",
  },
  sbActiveItem: {
    width: 24,
    height: 14,
    borderRadius: 4,
    background: "rgba(0,180,216,0.25)",
    border: "1px solid #00B4D8",
  },
  sbItem: {
    width: 24,
    height: 12,
    borderRadius: 4,
    background: "rgba(255,255,255,0.06)",
  },
  laptopMain: {
    flex: 1,
    padding: 14,
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  dashboardStats: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
  },
  dbStatBox: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: 8,
    padding: "8px 10px",
  },
  dbStatNum: {
    fontFamily: "var(--font-sans)",
    fontSize: 14,
    fontWeight: 700,
    color: "#FFFFFF",
  },
  dbStatLbl: {
    fontSize: 9,
    color: "#94A3B8",
  },
  dashboardChart: {
    flex: 1,
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.05)",
    borderRadius: 8,
    padding: "10px 14px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: 8,
  },
  chartBar: {
    flex: 1,
    borderRadius: "3px 3px 0 0",
    background: "rgba(56,189,248,0.4)",
    transition: "height 0.4s ease",
  },
  laptopBase: {
    width: "116%",
    height: 10,
    background: "linear-gradient(180deg, #1E293B 0%, #0C1222 100%)",
    borderRadius: "0 0 10px 10px",
    borderTop: "1px solid rgba(255,255,255,0.2)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
  },
  featuresRow: {
    display: "flex",
    justifyContent: "center",
    gap: 48,
    width: "100%",
  },
  featureItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  featureIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 10,
    background: "rgba(0,180,216,0.08)",
    border: "1px solid rgba(0,180,216,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  featureTitle: {
    fontFamily: "var(--font-sans)",
    fontSize: 13,
    fontWeight: 600,
    color: "#E2E8F0",
    lineHeight: 1.3,
    whiteSpace: "pre-line",
  },
};
