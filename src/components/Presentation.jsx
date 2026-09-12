import React, { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import Slide01 from "../slides/Slide01";
import Slide02 from "../slides/Slide02";
import Slide03 from "../slides/Slide03";
import Slide04 from "../slides/Slide04";
import Slide05 from "../slides/Slide05";
import Slide06 from "../slides/Slide06";
import Slide07 from "../slides/Slide07";
import Slide08 from "../slides/Slide08";
import Slide09 from "../slides/Slide09";
import Slide10 from "../slides/Slide10";
import Slide11 from "../slides/Slide11";
import Slide12 from "../slides/Slide12";
import Slide13 from "../slides/Slide13";
import Slide14 from "../slides/Slide14";
import Slide15 from "../slides/Slide15";
import Slide16 from "../slides/Slide16";
import Navigation from "./Navigation";
import Progress from "./Progress";

const SLIDE_COMPONENTS = [
  Slide01,
  Slide02,
  Slide03,
  Slide04,
  Slide05,
  Slide06,
  Slide07,
  Slide08,
  Slide09,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
  Slide14,
  Slide15,
  Slide16,
];
const TOTAL = SLIDE_COMPONENTS.length;

function getTransitionStyle(from, to) {
  const dir = to > from ? "next" : "prev";
  const pair = `${from}->${to}`;

  const transitions = {
    "0->1": { type: "gradientWipe", duration: 0.8 },
    "1->0": { type: "gradientWipe", duration: 0.8 },
    "1->2": { type: "maskReveal", duration: 0.75 },
    "2->1": { type: "maskReveal", duration: 0.75 },
    "2->3": { type: "lineExpand", duration: 0.8 },
    "3->2": { type: "lineExpand", duration: 0.8 },
    "3->4": { type: "morphSlide", duration: 0.75 },
    "4->3": { type: "morphSlide", duration: 0.75 },
    "4->5": { type: "zoomType", duration: 0.7 },
    "5->4": { type: "zoomType", duration: 0.7 },
    "5->6": { type: "darkExpand", duration: 0.8 },
    "6->5": { type: "darkExpand", duration: 0.8 },
    "6->7": { type: "neuralMorph", duration: 0.75 },
    "7->6": { type: "neuralMorph", duration: 0.75 },
    "7->8": { type: "roadmapTravel", duration: 0.75 },
    "8->7": { type: "roadmapTravel", duration: 0.75 },
    "8->9": { type: "converge", duration: 0.75 },
    "9->8": { type: "converge", duration: 0.75 },
    "9->10": { type: "maskReveal", duration: 0.75 },
    "10->9": { type: "maskReveal", duration: 0.75 },
    "10->11": { type: "neuralMorph", duration: 0.75 },
    "11->10": { type: "neuralMorph", duration: 0.75 },
    "11->12": { type: "morphSlide", duration: 0.75 },
    "12->11": { type: "morphSlide", duration: 0.75 },
    "12->13": { type: "gradientWipe", duration: 0.8 },
    "13->12": { type: "gradientWipe", duration: 0.8 },
    "13->14": { type: "converge", duration: 0.75 },
    "14->13": { type: "converge", duration: 0.75 },
    "14->15": { type: "darkExpand", duration: 0.8 },
    "15->14": { type: "darkExpand", duration: 0.8 },
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
        "position:absolute;inset:0;z-index:999;pointer-events:none;background:radial-gradient(circle at center,#0A1128 0%,#060B18 100%);";
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
        "position:absolute;top:50%;left:0;width:0;height:2px;z-index:999;pointer-events:none;background:linear-gradient(90deg,#F59E0B,#38BDF8);box-shadow:0 0 20px rgba(245,158,11,0.6);";
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
        "position:absolute;inset:0;z-index:999;pointer-events:none;background:radial-gradient(circle at center,transparent 0%,#060B18 0%);";
      fromEl.parentElement.appendChild(dark);
      tl.to(fromEl, { opacity: 0, duration: d * 0.2, pointerEvents: "none" });
      tl.to(dark, {
        background: "radial-gradient(circle at center,transparent 0%,#060B18 100%)",
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
    background: "linear-gradient(180deg, #060B18 0%, #0A1128 50%, #0E1736 100%)",
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
