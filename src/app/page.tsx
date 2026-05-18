'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Globe, Cpu, Github, Briefcase, MessageSquare, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-magenta/10 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight neon-text-cyan">
              Building <span className="bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">Digital Excellence</span> with Precision
            </h1>
            <p className="mt-6 text-lg text-gray-400 max-w-xl">
              Freelance Full-Stack Developer & WordPress Specialist. I build high-performing business websites and integrate cutting-edge AI solutions.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black rounded-full font-bold transition-all flex items-center gap-2 group neon-glow-cyan"
              >
                Let's Build Something
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/projects"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium transition-all"
              >
                View My Work
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neon-cyan to-neon-magenta rotate-6 opacity-20 animate-pulse neon-glow-cyan" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-neon-cyan/50 shadow-[0_0_15px_rgba(0,243,255,0.3)]">
                <Image
                  src="/profile.jpg"
                  alt="Developer Profile"
                  fill
                  sizes="(max-width: 768px) 320px, 384px"
                  className="object-cover"
                  priority
                  loading="eager"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-black/50 backdrop-blur-md border border-neon-cyan/30 p-4 rounded-2xl neon-glow-cyan">
                <Code2 className="w-8 h-8 text-neon-cyan" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-black/50 backdrop-blur-md border border-neon-magenta/30 p-4 rounded-2xl neon-glow-magenta">
                <Globe className="w-8 h-8 text-neon-magenta" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialLinks = () => {
  const socials = [
    {
      name: 'GitHub',
      icon: Github,
      link: '#',
      description: 'Review my code & contributions',
      hoverColor: 'group-hover:text-white',
    },
    {
      name: 'Upwork',
      icon: Briefcase,
      link: '#',
      description: 'Hire me for fixed/hourly projects',
      hoverColor: 'group-hover:text-green-400',
    },
    {
      name: 'Freelancer',
      icon: Briefcase,
      link: '#',
      description: 'Find me on Freelancer.com',
      hoverColor: 'group-hover:text-blue-400',
    },
    {
      name: 'Reddit',
      icon: MessageSquare,
      link: '#',
      description: 'Technical discussions',
      hoverColor: 'group-hover:text-orange-400',
    },
    {
      name: 'Discord',
      icon: MessageSquare,
      link: '#',
      description: 'Real-time communication',
      hoverColor: 'group-hover:text-indigo-400',
    },
  ];

  return (
    <section className="py-24 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Connect & Collaborate</h2>
          <p className="mt-4 text-gray-400">Available on professional platforms and social networks</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-neon-cyan transition-all flex flex-col items-center text-center group hover:shadow-[0_0_20px_rgba(0,243,255,0.1)]"
            >
              <div className={`p-4 rounded-2xl bg-white/5 text-gray-400 ${social.hoverColor} transition-colors mb-4`}>
                <social.icon size={28} />
              </div>
              <h3 className="font-bold mb-1 group-hover:text-neon-cyan transition-colors">{social.name}</h3>
              <p className="text-gray-500 text-[10px] mb-4 uppercase tracking-widest">{social.description}</p>
              <div className="text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-xs font-medium">
                Visit Profile <ExternalLink size={12} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedServices = () => {
  const services = [
    {
      title: 'Full-Stack Development',
      description: 'Building robust, scalable web applications using modern technologies.',
      icon: <Code2 className="w-10 h-10 text-neon-cyan" />,
    },
    {
      title: 'WordPress Specialist',
      description: 'Custom themes, plugins, and high-performance WordPress solutions.',
      icon: <Globe className="w-10 h-10 text-neon-magenta" />,
    },
    {
      title: 'AI Integration',
      description: 'Implementing cutting-edge AI features into your web applications.',
      icon: <Cpu className="w-10 h-10 text-neon-lime" />,
    },
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Expertise & Services</h2>
          <p className="mt-4 text-gray-400">Specialized solutions for modern business needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-neon-cyan transition-all group hover:shadow-[0_0_20px_rgba(0,243,255,0.2)]"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-neon-cyan transition-colors">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedServices />

      <SocialLinks />

      {/* Brief About Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Experienced Freelancer & Digital Architect</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Based in India, I specialize in building robust, high-performing business websites,
                custom WordPress solutions, and integrating cutting-edge AI features into web applications.
                My toolkit spans full-stack development, tech troubleshooting, and SEO-driven copywriting.
              </p>
              <Link href="/about" className="text-neon-cyan font-medium flex items-center gap-2 hover:neon-text-cyan transition-colors">
                Learn more about my journey <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                <span className="text-4xl font-bold text-white mb-2 block">100%</span>
                <span className="text-gray-400 text-sm">Commitment</span>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                <span className="text-4xl font-bold text-white mb-2 block">Expert</span>
                <span className="text-gray-400 text-sm">WordPress</span>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                <span className="text-4xl font-bold text-white mb-2 block">India</span>
                <span className="text-gray-400 text-sm">Based</span>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                <span className="text-4xl font-bold text-white mb-2 block">AI</span>
                <span className="text-gray-400 text-sm">Driven</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
