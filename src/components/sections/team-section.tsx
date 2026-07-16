"use client";

import Image from "next/image";
import { Twitter, Linkedin } from "lucide-react";
import { Card } from "@/components/ui";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { teamMembers } from "@/data/site";
import type { TeamMember } from "@/types";

export function TeamSection() {
  return (
    <section className="section-padding" id="team">
      <div className="container-page">
        <FadeIn className="mb-16 text-center">
          <h2 className="text-3xl font-bold md:text-4xl font-display text-surface-900">
            Meet the Team Behind <span className="gradient-text">Aethra</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-surface-500">
            World-class engineers, researchers, and product leaders building the future of enterprise AI.
          </p>
        </FadeIn>

        <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member: TeamMember) => (
            <StaggerItem key={member.id}>
              <Card className="group h-full overflow-hidden text-center" padding="none">
                <div className="relative">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-brand-600/90 via-brand-600/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="px-6 text-center text-sm text-white leading-relaxed line-clamp-6">
                      {member.bio}
                    </p>
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-semibold text-surface-900">
                    {member.name}
                  </h3>
                  <p className="text-sm text-surface-500">{member.role}</p>
                  {member.socials && (
                    <div className="flex items-center justify-center gap-3 pt-2">
                      {member.socials.twitter && (
                        <a
                          href={member.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-surface-400 hover:text-brand-500 transition-colors"
                          aria-label={`${member.name} on Twitter`}
                        >
                          <Twitter size={16} />
                        </a>
                      )}
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-surface-400 hover:text-brand-500 transition-colors"
                          aria-label={`${member.name} on LinkedIn`}
                        >
                          <Linkedin size={16} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
