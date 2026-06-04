import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Github, Mail, Briefcase, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Solutions', href: '/services' },
    { name: 'Portfolio', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-black border-t border-white/5 py-24 noise-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 lg:gap-32">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-8">
              <Image
                src="/logo.png"
                alt="KJED Logo"
                width={150}
                height={50}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-500 max-w-sm text-lg font-medium leading-relaxed">
              Engineering digital dominance through industrial-grade precision and strategic AI integration. Based in India, serving global pioneers.
            </p>
          </div>

          <div>
            <h3 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8">Navigation</h3>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-500 hover:text-neon-cyan transition-colors text-lg font-bold flex items-center gap-2 group">
                    {item.name}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8">The Nexus</h3>
            <div className="flex flex-col gap-4">
              <a href="https://github.com/kjed-ghost" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-lg font-bold flex items-center gap-3">
                <Github size={20} />
                The Repository
              </a>
              <a href="https://www.upwork.com/freelancers/~016973166e4ead86f4?mp_source=share" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-lg font-bold flex items-center gap-3">
                <Briefcase size={20} />
                Credential Access
              </a>
              <a href="mailto:kaushikdanielofficial@gmail.com" className="text-gray-500 hover:text-white transition-colors text-lg font-bold flex items-center gap-3">
                <Mail size={20} />
                Secure Line
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
            <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} Kaushik John Emmanuel Daniel
            </p>
          </div>
          <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.2em]">
            Architectural Excellence from India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
