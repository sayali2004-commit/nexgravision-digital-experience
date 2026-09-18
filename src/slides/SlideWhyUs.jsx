import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { BrandLogo } from "../config/assets";

const MODULES = [
  {
    title: "Sales & CRM",
    desc: "Track leads & close deals",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    color: "#3B82F6",
    angle: 0,
  },
  {
    title: "HR & Payroll",
    desc: "Manage your entire team",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    color: "#8B5CF6",
    angle: 60,
  },
  {
    title: "Finance",
    desc: "Invoicing & accounting",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    color: "#10B981",
    angle: 120,
  },
  {
    title: "Operations",
    desc: "Streamline workflows",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    color: "#F59E0B",
    angle: 180,
  },
  {
    title: "Marketing",
    desc: "Campaigns & analytics",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    color: "#EC4899",
    angle: 240,
  },
  {
    title: "Support",
    desc: "24/7 helpdesk & tickets",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" /><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
    color: "#06B6D4",
    angle: 300,
  },
];

const STATS = [
  { value: "10x", label: "Faster Management" },
  { value: "100%", label: "Automation" },
  { value: "1", label: "Platform for All" },
];

export default function SlideWhyUs({ isActive }) {
  const logoRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const descRef = useRef(null);
  const statsRef = useRef(null);
  const hubRef = useRef(null);
  const modulesRef = useRef([]);
  const linesRef = useRef(null);
  const cardsRef = useRef(null);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isActive || hasAnimated.current) return;
    hasAnimated.current = true;

    const tl = gsap.timeline({ delay: 0.15 });

    // Logo
    gsap.set(logoRef.current, { opacity: 0, y: -20 });
    tl.to(logoRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.05);

    // Tag
    gsap.set(tagRef.current, { opacity: 0, x: -20 });
    tl.to(tagRef.current, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }, 0.15);

    // Headline
    gsap.set(headlineRef.current, { opacity: 0, y: 35, filter: "blur(8px)" });
    tl.to(headlineRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.0, ease: "power3.out" }, 0.25);

    // Description
    gsap.set(descRef.current, { opacity: 0, y: 20 });
    tl.to(descRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.45);

    // Stats
    if (statsRef.current) {
      gsap.set(statsRef.current.children, { opacity: 0, y: 15 });
      tl.to(statsRef.current.children, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "back.out(1.5)" }, 0.6);
    }

    // Central hub
    if (hubRef.current) {
      gsap.set(hubRef.current, { opacity: 0, scale: 0.5 });
      tl.to(hubRef.current, { opacity: 1, scale: 1, duration: 1.0, ease: "back.out(1.4)" }, 0.4);
    }

    // Connection lines
    if (linesRef.current) {
      const lines = linesRef.current.querySelectorAll(".conn-line");
      gsap.set(lines, { opacity: 0, scaleX: 0 });
      tl.to(lines, { opacity: 1, scaleX: 1, duration: 0.5, stagger: 0.06, ease: "power2.out" }, 0.7);
    }

    // Module cards
    modulesRef.current.forEach((m, i) => {
      if (m) {
        gsap.set(m, { opacity: 0, scale: 0.6, y: 20 });
        tl.to(m, { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "back.out(1.6)" }, 0.8 + i * 0.08);
      }
    });

    // Floating preview cards
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll(".preview-card");
      gsap.set(cards, { opacity: 0, y: 30, scale: 0.9 });
      tl.to(cards, { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.1, ease: "power3.out" }, 1.0);
    }

    // Counter
    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 1.3);
  }, [isActive]);

  const RADIUS = typeof window !== "undefined" ? Math.min(window.innerWidth * 0.16, 180) : 180;

  return (
    <div style={S.wrap}>
      {/* Header - full width */}
      <div style={S.headerRow}>
        <div ref={logoRef}>
          <BrandLogo size={48} dark />
        </div>
        <div style={S.topRightWrap}>
          <span style={S.topRightText}>All-in-One Platform</span>
        </div>
      </div>

      <div style={S.container}>
        {/* Body */}
        <div style={S.bodyRow}>
          {/* LEFT COLUMN */}
          <div style={S.leftCol}>
            {/* Tagline Banner */}
            <div ref={tagRef} style={S.taglineBanner}>
              <div style={S.taglineDot} />
              <span style={S.taglineText}>One Company • One Software • Endless Possibilities</span>
            </div>

            <h2 ref={headlineRef} style={S.headline}>
              Why Manage <span style={S.headlineAccent}>10 Tools</span><br />
              When You Can Have <span style={S.headlineAccent}>Just One?</span>
            </h2>
            <p ref={descRef} style={S.description}>
              Most businesses waste time and money switching between different software for sales, HR, finance, operations and support. NexGravision brings it all together — <strong style={{ color: "#0F172A" }}>one company, one software, one dashboard</strong> — so your entire business runs smoothly from a single powerful platform.
            </p>

            {/* Stats */}
            <div ref={statsRef} style={S.statsRow}>
              {STATS.map((stat, i) => (
                <div key={i} style={S.statItem}>
                  <div style={S.statValue}>{stat.value}</div>
                  <div style={S.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Feature bullets */}
            <div ref={cardsRef} style={S.previewRow}>
              <div className="preview-card" style={S.previewCard}>
                <div style={{ ...S.previewIcon, background: "linear-gradient(135deg, #EFF6FF, #DBEAFE)", border: "1px solid rgba(59,130,246,0.15)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <div style={S.previewTextCol}>
                  <div style={S.previewTitle}>No Multiple Subscriptions</div>
                  <div style={S.previewDesc}>One software replaces all your tools</div>
                </div>
              </div>
              <div className="preview-card" style={S.previewCard}>
                <div style={{ ...S.previewIcon, background: "linear-gradient(135deg, #ECFDF5, #D1FAE5)", border: "1px solid rgba(16,185,129,0.15)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <div style={S.previewTextCol}>
                  <div style={S.previewTitle}>One Dashboard for Everything</div>
                  <div style={S.previewDesc}>See your entire business at a glance</div>
                </div>
              </div>
              <div className="preview-card" style={S.previewCard}>
                <div style={{ ...S.previewIcon, background: "linear-gradient(135deg, #F5F3FF, #EDE9FE)", border: "1px solid rgba(139,92,246,0.15)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <div style={S.previewTextCol}>
                  <div style={S.previewTitle}>Saves Time & Money</div>
                  <div style={S.previewDesc}>Cut costs by up to 60% on software</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Central Hub */}
          <div style={S.rightCol}>
            <div style={S.orbitWrap}>
              {/* Connection lines */}
              <div ref={linesRef} style={S.linesLayer}>
                {MODULES.map((mod, i) => (
                  <div
                    key={i}
                    className="conn-line"
                    style={{
                      ...S.connLine,
                      transform: `rotate(${mod.angle}deg)`,
                      transformOrigin: "center left",
                    }}
                  />
                ))}
              </div>

              {/* Orbit ring */}
              <div style={S.orbitRing} />

              {/* Central hub */}
              <div ref={hubRef} className="center-hub" style={S.centerHub}>
                <div style={S.hubGlowRing} />
                <div style={S.hubPurpleRing} />
                <img src="/LOGOIMG.png" alt="NexGravision" style={S.hubLogo} />
                <div style={S.hubText}>NEXGRAVISION</div>
                <div style={S.hubSubtext}>One Company</div>
              </div>

              {/* Module cards */}
              {MODULES.map((mod, i) => {
                const rad = (mod.angle * Math.PI) / 180;
                const x = Math.cos(rad) * RADIUS;
                const y = Math.sin(rad) * RADIUS;
                return (
                  <div
                    key={i}
                    ref={(el) => (modulesRef.current[i] = el)}
                    style={{
                      ...S.moduleCard,
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <div style={{ ...S.moduleIcon, background: `linear-gradient(135deg, ${mod.color}15, ${mod.color}10)`, border: `1.5px solid ${mod.color}25` }}>
                      {mod.icon}
                    </div>
                    <div style={S.moduleTextCol}>
                      <div style={{ ...S.moduleTitle, color: mod.color }}>{mod.title}</div>
                      <div style={S.moduleDesc}>{mod.desc}</div>
                    </div>
                  </div>
                );
              })}

              {/* Floating mini dashboard cards */}
              <div className="preview-card" style={S.dashCard1}>
                <div style={S.dashCardHeader}>
                  <div style={{ ...S.dashDot, background: "#3B82F6" }} />
                  <div style={{ ...S.dashDot, background: "#10B981" }} />
                  <div style={{ ...S.dashDot, background: "#F59E0B" }} />
                </div>
                <div style={S.dashBarRow}>
                  <div style={{ ...S.dashBar, width: "80%", background: "linear-gradient(90deg, #3B82F6, #60A5FA)" }} />
                  <div style={{ ...S.dashBar, width: "55%", background: "linear-gradient(90deg, #10B981, #34D399)" }} />
                  <div style={{ ...S.dashBar, width: "65%", background: "linear-gradient(90deg, #8B5CF6, #A78BFA)" }} />
                </div>
              </div>

              <div className="preview-card" style={S.dashCard2}>
                <div style={S.dashCardHeader}>
                  <div style={{ ...S.dashDot, background: "#EC4899" }} />
                  <span style={S.dashLabel}>Revenue</span>
                </div>
                <div style={S.dashBigNumber}>₹12.5L</div>
                <div style={S.dashChange}>↑ 24% this month</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Counter */}
      <div ref={counterRef} style={S.counterWrap}>
        <span style={S.counterText}>03 / 06</span>
        <div style={S.counterBar}>
          <div style={S.counterFill} />
        </div>
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
    padding: "clamp(16px, 3vw, 36px) clamp(16px, 4vw, 56px)",
    overflow: "hidden",
    background: "linear-gradient(160deg, #FFFFFF 0%, #F4F7FB 40%, #EDF2F9 70%, #F8FAFC 100%)",
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
    paddingTop: "clamp(80px, 10vh, 120px)",
  },
  headerRow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "clamp(16px, 3vw, 36px) clamp(16px, 4vw, 56px)",
    zIndex: 20,
  },
  topRightWrap: {
    display: "flex",
    alignItems: "center",
    gap: 16,
  },
  topRightText: {
    fontFamily: "var(--font-mono)",
    fontSize: "clamp(12px, 1.1vw, 14px)",
    fontWeight: 500,
    color: "#64748B",
    letterSpacing: "0.05em",
  },
  bodyRow: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "clamp(20px, 4vw, 60px)",
    marginTop: "auto",
    marginBottom: "auto",
    flexWrap: "wrap",
  },
  leftCol: {
    flex: "1 1 400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    minWidth: 0,
  },
  sectionTag: {
    fontFamily: "var(--font-mono)",
    fontSize: "clamp(12px, 1.1vw, 14px)",
    fontWeight: 600,
    color: "#8B5CF6",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    marginBottom: 12,
  },
  taglineBanner: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "8px 18px",
    borderRadius: 100,
    background: "linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(59,130,246,0.06) 100%)",
    border: "1px solid rgba(139,92,246,0.15)",
    marginBottom: 20,
  },
  taglineDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #8B5CF6, #3B82F6)",
    flexShrink: 0,
  },
  taglineText: {
    fontFamily: "var(--font-mono)",
    fontSize: "clamp(11px, 1vw, 13px)",
    fontWeight: 600,
    color: "#7C3AED",
    letterSpacing: "0.08em",
    whiteSpace: "nowrap",
  },
  headline: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(32px, 4.2vw, 54px)",
    fontWeight: 700,
    color: "#0F172A",
    lineHeight: 1.08,
    letterSpacing: "-0.025em",
    marginBottom: 18,
  },
  headlineAccent: {
    background: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 35%, #3B82F6 70%, #06B6D4 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  description: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(13px, 1.3vw, 16px)",
    color: "#475569",
    lineHeight: 1.75,
    maxWidth: 480,
    marginBottom: 28,
    fontWeight: 400,
  },
  statsRow: {
    display: "flex",
    gap: "clamp(20px, 3vw, 40px)",
    marginBottom: 28,
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  statValue: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(28px, 3vw, 40px)",
    fontWeight: 700,
    background: "linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    lineHeight: 1.1,
  },
  statLabel: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(11px, 1vw, 13px)",
    color: "#64748B",
    fontWeight: 500,
  },
  previewRow: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  previewCard: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "10px 16px",
    borderRadius: 12,
    background: "rgba(255,255,255,0.9)",
    border: "1px solid rgba(0,0,0,0.04)",
    boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
    width: "fit-content",
  },
  previewIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  previewTextCol: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
  },
  previewTitle: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(12px, 1.1vw, 14px)",
    fontWeight: 600,
    color: "#0F172A",
    lineHeight: 1.3,
  },
  previewDesc: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(10px, 0.9vw, 12px)",
    color: "#64748B",
    lineHeight: 1.3,
  },

  /* RIGHT COLUMN */
  rightCol: {
    flex: "1 1 480px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    minHeight: 500,
  },
  orbitWrap: {
    position: "relative",
    width: "clamp(420px, 48vw, 620px)",
    height: "clamp(420px, 48vw, 620px)",
  },
  orbitRing: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "70%",
    height: "70%",
    borderRadius: "50%",
    border: "1.5px solid rgba(139,92,246,0.12)",
    boxShadow: "0 0 30px rgba(139,92,246,0.04), inset 0 0 30px rgba(139,92,246,0.02)",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
  },

  /* Lines layer */
  linesLayer: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    zIndex: 1,
  },
  connLine: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "35%",
    height: 1.5,
    background: "linear-gradient(90deg, rgba(139,92,246,0.3), rgba(139,92,246,0.05))",
    transformOrigin: "left center",
    borderRadius: 1,
  },

  /* Central hub */
  centerHub: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "clamp(120px, 14vw, 170px)",
    height: "clamp(120px, 14vw, 170px)",
    borderRadius: "50%",
    background: "linear-gradient(145deg, #0B1120 0%, #162032 50%, #0F172A 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    zIndex: 5,
    boxShadow: "0 25px 70px rgba(0,0,0,0.25), 0 0 60px rgba(139,92,246,0.18), 0 0 100px rgba(59,130,246,0.08)",
  },
  hubGlowRing: {
    position: "absolute",
    inset: -8,
    borderRadius: "50%",
    border: "2.5px solid rgba(139,92,246,0.5)",
    boxShadow: "0 0 30px rgba(139,92,246,0.4), 0 0 60px rgba(139,92,246,0.15), inset 0 0 20px rgba(139,92,246,0.1)",
    pointerEvents: "none",
  },
  hubPurpleRing: {
    position: "absolute",
    inset: -18,
    borderRadius: "50%",
    border: "1.5px solid rgba(59,130,246,0.2)",
    boxShadow: "0 0 15px rgba(59,130,246,0.1), inset 0 0 10px rgba(59,130,246,0.05)",
    pointerEvents: "none",
  },
  hubLogo: {
    width: 44,
    height: 44,
    objectFit: "contain",
    filter: "drop-shadow(0 0 15px rgba(139,92,246,0.5))",
  },
  hubText: {
    fontFamily: "var(--font-mono)",
    fontSize: "clamp(8px, 0.8vw, 11px)",
    fontWeight: 700,
    color: "#A78BFA",
    letterSpacing: "0.18em",
  },
  hubSubtext: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(7px, 0.7vw, 9px)",
    color: "rgba(167,139,250,0.6)",
    fontWeight: 400,
    letterSpacing: "0.1em",
  },

  /* Module cards */
  moduleCard: {
    position: "absolute",
    top: "50%",
    left: "50%",
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 14px",
    borderRadius: 14,
    background: "rgba(255,255,255,0.96)",
    border: "1px solid rgba(0,0,0,0.05)",
    boxShadow: "0 6px 20px rgba(0,0,0,0.06), 0 0 8px rgba(139,92,246,0.03)",
    backdropFilter: "blur(10px)",
    zIndex: 10,
    whiteSpace: "nowrap",
    cursor: "default",
    transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
  },
  moduleIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  moduleTextCol: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
    minWidth: 0,
  },
  moduleTitle: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(11px, 1vw, 13px)",
    fontWeight: 600,
    lineHeight: 1.3,
  },
  moduleDesc: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(9px, 0.8vw, 11px)",
    color: "#64748B",
    lineHeight: 1.3,
  },

  /* Floating dashboard cards */
  dashCard1: {
    position: "absolute",
    top: "8%",
    left: "5%",
    width: "clamp(130px, 14vw, 180px)",
    padding: "10px 12px",
    borderRadius: 12,
    background: "rgba(255,255,255,0.95)",
    border: "1px solid rgba(0,0,0,0.05)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
    zIndex: 8,
  },
  dashCard2: {
    position: "absolute",
    bottom: "10%",
    right: "3%",
    width: "clamp(130px, 14vw, 180px)",
    padding: "10px 12px",
    borderRadius: 12,
    background: "rgba(255,255,255,0.95)",
    border: "1px solid rgba(0,0,0,0.05)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
    zIndex: 8,
  },
  dashCardHeader: {
    display: "flex",
    alignItems: "center",
    gap: 5,
    marginBottom: 8,
  },
  dashDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
  },
  dashLabel: {
    fontFamily: "var(--font-sans)",
    fontSize: 10,
    color: "#94A3B8",
    fontWeight: 500,
    marginLeft: 4,
  },
  dashBarRow: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  dashBar: {
    height: 5,
    borderRadius: 3,
  },
  dashBigNumber: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(18px, 2vw, 24px)",
    fontWeight: 700,
    color: "#0F172A",
    lineHeight: 1.2,
  },
  dashChange: {
    fontFamily: "var(--font-sans)",
    fontSize: 10,
    color: "#10B981",
    fontWeight: 500,
    marginTop: 2,
  },

  /* Counter */
  counterWrap: {
    position: "absolute",
    bottom: 24,
    right: 44,
    display: "flex",
    alignItems: "center",
    gap: 12,
    zIndex: 10,
    pointerEvents: "none",
  },
  counterText: {
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    fontWeight: 500,
    color: "#94A3B8",
    letterSpacing: "0.1em",
  },
  counterBar: {
    width: 44,
    height: 3,
    borderRadius: 2,
    background: "rgba(139,92,246,0.12)",
    overflow: "hidden",
  },
  counterFill: {
    width: "50%",
    height: "100%",
    borderRadius: 2,
    background: "linear-gradient(90deg, #7C3AED, #8B5CF6)",
    boxShadow: "0 0 8px rgba(139,92,246,0.5)",
  },
};
