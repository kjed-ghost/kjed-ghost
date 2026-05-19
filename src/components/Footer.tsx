import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Github, Mail, Briefcase } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="KJED Logo"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-gray-400 max-w-xs text-sm">
              Expert Full-Stack Web Developer and WordPress Specialist based in India.
              Building high-performing business websites and AI-integrated solutions.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-neon-cyan transition-colors text-sm">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-neon-cyan transition-colors text-sm">Services</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-neon-cyan transition-colors text-sm">Projects</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-neon-cyan transition-colors text-sm">About</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Connect</h3>
            <div className="mt-4 flex space-x-4">
              <a href="https://github.com/kjed-ghost" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-cyan hover:neon-text-cyan transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.upwork.com/freelancers/~016973166e4ead86f4?mp_source=share" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-cyan hover:neon-text-cyan transition-colors">
                <Briefcase className="h-6 w-6" />
              </a>
              <a href="mailto:kaushikdanielofficial@gmail.com" className="text-gray-400 hover:text-neon-cyan hover:neon-text-cyan transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} Kaushik John Emmanuel Daniel. All rights reserved.
          </p>
          <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-4 md:mt-0">
            India based • Global Reach
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
