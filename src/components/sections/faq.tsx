"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/motion";
import { faqs } from "@/data/site";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-24">
      <div className="container-page max-w-3xl">
        <FadeIn className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-xl border border-surface-700/50 transition-colors hover:border-surface-600"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-sm font-medium text-surface-50">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={cn(
                      "shrink-0 text-surface-400 transition-transform duration-200",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-surface-700/50 px-6 py-4">
                        <p className="text-sm leading-relaxed text-surface-400">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
