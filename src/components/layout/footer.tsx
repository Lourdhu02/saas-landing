import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import { siteConfig } from "@/data/site";

const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Natural Language Processing", href: "/services/nlp" },
      { label: "Computer Vision", href: "/services/computer-vision" },
      { label: "Predictive Analytics", href: "/services/predictive-analytics" },
      { label: "Intelligent Automation", href: "/services/automation" },
      { label: "Data Engineering", href: "/services/data-engineering" },
      { label: "Security & Compliance", href: "/services/security" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "System Status", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Github, href: siteConfig.links.github, label: "GitHub" },
  { icon: Twitter, href: siteConfig.links.twitter, label: "Twitter" },
  { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-surface-900 text-surface-300">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-6">
          <div className="space-y-6 md:col-span-2">
            <Link href="/" className="text-xl font-bold">
              <span className="gradient-text">Aethra</span>
            </Link>
            <p className="text-sm leading-relaxed text-surface-400 max-w-xs">
              {siteConfig.tagline} — {siteConfig.description}
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

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-surface-500">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
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
          ))}
        </div>
      </div>

      <div className="border-t border-surface-800 py-6">
        <div className="container-page flex flex-col items-center justify-between gap-4 text-sm text-surface-500 md:flex-row">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            {footerColumns[3].links.map((link) => (
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
