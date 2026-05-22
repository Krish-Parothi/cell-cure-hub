// // 'use client';

// // import React, { useState } from 'react';
// // import Link from 'next/link';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { Phone, ArrowRight, Check } from 'lucide-react';

// // const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
// //   <svg
// //     viewBox="0 0 24 24"
// //     fill="none"
// //     stroke="currentColor"
// //     strokeWidth="2"
// //     strokeLinecap="round"
// //     strokeLinejoin="round"
// //     {...props}
// //   >
// //     <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
// //     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
// //     <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
// //   </svg>
// // );

// // const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
// //   <svg
// //     viewBox="0 0 24 24"
// //     fill="none"
// //     stroke="currentColor"
// //     strokeWidth="2"
// //     strokeLinecap="round"
// //     strokeLinejoin="round"
// //     {...props}
// //   >
// //     <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
// //   </svg>
// // );

// // const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
// //   <svg
// //     viewBox="0 0 24 24"
// //     fill="none"
// //     stroke="currentColor"
// //     strokeWidth="2"
// //     strokeLinecap="round"
// //     strokeLinejoin="round"
// //     {...props}
// //   >
// //     <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
// //     <rect x="2" y="9" width="4" height="12" />
// //     <circle cx="4" cy="4" r="2" />
// //   </svg>
// // );

// // const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
// //   <svg
// //     viewBox="0 0 24 24"
// //     fill="none"
// //     stroke="currentColor"
// //     strokeWidth="2"
// //     strokeLinecap="round"
// //     strokeLinejoin="round"
// //     {...props}
// //   >
// //     <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
// //   </svg>
// // );

// // const footerLinks = {
// //   services: [
// //     { label: 'Smartphone Repair', href: '/book' },
// //     { label: 'Screen Replacement', href: '/book' },
// //     { label: 'Battery Replacement', href: '/book' },
// //     { label: 'Water Damage Repair', href: '/book' },
// //     { label: 'Laptop Repair', href: '/book' },
// //     { label: 'Data Recovery', href: '/book' },
// //   ],
// //   support: [
// //     { label: 'Track Repair', href: '/track' },
// //     { label: 'Sell E-Waste', href: '/#go-green' },
// //     { label: 'Warranty Policy', href: '/warranty' },
// //     { label: 'FAQs', href: '/faq' },
// //   ],
// // };

// // export function FooterSection() {
// //   const [email, setEmail] = useState('');
// //   const [subscribed, setSubscribed] = useState(false);

// //   const handleSubscribe = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (email.trim()) {
// //       setSubscribed(true);
// //       setTimeout(() => {
// //         setEmail('');
// //         setSubscribed(false);
// //       }, 3000);
// //     }
// //   };

// //   return (
// //     <footer className="relative bg-[#000000] border-t border-white/5 z-20 overflow-hidden select-none">
      
// //       {/* Glow Effects */}
// //       <div className="absolute left-1/4 bottom-[-100px] w-96 h-96 rounded-full bg-[#FF5C00]/5 blur-[120px] pointer-events-none" />
// //       <div className="absolute right-1/4 top-[-100px] w-96 h-96 rounded-full bg-[#FF5C00]/5 blur-[120px] pointer-events-none" />

// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative z-10">
        
// //         {/* Main 3-Column Layout */}
// //         <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/5">
          
// //           {/* Column 1: Brand & Bio (4 cols) */}
// //           <div className="md:col-span-4 space-y-6">
// //             <Link href="/" className="flex items-center gap-2 group w-fit">
// //               <div className="w-8 h-8 rounded-lg bg-[#FF5C00] flex items-center justify-center shadow-[0_2px_8px_rgba(255,92,0,0.3)] group-hover:scale-105 transition-transform duration-300">
// //                 <Phone className="w-4 h-4 text-white" />
// //               </div>
// //               <span className="text-xl font-black text-white transition-colors duration-300">
// //                 Cell<span className="text-[#FF5C00]">Cure</span>Hub
// //               </span>
// //             </Link>
            
