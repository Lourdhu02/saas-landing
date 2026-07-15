# Implementation Plan — Premium SaaS Landing Page with Agentic UI

## 1. Project Structure (Complete File Tree)

```
saas-landing/
├── .github/
│   └── workflows/
│       └── deploy.yml                    # Vercel deployment + preview
├── public/
│   ├── favicon/
│   │   ├── favicon.ico
│   │   ├── icon-192.png
│   │   ├── icon-512.png
│   │   └── apple-icon.png
│   ├── og/
│   │   ├── default.png                   # 1200×630 Open Graph default
│   │   ├── blog.png                      # Blog OG template
│   │   └── pricing.png                   # Pricing OG template
│   ├── fonts/
│   │   ├── Inter-Variable.woff2          # Self-hosted, subsetted
│   │   └── JetBrainsMono-Variable.woff2
│   ├── robots.txt                        # Dynamic (env-aware)
│   └── sitemap.xml                       # Auto-generated
├── src/
│   ├── app/
│   │   ├── layout.tsx                    # RootLayout: fonts, providers, metadata
│   │   ├── not-found.tsx                 # 404 page
│   │   ├── error.tsx                     # Global error boundary
│   │   ├── global-error.tsx              # Root error boundary
│   │   ├── loading.tsx                   # Root loading (suspense fallback)
│   │   ├── page.tsx                      # Home page (PPR)
│   │   ├── sitemap.ts                    # Dynamic sitemap
│   │   ├── robots.ts                     # Dynamic robots
│   │   ├── manifest.ts                   # PWA manifest
│   │   ├── (marketing)/                  # Route group (shared marketing layout)
│   │   │   ├── layout.tsx                # Marketing layout (header + footer)
│   │   │   ├── page.tsx                  # Home (alias for root page.tsx)
│   │   │   ├── pricing/
│   │   │   │   └── page.tsx
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   ├── waitlist/
│   │   │   │   └── page.tsx
│   │   │   └── changelog/
│   │   │       └── page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx                  # Blog index (paginated)
│   │   │   └── [slug]/
│   │   │       ├── page.tsx              # Blog post (MDX)
│   │   │       └── opengraph-image.tsx   # Dynamic OG image per post
│   │   └── legal/
│   │       ├── privacy/
│   │       │   └── page.mdx
│   │       └── terms/
│   │           └── page.mdx
│   ├── components/
│   │   ├── ui/                           # Atomic — atoms & molecules
│   │   │   ├── button.tsx
│   │   │   ├── text.tsx                   # Heading, Paragraph, Overline
│   │   │   ├── badge.tsx
│   │   │   ├── input.tsx                  # Input, Textarea, Select
│   │   │   ├── card.tsx                   # Base card with variants
│   │   │   ├── avatar.tsx
│   │   │   ├── logo.tsx                   # Icon + wordmark (dark/light)
│   │   │   ├── icon.tsx                   # Lucide wrapper
│   │   │   ├── skeleton.tsx
│   │   │   ├── divider.tsx
│   │   │   ├── tooltip.tsx
│   │   │   ├── toast.tsx
│   │   │   └── dialog.tsx
│   │   ├── sections/                      # Organisms — page sections
│   │   │   ├── hero/
│   │   │   │   ├── hero-default.tsx       # Split: headline + animated visual
│   │   │   │   ├── hero-live-demo.tsx     # Live interactive product demo
│   │   │   │   └── hero-agentic.tsx       # AI-assisted hero (query → demo)
│   │   │   ├── features/
│   │   │   │   ├── features-bento.tsx     # Bento grid layout
│   │   │   │   ├── features-tabs.tsx      # Tabbed feature showcase
│   │   │   │   └── features-comparison.tsx# Before/after comparison
│   │   │   ├── how-it-works/
│   │   │   │   ├── how-it-works-steps.tsx # Numbered steps
│   │   │   │   └── how-it-works-timeline.tsx
│   │   │   ├── pricing/
│   │   │   │   ├── pricing-cards.tsx      # 3-column with toggle
│   │   │   │   ├── pricing-enterprise.tsx # Custom enterprise CTA
│   │   │   │   └── pricing-comparison.tsx # Feature comparison table
│   │   │   ├── testimonials/
│   │   │   │   ├── testimonials-grid.tsx
│   │   │   │   ├── testimonials-carousel.tsx
│   │   │   │   ├── testimonials-marquee.tsx
│   │   │   │   └── testimonials-wall.tsx
│   │   │   ├── cta/
│   │   │   │   ├── cta-simple.tsx
│   │   │   │   ├── cta-split.tsx          # Half text, half graphic
│   │   │   │   └── cta-with-demo.tsx      # Embedded demo booking
│   │   │   ├── stats/
│   │   │   │   └── stats-counter.tsx      # Animated metrics row
│   │   │   ├── integrations/
│   │   │   │   ├── integrations-grid.tsx
│   │   │   │   └── integrations-marquee.tsx
│   │   │   ├── faq/
│   │   │   │   ├── faq-accordion.tsx
│   │   │   │   └── faq-categorized.tsx
│   │   │   ├── blog/
│   │   │   │   ├── blog-featured.tsx
│   │   │   │   ├── blog-grid.tsx
│   │   │   │   └── blog-subscribe.tsx
│   │   │   ├── contact/
│   │   │   │   ├── contact-form.tsx
│   │   │   │   └── contact-info.tsx
│   │   │   ├── waitlist/
│   │   │   │   ├── waitlist-form.tsx
│   │   │   │   └── waitlist-referral.tsx
│   │   │   └── footer/
│   │   │       └── footer.tsx
│   │   ├── layout/                        # Layout components
│   │   │   ├── header.tsx                 # Navigation (RSC + client island)
│   │   │   ├── mobile-nav.tsx             # Client island for mobile
│   │   │   ├── container.tsx              # Width constraint
│   │   │   ├── section.tsx                # Section wrapper + spacing
│   │   │   ├── grid.tsx                   # Responsive grid
│   │   │   ├── bento-grid.tsx             # Variable-weight grid
│   │   │   └── stack.tsx                  # Flex column with gap
│   │   ├── motion/                        # Motion component library
│   │   │   ├── reveal.tsx                 # Scroll reveal (fade + translate)
│   │   │   ├── stagger.tsx                # Stagger children reveal
│   │   │   ├── parallax.tsx               # Parallax scroll
│   │   │   ├── counter.tsx                # Count-up animation
│   │   │   ├── split-text.tsx             # Character/word reveal
│   │   │   ├── marquee.tsx                # Infinite horizontal scroll
│   │   │   ├── pin-section.tsx            # ScrollTrigger pin wrapper
│   │   │   ├── scrub-video.tsx            # Video scrub on scroll
│   │   │   ├── magnetic.tsx               # Magnetic hover effect
│   │   │   └── cursor.tsx                 # Custom cursor (optional)
│   │   ├── agentic/                       # Agentic UI components
│   │   │   ├── agentic-chat.tsx           # Copilot-style chat widget
│   │   │   ├── agentic-cta.tsx            # Smart CTA (context-aware)
│   │   │   ├── agentic-plan-suggester.tsx # Plan recommendation
│   │   │   └── agentic-demo-booker.tsx    # Demo scheduling
│   │   ├── analytics/
│   │   │   ├── scroll-depth.tsx
│   │   │   ├── section-observer.tsx
│   │   │   └── conversion-tracker.tsx
│   │   └── common/
│   │       ├── theme-toggle.tsx           # Dark/light toggle
│   │       ├── skip-to-content.tsx        # Accessibility skip link
│   │       ├── sr-only.tsx                # Screen-reader-only text
│   │       ├── json-ld.tsx                # Structured data
│   │       └── view-transitions.tsx       # View Transitions API wrapper
│   ├── content/                           # MDX content (blog, legal)
│   │   ├── blog/
│   │   │   └── hello-world.mdx
│   │   └── legal/
│   │       ├── privacy.mdx
│   │       └── terms.mdx
│   ├── lib/
│   │   ├── utils.ts                       # cn() class merger, format, etc.
│   │   ├── analytics.ts                   # useAnalytics hook + event defs
│   │   ├── constants.ts                   # Site-wide constants
│   │   ├── metadata.ts                    # Metadata helpers
│   │   ├── content.ts                     # Content fetching (MDX/CMS)
│   │   ├── actions.ts                     # Server Actions (form handling)
│   │   ├── validations.ts                 # Zod schemas for forms
│   │   └── agentic.ts                     # Agentic AI client config
│   ├── hooks/
│   │   ├── use-intersection.ts            # IntersectionObserver hook
│   │   ├── use-media-query.ts             # Responsive breakpoints
│   │   ├── use-scroll-position.ts         # Scroll position tracking
│   │   ├── use-reduced-motion.ts          # prefers-reduced-motion
│   │   └── use-lenis.ts                   # Lenis instance access
│   ├── styles/
│   │   ├── globals.css                    # Tailwind v4 @import + @theme
│   │   ├── fonts.css                      # @font-face declarations
│   │   └── animations.css                 # CSS keyframes, scroll-driven
│   └── types/
│       ├── index.ts                       # Shared types
│       ├── content.ts                     # Blog, legal, content types
│       ├── analytics.ts                   # Event type definitions
│       └── agentic.ts                     # Agentic UI types
├── next.config.ts                         # Next.js 16 config
├── postcss.config.mjs                     # PostCSS (Tailwind v4)
├── tsconfig.json                          # Strict TypeScript config
├── package.json
├── pnpm-lock.yaml
├── .env.local                             # Local env vars
├── .env.example                           # Template for env vars
├── .prettierrc
├── .eslintrc.json
├── tailwind.config.ts                     # Deprecated in v4, kept for IDE
├── README.md
└── AGENTS.md                              # Context for AI coding agents
```

