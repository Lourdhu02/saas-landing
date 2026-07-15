"use client";

import { Mail, MapPin, Phone, Github, Twitter, Linkedin } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { ContactForm, FAQ, FadeIn } from "@/components/sections";
import { siteConfig } from "@/data/site";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative flex min-h-[50vh] items-center overflow-hidden pt-16">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-950/30 via-surface-950 to-surface-950" />
          <div className="container-page relative z-10 text-center">
            <FadeIn>
              <h1 className="text-5xl font-bold md:text-7xl">
                <span className="gradient-text">Contact Us</span>
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-surface-400">
                Have a project in mind? Let&apos;s build something great together.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-24">
          <div className="container-page">
            <div className="grid gap-12 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <FadeIn direction="left">
                  <h2 className="mb-8 text-2xl font-semibold text-surface-50">
                    Send Us a Message
                  </h2>
                  <ContactForm />
                </FadeIn>
              </div>

              <div className="lg:col-span-2">
                <FadeIn direction="right">
                  <div className="glass space-y-8 rounded-2xl p-8">
                    <h2 className="text-2xl font-semibold text-surface-50">
                      Contact Info
                    </h2>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400">
                          <MapPin size={20} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-surface-50">
                            Office
                          </p>
                          <p className="text-sm text-surface-400">
                            123 AI Avenue, Suite 100
                            <br />
                            San Francisco, CA 94105
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400">
                          <Mail size={20} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-surface-50">
                            Email
                          </p>
                          <a
                            href="mailto:hello@synthwave-ai.com"
                            className="text-sm text-brand-400 transition-colors hover:text-brand-300"
                          >
                            hello@synthwave-ai.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400">
                          <Phone size={20} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-surface-50">
                            Phone
                          </p>
                          <p className="text-sm text-surface-400">
                            +1 (555) 123-4567
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-surface-700 pt-6">
                      <p className="mb-4 text-sm font-medium text-surface-300">
                        Follow Us
                      </p>
                      <div className="flex gap-3">
                        <a
                          href={siteConfig.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-10 w-10 items-center justify-center rounded-lg border border-surface-700 text-surface-400 transition-colors hover:border-brand-500/50 hover:text-brand-400"
                        >
                          <Github size={18} />
                        </a>
                        <a
                          href={siteConfig.links.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-10 w-10 items-center justify-center rounded-lg border border-surface-700 text-surface-400 transition-colors hover:border-brand-500/50 hover:text-brand-400"
                        >
                          <Twitter size={18} />
                        </a>
                        <a
                          href={siteConfig.links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-10 w-10 items-center justify-center rounded-lg border border-surface-700 text-surface-400 transition-colors hover:border-brand-500/50 hover:text-brand-400"
                        >
                          <Linkedin size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
    </>
  );
}