// //             <p className="text-sm text-white/50 leading-relaxed max-w-sm">
// //               Nagpur&apos;s premium diagnostic and gadget repair hub. We specialize in component-level mainboard micro-soldering, BGA reballing, and surgical screen restorations.
// //             </p>
            
// //             {/* Social Links */}
// //             <div className="flex items-center gap-3">
// //               {[
// //                 { icon: Instagram, href: "https://instagram.com" },
// //                 { icon: Facebook, href: "https://facebook.com" },
// //                 { icon: Linkedin, href: "https://linkedin.com" },
// //                 { icon: Twitter, href: "https://twitter.com" }
// //               ].map((social, i) => {
// //                 const Icon = social.icon;
// //                 return (
// //                   <a 
// //                     key={i}
// //                     href={social.href}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="p-2 rounded-xl bg-white/5 border border-white/5 hover:border-[#FF5C00]/30 hover:bg-[#FF5C00]/10 text-white/60 hover:text-[#FF5C00] transition-all duration-300"
// //                   >
// //                     <Icon className="w-4 h-4" />
// //                   </a>
// //                 );
// //               })}
// //             </div>
// //           </div>

// //           {/* Column 2: Navigation & Support (4 cols) */}
// //           <div className="md:col-span-4 grid grid-cols-2 gap-6 sm:gap-8">
// //             {/* Services Links */}
// //             <div className="space-y-4">
// //               <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#FF5C00]">Services</h4>
// //               <ul className="space-y-2">
// //                 {footerLinks.services.map((link) => (
// //                   <li key={link.label}>
// //                     <Link
// //                       href={link.href}
// //                       className="text-sm text-white/40 hover:text-white transition-colors duration-200"
// //                     >
// //                       {link.label}
// //                     </Link>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>

// //             {/* Support Links */}
// //             <div className="space-y-4">
// //               <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#FF5C00]">Support & Site</h4>
// //               <ul className="space-y-2">
// //                 {footerLinks.support.map((link) => (
// //                   <li key={link.label}>
// //                     <Link
// //                       href={link.href}
// //                       className="text-sm text-white/40 hover:text-white transition-colors duration-200"
// //                     >
// //                       {link.label}
// //                     </Link>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //           </div>

// //           {/* Column 3: Newsletter Form (4 cols) */}
// //           <div className="md:col-span-4 space-y-6">
// //             <div className="space-y-2">
// //               <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#FF5C00]">Newsletter</h4>
// //               <h3 className="text-lg font-black text-white uppercase tracking-tight leading-none">
// //                 JOIN THE CELL CURE COMMUNITY!
// //               </h3>
// //               <p className="text-xs text-white/40 leading-relaxed">
// //                 Subscribe to get technical hardware teardowns, repair tutorials, and discount campaigns.
// //               </p>
// //             </div>

// //             {/* Form */}
// //             <form onSubmit={handleSubscribe} className="relative flex items-center">
// //               <input 
// //                 type="email" 
// //                 placeholder="Enter your email" 
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 disabled={subscribed}
// //                 className="w-full h-12 bg-white/[0.02] border border-white/10 rounded-xl px-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#FF5C00]/50 transition-colors pr-12 font-sans"
// //                 required
// //               />
// //               <button 
// //                 type="submit"
// //                 disabled={subscribed}
// //                 className="absolute right-1.5 p-2 rounded-lg bg-[#FF5C00] hover:bg-[#e05200] text-white transition-colors shadow-[0_2px_8px_rgba(255,92,0,0.3)] flex items-center justify-center"
// //               >
// //                 <AnimatePresence mode="wait">
// //                   {subscribed ? (
// //                     <motion.div
// //                       key="check"
// //                       initial={{ scale: 0.8, opacity: 0 }}
// //                       animate={{ scale: 1, opacity: 1 }}
// //                       exit={{ scale: 0.8, opacity: 0 }}
// //                     >
// //                       <Check className="w-4 h-4 stroke-[3px]" />
// //                     </motion.div>
// //                   ) : (
// //                     <motion.div
// //                       key="arrow"
// //                       initial={{ scale: 0.8, opacity: 0 }}
// //                       animate={{ scale: 1, opacity: 1 }}
// //                       exit={{ scale: 0.8, opacity: 0 }}
// //                     >
// //                       <ArrowRight className="w-4 h-4" />
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </button>
// //             </form>
            
