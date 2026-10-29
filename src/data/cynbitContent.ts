// ─── Cynbit Technologies — Canonical Brand Content ─────────────────────────
// Single source of truth for all copy, metrics, and structural data.

export interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string; // lucide icon name
  gradient: string; // tailwind gradient classes
  highlights: string[];
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  accentColor: string;
  features: string[];
}

export interface ProcessStep {
  step: string; // "01"–"06"
  title: string;
  description: string;
  icon: string;
}

export interface Metric {
  value: string;
  label: string;
  client: string;
}

export interface BlueprintDomain {
  id: string;
  label: string;
  description: string;
  icon: string;
}

export interface BlueprintScope {
  id: string;
  label: string;
  timeline: string;
  description: string;
}

// ─── Foundational Pillars ──────────────────────────────────────────────────

export const pillars: Pillar[] = [
  {
    id: "ai-automation",
    title: "AI Automation",
    subtitle: "LLM & Autonomous Agents",
    description:
      "Deploy intelligent autonomous agents powered by cutting-edge LLMs. From conversational AI to complex multi-agent orchestration, we engineer systems that think, adapt, and execute.",
    icon: "Brain",
    gradient: "from-cyan-500/20 to-blue-600/20",
    highlights: [
      "Custom LLM Fine-Tuning",
      "Multi-Agent Orchestration",
      "RAG Pipelines & Vector Search",
      "Autonomous Workflow Engines",
    ],
  },
  {
    id: "custom-it",
    title: "Custom IT Infrastructure",
    subtitle: "Full-Stack Web/Mobile · AWS/Azure",
    description:
      "End-to-end software architecture from responsive frontends to scalable cloud infrastructure. We build systems engineered for zero-downtime at any scale.",
    icon: "Server",
    gradient: "from-blue-500/20 to-indigo-600/20",
    highlights: [
      "Next.js / React Native",
      "Node.js / FastAPI / Go",
      "AWS & Azure Architecture",
      "CI/CD & Infrastructure as Code",
    ],
  },
  {
    id: "technical-seo",
    title: "Technical SEO & Growth",
    subtitle: "Data-Driven Digital Visibility",
    description:
      "Precision-engineered growth strategies combining technical SEO, conversion optimization, and performance analytics to dominate organic search rankings.",
    icon: "TrendingUp",
    gradient: "from-emerald-500/20 to-teal-600/20",
    highlights: [
      "Core Web Vitals Optimization",
      "Schema & Structured Data",
      "Programmatic SEO at Scale",
      "Conversion Funnel Analytics",
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    subtitle: "Scalable · Resilient · Automated",
    description:
      "Architect cloud-native infrastructure with automated pipelines, container orchestration, and observability baked into every deployment layer.",
    icon: "Cloud",
    gradient: "from-violet-500/20 to-purple-600/20",
    highlights: [
      "Kubernetes & Docker",
      "Terraform & Pulumi IaC",
      "Monitoring & Alerting",
      "Zero-Downtime Deployments",
    ],
  },
];

// ─── Proprietary SaaS Suite ────────────────────────────────────────────────

export const products: Product[] = [
  {
    id: "cynbit-studio",
    name: "Cynbit Studio",
    tagline: "Career Intelligence & Adaptive AI Coding Missions",
    description:
      "An AI-powered career development platform that generates adaptive coding challenges, tracks skill progression, and matches developers with real-world mission-based learning paths.",
    icon: "Code2",
    accentColor: "cyan",
    features: [
      "Adaptive AI Coding Missions",
      "Skill Progression Analytics",
      "Career Intelligence Engine",
      "Real-World Project Matching",
    ],
  },
  {
    id: "revio",
    name: "Revio",
    tagline: "AI Review Assistant & Sentiment Hub",
    description:
      "Centralize and analyze customer feedback with AI-driven sentiment analysis. Revio transforms raw reviews into actionable product intelligence and reputation signals.",
    icon: "MessageSquareStar",
    accentColor: "blue",
    features: [
      "Multi-Platform Review Aggregation",
      "Real-Time Sentiment Analysis",
      "Automated Response Drafting",
      "Reputation Score Dashboard",
    ],
  },
  {
    id: "tenantease",
    name: "TenantEase",
    tagline: "Smart Property & Tenant Ecosystem",
    description:
      "A comprehensive property management ecosystem with AI-assisted tenant screening, automated rent collection, maintenance workflows, and predictive occupancy analytics.",
    icon: "Building2",
    accentColor: "emerald",
    features: [
      "AI Tenant Screening",
      "Automated Rent Collection",
      "Maintenance Workflow Engine",
      "Occupancy Prediction Analytics",
    ],
  },
];

// ─── BitElevate Training ───────────────────────────────────────────────────

export const bitElevate = {
  name: "BitElevate",
  tagline: "Global Certification · Senior Architect Mentorship · Industry Projects",
  description:
    "An elite upskilling program connecting aspiring engineers with senior architect mentors through live certifications, hands-on industry projects, and structured career acceleration tracks.",
  icon: "GraduationCap",
  features: [
    "Global Certification Programs",
    "1-on-1 Senior Architect Mentorship",
    "Live Industry Project Portfolios",
    "Career Acceleration Tracks",
    "Weekly Code Review Sessions",
    "Enterprise Architecture Workshops",
  ],
};

// ─── 6-Step Engineering Process ────────────────────────────────────────────

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Audit",
    description:
      "Deep-dive into your existing systems, business objectives, and technical landscape. We identify friction points, opportunities, and define success metrics.",
    icon: "Search",
  },
  {
    step: "02",
    title: "Strategy & Blueprinting",
    description:
      "Transform insights into an actionable architecture blueprint. Technology selection, milestone planning, and resource allocation — all mapped precisely.",
    icon: "Map",
  },
  {
    step: "03",
    title: "High-Fidelity Design",
    description:
      "Pixel-perfect UI/UX design systems, interactive prototypes, and user flow mapping — validated through stakeholder reviews before a single line of code.",
    icon: "Palette",
  },
  {
    step: "04",
    title: "Technical Implementation",
    description:
      "Agile sprints with continuous integration. Clean, documented, production-grade code built on modern frameworks with automated test coverage from day one.",
    icon: "Wrench",
  },
  {
    step: "05",
    title: "Quality & Integrity Check",
    description:
      "Rigorous QA across performance, security, accessibility, and cross-browser compatibility. Load testing at 10× expected traffic before any deployment.",
    icon: "ShieldCheck",
  },
  {
    step: "06",
    title: "Deployment & Evolution",
    description:
      "Zero-downtime deployment with monitoring, alerting, and iterative optimization. Post-launch analytics drive continuous product evolution.",
    icon: "Rocket",
  },
];

