'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder, Sparkles, ArrowRight } from 'lucide-react';
import SpotlightCard from '@/components/interactivity/SpotlightCard';
import Magnetic from '@/components/interactivity/Magnetic';

interface Project {
  title: string;
  description: string;
  tags: string[];
  delay: number;
  featured?: boolean;
}

const ProjectCard: React.FC<Project> = ({ title, description, tags, delay, featured }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true }}
    className={`${featured ? 'lg:col-span-2' : ''}`}
  >
    <SpotlightCard className={`group relative glass-panel rounded-[40px] overflow-hidden border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-neon-cyan/50 h-full`}>
      <div className={`aspect-video bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-neon-cyan opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
        <Folder className="w-20 h-20 text-neon-cyan opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />

        {featured && (
          <div className="absolute top-8 left-8 px-4 py-2 bg-neon-cyan text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
            Flagship Architecture
          </div>
        )}
      </div>

      <div className="p-10">
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span key={tag} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-3xl font-black mb-4 group-hover:text-neon-cyan transition-colors tracking-tight">{title}</h3>
        <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium">
          {description}
        </p>

        <div className="flex items-center gap-6">
          <Link
            href="/contact"
            className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-white hover:text-neon-cyan transition-all group/link"
          >
            Examine Architecture
            <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform" />
          </Link>
          <div className="h-1 w-1 rounded-full bg-white/20" />
          <div className="flex gap-4">
            <button className="text-gray-500 hover:text-white transition-colors">
              <Github size={22} />
            </button>
            <button className="text-gray-500 hover:text-white transition-colors">
              <ExternalLink size={22} />
            </button>
          </div>
        </div>
      </div>
    </SpotlightCard>
  </motion.div>
);

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      title: 'Stitch - Industrial Ecosystem',
      description: 'A Next-Gen full-stack architecture built for hyperscale organizations. Featuring real-time synchronization, edge computing, and streamlined enterprise workflows.',
      tags: ['Next.js', 'React', 'Node.js', 'PostgreSQL'],
      delay: 0.1,
      featured: true
    },
    {
      title: 'Google AI Studio Workflows',
      description: 'Complex AI automation agents leveraging Google AI Studio for enterprise-grade content and logic orchestration. Solving the bottleneck of manual operations.',
      tags: ['AI Studio', 'Python', 'LLMs', 'API'],
      delay: 0.2,
    },
    {
      title: 'Proprietary WordPress Engine',
      description: 'Bespoke WordPress architectures for high-ticket e-commerce with AI-driven personalization engines. Technical exclusivity at its peak.',
      tags: ['WordPress', 'PHP', 'WooCommerce'],
      delay: 0.3,
    },
    {
      title: 'Strategic Copywriting Framework',
      description: 'Proprietary SEO-driven framework for converting technical complexity into high-impact marketing assets that dominate the search landscape.',
      tags: ['SEO', 'Copywriting', 'Marketing'],
      delay: 0.4,
      featured: true
    },
  ];

  return (
    <div className="min-h-screen bg-black py-32 noise-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-neon-cyan mb-8"
            >
              <Sparkles size={14} />
              The Architectural Portfolio
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black mb-8 tracking-tighter"
            >
              Elite <span className="text-neon-cyan">Engines.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl text-gray-500 font-medium leading-relaxed"
            >
              A curation of technical solutions defining absolute mastery and strategic digital dominance.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Magnetic strength={0.2}>
              <a
                href="https://github.com/kjed-ghost"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-5 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-all font-black uppercase tracking-widest text-sm block"
              >
                <Github size={24} />
                The Repository
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-16 rounded-[48px] bg-gradient-to-tr from-neon-cyan/10 to-neon-magenta/10 border border-white/10 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-10 opacity-20 rotate-12">
            <Sparkles size={120} className="text-neon-cyan" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Acquire the Advantage.</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Let&apos;s leverage these architectural standards to create a decisive competitive edge for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 px-12 py-6 bg-neon-cyan text-black font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,243,255,0.3)]"
          >
            Request Collaboration
            <ArrowRight size={24} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
