"use client";

import { useState } from "react";
import { Header, Footer } from "@/components/layout";
import { BlogGrid } from "@/components/sections";
import { FadeIn } from "@/components/motion";
import { Button } from "@/components/ui";
import { blogPosts } from "@/data/site";

const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const visiblePosts = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <>
      <Header />
      <main>
        <section className="relative flex min-h-[50vh] items-center overflow-hidden pt-16">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-950/30 via-surface-950 to-surface-950" />
          <div className="container-page relative z-10 text-center">
            <FadeIn>
              <h1 className="text-5xl font-bold md:text-7xl">
                <span className="gradient-text">Our Blog</span>
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-surface-400">
                Insights, tutorials, and thought leadership from our AI experts.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-12">
          <div className="container-page">
            <div className="mb-12 flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setVisibleCount(6);
                  }}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "border-brand-500 bg-brand-500/15 text-brand-400"
                      : "border-surface-700 text-surface-400 hover:border-surface-600 hover:text-surface-50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <BlogGrid posts={visiblePosts} />

            {hasMore && (
              <div className="mt-12 text-center">
                <Button
                  variant="secondary"
                  onClick={() => setVisibleCount((prev) => prev + 3)}
                >
                  Load More Posts
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
