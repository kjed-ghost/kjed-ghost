'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="KJED Logo"
                width={40}
                height={40}
                className="w-auto h-10 object-contain"
              />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent neon-text-cyan">
                KJED
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-neon-cyan px-3 py-2 rounded-md text-sm font-medium transition-colors hover:neon-text-cyan"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 border border-neon-cyan text-sm font-medium rounded-full text-neon-cyan bg-transparent hover:bg-neon-cyan hover:text-black transition-all neon-glow-cyan"
            >
              Hire Me
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="w-full text-center inline-block px-4 py-2 border border-neon-cyan text-base font-medium rounded-md text-neon-cyan bg-transparent hover:bg-neon-cyan hover:text-black transition-all neon-glow-cyan"
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
