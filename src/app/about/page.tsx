'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Cpu, KeyRound } from 'lucide-react';
import Link from 'next/link';
import { SITE_OWNER, COMPANY_NAME } from '@/lib/constants';

export default function AboutPage() {
  const stats = [
    { label: 'Licensed Engines', value: '2+' },
    { label: 'Bespoke Systems', value: '50+' },
    { label: 'Upwork Rating', value: '100%' },
    { label: 'HQ Location', value: 'India' },
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
                  alt={SITE_OWNER}
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
            <span className="text-xs font-black uppercase tracking-[0.2em] text-neon-cyan block mb-4">
              ABOUT {COMPANY_NAME.toUpperCase()}
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black mb-10 tracking-tighter leading-none">
              The Sovereign <span className="text-neon-cyan">Architect.</span>
            </h1>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed font-medium">
              Monarch Automations is an elite code foundry directed by Principal Engineer and Chief Architect <span className="text-white font-bold">{SITE_OWNER}</span>. Based in India, we construct ultra-polished web architectures and license raw repository frameworks to high-ticket clients worldwide.
            </p>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed font-medium">
              Our core mission is simple: eliminate vendor lock-in. Instead of charging rent for custom software, we license raw codebases and host them directly on your server. We bypass intermediate layers to provide sheer performance, absolute ownership, and ironclad digital security.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="p-6 rounded-3xl glass-panel border border-white/5 text-center group hover:border-neon-cyan transition-all">
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1 group-hover:text-neon-cyan transition-colors">{stat.value}</div>
                  <div className="text-[9px] text-gray-500 uppercase tracking-[0.2em] font-black">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Our Philosophy Bento */}
        <div className="mb-40">
          <div className="mb-20">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-neon-cyan block mb-2">Our Pillars</span>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter">Design <span className="text-neon-magenta">Philosophies.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Code Sovereignty',
                desc: 'We sell raw GitHub access. Complete data sovereignty, 100% customizability, and zero recurring subscription billing.',
                icon: KeyRound,
                color: 'text-neon-cyan'
              },
              {
                title: 'Forensic Precision',
                desc: 'WordPress fixing and web recovery demands forensic scrutiny. We dismantle threats, repair databases, and optimize systems.',
                icon: ShieldCheck,
                color: 'text-white'
              },
              {
                title: 'Elite Performance',
                desc: 'We develop custom Next.js configurations that achieve near-perfect speed indexing with serverless architectures.',
                icon: Cpu,
                color: 'text-neon-lime'
              }
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="p-10 rounded-[40px] glass-panel border border-white/10 hover:border-neon-cyan transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className={`inline-flex p-5 rounded-2xl bg-black/40 ${value.color} mb-8 shadow-2xl border border-white/5 group-hover:scale-110 transition-transform`}>
                    <value.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-white transition-colors">{value.title}</h3>
                  <p className="text-gray-400 text-base leading-relaxed font-medium">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[64px] overflow-hidden p-12 md:p-24 bg-zinc-900 border border-white/10 shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-magenta/10 opacity-50 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-none">
              Deploy Your <br /> Next <span className="text-neon-cyan">Sovereign System.</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-12 font-medium leading-relaxed">
              Acquire repository licenses, commission custom Next.js architectures, or lock in immediate WordPress incident rescue operations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 px-10 py-5 bg-neon-cyan text-black font-black uppercase tracking-widest rounded-xl text-xs hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,243,255,0.3)]"
            >
              Initiate Secure Consultation
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
