import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "End-to-end AI solutions including ML, NLP, computer vision, automation, data engineering, and security. Tailored to your business needs.",
  openGraph: {
    title: "Services | Aethra",
    description:
      "End-to-end AI solutions including ML, NLP, computer vision, automation, data engineering, and security. Tailored to your business needs.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
