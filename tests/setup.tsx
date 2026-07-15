import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";
import React from "react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
  }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}));

vi.mock("next/image", () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement> & { priority?: boolean }) => {
    const { priority, ...rest } = props;
    return React.createElement("img", rest);
  },
}));

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    className,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    className?: string;
  }) => {
    return React.createElement("a", { href, className, ...props }, children);
  },
}));

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) =>
      React.createElement("div", props, children),
    span: ({ children, ...props }: React.HTMLAttributes<HTMLSpanElement>) =>
      React.createElement("span", props, children),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) =>
    React.createElement(React.Fragment, null, children),
}));

const gsapMock = {
  to: vi.fn(),
  from: vi.fn(),
  fromTo: vi.fn(),
  set: vi.fn(),
  timeline: vi.fn(() => ({
    to: vi.fn(),
    from: vi.fn(),
    fromTo: vi.fn(),
    set: vi.fn(),
    play: vi.fn(),
    pause: vi.fn(),
    reverse: vi.fn(),
    kill: vi.fn(),
  })),
  registerPlugin: vi.fn(),
  config: vi.fn(),
};

vi.mock("gsap", () => ({
  default: gsapMock,
  ...gsapMock,
}));

vi.mock("gsap/ScrollTrigger", () => ({
  default: { create: vi.fn(), refresh: vi.fn() },
  ScrollTrigger: { create: vi.fn(), refresh: vi.fn() },
}));

vi.mock("@gsap/react", () => ({
  useGSAP: vi.fn((cb: () => void) => cb()),
}));

vi.mock("lenis", () => {
  const LenisMock = vi.fn(() => ({
    on: vi.fn(),
    destroy: vi.fn(),
    raf: vi.fn(),
    scrollTo: vi.fn(),
  }));
  return { default: LenisMock };
});

vi.stubGlobal("requestAnimationFrame", (cb: FrameRequestCallback) =>
  setTimeout(cb, 16) as unknown as number
);
vi.stubGlobal("cancelAnimationFrame", (id: number) => clearTimeout(id));

Object.defineProperty(globalThis, "scrollTo", {
  value: vi.fn(),
  writable: true,
  configurable: true,
});
