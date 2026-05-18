'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

const ProjectCard = ({ title, description, tags, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
    className="group relative bg-zinc-900/50 border border-white/10 rounded-3xl overflow-hidden hover:border-neon-cyan/50 transition-all hover:shadow-[0_0_20px_rgba(0,243,255,0.1)]"
  >
    <div className="aspect-video bg-white/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
      <Folder className="w-16 h-16 text-neon-cyan opacity-20 group-hover:opacity-100 transition-all" />
    </div>
    <div className="p-8">
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag: string) => (
          <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-2xl font-bold mb-4 group-hover:text-neon-cyan transition-colors">{title}</h3>
      <p className="text-gray-400 mb-8 leading-relaxed line-clamp-2">
        {description}
      </p>
      <div className="flex gap-4">
        <button className="p-2 rounded-lg bg-white/5 border border-white/10 hover:text-neon-cyan hover:border-neon-cyan transition-colors">
          <Github size={20} />
        </button>
        <button className="p-2 rounded-lg bg-white/5 border border-white/10 hover:text-neon-cyan hover:border-neon-cyan transition-colors">
          <ExternalLink size={20} />
        </button>
      </div>
    </div>
  </motion.div>
);

export default function ProjectsPage() {
  const projects = [
    {
      title: 'E-commerce Engine',
      description: 'A high-performance custom WordPress solution with advanced filtering and AI-driven recommendations.',
      tags: ['WordPress', 'PHP', 'WooCommerce', 'React'],
      delay: 0.1,
    },
    {
      title: 'AI Content Orchestrator',
      description: 'Full-stack application integrating Google AI Studio to automate multi-channel content creation.',
      tags: ['Next.js', 'TypeScript', 'Google AI', 'Tailwind'],
      delay: 0.2,
    },
    {
      title: 'Business SaaS Dashboard',
      description: 'Comprehensive dashboard for managing enterprise workflows with real-time data visualization.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
      delay: 0.3,
    },
    {
      title: 'Portfolio Framework',
      description: 'A sleek, performant portfolio template for creative professionals and developers.',
      tags: ['Next.js', 'Framer Motion', 'TypeScript'],
      delay: 0.4,
    },
  ];

  return (
    <div className="min-h-screen bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6 neon-text-cyan"
            >
              Featured <span className="bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">Projects</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-400"
            >
              A selection of my recent work, ranging from complex full-stack applications to custom WordPress solutions.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="https://github.com/kjed-ghost"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-full flex items-center gap-2 hover:bg-white/10 transition-all"
            >
              <Github size={20} />
              More on GitHub
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
