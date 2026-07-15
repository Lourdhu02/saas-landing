"use client";

import { FadeIn, CountUp } from "@/components/motion";
import { stats } from "@/data/site";

export function HeroStats() {
  return (
    <section className="border-y border-surface-800 bg-surface-900/50 py-16">
      <div className="container-page">
        <FadeIn>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <CountUp
                key={stat.label}
                target={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
