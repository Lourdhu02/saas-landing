import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export function initSmoothScroll(): Lenis {
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

export function animateInView(
  element: string | Element,
  animation: gsap.TweenVars
): ScrollTrigger {
  return ScrollTrigger.create({
    trigger: element,
    start: "top 85%",
    onEnter: () => gsap.to(element, { ...animation, paused: false }),
  });
}

export function staggerChildren(
  container: string | Element,
  children: string,
  stagger: number = 0.1
): void {
  const parent =
    typeof container === "string"
      ? document.querySelector(container)
      : container;
  if (!parent) return;

  const els = Array.from(parent.querySelectorAll(children));
  if (!els.length) return;

  gsap.fromTo(
    els,
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
  target: number
): void {
  const el = typeof element === "string" ? document.querySelector(element) : element;
  if (!el) return;

  gsap.fromTo(
    el,
    { textContent: 0 },
    {
      textContent: target,
      duration: 2,
      ease: "power2.out",
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
    }
  );
}

export function marqueeAnimation(
  element: string | Element,
  direction: "left" | "right" = "left"
): void {
  const el = typeof element === "string" ? document.querySelector(element) : element;
  if (!el) return;

  gsap.to(el, {
    x: direction === "left" ? "-50%" : "50%",
    duration: 30,
    ease: "none",
    repeat: -1,
  });
}

export function typeWrite(
  element: string | Element,
  text: string
): void {
  const el = typeof element === "string" ? document.querySelector(element) : element;
  if (!el) return;

  el.textContent = "";

  gsap.to(el, {
    duration: text.length * 0.05,
    ease: "none",
    onUpdate: function () {
      const progress = this.progress();
      const chars = Math.floor(progress * text.length);
      el.textContent = text.slice(0, chars);
    },
  });
}

export function fadeInUp(
  element: string | Element,
  delay: number = 0
): void {
  const el = typeof element === "string" ? document.querySelector(element) : element;
  if (!el) return;

  gsap.fromTo(
    el,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
    }
  );
}
