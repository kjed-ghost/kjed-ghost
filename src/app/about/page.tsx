'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Code, Lightbulb, Users, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Satisfied Clients', value: '100%' },
    { label: 'Lines of Code', value: '100k+' },
  ];

  const values = [
    {
      title: 'Technical Competence',
      description: 'Writing clean, maintainable, and efficient code is at the core of everything I build.',
      icon: Code,
    },
    {
      title: 'Reliability',
      description: 'Meeting deadlines and providing consistent communication is my top priority.',
      icon: CheckCircle2,
    },
    {
      title: 'Innovation',
      description: 'Constantly learning and integrating the latest technologies like AI to provide competitive edges.',
      icon: Lightbulb,
    },
    {
      title: 'Client-Centric',
      description: 'Understanding business goals first to ensure the technical solution delivers real value.',
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-indigo-500 rounded-3xl rotate-6 opacity-20" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src="/profile.jpg"
                  alt="Kaushik John Emmanuel Daniel"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl font-bold mb-6">About <span className="text-indigo-500">Kaushik John</span></h1>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              I am a self-taught and experienced freelancer based in India, specializing in Website Development,
              Designing, and technical troubleshooting. My journey in tech is driven by a passion for continuous
              learning and solving complex problems.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Whether it's building a custom WordPress theme from scratch or architecting a modern full-stack
              web application with AI capabilities, I focus on delivering high-quality solutions that help
              businesses thrive in the digital age.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* My Values */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Principles</h2>
            <p className="text-gray-400">What I bring to every collaboration</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-zinc-900/50 border border-white/10 text-center"
              >
                <div className="inline-flex p-4 rounded-2xl bg-indigo-500/10 text-indigo-400 mb-6">
                  <value.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience / Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award className="text-indigo-500" />
              Specializations
            </h2>
            <div className="space-y-6">
              {[
                { title: 'Full-Stack Development', detail: 'Modern JavaScript frameworks (React, Next.js, Node.js)' },
                { title: 'WordPress Expert', detail: 'Custom themes, plugins, and complex ecosystem integrations' },
                { title: 'AI Implementation', detail: 'Integrating LLMs and AI workflows into production apps' },
                { title: 'Technical SEO', detail: 'Optimizing sites for speed, accessibility, and search ranking' },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-3xl p-8 border border-white/10 flex flex-col justify-center text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to start your next project?</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              I am always looking for exciting collaborations and high-impact projects. Let's discuss how I can help you achieve your goals.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-full font-bold transition-all mx-auto"
            >
              Get In Touch
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}
