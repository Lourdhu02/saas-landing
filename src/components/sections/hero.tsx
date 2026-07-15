"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui";
import { TypeWriter, CountUp } from "@/components/motion";
import { stats } from "@/data/site";

const typewriterWords = ["Smarter", "Faster", "Scalable", "Intelligent"];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-shape",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 0.15, duration: 1.5, ease: "power3.out" }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-950/30 via-surface-950 to-surface-950" />
      <div className="hero-shape absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500 opacity-0 blur-[120px]" />

      <div className="container-page relative z-10 grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
              AI That Works{" "}
              <span className="gradient-text">
                <TypeWriter words={typewriterWords} />
              </span>
              <br />
              Not Harder
            </h1>
            <p className="max-w-lg text-lg text-surface-400">
              Enterprise-grade AI solutions that transform your business
              operations with cutting-edge machine learning and natural language
              processing.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button href="/pricing" variant="primary" size="lg">
              Get Started
              <ArrowRight size={18} />
            </Button>
            <Button href="#demo" variant="outline" size="lg">
              <Play size={18} />
              Watch Demo
            </Button>
          </div>

          <div className="grid grid-cols-4 gap-4 pt-4">
            {stats.map((stat) => (
              <CountUp
                key={stat.label}
                target={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative mx-auto h-[500px] w-[500px]">
            <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-br from-brand-400/20 to-brand-600/20" />
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-brand-500/30 to-brand-700/30 backdrop-blur-3xl" />
            <div className="absolute inset-16 rounded-2xl border border-brand-500/20 bg-surface-900/50 backdrop-blur-xl" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-6xl font-bold gradient-text">AI</div>
              <div className="mt-2 text-sm text-surface-400">Next Gen</div>
            </div>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute h-3 w-3 rounded-full bg-brand-400"
                style={{
                  top: `${15 + i * 25}%`,
                  left: `${10 + i * 20}%`,
                  boxShadow: "0 0 20px rgba(99,102,241,0.5)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
