import type {
  BlogPost,
  FAQItem,
  NavLink,
  PricingPlan,
  Service,
  TeamMember,
  Testimonial,
} from "@/types";

export const siteConfig = {
  name: "Synthwave AI",
  description:
    "Enterprise-grade AI solutions that transform your business operations with cutting-edge machine learning and natural language processing.",
  url: "https://synthwave-ai.com",
  ogImage: "/og.jpg",
  links: {
    github: "https://github.com/synthwave-ai",
    twitter: "https://twitter.com/synthwaveai",
    linkedin: "https://linkedin.com/company/synthwave-ai",
  },
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const services: Service[] = [
  {
    id: "nlp",
    title: "Natural Language Processing",
    description:
      "Advanced NLP models that understand, generate, and analyze human language with remarkable accuracy.",
    icon: "message-square",
    features: [
      "Sentiment analysis & emotion detection",
      "Named entity recognition",
      "Text summarization",
      "Multi-language support",
    ],
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    description:
      "State-of-the-art computer vision solutions for image and video analysis across industries.",
    icon: "eye",
    features: [
      "Object detection & tracking",
      "Image classification",
      "Optical character recognition",
      "Real-time video analytics",
    ],
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics",
    description:
      "Data-driven forecasting models that help you make informed decisions with confidence.",
    icon: "trending-up",
    features: [
      "Demand forecasting",
      "Risk assessment",
      "Customer churn prediction",
      "Anomaly detection",
    ],
  },
  {
    id: "automation",
    title: "Intelligent Automation",
    description:
      "Automate complex workflows and repetitive tasks with AI-powered robotic process automation.",
    icon: "zap",
    features: [
      "Workflow automation",
      "Document processing",
      "Data extraction",
      "Smart routing",
    ],
  },
  {
    id: "data-pipeline",
    title: "Data Pipeline Engineering",
    description:
      "End-to-end data infrastructure to collect, process, and prepare data for AI workloads.",
    icon: "database",
    features: [
      "Real-time data streaming",
      "ETL pipeline design",
      "Data warehousing",
      "Quality monitoring",
    ],
  },
  {
    id: "custom-ai",
    title: "Custom AI Solutions",
    description:
      "Tailored machine learning models and AI systems built specifically for your unique business needs.",
    icon: "cpu",
    features: [
      "Model architecture design",
      "Training & fine-tuning",
      "Model deployment",
      "Ongoing optimization",
    ],
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 99,
    description: "Perfect for small teams getting started with AI.",
    features: [
      "Up to 10K API calls/month",
      "1 AI model deployment",
      "Email support",
      "Basic analytics dashboard",
      "Community access",
    ],
    cta: "Get Started",
  },
  {
    id: "growth",
    name: "Growth",
    price: 299,
    description: "For growing businesses that need scale and reliability.",
    highlighted: true,
    features: [
      "Up to 100K API calls/month",
      "5 AI model deployments",
      "Priority email & chat support",
      "Advanced analytics & insights",
      "Custom model fine-tuning",
      "99.9% SLA guarantee",
      "Team collaboration tools",
    ],
    cta: "Start Free Trial",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 0,
    description: "Custom solutions for large organizations with advanced needs.",
    features: [
      "Unlimited API calls",
      "Unlimited model deployments",
      "Dedicated support engineer",
      "Custom integrations",
      "On-premise deployment option",
      "99.99% SLA guarantee",
      "SOC 2 compliance",
      "Personalized onboarding",
    ],
    cta: "Contact Sales",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "alex-chen",
    name: "Alex Chen",
    role: "CEO & Co-Founder",
    avatar: "/team/alex-chen.jpg",
    bio: "Former ML research lead at DeepMind with a PhD in Computer Science from Stanford.",
  },
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    role: "CTO & Co-Founder",
    avatar: "/team/sarah-johnson.jpg",
    bio: "Built production ML systems at Google and Amazon Web Services for over a decade.",
  },
  {
    id: "marcus-williams",
    name: "Marcus Williams",
    role: "VP of Engineering",
    avatar: "/team/marcus-williams.jpg",
    bio: "Led engineering teams at OpenAI and Meta, specializing in distributed AI systems.",
  },
  {
    id: "elena-rodriguez",
    name: "Elena Rodriguez",
    role: "Head of Product",
    avatar: "/team/elena-rodriguez.jpg",
    bio: "Product leader who shipped AI products used by millions at Microsoft and Slack.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "David Park",
    role: "CTO",
    company: "NovaTech Solutions",
    content:
      "Synthwave AI transformed our customer service pipeline. Their NLP models reduced response times by 70% and improved satisfaction scores across the board.",
    avatar: "/testimonials/david-park.jpg",
  },
  {
    id: "t2",
    name: "Lisa Martinez",
    role: "VP of Data Science",
    company: "Quantum Financial",
    content:
      "The predictive analytics platform has been a game-changer for our risk assessment. We've seen a 40% improvement in fraud detection since implementation.",
    avatar: "/testimonials/lisa-martinez.jpg",
  },
  {
    id: "t3",
    name: "James Thompson",
    role: "Director of Innovation",
    company: "MedCore Health",
    content:
      "Their computer vision models integrated seamlessly with our diagnostic workflow. Accuracy rates exceeded our expectations from day one.",
    avatar: "/testimonials/james-thompson.jpg",
  },
  {
    id: "t4",
    name: "Rachel Kim",
    role: "CEO",
    company: "BrightPath Education",
    content:
      "The custom AI solution Synthwave built for our platform personalized learning at scale. Student engagement increased by 55% in three months.",
    avatar: "/testimonials/rachel-kim.jpg",
  },
];

