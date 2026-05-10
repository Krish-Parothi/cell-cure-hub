'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import {
  Smartphone,
  Monitor,
  Battery,
  Droplets,
  Laptop,
  HardDrive,
  Clock,
  Shield,
  Award,
  Truck,
  Star,
  ArrowRight,
  ChevronRight,
  Phone,
  Search,
} from 'lucide-react';
import { cn } from '@/lib/utils';

/* ──────────────── Animation Variants ──────────────── */

const easeOut = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: easeOut },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

/* ──────────────── Data ──────────────── */

const services = [
  { icon: Smartphone, title: 'Smartphone Repair', price: 'From ₹299', desc: 'Android & iOS expert fixes' },
  { icon: Monitor, title: 'Screen Replacement', price: 'From ₹599', desc: 'OEM-quality display swaps' },
  { icon: Battery, title: 'Battery Replacement', price: 'From ₹499', desc: 'Restore full-day battery life' },
  { icon: Droplets, title: 'Water Damage', price: 'From ₹799', desc: 'Advanced board-level repair' },
  { icon: Laptop, title: 'Laptop Repair', price: 'From ₹999', desc: 'Hardware & software solutions' },
  { icon: HardDrive, title: 'Data Recovery', price: 'From ₹1,499', desc: 'Recover files you thought were lost' },
];

const steps = [
  { num: '1', title: 'Book', desc: 'Choose your device and issue online' },
  { num: '2', title: 'Pickup', desc: 'We collect your device from your doorstep' },
  { num: '3', title: 'Repair', desc: 'Certified technicians fix it with care' },
  { num: '4', title: 'Delivery', desc: 'Fully repaired device delivered back to you' },
];

const trackerSteps = [
  { label: 'Booked', done: true },
  { label: 'Picked Up', done: true },
  { label: 'Repair In Progress', done: false, active: true },
  { label: 'Ready', done: false },
  { label: 'Delivered', done: false },
];

const trustBadges = [
  { icon: Clock, title: '48hr Turnaround', desc: 'Most repairs completed within 48 hours, so you stay connected.' },
  { icon: Shield, title: '90-Day Warranty', desc: 'Every repair backed by a 90-day warranty on parts and labour.' },
  { icon: Award, title: 'Certified Technicians', desc: 'Trained professionals using genuine & OEM-grade components.' },
  { icon: Truck, title: 'Free Pickup', desc: 'We pick up and drop off your device anywhere in Nagpur at zero cost.' },
];

const testimonials = [
  { name: 'Rahul P.', area: 'Dharampeth', rating: 5, comment: 'Got my iPhone screen fixed in 3 hours. Amazing quality!' },
  { name: 'Priya S.', area: 'Sitabuldi', rating: 5, comment: 'Free pickup and delivery made it so convenient. 5 stars!' },
  { name: 'Amit K.', area: 'Wardha Road', rating: 4, comment: 'Best repair shop in Nagpur. My Samsung works like new.' },
];

