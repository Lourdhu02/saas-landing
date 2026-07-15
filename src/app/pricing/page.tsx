"use client";

import { Check, X } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PricingTable, FAQ, CTASection, FadeIn } from "@/components/sections";

const comparisonFeatures = [
  { name: "API calls/month", starter: "10K", growth: "100K", enterprise: "Unlimited" },
  { name: "Model deployments", starter: "1", growth: "5", enterprise: "Unlimited" },
  { name: "Support", starter: "Email", growth: "Priority Chat", enterprise: "Dedicated Engineer" },
  { name: "SLA guarantee", starter: "—", growth: "99.9%", enterprise: "99.99%" },
  { name: "Custom fine-tuning", starter: false, growth: true, enterprise: true },
  { name: "On-premise deployment", starter: false, growth: false, enterprise: true },
  { name: "SOC 2 compliance", starter: false, growth: false, enterprise: true },
];

const plans = ["starter", "growth", "enterprise"] as const;

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative flex min-h-[50vh] items-center overflow-hidden pt-16">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-950/30 via-surface-950 to-surface-950" />
          <div className="container-page relative z-10 text-center">
            <FadeIn>
              <h1 className="text-5xl font-bold md:text-7xl">
                <span className="gradient-text">Pricing</span>
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-surface-400">
                Transparent pricing designed to grow with you.
              </p>
            </FadeIn>
          </div>
        </section>

        <PricingTable />

        <section className="py-24 bg-surface-900/50">
          <div className="container-page">
            <FadeIn className="mb-12 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                <span className="gradient-text">Feature Comparison</span>
              </h2>
            </FadeIn>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-surface-700">
                    <th className="py-4 pr-4 text-sm font-semibold text-surface-300">Feature</th>
                    {plans.map((p) => (
                      <th
                        key={p}
                        className="px-4 py-4 text-center text-sm font-semibold capitalize text-surface-300"
                      >
                        {p}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature) => (
                    <tr
                      key={feature.name}
                      className="border-b border-surface-800 transition-colors hover:bg-surface-800/30"
                    >
                      <td className="py-4 pr-4 text-sm text-surface-200">{feature.name}</td>
                      {plans.map((plan) => {
                        const val = feature[plan];
                        return (
                          <td key={plan} className="px-4 py-4 text-center text-sm">
                            {typeof val === "boolean" ? (
                              val ? (
                                <Check size={18} className="mx-auto text-emerald-400" />
                              ) : (
                                <X size={18} className="mx-auto text-surface-600" />
                              )
                            ) : (
                              <span className="text-surface-300">{val}</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
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
