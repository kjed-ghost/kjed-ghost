import { Github, Briefcase, LucideIcon } from 'lucide-react';

export interface SocialLink {
  name: string;
  icon: LucideIcon;
  link: string;
  description: string;
  hoverColor: string;
}

export const COMPANY_NAME = 'Monarch Automations';
export const SITE_OWNER = 'Kaushik John Emmanuel Daniel';
export const OWNER_ROLE = 'Founder & Chief Architect';
export const CONTACT_EMAIL = 'kaushikdanielofficial@gmail.com';
export const CONTACT_WHATSAPP = '+91 8601127306';
export const CONTACT_LOCATION = 'India (Remote)';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    icon: Github,
    link: 'https://github.com/kjed-ghost',
    description: 'Review our codebase & repositories',
    hoverColor: 'group-hover:text-white',
  },
  {
    name: 'Upwork',
    icon: Briefcase,
    link: 'https://www.upwork.com/freelancers/~016973166e4ead86f4?mp_source=share',
    description: 'Secure bespoke contracts via Upwork',
    hoverColor: 'group-hover:text-green-400',
  },
  {
    name: 'Freelancer',
    icon: Briefcase,
    link: 'https://www.freelancer.com/u/kjed8l',
    description: 'Hire us on Freelancer.com',
    hoverColor: 'group-hover:text-blue-400',
  },
];

export interface ServiceDetail {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  pricing: string;
  features: string[];
  ctaText: string;
  highlightColor: string;
}

export const SERVICES: ServiceDetail[] = [
  {
    id: 'repo-licensing',
    title: 'Self-Hosted Codebase Licenses',
    category: 'Source-Available Licensing',
    tagline: 'Skip 90% of development with raw, production-grade repo access.',
    description: 'Acquire immediate access to our highly polished, fully-scalable, self-hosted GitHub repositories. Complete with CI/CD pipelines, robust database integrations, and elite tech-stack configurations. Own your infrastructure, deploy in minutes, and avoid SaaS subscription fatigue.',
    pricing: 'From $1,499 / Lifetime License',
    features: [
      'Raw Access to GitHub Repository',
      'White-Label Ready Architecture',
      'Dockerized / Kubernetes-ready deploy scripts',
      'Upstream security patches & active updates',
      'Complete ownership of user data & privacy'
    ],
    ctaText: 'Acquire Engine License',
    highlightColor: 'neon-cyan',
  },
  {
    id: 'bespoke-web-dev',
    title: 'Elite Web & App Architecture',
    category: 'Bespoke Development',
    tagline: 'Custom high-performance web systems tailored for luxury and scale.',
    description: 'Bespoke engineering utilizing Next.js, TypeScript, Tailwind, and cutting-edge animation engines. We translate high-end vision into precise, digital interactive experiences with serverless hosting and optimized, hyper-speed global delivery networks.',
    pricing: 'From $4,999 / Bespoke Build',
    features: [
      'Next.js 15+ App Router Architecture',
      'Tailwind CSS 4 & Custom Fluid Interactivity',
      'High-performance Edge API integrations',
      'Optimized Core Web Vitals (99+ PageSpeed)',
      '100% responsive fluid grid system'
    ],
    ctaText: 'Commission Bespoke Engine',
    highlightColor: 'neon-magenta',
  },
  {
    id: 'wordpress-fixing',
    title: 'WordPress Recovery & Remediation',
    category: 'Expert Rescue Operations',
    tagline: 'Immediate, surgical-grade repair and performance tuning.',
    description: 'WordPress fixing done by veteran system architects. We handle complex e-commerce breakdowns, malware infestation recoveries, slow database queries, security audits, custom PHP/plugin issues, and complete theme reconstructions to restore flawless operations.',
    pricing: 'From $499 / Incident Rescue',
    features: [
      'Deep forensic bug & malware diagnosis',
      'Database query optimization & page-load speedup',
      'Bespoke PHP, Hook, and Plugin remediation',
      'Advanced Cloudflare & security hardening',
      'Seamless restoration with zero data loss'
    ],
    ctaText: 'Deploy WordPress Rescue',
    highlightColor: 'neon-lime',
  },
];

export interface EngineItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  features: string[];
  category: string;
  isAvailableForLicense: boolean;
  demoUrl?: string;
  githubUrl?: string;
}

export const ENGINES: EngineItem[] = [
  {
    id: 'stitch',
    title: 'Stitch Enterprise Engine',
    tagline: 'Hyper-Scale SaaS Framework',
    description: 'A pre-built, full-stack Next.js and Node.js codebase. Includes secure Auth, billing integration, database schema, real-time sync, and fluid UX custom components. Ready to host on your AWS, Vercel, or VPS with a simple Docker command.',
    techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS 4', 'Node.js', 'PostgreSQL', 'Docker'],
    features: [
      'Complete user auth & session security',
      'Stripe & Crypto billing gateways pre-integrated',
      'Fluid Framer Motion micro-interactions',
      'Multi-tenant enterprise organizational control'
    ],
    category: 'SaaS Repository Licensing',
    isAvailableForLicense: true,
  },
  {
    id: 'google-ai-studio',
    title: 'Google AI Studio Integration Orchestrator',
    tagline: 'Advanced AI Workflow Automation',
    description: 'Enterprise workflow framework orchestrating complex LLM agents. Features semantic search indexing, self-correcting prompt state-machines, and secure API gateways directly connected to Google AI Studio workflows.',
    techStack: ['Python', 'Google AI Studio', 'LangChain', 'FastAPI', 'Redis'],
    features: [
      'Structured JSON generation constraints',
      'Advanced semantic RAG (Retrieval-Augmented Generation)',
      'Self-healing API exception handlers',
      'Real-time token usage estimation & cost capping'
    ],
    category: 'AI Automation Integration',
    isAvailableForLicense: true,
  },
];
