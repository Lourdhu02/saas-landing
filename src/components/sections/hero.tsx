"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Play } from "lucide-react";
import { Badge, Button } from "@/components/ui";
import { TypeWriter, CountUp } from "@/components/motion";
import { stats } from "@/data/site";

const typewriterWords = ["smarter", "faster", "more secure", "at scale"];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-shape",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 0.12, duration: 1.5, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-content > *",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 0.7, ease: "power3.out", delay: 0.2 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const trustLogos = ["Meridian Finance", "Atlas Health", "Pinnacle Mfg", "OmniCloud Retail", "NovaTech", "Quantum Labs"];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-[72px]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-surface-50 via-brand-50/30 to-surface-50" />
      <div className="hero-shape absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-400 opacity-0 blur-[120px]" />

      <div className="container-page relative z-10 w-full">
        <div className="hero-content grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8 pt-12">
            <Badge variant="default" dot>
              Now available — Aethra v3.0
            </Badge>

            <div className="space-y-2">
              <h1 className="text-5xl font-bold leading-tight md:text-7xl lg:text-8xl text-surface-900 font-display">
                Enterprise AI.
              </h1>
              <h1 className="text-5xl font-bold leading-tight md:text-7xl lg:text-8xl font-display">
                <span className="gradient-text">Engineered for Impact.</span>
              </h1>
            </div>

            <p className="max-w-lg text-lg text-surface-600">
              Deploy production-grade AI models in minutes, not months. 
              <span className="text-brand-600 font-medium"> Aethra</span> unifies ML, NLP, computer vision, 
              and automation into a single secure platform built for enterprise scale.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href="/pricing" variant="primary" size="lg" rightIcon={<ArrowRight size={18} />}>
                Start Free Trial
              </Button>
              <Button href="#demo" variant="outline" size="lg" leftIcon={<Play size={18} />}>
                Book a Demo
              </Button>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-surface-500">
                Trusted by 500+ enterprises
              </p>
              <div className="flex flex-wrap gap-8 items-center opacity-50">
                {trustLogos.map((name) => (
                  <span key={name} className="text-sm font-semibold text-surface-400 uppercase tracking-wider">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative mx-auto h-[520px] w-[520px]">
              <div className="absolute inset-0 animate-pulse-glow rounded-full bg-gradient-to-br from-brand-400/10 to-accent-400/10" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-brand-400/20 via-brand-500/20 to-accent-400/20 backdrop-blur-3xl" />
              <div className="absolute inset-20 rounded-2xl border border-brand-200/50 bg-white/50 backdrop-blur-xl shadow-xl" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center space-y-2">
                <div className="text-7xl font-bold gradient-text font-display">AI</div>
                <div className="text-sm text-surface-500 font-medium">Enterprise Intelligence</div>
              </div>
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="absolute h-2.5 w-2.5 rounded-full"
                  style={{
                    top: `${18 + i * 18}%`,
                    left: `${8 + i * 16}%`,
                    backgroundColor: i % 2 === 0 ? "var(--color-brand-400)" : "var(--color-accent-400)",
                    boxShadow: `0 0 16px ${
                      i % 2 === 0 ? "var(--color-brand-400)" : "var(--color-accent-400)"
                    }`,
                    animation: `float ${2 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-surface-200/50 pt-12 md:grid-cols-4">
          {stats.map((stat) => (
            <CountUp
              key={stat.label}
              target={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
