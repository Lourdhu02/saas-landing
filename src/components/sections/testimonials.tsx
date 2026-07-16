"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { FadeIn, Marquee } from "@/components/motion";
import { Card } from "@/components/ui";
import { testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container-page">
        <FadeIn className="mb-16 text-center">
          <h2 className="text-3xl font-bold md:text-4xl font-display text-surface-900">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-surface-500">
            Hear from the teams and companies that trusted Aethra to transform their AI infrastructure.
          </p>
        </FadeIn>
      </div>

      <Marquee direction="left" speed="slow" pauseOnHover>
        {testimonials.map((t) => (
          <Card key={t.id} className="w-[400px] shrink-0" padding="lg">
            <div className="flex flex-col gap-4 h-full">
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-accent-400 text-accent-400" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-surface-600 flex-1">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-surface-100">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-surface-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-surface-500">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </Marquee>

      <Marquee direction="right" speed="slow" pauseOnHover className="mt-6">
        {[...testimonials].reverse().map((t) => (
          <Card key={t.id} className="w-[400px] shrink-0" padding="lg">
            <div className="flex flex-col gap-4 h-full">
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-accent-400 text-accent-400" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-surface-600 flex-1">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-surface-100">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-surface-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-surface-500">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </Marquee>
    </section>
  );
}
