'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
      className={`relative inline-block ${className}`}
    >
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute top-0 left-0 -z-10 text-neon-magenta opacity-70"
        animate={{
          x: [0, -2, 2, -1, 0],
          y: [0, 1, -1, 1, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.2,
          repeatType: 'mirror',
          ease: 'linear',
          repeatDelay: 2
        }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute top-0 left-0 -z-20 text-neon-cyan opacity-70"
        animate={{
          x: [0, 2, -2, 1, 0],
          y: [0, -1, 1, -1, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.2,
          repeatType: 'mirror',
          ease: 'linear',
          repeatDelay: 2.1
        }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
};

export default GlitchText;
