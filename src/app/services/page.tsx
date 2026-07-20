'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2, Zap, HelpCircle } from 'lucide-react';
import SpotlightCard from '@/components/interactivity/SpotlightCard';
import Magnetic from '@/components/interactivity/Magnetic';
import { SERVICES } from '@/lib/constants';

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: 'What does a "Self-Hosted Codebase License" include?',
    a: 'A Lifetime Codebase License gives you raw, read-and-write access to our highly refined GitHub repository. It includes fully dockerized multi-stage builds, clean CI/CD orchestration scripts, database schemas, full test suites, and comprehensive developer setup documentation. You host it, you own the data, and you never pay us a monthly subscription.'
  },
  {
    q: 'How do you handle custom integration requests?',
    a: 'Under our Elite Web & App Architecture service, we can customize our licensed engines or build entirely bespoke web systems from scratch. We work on fixed-scope deliverables with a 50% upfront deposit, coordinating directly with your technical directors.'
  },
  {
    q: 'What is the response time for WordPress Forensic Fixing?',
    a: 'We treat WordPress critical breakdowns as high-priority rescue operations. Our typical response and initial forensic investigation begin within 2 to 4 hours of contract initialization. We work around the clock until your database, e-commerce checkouts, and layout are restored to absolute stability.'
  },
  {
    q: 'Can we transition from a self-hosted license to bespoke management later?',
    a: 'Yes. If you start with one of our raw repository licenses and later require dedicated scaling, performance tuning, or architectural updates, you can commission Monarch Automations to act as your Principal Developer on an elite retainer.'
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black py-32 noise-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-neon-cyan mb-8"
          >
            <Sparkles size={14} />
            Solutions &amp; Architectures
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-10 tracking-tighter"
          >
            Sovereign <span className="text-neon-cyan">Systems.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl sm:text-2xl text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Surgical-grade codebases, custom high-performance React architectures, and professional web recovery. Built for clients who require complete autonomy and flawless execution.
          </motion.p>
        </div>

        {/* Main Services Breakdown */}
        <div className="space-y-16 mb-40">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <SpotlightCard className={`group relative p-8 md:p-16 rounded-[48px] glass-panel border border-white/10 hover:border-${service.highlightColor}/30 bg-white/2 transition-all duration-500`}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                  {/* Left Column: Descriptions and Pricing */}
                  <div className="lg:col-span-7 space-y-6">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">
                      {service.category}
                    </span>
                    <h2 className="text-3.5xl sm:text-5xl font-black tracking-tighter group-hover:text-white transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-neon-cyan/90 font-mono text-sm uppercase tracking-wider">
                      {service.tagline}
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed font-medium pt-2">
                      {service.description}
                    </p>

                    <div className="pt-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                      <div className="p-5 rounded-2xl bg-black/40 border border-white/5">
                        <div className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Licensing Model</div>
                        <div className="text-xl font-black text-white mt-1">{service.pricing}</div>
                      </div>

                      <Magnetic strength={0.2}>
                        <a
                          href={`/contact?service=${service.id}`}
                          className={`px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3 transition-all ${
                            service.highlightColor === 'neon-cyan'
                              ? 'bg-neon-cyan text-black shadow-[0_0_20px_rgba(0,243,255,0.2)]'
                              : service.highlightColor === 'neon-magenta'
                              ? 'bg-neon-magenta text-white shadow-[0_0_20px_rgba(255,0,255,0.2)]'
                              : 'bg-neon-lime text-black shadow-[0_0_20px_rgba(188,255,0,0.2)]'
                          }`}
                        >
                          {service.ctaText}
                          <ArrowRight size={14} />
                        </a>
                      </Magnetic>
                    </div>
                  </div>

                  {/* Right Column: Key Technical Deliverables */}
                  <div className="lg:col-span-5 lg:pl-8 space-y-8 lg:border-l lg:border-white/5 h-full flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-6">Technical Scope Includes:</h4>
                      <ul className="space-y-5">
                        {service.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-4 text-base font-medium text-gray-400 group-hover:text-gray-300 transition-colors">
                            <CheckCircle2 size={18} className="text-neon-cyan shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-8 p-6 rounded-2xl bg-black/30 border border-white/5">
                      <div className="flex items-center gap-3 text-xs font-black text-white uppercase tracking-widest mb-2">
                        <Zap size={14} className="text-neon-lime" />
                        Execution Speed Guarantee
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed font-medium">
                        {service.id === 'wordpress-fixing'
                          ? 'Emergency mobilization within 2-4 hours. Active remediation cycles executed continuously.'
                          : 'Immediate source repository transfer within 12 hours of payment clearance.'}
                      </p>
                    </div>
                  </div>

                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div className="py-24 border-t border-white/5 mb-40">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter">Our Operational <span className="text-neon-magenta">Pipeline.</span></h2>
            <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">From initial acquisition request to deployment validation, we emphasize absolute clarity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Consultation & Scope', text: 'We review your architectural needs, license eligibility, or critical WordPress logs during a secure onboarding consultation.' },
              { step: '02', title: 'Code Provisioning', text: 'Licenses are transferred immediately to your GitHub account or custom development cycles begin on isolated staging environments.' },
              { step: '03', title: 'Deployment Validation', text: 'We run specialized automated health checks and verification runs (such as Playwright and production builds) to validate perfect operational state.' }
            ].map((step, i) => (
              <div key={i} className="p-10 rounded-[32px] glass-panel border border-white/10 bg-white/2 hover:border-neon-cyan transition-all group">
                <span className="font-mono text-5xl font-black text-neon-cyan/20 group-hover:text-neon-cyan transition-colors block mb-6">{step.step}</span>
                <h3 className="text-xl font-black text-white mb-3 tracking-tight">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-24 border-t border-white/5">
          <div className="mb-20">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-neon-cyan">Clearing Ambiguity</span>
            <h2 className="text-4xl sm:text-6xl font-black mt-4 tracking-tighter">Frequently Answered <span className="text-neon-cyan">Queries.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {faqs.map((faq, i) => (
              <div key={i} className="space-y-4">
                <h3 className="text-xl font-black text-white flex items-start gap-3 tracking-tight">
                  <HelpCircle size={20} className="text-neon-cyan shrink-0 mt-1" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-gray-400 text-base leading-relaxed pl-8 font-medium">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
