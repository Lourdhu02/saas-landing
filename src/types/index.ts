export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string; description: string }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  gradient: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
  popular?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  socials?: { twitter?: string; linkedin?: string };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
  prefix?: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
}
