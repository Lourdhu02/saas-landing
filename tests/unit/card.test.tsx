import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui";

describe("Card", () => {
  it("renders children", () => {
    render(<Card><p>Card content</p></Card>);
    expect(screen.getByText("Card content")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Card className="my-card">Test</Card>);
    expect(screen.getByText("Test").className).toContain("my-card");
  });
});

describe("CardHeader", () => {
  it("renders children", () => {
    render(<CardHeader><h3>Header</h3></CardHeader>);
    expect(screen.getByText("Header")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<CardHeader className="custom-header">Header</CardHeader>);
    expect(screen.getByText("Header").className).toContain("custom-header");
  });
});

describe("CardContent", () => {
  it("renders children", () => {
    render(<CardContent><p>Content</p></CardContent>);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<CardContent className="custom-content">Content</CardContent>);
    expect(screen.getByText("Content").className).toContain("custom-content");
  });
});

describe("CardFooter", () => {
  it("renders children", () => {
    render(<CardFooter><span>Footer</span></CardFooter>);
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<CardFooter className="custom-footer">Footer</CardFooter>);
    expect(screen.getByText("Footer").className).toContain("custom-footer");
  });
});

describe("Card composition", () => {
  it("renders all card subcomponents together", () => {
    render(
      <Card className="composed">
        <CardHeader>Header</CardHeader>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
    );
    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });
});
