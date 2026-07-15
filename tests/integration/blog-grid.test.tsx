import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BlogGrid } from "@/components/sections/blog-grid";
import { blogPosts } from "@/data/site";

describe("BlogGrid", () => {
  it("renders all blog post cards", () => {
    render(<BlogGrid />);
    for (const post of blogPosts) {
      expect(screen.getByText(post.title)).toBeInTheDocument();
    }
  });

  it("renders excerpt for each post", () => {
    render(<BlogGrid />);
    for (const post of blogPosts) {
      const excerpt = post.excerpt.length > 120
        ? post.excerpt.slice(0, 120).trimEnd() + "..."
        : post.excerpt;
      expect(screen.getByText(excerpt)).toBeInTheDocument();
    }
  });

  it("renders formatted date for each post", () => {
    render(<BlogGrid />);
    for (const post of blogPosts) {
      const expectedDate = new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      expect(screen.getByText(expectedDate)).toBeInTheDocument();
    }
  });

  it("renders category badges", () => {
    render(<BlogGrid />);
    const uniqueCategories = [...new Set(blogPosts.map((p) => p.category))];
    for (const category of uniqueCategories) {
      const badges = screen.getAllByText(category);
      const expectedCount = blogPosts.filter((p) => p.category === category).length;
      expect(badges.length).toBe(expectedCount);
    }
  });

  it("renders Read More links with correct slug URLs", () => {
    render(<BlogGrid />);
    const readMoreLinks = screen.getAllByText("Read More");
    expect(readMoreLinks.length).toBe(blogPosts.length);

    blogPosts.forEach((post, index) => {
      expect(readMoreLinks[index].closest("a")).toHaveAttribute(
        "href",
        `/blog/${post.slug}`
      );
    });
  });

  it("renders author name", () => {
    render(<BlogGrid />);
    const uniqueAuthors = [...new Set(blogPosts.map((p) => p.author))];
    for (const author of uniqueAuthors) {
      const authorElements = screen.getAllByText(author);
      expect(authorElements.length).toBeGreaterThanOrEqual(1);
    }
  });

  it("renders read time", () => {
    render(<BlogGrid />);
    const uniqueReadTimes = [...new Set(blogPosts.map((p) => p.readTime))];
    for (const readTime of uniqueReadTimes) {
      const readTimeElements = screen.getAllByText(readTime);
      expect(readTimeElements.length).toBeGreaterThanOrEqual(1);
    }
  });
});
