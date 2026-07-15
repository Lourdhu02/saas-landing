# Flow Diagrams — Premium SaaS Landing Page with Agentic UI

## 1. Page Rendering Lifecycle (PPR + RSC + Client Hydration)

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#0a0b0c', 'primaryTextColor': '#fafafa', 'primaryBorderColor': '#1e2024', 'lineColor': '#444', 'secondaryColor': '#121317', 'tertiaryColor': '#1a1c23', 'fontSize': '13px'}}}%%
sequenceDiagram
    participant User as Browser
    participant Edge as Vercel Edge
    participant RSC as Next.js 16 Server
    participant Cache as ISR Cache
    participant DB as Data Layer
    participant Client as Client Runtime

    User->>Edge: GET / (initial request)
    Edge->>RSC: Forward request
    RSC->>Cache: Check PPR static shell
    Cache-->>RSC: Return cached shell HTML
    RSC->>RSC: Render RSC tree (synchronous)

    Note over RSC: Static sections render instantly:<br/>Hero, Features, Testimonials, CTA

    RSC-->>Edge: Stream static shell HTML + RSC payload
    Edge-->>User: Send shell HTML (TTFB ~150ms)
    User->>User: Paint shell (FCP ~800ms)

    par Dynamic Islands (PPR streaming)
        RSC->>DB: Fetch pricing data (ISR, revalidate: 3600)
        DB-->>RSC: Return tiers
        RSC-->>Edge: Stream pricing section HTML
        Edge-->>User: Pricing renders (LCP ~1.2s)

        RSC->>DB: Fetch testimonials (ISR, revalidate: 86400)
        DB-->>RSC: Return testimonials
        RSC-->>Edge: Stream testimonials section
        Edge-->>User: Testimonials render

        RSC->>DB: Fetch blog featured (ISR)
        DB-->>RSC: Return posts
        RSC-->>Edge: Stream blog section
        Edge-->>User: Blog section renders
    end

    Note over User: Page fully visible (static + streamed content)

    User->>Client: JavaScript loads & executes
    Client->>Client: Hydrate client islands
    Note over Client: LenisProvider initializes<br/>MotionIslands register ScrollTrigger<br/>NavIsland becomes interactive<br/>AgenticChat loads

    Client->>Client: GSAP + Lenis sync (single rAF loop)
    Client->>Client: ScrollTrigger.refresh() — recalc positions
```

## 2. Scroll-Driven Animation Trigger Flow

```mermaid
graph TD
    Start((User Scrolls)) --> Lenis["Lenis<br/>(normalizes scroll velocity)"]
    Lenis --> StUpdate["ScrollTrigger.update()<br/>(called on every lenis tick)"]

    StUpdate --> CheckTriggers{"Any triggers active<br/>in current scroll range?"}

    CheckTriggers -->|"No"| Start

    CheckTriggers -->|"Yes — section enters viewport"| Reveal["Reveal animation<br/>(fade + translateY)"]
    CheckTriggers -->|"Yes — stagger zone"| Stagger["Stagger children<br/>(cards animate sequentially)"]
    CheckTriggers -->|"Yes — pin section"| Pin["PinSection activates<br/>(element fixed, spacer div)"]
    CheckTriggers -->|"Yes — scrub zone"| Scrub["Scrub animation<br/>(progress = scroll %)"]

    Reveal --> GSAP["gsap.fromTo()<br/>→ opacity: 0→1<br/>→ y: 48→0<br/>duration: 0.6s<br/>ease: power3.out"]
    Stagger --> GSAPStagger["gsap.fromTo(children)<br/>→ staggered by 0.08s<br/>→ sequential entrance"]
    Pin --> PinAnim["Element pinned to viewport<br/>Background content scrubs<br/>Sub-animations inside pin"]
    Scrub --> ScrubAnim["Animation progress tied to<br/>scroll position (0→1)<br/>Video frame, clip-path, opacity"]

    GSAP --> Done
    GSAPStagger --> Done
    PinAnim --> OnPinExit{"User scrolls past<br/>pin end trigger?"}
    OnPinExit -->|"Yes"| Unpin["Element released<br/>Continue normal flow"]
    Unpin --> Done
    ScrubAnim --> OnScrubDone{"User passed<br/>scrub end?"}
    OnScrubDone -->|"Yes"| Done

    Done((Animation complete))
    Done --> Start

    subgraph "Performance Notes"
        P1["CSS scroll-driven animations used for simple fades<br/>(zero JS, compositor thread)"]
        P2["GSAP reserved for pinned sections,<br/>scrubbed sequences, split-text reveals"]
        P3["All ScrollTrigger instances batch-refresh<br/>on window resize (debounced 200ms)"]
        P4["prefers-reduced-motion: disable all GSAP,<br/>fall back to CSS transitions"]
    end
