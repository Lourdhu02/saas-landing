import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, User, Tag } from "lucide-react";
import { Badge, Button } from "@/components/ui";
import { formatDate } from "@/lib/utils";
import { blogPosts } from "@/data/site";
import type { BlogPost } from "@/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter(
      (p) =>
        p.slug !== slug &&
        (p.category === post.category ||
          p.tags.some((t) => post.tags.includes(t)))
    )
    .slice(0, 3);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 glass shadow-lg shadow-surface-950/50">
        <div className="container-page flex h-16 items-center">
          <Link href="/" className="text-xl font-bold">
            <span className="gradient-text">AI SaaS</span>
          </Link>
        </div>
      </header>

      <main className="pt-16">
        <article className="py-24">
          <div className="container-page max-w-3xl">
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm text-surface-400 transition-colors hover:text-surface-50"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>

            <div className="mb-8 space-y-4">
              <Badge variant="brand">{post.category}</Badge>
              <h1 className="text-3xl font-bold leading-tight md:text-5xl">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-surface-400">
                <span className="flex items-center gap-1">
                  <User size={16} />
                  {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  {post.readTime}
                </span>
                <span>{formatDate(post.date)}</span>
              </div>
            </div>

            <div className="aspect-video rounded-2xl bg-gradient-to-br from-surface-700 to-surface-800 mb-12" />

            <div className="prose prose-invert max-w-none space-y-6 text-surface-300">
              <p>
                This is where the full blog post content would appear. In a
                production build, this would be rendered from MDX or a CMS.
                Below are some placeholder sections to demonstrate the layout.
              </p>
              <h2 className="text-2xl font-semibold text-surface-50">
                Section Heading
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-3 border-y border-surface-800 py-6">
              <Tag size={16} className="text-surface-400" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-surface-700 bg-surface-800/50 px-3 py-1 text-xs text-surface-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <section className="border-t border-surface-800 py-24">
            <div className="container-page">
              <h2 className="mb-12 text-2xl font-bold text-surface-50">
                Related Posts
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="group"
                  >
                    <div className="aspect-video rounded-xl bg-gradient-to-br from-surface-700 to-surface-800 mb-4" />
                    <Badge variant="brand" className="mb-2">
                      {rp.category}
                    </Badge>
                    <h3 className="text-lg font-semibold text-surface-50 transition-colors group-hover:text-brand-400">
                      {rp.title}
                    </h3>
                    <p className="mt-1 text-sm text-surface-400">
                      {rp.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="border-t border-surface-800 py-8">
        <div className="container-page text-center text-sm text-surface-500">
          &copy; {new Date().getFullYear()} AI SaaS. All rights reserved.
        </div>
      </footer>
    </>
  );
}
