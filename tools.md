# Tool Stack References

## Next.js (15/16)
- App Router + RSC: server-first rendering, reduce client JS
- Vercel deploy: $0 hobby, $20/mo pro, $240+/mo enterprise
- 100/100 Lighthouse achievable with ISR, image opt, font subsetting
- 2026 trend: full-stack framework default - Next.js/Remix link server+UI directly

## TypeScript (strict)
- Industry baseline for frontend+backend in 2026
- Catches bugs at compile time, better DX

## Tailwind CSS v4
- Utility-first, fastest for custom UIs
- Tailwind defaults avoided in high-craft landings (look interchangeable)

## GSAP + ScrollTrigger
- Free since Webflow acquisition (April 2025). All Club plugins free.
- Canonical sync: lenis.on('scroll', ScrollTrigger.update) + gsap.ticker.add((time)=>lenis.raf(time*1000)) + gsap.ticker.lagSmoothing(0)
- ScrollTrigger.config({ ignoreMobileResize: true }) for mobile jank
- useGSAP() with scoped ref in React for cleanup

## Lenis (smooth scroll)
- 3KB, dependency-free. Package is 'lenis' (not @studio-freight/lenis)
- React: import { ReactLenis } from 'lenis/react'
- syncTouch: true (replaces deprecated smoothTouch)
- autoRaf: false when using GSAP ticker (don't run two rAF loops)
- html { scroll-behavior: auto !important; }

## Framer Motion
- For component-level layout transitions, modal entrance, page transitions
- useReducedMotion hook for a11y
- Keep out of scroll-driven animation stack (use GSAP/Lenis for that)

## Vercel
- Hobby free, Pro $20/mo, Enterprise $240+/mo
- Edge functions, ISR, image optimization, AI Gateway