// //             {subscribed && (
// //               <motion.p 
// //                 initial={{ opacity: 0, y: 5 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 className="text-[11px] font-bold text-emerald-400 font-sans"
// //               >
// //                 Subscription successful! Check your inbox soon.
// //               </motion.p>
// //             )}
// //           </div>

// //         </div>

// //         {/* Giant Outlined Base Slogan "go cell cure!" */}
// //         <div className="py-12 border-b border-white/5 overflow-hidden">
// //           <h1 className="text-[13vw] sm:text-[11vw] font-black text-center leading-none tracking-tighter uppercase select-none font-mono text-transparent stroke-outline pointer-events-none">
// //             go cell cure!
// //           </h1>
// //           <style jsx>{`
// //             .stroke-outline {
// //               -webkit-text-stroke: 1px rgba(255, 255, 255, 0.08);
// //               text-stroke: 1px rgba(255, 255, 255, 0.08);
// //               transition: -webkit-text-stroke 0.3s ease, text-stroke 0.3s ease;
// //             }
// //             .stroke-outline:hover {
// //               -webkit-text-stroke: 1.5px rgba(255, 92, 0, 0.4);
// //               text-stroke: 1.5px rgba(255, 92, 0, 0.4);
// //             }
// //           `}</style>
// //         </div>

// //         {/* Bottom Legal / Copyright Bar */}
// //         <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-white/30">
// //           <p className="font-mono">
// //             &copy; {new Date().getFullYear()} CellCureHub. Diagnostics HQ Nagpur.
// //           </p>
// //           <div className="flex items-center gap-6">
// //             {['Privacy Policy', 'Terms of Service', 'Warranty policy'].map((legal) => (
// //               <Link 
// //                 key={legal}
// //                 href={`/${legal.toLowerCase().replace(/ /g, '-')}`}
// //                 className="hover:text-white transition-colors duration-200"
// //               >
// //                 {legal}
// //               </Link>
// //             ))}
// //           </div>
// //         </div>

// //       </div>
// //     </footer>
// //   );
// // }export default FooterSection;

// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { ChevronRight } from 'lucide-react';

// const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     {...props}
//   >
//     <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
//     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//     <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
//   </svg>
// );

// const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     {...props}
//   >
//     <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//   </svg>
// );

// export function FooterSection() {
//   const upcomingServices = [
//     'Component Micro-Soldering',
//     'BGA Processor Reballing',
//     'Surgical Screen Recovery',
//     'Liquid Damage Treatment',
//     'Advanced Fault Diagnostics',
//   ];

//   return (
//     <footer className="relative bg-[#050505] z-20 overflow-hidden select-none font-sans">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative z-10">
        
//         {/* Brand Logo Row - Positioned Sleekly Above the Columns */}
//         <div className="mb-10">
//           <Link href="/" className="block group w-fit">
//             <Image 
//               src="/logo.png"
//               alt="CellCure Hub Logo"
//               width={130}
//               height={45}
//               className="object-contain filter brightness-[1.05] drop-shadow-[0_0_8px_rgba(255,92,0,0.12)] group-hover:scale-[1.01] transition-transform duration-300"
//             />
//           </Link>
//         </div>

//         {/* Main Columns Layout - Symmetrically Aligned */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 pb-16">
          