## 2. Design Token Implementation

### 2.1 Tailwind v4 CSS-First Theme (`src/styles/globals.css`)

```css
@import "tailwindcss";
@import "./fonts.css";

@theme {
  /* Colors — OKLCH primitives */
  --color-neutral-50: oklch(98.5% 0.005 260);
  --color-neutral-100: oklch(95% 0.008 260);
  --color-neutral-200: oklch(91% 0.01 260);
  --color-neutral-300: oklch(85% 0.015 260);
  --color-neutral-400: oklch(70% 0.02 260);
  --color-neutral-500: oklch(55% 0.025 260);
  --color-neutral-600: oklch(45% 0.03 260);
  --color-neutral-700: oklch(35% 0.03 260);
  --color-neutral-800: oklch(25% 0.025 260);
  --color-neutral-900: oklch(15% 0.02 260);
  --color-neutral-950: oklch(10% 0.015 260);

  --color-accent-50: oklch(95% 0.12 270);
  --color-accent-100: oklch(90% 0.15 270);
  --color-accent-200: oklch(82% 0.18 270);
  --color-accent-300: oklch(75% 0.2 270);
  --color-accent-400: oklch(65% 0.23 270);
  --color-accent-500: oklch(55% 0.25 270);
  --color-accent-600: oklch(48% 0.22 270);
  --color-accent-700: oklch(40% 0.2 270);
  --color-accent-800: oklch(32% 0.17 270);
  --color-accent-900: oklch(25% 0.15 270);
  --color-accent-950: oklch(18% 0.1 270);

  --color-success: oklch(55% 0.18 145);
  --color-warning: oklch(65% 0.18 85);
  --color-error: oklch(55% 0.2 30);
  --color-info: oklch(60% 0.12 260);

  /* Typography */
  --font-sans: "Inter", system-ui, -apple-system, sans-serif;
  --font-mono: "JetBrains Mono", monospace;
  --font-premium: "PP Neue Montreal", "Inter", sans-serif;

  /* Spacing */
  --spacing: 0.25rem;

  /* Shadows */
  --shadow-hue: 260;

  /* Motion */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-smooth: cubic-bezier(0.22, 1, 0.36, 1);

  /* Radius */
  --radius-xs: 0.25rem;
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
  --radius-3xl: 2rem;
}

/* Dark mode via class strategy */
@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));

@theme {
  --color-bg: var(--color-neutral-50);
  --color-bg-surface: var(--color-neutral-100);
  --color-bg-elevated: oklch(100% 0 0);
  --color-bg-inverse: var(--color-neutral-950);
  --color-text-primary: var(--color-neutral-900);
  --color-text-secondary: var(--color-neutral-600);
  --color-text-muted: var(--color-neutral-400);
  --color-text-inverse: var(--color-neutral-50);
  --color-text-accent: var(--color-accent-500);
  --color-border: var(--color-neutral-200);
  --color-border-strong: var(--color-neutral-300);
  --color-border-accent: var(--color-accent-300);
}

[data-theme="dark"] {
  --color-bg: var(--color-neutral-950);
  --color-bg-surface: var(--color-neutral-900);
  --color-bg-elevated: var(--color-neutral-800);
  --color-text-primary: var(--color-neutral-50);
  --color-text-secondary: var(--color-neutral-300);
  --color-text-muted: var(--color-neutral-500);
  --color-border: var(--color-neutral-800);
  --color-border-strong: var(--color-neutral-700);
}

@layer base {
  html {
    scroll-behavior: auto !important;
    color-scheme: light dark;
  }

  body {
    background-color: var(--color-bg);
    color: var(--color-text-secondary);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--color-text-primary);
    font-weight: 600;
    line-height: 1.15;
  }

  ::selection {
    background-color: oklch(55% 0.25 270 / 0.2);
    color: var(--color-text-primary);
  }

  :focus-visible {
    outline: 2px solid var(--color-border-accent);
    outline-offset: 2px;
    border-radius: var(--radius-xs);
  }
}

@layer utilities {
  .container-main {
    max-width: 1280px;
    margin-inline: auto;
    padding-inline: 1.5rem;
  }

  .container-narrow {
    max-width: 768px;
    margin-inline: auto;
    padding-inline: 1.5rem;
  }

  .text-balance {
    text-wrap: balance;
  }

  .text-pretty {
    text-wrap: pretty;
  }
}
```

