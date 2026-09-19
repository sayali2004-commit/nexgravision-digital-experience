import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import { BrandLogo } from "../config/assets";

const data = SLIDES[1];

const FEATURES = [
  { icon: "code", title: "Custom Software", subtitle: "Tailored to your needs" },
  { icon: "cloud", title: "Cloud & Web", subtitle: "Secure & Scalable" },
  { icon: "mobile", title: "Mobile Apps", subtitle: "iOS & Android" },
  { icon: "pen", title: "UI/UX Design", subtitle: "Beautiful & Effective" },
  { icon: "headset", title: "Ongoing Support", subtitle: "Always with you" },
  { icon: "chart", title: "Digital Transform", subtitle: "Smarter tomorrow" },
];

const MODULES = [
  {
    title: "Sales & CRM",
    desc: "Track leads, manage pipelines and close deals faster",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    color: "#3B82F6",
  },
  {
    title: "HR & Payroll",
    desc: "Hire, manage and pay your entire team seamlessly",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    color: "#8B5CF6",
  },
  {
    title: "Finance",
    desc: "Invoicing, expenses and accounting in one place",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    color: "#10B981",
  },
  {
    title: "Operations",
    desc: "Automate workflows and streamline daily tasks",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4" />
      </svg>
    ),
    color: "#F59E0B",
  },
  {
    title: "Marketing",
    desc: "Run campaigns and track performance with analytics",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    color: "#EC4899",
  },
  {
    title: "Support",
    desc: "24/7 helpdesk, tickets and customer management",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" /><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
    color: "#06B6D4",
  },
];

const featureIcons = {
  code: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
  cloud: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
  mobile: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
  pen: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
  headset: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>,
  chart: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
};

