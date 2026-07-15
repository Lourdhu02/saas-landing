"use client";

import { useEffect, useRef } from "react";
import { initSmoothScroll } from "@/lib/animations";

export function Providers({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<ReturnType<typeof initSmoothScroll>>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReduced) {
      lenisRef.current = initSmoothScroll();
    }

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  return <>{children}</>;
}
