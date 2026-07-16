#  ️ Aethra — Enterprise AI Platform

> **Enterprise AI. Engineered for Impact.**

A production-grade SaaS landing page built with Next.js 16, Tailwind CSS v4, and TypeScript. Features 28 statically-generated routes, framer-motion + GSAP animations, full accessibility compliance, and a comprehensive test suite.

[![Built with Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js&labelColor=111)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&labelColor=111)](https://www.typescriptlang.org)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&labelColor=111)](https://tailwindcss.com)
[![Vitest](https://img.shields.io/badge/Vitest-3.0-6E9F18?logo=vitest&labelColor=111)](https://vitest.dev)
[![Playwright](https://img.shields.io/badge/Playwright-1.50-45BA4B?logo=playwright&labelColor=111)](https://playwright.dev)
[![Coverage](https://img.shields.io/badge/tests-87_passing-22c55e?labelColor=111)](https://github.com/Lourdhu02/saas-landing/actions)
[![ESLint](https://img.shields.io/badge/ESLint-9.0-4B32C3?logo=eslint&labelColor=111)](https://eslint.org)
[![License](https://img.shields.io/badge/license-MIT-6366f1?labelColor=111)](LICENSE)

---

##  ️ Overview

A fully-responsive, performance-optimized marketing site for an AI platform company. Every page is statically pre-rendered at build time for instant loads, with smooth scroll-driven animations, a complete design system, and battle-tested accessibility.

### ✨ Highlights

- **28 routes** — Home, About, Services (6 sub-pages), Pricing, Blog (6 posts), Contact + sitemap, robots.txt, PWA manifest, OG/Twitter images, favicons
- **100 Lighthouse score** potential — Zero client-side data fetches, optimized images, semantic HTML
- **Full accessibility** — `prefers-reduced-motion`, axe-core audits, skip-to-content, focus-visible rings, ARIA labels
- **Enterprise-grade SEO** — JSON-LD structured data, per-route OG metadata, auto-generated sitemap, dynamic robots.txt
- **Security-hardened** — CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy headers
- **87 tests** — Unit, integration, accessibility (axe-core), and Playwright E2E tests

---

##  Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **Language** | TypeScript 5.7 (strict mode) |
| **CSS** | Tailwind CSS v4 (CSS-first config, OKLCH colors) |
| **Animations** | framer-motion 12, GSAP 3, Lenis 1 (smooth scroll) |
| **Forms** | Zod validation, nodemailer (SMTP) |
| **Icons** | Lucide React |
| **Fonts** | Inter + Plus Jakarta Sans (self-hosted, variable) |
| **Unit / Integration** | Vitest, Testing Library, vitest-axe |
| **E2E** | Playwright |
| **Linting** | ESLint 9, TypeScript-ESLint, eslint-config-next |

---

##  Features

###  ️ Design System
- OKLCH color palette with dark/light mode support
- Self-hosted variable fonts (Inter, Plus Jakarta Sans)
- Reusable component library: Button, Badge, Card, Input, Textarea
- Responsive typography scale, consistent `section-padding` and `container-page` utilities
- Tailwind CSS v4 CSS-first configuration (no `tailwind.config.js`)

###  Animation Layer
- **framer-motion**: `FadeIn`, `StaggerContainer`/`StaggerItem`, `Marquee`, `AnimatePresence` page transitions
- **GSAP**: Parallax scroll effects, count-up counters, hero entrance timeline
- **Lenis**: Smooth scroll with easing customization
- `prefers-reduced-motion` respected in all animation components

###  ️ Sections
| Section | Description |
|---------|-------------|
| **Hero** | Animated gradient backdrop, floating dots, GSAP entrance, trust bar |
| **Features Bento** | 6-card responsive grid with staggered reveal |
| **Services Grid** | 6 service cards linking to detail pages |
| **Process Steps** | 6-step numbered timeline with icons |
| **Stats** | GSAP CountUp animations on scroll |
| **Pricing Table** | 3 plans (Starter / Growth / Enterprise) with highlighted popular tier |
| **Testimonials** | Dual-direction infinite marquee with star ratings |
| **Blog Grid** | Featured + 3 grid posts with categories and read time |
| **Team Grid** | 4 member cards with hover bio overlay and social links |
| **CTA** | Dual-theme call-to-action band |
| **FAQ** | Accordion with smooth open/close animations |
| **Contact Form** | Full validation, honeypot spam protection, rate limiting, SMTP submission |

###  ️ SEO & Structured Data
- Auto-generated `sitemap.xml` and `robots.txt`
- Dynamic `opengraph-image.tsx` and `twitter-image.tsx` per route
- JSON-LD for Organization, FAQ, SoftwareApplication, BreadcrumbList schemas
- Per-route `generateMetadata` with Open Graph and Twitter card support

###  Security Headers
Middleware applies to all routes:
- `Content-Security-Policy`
- `Strict-Transport-Security`
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` ( granular capability restrictions)

### ♿ Accessibility
- Skip-to-content link
- Focus-visible ring styling on all interactive elements
- `prefers-reduced-motion` respected in both CSS and framer-motion
- Semantic HTML with proper heading hierarchy
- ARIA labels on icon-only buttons and links
- Automated axe-core audit in CI

###  ️ Content
All site data is centralized in `src/data/site.ts` — blog posts, team members, testimonials, pricing plans, services, FAQs, navigation. Blog posts use placeholder content structure ready for MDX/CMS integration.

---

##  Getting Started

```bash
# Clone the repository
git clone https://github.com/Lourdhu02/saas-landing.git
cd saas-landing

# Install dependencies
npm install

# Start the development server (Turbopack)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

###  ️ Production Build

```bash
npm run build
npm start
```

The build generates all pages as static HTML (SSG) except the contact API route (dynamic). Blog and service detail pages are pre-rendered from `generateStaticParams`.

---

##  Project Structure

```
saas-landing/
├── public/                    # Static assets
│   ├── blog/                  # Blog hero images (Unsplash)
│   ├── team/                  # Team member headshots (Unsplash)
│   ├── testimonials/          # Testimonial avatars (Unsplash)
│   ├── services/              # Service hero images (Unsplash)
│   ├── fonts/                 # Self-hosted variable fonts
│   └── og.jpg                 # Open Graph default image
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── blog/[slug]/       # Blog detail pages (SSG)
│   │   ├── services/[slug]/   # Service detail pages (SSG)
│   │   ├── pricing/           # Pricing page
│   │   ├── contact/           # Contact page
│   │   ├── api/contact/       # Contact form API route
│   │   ├── layout.tsx         # Root layout with JSON-LD
│   │   ├── page.tsx           # Home page (all sections)
│   │   └── *.tsx              # OG images, icons, manifest
│   ├── components/
│   │   ├── ui/                # Design system primitives
│   │   ├── sections/          # Page sections
│   │   ├── motion/            # Animation components
│   │   └── layout/            # Header, Footer
│   ├── data/site.ts           # All content data
│   ├── lib/                   # Utilities, fonts, SEO helpers
│   └── types/index.ts         # TypeScript interfaces
├── tests/
│   ├── unit/                  # Component unit tests
│   ├── integration/           # Integration + a11y tests
│   └── e2e/                   # Playwright E2E tests
├── middleware.ts              # Security headers
├── vitest.config.ts           # Vitest configuration
├── playwright.config.ts       # Playwright configuration
└── next.config.ts             # Next.js configuration
```

---

##  Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Production build (static generation) |
| `npm start` | Serve production build |
| `npm run lint` | ESLint on `src/` |
| `npm run typecheck` | TypeScript compiler check (`tsc --noEmit`) |
| `npm test` | Run Vitest test suite (87 tests) |
| `npm run test:watch` | Vitest in watch mode |
| `npm run test:e2e` | Run Playwright E2E tests |

---

##  Environment Variables

Copy `.env.example` to `.env.local`:

```env
# SMTP (contact form)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your@email.com
SMTP_PASS=your-password

# Where contact form submissions are sent
CONTACT_EMAIL=hello@aethra.ai
```

The site runs fully without environment variables. Only the contact form API route requires SMTP credentials.

---

##  Testing

```bash
# Run all unit + integration + a11y tests
npm test

# Watch mode
npm run test:watch

# E2E tests (requires `npx playwright install`)
npm run test:e2e
```

**Coverage breakdown:**

| Layer | Tool | Count |
|-------|------|-------|
|  ️ Unit | Vitest + Testing Library | 49 tests |
|   Integration | Vitest + Testing Library | 28 tests |
| ♿ Accessibility | vitest-axe | 6 audits |
|  ️ End-to-end | Playwright | 4 specs |

---

##  Deployment

This site is fully static and can be deployed to any static hosting:

```bash
# Build
npm run build

# The `out/` directory contains the static export
npx serve out
```

**Recommended platforms:** Vercel (native Next.js support), Cloudflare Pages, Netlify, AWS S3 + CloudFront.

---

##  License

MIT — see [LICENSE](LICENSE)

---

<p align="center">
  Built with  ️ by <a href="https://github.com/Lourdhu02">Lourdhu02</a>
</p>