### 2.2 Font Face Declarations (`src/styles/fonts.css`)

```css
@font-face {
  font-family: "Inter";
  src: url("/fonts/Inter-Variable.woff2") format("woff2");
  font-display: swap;
  font-weight: 300 800;
  font-style: normal;
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
    U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: "JetBrains Mono";
  src: url("/fonts/JetBrainsMono-Variable.woff2") format("woff2");
  font-display: swap;
  font-weight: 300 800;
  font-style: normal;
}
```

## 3. Section Components & Variants

### 3.1 Hero Section — Three Variants

| Variant | Use Case | Motion Pattern | Rendering |
|---------|----------|---------------|-----------|
| `hero-default` | General SaaS | Split layout: left headline + right mockup/animation. Clip-path text reveal on headline. Stagger CTA buttons. Parallax background. | Static RSC shell, `MotionIsland` for animation |
| `hero-live-demo` | Product demo focused | Interactive product preview embedded in hero. User can click around the demo. The demo IS the visual. | RSC shell, `LiveDemo` client island |
| `hero-agentic` | AI/Agentic SaaS | Chat-like prompt input in hero. "Ask what we can do" → AI responds with personalized demo + feature cards. | RSC shell, `AgenticChat` client island |

### 3.2 Features Section — Three Variants

