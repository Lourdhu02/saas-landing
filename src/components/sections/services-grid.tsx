"use client";

import {
  Brain,
  Scan,
  TrendingUp,
  Bot,
  Database,
  Shield,
} from "lucide-react";
import { Card, Button } from "@/components/ui";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { services } from "@/data/site";
import type { Service } from "@/types";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Brain,
  ScanEye: Scan,
  TrendingUp,
  Bot,
  Database,
  Shield,
};

export function ServicesGrid() {
  return (
    <section className="section-padding" id="services">
      <div className="container-page">
        <FadeIn className="mb-16 text-center">
          <h2 className="text-3xl font-bold md:text-4xl font-display text-surface-900">
            AI Infrastructure,{" "}
            <span className="gradient-text">Engineered for Enterprise</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-surface-500">
            Six integrated pillars powering the next generation of intelligent applications
          </p>
        </FadeIn>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service: Service) => {
            const Icon = iconMap[service.icon] || Brain;
            return (
              <StaggerItem key={service.id}>
                <Card className="group h-full" padding="md">
                  <div className="flex flex-col space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600 transition-colors group-hover:bg-brand-200">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-surface-900">
                      {service.title}
                    </h3>
                    <p className="text-sm text-surface-500 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 flex-1">
                      {service.features.slice(0, 3).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-surface-600"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="ghost" size="sm" className="self-start text-brand-600">
                      Learn more &rarr;
                    </Button>
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