/* ──────────────── Inline Section Components ──────────────── */

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #00D084 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00D084]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#00D084]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-24 pb-16">
        {/* Left content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00D084]/10 border border-[#00D084]/20 text-[#00D084] text-xs font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#00D084] animate-pulse" />
            Now serving all of Nagpur
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight"
          >
            Nagpur&apos;s Most Trusted{' '}
            <span className="text-[#00D084]">Gadget Repair</span> Hub
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 text-lg sm:text-xl text-white/50 font-medium"
          >
            Fix It. Track It. Trust It.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-4 text-sm sm:text-base text-white/40 max-w-lg mx-auto lg:mx-0"
          >
            Professional smartphone, laptop &amp; gadget repairs with free doorstep
            pickup, real-time tracking, and a 90-day warranty across Nagpur.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <Link
              href="/book"
              className="gradient-green px-8 py-3.5 rounded-xl text-base font-semibold text-[#0A0A0A] hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              Book a Repair
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/track"
              className="px-8 py-3.5 rounded-xl text-base font-medium text-white border border-white/15 hover:border-[#00D084]/30 hover:bg-white/5 transition-all flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              Track My Repair
            </Link>
          </motion.div>
        </div>

        {/* Right - floating phone mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-shrink-0 relative"
        >
          <div className="relative animate-float">
            {/* Glow */}
            <div className="absolute -inset-8 bg-[#00D084]/20 rounded-[60px] blur-[60px] pointer-events-none" />

            {/* Phone frame */}
            <div className="relative w-[240px] sm:w-[280px] h-[480px] sm:h-[560px] bg-[#111] rounded-[40px] border-2 border-white/10 overflow-hidden green-glow-strong">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#0A0A0A] rounded-b-2xl" />

              {/* Screen content */}
              <div className="absolute inset-2 top-8 rounded-[32px] overflow-hidden bg-gradient-to-b from-[#0A0A0A] to-[#111]">
                <div className="flex flex-col items-center justify-center h-full p-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#00D084]/20 flex items-center justify-center mb-4">
                    <Phone className="w-7 h-7 text-[#00D084]" />
                  </div>
                  <p className="text-white text-sm font-semibold">CellCureHub</p>
                  <p className="text-white/40 text-xs mt-1">Repair in progress...</p>

                  {/* Mini tracker */}
                  <div className="mt-6 w-full space-y-3">
                    {['Booked', 'Picked Up', 'Repairing'].map((s, i) => (
                      <div key={s} className="flex items-center gap-2">
                        <div
                          className={cn(
                            'w-2.5 h-2.5 rounded-full',
                            i < 2 ? 'bg-[#00D084]' : 'bg-[#00D084] animate-pulse'
                          )}
                        />
                        <span
                          className={cn(
                            'text-xs',
                            i < 2 ? 'text-white/60' : 'text-[#00D084] font-medium'
                          )}
                        >
                          {s}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
    </section>
  );
}

function ServicesGrid() {
  return (
    <section id="services" className="relative py-20 sm:py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Our <span className="text-[#00D084]">Services</span>
          </h2>
          <p className="mt-3 text-white/50 max-w-xl mx-auto">
            From cracked screens to dead batteries, we fix it all with genuine parts
            and certified expertise.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={staggerItem}
                whileHover={{
                  rotateY: 5,
                  rotateX: -5,
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-[#00D084]/30 hover:shadow-[0_0_30px_rgba(0,208,132,0.08)] transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00D084]/10 flex items-center justify-center mb-5 group-hover:bg-[#00D084]/20 transition-colors">
                  <Icon className="w-6 h-6 text-[#00D084]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{s.title}</h3>
                <p className="text-sm text-white/40 mb-3">{s.desc}</p>
                <p className="text-[#00D084] font-bold text-sm">{s.price}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 sm:py-28 bg-[#0A0A0A]">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00D084]/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            How It <span className="text-[#00D084]">Works</span>
          </h2>
          <p className="mt-3 text-white/50 max-w-xl mx-auto">
            Getting your device repaired has never been this simple.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={staggerItem}
              className="relative flex flex-col items-center text-center"
            >
              {/* Number circle */}
              <div className="w-14 h-14 rounded-full gradient-green flex items-center justify-center text-[#0A0A0A] text-xl font-bold mb-4 shadow-[0_0_20px_rgba(0,208,132,0.25)]">
                {step.num}
              </div>

              {/* Connecting line (not on last) */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                  className="hidden lg:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-px bg-gradient-to-r from-[#00D084]/40 to-[#00D084]/10 origin-left"
                />
              )}

              <h3 className="text-lg font-semibold text-white mb-1">
                {step.title}
              </h3>
              <p className="text-sm text-white/40 max-w-[200px]">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function LiveTrackerTeaser() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 overflow-hidden">
          {/* Glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#00D084]/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Left */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex-1"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Track Your Repair <span className="text-[#00D084]">Live</span>
              </h2>
              <p className="mt-3 text-white/50 max-w-md">
                Know exactly where your device is in the repair pipeline. No more
                wondering &mdash; just real-time updates, every step of the way.
              </p>
              <Link
                href="/track"
                className="mt-6 inline-flex items-center gap-2 gradient-green px-6 py-3 rounded-xl text-sm font-semibold text-[#0A0A0A] hover:opacity-90 transition-opacity"
              >
                Track Your Repair
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Right - mini tracker mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 w-full max-w-md"
            >
              <div className="bg-[#0A0A0A]/80 border border-white/5 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-white/40">Repair ID</p>
                    <p className="text-sm font-mono text-white">#CCH-20241087</p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-[#00D084]/10 text-[#00D084] font-medium">
                    In Progress
                  </span>
                </div>

                <p className="text-xs text-white/40 mb-1">Device</p>
                <p className="text-sm text-white mb-5">iPhone 14 Pro &mdash; Screen Replacement</p>

                {/* Tracker steps */}
                <div className="space-y-4">
                  {trackerSteps.map((step, i) => (
                    <div key={step.label} className="flex items-start gap-3">
                      <div className="flex flex-col items-center">
                        <div
                          className={cn(
                            'w-3 h-3 rounded-full border-2',
                            step.done
                              ? 'bg-[#00D084] border-[#00D084]'
                              : step.active
                              ? 'bg-[#00D084] border-[#00D084] animate-pulse-green'
                              : 'bg-transparent border-white/20'
                          )}
                        />
                        {i < trackerSteps.length - 1 && (
                          <div
                            className={cn(
                              'w-px h-6',
                              step.done ? 'bg-[#00D084]/50' : 'bg-white/10'
                            )}
                          />
                        )}
                      </div>
                      <span
                        className={cn(
                          'text-sm -mt-0.5',
                          step.done
                            ? 'text-white/70'
                            : step.active
                            ? 'text-[#00D084] font-medium'
                            : 'text-white/30'
                        )}
                      >
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Why Choose <span className="text-[#00D084]">CellCureHub</span>
          </h2>
          <p className="mt-3 text-white/50 max-w-xl mx-auto">
            We go the extra mile to earn your trust.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.title}
                variants={staggerItem}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 text-center hover:border-[#00D084]/20 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#00D084]/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-[#00D084]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {badge.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {badge.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#0A0A0A]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00D084]/[0.015] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            What Our <span className="text-[#00D084]">Customers Say</span>
          </h2>
          <p className="mt-3 text-white/50 max-w-xl mx-auto">
            Real reviews from real Nagpur residents.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={staggerItem}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-[#00D084]/20 transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-4 h-4',
                      i < t.rating
                        ? 'text-[#00D084] fill-[#00D084]'
                        : 'text-white/20'
                    )}
                  />
                ))}
              </div>

              <p className="text-white/80 text-sm leading-relaxed mb-6">
                &ldquo;{t.comment}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#00D084]/10 flex items-center justify-center text-[#00D084] font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/40">{t.area}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function GoGreenSection() {
  return (
    <section id="go-green" className="relative py-20 sm:py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden text-center"
        >
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#00D084]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00D084]/10 border border-[#00D084]/20 text-[#00D084] text-xs font-medium mb-6">
                Eco-Friendly Initiative
              </span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
            >
              Turn Your Dead Phone Into{' '}
              <span className="text-[#00D084]">Cash</span>
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
              className="mt-4 text-white/50 max-w-lg mx-auto"
            >
              Don&apos;t throw away broken devices. Sell your e-waste through our
              certified portal and get paid while saving the planet. Responsible
              recycling, fair value, zero hassle.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={3}
            >
              <Link
                href="/ewaste"
                className="mt-8 inline-flex items-center gap-2 gradient-green px-8 py-3.5 rounded-xl text-base font-semibold text-[#0A0A0A] hover:opacity-90 transition-opacity"
              >
                Sell E-Waste
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────── Main Page ──────────────── */

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] text-white">
      <Navbar />
      <HeroSection />
      <ServicesGrid />
      <HowItWorks />
      <LiveTrackerTeaser />
      <WhyChooseUs />
      <Testimonials />
      <GoGreenSection />
      <Footer />
    </main>
  );
}