| Variant | Layout | Animation |
|---------|--------|-----------|
| `features-bento` | Bento grid: 1 hero card (2×2) + 4 supporting cards (1×1). Variable visual weight. | Stagger entrance per card. Hero card gets parallax image. |
| `features-tabs` | Tab bar + active panel. Each tab shows feature details. | Framer Motion AnimatePresence for tab content switch. |
| `features-comparison` | Side-by-side before/after. Slider or toggle. | GSAP scrub on scroll: drag handle across comparison image. |

### 3.3 Pricing Section

```
┌─────────────────────────────────────────────┐
│  Heading: "Simple, transparent pricing"      │
│  Subtext + Monthly / Annual toggle           │
│  (Client island: toggle changes displayed    │
│   prices via state, no page reload)          │
├──────────┬──────────┬────────────────────────┤
│  Starter │  Pro *   │  Enterprise            │
│  $19/mo  │  $49/mo  │  Custom                │
│  feat A  │  feat A  │  everything in Pro     │
│  feat B  │  feat B  │  + SSO, audit logs     │
│  feat C  │  feat C  │  + dedicated support   │
│          │  feat D  │  + custom SLAs         │
│  [CTA]   │  [CTA]   │  [Contact]             │
├──────────┴──────────┴────────────────────────┤
│  * Pro card elevated, --shadow-lg, accent     │
│    border, "Most Popular" badge               │
└─────────────────────────────────────────────┘
```

