import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PricingTable } from "@/components/sections/pricing-table";
import { pricingPlans } from "@/data/site";

describe("PricingTable", () => {
  it("renders all 3 pricing plans", () => {
    render(<PricingTable />);
    for (const plan of pricingPlans) {
      expect(screen.getByText(plan.name)).toBeInTheDocument();
    }
  });

  it("rendes monthly prices by default", () => {
    render(<PricingTable />);
    expect(screen.getByText("$99")).toBeInTheDocument();
    expect(screen.getByText("$299")).toBeInTheDocument();
  });

  it("toggles to yearly prices when toggle is clicked", async () => {
    render(<PricingTable />);
    const user = userEvent.setup();
    const toggle = screen.getByRole("button", { name: "" });
    await user.click(toggle);

    expect(screen.getByText("$990")).toBeInTheDocument();
    expect(screen.getByText("$2990")).toBeInTheDocument();
  });

  it("shows Custom price for enterprise", () => {
    render(<PricingTable />);
    const customPrices = screen.getAllByText("Custom");
    expect(customPrices.length).toBeGreaterThanOrEqual(1);
  });

  it("renders feature lists for each plan", () => {
    render(<PricingTable />);
    for (const plan of pricingPlans) {
      if (plan.features.length > 0) {
        expect(screen.getByText(plan.features[0])).toBeInTheDocument();
      }
    }
  });

  it("shows Most Popular badge for highlighted plan", () => {
    render(<PricingTable />);
    const highlightedPlan = pricingPlans.find((p) => p.highlighted);
    expect(highlightedPlan).toBeDefined();
    const popularBadges = screen.getAllByText("Most Popular");
    expect(popularBadges.length).toBeGreaterThanOrEqual(1);
  });

  it("renders CTA buttons for each plan", () => {
    render(<PricingTable />);
    for (const plan of pricingPlans) {
      expect(screen.getByText(plan.cta)).toBeInTheDocument();
    }
  });
});
