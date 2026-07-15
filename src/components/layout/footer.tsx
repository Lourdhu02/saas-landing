"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";
import { siteConfig, navLinks } from "@/data/site";

const footerLinks = {
  services: [
    { label: "NLP", href: "/services" },
    { label: "Computer Vision", href: "/services" },
    { label: "Predictive Analytics", href: "/services" },
    { label: "Automation", href: "/services" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const socialLinks = [
  { icon: Github, href: siteConfig.links.github, label: "GitHub" },
  { icon: Twitter, href: siteConfig.links.twitter, label: "Twitter" },
  { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="border-t border-surface-800 bg-surface-950">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <Link href="/" className="text-xl font-bold">
              <span className="gradient-text">AI SaaS</span>
            </Link>
            <p className="text-sm leading-relaxed text-surface-400">
              {siteConfig.description}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-surface-700 text-surface-400 transition-colors hover:border-brand-500/50 hover:text-brand-400"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-surface-300">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-surface-400 transition-colors hover:text-surface-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-surface-300">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-surface-400 transition-colors hover:text-surface-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-surface-300">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-surface-400 transition-colors hover:text-surface-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-12 mt-12 rounded-2xl glass p-8">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-surface-50">
                Stay Updated
              </h3>
              <p className="text-sm text-surface-400">
                Get the latest AI insights delivered to your inbox.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full max-w-md gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-surface-700 bg-surface-900/50 px-4 py-2.5 text-sm text-surface-50 placeholder-surface-500 backdrop-blur-sm transition-colors focus:border-brand-500/50 focus:outline-none focus:ring-2 focus:ring-brand-500/50"
              />
              <Button type="submit" variant="primary" size="md">
                <Send size={16} />
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-surface-800 py-6">
        <div className="container-page flex flex-col items-center justify-between gap-4 text-sm text-surface-500 md:flex-row">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-surface-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
