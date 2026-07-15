"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, Card, CardContent } from "@/components/ui";
import { FadeIn } from "@/components/motion";
import { pricingPlans } from "@/data/site";

export function PricingTable() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="py-24" id="pricing">
      <div className="container-page">
        <FadeIn className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="gradient-text">Simple Pricing</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-surface-400">
            Choose the plan that fits your needs. No hidden fees, no surprises.
          </p>
        </FadeIn>

        <FadeIn className="mb-10 flex items-center justify-center gap-4">
          <span
            className={cn(
              "text-sm font-medium transition-colors",
              !annual ? "text-surface-50" : "text-surface-500"
            )}
          >
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={cn(
              "relative h-7 w-12 rounded-full transition-colors",
              annual ? "bg-brand-500" : "bg-surface-700"
            )}
          >
            <span
              className={cn(
                "absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition-transform",
                annual && "translate-x-5"
              )}
            />
          </button>
          <span
            className={cn(
              "text-sm font-medium transition-colors",
              annual ? "text-surface-50" : "text-surface-500"
            )}
          >
            Annual{" "}
            <span className="text-emerald-400">(2 months free)</span>
          </span>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan, index) => {
            const price = annual
              ? plan.id === "enterprise"
                ? "Custom"
                : plan.price * 10
              : plan.id === "enterprise"
                ? "Custom"
                : plan.price;

            return (
              <div
                key={plan.id}
                className={cn(
                  "relative rounded-2xl transition-all duration-300 hover:translate-y-[-4px]",
                  plan.highlighted && "z-10 scale-105"
                )}
              >
                {plan.highlighted && (
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-brand-400 to-brand-600 opacity-50" />
                )}
                <Card
                  className={cn(
                    "relative h-full",
                    plan.highlighted && "bg-surface-800"
                  )}
                >
                  <CardContent className="flex h-full flex-col p-8">
                    {plan.highlighted && (
                      <span className="mb-4 inline-block rounded-full bg-brand-500/15 px-3 py-1 text-xs font-medium text-brand-400">
                        Most Popular
                      </span>
                    )}
                    <h3 className="text-xl font-semibold text-surface-50">
                      {plan.name}
                    </h3>
                    <p className="mt-2 text-sm text-surface-400">
                      {plan.description}
                    </p>
                    <div className="mt-6 flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-surface-50">
                        {typeof price === "number" ? `$${price}` : price}
                      </span>
                      {typeof price === "number" && (
                        <span className="text-sm text-surface-400">
                          /{annual ? "yr" : "mo"}
                        </span>
                      )}
                    </div>
                    <ul className="mt-8 flex-1 space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-surface-300"
                        >
                          <Check
                            size={18}
                            className="mt-0.5 shrink-0 text-emerald-400"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      href={
                        plan.id === "enterprise" ? "/contact" : "/pricing"
                      }
                      variant={plan.highlighted ? "primary" : "secondary"}
                      className="mt-8 w-full"
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
