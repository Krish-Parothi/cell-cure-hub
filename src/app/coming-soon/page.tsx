'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, ArrowLeft } from 'lucide-react';

export default function ComingSoon() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center relative overflow-hidden px-4">

      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(circle, #00D084 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00D084]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#00D084]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Logo top-left */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-10 flex items-center gap-2">
        <div className="w-9 h-9 rounded-xl bg-[#00D084] flex items-center justify-center">
          <Phone className="w-5 h-5 text-[#0A0A0A]" />
        </div>
        <span className="text-white font-bold text-lg">
          Cell<span className="text-[#00D084]">Cure</span>Hub
        </span>
      </div>

      {/* Back to home */}
      <div className="absolute top-6 right-6 sm:top-8 sm:right-10">
        <Link
          href="/"
          className="flex items-center gap-2 text-white/40 hover:text-[#00D084] text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00D084]/10 border border-[#00D084]/20 text-[#00D084] text-xs font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#00D084] animate-pulse" />
          We&apos;re building something great
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-4"
        >
          Coming <span className="text-[#00D084]">Soon</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/40 text-base sm:text-lg max-w-md mx-auto"
        >
          This feature is under construction. We&apos;re working hard to bring you
          the best repair experience in Nagpur. Stay tuned!
        </motion.p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
    </main>
  );
}