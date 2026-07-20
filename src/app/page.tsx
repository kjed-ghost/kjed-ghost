'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Code2, Cpu, ExternalLink, Sparkles, ShieldAlert, KeyRound, ServerCrash } from 'lucide-react';
import { SOCIAL_LINKS, SITE_OWNER, SERVICES } from '@/lib/constants';
import SpotlightCard from '@/components/interactivity/SpotlightCard';
import Magnetic from '@/components/interactivity/Magnetic';
import GlitchText from '@/components/interactivity/GlitchText';

const TypewriterText = () => {
  const words = useMemo(() => [
    'Self-Hosted Repositories',
    'Bespoke Web Development',
    'WordPress Rescue Operations',
    'Enterprise AI Workflows'
  ], []);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="text-neon-cyan font-mono inline-block min-h-[1.5em] tracking-tight">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse ml-1 text-neon-magenta">|</span>
    </span>
  );
};

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-300, 300], [8, -8]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-300, 300], [-8, 8]), { stiffness: 100, damping: 30 });

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 noise-bg bg-black"
    >
      {/* Animated Glowing Accents */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 45, 0],
            x: [0, 80, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-neon-cyan/5 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -45, 0],
            x: [0, -80, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] bg-neon-magenta/5 rounded-full blur-[110px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-neon-cyan mb-8"
            >
              <Sparkles size={12} className="animate-pulse" />
              Sovereign Code. Zero Subscriptions.
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-none tracking-tighter">
              <GlitchText text="MONARCH" /> <br />
              <span className="bg-gradient-to-r from-neon-cyan via-white to-neon-magenta bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,243,255,0.3)]">
                AUTOMATIONS
              </span>
            </h1>

            <div className="mt-8 text-xl sm:text-2xl md:text-3xl font-medium text-white/95 min-h-[50px]">
              Elite <TypewriterText />
            </div>

            <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed font-medium">
              We license raw, production-grade GitHub repository engines to free you from SaaS subscription taxes. We architect bespoke high-end web systems and deliver immediate, forensic WordPress rescue operations with unmatched technical precision.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <Magnetic strength={0.3}>
                <Link
                  href="/services"
                  className="group relative px-8 py-5 bg-transparent border-2 border-neon-cyan text-neon-cyan hover:text-black font-black uppercase tracking-widest transition-all rounded-xl overflow-hidden block text-xs"
                >
                  <div className="absolute inset-0 bg-neon-cyan translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-10" />
                  <span className="flex items-center gap-3 relative z-10">
                    License an Engine
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </span>
                </Link>
              </Magnetic>

              <Magnetic strength={0.3}>
                <Link
                  href="/projects"
                  className="px-8 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold uppercase tracking-widest rounded-xl transition-all flex items-center gap-2 block text-xs"
                >
                  Explore The Vault
                </Link>
              </Magnetic>
            </div>
          </motion.div>

          {/* Interactive Graphic Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative hidden lg:block"
          >
            <div
              style={{ transform: "translateZ(50px)" }}
              className="relative w-full max-w-[480px] aspect-square mx-auto"
            >
              {/* Radial glow background ring */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-neon-cyan to-neon-magenta rounded-[40px] opacity-15 blur-2xl animate-pulse" />

              {/* Main abstract tech interface container */}
              <div className="relative w-full h-full rounded-[40px] overflow-hidden border border-white/10 shadow-2xl glass-panel p-8 flex flex-col justify-between group">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-magenta/5 pointer-events-none" />

                {/* Dashboard-style aesthetic elements */}
                <div className="flex justify-between items-center pb-6 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="font-mono text-xs text-gray-500 tracking-wider">MONARCH_OS_v4.8</span>
                </div>

                <div className="my-auto space-y-6 py-6 font-mono">
                  <div className="text-xs text-neon-cyan flex items-center gap-3">
                    <span className="text-gray-600">&gt;</span> Initializing raw-source-available engines...
                  </div>
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-gray-400">Stitch Engine v1.0.0</span>
                      <span className="text-green-400 animate-pulse">DEPLOY_READY</span>
                    </div>
                    <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
                        className="bg-neon-cyan h-full rounded-full"
                      />
                    </div>
                  </div>
                  <div className="text-xs text-neon-magenta flex items-center gap-3">
                    <span className="text-gray-600">&gt;</span> WordPress secure firewall hardening status...
                  </div>
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex justify-between items-center">
                    <span className="text-[11px] text-gray-400">Malware Forensics &amp; Fixes</span>
                    <span className="px-2 py-0.5 rounded bg-neon-magenta/20 text-neon-magenta text-[9px] font-bold">100% SECURED</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-white/10 text-[10px] text-gray-500 font-mono">
                  <span>LOC: REMOTE (INDIA)</span>
                  <span className="text-neon-cyan animate-pulse">CONNECTED</span>
                </div>
              </div>

              {/* Floating badges representing services */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ transform: "translateZ(80px)" }}
                className="absolute -top-6 -right-6 glass-panel p-4 rounded-2xl neon-glow-cyan z-20"
              >
                <KeyRound className="w-8 h-8 text-neon-cyan" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ transform: "translateZ(100px)" }}
                className="absolute -bottom-6 -left-6 glass-panel p-4 rounded-2xl neon-glow-magenta z-20"
              >
                <ServerCrash className="w-8 h-8 text-neon-magenta" />
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ transform: "translateZ(60px)" }}
                className="absolute top-1/2 -left-12 glass-panel p-3.5 rounded-xl border-neon-lime/30 z-20"
              >
                <Cpu className="w-7 h-7 text-neon-lime" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 border border-white/20 rounded-full flex justify-center p-1"
      >
        <div className="w-1 h-2 bg-neon-cyan rounded-full" />
      </motion.div>
    </section>
  );
};

