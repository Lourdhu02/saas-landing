"use client";

import {
  Search,
  PenTool,
  Code2,
  Rocket,
  Activity,
  LineChart,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { processSteps } from "@/data/site";
import type { ProcessStep } from "@/types";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Search,
  PenTool,
  Code2,
  Rocket,
  Activity,
  LineChart,
};

export function ProcessSection() {
  return (
    <section className="section-padding" id="process">
      <div className="container-page">
        <FadeIn className="mb-16 text-center">
          <h2 className="text-3xl font-bold md:text-4xl font-display text-surface-900">
            From Concept to Production in{" "}
            <span className="gradient-text">Weeks, Not Months</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-surface-500">
            Our proven six-step process ensures rapid deployment without compromising quality or security.
          </p>
        </FadeIn>

        <StaggerContainer className="relative">
          <div className="absolute left-[23px] top-0 hidden h-full w-0.5 bg-gradient-to-b from-brand-200 via-brand-400 to-accent-200 md:block" />

          <div className="relative space-y-12 md:space-y-0">
            {processSteps.map((step: ProcessStep, i) => {
              const Icon = iconMap[step.icon] || Search;
              return (
                <StaggerItem key={step.id}>
                  <div className="md:flex md:items-start md:gap-8">
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white border-2 border-brand-200 shadow-sm md:mx-0">
                      <Icon size={18} className="text-brand-600" />
                    </div>
                    <div className="mt-4 md:mt-0 md:pt-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                          Step {i + 1}
                        </span>
                        <h3 className="text-lg font-semibold text-surface-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-surface-500 leading-relaxed max-w-xl">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
