"use client";

import { FadeIn, Marquee } from "@/components/motion";
import { Card, CardContent } from "@/components/ui";
import { testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="container-page">
        <FadeIn className="mb-16 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="gradient-text">What Our Clients Say</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-surface-400">
            Hear from the teams and companies that trusted us to transform their
            AI capabilities.
          </p>
        </FadeIn>
      </div>

      <Marquee direction="left" speed={40} pauseOnHover>
        {testimonials.map((t) => (
          <Card
            key={t.id}
            className="w-[380px] shrink-0"
          >
            <CardContent className="space-y-4 p-6">
              <p className="text-sm leading-relaxed text-surface-300">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/20 text-sm font-semibold text-brand-400">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-medium text-surface-50">
                    {t.name}
                  </p>
                  <p className="text-xs text-surface-400">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </Marquee>

      <Marquee direction="right" speed={40} pauseOnHover className="mt-6">
        {testimonials.map((t) => (
          <Card
            key={t.id}
            className="w-[380px] shrink-0"
          >
            <CardContent className="space-y-4 p-6">
              <p className="text-sm leading-relaxed text-surface-300">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/20 text-sm font-semibold text-brand-400">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-medium text-surface-50">
                    {t.name}
                  </p>
                  <p className="text-xs text-surface-400">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </Marquee>
    </section>
  );
}
