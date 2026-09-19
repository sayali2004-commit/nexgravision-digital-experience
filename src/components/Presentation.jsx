import React, { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import SlideHome from "../slides/SlideHome";
import SlideWhyUs from "../slides/SlideWhyUs";
import SlideProjects from "../slides/SlideProjects";
import SlideClients from "../slides/SlideClients";
import SlideThankYou from "../slides/SlideThankYou";
import Navigation from "./Navigation";
import Progress from "./Progress";

const SLIDE_COMPONENTS = [
  SlideHome,
  SlideWhyUs,
  SlideProjects,
  SlideClients,
  SlideThankYou,
];
const TOTAL = SLIDE_COMPONENTS.length;

function getTransitionStyle(from, to) {
  const dir = to > from ? "next" : "prev";
  const pair = `${from}->${to}`;

  const transitions = {
    "0->1": { type: "gradientWipe", duration: 0.8 },
    "1->0": { type: "gradientWipe", duration: 0.8 },
    "1->2": { type: "neuralMorph", duration: 0.8 },
    "2->1": { type: "neuralMorph", duration: 0.8 },
    "2->3": { type: "maskReveal", duration: 0.75 },
    "3->2": { type: "maskReveal", duration: 0.75 },
    "3->4": { type: "morphSlide", duration: 0.75 },
    "4->3": { type: "morphSlide", duration: 0.75 },
  };

  return transitions[pair] || { type: "default", duration: 0.65, dir };
}

function applyTransition(fromEl, toEl, style, onComplete) {
  const tl = gsap.timeline({ onComplete });
  const { type, duration, dir } = style;
  const d = duration || 0.75;

  switch (type) {
    case "gradientWipe": {
      const overlay = document.createElement("div");
      overlay.style.cssText =
        "position:absolute;inset:0;z-index:999;pointer-events:none;background:radial-gradient(circle at center,#0C1222 0%,#080D1A 100%);";
      fromEl.parentElement.appendChild(overlay);
      gsap.set(overlay, { opacity: 0 });
      tl.to(overlay, { opacity: 1, duration: d * 0.4, ease: "power2.in" });
      tl.set(fromEl, { opacity: 0, pointerEvents: "none" });
      tl.set(toEl, { opacity: 1, x: 0, pointerEvents: "auto" });
      tl.to(overlay, { opacity: 0, duration: d * 0.5, ease: "power2.out" });
      tl.call(() => overlay.remove());
      break;
    }
    case "maskReveal": {
      gsap.set(toEl, { opacity: 1, clipPath: "inset(0 100% 0 0)", pointerEvents: "auto" });
      tl.to(fromEl, { opacity: 0, duration: d * 0.3, ease: "power2.in", pointerEvents: "none" });
      tl.to(toEl, { clipPath: "inset(0 0% 0 0)", duration: d * 0.7, ease: "expo.out" }, `-=${d * 0.15}`);
      break;
    }
    case "lineExpand": {
      const line = document.createElement("div");
      line.style.cssText =
        "position:absolute;top:50%;left:0;width:0;height:2px;z-index:999;pointer-events:none;background:linear-gradient(90deg,#00B4D8,#38BDF8);box-shadow:0 0 20px rgba(0,180,216,0.6);";
      fromEl.parentElement.appendChild(line);
      tl.to(fromEl, { opacity: 0, duration: d * 0.3, ease: "power2.in", pointerEvents: "none" });
      tl.to(line, { width: "100%", duration: d * 0.4, ease: "power3.out" });
      tl.set(toEl, { opacity: 1, x: 0, pointerEvents: "auto" });
      tl.to(line, { opacity: 0, duration: d * 0.3, ease: "power2.out" });
      tl.call(() => line.remove());
      break;
    }
    case "morphSlide": {
      gsap.set(toEl, { opacity: 1, y: "100%", pointerEvents: "auto" });
      tl.to(fromEl, { opacity: 0, y: "-20%", duration: d * 0.45, ease: "power3.inOut", pointerEvents: "none" });
      tl.to(toEl, { y: "0%", duration: d * 0.55, ease: "expo.out" }, `-=${d * 0.25}`);
      break;
    }
    case "zoomType": {
      gsap.set(toEl, { opacity: 0, scale: 1.1, pointerEvents: "auto" });
      tl.to(fromEl, { opacity: 0, scale: 0.92, duration: d * 0.4, ease: "power3.in", pointerEvents: "none" });
      tl.to(toEl, { opacity: 1, scale: 1, duration: d * 0.55, ease: "expo.out" }, `-=${d * 0.2}`);
      break;
    }
    case "darkExpand": {
      const dark = document.createElement("div");
      dark.style.cssText =
        "position:absolute;inset:0;z-index:999;pointer-events:none;background:radial-gradient(circle at center,transparent 0%,#080D1A 0%);";
      fromEl.parentElement.appendChild(dark);
      tl.to(fromEl, { opacity: 0, duration: d * 0.2, pointerEvents: "none" });
      tl.to(dark, {
        background: "radial-gradient(circle at center,transparent 0%,#080D1A 100%)",
        duration: d * 0.35,
        ease: "power2.in",
      });
      tl.set(toEl, { opacity: 1, x: 0, pointerEvents: "auto" });
      tl.to(dark, { opacity: 0, duration: d * 0.35, ease: "power2.out" });
      tl.call(() => dark.remove());
      break;
    }
    case "neuralMorph": {
      gsap.set(toEl, { opacity: 0, filter: "blur(10px)", x: 30, pointerEvents: "auto" });
      tl.to(fromEl, { opacity: 0, filter: "blur(8px)", x: -30, duration: d * 0.4, ease: "power3.in", pointerEvents: "none" });
      tl.to(toEl, { opacity: 1, filter: "blur(0px)", x: 0, duration: d * 0.5, ease: "expo.out" }, `-=${d * 0.2}`);
      tl.set(fromEl, { filter: "none", x: 0 });
      break;
    }
    case "roadmapTravel": {
      gsap.set(toEl, { opacity: 1, clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", pointerEvents: "auto" });
      tl.to(fromEl, { opacity: 0, duration: d * 0.3, ease: "power2.in", pointerEvents: "none" });
      tl.to(toEl, { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: d * 0.65, ease: "expo.out" }, `-=${d * 0.15}`);
      break;
    }
    case "converge": {
      gsap.set(toEl, { opacity: 0, scale: 0.94, filter: "blur(4px)", pointerEvents: "auto" });
      tl.to(fromEl, { opacity: 0, scale: 1.04, duration: d * 0.35, ease: "power3.in", pointerEvents: "none" });
      tl.to(toEl, { opacity: 1, scale: 1, filter: "blur(0px)", duration: d * 0.55, ease: "expo.out" }, `-=${d * 0.2}`);
      tl.set(fromEl, { scale: 1, filter: "none" });
      break;
    }
    default: {
      const xOut = dir === "next" ? -40 : 40;
      const xIn = dir === "next" ? 40 : -40;
      gsap.set(toEl, { opacity: 0, x: xIn, pointerEvents: "auto" });
      tl.to(fromEl, { opacity: 0, x: xOut, duration: d * 0.45, ease: "power3.inOut", pointerEvents: "none" });
      tl.to(toEl, { opacity: 1, x: 0, duration: d * 0.5, ease: "expo.out" }, `-=${d * 0.2}`);
      break;
    }
  }

  return tl;
}

export default function Presentation() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const containerRef = useRef(null);
  const slideRefs = useRef([]);
  const touchStart = useRef(null);
  const wheelTimeout = useRef(null);
  const controlsTimeout = useRef(null);

  const animateSlide = useCallback(
    (from, to) => {
      if (isAnimating) return;
      setIsAnimating(true);

      const fromEl = slideRefs.current[from];
      const toEl = slideRefs.current[to];
      if (!fromEl || !toEl) {
        setIsAnimating(false);
        return;
      }

      const transStyle = getTransitionStyle(from, to);

      applyTransition(fromEl, toEl, transStyle, () => {
        gsap.set(fromEl, {
          opacity: 0,
          pointerEvents: "none",
          x: 0,
          y: 0,
          scale: 1,
          filter: "none",
          clipPath: "none",
        });
        setCurrent(to);
        setIsAnimating(false);
      });
    },
    [isAnimating]
  );

  const goTo = useCallback(
    (idx) => {
      if (idx === current || idx < 0 || idx >= TOTAL) return;
      animateSlide(current, idx);
    },
    [current, animateSlide]
  );

  const next = useCallback(() => {
    if (current < TOTAL - 1) goTo(current + 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    if (current > 0) goTo(current - 1);
  }, [current, goTo]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(TOTAL - 1);
      } else if (e.key === "f" || e.key === "F") {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
        else document.exitFullscreen?.();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev, goTo]);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (wheelTimeout.current) return;
      wheelTimeout.current = setTimeout(() => {
        wheelTimeout.current = null;
      }, 700);
      if (e.deltaY > 0) next();
      else if (e.deltaY < 0) prev();
    };
    const el = containerRef.current;
    if (el) el.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      if (el) el.removeEventListener("wheel", handleWheel);
    };
  }, [next, prev]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onTouchStart = (e) => {
      touchStart.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e) => {
      if (touchStart.current === null) return;
      const diff = touchStart.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 45) {
        if (diff > 0) {
          next();
        } else {
          prev();
        }
      }
      touchStart.current = null;
    };
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [next, prev]);

  useEffect(() => {
    const resetControls = () => {
      setShowControls(true);
      clearTimeout(controlsTimeout.current);
      controlsTimeout.current = setTimeout(() => setShowControls(false), 3500);
    };
    window.addEventListener("mousemove", resetControls);
    window.addEventListener("touchstart", resetControls);
    resetControls();
    return () => {
      window.removeEventListener("mousemove", resetControls);
      window.removeEventListener("touchstart", resetControls);
    };
  }, []);

  return (
    <div ref={containerRef} style={styles.container}>
      {SLIDE_COMPONENTS.map((Comp, i) => (
        <div
          key={i}
          ref={(el) => (slideRefs.current[i] = el)}
          className={`slide ${i === current ? "active" : ""}`}
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 2 : 1 }}
        >
          <Comp isActive={i === current} slideIndex={i} onNavigate={goTo} />
        </div>
      ))}

      <div
        style={{
          ...styles.controlsWrap,
          opacity: showControls ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      >
        <Navigation onPrev={prev} onNext={next} current={current} total={TOTAL} />
        <Progress current={current} total={TOTAL} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: "fixed",
    inset: 0,
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    background: "linear-gradient(180deg, #080D1A 0%, #0C1222 50%, #101828 100%)",
  },
  controlsWrap: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    pointerEvents: "none",
  },
};
