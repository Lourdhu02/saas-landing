import { describe, it, expect } from "vitest";
import { cn, formatDate, truncateText, validateEmail } from "@/lib/utils";

describe("cn", () => {
  it("merges class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("handles conditional classes", () => {
    expect(cn("base", false && "hidden", "visible")).toBe("base visible");
  });

  it("merges tailwind classes correctly", () => {
    expect(cn("px-4", "px-6")).toBe("px-6");
  });

  it("handles empty input", () => {
    expect(cn()).toBe("");
  });

  it("handles array arguments", () => {
    expect(cn(["foo", "bar"], "baz")).toBe("foo bar baz");
  });
});

describe("formatDate", () => {
  it("formats a Date ISO string", () => {
    const result = formatDate("2026-06-01");
    expect(result).toBe("June 1, 2026");
  });

  it("formats a date string with time", () => {
    const result = formatDate("2026-05-15T10:30:00Z");
    expect(result).toContain("May");
  });

  it("handles different dates", () => {
    expect(formatDate("2026-01-01")).toBe("January 1, 2026");
    expect(formatDate("2026-12-25")).toBe("December 25, 2026");
  });
});

describe("truncateText", () => {
  it("returns text unchanged when shorter than maxLength", () => {
    expect(truncateText("Hello", 10)).toBe("Hello");
  });

  it("truncates text that exceeds maxLength", () => {
    const long = "This is a very long string that should be truncated";
    const result = truncateText(long, 20);
    expect(result).toBe("This is a very long...");
  });

  it("handles exact length", () => {
    expect(truncateText("Exact", 5)).toBe("Exact");
  });

  it("handles empty string", () => {
    expect(truncateText("", 5)).toBe("");
  });

  it("trims trailing whitespace before adding ellipsis", () => {
    const result = truncateText("Hello world and more", 12);
    expect(result).toBe("Hello world...");
  });
});

describe("validateEmail", () => {
  it("returns true for valid emails", () => {
    expect(validateEmail("test@example.com")).toBe(true);
    expect(validateEmail("user.name+tag@domain.co")).toBe(true);
    expect(validateEmail("a@b.cd")).toBe(true);
  });

  it("returns false for invalid emails", () => {
    expect(validateEmail("")).toBe(false);
    expect(validateEmail("not-an-email")).toBe(false);
    expect(validateEmail("@domain.com")).toBe(false);
    expect(validateEmail("user@")).toBe(false);
    expect(validateEmail("user@.com")).toBe(false);
  });

  it("returns false for strings without @", () => {
    expect(validateEmail("userexample.com")).toBe(false);
  });
});