Each pricing tier is a Server Component rendering static data. The toggle is a client island that adjusts `display: grid` content via React state — the pricing data is fetched once on the server and passed as a prop to the client boundary.

### 3.4 Testimonials — Four Variants

| Variant | Layout | When to Use |
|---------|--------|-------------|
| `testimonials-grid` | 2×2 or 3×3 card grid | Content-heavy, many testimonials |
| `testimonials-carousel` | Single quote, prev/next, dots | Scarcity of testimonials, emphasis on each |
| `testimonials-marquee` | Infinite horizontal scroll row | Logo trust bar variant for quotes |
| `testimonials-wall` | Masonry-like wall of quotes | Social proof density (enterprise) |

## 4. Motion Component Library

### 4.1 `Reveal` — Scroll-triggered entrance

```tsx
// components/motion/reveal.tsx
"use client"

import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  delay?: number
  distance?: number
  className?: string
  as?: "div" | "section" | "article" | "span"
}

export function Reveal({
  children,
  direction = "up",
  duration = 0.6,
  delay = 0,
  distance = 48,
  className,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const el = ref.current
    if (!el) return

    const fromMap = {
      up: { y: distance, opacity: 0 },
      down: { y: -distance, opacity: 0 },
      left: { x: distance, opacity: 0 },
      right: { x: -distance, opacity: 0 },
      none: { opacity: 0 },
    }

    gsap.fromTo(el, fromMap[direction], {
      y: 0,
      x: 0,
      opacity: 1,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        end: "top 35%",
        toggleActions: "play none none reverse",
      },
    })
  }, { scope: ref })

  return <Tag ref={ref} className={cn("will-change-transform", className)}>{children}</Tag>
}
```

### 4.2 `Stagger` — Staggered children reveal

```tsx
"use client"

import { useGSAP } from "@gsap/react"
import { useRef } from "react"

type Props = {
  children: React.ReactNode
  stagger?: number
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

export function Stagger({ children, stagger = 0.08, delay = 0, direction = "up", className }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const children = ref.current?.children
    if (!children?.length) return

    gsap.fromTo(children, {
      y: direction === "up" || direction === "down" ? (direction === "up" ? 32 : -32) : 0,
      x: direction === "left" || direction === "right" ? (direction === "left" ? 32 : -32) : 0,
      opacity: 0,
    }, {
      y: 0,
      x: 0,
      opacity: 1,
      duration: 0.5,
      stagger,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 82%",
        end: "top 42%",
        toggleActions: "play none none reverse",
      },
    })
  }, { scope: ref })

  return <div ref={ref} className={className}>{children}</div>
}
```

### 4.3 `Counter` — Number count-up

```tsx
"use client"

import { useGSAP } from "@gsap/react"
import { useRef, useState } from "react"

type Props = {
  from?: number
  to: number
  duration?: number
  suffix?: string
  prefix?: string
  decimals?: number
  className?: string
}

export function Counter({ from = 0, to, duration = 2, suffix = "", prefix = "", decimals = 0, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const [displayed, setDisplayed] = useState(from)

  useGSAP(() => {
    const obj = { value: from }
    gsap.to(obj, {
      value: to,
      duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        once: true,
      },
      onUpdate: () => {
        setDisplayed(Number(obj.value.toFixed(decimals)))
      },
    })
  }, { scope: ref })

  return (
    <span ref={ref} className={className}>
      {prefix}{displayed.toLocaleString()}{suffix}
    </span>
  )
}
```

