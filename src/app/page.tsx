'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Code2, Globe, Cpu, ExternalLink, Sparkles, ShieldCheck } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';
import SpotlightCard from '@/components/interactivity/SpotlightCard';
import Magnetic from '@/components/interactivity/Magnetic';
import GlitchText from '@/components/interactivity/GlitchText';

const TypewriterText = () => {
  const words = useMemo(() => ['Next-Gen Solutions', 'Elite Architectures', 'AI-Driven Engines', 'Premium WordPress'], []);
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
    <span className="text-neon-cyan font-mono inline-block min-h-[1.5em]">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
};

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-300, 300], [10, -10]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-300, 300], [-10, 10]), { stiffness: 100, damping: 30 });

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 noise-bg"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0],
            x: [0, -100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-neon-magenta/5 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-neon-cyan mb-8"
            >
              <ShieldCheck size={14} className="animate-pulse" />
              Strategic Partner for High-Ticket Ventures
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter">
              <GlitchText text="Kaushik John" /> <br />
              <span className="bg-gradient-to-r from-neon-cyan via-white to-neon-magenta bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,243,255,0.3)]">
                Emmanuel Daniel
              </span>
            </h1>

            <div className="mt-8 text-2xl md:text-3xl font-medium text-white/90">
              Architecting <TypewriterText />
            </div>

            <p className="mt-6 text-xl text-gray-400 max-w-xl leading-relaxed font-medium">
              I don&apos;t just build websites; I engineer <span className="text-white">high-performance digital engines</span> that solve complex business problems with technical dominance.
            </p>

            <div className="mt-12 flex flex-wrap gap-6">
              <Magnetic strength={0.3}>
                <Link
                  href="/contact"
                  className="group relative px-10 py-5 bg-transparent border-2 border-neon-cyan text-neon-cyan hover:text-black font-black uppercase tracking-widest transition-all rounded-xl overflow-hidden block"
                >
                  <div className="absolute inset-0 bg-neon-cyan translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-10" />
                  <span className="flex items-center gap-3 relative z-10">
                    Acquire Solution
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Link>
              </Magnetic>

              <Magnetic strength={0.3}>
                <Link
                  href="/projects"
                  className="px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold uppercase tracking-widest rounded-xl transition-all flex items-center gap-2 block"
                >
                  The Portfolio
                </Link>
              </Magnetic>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative"
          >
            <div
              style={{ transform: "translateZ(50px)" }}
              className="relative w-full max-w-[500px] aspect-square mx-auto"
            >
              {/* Outer glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-neon-cyan to-neon-magenta rounded-[40px] opacity-20 blur-2xl animate-pulse" />

              {/* Main image container */}
              <div className="relative w-full h-full rounded-[40px] overflow-hidden border-2 border-white/10 shadow-2xl glass-panel group">
                <Image
                  src="/profile.jpg"
                  alt="Kaushik John Emmanuel Daniel"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  priority
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating Tech Badges */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ transform: "translateZ(80px)" }}
                className="absolute -top-8 -right-8 glass-panel p-5 rounded-3xl neon-glow-cyan z-20"
              >
                <Code2 className="w-10 h-10 text-neon-cyan" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ transform: "translateZ(100px)" }}
                className="absolute -bottom-8 -left-8 glass-panel p-5 rounded-3xl neon-glow-magenta z-20"
              >
                <Globe className="w-10 h-10 text-neon-magenta" />
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ transform: "translateZ(60px)" }}
                className="absolute top-1/2 -left-12 glass-panel p-4 rounded-2xl border-neon-lime/30 z-20"
              >
                <Cpu className="w-8 h-8 text-neon-lime" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1"
      >
        <div className="w-1 h-2 bg-neon-cyan rounded-full" />
      </motion.div>
    </section>
  );
};

