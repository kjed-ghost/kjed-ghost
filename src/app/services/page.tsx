'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Cpu, CheckCircle2, Server, Database, Layout, ShieldCheck } from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon, features, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
    className="p-8 rounded-3xl bg-zinc-900/50 border border-white/10 hover:border-indigo-500/50 transition-all group"
  >
    <div className="flex items-start justify-between mb-8">
      <div className="p-4 rounded-2xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
        <Icon size={32} />
      </div>
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400 mb-8 leading-relaxed">{description}</p>
    <ul className="space-y-4">
      {features.map((feature: string, i: number) => (
        <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
          <CheckCircle2 className="text-indigo-500 w-5 h-5 flex-shrink-0" />
          {feature}
        </li>
      ))}
    </ul>
  </motion.div>
);

export default function ServicesPage() {
  const services = [
    {
      title: 'Full-Stack Development',
      description: 'Custom web applications built from the ground up using modern technologies. Focused on scalability, performance, and exceptional user experience.',
      icon: Code2,
      features: [
        'React & Next.js Development',
        'Node.js & Express Backends',
        'Database Design (SQL/NoSQL)',
        'RESTful & GraphQL API Integration',
        'Performance Optimization',
      ],
      delay: 0.1,
    },
    {
      title: 'Custom WordPress Solutions',
      description: 'Beyond basic templates. I create high-performing, custom-coded WordPress themes and plugins tailored to your specific business requirements.',
      icon: Globe,
      features: [
        'Custom Theme Development',
        'Plugin Customization & Building',
        'E-commerce (WooCommerce) Setup',
        'WordPress Security & Maintenance',
        'SEO-driven Site Structure',
      ],
      delay: 0.2,
    },
    {
      title: 'AI Application Integration',
      description: 'Leveraging cutting-edge AI technologies to automate workflows and enhance user interaction within your existing or new applications.',
      icon: Cpu,
      features: [
        'Google AI Studio Workflows',
        'LLM API Integrations',
        'AI-driven Chatbots & Assistants',
        'Content Generation Automation',
        'Intelligent Data Analysis',
      ],
      delay: 0.3,
    },
  ];

  return (
    <div className="min-h-screen bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Specialized <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Digital Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Delivering high-ticket freelance solutions for clients who demand technical competence,
            reliability, and innovation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        {/* Technical Toolkit */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">My Technical Toolkit</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Server, name: 'Back-end Dev' },
              { icon: Database, name: 'Databases' },
              { icon: Layout, name: 'Front-end' },
              { icon: ShieldCheck, name: 'Security' },
            ].map((tech, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-4">
                <tech.icon className="w-8 h-8 text-indigo-400" />
                <span className="font-medium text-gray-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
