import gsap from "gsap";

const EASE = {
  smooth: "power3.out",
  sharp: "expo.out",
  dramatic: "power4.out",
  gentle: "circ.out",
};

export function splitRevealText(el, opts = {}) {
  const { delay = 0, duration = 0.9, stagger = 0.04, _y = 40, ease = EASE.sharp } = opts;
  if (!el) return;
  const words = el.textContent.split(" ").map((w) => {
    const span = document.createElement("span");
    span.style.display = "inline-block";
    span.style.overflow = "hidden";
    const inner = document.createElement("span");
    inner.textContent = w;
    inner.style.display = "inline-block";
    inner.style.transform = "translateY(110%)";
    span.appendChild(inner);
    return span;
  });
  el.textContent = "";
  words.forEach((w, i) => {
    el.appendChild(w);
    if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
  });
  const innerEls = el.querySelectorAll("span > span");
  return gsap.to(innerEls, {
    y: 0,
    duration,
    stagger,
    delay,
    ease,
  });
}

export function fadeInUp(el, opts = {}) {
  const { delay = 0, duration = 0.8, y = 30, ease = EASE.smooth } = opts;
  if (!el) return;
  gsap.set(el, { opacity: 0, y });
  return gsap.to(el, { opacity: 1, y: 0, duration, delay, ease });
}

export function fadeIn(el, opts = {}) {
  const { delay = 0, duration = 0.6, ease = EASE.smooth } = opts;
  if (!el) return;
  gsap.set(el, { opacity: 0 });
  return gsap.to(el, { opacity: 1, duration, delay, ease });
}

export function scaleIn(el, opts = {}) {
  const { delay = 0, duration = 0.8, from = 0.85, ease = EASE.sharp } = opts;
  if (!el) return;
  gsap.set(el, { opacity: 0, scale: from });
  return gsap.to(el, { opacity: 1, scale: 1, duration, delay, ease });
}

export function clipReveal(el, opts = {}) {
  const { delay = 0, duration = 1, from = "inset(0 100% 0 0)", to = "inset(0 0% 0 0)", ease = EASE.sharp } = opts;
  if (!el) return;
  gsap.set(el, { clipPath: from, opacity: 1 });
  return gsap.to(el, { clipPath: to, duration, delay, ease });
}

export function staggerFadeIn(els, opts = {}) {
  const { delay = 0, duration = 0.6, y = 25, stagger = 0.08, ease = EASE.smooth } = opts;
  if (!els || !els.length) return;
  gsap.set(els, { opacity: 0, y });
  return gsap.to(els, { opacity: 1, y: 0, duration, stagger, delay, ease });
}

export function lineGrow(el, opts = {}) {
  const { delay = 0, duration = 1.2, ease = EASE.sharp } = opts;
  if (!el) return;
  gsap.set(el, { scaleX: 0, transformOrigin: "left center" });
  return gsap.to(el, { scaleX: 1, duration, delay, ease });
}

export function numberCount(el, opts = {}) {
  const { delay = 0, duration = 1.5, from = 0, to = 100, ease = EASE.smooth } = opts;
  if (!el) return;
  const obj = { val: from };
  return gsap.to(obj, {
    val: to,
    duration,
    delay,
    ease,
    onUpdate: () => {
      el.textContent = Math.round(obj.val);
    },
  });
}

export function glowPulse(el, opts = {}) {
  const { delay = 0, duration = 2, ease = EASE.gentle } = opts;
  if (!el) return;
  return gsap.to(el, {
    opacity: 0.6,
    duration,
    delay,
    ease,
    yoyo: true,
    repeat: -1,
  });
}

export function slideTransition(el, direction = "next") {
  if (!el) return;
  const x = direction === "next" ? 80 : -80;
  gsap.set(el, { opacity: 0, x });
  return gsap.to(el, { opacity: 1, x: 0, duration: 0.7, ease: EASE.sharp });
}

export function slideExit(el, direction = "next") {
  if (!el) return;
  const x = direction === "next" ? -80 : 80;
  return gsap.to(el, { opacity: 0, x, duration: 0.5, ease: EASE.smooth });
}

export function resetSlide(el) {
  if (!el) return;
  gsap.set(el, { opacity: 0, x: 0, y: 0, scale: 1, clipPath: "inset(0 0% 0 0)" });
}

export { EASE };
