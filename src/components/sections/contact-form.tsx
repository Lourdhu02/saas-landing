"use client";

import { useState } from "react";
import { z } from "zod";
import { Send, Loader2, CheckCircle, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button, Input, Textarea } from "@/components/ui";
import { FadeIn } from "@/components/motion";
import { siteConfig } from "@/data/site";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (field: keyof ContactFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormValues, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ContactFormValues;
        fieldErrors[field] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitting(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <section className="section-padding" id="contact">
        <div className="container-page max-w-2xl">
          <FadeIn className="flex flex-col items-center justify-center rounded-2xl bg-emerald-50 border border-emerald-200 p-16 text-center">
            <CheckCircle size={48} className="text-emerald-500" />
            <h3 className="mt-4 text-xl font-semibold text-surface-900">
              Message Sent!
            </h3>
            <p className="mt-2 text-surface-600">
              Thank you for reaching out. Our team will get back to you within 24 hours.
            </p>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding" id="contact">
      <div className="container-page">
        <FadeIn className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl font-display text-surface-900">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-surface-500">
            Have a project in mind? We would love to hear from you.
          </p>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-5">
          <FadeIn className="lg:col-span-3" direction="left">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Input
                  label="Name"
                  placeholder="John Doe"
                  value={values.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  error={errors.name}
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="john@example.com"
                  value={values.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  error={errors.email}
                />
              </div>
              <Input
                label="Company (optional)"
                placeholder="Acme Inc."
                value={values.company}
                onChange={(e) => handleChange("company", e.target.value)}
              />
              <Textarea
                label="Message"
                placeholder="Tell us about your project..."
                value={values.message}
                onChange={(e) => handleChange("message", e.target.value)}
                error={errors.message}
                rows={5}
              />
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={submitting}
                rightIcon={submitting ? undefined : <Send size={18} />}
                loading={submitting}
              >
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </FadeIn>

          <FadeIn className="lg:col-span-2 space-y-8" direction="right" delay={0.1}>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-surface-900">Email</p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm text-surface-500 hover:text-brand-600 transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-surface-900">Phone</p>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-sm text-surface-500 hover:text-brand-600 transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-surface-900">Office</p>
                  <p className="text-sm text-surface-500">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-100 text-accent-600">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-surface-900">Response Time</p>
                  <p className="text-sm text-surface-500">
                    We typically respond within 2 hours during business hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-surface-50 border border-surface-200 p-6">
              <div className="aspect-[16/9] rounded-lg bg-gradient-to-br from-brand-100 to-accent-100 flex items-center justify-center">
                <MapPin size={32} className="text-brand-400" />
              </div>
              <p className="mt-3 text-xs text-surface-400 text-center">
                San Francisco, CA — Global headquarters
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
