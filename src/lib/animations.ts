import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

function resolveElement(el: string | Element | null): Element | null {
  if (!el) return null;
  return typeof el === "string" ? document.querySelector(el) : el;
}

export function initSmoothScroll(): Lenis | null {
  if (typeof window === "undefined") return null;

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    wheelMultiplier: 1,
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return lenis;
}

export function fadeInUp(
  element: string | Element,
  delay: number = 0,
  duration: number = 0.7
): ScrollTrigger | null {
  const el = resolveElement(element);
  if (!el) return null;

  gsap.set(el, { opacity: 0, y: 40 });

  return ScrollTrigger.create({
    trigger: el,
    start: "top 85%",
    onEnter: () => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
      });
    },
  });
}

export function staggerElements(
  container: string | Element,
  items: string,
  stagger: number = 0.1
): void {
  const parent = resolveElement(container);
  if (!parent) return;

  const children = Array.from(parent.querySelectorAll(items));
  if (!children.length) return;

  gsap.fromTo(
    children,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
      },
    }
  );
}

export function countUp(
  element: string | Element,
  target: number,
  suffix: string = "",
  duration: number = 2
): void {
  const el = resolveElement(element);
  if (!el) return;

  const obj = { value: 0 };

  gsap.to(obj, {
    value: target,
    duration,
    ease: "power2.out",
    onUpdate: () => {
      el.textContent = Math.floor(obj.value).toLocaleString() + suffix;
    },
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    },
  });
}

export function marqueeAnimation(
  element: string | Element,
  direction: "left" | "right" = "left"
): void {
  const el = resolveElement(element);
  if (!el) return;

  gsap.to(el, {
    x: direction === "left" ? "-50%" : "50%",
    duration: 30,
    ease: "none",
    repeat: -1,
  });
}

export function parallaxElement(
  element: string | Element,
  speed: number = 0.5
): void {
  const el = resolveElement(element);
  if (!el) return;

  gsap.to(el, {
    y: () => (1 - speed) * 100,
    ease: "none",
    scrollTrigger: {
      trigger: el,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
}

export function textReveal(element: string | Element): void {
  const el = resolveElement(element);
  if (!el) return;

  const text = el.textContent || "";
  el.textContent = "";

  const chars = text.split("").map((char) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.display = "inline-block";
    span.style.opacity = "0";
    el.appendChild(span);
    return span;
  });

  gsap.to(chars, {
    opacity: 1,
    y: 0,
    stagger: 0.02,
    duration: 0.4,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    },
  });
}

export function animateOnScroll(
  elements: string | Element | (string | Element)[],
  animation: gsap.TweenVars = { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
): ScrollTrigger[] {
  const items = Array.isArray(elements) ? elements : [elements];

  return items
    .map((item) => {
      const el = resolveElement(item);
      if (!el) return null;

      gsap.set(el, { opacity: 0, y: 30 });

      return ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () => gsap.to(el, { ...animation }),
      });
    })
    .filter((t): t is ScrollTrigger => t !== null);
}
