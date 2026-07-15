import { Header, Footer } from "@/components/layout";
import {
  Hero,
  ServicesGrid,
  Testimonials,
  PricingTable,
  FAQ,
  CTASection,
  BlogGrid,
  TeamSection,
  ContactForm,
  StatsSection,
  ProcessSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesGrid />
        <ProcessSection />
        <StatsSection />
        <PricingTable />
        <Testimonials />
        <BlogGrid />
        <TeamSection />
        <CTASection />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
