'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ArrowRight, Check } from 'lucide-react';

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const footerLinks = {
  services: [
    { label: 'Smartphone Repair', href: '/book' },
    { label: 'Screen Replacement', href: '/book' },
    { label: 'Battery Replacement', href: '/book' },
    { label: 'Water Damage Repair', href: '/book' },
    { label: 'Laptop Repair', href: '/book' },
    { label: 'Data Recovery', href: '/book' },
  ],
  support: [
    { label: 'Track Repair', href: '/track' },
    { label: 'Sell E-Waste', href: '/#go-green' },
    { label: 'Warranty Policy', href: '/warranty' },
    { label: 'FAQs', href: '/faq' },
  ],
};

export function FooterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="relative bg-[#000000] border-t border-white/5 z-20 overflow-hidden select-none">
      
      {/* Glow Effects */}
      <div className="absolute left-1/4 bottom-[-100px] w-96 h-96 rounded-full bg-[#FF5C00]/5 blur-[120px] pointer-events-none" />
      <div className="absolute right-1/4 top-[-100px] w-96 h-96 rounded-full bg-[#FF5C00]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative z-10">
        
        {/* Main 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/5">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="md:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-[#FF5C00] flex items-center justify-center shadow-[0_2px_8px_rgba(255,92,0,0.3)] group-hover:scale-105 transition-transform duration-300">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-black text-white transition-colors duration-300">
                Cell<span className="text-[#FF5C00]">Cure</span>Hub
              </span>
            </Link>
            
            <p className="text-sm text-white/50 leading-relaxed max-w-sm">
              Nagpur&apos;s premium diagnostic and gadget repair hub. We specialize in component-level mainboard micro-soldering, BGA reballing, and surgical screen restorations.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Twitter, href: "https://twitter.com" }
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/5 border border-white/5 hover:border-[#FF5C00]/30 hover:bg-[#FF5C00]/10 text-white/60 hover:text-[#FF5C00] transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Navigation & Support (4 cols) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 sm:gap-8">
            {/* Services Links */}
            <div className="space-y-4">
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#FF5C00]">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="space-y-4">
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#FF5C00]">Support & Site</h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Newsletter Form (4 cols) */}
          <div className="md:col-span-4 space-y-6">
            <div className="space-y-2">
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#FF5C00]">Newsletter</h4>
              <h3 className="text-lg font-black text-white uppercase tracking-tight leading-none">
                JOIN THE CELL CURE COMMUNITY!
              </h3>
              <p className="text-xs text-white/40 leading-relaxed">
                Subscribe to get technical hardware teardowns, repair tutorials, and discount campaigns.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubscribe} className="relative flex items-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={subscribed}
                className="w-full h-12 bg-white/[0.02] border border-white/10 rounded-xl px-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#FF5C00]/50 transition-colors pr-12 font-sans"
                required
              />
              <button 
                type="submit"
                disabled={subscribed}
                className="absolute right-1.5 p-2 rounded-lg bg-[#FF5C00] hover:bg-[#e05200] text-white transition-colors shadow-[0_2px_8px_rgba(255,92,0,0.3)] flex items-center justify-center"
              >
                <AnimatePresence mode="wait">
                  {subscribed ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                    >
                      <Check className="w-4 h-4 stroke-[3px]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="arrow"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </form>
            
            {subscribed && (
              <motion.p 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[11px] font-bold text-emerald-400 font-sans"
              >
                Subscription successful! Check your inbox soon.
              </motion.p>
            )}
          </div>

        </div>

        {/* Giant Outlined Base Slogan "go cell cure!" */}
        <div className="py-12 border-b border-white/5 overflow-hidden">
          <h1 className="text-[13vw] sm:text-[11vw] font-black text-center leading-none tracking-tighter uppercase select-none font-mono text-transparent stroke-outline pointer-events-none">
            go cell cure!
          </h1>
          <style jsx>{`
            .stroke-outline {
              -webkit-text-stroke: 1px rgba(255, 255, 255, 0.08);
              text-stroke: 1px rgba(255, 255, 255, 0.08);
              transition: -webkit-text-stroke 0.3s ease, text-stroke 0.3s ease;
            }
            .stroke-outline:hover {
              -webkit-text-stroke: 1.5px rgba(255, 92, 0, 0.4);
              text-stroke: 1.5px rgba(255, 92, 0, 0.4);
            }
          `}</style>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-white/30">
          <p className="font-mono">
            &copy; {new Date().getFullYear()} CellCureHub. Diagnostics HQ Nagpur.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Warranty policy'].map((legal) => (
              <Link 
                key={legal}
                href={`/${legal.toLowerCase().replace(/ /g, '-')}`}
                className="hover:text-white transition-colors duration-200"
              >
                {legal}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}export default FooterSection;
