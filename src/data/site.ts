import type {
  BlogPost,
  FAQItem,
  NavLink,
  PricingPlan,
  Service,
  Stat,
  ProcessStep,
  TeamMember,
  Testimonial,
} from "@/types";

export const siteConfig = {
  name: "Aethra",
  tagline: "Enterprise AI. Engineered for Impact.",
  description:
    "Aethra is an enterprise AI platform that unifies machine learning, natural language processing, computer vision, and intelligent automation into a single, secure, and scalable infrastructure. Deploy production-grade AI models in minutes, not months.",
  url: "https://aethra.ai",
  ogImage: "/og.jpg",
  links: {
    twitter: "https://twitter.com/aethra",
    linkedin: "https://linkedin.com/company/aethra",
    github: "https://github.com/aethra",
  },
  contact: {
    email: "hello@aethra.ai",
    phone: "+1 (555) 123-4567",
    address: "388 Market Street, Suite 1200, San Francisco, CA 94111",
  },
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Natural Language Processing",
        href: "/services/nlp",
        description: "LLM deployment, fine-tuning, and RAG pipelines at enterprise scale",
      },
      {
        label: "Computer Vision",
        href: "/services/computer-vision",
        description: "Real-time detection, medical imaging, and quality inspection",
      },
      {
        label: "Predictive Analytics",
        href: "/services/predictive-analytics",
        description: "Time-series forecasting, anomaly detection, and risk scoring",
      },
      {
        label: "Intelligent Automation",
        href: "/services/automation",
        description: "Workflow automation, document processing, and data extraction",
      },
      {
        label: "Data Engineering",
        href: "/services/data-engineering",
        description: "Real-time pipelines, data lakes, and feature stores at petabyte scale",
      },
      {
        label: "Security & Compliance",
        href: "/services/security",
        description: "Threat detection, adversarial testing, and model governance",
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const services: Service[] = [
  {
    id: "nlp",
    title: "Natural Language Processing",
    description:
      "Advanced LLM deployment, custom fine-tuning, RAG pipelines, and sentiment analysis at scale. Process millions of documents daily with sub-100ms latency.",
    icon: "Brain",
    features: [
      "Custom LLM fine-tuning on domain-specific data",
      "Retrieval-augmented generation (RAG) pipelines",
      "Multilingual sentiment analysis and entity extraction",
      "Real-time conversation analytics and summarization",
      "Document understanding and intelligent search",
    ],
    gradient: "from-brand-400 to-accent-400",
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    description:
      "Real-time object detection, medical imaging analysis, and quality inspection automation with 99.7% accuracy across manufacturing, healthcare, and logistics.",
    icon: "ScanEye",
    features: [
      "Real-time object detection and tracking",
      "Medical imaging diagnostics and segmentation",
      "Automated visual quality inspection",
      "Optical character recognition at scale",
      "Video analytics and anomaly detection",
    ],
    gradient: "from-brand-400 to-violet-400",
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics",
    description:
      "Time-series forecasting, demand prediction, anomaly detection, and risk scoring engines that process billions of data points daily to surface actionable insights.",
    icon: "TrendingUp",
    features: [
      "Multi-variate time-series forecasting",
      "Real-time anomaly and outlier detection",
      "Customer churn and lifetime value prediction",
      "Credit risk and fraud scoring models",
      "Demand sensing and inventory optimization",
    ],
    gradient: "from-accent-400 to-orange-400",
  },
  {
    id: "automation",
    title: "Intelligent Automation",
    description:
      "Workflow automation, intelligent document processing, and data extraction that reduces manual processing by up to 85% while improving accuracy.",
    icon: "Bot",
    features: [
      "End-to-end workflow orchestration",
      "Intelligent document processing (IDP)",
      "Structured and unstructured data extraction",
      "Automated decisioning and routing",
      "Integration with existing ERP and CRM systems",
    ],
    gradient: "from-emerald-400 to-teal-400",
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    description:
      "Real-time data pipelines, data lakes, feature stores, and ETL automation built to handle petabyte-scale workloads with enterprise-grade reliability.",
    icon: "Database",
    features: [
      "Real-time streaming and batch processing",
      "Automated ETL/ELT pipeline orchestration",
      "Feature store with online and offline serving",
      "Data lakehouse architecture and governance",
      "Schema evolution and data quality monitoring",
    ],
    gradient: "from-sky-400 to-brand-400",
  },
  {
    id: "security",
    title: "Security & Compliance",
    description:
      "AI-powered threat detection, adversarial testing, model governance, and compliance automation for regulated industries including finance and healthcare.",
    icon: "Shield",
    features: [
      "AI-driven threat detection and response",
      "Adversarial robustness testing",
      "Model governance and bias auditing",
      "SOC 2 Type II and HIPAA compliance",
      "Privacy-preserving ML with differential privacy",
    ],
    gradient: "from-rose-400 to-red-400",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 999,
    description: "Ideal for teams evaluating enterprise AI capabilities on real production workloads.",
    features: [
      "Up to 5 model deployments",
      "100,000 API calls per month",
      "Community Slack access",
      "Basic analytics dashboard",
      "Email support within 24 hours",
      "Standard API documentation",
    ],
    cta: "Start Free Trial",
  },
  {
    id: "growth",
    name: "Growth",
    price: 2999,
    description: "Built for scaling teams that need advanced AI capabilities and priority support.",
    highlighted: true,
    popular: true,
    features: [
      "Up to 25 model deployments",
      "1,000,000 API calls per month",
      "Priority chat and email support",
      "Advanced analytics and model monitoring",
      "Custom integration support",
      "99.95% SLA guarantee",
      "Dedicated solution architect",
      "Early access to new features",
    ],
    cta: "Start Free Trial",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 0,
    description: "Custom solutions for organizations requiring dedicated infrastructure and enterprise-grade compliance.",
    features: [
      "Unlimited model deployments",
      "Unlimited API calls",
      "24/7 dedicated support engineer",
      "Dedicated infrastructure with VPC deployment",
      "On-premise deployment option",
      "99.99% SLA with financial backing",
      "SOC 2 Type II, HIPAA, GDPR compliance",
      "Custom model training and fine-tuning",
      "Personalized onboarding and training",
    ],
    cta: "Contact Sales",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "sarah-chen",
    name: "Dr. Sarah Chen",
    role: "Chief Technology Officer",
    avatar: "/team/sarah-chen.jpg",
    bio: "Former VP of AI at Databricks and ML research lead at Google Brain. PhD in Computer Science from Stanford, specializing in large-scale distributed systems and deep learning architectures. Led the development of production ML systems serving billions of users.",
    socials: {
      twitter: "https://twitter.com/sarahchen",
      linkedin: "https://linkedin.com/in/sarahchen",
    },
  },
  {
    id: "marcus-williams",
    name: "Marcus Williams",
    role: "VP of Engineering",
    avatar: "/team/marcus-williams.jpg",
    bio: "Previously led infrastructure teams at OpenAI and Meta, where he built the training infrastructure for GPT-4 and LLaMA. Expert in distributed computing, GPU cluster optimization, and MLOps at unprecedented scale.",
    socials: {
      linkedin: "https://linkedin.com/in/marcuswilliams",
    },
  },
  {
    id: "elena-rodriguez",
    name: "Dr. Elena Rodriguez",
    role: "Head of Research",
    avatar: "/team/elena-rodriguez.jpg",
    bio: "Published 40+ papers in top-tier ML conferences (NeurIPS, ICML, ICLR) with over 15,000 citations. Former research scientist at DeepMind working on reinforcement learning and foundation models. Leads Aethra's applied research division.",
    socials: {
      twitter: "https://twitter.com/elenarodriguez",
      linkedin: "https://linkedin.com/in/elenarodriguez",
    },
  },
  {
    id: "james-park",
    name: "James Park",
    role: "Head of Product",
    avatar: "/team/james-park.jpg",
    bio: "Product leader who shipped AI-first products used by millions at Microsoft (Azure AI) and Slack. Expert in translating complex ML capabilities into intuitive product experiences that drive enterprise adoption and ROI.",
    socials: {
      linkedin: "https://linkedin.com/in/jamespark",
    },
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "David Park",
    role: "CTO",
    company: "Meridian Global Finance",
    content:
      "Aethra's predictive analytics platform reduced our fraud detection latency by 400% while improving accuracy to 99.92%. We processed over 2 billion transactions through their system in the first quarter alone. The ROI was undeniable within 30 days of deployment.",
    rating: 5,
    avatar: "/testimonials/david-park.jpg",
  },
  {
    id: "t2",
    name: "Lisa Martinez",
    role: "SVP of Data Science",
    company: "Atlas Healthcare Systems",
    content:
      "Deploying Aethra's computer vision models across 47 hospitals transformed our radiology workflow. Detection rates for critical findings improved by 34%, and report turnaround time dropped from 24 hours to under 90 minutes. A true leap forward for patient care.",
    rating: 5,
    avatar: "/testimonials/lisa-martinez.jpg",
  },
  {
    id: "t3",
    name: "James Thompson",
    role: "Chief Digital Officer",
    company: "Pinnacle Manufacturing Corp.",
    content:
      "We deployed Aethra's intelligent automation across 12 production facilities and achieved a 72% reduction in quality inspection costs. Their NLP pipeline processes 500,000+ technical documents daily, extracting actionable insights that had been buried in unstructured data for years.",
    rating: 5,
    avatar: "/testimonials/james-thompson.jpg",
  },
  {
    id: "t4",
    name: "Rachel Kim",
    role: "EVP of Technology",
    company: "OmniCloud Retail Group",
    content:
      "Aethra's demand forecasting engine reduced our inventory carrying costs by 28% while improving stock availability to 98.5%. The platform handles seasonal spikes of 10x normal volume without any degradation. Their data engineering team migrated our entire legacy pipeline in six weeks.",
    rating: 5,
    avatar: "/testimonials/rachel-kim.jpg",
  },
];

export const faqs: FAQItem[] = [
  {
    id: "f1",
    question: "How quickly can we integrate Aethra into our existing infrastructure?",
    answer:
      "Most enterprise clients achieve initial integration within 2-4 weeks. Our APIs are designed for seamless adoption with existing cloud infrastructure (AWS, GCP, Azure). We provide dedicated solution architects who work alongside your engineering team, and our pre-built connectors support major data sources including Snowflake, Databricks, BigQuery, Kafka, and S3-compatible storage. For organizations with complex compliance requirements, we offer a phased deployment approach that minimizes operational risk.",
  },
  {
    id: "f2",
    question: "What data governance and security measures are in place?",
    answer:
      "Aethra is SOC 2 Type II certified, HIPAA eligible, and GDPR compliant. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We support VPC deployment, private links, and customer-managed encryption keys (CMK). Our platform includes full audit logging, role-based access control (RBAC), and data retention policies that you control. For regulated industries, we offer on-premise deployment and air-gapped configurations.",
  },
  {
    id: "f3",
    question: "Can Aethra handle our existing ML models or do we need to rebuild?",
    answer:
      "Aethra is framework-agnostic and supports models built with PyTorch, TensorFlow, JAX, scikit-learn, and ONNX Runtime. You can deploy existing models without modification while gradually adopting our optimization toolchain. Our platform automatically handles model versioning, A/B testing, canary deployments, and rollback capabilities. We also provide automated model optimization including quantization, pruning, and distillation to improve inference performance without sacrificing accuracy.",
  },
  {
    id: "f4",
    question: "How does Aethra ensure model accuracy and reliability in production?",
    answer:
      "Our platform includes continuous monitoring and observability for all deployed models. We track data drift, concept drift, feature attribution, and prediction distributions in real time. Automated retraining pipelines can be triggered based on performance thresholds you define. Every model deployment includes canary testing with automatic rollback, and our ensemble routing capability can combine multiple models to achieve optimal accuracy. Enterprise customers receive a 99.99% SLA with financial guarantees.",
  },
  {
    id: "f5",
    question: "What level of support is included with each plan?",
    answer:
      "Starter plans include community support via Slack and email responses within 24 hours. Growth plans add priority chat support with 4-hour response times, a dedicated solution architect, and monthly business reviews. Enterprise customers receive 24/7 support from a dedicated engineering team, 1-hour critical response SLA, personalized onboarding and training programs, and quarterly strategic reviews with our product and research teams.",
  },
  {
    id: "f6",
    question: "Can we scale our AI infrastructure as our business grows?",
    answer:
      "Aethra's infrastructure is built for elastic, horizontal scaling. Our platform automatically provisions compute resources based on workload demand, handling traffic spikes from 1x to 100x without manual intervention. We support multi-region deployment for global workloads, and our distributed inference engine can serve billions of predictions daily with consistent sub-50ms p99 latency. Upgrading between plans is seamless and requires no infrastructure changes on your side.",
  },
  {
    id: "f7",
    question: "Do you offer custom model training and fine-tuning services?",
    answer:
      "Yes. Our research team, led by Dr. Elena Rodriguez, partners with enterprise clients to develop custom models tailored to domain-specific requirements. We specialize in fine-tuning large language models on proprietary datasets, building custom computer vision architectures for specialized use cases, and developing hybrid models that combine multiple modalities. Projects typically range from 4-12 weeks and include knowledge transfer sessions to empower your internal teams.",
  },
  {
    id: "f8",
    question: "What is the pricing for API calls beyond the included allocation?",
    answer:
      "Overage pricing is transparent and usage-based. Starter plans are billed at $0.50 per 1,000 additional API calls. Growth plans receive a discounted overage rate of $0.30 per 1,000 calls. Enterprise customers benefit from committed use discounts with rates as low as $0.08 per 1,000 calls at volume. All overage pricing is capped to prevent bill shock, and you can set budget alerts and automatic scaling limits through our dashboard.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "building-scalable-ml-pipelines-for-enterprise",
    title: "Building Scalable ML Pipelines for Enterprise",
    excerpt:
      "A comprehensive guide to designing and deploying machine learning pipelines that handle petabyte-scale data with sub-second latency. Learn about streaming architectures, feature stores, and automated retraining strategies.",
    date: "2026-06-12",
    author: "Marcus Williams",
    category: "Engineering",
    readTime: "12 min read",
    image: "/blog/ml-pipelines.jpg",
    tags: ["MLOps", "Data Engineering", "Architecture", "Scale"],
    featured: true,
  },
  {
    slug: "future-of-natural-language-understanding-in-business",
    title: "The Future of Natural Language Understanding in Business",
    excerpt:
      "How advances in LLM fine-tuning, RAG architectures, and multimodal understanding are reshaping enterprise workflows. Real case studies from Fortune 500 deployments.",
    date: "2026-05-28",
    author: "Dr. Sarah Chen",
    category: "Technology",
    readTime: "10 min read",
    image: "/blog/nlu-future.jpg",
    tags: ["NLP", "LLM", "RAG", "Enterprise AI"],
    featured: true,
  },
  {
    slug: "computer-vision-in-healthcare-2026-retrospective",
    title: "Computer Vision in Healthcare: A 2026 Retrospective",
    excerpt:
      "Five years of AI-assisted diagnostics have transformed radiology, pathology, and remote patient monitoring. We analyze adoption metrics, accuracy improvements, and lessons learned across 200+ hospital deployments.",
    date: "2026-05-10",
    author: "Dr. Elena Rodriguez",
    category: "Industry Insights",
    readTime: "15 min read",
    image: "/blog/cv-healthcare.jpg",
    tags: ["Computer Vision", "Healthcare", "Medical Imaging", "AI"],
    featured: false,
  },
  {
    slug: "responsible-ai-governance-frameworks-for-enterprise",
    title: "Responsible AI: Governance Frameworks for Enterprise",
    excerpt:
      "A practical framework for implementing AI governance that balances innovation with compliance. Covers model documentation, bias auditing, explainability, and regulatory readiness for the AI Act.",
    date: "2026-04-22",
    author: "James Park",
    category: "Thought Leadership",
    readTime: "8 min read",
    image: "/blog/responsible-ai.jpg",
    tags: ["AI Ethics", "Governance", "Compliance", "Regulation"],
    featured: false,
  },
  {
    slug: "predictive-analytics-in-supply-chain-management",
    title: "Predictive Analytics in Supply Chain Management",
    excerpt:
      "How AI-powered demand forecasting and anomaly detection reduced inventory costs by 28% for a global retailer. Technical deep dive into the models, data pipelines, and integration architecture.",
    date: "2026-04-08",
    author: "Marcus Williams",
    category: "Use Cases",
    readTime: "11 min read",
    image: "/blog/supply-chain.jpg",
    tags: ["Predictive Analytics", "Supply Chain", "Forecasting"],
    featured: false,
  },
  {
    slug: "roi-of-intelligent-automation-real-results",
    title: "The ROI of Intelligent Automation: Real Results from Fortune 500 Deployments",
    excerpt:
      "Aggregated data from 50 enterprise automation deployments showing average 73% cost reduction in document processing, 4x faster invoice handling, and 94% accuracy on complex extraction tasks.",
    date: "2026-03-18",
    author: "Dr. Sarah Chen",
    category: "Use Cases",
    readTime: "9 min read",
    image: "/blog/automation-roi.jpg",
    tags: ["Automation", "ROI", "Document Processing", "Enterprise"],
    featured: false,
  },
];

export const stats: Stat[] = [
  { value: 500, suffix: "+", label: "Enterprise Clients" },
  { value: 99.99, suffix: "%", label: "Platform Uptime" },
  { value: 3000000000, suffix: "+", label: "Predictions Daily", prefix: "" },
  { value: 15, suffix: "ms", label: "Average Latency" },
];

export const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    title: "Discovery",
    description: "We conduct deep dive workshops with your team to understand your data landscape, business objectives, and technical requirements. Delivers a detailed roadmap with defined success metrics.",
    icon: "Search",
  },
  {
    id: "design",
    title: "Design",
    description: "Our architects design a solution architecture tailored to your infrastructure, including data pipelines, model selection, deployment strategy, and integration points with existing systems.",
    icon: "PenTool",
  },
  {
    id: "development",
    title: "Development",
    description: "We build and train production-grade models using your data, with continuous validation against your success metrics. Iterative sprints with weekly demos ensure alignment at every stage.",
    icon: "Code2",
  },
  {
    id: "deployment",
    title: "Deployment",
    description: "Models are deployed to your environment with automated canary testing, A/B evaluation, and rollback capabilities. Full CI/CD integration with your existing DevOps workflows.",
    icon: "Rocket",
  },
  {
    id: "monitoring",
    title: "Monitoring",
    description: "Continuous monitoring of model performance, data drift, and system health with automated alerts and retraining triggers. Real-time dashboards provide full visibility into every deployment.",
    icon: "Activity",
  },
  {
    id: "optimization",
    title: "Optimization",
    description: "Ongoing model optimization through A/B testing, hyperparameter tuning, and architecture updates. Quarterly business reviews to identify new opportunities and measure realized ROI.",
    icon: "LineChart",
  },
];
