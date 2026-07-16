import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stay up to date with the latest in AI technology, industry trends, and expert analysis from the Aethra team.",
  openGraph: {
    title: "Blog | Aethra",
    description:
      "Stay up to date with the latest in AI technology, industry trends, and expert analysis from the Aethra team.",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