### 4.4 `SplitText` — Character/word reveal

```tsx
"use client"

import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { cn } from "@/lib/utils"

type Props = {
  children: string
  type?: "chars" | "words" | "lines"
  stagger?: number
  className?: string
}

export function SplitText({ children, type = "chars", stagger = 0.02, className }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const el = ref.current
    if (!el) return

    gsap.fromTo(el.querySelectorAll(".split-item"), {
      y: 40,
      opacity: 0,
      rotateX: -15,
    }, {
      y: 0,
      opacity: 1,
      rotateX: 0,
      duration: 0.6,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "top 40%",
        toggleActions: "play none none reverse",
      },
    })
  }, { scope: ref })

  const split = type === "chars"
    ? children.split("").map((char, i) => <span key={i} className="split-item inline-block">{char === " " ? "\u00A0" : char}</span>)
    : type === "words"
    ? children.split(" ").map((word, i) => <span key={i} className="split-item inline-block mr-[0.25em]">{word}</span>)
    : children.split("\n").map((line, i) => <span key={i} className="split-item block">{line}</span>)

  return <div ref={ref} className={cn("inline-block", className)}>{split}</div>
}
```

### 4.5 `PinSection` — ScrollTrigger pin wrapper

```tsx
"use client"

import { useGSAP } from "@gsap/react"
import { useRef } from "react"

type Props = {
  children: React.ReactNode
  height?: string
  className?: string
}

export function PinSection({ children, height = "300vh", className }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ref.current,
      start: "top top",
      end: `+=${parseInt(height) - 100}`,
      pin: pinRef.current,
      pinSpacing: true,
      anticipatePin: 1,
    })
  }, { scope: ref })

  return (
    <div ref={ref} style={{ height }} className={className}>
      <div ref={pinRef} className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {children}
      </div>
    </div>
  )
}
```

### 4.6 `Parallax` — Parallax scroll effect

```tsx
"use client"

import { useGSAP } from "@gsap/react"
import { useRef } from "react"

type Props = {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function Parallax({ children, speed = 0.5, className }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(ref.current, { y: 0 }, {
      y: () => -speed * (ref.current?.offsetHeight || 0) * 0.3,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    })
  }, { scope: ref })

  return <div ref={ref} className={cn("will-change-transform", className)}>{children}</div>
}
```

## 5. Page Layouts & Compositions

### 5.1 Home Page Composition

```
Home Page (PPR — static shell + dynamic islands)
──────────────────────────────────────────────────────
├── Header (sticky, transparent → solid on scroll)
│   ├── Logo
│   ├── Desktop Nav (links)
│   ├── Mobile Nav trigger (client island)
│   └── CTA button
│
├── Hero Section (Reveal, pin: first viewport)
│   ├── SplitText headline ("Save 10h/week with...")
│   ├── Paragraph (subheadline)
│   ├── CTA Group (Primary + Secondary)
│   ├── Trust bar (logo marquee)
│   └── Live demo embed (client island, dynamic)
│
├── Logo Cloud (Marquee, infinite scroll)
│   └── "Trusted by 12,000+ teams" + logos
│
├── Features Bento (Stagger)
│   ├── Hero card (2×2): "Your entire workflow"
│   ├── Card 1 (1×1): "AI-powered automation"
│   ├── Card 2 (1×1): "Real-time collaboration"
│   ├── Card 3 (1×1): "Enterprise security"
│   └── Card 4 (1×1): "Integrations ecosystem"
│
├── Stats Row (Counter)
│   ├── "12,847" teams
│   ├── "99.9%" uptime
│   ├── "4.8/5" rating
│   └── "3M+" tasks automated
│
├── How It Works (PinSection)
│   ├── Step 1: Connect your data → icon scales in
│   ├── Step 2: AI processes → progress bar fills
│   └── Step 3: Get results → output visualization
│
├── Testimonials (Marquee or Carousel)
│   ├── Quote cards with avatar, name, role, company
│   ├── Star rating
│   └── Optional: video testimonial modal
│
├── Pricing (ISR, client island for toggle)
│   ├── Monthly/Annual toggle
│   ├── 3-tier cards (Starter, Pro, Enterprise)
│   └── Feature comparison (expandable)
│
├── FAQ (Accordion, client island)
│   └── 8-12 most common questions
│
├── Final CTA (Reveal)
│   ├── "Ready to transform your workflow?"
│   ├── Primary CTA
│   └── Secondary: "Watch demo"
│
├── Footer (static RSC)
│   ├── Multi-column links
│   ├── Newsletter signup (Server Action)
│   ├── Social links
│   └── Legal / Copyright
│
└── Agentic Chat (floating widget, client island)
    └── "Hi! I'm your product assistant. Ask me anything."
```

