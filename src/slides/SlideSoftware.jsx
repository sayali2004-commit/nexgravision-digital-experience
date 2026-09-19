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
      const editor = comp.querySelector('.laptop-wrap');
      const techCards = comp.querySelectorAll('.info-card-el');

      if (editor) { gsap.set(editor, { opacity: 0, y: 40, scale: 0.9 }); tl.to(editor, { opacity: 1, y: 0, scale: 1, duration: 1.0, ease: "power3.out" }, 0.4); }
      if (techCards.length) { gsap.set(techCards, { opacity: 0, y: 15 }); tl.to(techCards, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power3.out" }, 0.7); }
    }

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

          {/* RIGHT COLUMN - Code Editor + Tech Stack Composition */}
          <div style={S.rightCol}>
            <div ref={compositionRef} style={S.composition}>
              <div style={S.bgBlob1} />
              <div style={S.bgBlob2} />

              {/* Code Editor Window */}
              <div className="laptop-wrap" style={S.codeEditorWrap}>
                <div style={S.editorTitleBar}>
                  <div style={S.editorDots}>
                    <div style={{ ...S.editorDot, background: "#FF5F57" }} />
                    <div style={{ ...S.editorDot, background: "#FEBC2E" }} />
                    <div style={{ ...S.editorDot, background: "#28C840" }} />
                  </div>
                  <div style={S.editorFileName}>app.tsx</div>
                  <div style={S.editorTabs}>
                    <div style={S.editorTab}>index.ts</div>
                    <div style={{ ...S.editorTab, background: "rgba(59,130,246,0.1)", color: "#3B82F6" }}>app.tsx</div>
                    <div style={S.editorTab}>styles.css</div>
                  </div>
                </div>
                <div style={S.editorBody}>
                  <div style={S.editorLineNums}>
                    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(n => (
                      <div key={n} style={S.lineNum}>{n}</div>
                    ))}
                  </div>
                  <div style={S.editorCode}>
                    <div style={S.codeLine}><span style={S.keyword}>import</span> <span style={S.string}>React</span> <span style={S.keyword}>from</span> <span style={S.string}>&apos;react&apos;</span>;</div>
                    <div style={S.codeLine}><span style={S.keyword}>import</span> <span style={S.component}>Dashboard</span> <span style={S.keyword}>from</span> <span style={S.string}>&apos;./components&apos;</span>;</div>
                    <div style={S.codeLine}>&nbsp;</div>
                    <div style={S.codeLine}><span style={S.keyword}>export default function</span> <span style={S.function}>App</span>() {'{'}</div>
                    <div style={S.codeLine}>&nbsp;&nbsp;<span style={S.keyword}>return</span> (</div>
                    <div style={S.codeLine}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={S.tag}>&lt;Layout&gt;</span></div>
                    <div style={S.codeLine}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={S.tag}>&lt;Sidebar</span> <span style={S.prop}>items</span>=<span style={S.string}>{`{menuItems}`}</span> <span style={S.tag}>/&gt;</span></div>
                    <div style={S.codeLine}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={S.tag}>&lt;MainContent&gt;</span></div>
                    <div style={{ ...S.codeLine, background: "rgba(59,130,246,0.08)", borderRadius: 3, padding: "1px 4px" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={S.tag}>&lt;Dashboard</span> <span style={S.prop}>metrics</span>=<span style={S.string}>{`{data}`}</span> <span style={S.tag}>/&gt;</span></div>
                    <div style={S.codeLine}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={S.tag}>&lt;/MainContent&gt;</span></div>
                    <div style={S.codeLine}>&nbsp;&nbsp;&nbsp;&nbsp;<span style={S.tag}>&lt;/Layout&gt;</span></div>
                    <div style={S.codeLine}>&nbsp;&nbsp;);</div>
                    <div style={S.codeLine}>{'}'}</div>
                  </div>
                </div>
                <div style={S.editorGlow} />
              </div>

              {/* Floating Tech Stack Icons */}
              <div className="info-card-el" style={S.techCard}>
                <div style={{ ...S.techIcon, background: "linear-gradient(135deg, #EFF6FF, #DBEAFE)", border: "1.5px solid rgba(59,130,246,0.2)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                </div>
                <div style={S.techTextCol}>
                  <div style={S.techLabel}>React & Next.js</div>
                  <div style={S.techDesc}>Modern Frontend</div>
                </div>
              </div>

              <div className="info-card-el" style={{ ...S.techCard, top: "5%", right: "0%" }}>
                <div style={{ ...S.techIcon, background: "linear-gradient(135deg, #F0FDF4, #DCFCE7)", border: "1.5px solid rgba(16,185,129,0.2)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
                </div>
                <div style={S.techTextCol}>
                  <div style={S.techLabel}>Cloud Deploy</div>
                  <div style={S.techDesc}>AWS & Azure</div>
                </div>
              </div>

              <div className="info-card-el" style={{ ...S.techCard, top: "38%", left: "-12%" }}>
                <div style={{ ...S.techIcon, background: "linear-gradient(135deg, #FFF7ED, #FFEDD5)", border: "1.5px solid rgba(249,115,22,0.2)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                </div>
                <div style={S.techTextCol}>
                  <div style={S.techLabel}>Mobile Apps</div>
                  <div style={S.techDesc}>iOS & Android</div>
                </div>
              </div>

              <div className="info-card-el" style={{ ...S.techCard, top: "38%", right: "-10%" }}>
                <div style={{ ...S.techIcon, background: "linear-gradient(135deg, #FDF2F8, #FCE7F3)", border: "1.5px solid rgba(236,72,153,0.2)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </div>
                <div style={S.techTextCol}>
                  <div style={S.techLabel}>Security First</div>
                  <div style={S.techDesc}>Enterprise Grade</div>
                </div>
              </div>

              <div className="info-card-el" style={{ ...S.techCard, bottom: "15%", left: "-5%" }}>
                <div style={{ ...S.techIcon, background: "linear-gradient(135deg, #F5F3FF, #EDE9FE)", border: "1.5px solid rgba(139,92,246,0.2)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4"/></svg>
                </div>
                <div style={S.techTextCol}>
                  <div style={S.techLabel}>API & Integrations</div>
                  <div style={S.techDesc}>Connect Everything</div>
                </div>
              </div>

              <div className="info-card-el" style={{ ...S.techCard, bottom: "15%", right: "-2%" }}>
                <div style={{ ...S.techIcon, background: "linear-gradient(135deg, #ECFEFF, #CFFAFE)", border: "1.5px solid rgba(6,182,212,0.2)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
                </div>
                <div style={S.techTextCol}>
                  <div style={S.techLabel}>Analytics</div>
                  <div style={S.techDesc}>Real-time Insights</div>
                </div>
              </div>

              {/* Floating code brackets */}
              <div className="info-card-el" style={S.floatBracket1}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(59,130,246,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
              </div>
              <div className="info-card-el" style={S.floatBracket2}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(139,92,246,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
              </div>
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
  codeEditorWrap: {
    position: "absolute",
    top: "15%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "clamp(300px, 32vw, 420px)",
    zIndex: 3,
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 25px 70px rgba(0,0,0,0.15), 0 0 50px rgba(59,130,246,0.1)",
    border: "1px solid rgba(255,255,255,0.2)",
  },
  editorTitleBar: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "10px 14px",
    background: "linear-gradient(180deg, #1E293B 0%, #0F172A 100%)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },
  editorDots: {
    display: "flex",
    gap: 6,
  },
  editorDot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
  },
  editorFileName: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    color: "#94A3B8",
    marginLeft: 8,
  },
  editorTabs: {
    display: "flex",
    gap: 2,
    marginLeft: "auto",
  },
  editorTab: {
    fontFamily: "var(--font-mono)",
    fontSize: 9,
    color: "#64748B",
    padding: "3px 8px",
    borderRadius: 4,
    background: "rgba(255,255,255,0.05)",
  },
  editorBody: {
    display: "flex",
    background: "linear-gradient(180deg, #0F172A 0%, #0B1120 100%)",
    padding: "12px 0",
    minHeight: "clamp(200px, 22vw, 280px)",
  },
  editorLineNums: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    padding: "0 12px",
    borderRight: "1px solid rgba(255,255,255,0.06)",
    minWidth: 36,
  },
  lineNum: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    color: "#475569",
    textAlign: "right",
    lineHeight: "18px",
  },
  editorCode: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    padding: "0 14px",
    flex: 1,
    overflow: "hidden",
  },
  codeLine: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    color: "#E2E8F0",
    lineHeight: "18px",
    whiteSpace: "nowrap",
  },
  keyword: { color: "#C084FC" },
  string: { color: "#34D399" },
  component: { color: "#60A5FA" },
  function: { color: "#FBBF24" },
  tag: { color: "#F87171" },
  prop: { color: "#7DD3FC" },
  editorGlow: {
    position: "absolute",
    bottom: "20%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "70%",
    height: 40,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)",
    filter: "blur(20px)",
    pointerEvents: "none",
    zIndex: 2,
  },
  techCard: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 14px",
    borderRadius: 12,
    background: "rgba(255,255,255,0.96)",
    border: "1px solid rgba(0,0,0,0.05)",
    boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
    backdropFilter: "blur(10px)",
    zIndex: 10,
    whiteSpace: "nowrap",
    cursor: "default",
    transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
    top: "5%",
    left: "0%",
  },
  techIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  techTextCol: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
  },
  techLabel: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(11px, 1vw, 13px)",
    fontWeight: 600,
    color: "#0F172A",
    lineHeight: 1.3,
  },
  techDesc: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(9px, 0.8vw, 11px)",
    color: "#64748B",
    lineHeight: 1.3,
  },
  floatBracket1: {
    position: "absolute",
    top: "25%",
    left: "8%",
    width: 44,
    height: 44,
    borderRadius: 12,
    background: "rgba(255,255,255,0.9)",
    border: "1px solid rgba(59,130,246,0.1)",
    boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 8,
  },
  floatBracket2: {
    position: "absolute",
    bottom: "25%",
    right: "5%",
    width: 38,
    height: 38,
    borderRadius: 10,
    background: "rgba(255,255,255,0.9)",
    border: "1px solid rgba(139,92,246,0.1)",
    boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 8,
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
