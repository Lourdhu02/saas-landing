"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";
import { navLinks } from "@/data/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "glass shadow-lg shadow-surface-950/50"
          : "bg-transparent"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          <span className="gradient-text">AI SaaS</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors duration-200",
                pathname === link.href
                  ? "text-brand-400"
                  : "text-surface-400 hover:text-surface-50"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" variant="primary" size="sm">
            Get Started
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 p-2 text-surface-400 hover:text-surface-50 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-surface-950/95 backdrop-blur-lg transition-all duration-300 md:hidden",
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-2xl font-medium transition-all duration-300",
                pathname === link.href
                  ? "text-brand-400"
                  : "text-surface-400 hover:text-surface-50",
                mobileOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              )}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact" variant="primary" size="lg" className="mt-4">
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
}