export const faqs: FAQItem[] = [
  {
    id: "f1",
    question: "How quickly can we integrate your AI solutions?",
    answer:
      "Most clients see initial integration within 2-4 weeks. Our team provides dedicated support throughout the process, and our APIs are designed for seamless adoption with your existing infrastructure.",
  },
  {
    id: "f2",
    question: "What kind of data do you need to train models?",
    answer:
      "Requirements vary by use case, but we generally work with structured and unstructured data relevant to your specific problem. We also offer synthetic data generation and data augmentation services when needed.",
  },
  {
    id: "f3",
    question: "Do you offer on-premise deployment?",
    answer:
      "Yes, our Enterprise plan includes on-premise deployment options for organizations with strict data sovereignty or security requirements. We support major cloud providers as well.",
  },
  {
    id: "f4",
    question: "How do you ensure model accuracy and reliability?",
    answer:
      "We employ rigorous testing protocols including cross-validation, A/B testing, and continuous monitoring. Our models are regularly retrained on fresh data to maintain peak performance.",
  },
  {
    id: "f5",
    question: "What kind of support do you provide?",
    answer:
      "All plans include technical support with response time guarantees. Growth plans add chat support, and Enterprise customers receive a dedicated support engineer and personalized onboarding.",
  },
  {
    id: "f6",
    question: "Can I scale my usage as my business grows?",
    answer:
      "Absolutely. Our infrastructure is built for scale. You can upgrade your plan at any time, and we offer custom Enterprise solutions for organizations with high-volume needs.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "future-of-enterprise-ai",
    title: "The Future of Enterprise AI: Trends to Watch in 2026",
    excerpt:
      "Explore the key trends shaping enterprise AI adoption, from multimodal models to edge computing and responsible AI frameworks.",
    date: "2026-06-01",
    author: "Alex Chen",
    category: "Industry Insights",
    readTime: "8 min read",
    image: "/blog/enterprise-ai.jpg",
    tags: ["AI Trends", "Enterprise", "Technology"],
  },
  {
    slug: "nlp-transforming-customer-service",
    title: "How NLP Is Transforming Customer Service Operations",
    excerpt:
      "Natural language processing is revolutionizing how businesses handle customer interactions at scale.",
    date: "2026-05-15",
    author: "Sarah Johnson",
    category: "Technology",
    readTime: "6 min read",
    image: "/blog/nlp-customer-service.jpg",
    tags: ["NLP", "Customer Service", "Automation"],
  },
  {
    slug: "building-scalable-ml-pipelines",
    title: "Building Scalable Machine Learning Pipelines",
    excerpt:
      "A comprehensive guide to designing data pipelines that can handle enterprise-scale ML workloads.",
    date: "2026-05-01",
    author: "Marcus Williams",
    category: "Engineering",
    readTime: "10 min read",
    image: "/blog/ml-pipelines.jpg",
    tags: ["ML", "Data Engineering", "Architecture"],
  },
  {
    slug: "responsible-ai-governance",
    title: "Responsible AI: Building Governance Frameworks",
    excerpt:
      "How organizations can implement ethical AI practices while maintaining innovation and competitive advantage.",
    date: "2026-04-18",
    author: "Elena Rodriguez",
    category: "Thought Leadership",
    readTime: "7 min read",
    image: "/blog/responsible-ai.jpg",
    tags: ["AI Ethics", "Governance", "Best Practices"],
  },
  {
    slug: "computer-vision-healthcare",
    title: "Computer Vision Applications in Modern Healthcare",
    excerpt:
      "From diagnostic imaging to surgical assistance, computer vision is reshaping the healthcare landscape.",
    date: "2026-04-05",
    author: "Alex Chen",
    category: "Use Cases",
    readTime: "9 min read",
    image: "/blog/cv-healthcare.jpg",
    tags: ["Computer Vision", "Healthcare", "Innovation"],
  },
  {
    slug: "predictive-analytics-supply-chain",
    title: "Using Predictive Analytics to Optimize Supply Chains",
    excerpt:
      "Learn how AI-powered forecasting can reduce costs and improve efficiency in complex supply chains.",
    date: "2026-03-20",
    author: "Sarah Johnson",
    category: "Use Cases",
    readTime: "7 min read",
    image: "/blog/supply-chain.jpg",
    tags: ["Predictive Analytics", "Supply Chain", "Optimization"],
  },
];

export const stats = [
  { label: "Active Clients", value: 500, suffix: "+" },
  { label: "Models Deployed", value: 1200, suffix: "+" },
  { label: "Data Processed", value: 50, suffix: "TB+" },
  { label: "Uptime", value: 99.9, suffix: "%" },
];
