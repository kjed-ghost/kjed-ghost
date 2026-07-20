'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_NAME } from '@/lib/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Solutions', href: '/services' },
    { name: 'The Vault', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative flex items-center justify-between transition-all duration-500 rounded-full px-6 py-3.5 ${scrolled ? 'bg-black/60 backdrop-blur-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]' : ''}`}>

          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3.5 group">
              <Image
                src="/logo.png"
                alt={`${COMPANY_NAME} Logo`}
                width={120}
                height={40}
                className="h-10 w-auto object-contain transition-transform group-hover:scale-110"
                priority
              />
              <span className="hidden sm:inline-block font-mono text-xs font-black tracking-[0.3em] text-white group-hover:text-neon-cyan transition-colors">
                MONARCH
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all hover:bg-white/5"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="relative inline-flex items-center px-7 py-3 bg-neon-cyan text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] active:scale-95"
            >
              Secure License
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full px-4 pt-2 pb-6 md:hidden"
          >
            <div className="bg-zinc-950 border border-white/10 rounded-[32px] p-6 shadow-2xl backdrop-blur-2xl">
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-neon-cyan block px-4 py-4 rounded-2xl text-base font-black uppercase tracking-widest hover:bg-white/5 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="w-full mt-6 text-center inline-block px-8 py-4.5 bg-neon-cyan text-black text-xs font-black uppercase tracking-widest rounded-2xl transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Secure License
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
