"use client";

import Image from "next/image";
import { Header, Footer } from "@/components/layout";
import {
  TeamSection,
  CTASection,
} from "@/components/sections";
import { FadeIn, CountUp } from "@/components/motion";

const companyStats = [
  { label: "Years in Business", value: 8, suffix: "+" },
  { label: "Team Members", value: 150, suffix: "+" },
  { label: "Countries Served", value: 30, suffix: "+" },
  { label: "Client Retention", value: 98, suffix: "%" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative flex min-h-[50vh] items-center overflow-hidden pt-16">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-950/30 via-surface-950 to-surface-950" />
          <div className="container-page relative z-10 text-center">
            <FadeIn>
              <h1 className="text-5xl font-bold md:text-7xl">
                <span className="gradient-text">About Us</span>
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-surface-400">
                We are on a mission to democratize artificial intelligence and
                make enterprise-grade AI accessible to every organization.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-24">
          <div className="container-page">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <FadeIn direction="left">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold md:text-4xl">
                    <span className="gradient-text">Our Story</span>
                  </h2>
                  <p className="text-surface-400">
                    Founded in 2018 by AI researchers from DeepMind and Google,
                    Synthwave AI began with a simple belief: powerful AI
                    shouldn&apos;t be reserved for tech giants. We set out to build
                    a platform that brings cutting-edge machine learning to
                    businesses of all sizes.
                  </p>
                  <p className="text-surface-400">
                    Over the past eight years, we have grown from a team of
                    three to over 150 employees across four continents, serving
                    more than 500 enterprise clients worldwide.
                  </p>
                </div>
              </FadeIn>
              <FadeIn direction="right">
                <div className="aspect-video rounded-2xl overflow-hidden relative">
                  <Image
                    src="/about.jpg"
                    alt="Aethra team collaborating"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="border-y border-surface-800 bg-surface-900/50 py-16">
          <div className="container-page">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {companyStats.map((stat) => (
                <CountUp
                  key={stat.label}
                  target={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
          </div>
        </section>

        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
