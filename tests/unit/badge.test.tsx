import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge } from "@/components/ui";

describe("Badge", () => {
  it("renders with text", () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("renders default variant", () => {
    render(<Badge>Default</Badge>);
    const badge = screen.getByText("Default");
    expect(badge.className).toContain("bg-surface-800");
  });

  it("renders brand variant", () => {
    render(<Badge variant="brand">Brand</Badge>);
    const badge = screen.getByText("Brand");
    expect(badge.className).toContain("bg-brand-500/15");
  });

  it("renders success variant", () => {
    render(<Badge variant="success">Success</Badge>);
    const badge = screen.getByText("Success");
    expect(badge.className).toContain("bg-emerald-500/15");
  });

  it("renders warning variant", () => {
    render(<Badge variant="warning">Warning</Badge>);
    const badge = screen.getByText("Warning");
    expect(badge.className).toContain("bg-amber-500/15");
  });

  it("applies custom className", () => {
    render(<Badge className="my-badge">Custom</Badge>);
    expect(screen.getByText("Custom").className).toContain("my-badge");
  });
});
