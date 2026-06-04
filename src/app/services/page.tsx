'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Cpu, Sparkles, Server, Zap, Search, ShieldCheck } from 'lucide-react';
import SpotlightCard from '@/components/interactivity/SpotlightCard';

interface SolutionCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  delay: number;
  color: string;
  features: string[];
}

const SolutionCard = ({ title, description, icon: Icon, delay, color, features }: SolutionCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true }}
  >
    <SpotlightCard className="group p-10 rounded-[40px] glass-panel border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden h-full">
      <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity`} />

      <div className={`mb-10 p-6 rounded-[24px] bg-black/40 border border-white/5 w-fit group-hover:scale-110 transition-all duration-500 shadow-2xl`}>
        <Icon size={40} className={`text-${color}`} />
      </div>

      <h3 className="text-3xl font-black mb-6 tracking-tight group-hover:text-white transition-colors">{title}</h3>
      <p className="text-gray-400 text-lg leading-relaxed font-medium mb-10">{description}</p>

      <ul className="space-y-4">
        {features.map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-300 transition-colors">
            <Zap size={14} className="text-neon-cyan" />
            {item}
          </li>
        ))}
      </ul>
    </SpotlightCard>
  </motion.div>
);

export default function SolutionsPage() {
  const solutions = [
    {
      title: 'Industrial Full-Stack',
      description: 'Architecting high-performance web applications that serve as the backbone of your enterprise. Precision-engineered with Next.js and Node.js.',
      icon: Code2,
      delay: 0.1,
      color: 'neon-cyan',
      features: ['Technical Dominance', 'Hyperscale Architecture', 'Absolute Precision']
    },
    {
      title: 'Proprietary WordPress',
      description: 'Exclusive custom theme and plugin ecosystems. I transform WordPress into a powerful, secure, and SEO-dominant business asset.',
      icon: Globe,
      delay: 0.2,
      color: 'neon-magenta',
      features: ['Custom Engine', 'Zero Bloat', 'Strategic SEO']
    },
    {
      title: 'AI Workflow Systems',
      description: 'Integrating Google AI Studio into your business logic to automate intelligence and create a significant market advantage.',
      icon: Cpu,
      delay: 0.3,
      color: 'neon-lime',
      features: ['Strategic AI', 'Logic Automation', 'Predictive Workflows']
    },
    {
      title: 'Architectural Audits',
      description: 'In-depth analysis and performance hardening for elite digital infrastructures. I find the bottlenecks your team missed.',
      icon: Server,
      delay: 0.4,
      color: 'white',
      features: ['Deep Optimization', 'Security Hardening', 'Uptime Excellence']
    },
    {
      title: 'Search Dominance',
      description: 'Engineering technical excellence that forces search engines to prioritize your platform. Beyond standard SEO.',
      icon: Search,
      delay: 0.5,
      color: 'neon-cyan',
      features: ['Core Web Vitals', 'Semantic Structure', 'Indexing Mastery']
    },
    {
      title: 'Strategic Consulting',
      description: 'High-level advisory for visionary founders. Technical decision-making that aligns perfectly with business objectives.',
      icon: ShieldCheck,
      delay: 0.6,
      color: 'neon-magenta',
      features: ['Executive Clarity', 'Tech-Stack Strategy', 'Risk Mitigation']
    },
  ];

  return (
    <div className="min-h-screen bg-black py-32 noise-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-neon-cyan mb-8"
          >
            <Sparkles size={14} />
            The Architectural Suite
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black mb-10 tracking-tighter"
          >
            Elite <span className="text-neon-cyan">Architectures.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-gray-500 max-w-3xl mx-auto font-medium"
          >
            Engineering robust solutions that provide absolute technical certainty and market dominance for high-ticket ventures.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <SolutionCard key={solution.title} {...solution} />
          ))}
        </div>
      </div>
    </div>
  );
}
