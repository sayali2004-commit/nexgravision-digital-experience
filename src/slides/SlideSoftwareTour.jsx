import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { BrandLogo } from "../config/assets";

const MODULES = [
  {
    id: "sales",
    title: "Sales & CRM",
    description: "Capture leads, nurture pipelines and close revenue faster.",
    examples: ["Lead capture", "Pipeline control", "Deal acceleration"],
  },
  {
    id: "hr",
    title: "People & Payroll",
    description: "Recruit, manage and compensate your entire team from one hub.",
    examples: ["Recruitment", "Team management", "Payroll runs"],
  },
  {
    id: "projects",
    title: "Projects",
    description: "Keep delivery work visible and aligned with every business function.",
    examples: ["Delivery boards", "Project health", "Team dashboards"],
  },
  {
    id: "finance",
    title: "Finance",
    description: "Control invoicing, expenses and accounting in one financial core.",
    examples: ["Invoicing", "Expense control", "Accounting"],
  },
  {
    id: "operations",
    title: "Operations",
    description: "Automate workflows and remove friction from daily execution.",
    examples: ["Workflow automation", "Task queues", "Ops control"],
  },
  {
    id: "marketing",
    title: "Marketing",
    description: "Launch campaigns and measure impact with real analytics.",
    examples: ["Campaigns", "Performance", "Insights"],
  },
  {
    id: "support",
    title: "Support",
    description: "Run helpdesks, tickets and customer care at enterprise quality.",
    examples: ["Helpdesk", "Ticketing", "Customer care"],
  },
  {
    id: "reports",
    title: "Reports",
    description: "Turn operational data into clear, decision-ready reporting.",
    examples: ["Executive views", "Reports", "Live dashboards"],
  },
];

const ICONS = {
  sales: <><path d="m3 17 6-6 4 4 8-9" /><path d="M15 6h6v6" /></>,
  hr: <><circle cx="9" cy="8" r="3" /><path d="M3 20v-1a6 6 0 0 1 12 0v1" /><path d="M17 8h4M19 6v4" /></>,
  projects: <><path d="M3 7h7l2 2h9v10H3z" /><path d="M3 7V5h7l2 2" /></>,
  finance: <><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></>,
  operations: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5v.1h-4v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-2.8-2.8.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3v-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1L7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5V3h4v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 2.8 2.8-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.1v4h-.1a1.7 1.7 0 0 0-1.5 1z" /></>,
  marketing: <><path d="M3 11v2a2 2 0 0 0 2 2h2l9 5V4l-9 5H5a2 2 0 0 0-2 2Z" /><path d="m7 15 2 6h4l-3-4" /><path d="M19 9a4 4 0 0 1 0 6" /></>,
  support: <><path d="M3 13v-1a9 9 0 0 1 18 0v1" /><path d="M3 13h3v6H5a2 2 0 0 1-2-2zM21 13h-3v6h1a2 2 0 0 0 2-2z" /><path d="M18 19a6 6 0 0 1-6 3" /></>,
  reports: <><path d="M4 19V5" /><path d="M4 19h17" /><path d="M8 15v-4M13 15V8M18 15V5" /></>,
};

function ModuleIcon({ name }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {ICONS[name]}
    </svg>
  );
}