### 5.2 Pricing Page

```
Pricing Page
────────────────
├── Header
├── Hero (small): "Simple, transparent pricing"
├── Pricing Cards (ISR, 3-4 tiers)
│   ├── Monthly/Annual toggle (client island)
│   ├── Feature lists per tier
│   ├── "Most Popular" badge (elevated card)
│   └── CTA per tier
├── Feature Comparison Table (scrollable)
├── FAQ
├── CTA (Enterprise)
└── Footer
```

## 6. CMS Integration Design

The architecture supports multiple content modes with zero coupling:

### Mode 1: MDX Local (default, zero cost)

```tsx
// lib/content.ts — MDX loader
import fs from "fs/promises"
import path from "path"
import matter from "gray-matter"

export async function getBlogPost(slug: string) {
  const filePath = path.join(process.cwd(), "src", "content", "blog", `${slug}.mdx`)
  const source = await fs.readFile(filePath, "utf-8")
  const { data, content } = matter(source)
  return { frontmatter: data, content }
}
```

### Mode 2: Sanity CMS (optional, for non-technical editors)

```tsx
// lib/content.ts — Sanity client
import { createClient } from "next-sanity"

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2026-01-01",
  useCdn: true,
})

export async function getBlogPost(slug: string) {
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0]{
      title, excerpt, body, publishedAt, author->{name, image}
    }
  `, { slug })
}
```

### Content Types

```typescript
// types/content.ts
interface BlogPost {
  slug: string
  title: string
  excerpt: string
  body: string          // MDX or Portable Text
  publishedAt: string
  updatedAt?: string
  author: { name: string; image?: string }
  tags: string[]
  coverImage?: string
  readingTime: number
}

interface PricingTier {
  id: string
  name: string
  monthlyPrice: number
  annualPrice: number
  description: string
  features: string[]
  highlighted: boolean
  cta: { label: string; href: string }
}

interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  avatar?: string
  rating: 1 | 2 | 3 | 4 | 5
}
```

## 7. Form & Lead Capture Components

### 7.1 Server Action Form Pattern

```tsx
// lib/actions.ts
"use server"

import { z } from "zod"

const waitlistSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  name: z.string().min(2, "Name must be at least 2 characters").optional(),
  planInterest: z.enum(["starter", "pro", "enterprise"]).optional(),
})

export async function submitWaitlist(formData: FormData) {
  const raw = Object.fromEntries(formData)
  const parsed = waitlistSchema.safeParse(raw)

  if (!parsed.success) {
    return { error: parsed.error.flatten().fieldErrors }
  }

  // Submit to CRM (HubSpot, Loops, etc.)
  const res = await fetch(process.env.CRM_WEBHOOK_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(parsed.data),
  })

  if (!res.ok) return { error: { _form: ["Something went wrong. Try again."] } }

  revalidatePath("/waitlist")
  return { success: true }
}
```

### 7.2 Waitlist Form Component

```tsx
"use client"

import { useActionState } from "react"
import { submitWaitlist } from "@/lib/actions"

export function WaitlistForm() {
  const [state, action, pending] = useActionState(submitWaitlist, { success: false })

  if (state.success) {
    return <SuccessMessage />
  }

  return (
    <form action={action} className="space-y-4">
      <Input name="name" placeholder="Your name" required />
      <Input name="email" type="email" placeholder="you@company.com" required />
      {state.error?._form && (
        <p className="text-error text-sm">{state.error._form[0]}</p>
      )}
      <Button type="submit" disabled={pending}>
        {pending ? "Joining..." : "Join the waitlist"}
      </Button>
    </form>
  )
}
```

### 7.3 Lead Capture Pipeline

```
User submits form
    │
    ▼