//           {/* Column 1: About Us Description & Socials (5 cols) */}
//           <div className="md:col-span-5 space-y-4">
//             <h4 className="text-xs font-black uppercase tracking-widest text-[#FF5C00]">About Us</h4>
//             <p className="text-sm text-white/50 leading-relaxed max-w-sm">
//               Nagpur&apos;s upcoming premium gadget diagnostic and micro-soldering restoration lab. We specialize in component-level trace repairs, micro BGA chip swaps, and optical glass recoveries.
//             </p>
            
//             {/* Social Outlined Circles */}
//             <div className="flex items-center gap-3 pt-2">
//               <a 
//                 href="https://www.instagram.com/cellcure_hub/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all duration-300"
//               >
//                 <Instagram className="w-4 h-4" />
//               </a>
//               <a 
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all duration-300"
//               >
//                 <Facebook className="w-4 h-4" />
//               </a>
//             </div>
//           </div>

//           {/* Column 2: Upcoming Services (3 cols) */}
//           <div className="md:col-span-3 space-y-4">
//             <h4 className="text-xs font-black uppercase tracking-widest text-[#FF5C00]">Upcoming Services</h4>
//             <ul className="space-y-3">
//               {upcomingServices.map((service) => (
//                 <li key={service} className="flex items-center gap-1.5 text-sm text-white/40">
//                   <ChevronRight className="w-3.5 h-3.5 text-[#FF5C00]/60 flex-shrink-0" />
//                   {service}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 3: Newsletter Sign-up (4 cols) */}
//           <div className="md:col-span-4 space-y-4">
//             <h4 className="text-xs font-black uppercase tracking-widest text-[#FF5C00]">Stay Notified</h4>
//             <p className="text-sm text-white/50 leading-relaxed">
//               Subscribe to get notified as soon as bookings go live and receive updates from the lab.
//             </p>
            
//             <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2 pt-2">
//               <input 
//                 type="email" 
//                 placeholder="Email Address" 
//                 className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#FF5C00]/50 transition-colors w-full"
//               />
//               <button 
//                 type="submit"
//                 className="bg-[#FF5C00] hover:bg-[#FF7A30] text-white text-xs font-black uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-[0_2px_10px_rgba(255,92,0,0.25)] hover:shadow-[0_4px_16px_rgba(255,92,0,0.4)] active:scale-[0.98] transition-all duration-300"
//               >
//                 Notify
//               </button>
//             </form>
//           </div>

//         </div>

//         {/* Giant Centered Slogan Backdrop - Less bold, clean entrance reveal animation */}
//         <div className="py-12 overflow-hidden select-none flex justify-center items-center">
//           <motion.h1 
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 0.1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
//             className="text-[14vw] sm:text-[8vw] font-medium text-center leading-none tracking-tighter select-none font-sans text-white cursor-default"
//           >
//             CellCureHub
//           </motion.h1>
//         </div>

//         {/* Bottom Credits Bar - No borders */}
//         <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs font-semibold text-white/30">
//           <p className="font-mono text-center sm:text-left">
//             &copy; {new Date().getFullYear()} CELL CURE HUB. ALL RIGHTS RESERVED.
//           </p>
//           <span className="hidden sm:inline text-white/20">•</span>
//           <p className="text-center sm:text-left">
//             Made and Managed by{' '}
//             <a 
//               href="https://www.shaibyasolutions.com" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="text-white/50 hover:text-[#FF5C00] transition-colors duration-200 underline decoration-white/10"
//             >
//               Shaibya Solutions
//             </a>
//           </p>
//         </div>

//       </div>
//     </footer>
//   );
// }

// export default FooterSection;


// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { ChevronRight } from 'lucide-react';

// const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     {...props}
//   >
//     <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
//     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//     <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
//   </svg>
// );

// const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     {...props}
//   >
//     <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//   </svg>
// );

// export function FooterSection() {
//   const upcomingServices = [
//     'Component Micro-Soldering',
//     'BGA Processor Reballing',
//     'Surgical Screen Recovery',
//     'Liquid Damage Treatment',
//     'Advanced Fault Diagnostics',
//   ];

