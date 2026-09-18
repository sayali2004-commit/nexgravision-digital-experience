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

          {/* RIGHT COLUMN - Dashboard Mockup + Modules */}
          <div style={S.rightCol}>
            {/* Dashboard mockup */}
            <div ref={mockupRef} style={S.mockupWrap}>
              {/* Dashboard frame */}
              <div style={S.dashFrame}>
                {/* Top bar */}
                <div style={S.dashTopBar}>
                  <div style={S.dashDots}>
                    <div style={{ ...S.dashDot, background: "#EF4444" }} />
                    <div style={{ ...S.dashDot, background: "#F59E0B" }} />
                    <div style={{ ...S.dashDot, background: "#22C55E" }} />
                  </div>
                  <div style={S.dashUrl}>nexgravision.com/dashboard</div>
                </div>
                {/* Content */}
                <div style={S.dashContent}>
                  {/* Sidebar */}
                  <div style={S.dashSidebar}>
                    <div style={S.sidebarItem}>
                      <div style={{ ...S.sidebarIcon, background: "rgba(59,130,246,0.15)" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                      </div>
                    </div>
                    <div style={S.sidebarItem}>
                      <div style={{ ...S.sidebarIcon, background: "rgba(139,92,246,0.15)" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
                      </div>
                    </div>
                    <div style={S.sidebarItem}>
                      <div style={{ ...S.sidebarIcon, background: "rgba(16,185,129,0.15)" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                      </div>
                    </div>
                    <div style={S.sidebarItem}>
                      <div style={{ ...S.sidebarIcon, background: "rgba(236,72,153,0.15)" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                      </div>
                    </div>
                  </div>
                  {/* Main area */}
                  <div style={S.dashMain}>
                    <div style={S.dashMainHeader}>
                      <div style={S.dashMainTitle}>Dashboard Overview</div>
                      <div style={S.dashMainBadge}>Live</div>
                    </div>
                    {/* Metric cards */}
                    <div style={S.dashMetrics}>
                      <div style={S.dashMetric}>
                        <div style={{ ...S.metricDot, background: "#3B82F6" }} />
                        <div style={S.metricLabel}>Revenue</div>
                        <div style={S.metricValue}>₹12.5L</div>
                      </div>
                      <div style={S.dashMetric}>
                        <div style={{ ...S.metricDot, background: "#10B981" }} />
                        <div style={S.metricLabel}>Clients</div>
                        <div style={S.metricValue}>50+</div>
                      </div>
                      <div style={S.dashMetric}>
                        <div style={{ ...S.metricDot, background: "#8B5CF6" }} />
                        <div style={S.metricLabel}>Projects</div>
                        <div style={S.metricValue}>100+</div>
                      </div>
                    </div>
                    {/* Chart placeholder */}
                    <div style={S.dashChart}>
                      <div style={S.chartBars}>
                        {[65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 72, 88].map((h, i) => (
                          <div key={i} style={{ ...S.chartBar, height: `${h}%` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Module cards - positioned around the mockup */}
            {MODULES.map((mod, i) => {
              const positions = [
                { top: "-2%", right: "0%" },
                { top: "18%", right: "-8%" },
                { bottom: "35%", right: "-5%" },
                { bottom: "12%", right: "2%" },
                { bottom: "12%", left: "2%" },
                { bottom: "35%", left: "-5%" },
              ];
              const pos = positions[i];
              return (
                <div
                  key={i}
                  ref={(el) => (modulesRef.current[i] = el)}
                  style={{ ...S.moduleCard, ...pos }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = `0 12px 32px ${mod.border}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = `0 4px 16px rgba(0,0,0,0.04)`;
                  }}
                >
                  <div style={{ ...S.moduleIcon, background: mod.bgLight, color: mod.gradient.includes("#3B82F6") ? "#3B82F6" : mod.gradient.includes("#8B5CF6") ? "#8B5CF6" : mod.gradient.includes("#10B981") ? "#10B981" : mod.gradient.includes("#F59E0B") ? "#F59E0B" : mod.gradient.includes("#EC4899") ? "#EC4899" : "#06B6D4" }}>
                    {mod.icon}
                  </div>
                  <div style={S.moduleTextCol}>
                    <div style={{ ...S.moduleTitle, color: mod.gradient.includes("#3B82F6") ? "#2563EB" : mod.gradient.includes("#8B5CF6") ? "#7C3AED" : mod.gradient.includes("#10B981") ? "#059669" : mod.gradient.includes("#F59E0B") ? "#D97706" : mod.gradient.includes("#EC4899") ? "#DB2777" : "#0891B2" }}>
                      {mod.title}
                    </div>
                    <div style={S.moduleDesc}>{mod.desc}</div>
                  </div>
                </div>
              );
            })}
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
    minHeight: 480,
  },

  /* Dashboard mockup */
  mockupWrap: {
    position: "relative",
    width: "clamp(340px, 38vw, 480px)",
    zIndex: 2,
  },
  dashFrame: {
    borderRadius: 14,
    border: "1px solid rgba(0,0,0,0.08)",
    background: "#FFFFFF",
    boxShadow: "0 20px 60px rgba(0,0,0,0.08), 0 0 40px rgba(139,92,246,0.05)",
    overflow: "hidden",
  },
  dashTopBar: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "10px 14px",
    background: "#F8FAFC",
    borderBottom: "1px solid rgba(0,0,0,0.05)",
  },
  dashDots: {
    display: "flex",
    gap: 5,
  },
  dashDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
  },
  dashUrl: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    color: "#94A3B8",
    background: "#FFFFFF",
    padding: "3px 10px",
    borderRadius: 6,
    border: "1px solid rgba(0,0,0,0.05)",
    flex: 1,
  },
  dashContent: {
    display: "flex",
    minHeight: 240,
  },
  dashSidebar: {
    width: 48,
    background: "#F8FAFC",
    borderRight: "1px solid rgba(0,0,0,0.05)",
    padding: "10px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
  },
  sidebarItem: {
    padding: "6px",
  },
  sidebarIcon: {
    width: 30,
    height: 30,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  dashMain: {
    flex: 1,
    padding: "12px 14px",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  dashMainHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dashMainTitle: {
    fontFamily: "var(--font-sans)",
    fontSize: 12,
    fontWeight: 600,
    color: "#0F172A",
  },
  dashMainBadge: {
    fontFamily: "var(--font-mono)",
    fontSize: 9,
    fontWeight: 600,
    color: "#10B981",
    background: "#ECFDF5",
    padding: "2px 8px",
    borderRadius: 10,
    border: "1px solid rgba(16,185,129,0.2)",
  },
  dashMetrics: {
    display: "flex",
    gap: 8,
  },
  dashMetric: {
    flex: 1,
    padding: "8px 10px",
    borderRadius: 8,
    background: "#F8FAFC",
    border: "1px solid rgba(0,0,0,0.04)",
  },
  metricDot: {
    width: 5,
    height: 5,
    borderRadius: "50%",
    marginBottom: 4,
  },
  metricLabel: {
    fontFamily: "var(--font-sans)",
    fontSize: 9,
    color: "#94A3B8",
    marginBottom: 2,
  },
  metricValue: {
    fontFamily: "var(--font-sans)",
    fontSize: 14,
    fontWeight: 700,
    color: "#0F172A",
  },
  dashChart: {
    flex: 1,
    padding: "8px",
    borderRadius: 8,
    background: "#F8FAFC",
    border: "1px solid rgba(0,0,0,0.04)",
    display: "flex",
    alignItems: "flex-end",
  },
  chartBars: {
    display: "flex",
    alignItems: "flex-end",
    gap: 4,
    width: "100%",
    height: "100%",
  },
  chartBar: {
    flex: 1,
    borderRadius: 3,
    background: "linear-gradient(180deg, rgba(139,92,246,0.4) 0%, rgba(59,130,246,0.3) 100%)",
    minWidth: 6,
  },

  /* Module cards - floating around the mockup */
  moduleCard: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 14px",
    borderRadius: 12,
    background: "rgba(255,255,255,0.96)",
    border: "1px solid rgba(0,0,0,0.05)",
    boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
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
    fontSize: "clamp(12px, 1.05vw, 14px)",
    fontWeight: 600,
    lineHeight: 1.3,
  },
  moduleDesc: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(10px, 0.85vw, 11px)",
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
