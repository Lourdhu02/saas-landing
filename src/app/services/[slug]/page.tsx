import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Badge, Button } from "@/components/ui";
import { services, siteConfig } from "@/data/site";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | ${siteConfig.name}`,
      description: service.description,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) notFound();

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-xl shadow-sm border-b border-surface-200/50">
        <div className="container-page flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            <span className="gradient-text">{siteConfig.name}</span>
          </Link>
          <Button href="/contact" variant="primary" size="sm">
            Get Started
          </Button>
        </div>
      </header>

      <main className="pt-16">
        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-surface-50 via-brand-50/30 to-surface-50" />
          <div className="container-page relative z-10">
            <Link
              href="/services"
              className="mb-8 inline-flex items-center gap-2 text-sm text-surface-500 transition-colors hover:text-surface-900"
            >
              <ArrowLeft size={16} />
              Back to Services
            </Link>
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <Badge variant="brand" dot>
                  {service.title.split(" ").slice(-1).join(" ")}
                </Badge>
                <h1 className="text-4xl font-bold leading-tight md:text-5xl font-display text-surface-900">
                  {service.title}
                </h1>
                <p className="text-lg text-surface-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button href="/contact" variant="primary" size="lg">
                    Get Started
                  </Button>
                  <Button href="/pricing" variant="outline" size="lg">
                    View Pricing
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 z-10`} />
                <Image
                  src={`/services/${service.id}.jpg`}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-page max-w-3xl">
            <h2 className="text-3xl font-bold font-display text-surface-900">
              Key <span className="gradient-text">Features</span>
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {service.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-xl border border-surface-200 bg-surface-50 p-5"
                >
                  <CheckCircle size={20} className="mt-0.5 shrink-0 text-brand-500" />
                  <span className="text-surface-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-surface-200 bg-surface-50 py-8">
        <div className="container-page text-center text-sm text-surface-500">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </footer>
    </>
  );
}