//   return (
//     <footer className="relative bg-[#050505] z-20 overflow-hidden select-none font-sans">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative z-10">
        
//         {/* Brand Logo Row - Positioned Sleekly Above the Columns */}
//         <div className="mb-10">
//           <Link href="/" className="block group w-fit">
//             <Image 
//               src="/logo.png"
//               alt="CellCure Hub Logo"
//               width={130}
//               height={45}
//               className="object-contain filter brightness-[1.05] drop-shadow-[0_0_8px_rgba(255,92,0,0.12)] group-hover:scale-[1.01] transition-transform duration-300"
//             />
//           </Link>
//         </div>

//         {/* Main Columns Layout - Symmetrically Aligned */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 pb-16">
          
//           {/* Column 1: About Us Description & Socials (5 cols) */}
//           <div className="md:col-span-5 space-y-4">
//             <h4 className="text-xs font-black uppercase tracking-widest text-[#FF5C00]">About Us</h4>
//             <p className="text-sm text-white/50 leading-relaxed max-w-sm">
//               Nagpur&apos;s upcoming premium gadget diagnostic and micro-soldering restoration lab. We specialize in component-level trace repairs, micro BGA chip swaps, and optical glass recoveries.
//             </p>
            
//             {/* Social Outlined Circles */}
//             <div className="flex items-center gap-3 pt-2">
//               <a 
//                 href="https://www.instagram.com/cellcure_hub/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all duration-300"
//               >
//                 <Instagram className="w-4 h-4" />
//               </a>
//               <a 
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all duration-300"
//               >
//                 <Facebook className="w-4 h-4" />
//               </a>
//             </div>
//           </div>

//           {/* Column 2: Upcoming Services (3 cols) */}
//           <div className="md:col-span-3 space-y-4">
//             <h4 className="text-xs font-black uppercase tracking-widest text-[#FF5C00]">Upcoming Services</h4>
//             <ul className="space-y-3">
//               {upcomingServices.map((service) => (
//                 <li key={service} className="flex items-center gap-1.5 text-sm text-white/40">
//                   <ChevronRight className="w-3.5 h-3.5 text-[#FF5C00]/60 flex-shrink-0" />
//                   {service}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 3: Newsletter Sign-up (4 cols) */}
//           <div className="md:col-span-4 space-y-4">
//             <h4 className="text-xs font-black uppercase tracking-widest text-[#FF5C00]">Stay Notified</h4>
//             <p className="text-sm text-white/50 leading-relaxed">
//               Subscribe to get notified as soon as bookings go live and receive updates from the lab.
//             </p>
            
//             <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2 pt-2">
//               <input 
//                 type="email" 
//                 placeholder="Email Address" 
//                 className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#FF5C00]/50 transition-colors w-full"
//               />
//               <button 
//                 type="submit"
//                 className="bg-[#FF5C00] hover:bg-[#FF7A30] text-white text-xs font-black uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-[0_2px_10px_rgba(255,92,0,0.25)] hover:shadow-[0_4px_16px_rgba(255,92,0,0.4)] active:scale-[0.98] transition-all duration-300"
//               >
//                 Notify
//               </button>
//             </form>
//           </div>

//         </div>

//         {/* Giant Centered Slogan Backdrop - Less bold, clean entrance reveal animation */}
//         <div className="py-12 overflow-hidden select-none flex justify-center items-center">
//           <motion.h1 
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 0.1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
//             className="text-[14vw] sm:text-[8vw] font-medium text-center leading-none tracking-tighter select-none font-sans text-white cursor-default"
//           >
//             CellCureHub
//           </motion.h1>
//         </div>

