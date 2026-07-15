import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "@/components/ui";

describe("Input", () => {
  it("renders with label", () => {
    render(<Input label="Full Name" />);
    expect(screen.getByLabelText("Full Name")).toBeInTheDocument();
  });

  it("accepts value changes", async () => {
    const handleChange = vi.fn();
    render(<Input label="Email" onChange={handleChange} />);
    const user = userEvent.setup();
    const input = screen.getByLabelText("Email");
    await user.type(input, "a");
    expect(handleChange).toHaveBeenCalled();
  });

  it("displays error message", () => {
    render(<Input label="Name" error="This field is required" />);
    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("shows helper text when no error", () => {
    render(<Input label="Email" helperText="We will never share your email" />);
    expect(screen.getByText("We will never share your email")).toBeInTheDocument();
  });

  it("hides helper text when error is present", () => {
    render(
      <Input
        label="Email"
        helperText="We will never share your email"
        error="Invalid email"
      />
    );
    expect(screen.queryByText("We will never share your email")).not.toBeInTheDocument();
    expect(screen.getByText("Invalid email")).toBeInTheDocument();
  });

  it("generates id from label", () => {
    render(<Input label="Full Name" />);
    expect(screen.getByLabelText("Full Name")).toHaveAttribute("id", "full-name");
  });

  it("uses provided id over generated one", () => {
    render(<Input label="Name" id="custom-id" />);
    expect(screen.getByLabelText("Name")).toHaveAttribute("id", "custom-id");
  });
});
