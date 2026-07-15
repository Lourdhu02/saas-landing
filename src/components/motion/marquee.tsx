"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
  className?: string;
}

const speedMap = {
  slow: 50,
  normal: 30,
  fast: 15,
};

export function Marquee({
  children,
  direction = "left",
  speed = "normal",
  pauseOnHover = false,
  className,
}: MarqueeProps) {
  const duration = speedMap[speed];

  return (
    <div
      className={cn(
        "group flex overflow-hidden",
        pauseOnHover && "hover:[&_>_div]:[animation-play-state:paused]",
        className
      )}
    >
      <div
        className="flex shrink-0 gap-8"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
        }}
      >
        {children}
      </div>
      <div
        className="flex shrink-0 gap-8"
        aria-hidden="true"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
        }}
      >
        {children}
      </div>
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
