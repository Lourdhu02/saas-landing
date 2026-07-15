"use client";

import { FadeIn, CountUp } from "@/components/motion";
import { stats } from "@/data/site";
import type { Stat } from "@/types";

export function StatsSection() {
  return (
    <section className="section-padding">
      <div className="container-page">
        <FadeIn>
          <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
            {stats.map((stat: Stat, i) => (
              <div key={stat.label} className="relative text-center">
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  label={stat.label}
                />
                {i < stats.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-surface-200 md:block" />
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
