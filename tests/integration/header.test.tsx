import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "@/components/layout/header";
import { navLinks } from "@/data/site";

describe("Header", () => {
  it("renders all nav links from site.navLinks", () => {
    render(<Header />);
    for (const link of navLinks) {
      const navLinkElements = screen.getAllByText(link.label);
      expect(navLinkElements.length).toBe(2);
    }
  });

  it("renders logo text AI SaaS", () => {
    render(<Header />);
    const logo = screen.getByText("AI SaaS");
    expect(logo).toBeInTheDocument();
    expect(logo.closest("a")).toHaveAttribute("href", "/");
  });

  it("renders Get Started CTA button", () => {
    render(<Header />);
    const ctaButtons = screen.getAllByText("Get Started");
    expect(ctaButtons.length).toBe(2);
  });

  it("toggles mobile menu when hamburger is clicked", async () => {
    render(<Header />);
    const toggleBtn = screen.getByLabelText("Toggle menu");
    const user = userEvent.setup();

    await user.click(toggleBtn);
    const mobileLinks = screen.getAllByText("Home");
    const mobileLink = mobileLinks.find((l) => l.className.includes("text-2xl"));
    expect(mobileLink).toBeTruthy();
    expect(mobileLink?.className).not.toContain("opacity-0");
  });

  it("highlights active link based on pathname", () => {
    render(<Header />);
    const links = screen.getAllByText("Home");
    const activeLink = links.find((l) => l.className.includes("text-brand-400"));
    expect(activeLink).toBeTruthy();
  });

  it("renders desktop navigation with hidden class", () => {
    render(<Header />);
    const servicesLinks = screen.getAllByText("Services");
    const desktopLink = servicesLinks.find(
      (l) => l.className.includes("text-sm") && l.className.includes("font-medium")
    );
    expect(desktopLink).toBeTruthy();
  });
});
