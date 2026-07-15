import { Header, Footer } from "@/components/layout";
import {
  Hero,
  HeroStats,
  ServicesGrid,
  Testimonials,
  PricingTable,
  CTASection,
  BlogGrid,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HeroStats />
        <ServicesGrid />
        <Testimonials />
        <PricingTable />
        <CTASection />
        <BlogGrid />
      </main>
      <Footer />
    </>
  );
}
