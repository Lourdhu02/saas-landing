# Design Systems, UI Patterns, Motion Design References

## Design Systems & Tokens
- Claylo uses 3-tier shadow system: --shadow-hue → primitives (highlight, shade, contact, ambient) → public tokens (--clay-sm/md/lg)
- Figma 2026 trends: component-driven layouts, auto layout, functional motion
- AI startup palettes: off-white (#FAFAFA-#FFFFFF), near-black (#0a0b0c-#121317), single saturated accent
- Recurring type: PP Neue Montreal, Aeonik, GT Super, Inter, JetBrains Mono as display

## UI Patterns
- Agentic UI: software that acts on user's behalf (Figma: "renaissance era of AI-inspired UX", not just prompt boxes)
- Bento-grid features (different visual weight per card), live product demos in hero (not static screenshots)
- Outcome-driven headlines ("Save 12h/week" beats "AI-powered analytics")
- Social proof: quantified > generic ("12,847 teams" vs "Trusted by thousands")

## Motion Design (Figma Trend #11 - Functional Motion)
- Motion is structural, not decorative. It connects states & masks latency
- GSAP + Lenis sync pattern: lenis.on('scroll', ScrollTrigger.update) + gsap.ticker.add(raf) + lagSmoothing(0)
- ScrollTrigger config: ignoreMobileResize: true, pin sections ≤ 2000px
- CSS scroll-driven animations (baseline) for simple cases; GSAP for pinned/scrub sequences
