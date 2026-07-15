import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "@/components/sections/contact-form";

describe("ContactForm", () => {
  it("renders all form fields", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText(/Company/)).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument();
  });

  it("shows validation errors on empty submit", async () => {
    render(<ContactForm />);
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText("Name must be at least 2 characters")).toBeInTheDocument();
    });
    expect(screen.getByText("Please enter a valid email")).toBeInTheDocument();
    expect(screen.getByText("Message must be at least 10 characters")).toBeInTheDocument();
  });

  it("shows success message on valid submission", async () => {
    render(<ContactForm />);
    const user = userEvent.setup();

    await user.type(screen.getByLabelText("Name"), "John Doe");
    await user.type(screen.getByLabelText("Email"), "john@example.com");
    await user.type(screen.getByLabelText(/Company/), "Acme Inc.");
    await user.type(screen.getByLabelText("Message"), "Hello, I would like to know more about your services.");

    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText("Message Sent!")).toBeInTheDocument();
    }, { timeout: 2000 });
  });

  it("company field is optional", async () => {
    render(<ContactForm />);
    const user = userEvent.setup();

    await user.type(screen.getByLabelText("Name"), "John Doe");
    await user.type(screen.getByLabelText("Email"), "john@example.com");
    await user.type(screen.getByLabelText("Message"), "Hello, I would like to know more about your services.");

    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText("Message Sent!")).toBeInTheDocument();
    }, { timeout: 2000 });
  });
});
