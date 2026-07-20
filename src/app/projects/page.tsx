'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Sparkles, ArrowRight, Server, KeyRound, Cpu, ShieldCheck } from 'lucide-react';
import SpotlightCard from '@/components/interactivity/SpotlightCard';
import Magnetic from '@/components/interactivity/Magnetic';
import { ENGINES } from '@/lib/constants';

interface EngineCardProps {
  id: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  features: string[];
  category: string;
  isAvailableForLicense: boolean;
  index: number;
}

const EngineCard = ({ id, title, tagline, description, techStack, features, category, isAvailableForLicense, index }: EngineCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true }}
    className={id === 'stitch' ? 'lg:col-span-2' : ''}
  >
    <SpotlightCard className="group relative glass-panel rounded-[40px] overflow-hidden border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-neon-cyan/50 h-full flex flex-col justify-between">
      <div>
        {/* Card Header graphic */}
        <div className="aspect-[21/9] bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-neon-cyan opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

          {id === 'stitch' ? (
            <Server className="w-16 h-16 text-neon-cyan opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
          ) : (
            <Cpu className="w-16 h-16 text-neon-magenta opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
          )}

          <div className="absolute top-6 left-6 px-4 py-2 bg-black/60 border border-white/10 text-[9px] font-black uppercase tracking-[0.25em] rounded-full text-neon-cyan flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-lime animate-pulse" />
            {category}
          </div>

          {isAvailableForLicense && (
            <div className="absolute top-6 right-6 px-3 py-1.5 bg-neon-cyan text-black text-[9px] font-black uppercase tracking-widest rounded-md flex items-center gap-1.5">
              <KeyRound size={12} />
              LICENSE AVAILABLE
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-8 sm:p-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {techStack.map((tech) => (
              <span key={tech} className="px-3.5 py-1.5 bg-white/5 border border-white/5 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">
                {tech}
              </span>
            ))}
          </div>

          <h3 className="text-3xl sm:text-4xl font-black mb-3 group-hover:text-neon-cyan transition-colors tracking-tight">
            {title}
          </h3>
          <p className="text-neon-magenta/90 font-mono text-xs uppercase tracking-wider mb-6">
            {tagline}
          </p>

          <p className="text-gray-400 text-lg mb-8 leading-relaxed font-medium">
            {description}
          </p>

          <div className="space-y-3.5 mb-8">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-gray-400 font-medium">
                <ShieldCheck size={16} className="text-neon-cyan shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer / Call To Actions */}
      <div className="p-8 sm:p-12 pt-0 border-t border-white/5 bg-black/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <Link
          href={`/contact?engine=${id}`}
          className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white hover:text-neon-cyan transition-all group/link"
        >
          Acquire Source License
          <ArrowRight size={14} className="group-hover/link:translate-x-1.5 transition-transform" />
        </Link>

        <div className="flex gap-4">
          <a
            href="https://github.com/kjed-ghost"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-500 hover:text-white hover:border-white/10 transition-all shadow-md"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </SpotlightCard>
  </motion.div>
);

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black py-32 noise-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Title Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-neon-cyan mb-8"
            >
              <Sparkles size={14} />
              The Vault
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none"
            >
              Elite <span className="text-neon-cyan">Engines.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl sm:text-2xl text-gray-500 font-medium leading-relaxed"
            >
              Expose and secure license-ready source codes of our leading production engines. No SaaS ongoing fees, total ownership.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="shrink-0"
          >
            <Magnetic strength={0.2}>
              <a
                href="https://github.com/kjed-ghost"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-5 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3.5 hover:bg-white/10 transition-all font-black uppercase tracking-widest text-xs block"
              >
                <Github size={20} />
                Explore Active Repos
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* Dynamic Engines Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {ENGINES.map((engine, index) => (
            <EngineCard key={engine.id} {...engine} index={index} />
          ))}
        </div>

        {/* Custom Codebase Architecture CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 sm:p-20 rounded-[48px] bg-gradient-to-tr from-neon-cyan/10 to-neon-magenta/10 border border-white/10 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-10 opacity-15 rotate-12 pointer-events-none">
            <Sparkles size={120} className="text-neon-cyan" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Need a Custom Proprietary Engine?</h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            If our pre-built repository engines do not match your vision, commission our Chief Architect to design and deploy a bespoke code engine built to your exact systems specification.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-4 px-10 py-5 bg-neon-cyan text-black font-black uppercase tracking-widest rounded-xl text-xs hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,243,255,0.3)]"
          >
            Commission Custom Engine
            <ArrowRight size={18} />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
