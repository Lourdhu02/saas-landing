import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";
import { FadeIn } from "@/components/motion";

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container-page">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 px-8 py-16 text-center md:px-16 md:py-24">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1)_0%,_transparent_60%)]" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white md:text-5xl">
                Ready to Transform Your Business?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-brand-100">
                Join hundreds of companies using our AI platform to drive
                innovation and growth.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button
                  href="/pricing"
                  variant="secondary"
                  size="lg"
                  className="bg-white text-brand-600 hover:bg-brand-50"
                >
                  Get Started Today
                  <ArrowRight size={18} />
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Talk to Sales
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