Server Action (zod validation)
    │
    ├─ validation fails → return { error } → form shows inline errors
    │
    └─ validation passes
        │
        ├──> CRM webhook (HubSpot / Loops / Mailchimp)
        │       │
        │       ├── Add to list + tag (plan_interest, source=waitlist)
        │       └── Trigger automation (welcome email, Slack notify)
        │
        ├──> revalidatePath() → show success state
        │
        └──> track("form_submit", { type: "waitlist", planInterest })
```

## 8. Accessibility Compliance Checklist

```markdown
- [ ] WCAG 2.2 AA target (AAA where feasible)
- [ ] semantic HTML: <nav>, <main>, <section>, <article>, <aside>, <footer>
- [ ] skip-to-content link (first focusable element)
- [ ] heading hierarchy: h1 → h2 → h3 (no skipping)
- [ ] all images have alt text (decorative: alt="")
- [ ] all form inputs have associated <label> or aria-label
- [ ] focus-visible ring on all interactive elements
- [ ] prefers-reduced-motion respected (CSS media query + React hook)
- [ ] prefers-contrast: more respected
- [ ] forced-colors mode tested
- [ ] color contrast ≥ 4.5:1 for text, ≥ 3:1 for large text
- [ ] keyboard navigation: Tab, Shift+Tab, Enter, Escape all work
- [ ] focus trap in modals and mobile nav
- [ ] aria-expanded on accordions, toggles, dropdowns
- [ ] aria-current="page" on active nav link
- [ ] aria-label on icon-only buttons
- [ ] Lenis disabled when prefers-reduced-motion (native scroll falls back)
- [ ] GSAP animations skip when prefers-reduced-motion
- [ ] Framer Motion's useReducedMotion() hook in all animated islands
- [ ] touch target size ≥ 44×44px on mobile
- [ ] screen reader announcements on form success/error
- [ ] live region (aria-live="polite") for dynamic content updates
- [ ] focus management on route changes (focus heading, not body)
```

## 9. Build & Deployment Configuration

### 9.1 `next.config.ts`

```ts
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  experimental: {
    ppr: "incremental",
    useCache: true,
    viewTransition: true,
    clientSegmentCache: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1024, 1280, 1536],
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
  fonts: {
    disableLocalFonts: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
```

### 9.2 `package.json`

```json
{
  "name": "saas-landing",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "format": "prettier --write ."
  },
  "dependencies": {
    "next": "^16.0.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "gsap": "^3.12.0",
    "lenis": "^1.3.0",
    "framer-motion": "^12.0.0",
    "@gsap/react": "^2.0.0",
    "lucide-react": "^0.400.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^3.0.0",
    "zod": "^3.22.0",
    "next-sanity": "^9.0.0",
    "@sanity/image-url": "^1.0.0",
    "gray-matter": "^4.0.0",
    "next-mdx-remote": "^5.0.0",
    "react-hot-toast": "^2.4.0",
    "@vercel/analytics": "^1.0.0",
    "@vercel/speed-insights": "^1.0.0"
  },
  "devDependencies": {
    "typescript": "^5.7.0",
    "tailwindcss": "^4.0.0",
    "postcss": "^8.4.0",
    "@tailwindcss/postcss": "^4.0.0",
    "prettier": "^3.4.0",
    "prettier-plugin-tailwindcss": "^0.6.0",
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0"
  }
}
```

### 9.3 `postcss.config.mjs`

```js
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
}

export default config
```

### 9.4 `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "strictNullChecks": true,
    "noUncheckedIndexedAccess": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### 9.5 GitHub Actions — Vercel Deploy

```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: pnpm
      - run: pnpm install
      - run: pnpm typecheck
      - run: pnpm lint
      - run: pnpm build
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          github-comment: true
```
