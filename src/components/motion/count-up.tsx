"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface CountUpProps {
  target: number;
  suffix?: string;
  duration?: number;
  label: string;
  className?: string;
}

export function CountUp({
  target,
  suffix = "",
  duration = 2,
  label,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const obj = { value: 0 };

      gsap.to(obj, {
        value: target,
        duration,
        ease: "power2.out",
        snap: { value: target >= 100 ? 1 : 0.1 },
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          setDisplayed(obj.value);
        },
      });
    }, el);

    return () => ctx.revert();
  }, [target, duration]);

  const formatted = target >= 100 ? Math.round(displayed) : displayed.toFixed(1);

  return (
    <div className={cn("text-center", className)}>
      <span
        ref={ref}
        className="block text-4xl font-bold text-brand-400 md:text-5xl"
      >
        {formatted}
        {suffix}
      </span>
      <span className="mt-1 block text-sm text-surface-400">{label}</span>
    </div>
  );
}
