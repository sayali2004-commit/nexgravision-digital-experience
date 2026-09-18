import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { BrandLogo } from "../config/assets";

const MODULES = [
  {
    title: "Sales & CRM",
    desc: "Track leads, manage pipelines and close deals faster",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #3B82F6, #2563EB)",
    bgLight: "linear-gradient(135deg, #EFF6FF, #DBEAFE)",
    border: "rgba(59,130,246,0.12)",
  },
  {
    title: "HR & Payroll",
    desc: "Hire, manage and pay your entire team seamlessly",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
    bgLight: "linear-gradient(135deg, #F5F3FF, #EDE9FE)",
    border: "rgba(139,92,246,0.12)",
  },
  {
    title: "Finance",
    desc: "Invoicing, expenses and accounting in one place",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #10B981, #059669)",
    bgLight: "linear-gradient(135deg, #ECFDF5, #D1FAE5)",
    border: "rgba(16,185,129,0.12)",
  },
  {
    title: "Operations",
    desc: "Automate workflows and streamline daily tasks",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #F59E0B, #D97706)",
    bgLight: "linear-gradient(135deg, #FFFBEB, #FEF3C7)",
    border: "rgba(245,158,11,0.12)",
  },
  {
    title: "Marketing",
    desc: "Run campaigns and track performance with analytics",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #EC4899, #DB2777)",
    bgLight: "linear-gradient(135deg, #FDF2F8, #FCE7F3)",
    border: "rgba(236,72,153,0.12)",
  },
  {
    title: "Support",
    desc: "24/7 helpdesk, tickets and customer management",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" /><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #06B6D4, #0891B2)",
    bgLight: "linear-gradient(135deg, #ECFEFF, #CFFAFE)",
    border: "rgba(6,182,212,0.12)",
  },
];

const STATS = [
  { value: "10x", label: "Faster\nManagement" },
  { value: "60%", label: "Cost\nReduction" },
  { value: "1", label: "Platform\nfor All" },
];

