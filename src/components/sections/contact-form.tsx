"use client";

import { useState } from "react";
import { z } from "zod";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { Button, Input, Textarea } from "@/components/ui";

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
      <div className="flex flex-col items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-12 text-center">
        <CheckCircle size={48} className="text-emerald-400" />
        <h3 className="mt-4 text-xl font-semibold text-surface-50">
          Message Sent!
        </h3>
        <p className="mt-2 text-surface-400">
          Thank you for reaching out. We will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
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
      <Button type="submit" variant="primary" size="lg" disabled={submitting}>
        {submitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
