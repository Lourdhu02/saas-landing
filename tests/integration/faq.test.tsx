import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FAQ } from "@/components/sections/faq";
import { faqs } from "@/data/site";

describe("FAQ", () => {
  it("renders all FAQ items", () => {
    render(<FAQ />);
    for (const faq of faqs) {
      expect(screen.getByText(faq.question)).toBeInTheDocument();
    }
  });

  it("clicking a question expands the answer", async () => {
    render(<FAQ />);
    const user = userEvent.setup();
    const firstFaq = faqs[0];

    await user.click(screen.getByText(firstFaq.question));
    expect(screen.getByText(firstFaq.answer)).toBeInTheDocument();
  });

  it("clicking again collapses the answer", async () => {
    render(<FAQ />);
    const user = userEvent.setup();
    const firstFaq = faqs[0];

    await user.click(screen.getByText(firstFaq.question));
    expect(screen.getByText(firstFaq.answer)).toBeInTheDocument();

    await user.click(screen.getByText(firstFaq.question));
    expect(screen.queryByText(firstFaq.answer)).not.toBeInTheDocument();
  });

  it("only one item open at a time (accordion behavior)", async () => {
    render(<FAQ />);
    const user = userEvent.setup();

    await user.click(screen.getByText(faqs[0].question));
    expect(screen.getByText(faqs[0].answer)).toBeInTheDocument();

    await user.click(screen.getByText(faqs[1].question));
    expect(screen.getByText(faqs[1].answer)).toBeInTheDocument();
    expect(screen.queryByText(faqs[0].answer)).not.toBeInTheDocument();
  });
});