const SolutionArchitectures = () => {
  const solutions = [
    {
      title: 'Full-Stack Dominance',
      description: 'Robust, industrial-grade web architectures. Engineered with Next.js and Node.js for organizations where failure is not an option.',
      icon: <Code2 className="w-12 h-12 text-neon-cyan" />,
      size: 'lg:col-span-2',
      bg: 'bg-neon-cyan/5',
      borderColor: 'group-hover:border-neon-cyan/50'
    },
    {
      title: 'AI Integration',
      description: 'Strategic deployment of Google AI Studio workflows to automate intelligence and outperform the market.',
      icon: <Cpu className="w-12 h-12 text-neon-lime" />,
      size: 'lg:col-span-1',
      bg: 'bg-neon-lime/5',
      borderColor: 'group-hover:border-neon-lime/50'
    },
    {
      title: 'Premium WordPress',
      description: 'High-ticket custom ecosystems. I build proprietary themes and plugins for businesses that demand technical exclusivity.',
      icon: <Globe className="w-12 h-12 text-neon-magenta" />,
      size: 'lg:col-span-1',
      bg: 'bg-neon-magenta/5',
      borderColor: 'group-hover:border-neon-magenta/50'
    },
    {
      title: 'Strategic Consulting',
      description: 'High-level technical advisory for elite clients. Performance optimization, security hardening, and architectural auditing.',
      icon: <Sparkles className="w-12 h-12 text-white" />,
      size: 'lg:col-span-2',
      bg: 'bg-white/5',
      borderColor: 'group-hover:border-white/30'
    }
  ];

  return (
    <section className="py-32 bg-black relative noise-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            Digital <span className="text-neon-cyan">Dominance.</span>
          </h2>
          <p className="text-2xl text-gray-500 max-w-2xl font-medium">
            Providing elite technical solutions for clients who recognize that <span className="text-white">top-tier engineering</span> is their greatest competitive advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${solution.size}`}
            >
              <SpotlightCard className={`group relative h-full p-10 rounded-[32px] border border-white/10 ${solution.bg} glass-panel transition-all duration-500 hover:-translate-y-2 ${solution.borderColor}`}>
                <div className="mb-8 p-4 rounded-2xl bg-black/40 border border-white/5 w-fit group-hover:scale-110 transition-transform duration-500">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-white transition-colors">{solution.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{solution.description}</p>

                <div className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/40 group-hover:text-neon-cyan transition-colors">
                  Examine Architecture <ArrowRight size={16} />
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialLinksGrid = () => {
  return (
    <section className="py-32 bg-zinc-950/50 border-y border-white/5 noise-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">The <span className="text-neon-magenta">Network</span></h2>
          <p className="text-xl text-gray-500 max-w-xl mx-auto">Connecting with visionary peers and high-ticket clients across the digital landscape.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOCIAL_LINKS.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-[32px] glass-panel bg-white/2 hover:bg-white/5 border border-white/10 hover:border-neon-cyan transition-all group relative overflow-hidden"
            >
              {/* Animated glow on hover */}
              <div className="absolute inset-0 bg-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className={`p-5 rounded-2xl bg-black/40 text-gray-400 ${social.hoverColor} transition-all duration-500 mb-6 w-fit relative z-10`}>
                <social.icon size={32} />
              </div>
              <h3 className="text-2xl font-black mb-2 relative z-10 group-hover:text-neon-cyan transition-colors">{social.name}</h3>
              <p className="text-gray-500 text-sm mb-6 uppercase tracking-widest font-bold opacity-70 relative z-10">{social.description}</p>

              <div className="flex items-center gap-2 text-neon-cyan font-black uppercase tracking-widest text-xs relative z-10">
                Verify Credentials <ExternalLink size={14} />
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
    <div className="bg-black text-white">
      <Hero />
      <SolutionArchitectures />
      <SocialLinksGrid />

      {/* Brief About CTAs */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none tracking-tighter">
                Engineering <span className="text-neon-cyan">Success</span> for Visionary Clients.
              </h2>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-lg">
                Based in India, I engineer digital solutions for high-ticket clients worldwide. I don&apos;t just provide services; I deliver the technical foundations that businesses are built upon.
              </p>
              <Link href="/about" className="group flex items-center gap-4 text-2xl font-black text-white hover:text-neon-cyan transition-colors">
                The Architect Behind the Code
                <motion.div whileHover={{ x: 10 }} className="p-3 rounded-full border border-white/20">
                  <ArrowRight size={24} />
                </motion.div>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Uptime', val: '99.9%', color: 'text-neon-cyan' },
                { label: 'Quality', val: '100%', color: 'text-neon-magenta' },
                { label: 'Experience', val: 'Elite', color: 'text-neon-lime' },
                { label: 'Location', val: 'India', color: 'text-white' }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 rounded-[32px] glass-panel bg-white/5 border border-white/10 text-center flex flex-col justify-center items-center group hover:border-white/20 transition-all"
                >
                  <span className={`text-4xl md:text-5xl font-black mb-3 ${stat.color} group-hover:scale-110 transition-transform`}>{stat.val}</span>
                  <span className="text-gray-500 uppercase tracking-widest text-xs font-black">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