export default function SlideSoftware({ isActive }) {
  const logoRef = useRef(null);
  const topRightRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const descRef = useRef(null);
  const featuresRef = useRef(null);
  const compositionRef = useRef(null);
  const modulesRef = useRef([]);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isActive || hasAnimated.current) return;
    hasAnimated.current = true;

    const tl = gsap.timeline({ delay: 0.15 });

    gsap.set(logoRef.current, { opacity: 0, y: -20 });
    tl.to(logoRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.05);

    gsap.set(topRightRef.current, { opacity: 0, x: 20 });
    tl.to(topRightRef.current, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }, 0.1);

    gsap.set(tagRef.current, { opacity: 0, x: -20 });
    tl.to(tagRef.current, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }, 0.15);

    gsap.set(headlineRef.current, { opacity: 0, y: 35, filter: "blur(8px)" });
    tl.to(headlineRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.0, ease: "power3.out" }, 0.25);

    gsap.set(descRef.current, { opacity: 0, y: 20 });
    tl.to(descRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.45);

    if (featuresRef.current) {
      gsap.set(featuresRef.current.children, { opacity: 0, y: 20 });
      tl.to(featuresRef.current.children, { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power3.out" }, 0.55);
    }

    const comp = compositionRef.current;
    if (comp) {
      const laptop = comp.querySelector('.laptop-wrap');
      if (laptop) { gsap.set(laptop, { opacity: 0, y: 40, scale: 0.9 }); tl.to(laptop, { opacity: 1, y: 0, scale: 1, duration: 1.0, ease: "power3.out" }, 0.4); }
    }

    modulesRef.current.forEach((m, i) => {
      if (m) {
        gsap.set(m, { opacity: 0, y: 20, scale: 0.95 });
        tl.to(m, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out" }, 0.6 + i * 0.07);
      }
    });

    gsap.set(counterRef.current, { opacity: 0 });
    tl.to(counterRef.current, { opacity: 1, duration: 0.5 }, 1.2);
  }, [isActive]);

  return (
    <div style={S.wrap}>
      <div style={S.headerRow}>
        <div ref={logoRef}>
          <BrandLogo size={48} dark />
        </div>
        <div ref={topRightRef} style={S.topRightWrap}>
          <span style={S.topRightText}>Smart Software</span>
          <div style={S.topRightDivider} />
          <span style={S.topRightText}>Better Business</span>
        </div>
      </div>

      <div style={S.container}>
        <div style={S.bodyRow}>
          {/* LEFT COLUMN */}
          <div style={S.leftCol}>
            <div ref={tagRef} style={S.sectionTag}>OUR SOFTWARE</div>
            <h2 ref={headlineRef} style={S.headline}>
              What We Give<br />
              Our <span style={S.headlineAccent}>Customers</span>
            </h2>
            <p ref={descRef} style={S.description}>
              We build custom, scalable and user-friendly software solutions that solve real problems. Our technology helps businesses save time, reduce costs and achieve more.
            </p>

            <div ref={featuresRef} style={S.featuresGrid}>
              {FEATURES.map((feat, i) => (
                <div
                  key={i}
                  style={S.featureCard}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(59,130,246,0.12)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)"; }}
                >
                  <div style={S.featureIconCircle}>{featureIcons[feat.icon]}</div>
                  <div style={S.featureTextCol}>
                    <div style={S.featureTitle}>{feat.title}</div>
                    <div style={S.featureSubtitle}>{feat.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - Dashboard Laptop + Floating Modules */}
          <div style={S.rightCol}>
            <div ref={compositionRef} style={S.composition}>
              <div style={S.bgBlob1} />
              <div style={S.bgBlob2} />

              {/* Connection lines */}
              <svg style={S.connLines} viewBox="0 0 600 500" fill="none">
                <path d="M300 200 Q300 100 180 60" stroke="url(#lineGrad2)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
                <path d="M300 200 Q380 120 500 80" stroke="url(#lineGrad2)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
                <path d="M300 220 Q200 240 60 220" stroke="url(#lineGrad2)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
                <path d="M320 220 Q420 240 560 230" stroke="url(#lineGrad2)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
                <path d="M300 280 Q220 380 100 420" stroke="url(#lineGrad2)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
                <path d="M300 280 Q380 380 480 430" stroke="url(#lineGrad2)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
                <defs>
                  <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(59,130,246,0.2)" />
                    <stop offset="50%" stopColor="rgba(59,130,246,0.4)" />
                    <stop offset="100%" stopColor="rgba(59,130,246,0.2)" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Laptop with Dashboard */}
              <div className="laptop-wrap" style={S.laptopWrap}>
                <div style={S.laptopScreen}>
                  <div style={S.laptopScreenInner}>
                    <div style={S.dashHeader}>
                      <div style={S.dashLogoMark}>N</div>
                      <span style={S.dashLogoText}>NexGravision</span>
                      <div style={S.dashSearch}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                        <span style={S.dashSearchText}>Search anything...</span>
                      </div>
                    </div>
                    <div style={S.dashBody}>
                      <div style={S.dashSideNav}>
                        <div style={{ ...S.dashNavItem, background: "rgba(99,102,241,0.1)", color: "#6366F1" }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                          Dashboard
                        </div>
                        <div style={S.dashNavItem}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /></svg>
                          Sales
                        </div>
                        <div style={S.dashNavItem}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
                          HR
                        </div>
                        <div style={S.dashNavItem}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /></svg>
                          Projects
                        </div>
                        <div style={S.dashNavItem}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                          Reports
                        </div>
                        <div style={S.dashNavItem}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4" /></svg>
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
                <div style={S.laptopGlow} />
              </div>

              {/* Plant */}
              <div style={S.plantWrap}>
                <div style={S.plantLeaf1} />
                <div style={S.plantLeaf2} />
                <div style={S.plantLeaf3} />
                <div style={S.plantStem} />
                <div style={S.plantPot} />
              </div>

              {/* Module cards */}
              {MODULES.map((mod, i) => {
                const positions = [
                  { top: "-2%", left: "0%" },
                  { top: "-4%", right: "-10%" },
                  { top: "35%", left: "-18%" },
                  { top: "35%", right: "-16%" },
                  { bottom: "12%", left: "-8%" },
                  { bottom: "12%", right: "-4%" },
                ];
                return (
                  <div
                    key={i}
                    ref={(el) => (modulesRef.current[i] = el)}
                    style={{ ...S.moduleCard, ...positions[i] }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px) scale(1.02)"; e.currentTarget.style.boxShadow = "0 14px 36px rgba(0,0,0,0.1)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.06)"; }}
                  >
                    <div style={{ ...S.moduleIcon, background: `${mod.color}12`, border: `1.5px solid ${mod.color}20` }}>
                      <div style={{ color: mod.color }}>{mod.icon}</div>
                    </div>
                    <div style={S.moduleTextCol}>
                      <div style={{ ...S.moduleTitle, color: mod.color }}>{mod.title}</div>
                      <div style={S.moduleDesc}>{mod.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div ref={counterRef} style={S.counterWrap}>
        <span style={S.counterText}>02 / 06</span>
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
  topRightDivider: {
    width: 2,
    height: 16,
    background: "rgba(0,180,216,0.3)",
    borderRadius: 1,
  },
  bodyRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "clamp(20px, 3vw, 48px)",
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
    maxWidth: 460,
  },
  sectionTag: {
    fontFamily: "var(--font-mono)",
    fontSize: "clamp(11px, 1vw, 13px)",
    fontWeight: 600,
    color: "#3B82F6",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    marginBottom: 10,
  },
  headline: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(26px, 3.2vw, 42px)",
    fontWeight: 700,
    color: "#0F172A",
    lineHeight: 1.1,
    letterSpacing: "-0.025em",
    marginBottom: 14,
  },
  headlineAccent: {
    background: "linear-gradient(135deg, #7C3AED 0%, #6366F1 35%, #3B82F6 70%, #00B4D8 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  description: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(12px, 1.1vw, 14px)",
    color: "#475569",
    lineHeight: 1.7,
    maxWidth: 420,
    marginBottom: 24,
    fontWeight: 400,
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "clamp(8px, 1vw, 12px)",
    width: "100%",
  },
  featureCard: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "clamp(12px, 1.2vw, 16px)",
    borderRadius: 12,
    background: "rgba(255,255,255,0.85)",
    border: "1px solid rgba(59,130,246,0.08)",
    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
    transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
    cursor: "default",
  },
  featureIconCircle: {
    width: 44,
    height: 44,
    minWidth: 44,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #EFF8FF 0%, #DBEAFE 100%)",
    border: "1px solid rgba(59,130,246,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  featureTextCol: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
    minWidth: 0,
  },
  featureTitle: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(12px, 1.1vw, 14px)",
    fontWeight: 600,
    color: "#0F172A",
    lineHeight: 1.3,
  },
  featureSubtitle: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(10px, 0.9vw, 12px)",
    color: "#64748B",
    lineHeight: 1.4,
  },
  rightCol: {
    flex: "1 1 520px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    minHeight: 520,
  },
  composition: {
    position: "relative",
    width: "clamp(480px, 52vw, 650px)",
    height: "clamp(480px, 52vw, 600px)",
  },
  connLines: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 1,
  },
  bgBlob1: {
    position: "absolute",
    top: "5%",
    right: "5%",
    width: "55%",
    height: "50%",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
    filter: "blur(40px)",
    pointerEvents: "none",
    zIndex: 0,
  },
  bgBlob2: {
    position: "absolute",
    bottom: "10%",
    left: "10%",
    width: "45%",
    height: "45%",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)",
    filter: "blur(35px)",
    pointerEvents: "none",
    zIndex: 0,
  },
  laptopWrap: {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "clamp(260px, 28vw, 360px)",
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
    bottom: "12%",
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
  dashHeader: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "6px 10px",
    borderBottom: "1px solid rgba(0,0,0,0.06)",
    background: "#FAFBFC",
  },
  dashLogoMark: {
    width: 20,
    height: 20,
    borderRadius: 5,
    background: "linear-gradient(135deg, #6366F1, #3B82F6)",
    color: "#FFF",
    fontFamily: "var(--font-sans)",
    fontSize: 10,
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  dashLogoText: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(8px, 0.9vw, 11px)",
    fontWeight: 600,
    color: "#1E293B",
  },
  dashSearch: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    gap: 4,
    padding: "2px 6px",
    borderRadius: 5,
    background: "#F1F5F9",
    border: "1px solid rgba(0,0,0,0.06)",
  },
  dashSearchText: {
    fontFamily: "var(--font-sans)",
    fontSize: 8,
    color: "#94A3B8",
  },
  dashBody: {
    display: "flex",
    flex: 1,
  },
  dashSideNav: {
    width: "clamp(65px, 7vw, 90px)",
    borderRight: "1px solid rgba(0,0,0,0.06)",
    padding: "5px 0",
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  dashNavItem: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    padding: "4px 6px",
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(7px, 0.7vw, 9px)",
    color: "#64748B",
    cursor: "pointer",
    borderRadius: 4,
    margin: "0 3px",
  },
  dashMainArea: {
    flex: 1,
    padding: "6px 8px",
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  dashTitle: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(8px, 0.8vw, 10px)",
    fontWeight: 600,
    color: "#0F172A",
  },
  dashMetricRow: {
    display: "flex",
    gap: 5,
  },
  dashMetricCard: {
    flex: 1,
    padding: "4px 5px",
    borderRadius: 5,
    background: "#F8FAFC",
    border: "1px solid rgba(0,0,0,0.04)",
  },
  dashMetricDot: {
    width: 4,
    height: 4,
    borderRadius: "50%",
    marginBottom: 2,
  },
  dashMetricLabel: {
    fontFamily: "var(--font-sans)",
    fontSize: 6,
    color: "#94A3B8",
    marginBottom: 1,
  },
  dashMetricVal: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(9px, 1vw, 13px)",
    fontWeight: 700,
    color: "#0F172A",
  },
  dashMetricChange: {
    fontFamily: "var(--font-sans)",
    fontSize: 6,
    fontWeight: 500,
    marginTop: 1,
  },
  dashChartArea: {
    flex: 1,
    padding: "5px",
    borderRadius: 5,
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
    minWidth: 3,
  },
  plantWrap: {
    position: "absolute",
    bottom: "18%",
    left: "4%",
    zIndex: 4,
  },
  plantPot: {
    width: 36,
    height: 28,
    background: "linear-gradient(180deg, #D4A574 0%, #B8865A 100%)",
    borderRadius: "0 0 7px 7px",
    margin: "0 auto",
  },
  plantStem: {
    width: 3,
    height: 20,
    background: "#16A34A",
    margin: "0 auto",
    borderRadius: 2,
  },
  plantLeaf1: {
    width: 16,
    height: 22,
    background: "#22C55E",
    borderRadius: "50% 0 50% 0",
    position: "absolute",
    top: -24,
    left: "50%",
    transform: "translateX(-50%) rotate(-15deg)",
  },
  plantLeaf2: {
    width: 14,
    height: 20,
    background: "#16A34A",
    borderRadius: "0 50% 0 50%",
    position: "absolute",
    top: -20,
    left: "25%",
    transform: "rotate(20deg)",
  },
  plantLeaf3: {
    width: 14,
    height: 20,
    background: "#4ADE80",
    borderRadius: "50% 0 50% 0",
    position: "absolute",
    top: -18,
    left: "65%",
    transform: "rotate(-25deg)",
  },
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
    width: 36,
    height: 36,
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
    background: "rgba(59,130,246,0.12)",
    overflow: "hidden",
  },
  counterFill: {
    width: "33%",
    height: "100%",
    borderRadius: 2,
    background: "linear-gradient(90deg, #2563EB, #3B82F6)",
    boxShadow: "0 0 8px rgba(59,130,246,0.5)",
  },
};