export default function SlideSoftwareTour({ isActive }) {
  const [activeId, setActiveId] = useState(MODULES[0].id);
  const rootRef = useRef(null);
  const headingRef = useRef(null);
  const moduleListRef = useRef(null);
  const previewRef = useRef(null);
  const hasAnimated = useRef(false);
  const lastActiveId = useRef(activeId);
  const selected = MODULES.find((module) => module.id === activeId) || MODULES[0];

  useEffect(() => {
    if (!isActive || hasAnimated.current) return;
    hasAnimated.current = true;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const timeline = gsap.timeline({ delay: 0.12 });
    timeline.fromTo(headingRef.current, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" });
    timeline.fromTo(moduleListRef.current?.children || [], { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.36, stagger: 0.045, ease: "power2.out" }, "-=0.25");
    timeline.fromTo(previewRef.current, { opacity: 0, x: 18 }, { opacity: 1, x: 0, duration: 0.5, ease: "power3.out" }, "-=0.28");
  }, [isActive]);

  useEffect(() => {
    if (!isActive || lastActiveId.current === activeId) return;
    lastActiveId.current = activeId;
    if (!hasAnimated.current || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const details = previewRef.current?.querySelectorAll(".software-tour__detail > *");
    const examples = previewRef.current?.querySelectorAll(".software-tour__example");
    const timeline = gsap.timeline();
    timeline.fromTo(details, { opacity: 0, y: 9 }, { opacity: 1, y: 0, duration: 0.28, stagger: 0.045, ease: "power2.out" });
    timeline.fromTo(examples, { opacity: 0, x: 10 }, { opacity: 1, x: 0, duration: 0.24, stagger: 0.055, ease: "power2.out" }, "-=0.12");
  }, [activeId, isActive]);

  return (
    <section ref={rootRef} className="software-tour-slide" data-slide-scroll aria-label="Product tour">
      <div className="software-tour__glow software-tour__glow--one" />
      <div className="software-tour__glow software-tour__glow--two" />
      <div className="software-tour__shell">
        <header className="software-tour__header">
          <BrandLogo size={46} />
          <span className="software-tour__header-note">A clearer view of how work really happens</span>
        </header>

        <div className="software-tour__heading" ref={headingRef}>
          <div>
            <div className="section-tag">PRODUCT TOUR</div>
            <h2>One platform, <span>endless ways to work.</span></h2>
          </div>
          <p>Explore each business area and see exactly how it helps modern teams move faster.</p>
        </div>

        <div className="software-tour__layout">
          <div className="software-tour__modules" ref={moduleListRef} role="group" aria-label="Choose a software area">
            {MODULES.map((module) => (
              <button
                className={`software-tour__module${activeId === module.id ? " is-active" : ""}`}
                key={module.id}
                type="button"
                aria-pressed={activeId === module.id}
                aria-controls="software-tour-detail"
                onClick={() => setActiveId(module.id)}
              >
                <span className="software-tour__module-icon"><ModuleIcon name={module.id} /></span>
                <span className="software-tour__module-title">{module.title}</span>
                <span className="software-tour__module-arrow" aria-hidden="true">↗</span>
              </button>
            ))}
          </div>

          <div className="software-tour__preview" ref={previewRef} id="software-tour-detail" aria-live="polite" aria-atomic="true">
            <div className="software-tour__window-bar" aria-hidden="true">
              <span className="software-tour__window-dots"><i /><i /><i /></span>
              <span className="software-tour__search">Search products, clients, reports...</span>
              <span className="software-tour__avatar">N</span>
            </div>
            <div className="software-tour__signal" key={activeId} aria-hidden="true" />
            <div className="software-tour__dashboard">
              <div className="software-tour__sidebar" aria-hidden="true">
                <span className="software-tour__sidebar-brand">N</span>
                <span>Dashboard</span>
                <span className={activeId === "sales" ? "is-current" : ""}>Sales</span>
                <span className={activeId === "hr" ? "is-current" : ""}>People</span>
                <span className={activeId === "projects" ? "is-current" : ""}>Projects</span>
                <span className={activeId === "reports" ? "is-current" : ""}>Reports</span>
                <span>Settings</span>
              </div>
              <div className="software-tour__detail">
                <span className="software-tour__detail-kicker">WHAT THIS PRODUCT COVERS</span>
                <div className="software-tour__detail-title">
                  <span className="software-tour__detail-icon"><ModuleIcon name={selected.id} /></span>
                  <h3>{selected.title}</h3>
                </div>
                <p>{selected.description}</p>
                <div className="software-tour__example-label">Quick capability snapshot</div>
                <div className="software-tour__examples">
                  {selected.examples.map((example, index) => (
                    <div className="software-tour__example" key={example}>
                      <span className="software-tour__example-index">0{index + 1}</span>
                      <span>{example}</span>
                      <span className="software-tour__example-mark" aria-hidden="true">✓</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="software-tour__footer">
          <span>Tap any area to explore the product</span>
          <span className="slide-counter" style={{ position: "static" }}>03 / 08</span>
        </div>
      </div>
    </section>
  );
}
