import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SLIDES } from "../config/content";
import { BrandLogo } from "../config/assets";

const PROJECTS = SLIDES[2].projects;
const CLIENTS = [
  { name: "Vithai", image: "https://cglzadzphyxgiqwwuwle.supabase.co/storage/v1/object/public/Logo/vithai%20%20logo.png" },
  { name: "Bramha", image: "https://cglzadzphyxgiqwwuwle.supabase.co/storage/v1/object/public/Logo/bramha_logo1.png" },
  { name: "Dafalapur Urban", image: "https://cglzadzphyxgiqwwuwle.supabase.co/storage/v1/object/public/Logo/Dafalapur%20Urban.png" },
  { name: "Dhasampada", image: "https://cglzadzphyxgiqwwuwle.supabase.co/storage/v1/object/public/Logo/Dhasampada%20Logo.png" },
  { name: "Padmavati", image: "https://cglzadzphyxgiqwwuwle.supabase.co/storage/v1/object/public/Logo/padmavati%20logo.png" },
  { name: "Suryoday", image: "https://cglzadzphyxgiqwwuwle.supabase.co/storage/v1/object/public/Logo/Suryoday%20Icon.png" },
  { name: "Shri Vitthal", image: "https://cglzadzphyxgiqwwuwle.supabase.co/storage/v1/object/public/Logo/SHRI%20VITTHAL.png" },
  { name: "LKP", image: "https://cglzadzphyxgiqwwuwle.supabase.co/storage/v1/object/public/Logo/LKP.png" },
];

export default function SlideWorkAndClients({ isActive }) {
  const [view, setView] = useState("projects");
  const introRef = useRef(null);
  const contentRef = useRef(null);
  const hasAnimated = useRef(false);
  const lastView = useRef(view);

  useEffect(() => {
    if (!isActive || hasAnimated.current) return;
    hasAnimated.current = true;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const timeline = gsap.timeline({ delay: 0.12 });
    timeline.fromTo(introRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" });
    timeline.fromTo(contentRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.52, ease: "power3.out" }, "-=0.18");
  }, [isActive]);

  useEffect(() => {
    if (!isActive || lastView.current === view) return;
    lastView.current = view;
    if (!hasAnimated.current || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(contentRef.current, { opacity: 0.65, y: 7 }, { opacity: 1, y: 0, duration: 0.22, ease: "power2.out" });
  }, [view, isActive]);

  const isProjects = view === "projects";

  return (
    <section className="work-clients-slide" data-slide-scroll aria-label="Projects and clients">
      <div className="work-clients__glow" />
      <div className="work-clients__shell">
        <header className="work-clients__header">
          <BrandLogo size={46} />
          <span>Real projects · Trusted relationships</span>
        </header>

        <div className="work-clients__intro" ref={introRef}>
          <div className="section-tag">OUR WORK & CLIENTS</div>
          <h2>{isProjects ? <>Solutions we’ve built for a <span>smarter tomorrow.</span></> : <>Trusted by the people who <span>work with us.</span></>}</h2>
          <p>{isProjects ? SLIDES[2].description : SLIDES[3].description}</p>
          <div className="work-clients__tabs" role="group" aria-label="Choose projects or clients">
            <button type="button" onClick={() => setView("projects")} aria-pressed={isProjects} aria-controls="work-clients-content">
              Projects <span>{String(PROJECTS.length).padStart(2, "0")}</span>
            </button>
            <button type="button" onClick={() => setView("clients")} aria-pressed={!isProjects} aria-controls="work-clients-content">
              Clients <span>{String(CLIENTS.length).padStart(2, "0")}</span>
            </button>
          </div>
        </div>

        <div className="work-clients__content" ref={contentRef} id="work-clients-content" key={view} aria-live="polite" aria-atomic="true">
          {isProjects ? (
            <div className="work-clients__projects">
              {PROJECTS.map((project, index) => (
                <article className="work-clients__project" key={project.title}>
                  <div className="work-clients__project-image-wrap">
                    <img className="work-clients__project-image" src={project.image} alt="" loading="lazy" />
                    <span className="work-clients__project-index">0{index + 1}</span>
                  </div>
                  <div className="work-clients__project-copy">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="work-clients__clients" aria-label="NexGravision clients">
              {CLIENTS.map((client) => (
                <div className="work-clients__client" key={client.name}>
                  <img src={client.image} alt="" loading="lazy" />
                  <span>{client.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <footer className="work-clients__footer">
          <span>Explore projects and client partners · detailed case studies follow</span>
          <span className="slide-counter" style={{ position: "static" }}>04 / 08</span>
        </footer>
      </div>
    </section>
  );
}