export default function SlideWhyUs({ isActive }) {
  const logoRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const descRef = useRef(null);
  const statsRef = useRef(null);
  const modulesRef = useRef([]);
  const ctaRef = useRef(null);
  const mockupRef = useRef(null);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isActive || hasAnimated.current) return;
    hasAnimated.current = true;

    const tl = gsap.timeline({ delay: 0.15 });

    // Logo
    gsap.set(logoRef.current, { opacity: 0, y: -20 });
    tl.to(logoRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.05);

    // Tagline
    gsap.set(tagRef.current, { opacity: 0, x: -20 });
    tl.to(tagRef.current, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }, 0.1);

    // Headline
    gsap.set(headlineRef.current, { opacity: 0, y: 40, filter: "blur(8px)" });
    tl.to(headlineRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.0, ease: "power3.out" }, 0.2);

    // Description
    gsap.set(descRef.current, { opacity: 0, y: 20 });
    tl.to(descRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.4);

    // Stats
    if (statsRef.current) {
      gsap.set(statsRef.current.children, { opacity: 0, y: 20, scale: 0.9 });
      tl.to(statsRef.current.children, { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.4)" }, 0.55);
    }

    // CTA
    if (ctaRef.current) {
      gsap.set(ctaRef.current, { opacity: 0, y: 15 });
      tl.to(ctaRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0.7);
    }

    // Dashboard mockup
    if (mockupRef.current) {
      gsap.set(mockupRef.current, { opacity: 0, x: 30, filter: "blur(6px)" });
      tl.to(mockupRef.current, { opacity: 1, x: 0, filter: "blur(0px)", duration: 1.0, ease: "power3.out" }, 0.3);
    }

    // Module cards
    modulesRef.current.forEach((m, i) => {
      if (m) {
        gsap.set(m, { opacity: 0, y: 25, scale: 0.95 });
        tl.to(m, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out" }, 0.5 + i * 0.07);
      }
    });

    // Counter
    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 1.2);
  }, [isActive]);

  return (
    <div style={S.wrap}>
      {/* Background decorative elements */}
      <div style={S.bgGlow1} />
      <div style={S.bgGlow2} />
      <div style={S.bgGlow3} />

      {/* Header */}
      <div style={S.headerRow}>
        <div ref={logoRef}>
          <BrandLogo size={48} dark />
        </div>
        <div style={S.topRightWrap}>
          <span style={S.topRightText}>All-in-One Platform</span>
        </div>
      </div>

      <div style={S.container}>
        <div style={S.bodyRow}>
          {/* LEFT COLUMN */}
          <div style={S.leftCol}>
            {/* Tagline */}
            <div ref={tagRef} style={S.taglineWrap}>
              <div style={S.taglinePill}>
                <div style={S.taglineDot} />
                <span style={S.taglineText}>One Company • One Software • Endless Possibilities</span>
              </div>
            </div>

            {/* Headline */}
            <h2 ref={headlineRef} style={S.headline}>
              Why Manage <span style={S.headlineAccent}>10 Tools</span><br />
              When You Can Have<br />
              <span style={S.headlineAccent}>Just One?</span>
            </h2>

            {/* Description */}
            <p ref={descRef} style={S.description}>
              Most businesses waste time switching between different software for sales, HR, finance, operations and support. <strong style={{ color: "#0F172A" }}>NexGravision brings it all together</strong> — one company, one software, one dashboard — so your entire business runs smoothly from a single powerful platform.
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

            {/* CTA */}
            <div ref={ctaRef} style={S.ctaRow}>
              <div style={S.ctaBtn}>
                <span>Start Your Journey</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </div>
              <div style={S.ctaSubtext}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                <span style={{ color: "#64748B", fontSize: "clamp(11px, 1vw, 13px)" }}>No credit card required</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Laptop Mockup + Floating Modules */}
          <div style={S.rightCol}>
            <div style={S.composition}>
              {/* Background decorative clouds */}
              <div style={S.cloud1} />
              <div style={S.cloud2} />
              <div style={S.cloud3} />

              {/* Connection lines SVG */}
              <svg style={S.connLines} viewBox="0 0 600 500" fill="none">
                <path d="M300 200 Q300 100 180 60" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
                <path d="M300 200 Q380 120 500 80" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
                <path d="M300 220 Q200 240 60 220" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
                <path d="M320 220 Q420 240 560 230" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
                <path d="M300 280 Q220 380 100 420" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
                <path d="M300 280 Q380 380 480 430" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(99,102,241,0.3)" />
                    <stop offset="50%" stopColor="rgba(59,130,246,0.5)" />
                    <stop offset="100%" stopColor="rgba(99,102,241,0.3)" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Laptop mockup */}
              <div ref={mockupRef} style={S.laptopWrap}>
                <div style={S.laptopScreen}>
                  <div style={S.laptopScreenInner}>
                    {/* NexGravision header */}
                    <div style={S.dashHeader}>
                      <div style={S.dashLogoMark}>N</div>
                      <span style={S.dashLogoText}>NexGravision</span>
                      <div style={S.dashSearch}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                        <span style={S.dashSearchText}>Search anything...</span>
                      </div>
                    </div>
                    {/* Dashboard content */}
                    <div style={S.dashBody}>
                      <div style={S.dashSideNav}>
                        <div style={{ ...S.dashNavItem, background: "rgba(99,102,241,0.1)", color: "#6366F1" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                          Dashboard
                        </div>
                        <div style={S.dashNavItem}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /></svg>
                          Sales
                        </div>
                        <div style={S.dashNavItem}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
                          HR
                        </div>
                        <div style={S.dashNavItem}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /></svg>
                          Projects
                        </div>
                        <div style={S.dashNavItem}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                          Reports
                        </div>
                        <div style={S.dashNavItem}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4" /></svg>
                          Settings
                        </div>
                      </div>
                      <div style={S.dashMainArea}>
                        <div style={S.dashTitle}>Dashboard Overview</div>
                        <div style={S.dashMetricRow}>
                          <div style={S.dashMetricCard}>
                            <div style={{ ...S.dashMetricDot, background: "#3B82F6" }} />
                            <div style={S.dashMetricLabel}>Revenue</div>
                            <div style={S.dashMetricVal}>₹12.5L</div>
                            <div style={{ ...S.dashMetricChange, color: "#10B981" }}>↑ 12%</div>
                          </div>
                          <div style={S.dashMetricCard}>
                            <div style={{ ...S.dashMetricDot, background: "#10B981" }} />
                            <div style={S.dashMetricLabel}>Clients</div>
                            <div style={S.dashMetricVal}>50+</div>
                            <div style={{ ...S.dashMetricChange, color: "#10B981" }}>↑ 8%</div>
                          </div>
                          <div style={S.dashMetricCard}>
                            <div style={{ ...S.dashMetricDot, background: "#8B5CF6" }} />
                            <div style={S.dashMetricLabel}>Projects</div>
                            <div style={S.dashMetricVal}>100+</div>
                            <div style={{ ...S.dashMetricChange, color: "#10B981" }}>↑ 15%</div>
                          </div>
                        </div>
                        <div style={S.dashChartArea}>
                          <div style={S.dashChartBars}>
                            {[55, 40, 70, 50, 65, 80, 45, 60, 75, 55, 68, 82].map((h, i) => (
                              <div key={i} style={{ ...S.dashChartBar, height: `${h}%` }} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={S.laptopBase} />
                {/* Screen glow */}
                <div style={S.laptopGlow} />
              </div>

              {/* Plant pot */}
              <div style={S.plantWrap}>
                <div style={S.plantLeaf1} />
                <div style={S.plantLeaf2} />
                <div style={S.plantLeaf3} />
                <div style={S.plantStem} />
                <div style={S.plantPot} />
              </div>

              {/* Module cards - positioned around the laptop */}
              {MODULES.map((mod, i) => {
                const positions = [
                  { top: "2%", left: "22%" },
                  { top: "6%", right: "2%" },
                  { top: "38%", left: "-4%" },
                  { top: "38%", right: "-6%" },
                  { bottom: "8%", left: "2%" },
                  { bottom: "4%", right: "6%" },
                ];
                const pos = positions[i];
                const colors = ["#3B82F6", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B", "#06B6D4"];
                return (
                  <div
                    key={i}
                    ref={(el) => (modulesRef.current[i] = el)}
                    style={{ ...S.moduleCard, ...pos }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
                      e.currentTarget.style.boxShadow = "0 14px 36px rgba(0,0,0,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0) scale(1)";
                      e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.06)";
                    }}
                  >
                    <div style={{ ...S.moduleIcon, background: `${colors[i]}12`, border: `1.5px solid ${colors[i]}20` }}>
                      <div style={{ color: colors[i] }}>{mod.icon}</div>
                    </div>
                    <div style={S.moduleTextCol}>
                      <div style={{ ...S.moduleTitle, color: colors[i] }}>{mod.title}</div>
                      <div style={S.moduleDesc}>{mod.desc}</div>
                    </div>
                  </div>
                );
              })}
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
    background: "linear-gradient(160deg, #FFFFFF 0%, #F8FAFC 30%, #F1F5F9 60%, #F8FAFC 100%)",
  },
  bgGlow1: {
    position: "absolute",
    top: "-10%",
    right: "10%",
    width: "40%",
    height: "40%",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
    filter: "blur(60px)",
    pointerEvents: "none",
  },
  bgGlow2: {
    position: "absolute",
    bottom: "0%",
    left: "5%",
    width: "35%",
    height: "35%",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)",
    filter: "blur(50px)",
    pointerEvents: "none",
  },
  bgGlow3: {
    position: "absolute",
    top: "40%",
    left: "40%",
    width: "30%",
    height: "30%",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)",
    filter: "blur(40px)",
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

  /* LEFT COLUMN */
  leftCol: {
    flex: "1 1 400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    minWidth: 0,
  },
  taglineWrap: {
    marginBottom: 20,
  },
  taglinePill: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "7px 18px",
    borderRadius: 100,
    background: "linear-gradient(135deg, rgba(139,92,246,0.06) 0%, rgba(59,130,246,0.04) 100%)",
    border: "1px solid rgba(139,92,246,0.12)",
  },
  taglineDot: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #8B5CF6, #3B82F6)",
    flexShrink: 0,
  },
  taglineText: {
    fontFamily: "var(--font-mono)",
    fontSize: "clamp(10px, 0.95vw, 12px)",
    fontWeight: 600,
    color: "#7C3AED",
    letterSpacing: "0.08em",
    whiteSpace: "nowrap",
  },
  headline: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(30px, 3.8vw, 50px)",
    fontWeight: 700,
    color: "#0F172A",
    lineHeight: 1.1,
    letterSpacing: "-0.025em",
    marginBottom: 16,
  },
  headlineAccent: {
    background: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 35%, #3B82F6 70%, #06B6D4 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  description: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(13px, 1.2vw, 15px)",
    color: "#475569",
    lineHeight: 1.7,
    maxWidth: 460,
    marginBottom: 24,
    fontWeight: 400,
  },
  statsRow: {
    display: "flex",
    gap: "clamp(24px, 3vw, 44px)",
    marginBottom: 28,
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    padding: "12px 0",
    borderTop: "2px solid rgba(139,92,246,0.15)",
  },
  statValue: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(28px, 3.2vw, 42px)",
    fontWeight: 700,
    background: "linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    lineHeight: 1.1,
  },
  statLabel: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(11px, 0.95vw, 13px)",
    color: "#64748B",
    fontWeight: 500,
    lineHeight: 1.3,
    whiteSpace: "pre-line",
  },
  ctaRow: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  ctaBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "14px 30px",
    borderRadius: 12,
    background: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 40%, #3B82F6 100%)",
    color: "#FFFFFF",
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(13px, 1.2vw, 15px)",
    fontWeight: 600,
    cursor: "pointer",
    boxShadow: "0 8px 24px rgba(99,102,241,0.3)",
    transition: "all 0.3s ease",
    width: "fit-content",
  },
  ctaSubtext: {
    display: "flex",
    alignItems: "center",
    gap: 6,
  },

  /* RIGHT COLUMN */
  rightCol: {
    flex: "1 1 500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    minHeight: 500,
  },
  composition: {
    position: "relative",
    width: "clamp(420px, 48vw, 600px)",
    height: "clamp(420px, 48vw, 560px)",
  },
  connLines: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 1,
  },
  cloud1: {
    position: "absolute",
    top: "5%",
    right: "5%",
    width: 80,
    height: 40,
    borderRadius: 40,
    background: "rgba(255,255,255,0.6)",
    boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
    pointerEvents: "none",
  },
  cloud2: {
    position: "absolute",
    bottom: "15%",
    left: "0%",
    width: 60,
    height: 30,
    borderRadius: 30,
    background: "rgba(255,255,255,0.5)",
    boxShadow: "0 4px 16px rgba(0,0,0,0.02)",
    pointerEvents: "none",
  },
  cloud3: {
    position: "absolute",
    top: "50%",
    right: "-2%",
    width: 50,
    height: 25,
    borderRadius: 25,
    background: "rgba(255,255,255,0.4)",
    pointerEvents: "none",
  },

  /* Laptop mockup */
  laptopWrap: {
    position: "absolute",
    top: "22%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "clamp(260px, 30vw, 380px)",
    zIndex: 3,
  },
  laptopScreen: {
    width: "100%",
    borderRadius: "10px 10px 0 0",
    border: "3px solid #D1D5DB",
    borderBottom: "none",
    background: "#FFFFFF",
    overflow: "hidden",
    boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 0 40px rgba(99,102,241,0.08)",
  },
  laptopScreenInner: {
    display: "flex",
    flexDirection: "column",
    minHeight: "clamp(160px, 18vw, 220px)",
  },
  laptopBase: {
    width: "115%",
    height: 10,
    background: "linear-gradient(180deg, #D1D5DB 0%, #B8BCC4 100%)",
    borderRadius: "0 0 6px 6px",
    marginLeft: "-7.5%",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  laptopGlow: {
    position: "absolute",
    bottom: "15%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "80%",
    height: 40,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
    filter: "blur(20px)",
    pointerEvents: "none",
    zIndex: 2,
  },
  /* Dashboard header */
  dashHeader: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 12px",
    borderBottom: "1px solid rgba(0,0,0,0.06)",
    background: "#FAFBFC",
  },
  dashLogoMark: {
    width: 22,
    height: 22,
    borderRadius: 6,
    background: "linear-gradient(135deg, #6366F1, #3B82F6)",
    color: "#FFF",
    fontFamily: "var(--font-sans)",
    fontSize: 11,
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  dashLogoText: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(9px, 1vw, 12px)",
    fontWeight: 600,
    color: "#1E293B",
  },
  dashSearch: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    gap: 5,
    padding: "3px 8px",
    borderRadius: 6,
    background: "#F1F5F9",
    border: "1px solid rgba(0,0,0,0.06)",
  },
  dashSearchText: {
    fontFamily: "var(--font-sans)",
    fontSize: 9,
    color: "#94A3B8",
  },
  /* Dashboard body */
  dashBody: {
    display: "flex",
    flex: 1,
  },
  dashSideNav: {
    width: "clamp(70px, 8vw, 100px)",
    borderRight: "1px solid rgba(0,0,0,0.06)",
    padding: "6px 0",
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  dashNavItem: {
    display: "flex",
    alignItems: "center",
    gap: 5,
    padding: "5px 8px",
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(8px, 0.8vw, 10px)",
    color: "#64748B",
    cursor: "pointer",
    borderRadius: 4,
    margin: "0 4px",
  },
  dashMainArea: {
    flex: 1,
    padding: "8px 10px",
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  dashTitle: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(9px, 0.9vw, 11px)",
    fontWeight: 600,
    color: "#0F172A",
  },
  dashMetricRow: {
    display: "flex",
    gap: 6,
  },
  dashMetricCard: {
    flex: 1,
    padding: "5px 6px",
    borderRadius: 6,
    background: "#F8FAFC",
    border: "1px solid rgba(0,0,0,0.04)",
  },
  dashMetricDot: {
    width: 4,
    height: 4,
    borderRadius: "50%",
    marginBottom: 3,
  },
  dashMetricLabel: {
    fontFamily: "var(--font-sans)",
    fontSize: 7,
    color: "#94A3B8",
    marginBottom: 1,
  },
  dashMetricVal: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(10px, 1.1vw, 14px)",
    fontWeight: 700,
    color: "#0F172A",
  },
  dashMetricChange: {
    fontFamily: "var(--font-sans)",
    fontSize: 7,
    fontWeight: 500,
    marginTop: 1,
  },
  dashChartArea: {
    flex: 1,
    padding: "6px",
    borderRadius: 6,
    background: "#F8FAFC",
    border: "1px solid rgba(0,0,0,0.04)",
    display: "flex",
    alignItems: "flex-end",
  },
  dashChartBars: {
    display: "flex",
    alignItems: "flex-end",
    gap: 3,
    width: "100%",
    height: "100%",
  },
  dashChartBar: {
    flex: 1,
    borderRadius: 2,
    background: "linear-gradient(180deg, rgba(99,102,241,0.5) 0%, rgba(59,130,246,0.35) 100%)",
    minWidth: 4,
  },

  /* Plant pot */
  plantWrap: {
    position: "absolute",
    bottom: "14%",
    left: "8%",
    zIndex: 4,
  },
  plantPot: {
    width: 28,
    height: 22,
    background: "linear-gradient(180deg, #D4A574 0%, #B8865A 100%)",
    borderRadius: "0 0 6px 6px",
    margin: "0 auto",
  },
  plantStem: {
    width: 3,
    height: 16,
    background: "#16A34A",
    margin: "0 auto",
    borderRadius: 2,
  },
  plantLeaf1: {
    width: 14,
    height: 18,
    background: "#22C55E",
    borderRadius: "50% 0 50% 0",
    position: "absolute",
    top: -20,
    left: "50%",
    transform: "translateX(-50%) rotate(-15deg)",
  },
  plantLeaf2: {
    width: 12,
    height: 16,
    background: "#16A34A",
    borderRadius: "0 50% 0 50%",
    position: "absolute",
    top: -16,
    left: "25%",
    transform: "rotate(20deg)",
  },
  plantLeaf3: {
    width: 12,
    height: 16,
    background: "#4ADE80",
    borderRadius: "50% 0 50% 0",
    position: "absolute",
    top: -14,
    left: "65%",
    transform: "rotate(-25deg)",
  },

  /* Module cards */
  moduleCard: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 14px",
    borderRadius: 14,
    background: "rgba(255,255,255,0.96)",
    border: "1px solid rgba(0,0,0,0.05)",
    boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
    backdropFilter: "blur(10px)",
    zIndex: 10,
    whiteSpace: "nowrap",
    cursor: "default",
    transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
  },
  moduleIcon: {
    width: 38,
    height: 38,
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