const ServiceBento = () => {
  return (
    <section className="py-32 bg-black relative noise-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black mb-6 tracking-tighter">
            Architectures &amp; <span className="text-neon-cyan">Solutions.</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-500 max-w-3xl font-medium leading-relaxed">
            Monarch Automations structures services around complete client autonomy, elite technical performance, and immediate emergency stabilization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
              className={index === 0 ? 'lg:col-span-2' : 'lg:col-span-1'}
            >
              <SpotlightCard className={`group relative h-full p-10 rounded-[40px] border border-white/10 bg-white/2 glass-panel transition-all duration-500 hover:-translate-y-2 hover:border-${service.highlightColor}/50`}>
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="mb-8 p-5 rounded-2xl bg-black/40 border border-white/5 w-fit group-hover:scale-110 transition-transform duration-500 shadow-xl">
                      {service.id === 'repo-licensing' && <KeyRound className="w-10 h-10 text-neon-cyan" />}
                      {service.id === 'bespoke-web-dev' && <Code2 className="w-10 h-10 text-neon-magenta" />}
                      {service.id === 'wordpress-fixing' && <ShieldAlert className="w-10 h-10 text-neon-lime" />}
                    </div>

                    <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">{service.category}</span>
                    <h3 className="text-3xl font-black mt-3 mb-4 group-hover:text-white transition-colors tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">{service.description}</p>

                    <ul className="space-y-3.5 mb-10">
                      {service.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-300 transition-colors">
                          <span className={`w-1.5 h-1.5 rounded-full bg-${service.highlightColor}`} />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Investment</div>
                        <div className="text-lg font-black text-white">{service.pricing}</div>
                      </div>
                      <Link href="/services" className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-black uppercase tracking-widest transition-all">
                        {service.ctaText}
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SelfHostedSaaSFocus = () => {
  return (
    <section className="py-32 bg-zinc-950/50 border-y border-white/5 relative noise-bg overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-neon-cyan">Sovereignty Over SaaS</span>
            <h2 className="text-4xl sm:text-6xl font-black mt-4 mb-8 tracking-tighter leading-none">
              Break Free From <br /> <span className="text-neon-magenta">Subscription Chains.</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Modern SaaS companies lock you into recurring subscription databases, capture your proprietary user data, and mark up server infrastructure costs by 1,000%. Monarch Automations flips the paradigm.
            </p>
            <p className="text-lg text-gray-400 mb-12 leading-relaxed">
              We engineer raw codebases and sell you lifetime self-hosted licenses. Run our engines on your own cloud instance. Complete privacy, zero vendor lock-in, and raw, absolute architectural control.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-black/40 border border-white/5">
                <h4 className="font-black text-white text-lg mb-2">100% Code Ownership</h4>
                <p className="text-sm text-gray-500">Access raw, meticulously commented GitHub repos with lifetime license updates.</p>
              </div>
              <div className="p-6 rounded-2xl bg-black/40 border border-white/5">
                <h4 className="font-black text-white text-lg mb-2">Unlimited Users &amp; Domains</h4>
                <p className="text-sm text-gray-500">No tiered licensing based on team size, host counts, or server processors.</p>
              </div>
            </div>
          </motion.div>

          {/* Interactive Comparison Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-10 rounded-[48px] border border-white/10 glass-panel bg-black relative"
          >
            <h3 className="text-2xl font-black mb-8 text-center tracking-tight">The Financial Reality</h3>
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/10 flex justify-between items-center">
                <div>
                  <div className="font-bold text-gray-400">Standard SaaS Subscription</div>
                  <div className="text-xs text-gray-500 mt-1">10 Team Seats + Server Markup</div>
                </div>
                <div className="text-right">
                  <div className="font-black text-red-500 text-lg">$350/mo</div>
                  <div className="text-[10px] text-gray-500 uppercase font-bold mt-1">$4,200 / Year</div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-neon-cyan/5 border border-neon-cyan/20 flex justify-between items-center relative overflow-hidden">
                <div className="absolute top-0 right-0 px-3 py-1 bg-neon-cyan text-black text-[8px] font-black uppercase tracking-widest rounded-bl-xl">
                  Best Value
                </div>
                <div>
                  <div className="font-bold text-white flex items-center gap-2">
                    Monarch Self-Hosted Engine
                  </div>
                  <div className="text-xs text-neon-cyan mt-1">Unlimited Seats + Lifetime Updates</div>
                </div>
                <div className="text-right">
                  <div className="font-black text-neon-cyan text-lg">$1,499</div>
                  <div className="text-[10px] text-gray-500 uppercase font-bold mt-1">Lifetime Cost</div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 text-center">
                <p className="text-sm text-gray-400 font-medium mb-6">
                  Save over $11,000+ over a 3-year product cycle. Pay for pure engineering, not lease rent.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-neon-cyan text-black font-black uppercase tracking-widest rounded-xl text-xs hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,243,255,0.2)]"
                >
                  Acquire Sovereign Repository
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialLinksGrid = () => {
  return (
    <section className="py-32 bg-black border-b border-white/5 noise-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-6xl font-black mb-6 tracking-tighter">
            Verified <span className="text-neon-magenta">Credentials.</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 max-w-xl mx-auto font-medium">
            We operate transparently across leading global contracting and open-source platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOCIAL_LINKS.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-[36px] glass-panel bg-white/2 hover:bg-white/5 border border-white/10 hover:border-neon-cyan transition-all group relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div>
                <div className={`p-5 rounded-2xl bg-black/40 text-gray-400 ${social.hoverColor} transition-all duration-500 mb-8 w-fit relative z-10 shadow-lg`}>
                  <social.icon size={28} />
                </div>
                <h3 className="text-2xl font-black mb-2 relative z-10 group-hover:text-neon-cyan transition-colors">{social.name}</h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed relative z-10">{social.description}</p>
              </div>

              <div className="flex items-center gap-2 text-neon-cyan font-black uppercase tracking-widest text-[11px] relative z-10">
                View Credentials <ExternalLink size={12} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Hero />
      <ServiceBento />
      <SelfHostedSaaSFocus />
      <SocialLinksGrid />

      {/* Brief Founder Feature */}
      <section className="py-32 relative overflow-hidden bg-black noise-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-neon-cyan">The Architects</span>
              <h2 className="text-4xl sm:text-6xl font-black mt-4 mb-8 leading-none tracking-tighter">
                Engineering Custom <br /> <span className="text-neon-cyan">Digital Engines.</span>
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Founded and directed by Chief Architect <span className="text-white font-bold">{SITE_OWNER}</span>, Monarch Automations is a highly specialized code-forge operating from India.
              </p>
              <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                We design and build ultra-optimized React, Node, and PHP ecosystems. Whether licensing pre-built frameworks like our flagship <span className="text-white">Stitch Enterprise Engine</span> or executing high-stakes WordPress malware recovery operations, we focus strictly on code-level mastery.
              </p>
              <Link href="/about" className="group flex items-center gap-4 text-xl font-black text-white hover:text-neon-cyan transition-colors">
                Meet Chief Architect
                <motion.div whileHover={{ x: 8 }} className="p-3 rounded-full border border-white/20">
                  <ArrowRight size={20} />
                </motion.div>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Uptime Integrity', val: '99.9%', color: 'text-neon-cyan' },
                { label: 'Defect Rate', val: '0.0%', color: 'text-neon-magenta' },
                { label: 'Code Sovereignty', val: '100%', color: 'text-neon-lime' },
                { label: 'Location Base', val: 'India', color: 'text-white' }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-[32px] glass-panel bg-white/5 border border-white/10 text-center flex flex-col justify-center items-center group hover:border-white/20 transition-all h-44"
                >
                  <span className={`text-3xl sm:text-4xl font-black mb-3 ${stat.color} group-hover:scale-110 transition-transform`}>{stat.val}</span>
                  <span className="text-gray-500 uppercase tracking-widest text-[10px] font-black">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
