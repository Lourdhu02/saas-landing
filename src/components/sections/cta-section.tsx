"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";
import { FadeIn } from "@/components/motion";

export function CTASection() {
  return (
    <section className="section-padding">
      <div className="container-page">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-600 to-accent-600 px-8 py-20 text-center md:px-20 md:py-28">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15)_0%,_transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl font-bold text-white md:text-5xl font-display text-balance">
                Ready to Transform Your AI Infrastructure?
              </h2>
              <p className="mx-auto max-w-2xl text-white/80 text-lg">
                Join 500+ enterprises that trust Aethra to power their AI workloads. 
                Get started with a free trial today.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button
                  href="/pricing"
                  variant="secondary"
                  size="lg"
                  className="bg-white text-brand-600 hover:bg-brand-50 border-0"
                  rightIcon={<ArrowRight size={18} />}
                >
                  Get Started
                </Button>
                <Button
                  href="/contact"
                  variant="ghost"
                  size="lg"
                  className="border-2 border-white/40 text-white hover:bg-white/10"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
