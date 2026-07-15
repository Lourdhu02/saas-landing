"use client";

import { Header, Footer } from "@/components/layout";
import {
  ServicesGrid,
  FAQ,
  CTASection,
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/sections";
import { services } from "@/data/site";

const processSteps = [
  {
    step: 1,
    title: "Discovery",
    description:
      "We analyze your business needs, data infrastructure, and goals to define the scope of your AI solution.",
  },
  {
    step: 2,
    title: "Design",
    description:
      "Our team architects a custom solution, selecting the right models, data pipelines, and deployment strategy.",
  },
  {
    step: 3,
    title: "Development",
    description:
      "We build, train, and fine-tune your AI models using best-in-class practices and rigorous testing.",
  },
  {
    step: 4,
    title: "Deployment",
    description:
      "Your solution is deployed into production with monitoring, scaling, and ongoing optimization in place.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative flex min-h-[50vh] items-center overflow-hidden pt-16">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-950/30 via-surface-950 to-surface-950" />
          <div className="container-page relative z-10 text-center">
            <FadeIn>
              <h1 className="text-5xl font-bold md:text-7xl">
                <span className="gradient-text">Our Services</span>
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-surface-400">
                End-to-end AI solutions tailored to your business needs.
              </p>
            </FadeIn>
          </div>
        </section>

        <ServicesGrid />

        <section className="py-24 bg-surface-900/50">
          <div className="container-page">
            <FadeIn className="mb-16 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                <span className="gradient-text">Detailed Service Breakdown</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-surface-400">
                Deep dive into each service offering and how it can benefit your
                organization.
              </p>
            </FadeIn>

            <StaggerContainer className="space-y-12">
              {services.map((service) => (
                <StaggerItem key={service.id}>
                  <div className="glass rounded-2xl p-8">
                    <h3 className="text-2xl font-semibold text-surface-50">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-surface-400">
                      {service.description}
                    </p>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 rounded-lg bg-surface-800/50 p-4"
                        >
                          <span className="h-2 w-2 rounded-full bg-brand-400" />
                          <span className="text-sm text-surface-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="py-24">
          <div className="container-page">
            <FadeIn className="mb-16 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                <span className="gradient-text">Our Process</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-surface-400">
                A proven methodology for delivering AI solutions that drive
                real business impact.
              </p>
            </FadeIn>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <FadeIn key={step.step} delay={step.step * 0.1}>
                  <div className="glass rounded-2xl p-6 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/15 text-2xl font-bold text-brand-400">
                      {step.step}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-surface-50">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-surface-400">
                      {step.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