//         {/* Bottom Credits Bar - No borders */}
//         <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs font-semibold text-white/30">
//           <p className="font-mono text-center sm:text-left">
//             &copy; {new Date().getFullYear()} CELL CURE HUB. ALL RIGHTS RESERVED.
//           </p>
//           <span className="hidden sm:inline text-white/20">•</span>
//           <p className="text-center sm:text-left">
//             Made and Managed by{' '}
//             <a 
//               href="https://www.shaibyasolutions.com" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="text-white/50 hover:text-[#FF5C00] transition-colors duration-200 underline decoration-white/10"
//             >
//               Shaibya Solutions
//             </a>
//           </p>
//         </div>

//       </div>
//     </footer>
//   );
// }

// export default FooterSection;

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export function FooterSection() {
  return (
    <footer className="relative bg-[#050505] z-20 overflow-hidden select-none font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative z-10">

        {/* Top: Logo + thin rule */}
        <div className="flex items-center gap-6 mb-14">
          <Link href="/" className="block group flex-shrink-0">
            <Image
              src="/logo.png"
              alt="CellCure Hub Logo"
              width={120}
              height={42}
              className="object-contain filter brightness-[1.05] drop-shadow-[0_0_8px_rgba(255,92,0,0.12)] group-hover:scale-[1.01] transition-transform duration-300"
            />
          </Link>
          <div className="flex-1 h-px bg-white/[0.06]" />
          {/* Powered by badge — top right */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-[10px] uppercase tracking-widest text-white/25 font-semibold">Powered by</span>
            <span className="text-[10px] uppercase tracking-widest text-[#FF5C00]/80 font-black">Mukul Mobiles</span>
            <span className="hidden sm:inline text-[10px] text-white/20 font-medium italic">· 25 years of trust</span>
          </div>
        </div>

        {/* Main 2-col layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 pb-16 items-start">

          {/* Left: About */}
          <div className="space-y-5">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#FF5C00]">About Us</h4>
            <p className="text-sm text-white/50 leading-[1.85]">
              Great technology deserves exceptional care. Built on Mukul Mobile&apos;s 25-year legacy of trust and expertise, CellCure Hub is designed to make mobile repair effortless — from diagnosis to delivery. Combining skilled craftsmanship, modern technology, and transparent service, we restore devices with the precision they deserve and the confidence our customers expect.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.instagram.com/cellcure_hub/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-[#FF5C00]/60 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-[#FF5C00]/60 transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Contact / Find Us */}
          <div className="space-y-5">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#FF5C00]">Find Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FF5C00]/60 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/45 leading-relaxed">
                  Mukul Mobile, Nagpur, Maharashtra
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FF5C00]/60 flex-shrink-0" />
                <a href="tel:+91XXXXXXXXXX" className="text-sm text-white/45 hover:text-white/70 transition-colors duration-200">
                  +91 XXXXX XXXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FF5C00]/60 flex-shrink-0" />
                <a href="mailto:hello@cellcurehub.in" className="text-sm text-white/45 hover:text-white/70 transition-colors duration-200">
                  hello@cellcurehub.in
                </a>
              </li>
            </ul>

            {/* Opening Hours */}
            <div className="pt-2 border-t border-white/[0.05] space-y-2">
              <p className="text-[10px] uppercase tracking-widest text-white/25 font-semibold">Opening Soon</p>
              <p className="text-sm text-white/40">Stay tuned — bookings launching shortly.</p>
            </div>
          </div>

        </div>

        {/* Giant watermark text */}
        <div className="py-10 overflow-hidden select-none flex justify-center items-center">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.06, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14vw] sm:text-[8vw] font-medium text-center leading-none tracking-tighter select-none font-sans text-white cursor-default"
          >
            CellCureHub
          </motion.h1>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-center gap-2 text-xs font-semibold text-white/25">
          <p className="font-mono text-center">
            &copy; {new Date().getFullYear()} CELL CURE HUB. ALL RIGHTS RESERVED.
          </p>
          <span className="hidden sm:inline text-white/15">•</span>
          <p className="text-center">
            Made and Managed by{' '}
            <a
              href="https://www.shaibyasolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#FF5C00] transition-colors duration-200 underline decoration-white/10"
            >
              Shaibya Solutions
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default FooterSection;