```

## 3. User Interaction → CTA Conversion Funnel

```mermaid
graph LR
    subgraph Awareness["Awareness Layer"]
        A1["Organic Search<br/>(SEO)"]
        A2["Paid Ads<br/>(SEM/Social)"]
        A3["Referral<br/>(Word of mouth)"]
        A4["Social Proof<br/>(testimonials)"]
    end

    subgraph Engagement["Engagement Layer"]
        E1["Land on Hero<br/>< 5s"]
        E2["Scroll to Features<br/>5-15s"]
        E3["View Testimonials<br/>15-30s"]
        E4["See Stats/Metrics<br/>20-40s"]
    end

    subgraph Consideration["Consideration Layer"]
        C1["Visit Pricing<br/>30-60s"]
        C2["Toggle Annual<br/>(savings trigger)"]
        C3["Read FAQ<br/>(objection handling)"]
        C4["Agentic Chat<br/>(question answering)"]
    end

    subgraph Conversion["Conversion Layer"]
        Conv1["Click CTA<br/>(plan_select)"]
        Conv2["Fill Form<br/>(form_start)"]
        Conv3["Submit Form<br/>(form_submit)"]
        Conv4["Redirect to App<br/>(signup complete)"]
    end

    Awareness -->|"Arrive at page"| Engagement
    Engagement -->|"Scroll depth 50%+"| Consideration
    Consideration -->|"Intent signals"| Conversion

    Engagement -.->|"Abandon < 25% scroll"| Exit1((Bounce))
    Consideration -.->|"Leave on pricing"| Exit2((Exit))
    Conversion -.->|"Form error"| Retry["Form retry<br/>(error shown)"]
    Retry --> Conv2

    subgraph "Agentic Conversion Path"
        AP1["Agentic Chat Opened<br/>(chat_open)"]
        AP2["User asks question<br/>(chat_message)"]
        AP3["Agent recommends plan<br/>(chat_suggested_plan)"]
        AP4["Agent books demo<br/>(chat_booked_demo)"]
        AP5["Demo confirmation sent<br/>(conversion)"]
    end

    Consideration --> AP1
    AP3 --> Conv1
    AP4 --> Conv5["Demo booked<br/>(offline conversion)"]
```

## 4. Form Submission & Lead Capture Pipeline

```mermaid
sequenceDiagram
    participant User as Site Visitor
    participant UI as Form Component
    participant SA as Server Action
    participant Val as Zod Validation
    participant CRM as CRM Webhook<br/>(HubSpot/Loops)
    participant Email as Email Service
    participant Analytics as Analytics

    User->>UI: Fill form fields
    User->>UI: Click submit

    UI->>UI: Set pending state (disabled button, spinner)
    UI->>SA: action(formData) via Server Action

    SA->>Val: Validate with Zod schema

    alt Validation fails
        Val-->>SA: { error: fieldErrors }
        SA-->>UI: Return error object
        UI->>UI: Show inline field errors + toast
        UI->>Analytics: track("form_error", { fields: [...] })
    else Validation passes
        Val-->>SA: Parsed data
        SA->>SA: Sanitize inputs
        SA->>CRM: POST webhook (email, name, source, utm, planInterest)
        CRM-->>SA: 200 OK
        SA->>Email: Trigger welcome / confirmation
        SA->>SA: revalidatePath() — clear cache
        SA-->>UI: { success: true }

        UI->>UI: Show success state (confirmation message)
        UI->>Analytics: track("form_submit", { type: "waitlist", source: "pricing" })

        alt Source is waitlist
            Analytics->>Analytics: track("conversion_waitlist")
        else Source is demo request
            Analytics->>Analytics: track("conversion_demo")
        end
    end

    Note over User,Analytics: Graceful degradation: if CRM is down,<br/>Server Action returns { error:_form }<br/>and retries via queue.
