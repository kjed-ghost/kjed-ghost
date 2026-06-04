'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Code, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const stats = [
    { label: 'Excellence', value: 'Elite' },
    { label: 'Architectures', value: '50+' },
    { label: 'Reliability', value: '100%' },
    { label: 'Base', value: 'India' },
  ];

  return (
    <div className="min-h-screen bg-black py-32 noise-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute -inset-6 bg-gradient-to-tr from-neon-cyan/20 to-neon-magenta/20 rounded-[48px] blur-2xl animate-pulse" />
              <div className="relative w-full h-full rounded-[48px] overflow-hidden border border-white/10 glass-panel shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Kaushik John Emmanuel Daniel"
                  fill
                  sizes="(max-width: 768px) 100vw, 512px"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-none">
              The <span className="text-neon-cyan">Architect</span> Behind the Code.
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed font-medium">
              I am a digital architect based in India, providing technical dominance for visionary organizations. My practice is built on the intersection of industrial-grade engineering and strategic AI integration.
            </p>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed font-medium">
              I don&apos;t just build websites; I deliver the technical foundations that businesses are built upon. My mission is to provide absolute technical certainty in an uncertain digital landscape.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="p-6 rounded-3xl glass-panel border border-white/5 text-center group hover:border-neon-cyan transition-all">
                  <div className="text-2xl font-black text-white mb-1 group-hover:text-neon-cyan transition-colors uppercase tracking-tight">{stat.value}</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-black">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values - Bento Grid Style */}
        <div className="mb-40">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">The <span className="text-neon-magenta">Standards.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Technical Dominance',
                desc: 'An uncompromising approach to architectural integrity and performance-driven logic.',
                icon: Code,
                color: 'text-neon-cyan'
              },
              {
                title: 'Absolute Reliability',
                desc: 'Consistency that fosters trust. I deliver results that exceed the expectations of elite clientele.',
                icon: CheckCircle2,
                color: 'text-white'
              },
              {
                title: 'Market Innovation',
                desc: 'Integrating proprietary AI workflows and custom ecosystems to provide a decisive competitive edge.',
                icon: Lightbulb,
                color: 'text-neon-lime'
              }
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-10 rounded-[40px] glass-panel border border-white/10 hover:border-neon-cyan transition-all group"
              >
                <div className={`inline-flex p-5 rounded-2xl bg-black/40 ${value.color} mb-8 shadow-2xl border border-white/5`}>
                  <value.icon size={32} />
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight">{value.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed font-medium">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[64px] overflow-hidden p-16 md:p-24 bg-zinc-900 border border-white/10 shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-magenta/10 opacity-50" />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-none">
              Acquire <br /> <span className="text-neon-cyan">The Advantage.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 font-medium">
              Strategic technical consultations and architectural engineering for visionary founders.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 px-12 py-6 bg-neon-cyan text-black font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,243,255,0.3)]"
            >
              Request Collaboration
              <ArrowRight size={24} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
