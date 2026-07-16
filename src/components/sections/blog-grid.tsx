"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, User } from "lucide-react";
import { Badge, Card } from "@/components/ui";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { formatDate, truncateText } from "@/lib/utils";
import { blogPosts } from "@/data/site";
import type { BlogPost } from "@/types";

interface BlogGridProps {
  posts?: BlogPost[];
}

export function BlogGrid({ posts = blogPosts }: BlogGridProps) {
  const [featured, ...remaining] = posts;
  const gridPosts = remaining.slice(0, 3);

  return (
    <section className="section-padding" id="blog">
      <div className="container-page">
        <FadeIn className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl font-display text-surface-900">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-surface-500">
            Stay up to date with the latest in AI technology, industry trends,
            and expert analysis from the Aethra team.
          </p>
        </FadeIn>

        {featured && (
          <FadeIn className="mb-8">
            <Link href={`/blog/${featured.slug}`} className="group block">
              <Card className="overflow-hidden" padding="none">
                <div className="grid md:grid-cols-2">
                  <div className="aspect-video md:aspect-auto relative overflow-hidden">
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="default">{featured.category}</Badge>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center p-8 space-y-4">
                    <h3 className="text-2xl font-bold text-surface-900 group-hover:text-brand-600 transition-colors">
                      {featured.title}
                    </h3>
                    <p className="text-sm text-surface-500 leading-relaxed">
                      {truncateText(featured.excerpt, 200)}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-surface-500">
                      <span className="flex items-center gap-1.5">
                        <User size={14} />
                        {featured.author}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} />
                        {featured.readTime}
                      </span>
                      <span>{formatDate(featured.date)}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 group-hover:underline">
                      Read article <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          </FadeIn>
        )}

        <StaggerContainer className="grid gap-8 md:grid-cols-3">
          {gridPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <Card className="h-full overflow-hidden" padding="none">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant={post.featured ? "default" : "outline"}>{post.category}</Badge>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-semibold text-surface-900 group-hover:text-brand-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-surface-500 leading-relaxed">
                      {truncateText(post.excerpt, 120)}
                    </p>
                    <div className="flex items-center gap-3 pt-2 text-xs text-surface-500">
                      <span className="flex items-center gap-1.5">
                        <User size={14} />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>
                    <div className="text-xs text-surface-400">
                      {formatDate(post.date)}
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 group-hover:underline">
                      Read article <ArrowRight size={14} />
                    </span>
                  </div>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
