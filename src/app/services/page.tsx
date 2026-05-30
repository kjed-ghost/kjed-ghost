'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Cpu, Sparkles, Server, Zap, Search, ShieldCheck } from 'lucide-react';
import SpotlightCard from '@/components/interactivity/SpotlightCard';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  delay: number;
  color: string;
}

const ServiceCard = ({ title, description, icon: Icon, delay, color }: ServiceCardProps) => (
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
        {['Performance First', 'Scalable Architecture', 'Future-Proof Tech'].map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-300 transition-colors">
            <Zap size={14} className="text-neon-cyan" />
            {item}
          </li>
        ))}
      </ul>
    </SpotlightCard>
  </motion.div>
);

export default function ServicesPage() {
  const services = [
    {
      title: 'Full-Stack Development',
      description: 'Architecting high-performance web applications with Next.js, React, and Node.js. Focused on hyperscale and absolute precision.',
      icon: Code2,
      delay: 0.1,
      color: 'neon-cyan'
    },
    {
      title: 'WordPress Specialist',
      description: 'Custom theme and plugin development. I transform WordPress into a powerful, secure, and SEO-optimized business engine.',
      icon: Globe,
      delay: 0.2,
      color: 'neon-magenta'
    },
    {
      title: 'AI Workflow Integration',
      description: 'Bridging the gap between business logic and generative AI. Custom Google AI Studio workflows for automation.',
      icon: Cpu,
      delay: 0.3,
      color: 'neon-lime'
    },
    {
      title: 'DevOps & Scalability',
      description: 'Deploying robust infrastructures that grow with your business. Edge computing and serverless architectures.',
      icon: Server,
      delay: 0.4,
      color: 'white'
    },
    {
      title: 'Technical SEO',
      description: 'Data-driven optimization that goes beyond keywords. Speed, accessibility, and structural excellence.',
      icon: Search,
      delay: 0.5,
      color: 'neon-cyan'
    },
    {
      title: 'Security Audits',
      description: 'Ensuring your digital assets are bulletproof. Comprehensive troubleshooting and technical safeguarding.',
      icon: ShieldCheck,
      delay: 0.6,
      color: 'neon-magenta'
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
            My Expertise
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black mb-10 tracking-tighter"
          >
            Technical <span className="text-neon-cyan">Mastery.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-gray-500 max-w-3xl mx-auto font-medium"
          >
            Engineering robust solutions across the full digital spectrum, from core code to intelligent AI workflows.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}