```

## 5. Build & Deployment Pipeline

```mermaid
graph TD
    Dev["Developer pushes to main"] --> GH["GitHub<br/>Push Event"]

    GH --> CI["GitHub Actions<br/>pnpm install"]

    CI --> TypeCheck["pnpm typecheck<br/>(TypeScript strict)"]
    CI --> Lint["pnpm lint<br/>(ESLint)"]
    CI --> Build["pnpm build<br/>(Next.js 16 + Turbopack)"]

    TypeCheck -->|"Fail"| Fail1["❌ Build failed<br/>PR comment"]
    Lint -->|"Fail"| Fail1
    Build -->|"Fail"| Fail1

    Build -->|"Success"| Analyze["Bundle Analysis<br/>(@analyze/bundle)"]

    Analyze -->|"Bundle too large"| Warn["⚠️ Warning: bundle size<br/>exceeds budget"]
    Analyze -->|"Within budget"| Deploy["Vercel Deploy"]

    Deploy --> DeployPreview["Preview Deployment<br/>(PR: unique URL)"]
    Deploy --> DeployProd["Production Deployment<br/>(main branch)"]

    DeployProd --> PPR["PPR Static Shell Generated<br/>(all routes)"]
    DeployProd --> ISR["ISR Cache Primed<br/>(pricing, blog, testimonials)"]
    DeployProd --> Images["Images Optimized<br/>(WebP/AVIF, responsive)"]
    DeployProd --> Fonts["Fonts Subset & Cached<br/>(Inter, JetBrains Mono)"]

    PPR --> PostDeploy["Post-deployment checks"]
    ISR --> PostDeploy

    PostDeploy --> Lighthouse["Lighthouse CI<br/>(100/100 target)"]
    PostDeploy --> E2E["Playwright E2E Tests<br/>(critical paths)"]
    PostDeploy --> LinkCheck["Broken Link Check<br/>(all internal + external)"]

    Lighthouse -->|"Pass"| Done((✅ Deployed))
    E2E -->|"Pass"| Done
    LinkCheck -->|"Pass"| Done

    Lighthouse -->|"Fail"| Rollback["❌ Rollback to previous<br/>Vercel deployment"]
    E2E -->|"Fail"| Rollback
    LinkCheck -->|"Fail"| Rollback

    subgraph "Branch Deploy Strategy"
        B1["feature/* → Preview URL<br/>(no custom domain)"]
        B2["staging/* → staging.example.com<br/>(full PPR + ISR test)"]
        B3["main → production<br/>(CDN cache clear)"]
        B4["hotfix/* → immediate production<br/>(bypass staging)"]
    end
