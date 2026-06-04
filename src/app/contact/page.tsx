'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, ExternalLink, Sparkles } from 'lucide-react';
import { SOCIAL_LINKS, SocialLink } from '@/lib/constants';

interface SocialCardProps extends SocialLink {
  index: number;
}

const SocialCard: React.FC<SocialCardProps> = ({ name, icon: Icon, link, description, hoverColor }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -10 }}
    className="p-8 rounded-[40px] glass-panel border border-white/10 hover:border-neon-cyan/50 transition-all flex flex-col items-center text-center group hover:shadow-[0_0_30px_rgba(0,243,255,0.1)] relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

    <div className={`p-6 rounded-2xl bg-black/40 text-gray-400 ${hoverColor} transition-all duration-500 mb-8 relative z-10`}>
      <Icon size={40} />
    </div>
    <h3 className="font-black text-2xl mb-2 group-hover:text-neon-cyan transition-colors relative z-10">{name}</h3>
    <p className="text-gray-500 text-xs mb-8 uppercase tracking-widest font-bold relative z-10">{description}</p>
    <div className="text-neon-cyan opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 flex items-center gap-2 text-sm font-black uppercase tracking-widest relative z-10">
      Verify Credentials <ExternalLink size={16} />
    </div>
  </motion.a>
);

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black py-32 noise-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-neon-cyan mb-8"
          >
            <Sparkles size={14} />
            Strategic Consultation
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black mb-10 tracking-tighter"
          >
            Acquire <span className="text-neon-cyan">the Edge.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-gray-500 font-medium leading-relaxed"
          >
            Request architectural engineering or high-level technical advisory. I am currently accepting select high-ticket ventures for the upcoming quarter.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="p-10 rounded-[48px] glass-panel border border-neon-cyan/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/10 blur-[60px]" />
              <h2 className="text-3xl font-black mb-10 tracking-tight">Direct <br /> Intel</h2>
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="p-4 rounded-2xl bg-black/40 text-neon-cyan border border-white/5 group-hover:neon-glow-cyan transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-1">Secure Email</div>
                    <div className="font-bold text-lg">kaushikdanielofficial@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="p-4 rounded-2xl bg-black/40 text-neon-cyan border border-white/5 group-hover:neon-glow-cyan transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-1">Encrypted Chat</div>
                    <div className="font-bold text-lg">+91 8601127306</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="p-4 rounded-2xl bg-black/40 text-neon-cyan border border-white/5 group-hover:neon-glow-cyan transition-all">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-1">Base of Operations</div>
                    <div className="font-bold text-lg">India (Global Remote)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="p-10 md:p-16 rounded-[48px] glass-panel border border-white/10 h-full relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-neon-magenta/5 blur-[100px]" />
              <h2 className="text-3xl font-black mb-10 tracking-tight">Acquisition Briefing</h2>
              <form className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500">Contact Person</label>
                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-black/40 border border-white/10 focus:border-neon-cyan outline-none transition-all font-medium text-lg" placeholder="John Doe" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500">Business Email</label>
                    <input type="email" className="w-full px-6 py-4 rounded-2xl bg-black/40 border border-white/10 focus:border-neon-cyan outline-none transition-all font-medium text-lg" placeholder="john@enterprise.com" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500">Project Mission & Budget Scale</label>
                  <textarea rows={5} className="w-full px-6 py-4 rounded-2xl bg-black/40 border border-white/10 focus:border-neon-cyan outline-none transition-all font-medium text-lg" placeholder="Detail your project goals and requirements..."></textarea>
                </div>
                <button type="submit" className="w-full py-6 bg-neon-cyan text-black rounded-2xl font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,243,255,0.2)] hover:scale-[1.02] active:scale-95">
                  Authorize Consultation <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Profile Links */}
        <div>
          <div className="mb-16">
            <h2 className="text-4xl font-black tracking-tighter">The <span className="text-neon-magenta">Nexus.</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SOCIAL_LINKS.map((social, index) => (
              <SocialCard key={social.name} {...social} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