// ─── Metrics & Social Proof ────────────────────────────────────────────────

export const metrics: Metric[] = [
  { value: "+40%", label: "Growth Delivered", client: "Marketing Addict" },
  { value: "50k+", label: "Active Users", client: "Evento" },
  { value: "99.9%", label: "Uptime SLA", client: "Urban Wardrobe" },
];

// ─── Blueprint Modal Data ──────────────────────────────────────────────────

export const blueprintDomains: BlueprintDomain[] = [
  {
    id: "ai-agents",
    label: "Autonomous AI Agents",
    description: "LLM-powered multi-agent systems, RAG pipelines, and AI automation",
    icon: "Brain",
  },
  {
    id: "saas-web",
    label: "Custom SaaS / Web Dev",
    description: "Full-stack web & mobile applications with modern frameworks",
    icon: "Code2",
  },
  {
    id: "cloud-devops",
    label: "Cloud & DevOps",
    description: "AWS/Azure architecture, Kubernetes, CI/CD, and infrastructure",
    icon: "Cloud",
  },
  {
    id: "bitelevate",
    label: "BitElevate Inquiry",
    description: "Training programs, certifications, and mentorship tracks",
    icon: "GraduationCap",
  },
];

export const blueprintScopes: BlueprintScope[] = [
  {
    id: "mvp",
    label: "MVP Sprint",
    timeline: "4–6 Weeks",
    description: "Rapid prototype-to-production for startups and proof-of-concepts",
  },
  {
    id: "enterprise",
    label: "Enterprise Transformation",
    timeline: "3–6 Months",
    description: "Full-scale platform architecture with team augmentation",
  },
  {
    id: "ai-integration",
    label: "Dedicated AI Integration",
    timeline: "6–12 Weeks",
    description: "Embedded AI/ML layer into existing infrastructure",
  },
];

export const recommendedStacks: Record<string, string[]> = {
  "ai-agents": ["LangChain", "FastAPI", "Pinecone", "AWS Lambda", "Python 3.12"],
  "saas-web": ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Vercel"],
  "cloud-devops": ["Terraform", "Kubernetes", "AWS ECS", "GitHub Actions", "Datadog"],
  bitelevate: ["Live Cohorts", "Project-Based Learning", "1:1 Mentorship", "Certification"],
};

// ─── Company Info ──────────────────────────────────────────────────────────

export const companyInfo = {
  name: "Cynbit Technologies",
  location: "Pratap Nagar, Jaipur, Rajasthan",
  email: "opportunities@cynbit.in",
  tagline: "Jaipur's AI & Software Architecture Hub",
  responseSLA: "24H Sync",
};

// ─── Navigation ────────────────────────────────────────────────────────────

export const navLinks = [
  {
    label: "Company",
    href: "#company",
    children: [
      { label: "About Cynbit", href: "#company" },
      { label: "Engineering Philosophy", href: "#pillars" },
      { label: "Jaipur Headquarters", href: "#contact" },
    ],
  },
  {
    label: "Expertise",
    href: "#pillars",
    children: [
      { label: "AI Automation & LLMs", href: "#pillars" },
      { label: "Custom IT Infrastructure", href: "#pillars" },
      { label: "Cloud & DevOps Architecture", href: "#pillars" },
      { label: "Technical SEO & Scale", href: "#pillars" },
    ],
  },
  {
    label: "BitElevate",
    href: "#bitelevate",
    children: [
      { label: "Talent Training Hub", href: "#bitelevate" },
      { label: "Modern Engineering Stack", href: "#bitelevate" },
      { label: "Enterprise Readiness", href: "#bitelevate" },
    ],
  },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

// ─── Audit Annotations ────────────────────────────────────────────────────

export interface AuditAnnotation {
  id: string;
  targetSelector: string;
  title: string;
  description: string;
  type: "spatial" | "alignment" | "conversion";
}

export const auditAnnotations: AuditAnnotation[] = [
  {
    id: "spatial-rhythm",
    targetSelector: "[data-audit='spatial']",
    title: "Spatial Rhythm Fixed",
    description:
      'Standardized py-16/py-20 vertical cadence replacing excessive 160px+ dead zones from the original site.',
    type: "spatial",
  },
  {
    id: "cta-baseline",
    targetSelector: "[data-audit='cta']",
    title: "CTA Baseline Fixed",
    description:
      "inline-flex items-center with leading-none ensures pixel-perfect optical alignment of text and icon within buttons.",
    type: "alignment",
  },
  {
    id: "conversion-flow",
    targetSelector: "[data-audit='conversion']",
    title: "Conversion Flow Upgraded",
    description:
      "Replaced static contact form friction with a guided 3-step Interactive Architecture Blueprint generator.",
    type: "conversion",
  },
];
