"use client";

import {
  MessageSquare,
  Eye,
  TrendingUp,
  Zap,
  Database,
  Cpu,
} from "lucide-react";
import { Card, CardContent, Button } from "@/components/ui";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { services } from "@/data/site";

const iconMap: Record<string, typeof MessageSquare> = {
  "message-square": MessageSquare,
  eye: Eye,
  "trending-up": TrendingUp,
  zap: Zap,
  database: Database,
  cpu: Cpu,
};

export function ServicesGrid() {
  return (
    <section className="py-24" id="services">
      <div className="container-page">
        <FadeIn className="mb-16 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-surface-400">
            Comprehensive AI solutions tailored to transform your business
            operations and drive innovation.
          </p>
        </FadeIn>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || MessageSquare;
            return (
              <StaggerItem key={service.id}>
                <Card className="group h-full">
                  <CardContent className="flex h-full flex-col space-y-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 transition-colors group-hover:bg-brand-500/20">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-surface-50">
                      {service.title}
                    </h3>
                    <p className="flex-1 text-sm text-surface-400">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-surface-400"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="ghost" size="sm" className="self-start">
                      Learn more &rarr;
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
