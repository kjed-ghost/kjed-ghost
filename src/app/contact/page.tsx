'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Send, MessageSquare, Briefcase, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

const SocialCard = ({ name, icon: Icon, link, description, hoverColor }: any) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -5 }}
    className="p-6 rounded-3xl bg-zinc-900/50 border border-white/10 hover:border-indigo-500/50 transition-all flex flex-col items-center text-center group"
  >
    <div className={`p-4 rounded-2xl bg-white/5 text-gray-400 ${hoverColor} transition-colors mb-4`}>
      <Icon size={28} />
    </div>
    <h3 className="font-bold text-lg mb-1">{name}</h3>
    <p className="text-gray-500 text-xs mb-4">{description}</p>
    <div className="text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-sm font-medium">
      Connect <ExternalLink size={14} />
    </div>
  </motion.a>
);

export default function ContactPage() {
  const socials = [
    {
      name: 'GitHub',
      icon: Github,
      link: 'https://github.com/kjed-ghost',
      description: 'Review my code & contributions',
      hoverColor: 'group-hover:text-white',
    },
    {
      name: 'Upwork',
      icon: Briefcase,
      link: 'https://www.upwork.com/freelancers/~013865c697818e6129',
      description: 'Hire me for fixed/hourly projects',
      hoverColor: 'group-hover:text-green-500',
    },
    {
      name: 'Freelancer',
      icon: Briefcase,
      link: 'https://www.freelancer.com/u/kjedghost',
      description: 'Find me on Freelancer.com',
      hoverColor: 'group-hover:text-blue-500',
    },
    {
      name: 'Reddit',
      icon: MessageSquare,
      link: 'https://www.reddit.com/user/kjed-ghost/',
      description: 'Technical discussions & communities',
      hoverColor: 'group-hover:text-orange-500',
    },
    {
      name: 'Discord',
      icon: MessageSquare,
      link: 'https://discord.com/users/1202868884976734268',
      description: 'Direct real-time communication',
      hoverColor: 'group-hover:text-indigo-400',
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
            Let's <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Have a project in mind or want to discuss a potential collaboration?
            Reach out through any of the platforms below or send a direct message.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="p-8 rounded-3xl bg-indigo-600/10 border border-indigo-500/20">
              <h2 className="text-2xl font-bold mb-8">Direct Contact</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/5 text-indigo-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Email</div>
                    <div className="font-medium">kaushikdanielofficial@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/5 text-indigo-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">WhatsApp</div>
                    <div className="font-medium">+91 8601127306</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/5 text-indigo-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Location</div>
                    <div className="font-medium">India (Remote Worldwide)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-zinc-900 border border-white/10">
              <h3 className="font-bold mb-4">Typical Response Time</h3>
              <p className="text-gray-400 text-sm">
                I usually respond to inquiries within 24 hours during business days.
              </p>
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div className="lg:col-span-2">
            <div className="p-8 md:p-12 rounded-3xl bg-zinc-900/50 border border-white/10 h-full">
              <h2 className="text-2xl font-bold mb-8">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 focus:border-indigo-500 outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 focus:border-indigo-500 outline-none transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Subject</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 focus:border-indigo-500 outline-none transition-colors" placeholder="How can I help you?" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Message</label>
                  <textarea rows={6} className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 focus:border-indigo-500 outline-none transition-colors" placeholder="Tell me about your project..."></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Profile Links */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-12">Professional Profiles</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {socials.map((social) => (
              <SocialCard key={social.name} {...social} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
