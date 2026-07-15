"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, Card, Badge } from "@/components/ui";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { pricingPlans } from "@/data/site";
import type { PricingPlan } from "@/types";

export function PricingTable() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="section-padding" id="pricing">
      <div className="container-page">
        <FadeIn className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl font-display text-surface-900">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-surface-500">
            Choose the plan that fits your needs. No hidden fees, no surprises.
          </p>
        </FadeIn>

        <FadeIn className="mb-10 flex items-center justify-center gap-4">
          <span
            className={cn(
              "text-sm font-medium transition-colors",
              !annual ? "text-surface-900" : "text-surface-400"
            )}
          >
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={cn(
              "relative h-7 w-12 rounded-full transition-colors",
              annual ? "bg-brand-500" : "bg-surface-300"
            )}
            aria-label="Toggle billing period"
          >
            <span
              className={cn(
                "absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition-transform shadow-sm",
                annual && "translate-x-5"
              )}
            />
          </button>
          <span
            className={cn(
              "text-sm font-medium transition-colors",
              annual ? "text-surface-900" : "text-surface-400"
            )}
          >
            Annual{" "}
            <span className="text-emerald-600 font-medium">Save 20%</span>
          </span>
        </FadeIn>

        <StaggerContainer className="grid gap-8 md:grid-cols-3 items-start">
          {pricingPlans.map((plan: PricingPlan) => {
            const price = annual
              ? plan.id === "enterprise"
                ? "Custom"
                : plan.price * 10
              : plan.id === "enterprise"
                ? "Custom"
                : plan.price;

            return (
              <StaggerItem key={plan.id}>
                <div
                  className={cn(
                    "relative rounded-2xl transition-all duration-300",
                    plan.popular && "z-10"
                  )}
                >
                  {plan.popular && (
                    <div className="gradient-border rounded-2xl">
                      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-brand-400 to-accent-500 opacity-20 blur-sm" />
                    </div>
                  )}
                  <Card
                    className={cn(
                      "relative h-full flex flex-col",
                      plan.popular && "border-brand-300/50 shadow-xl shadow-brand-500/10"
                    )}
                    padding="lg"
                  >
                    {plan.popular && (
                      <Badge variant="accent" className="mb-4 self-start">
                        Most Popular
                      </Badge>
                    )}
                    <h3 className="text-xl font-semibold text-surface-900">
                      {plan.name}
                    </h3>
                    <p className="mt-2 text-sm text-surface-500">
                      {plan.description}
                    </p>
                    <div className="mt-6 flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-surface-900">
                        {typeof price === "number" ? `$${price.toLocaleString()}` : price}
                      </span>
                      {typeof price === "number" && (
                        <span className="text-sm text-surface-500">
                          /{annual ? "yr" : "mo"}
                        </span>
                      )}
                    </div>
                    <ul className="mt-8 flex-1 space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-surface-600"
                        >
                          <Check
                            size={18}
                            className="mt-0.5 shrink-0 text-emerald-500"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      href={plan.id === "enterprise" ? "/contact" : "/pricing"}
                      variant={plan.popular ? "primary" : "outline"}
                      className="mt-8 w-full"
                    >
                      {plan.cta}
                    </Button>
                  </Card>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
