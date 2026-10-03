import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import { BrandLogo } from "../config/assets";

const PROJECTS = SLIDES[2].projects;

export default function SlideProjectDetail({ isActive, projectIndex = 0, slideIndex = 0, total = 8 }) {
  const project = PROJECTS[projectIndex] || PROJECTS[0];
  const rootRef = useRef(null);
  const hasAnimated = useRef(false);

  const pad = (n) => String(n).padStart(2, "0");
  const current = pad(slideIndex + 1);
  const totalCount = pad(total || 8);
  const projectNo = pad(projectIndex + 1);
  const projectTotal = pad(PROJECTS.length);
  const accent = project.accent || "#00B4D8";

  useEffect(() => {
    if (!isActive || hasAnimated.current) return;
    hasAnimated.current = true;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const root = rootRef.current;
    if (!root) return;

    const q = gsap.utils.selector(root);
    const tl = gsap.timeline({ delay: 0.15 });

    tl.fromTo(q("[data-pd-header]"), { opacity: 0, y: -14 }, { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" });
    tl.fromTo(q("[data-pd-visual]"), { opacity: 0, x: -36, scale: 0.96 }, { opacity: 1, x: 0, scale: 1, duration: 0.65, ease: "expo.out" }, "-=0.15");
    tl.fromTo(q("[data-pd-copy] > *"), { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.07, ease: "power3.out" }, "-=0.4");
    tl.fromTo(q("[data-pd-result]"), { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.08, ease: "power3.out" }, "-=0.28");
    tl.fromTo(q("[data-pd-footer]"), { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, "-=0.2");
  }, [isActive]);

  return (
    <section className="project-detail-slide" data-slide-scroll aria-label={`Project detail: ${project.title}`}>
      <div className="bg-grid" />
      <div className="project-detail__glow" />
      <div className="project-detail__shell">
        <header className="project-detail__header" data-pd-header>
          <div className="project-detail__header-left">
            <BrandLogo size={42} />
            <span>Featured case study</span>
          </div>
          <div className="project-detail__header-right">
            <span className="project-detail__project-counter">
              Project {projectNo} <em>/</em> {projectTotal}
            </span>
          </div>
        </header>

        <div className="project-detail__layout">
          <div className="project-detail__visual" data-pd-visual>
            <div className="project-detail__visual-frame" style={{ borderColor: `${accent}40` }}>
              <img src={project.image} alt={project.title} />
              <div className="project-detail__visual-overlay" />
              <span className="project-detail__visual-index" style={{ color: accent }}>
                {projectNo}
              </span>
              <div className="project-detail__visual-badge">
                <span className="project-detail__visual-category">{project.category}</span>
                <span className="project-detail__visual-meta">
                  {project.year} · {project.duration}
                </span>
              </div>
              <div className="project-detail__visual-chips">
                {project.features.slice(0, 3).map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>
            </div>
            <div className="project-detail__visual-side">
              <div className="project-detail__side-card">
                <span className="project-detail__side-label">Client</span>
                <strong>{project.client}</strong>
              </div>
              <div className="project-detail__side-card">
                <span className="project-detail__side-label">Delivery</span>
                <strong>{project.duration}</strong>
              </div>
              <div className="project-detail__side-card">
                <span className="project-detail__side-label">Year</span>
                <strong>{project.year}</strong>
              </div>
            </div>
          </div>

          <div className="project-detail__content" data-pd-copy>
            <div className="section-tag">PROJECT {projectNo} · {project.category}</div>
            <h2>{project.title}</h2>
            <p className="project-detail__tagline">{project.tagline}</p>
            <p className="project-detail__overview">{project.overview}</p>

            <div className="project-detail__panels">
              <article className="project-detail__panel">
                <h3>Challenge</h3>
                <p>{project.challenge}</p>
              </article>
              <article className="project-detail__panel project-detail__panel--solution">
                <h3>Solution</h3>
                <p>{project.solution}</p>
              </article>
            </div>

            <div className="project-detail__block">
              <h3 className="project-detail__block-title">Key Features</h3>
              <div className="project-detail__features">
                {project.features.map((feature) => (
                  <span className="project-detail__feature" key={feature}>
                    <i />
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-detail__block">
              <h3 className="project-detail__block-title">Technology Stack</h3>
              <div className="project-detail__tech">
                {project.techStack.map((tech) => (
                  <span className="project-detail__tech-pill" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-detail__results">
              {project.results.map((result) => (
                <div className="project-detail__result" data-pd-result key={result.label}>
                  <strong style={{ color: accent }}>{result.value}</strong>
                  <span>{result.label}</span>
                </div>
              ))}
            </div>

            <ul className="project-detail__highlights">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <footer className="project-detail__footer" data-pd-footer>
          <span>
            {projectIndex > 0 ? `Previous · ${PROJECTS[projectIndex - 1].title}` : "Start of project case studies"}
          </span>
          <span className="project-detail__footer-mid">
            {projectIndex < PROJECTS.length - 1
              ? `Next · ${PROJECTS[projectIndex + 1].title}`
              : "Continue to our clients"}
          </span>
          <span className="slide-counter" style={{ position: "static" }}>
            {current} / {totalCount}
          </span>
        </footer>
      </div>
    </section>
  );
}
