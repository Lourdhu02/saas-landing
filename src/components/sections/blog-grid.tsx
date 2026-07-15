"use client";

import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";
import { Badge, Card, CardContent } from "@/components/ui";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { formatDate, truncateText } from "@/lib/utils";
import { blogPosts } from "@/data/site";
import type { BlogPost } from "@/types";

interface BlogGridProps {
  posts?: BlogPost[];
}

export function BlogGrid({ posts = blogPosts }: BlogGridProps) {
  return (
    <section className="py-24">
      <div className="container-page">
        <FadeIn className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="gradient-text">Latest Insights</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-surface-400">
            Stay up to date with the latest in AI technology, industry trends,
            and expert analysis.
          </p>
        </FadeIn>

        <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <Card className="group h-full overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-surface-700 to-surface-800" />
                <CardContent className="space-y-3 p-6">
                  <Badge variant="brand">{post.category}</Badge>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-lg font-semibold text-surface-50 transition-colors group-hover:text-brand-400">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-surface-400">
                    {truncateText(post.excerpt, 120)}
                  </p>
                  <div className="flex items-center gap-4 pt-2 text-xs text-surface-500">
                    <span className="flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                  <div className="pt-2">
                    <span className="text-xs text-surface-500">
                      {formatDate(post.date)}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-brand-400 transition-colors hover:text-brand-300"
                  >
                    Read More
                    <ArrowRight size={14} />
                  </Link>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