```

## 6. Analytics Event Tracking Flow

```mermaid
graph TD
    subgraph Events["Event Sources"]
        S1["User Interaction<br/>(click, scroll, form)"]
        S2["Page Navigation<br/>(router.push, popstate)"]
        S3["Intersection Observer<br/>(section enters viewport)"]
        S4["Server Action Result<br/>(form_submit success/fail)"]
        S5["Agentic Chat<br/>(message, plan suggestion)"]
    end

    subgraph Collection["Collection Layer"]
        C1["useAnalytics() hook<br/>(track function)"]
        C2["ScrollDepthTracker<br/>(25/50/75/100%)"]
        C3["SectionObserver<br/>(section_visible)"]
        C4["Server Action middleware<br/>(form events)"]
    end

    subgraph Transport["Transport Layer"]
        T1["Vercel Analytics<br/>(va('event', ...))"]
        T2["GA4 gtag.js<br/>(gtag('event', ...))"]
        T3["PostHog<br/>(posthog.capture())"]
    end

    subgraph Storage["Storage & Processing"]
        ST1["Vercel Web Analytics<br/>(dashboards)"]
        ST2["GA4 Property<br/>(funnels, segments)"]
        ST3["BigQuery<br/>(raw event export)"]
    end

    subgraph Actions["Data-Driven Actions"]
        A1["Conversion Funnel<br/>Optimization"]
        A2["Segment-based<br/>Personalization"]
        A3["A/B Test Analysis<br/>(Vercel Edge Config)"]
        A4["Agentic Chat<br/>Behavior Tuning"]
    end

    Events -->|"Browser events"| Collection
    Collection -->|"Batch + fire"| Transport
    Transport -->|"Send to destinations"| Storage
    Storage -->|"Analytics reviews"| Actions

    S4 -.->|"Server-side event"| T2
    S4 -.->|"Via API route"| T3

    subgraph "Privacy & Compliance"
        P1["Consent check before all non-essential events"]
        P2["IP anonymization on GA4"]
        P3["No PII in event payloads (hashed email)"]
        P4["Cookie-less analytics via Vercel (no consent needed)"]
        P5["Data retention: 14 months (GA4), 38 months (Vercel)"]
    end

    Transport -.-> P1
    P1 -->|"Consent given"| Storage
    P1 -->|"Consent denied"| D1["Only Vercel Analytics<br/>(no cookies)"]

    subgraph "Real-time Dashboard"
        R1["Active visitors<br/>(real-time count)"]
        R2["Conversion rate<br/>(funnel step %)"]
        R3["Top traffic sources<br/>(UTM breakdown)"]
        R4["Bounce rate by section<br/>(drop-off points)"]
        R5["Agentic chat usage<br/>(sessions, resolution rate)"]
    end

    Storage --> R1
    Storage --> R2
    Storage --> R3
    Storage --> R4
    Storage --> R5
```

## 7. Agentic UI — Chat Interaction Flow

```mermaid
sequenceDiagram
    participant User as Site Visitor
    participant Widget as AgenticChat Widget
    participant Agent as AI Agent<br/>(CopilotKit / LangGraph)
    participant Context as Context Engine
    participant Analytics as Analytics

    User->>Widget: Open chat widget
    Widget->>Widget: Animate in (Framer Motion slide-up)
    Widget->>Widget: Set initial greeting
    Widget->>Analytics: track("chat_open")

    User->>Widget: Type question ("What plan is right for my team of 5?")
    Widget->>Widget: Show typing indicator
    Widget->>Agent: Send message + page context

    Agent->>Context: Get page context (pricing tiers seen, scroll depth, UTM)
    Context-->>Agent: Return context object

    Note over Agent: Agent evaluates:<br/>- User saw pricing?<br/>- What plan shows "Most Popular"?<br/>- Any FAQ answers visible?

    Agent-->>Widget: Stream response token by token
    Widget->>User: Display streaming text

    Agent->>Widget: Suggest action (e.g., show pricing card)
    Widget->>Widget: Render inline pricing suggestion card

    alt User accepts suggestion
        User->>Widget: Click "Show me Pro plan"
        Widget->>Widget: Scroll to pricing section
        Widget->>Analytics: track("chat_suggested_plan", { plan: "pro" })
    else User asks for demo
        User->>Widget: "I'd like a demo"
        Widget->>Agent: Request demo booking
        Agent->>Widget: Show demo booking form inline
        User->>Widget: Fill form, submit
        Widget->>Analytics: track("chat_booked_demo")
        Widget->>User: "We'll reach out within 24h"
    else User not satisfied
        User->>Widget: "I need to talk to a human"
        Widget->>Agent: Escalate request
        Agent-->>Widget: "Transferring to sales team..."
        Widget->>Analytics: track("chat_escalated")
    end

    Widget->>User: Session ends
    Widget->>Analytics: track("chat_closed", { duration, messageCount })
```
