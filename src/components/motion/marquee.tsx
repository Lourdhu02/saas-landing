"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

export function Marquee({
  children,
  direction = "left",
  speed = 30,
  pauseOnHover = false,
  className,
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={cn(
        "group flex overflow-hidden",
        pauseOnHover && "hover:[&_>_div]:[animation-play-state:paused]",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 gap-8",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        )}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 gap-8",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        )}
        aria-hidden="true"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
