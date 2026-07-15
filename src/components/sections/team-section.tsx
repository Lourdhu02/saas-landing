"use client";

import { Card, CardContent } from "@/components/ui";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { teamMembers } from "@/data/site";

export function TeamSection() {
  return (
    <section className="py-24">
      <div className="container-page">
        <FadeIn className="mb-16 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="gradient-text">Our Team</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-surface-400">
            Meet the brilliant minds behind our AI platform.
          </p>
        </FadeIn>

        <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <StaggerItem key={member.id}>
              <Card className="group h-full overflow-hidden">
                <div className="relative">
                  <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-brand-500/20 to-brand-700/20">
                    <span className="text-5xl font-bold text-brand-400/50">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-brand-500/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="px-6 text-center text-sm text-white">
                      {member.bio}
                    </p>
                  </div>
                </div>
                <CardContent className="p-5 text-center">
                  <h3 className="font-semibold text-surface-50">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-surface-400">{member.role}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
