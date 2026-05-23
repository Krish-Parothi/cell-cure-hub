

// // // // 'use client';

// // // // import React from 'react';
// // // // import { motion } from 'framer-motion';
// // // // import { Cpu, Droplets, Smartphone, Activity, Sparkles } from 'lucide-react';

// // // // const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
// // // //   <svg
// // // //     viewBox="0 0 24 24"
// // // //     fill="none"
// // // //     stroke="currentColor"
// // // //     strokeWidth="2"
// // // //     strokeLinecap="round"
// // // //     strokeLinejoin="round"
// // // //     {...props}
// // // //   >
// // // //     <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
// // // //     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
// // // //     <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
// // // //   </svg>
// // // // );

// // // // import { cn } from '@/lib/utils';

// // // // interface InstaPost {
// // // //   id: string;
// // // //   type: 'reel' | 'post';
// // // //   title: string;
// // // //   description: string;
// // // //   likes: string;
// // // //   comments: string;
// // // //   icon: React.ElementType;
// // // //   color: string;
// // // //   imageSrc: string;
// // // //   imageAlt: string;
// // // // }

// // // // export function InstagramSection() {
// // // // const posts: InstaPost[] = [
// // // //     {
// // // //       id: "board-repair",
// // // //       type: "reel",
// // // //       title: "Micro-Soldering",
// // // //       description: "0.2mm logic board trace reconstruction under our stereoscopic microscope. Resurrecting dead boards daily. #microsoldering #bga #techrepair",
// // // //       likes: "1,420",
// // // //       comments: "94",
// // // //       icon: Cpu,
// // // //       color: "from-white/5 to-zinc-950",
// // // //       imageSrc: "/instagram/mobile-repair.webp",
// // // //       imageAlt: "Micro soldering repair",
// // // //     },
// // // //     {
// // // //       id: "water-damage",
// // // //       type: "reel",
// // // //       title: "Ultrasonic Resus",
// // // //       description: "Liquid damage recovery flow. Deep chemical ultrasonic bath, mainboard inspection, and micro-capacitor swaps. #waterdamage #iphonerepair #cleanroom",
// // // //       likes: "2,118",
// // // //       comments: "145",
// // // //       icon: Droplets,
// // // //       color: "from-white/5 to-zinc-950",
// // // //       imageSrc: "/instagram/repair.webp",
// // // //       imageAlt: "Ultrasonic water damage repair",
// // // //     },
// // // //     {
// // // //       id: "screen-peel",
// // // //       type: "reel",
// // // //       title: "Satisfying Peel",
// // // //       description: "Clean screen replacement on a folding device. Nothing beats the final protective film peel. 100% genuine OEM display. #oddlysatisfying #screenrepair #foldingphone",
// // // //       likes: "3,890",
// // // //       comments: "280",
// // // //       icon: Smartphone,
// // // //       color: "from-white/5 to-zinc-950",
// // // //       imageSrc: "/instagram/studio.webp",
// // // //       imageAlt: "Satisfying screen peel",
// // // //     },
// // // //     {
// // // //       id: "cleanroom",
// // // //       type: "post",
// // // //       title: "ESD Cleanroom",
// // // //       description: "Behind the scenes in our dust-free cleanroom. ESD-safe mats, localized ionizers, and filtered air currents. Because particles destroy chips. #esdsafe #cleanroom #electronics",
// // // //       likes: "956",
// // // //       comments: "42",
// // // //       icon: Activity,
// // // //       color: "from-white/5 to-zinc-950",
// // // //       imageSrc: "/instagram/office.webp",
// // // //       imageAlt: "ESD safe cleanroom office",
// // // //     },
// // // //     {
// // // //       id: "satisfaction",
// // // //       type: "reel",
// // // //       title: "Device Resurrection",
// // // //       description: "Another device saved from e-waste. Genuine BGA chip transplant complete. From paperweight back to performance. #ewaste #techresurrect #cellcure",
// // // //       likes: "1,875",
// // // //       comments: "102",
// // // //       icon: Sparkles,
// // // //       color: "from-white/5 to-zinc-950",
// // // //       imageSrc: "/instagram/doorstep.webp",
// // // //       imageAlt: "Device resurrection doorstep delivery",
// // // //     },
// // // //   ];

// // // //   const titleWords = "INSIDE CELL CURE HUB".split(" ");

// // // //   const titleContainerVariants = {
// // // //     hidden: {},
// // // //     visible: {
// // // //       transition: {
// // // //         staggerChildren: 0.08,
// // // //       }
// // // //     }
// // // //   };

// // // //   const wordVariants = {
// // // //     hidden: { y: "110%", rotate: 2 },
// // // //     visible: {
// // // //       y: "0%",
// // // //       rotate: 0,
// // // //       transition: {
// // // //         type: "spring" as const,
// // // //         stiffness: 90,
// // // //         damping: 14,
// // // //         duration: 0.6
// // // //       }
// // // //     }
// // // //   };

// // // //   const gridVariants = {
// // // //     hidden: {},
// // // //     visible: {
// // // //       transition: {
// // // //         staggerChildren: 0.08,
// // // //         delayChildren: 0.15
// // // //       }
// // // //     }
// // // //   };

// // // //   const cardVariants = {
// // // //     hidden: { opacity: 0, y: 30, scale: 0.96 },
// // // //     visible: {
// // // //       opacity: 1,
// // // //       y: 0,
// // // //       scale: 1,
// // // //       transition: {
// // // //         type: "spring" as const,
// // // //         stiffness: 80,
// // // //         damping: 15
// // // //       }
// // // //     }
// // // //   };

// // // //   return (
// // // //     <section className="relative bg-black py-24 sm:py-32 border-t border-white/5 z-20 overflow-hidden select-none">

// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

// // // //         {/* Section Header */}
// // // //         <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 10 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             viewport={{ once: true }}
// // // //             className="flex items-center justify-center gap-2 mb-2"
// // // //           >
// // // //             <Instagram className="w-4 h-4 text-[#FF5C00]" />
// // // //             <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#FF5C00]">Follow Our Lab</span>
// // // //           </motion.div>

// // // //           <motion.h2
// // // //             variants={titleContainerVariants}
// // // //             initial="hidden"
// // // //             whileInView="visible"
// // // //             viewport={{ once: true, margin: "-50px" }}
// // // //             className="text-3xl sm:text-5xl font-black tracking-tighter text-white uppercase flex flex-wrap justify-center gap-x-3 gap-y-1"
// // // //           >
// // // //             {titleWords.map((word, idx) => (
// // // //               <span key={idx} className="inline-block overflow-hidden h-fit py-1">
// // // //                 <motion.span
// // // //                   variants={wordVariants}
// // // //                   className={cn(
// // // //                     "inline-block origin-bottom-left",
// // // //                     (word === "CELL" || word === "CURE" || word === "HUB") && "text-[#FF5C00]"
// // // //                   )}
// // // //                 >
// // // //                   {word}
// // // //                 </motion.span>
// // // //               </span>
// // // //             ))}
// // // //           </motion.h2>

// // // //           <p className="text-sm sm:text-base text-white/50">
// // // //             Check out our micro-soldering videos, repair satisfaction peels, and lab updates on Instagram.
// // // //           </p>
          
// // // //            <a href="https://www.instagram.com/cellcure_hub/"
// // // //             target="_blank"
// // // //             rel="noopener noreferrer"
// // // //             className="inline-block text-xs font-black uppercase tracking-widest text-[#FF5C00] hover:text-white transition-colors duration-200"
// // // //           >
// // // //             {'@cellcure_hub'}
// // // //           </a>
// // // //         </div>

// // // //         {/* 5-Column Grid */}
// // // //         <motion.div
// // // //           variants={gridVariants}
// // // //           initial="hidden"
// // // //           whileInView="visible"
// // // //           viewport={{ once: true, margin: "-100px" }}
// // // //           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
// // // //         >
// // // //           {posts.map((post) => (
// // // //             <motion.a
// // // //               href="https://www.instagram.com/cellcure_hub/"
// // // //               target="_blank"
// // // //               rel="noopener noreferrer"
// // // //               key={post.id}
// // // //               variants={cardVariants}
// // // //               whileHover={{ y: -8, scale: 1.02 }}
// // // //               transition={{ type: "spring", stiffness: 300, damping: 20 }}
// // // //               className="group relative block h-[300px] sm:h-[380px] rounded-2xl border border-white/5 bg-zinc-950 overflow-hidden shadow-xl cursor-pointer"
// // // //             >
// // // //               {/* Colored Glow Layer */}
// // // //               <div className={cn("absolute -inset-16 bg-gradient-to-br opacity-5 blur-2xl group-hover:opacity-10 transition-opacity duration-500 pointer-events-none", post.color)} />

// // // //               {/* Image Area (Top 80%) */}
// // // //               <div className="h-[80%] w-full relative border-b border-white/5 overflow-hidden">
// // // //                 <img
// // // //                   src={post.imageSrc}
// // // //                   alt={post.imageAlt}
// // // //                   className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
// // // //                 />

// // // //                 {/* Reel badge */}
// // // //                 {post.type === 'reel' && (
// // // //                   <div className="absolute top-3 left-3 z-10 flex items-center gap-1 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-2 py-0.5">
// // // //                     <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
// // // //                       <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.27 8.27 0 0 0 4.84 1.56V6.82a4.85 4.85 0 0 1-1.07-.13z"/>
// // // //                     </svg>
// // // //                     <span className="text-[9px] font-bold text-white uppercase tracking-wider">Reel</span>
// // // //                   </div>
// // // //                 )}

// // // //                 {/* Hover overlay */}
// // // //                 <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
// // // //                   <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-300">
// // // //                     <Instagram className="w-5 h-5" />
// // // //                   </div>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Info Footer (Bottom 20%) */}
// // // //               <div className="h-[20%] p-4 flex flex-col justify-center relative z-10 bg-zinc-950/80 backdrop-blur-md">
// // // //                 <h3 className="text-white font-bold text-xs uppercase tracking-wider group-hover:text-[#FF5C00] transition-colors duration-200">
// // // //                   {post.title}
// // // //                 </h3>
// // // //                 <p className="text-[10px] text-white/40 truncate mt-0.5">
// // // //                   {post.description}
// // // //                 </p>
// // // //               </div>

// // // //             </motion.a>
// // // //           ))}
// // // //         </motion.div>

// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // 'use client';

// // // import React from 'react';
// // // import { motion } from 'framer-motion';
// // // import { Cpu, Droplets, Smartphone, Activity, Sparkles } from 'lucide-react';

// // // const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
// // //   <svg
// // //     viewBox="0 0 24 24"
// // //     fill="none"
// // //     stroke="currentColor"
// // //     strokeWidth="2"
// // //     strokeLinecap="round"
// // //     strokeLinejoin="round"
// // //     {...props}
// // //   >
// // //     <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
// // //     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
// // //     <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
// // //   </svg>
// // // );

// // // const ReelIcon = () => (
// // //   <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
// // //     <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.27 8.27 0 0 0 4.84 1.56V6.82a4.85 4.85 0 0 1-1.07-.13z"/>
// // //   </svg>
// // // );

// // // import { cn } from '@/lib/utils';

// // // interface InstaPost {
// // //   id: string;
// // //   type: 'reel' | 'post';
// // //   title: string;
// // //   description: string;
// // //   likes: string;
// // //   comments: string;
// // //   icon: React.ElementType;
// // //   imageSrc: string;
// // //   imageAlt: string;
// // //   // object-position hint so each thumbnail crops to its best region
// // //   objectPosition: string;
// // // }

// // // export function InstagramSection() {
// // //   const posts: InstaPost[] = [
// // //     {
// // //       id: "board-repair",
// // //       type: "reel",
// // //       title: "Micro-Soldering",
// // //       description: "0.2mm logic board trace reconstruction under our stereoscopic microscope.",
// // //       likes: "1,420",
// // //       comments: "94",
// // //       icon: Cpu,
// // //       imageSrc: "/instagram/mobile-repair.webp",
// // //       imageAlt: "Micro soldering repair",
// // //       objectPosition: "center top",   // reel text usually top-heavy
// // //     },
// // //     {
// // //       id: "water-damage",
// // //       type: "reel",
// // //       title: "Ultrasonic Resus",
// // //       description: "Liquid damage recovery flow. Deep chemical ultrasonic bath & micro-capacitor swaps.",
// // //       likes: "2,118",
// // //       comments: "145",
// // //       icon: Droplets,
// // //       imageSrc: "/instagram/repair.webp",
// // //       imageAlt: "Ultrasonic water damage repair",
// // //       objectPosition: "center center",
// // //     },
// // //     {
// // //       id: "screen-peel",
// // //       type: "reel",
// // //       title: "Satisfying Peel",
// // //       description: "Clean screen replacement on a folding device. 100% genuine OEM display.",
// // //       likes: "3,890",
// // //       comments: "280",
// // //       icon: Smartphone,
// // //       imageSrc: "/instagram/studio.webp",
// // //       imageAlt: "Satisfying screen peel",
// // //       objectPosition: "center center",
// // //     },
// // //     {
// // //       id: "cleanroom",
// // //       type: "post",
// // //       title: "ESD Cleanroom",
// // //       description: "Behind the scenes in our dust-free cleanroom. ESD-safe mats and ionizers.",
// // //       likes: "956",
// // //       comments: "42",
// // //       icon: Activity,
// // //       imageSrc: "/instagram/office.webp",
// // //       imageAlt: "ESD safe cleanroom office",
// // //       objectPosition: "center top",
// // //     },
// // //     {
// // //       id: "satisfaction",
// // //       type: "reel",
// // //       title: "Device Resurrection",
// // //       description: "Another device saved from e-waste. Genuine BGA chip transplant complete.",
// // //       likes: "1,875",
// // //       comments: "102",
// // //       icon: Sparkles,
// // //       imageSrc: "/instagram/doorstep.webp",
// // //       imageAlt: "Device resurrection doorstep delivery",
// // //       objectPosition: "center top",
// // //     },
// // //   ];

// // //   const titleWords = "INSIDE CELL CURE HUB".split(" ");

// // //   const titleContainerVariants = {
// // //     hidden: {},
// // //     visible: { transition: { staggerChildren: 0.08 } }
// // //   };

// // //   const wordVariants = {
// // //     hidden: { y: "110%", rotate: 2 },
// // //     visible: {
// // //       y: "0%",
// // //       rotate: 0,
// // //       transition: { type: "spring" as const, stiffness: 90, damping: 14 }
// // //     }
// // //   };

// // //   const gridVariants = {
// // //     hidden: {},
// // //     visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } }
// // //   };

// // //   const cardVariants = {
// // //     hidden: { opacity: 0, y: 30, scale: 0.96 },
// // //     visible: {
// // //       opacity: 1, y: 0, scale: 1,
// // //       transition: { type: "spring" as const, stiffness: 80, damping: 15 }
// // //     }
// // //   };

// // //   return (
// // //     <section className="relative bg-black py-24 sm:py-32 border-t border-white/5 z-20 overflow-hidden select-none">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

// // //         {/* Section Header */}
// // //         <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 10 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             className="flex items-center justify-center gap-2 mb-2"
// // //           >
// // //             <Instagram className="w-4 h-4 text-[#FF5C00]" />
// // //             <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#FF5C00]">Follow Our Lab</span>
// // //           </motion.div>

// // //           <motion.h2
// // //             variants={titleContainerVariants}
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true, margin: "-50px" }}
// // //             className="text-3xl sm:text-5xl font-black tracking-tighter text-white uppercase flex flex-wrap justify-center gap-x-3 gap-y-1"
// // //           >
// // //             {titleWords.map((word, idx) => (
// // //               <span key={idx} className="inline-block overflow-hidden h-fit py-1">
// // //                 <motion.span
// // //                   variants={wordVariants}
// // //                   className={cn(
// // //                     "inline-block origin-bottom-left",
// // //                     (word === "CELL" || word === "CURE" || word === "HUB") && "text-[#FF5C00]"
// // //                   )}
// // //                 >
// // //                   {word}
// // //                 </motion.span>
// // //               </span>
// // //             ))}
// // //           </motion.h2>

// // //           <p className="text-sm sm:text-base text-white/50">
// // //             Check out our micro-soldering videos, repair satisfaction peels, and lab updates on Instagram.
// // //           </p>

// // //           <a
// // //             href="https://www.instagram.com/cellcure_hub/"
// // //             target="_blank"
// // //             rel="noopener noreferrer"
// // //             className="inline-block text-xs font-black uppercase tracking-widest text-[#FF5C00] hover:text-white transition-colors duration-200"
// // //           >
// // //             {'@cellcure_hub'}
// // //           </a>
// // //         </div>

// // //         {/* 5-Column Grid — portrait cards to match reel aspect ratio */}
// // //         <motion.div
// // //           variants={gridVariants}
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true, margin: "-100px" }}
// // //           className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4"
// // //         >
// // //           {posts.map((post) => (
// // //             <motion.a
// // //               href="https://www.instagram.com/cellcure_hub/"
// // //               target="_blank"
// // //               rel="noopener noreferrer"
// // //               key={post.id}
// // //               variants={cardVariants}
// // //               whileHover={{ y: -6, scale: 1.025 }}
// // //               transition={{ type: "spring", stiffness: 300, damping: 22 }}
// // //               /* 
// // //                 Portrait ratio ~9:16 (Instagram reel).
// // //                 aspect-[9/16] keeps the card naturally tall without
// // //                 hard-coded pixel heights that fight the image.
// // //               */
// // //               className="group relative block aspect-[9/16] rounded-2xl border border-white/[0.07] bg-zinc-950 overflow-hidden shadow-2xl cursor-pointer"
// // //             >
// // //               {/* Full-bleed image — fills entire card */}
// // //               <img
// // //                 src={post.imageSrc}
// // //                 alt={post.imageAlt}
// // //                 style={{ objectPosition: post.objectPosition }}
// // //                 className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
// // //               />

// // //               {/* Scrim: dark at bottom so text is always readable */}
// // //               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10 pointer-events-none" />

// // //               {/* Top-left badge */}
// // //               <div className="absolute top-3 left-3 z-10">
// // //                 {post.type === 'reel' ? (
// // //                   <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-2 py-0.5">
// // //                     <ReelIcon />
// // //                     <span className="text-[9px] font-bold text-white uppercase tracking-wider">Reel</span>
// // //                   </div>
// // //                 ) : (
// // //                   <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-2 py-0.5">
// // //                     <Instagram className="w-2.5 h-2.5 text-white" />
// // //                     <span className="text-[9px] font-bold text-white uppercase tracking-wider">Post</span>
// // //                   </div>
// // //                 )}
// // //               </div>

// // //               {/* Hover: centre Instagram icon */}
// // //               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
// // //                 <div className="w-12 h-12 rounded-full bg-black/40 border border-white/20 backdrop-blur-md flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-300">
// // //                   <Instagram className="w-5 h-5 text-white" />
// // //                 </div>
// // //               </div>

// // //               {/* Bottom info — sits on top of the gradient scrim */}
// // //               <div className="absolute bottom-0 left-0 right-0 z-10 p-3 sm:p-4">
// // //                 <h3 className="text-white font-black text-[11px] sm:text-xs uppercase tracking-wider group-hover:text-[#FF5C00] transition-colors duration-200 leading-tight">
// // //                   {post.title}
// // //                 </h3>
// // //                 <p className="text-[10px] text-white/50 mt-1 line-clamp-2 leading-snug">
// // //                   {post.description}
// // //                 </p>

// // //                 {/* Likes / Comments row */}
// // //                 <div className="flex items-center gap-3 mt-2">
// // //                   <span className="flex items-center gap-1 text-[10px] text-white/40">
// // //                     <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
// // //                       <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
// // //                     </svg>
// // //                     {post.likes}
// // //                   </span>
// // //                   <span className="flex items-center gap-1 text-[10px] text-white/40">
// // //                     <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
// // //                       <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
// // //                     </svg>
// // //                     {post.comments}
// // //                   </span>
// // //                 </div>
// // //               </div>
// // //             </motion.a>
// // //           ))}
// // //         </motion.div>

// // //       </div>
// // //     </section>
// // //   );
// // // }

// // 'use client';

// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { Cpu, Droplets, Smartphone, Activity, Sparkles } from 'lucide-react';
// // import { cn } from '@/lib/utils';

// // // ─── ImageKit config ────────────────────────────────────────────────────────
// // const IK_BASE = 'https://ik.imagekit.io/yzstxngc8/cellcureInsta';

// // /**
// //  * Build an ImageKit URL with smart transformations:
// //  *   - c-maintain_ratio  → crop to fill without distortion
// //  *   - fo-face           → auto face-detect and center crop on face
// //  *   - ar-9-16           → portrait 9:16 aspect ratio
// //  *   - w-480             → 480px wide (retina: serves 2× on HiDPI via srcset)
// //  *   - f-auto            → serve WebP / AVIF automatically
// //  *   - q-80              → quality 80 (great balance size/sharpness)
// //  */
// // function ikUrl(filename: string, overrides = '') {
// //   const tr = `tr=c-maintain_ratio,fo-face,ar-9-16,w-480,f-auto,q-80${overrides ? ',' + overrides : ''}`;
// //   return `${IK_BASE}/${filename}?${tr}`;
// // }

// // // ─── Types ───────────────────────────────────────────────────────────────────
// // interface InstaPost {
// //   id: string;
// //   type: 'reel' | 'post';
// //   title: string;
// //   description: string;
// //   likes: string;
// //   comments: string;
// //   icon: React.ElementType;
// //   filename: string; // ImageKit filename
// //   imageAlt: string;
// // }

// // // ─── SVG Icons ───────────────────────────────────────────────────────────────
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

// // const ReelIcon = () => (
// //   <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
// //     <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.27 8.27 0 0 0 4.84 1.56V6.82a4.85 4.85 0 0 1-1.07-.13z" />
// //   </svg>
// // );

// // // ─── Data ────────────────────────────────────────────────────────────────────
// // const posts: InstaPost[] = [
// //   {
// //     id: 'board-repair',
// //     type: 'reel',
// //     title: 'Micro-Soldering',
// //     description: '0.2mm logic board trace reconstruction under our stereoscopic microscope.',
// //     likes: '1,420',
// //     comments: '94',
// //     icon: Cpu,
// //     filename: 'mobile-repair.webp',
// //     imageAlt: 'Micro soldering mobile repair',
// //   },
// //   {
// //     id: 'water-damage',
// //     type: 'reel',
// //     title: 'Ultrasonic Resus',
// //     description: 'Liquid damage recovery flow. Deep chemical ultrasonic bath & micro-capacitor swaps.',
// //     likes: '2,118',
// //     comments: '145',
// //     icon: Droplets,
// //     filename: 'repair.webp',
// //     imageAlt: 'Ultrasonic water damage repair',
// //   },
// //   {
// //     id: 'screen-peel',
// //     type: 'reel',
// //     title: 'Satisfying Peel',
// //     description: 'Clean screen replacement on a folding device. 100% genuine OEM display.',
// //     likes: '3,890',
// //     comments: '280',
// //     icon: Smartphone,
// //     filename: 'studio.webp',
// //     imageAlt: 'Satisfying screen peel',
// //   },
// //   {
// //     id: 'cleanroom',
// //     type: 'post',
// //     title: 'ESD Cleanroom',
// //     description: 'Behind the scenes in our dust-free cleanroom. ESD-safe mats and ionizers.',
// //     likes: '956',
// //     comments: '42',
// //     icon: Activity,
// //     filename: 'office.webp',
// //     imageAlt: 'ESD safe cleanroom office',
// //   },
// //   {
// //     id: 'satisfaction',
// //     type: 'reel',
// //     title: 'Device Resurrection',
// //     description: 'Another device saved from e-waste. Genuine BGA chip transplant complete.',
// //     likes: '1,875',
// //     comments: '102',
// //     icon: Sparkles,
// //     filename: 'doorstep.webp',
// //     imageAlt: 'Device resurrection doorstep delivery',
// //   },
// // ];

// // // ─── Animation variants ───────────────────────────────────────────────────────
// // const titleContainerVariants = {
// //   hidden: {},
// //   visible: { transition: { staggerChildren: 0.08 } },
// // };

// // const wordVariants = {
// //   hidden: { y: '110%', rotate: 2 },
// //   visible: {
// //     y: '0%',
// //     rotate: 0,
// //     transition: { type: 'spring' as const, stiffness: 90, damping: 14 },
// //   },
// // };

// // const gridVariants = {
// //   hidden: {},
// //   visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
// // };

// // const cardVariants = {
// //   hidden: { opacity: 0, y: 30, scale: 0.96 },
// //   visible: {
// //     opacity: 1,
// //     y: 0,
// //     scale: 1,
// //     transition: { type: 'spring' as const, stiffness: 80, damping: 15 },
// //   },
// // };

// // const titleWords = 'INSIDE CELL CURE HUB'.split(' ');

// // // ─── Component ────────────────────────────────────────────────────────────────
// // export function InstagramSection() {
// //   return (
// //     <section className="relative bg-black py-24 sm:py-32 border-t border-white/5 z-20 overflow-hidden select-none">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

// //         {/* ── Section Header ── */}
// //         <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
// //           <motion.div
// //             initial={{ opacity: 0, y: 10 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="flex items-center justify-center gap-2 mb-2"
// //           >
// //             <Instagram className="w-4 h-4 text-[#FF5C00]" />
// //             <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#FF5C00]">
// //               Follow Our Lab
// //             </span>
// //           </motion.div>

// //           <motion.h2
// //             variants={titleContainerVariants}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true, margin: '-50px' }}
// //             className="text-3xl sm:text-5xl font-black tracking-tighter text-white uppercase flex flex-wrap justify-center gap-x-3 gap-y-1"
// //           >
// //             {titleWords.map((word, idx) => (
// //               <span key={idx} className="inline-block overflow-hidden h-fit py-1">
// //                 <motion.span
// //                   variants={wordVariants}
// //                   className={cn(
// //                     'inline-block origin-bottom-left',
// //                     (word === 'CELL' || word === 'CURE' || word === 'HUB') && 'text-[#FF5C00]',
// //                   )}
// //                 >
// //                   {word}
// //                 </motion.span>
// //               </span>
// //             ))}
// //           </motion.h2>

// //           <p className="text-sm sm:text-base text-white/50">
// //             Check out our micro-soldering videos, repair satisfaction peels, and lab updates on Instagram.
// //           </p>

// //           <a
// //             href="https://www.instagram.com/cellcure_hub/"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="inline-block text-xs font-black uppercase tracking-widest text-[#FF5C00] hover:text-white transition-colors duration-200"
// //           >
// //             @cellcure_hub
// //           </a>
// //         </div>

// //         {/* ── 5-Column Grid ── */}
// //         <motion.div
// //           variants={gridVariants}
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, margin: '-100px' }}
// //           className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4"
// //         >
// //           {posts.map((post) => (
// //             <motion.a
// //               href="https://www.instagram.com/cellcure_hub/"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               key={post.id}
// //               variants={cardVariants}
// //               whileHover={{ y: -6, scale: 1.025 }}
// //               transition={{ type: 'spring', stiffness: 300, damping: 22 }}
// //               className="group relative block aspect-[9/16] rounded-2xl border border-white/[0.07] bg-zinc-950 overflow-hidden shadow-2xl cursor-pointer"
// //             >
// //               {/*
// //                * ImageKit delivers:
// //                *   - fo-face  → face-detected crop center
// //                *   - ar-9-16  → already portrait, fills card perfectly
// //                *   - f-auto   → WebP/AVIF auto
// //                * So we just need object-cover; no objectPosition hacks needed.
// //                */}
// //               <img
// //                 src={ikUrl(post.filename)}
// //                 alt={post.imageAlt}
// //                 loading="lazy"
// //                 decoding="async"
// //                 className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
// //               />

// //               {/* Dark scrim */}
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10 pointer-events-none" />

// //               {/* Reel / Post badge */}
// //               <div className="absolute top-3 left-3 z-10">
// //                 {post.type === 'reel' ? (
// //                   <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-2 py-0.5">
// //                     <ReelIcon />
// //                     <span className="text-[9px] font-bold text-white uppercase tracking-wider">Reel</span>
// //                   </div>
// //                 ) : (
// //                   <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-2 py-0.5">
// //                     <Instagram className="w-2.5 h-2.5 text-white" />
// //                     <span className="text-[9px] font-bold text-white uppercase tracking-wider">Post</span>
// //                   </div>
// //                 )}
// //               </div>

// //               {/* Hover: Instagram icon overlay */}
// //               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
// //                 <div className="w-12 h-12 rounded-full bg-black/40 border border-white/20 backdrop-blur-md flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-300">
// //                   <Instagram className="w-5 h-5 text-white" />
// //                 </div>
// //               </div>

// //               {/* Bottom info */}
// //               <div className="absolute bottom-0 left-0 right-0 z-10 p-3 sm:p-4">
// //                 <h3 className="text-white font-black text-[11px] sm:text-xs uppercase tracking-wider group-hover:text-[#FF5C00] transition-colors duration-200 leading-tight">
// //                   {post.title}
// //                 </h3>
// //                 <p className="text-[10px] text-white/50 mt-1 line-clamp-2 leading-snug">
// //                   {post.description}
// //                 </p>

// //                 {/* Likes / Comments */}
// //                 <div className="flex items-center gap-3 mt-2">
// //                   <span className="flex items-center gap-1 text-[10px] text-white/40">
// //                     <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
// //                       <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
// //                     </svg>
// //                     {post.likes}
// //                   </span>
// //                   <span className="flex items-center gap-1 text-[10px] text-white/40">
// //                     <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
// //                       <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
// //                     </svg>
// //                     {post.comments}
// //                   </span>
// //                 </div>
// //               </div>
// //             </motion.a>
// //           ))}
// //         </motion.div>

// //       </div>
// //     </section>
// //   );
// // }

// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Cpu, Droplets, Smartphone, Activity, Sparkles } from 'lucide-react';
// import { cn } from '@/lib/utils';

// // ─── ImageKit config ────────────────────────────────────────────────────────
// const IK_BASE = 'https://ik.imagekit.io/yzstxngc8/cellcureInsta';

// /**
//  * Build an ImageKit URL with smart transformations:
//  *   - c-maintain_ratio  → crop to fill without distortion
//  *   - fo-face           → auto face-detect and center crop on face
//  *   - ar-9-16           → portrait 9:16 aspect ratio
//  *   - w-480             → 480px wide (retina: serves 2× on HiDPI via srcset)
//  *   - f-auto            → serve WebP / AVIF automatically
//  *   - q-80              → quality 80 (great balance size/sharpness)
//  */
// /**
//  * ImageKit URL builder — optimized for portrait 9:16 reel cards
//  *
//  * fo-top   → keeps face + upper body in frame (not extreme close-up like fo-face)
//  * c-fill   → fills the card completely, no letterboxing
//  * ar-9-16  → portrait ratio matching card shape exactly
//  * w-480    → 480px wide (crisp on retina @ 240px card width)
//  * dpr-2    → serve 2× resolution for HiDPI screens
//  * f-auto   → auto WebP / AVIF
//  * q-85     → slightly higher quality for sharp text overlays in thumbnails
//  * e-sharpen→ subtle sharpening pass for compressed images
//  */
// function ikUrl(filename: string, overrides = '') {
//   const tr = `tr=c-fill,fo-top,ar-9-16,w-480,dpr-2,f-auto,q-85,e-sharpen${overrides ? ',' + overrides : ''}`;
//   return `${IK_BASE}/${filename}?${tr}`;
// }

// // ─── Types ───────────────────────────────────────────────────────────────────
// interface InstaPost {
//   id: string;
//   type: 'reel' | 'post';
//   title: string;
//   description: string;
//   likes: string;
//   comments: string;
//   icon: React.ElementType;
//   filename: string; // ImageKit filename
//   imageAlt: string;
// }

// // ─── SVG Icons ───────────────────────────────────────────────────────────────
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

// const ReelIcon = () => (
//   <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
//     <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.27 8.27 0 0 0 4.84 1.56V6.82a4.85 4.85 0 0 1-1.07-.13z" />
//   </svg>
// );

// // ─── Data ────────────────────────────────────────────────────────────────────
// const posts: InstaPost[] = [
//   {
//     id: 'board-repair',
//     type: 'reel',
//     title: 'Micro-Soldering',
//     description: '0.2mm logic board trace reconstruction under our stereoscopic microscope.',
//     likes: '1,420',
//     comments: '94',
//     icon: Cpu,
//     filename: 'mobile-repair.webp',
//     imageAlt: 'Micro soldering mobile repair',
//   },
//   {
//     id: 'water-damage',
//     type: 'reel',
//     title: 'Ultrasonic Resus',
//     description: 'Liquid damage recovery flow. Deep chemical ultrasonic bath & micro-capacitor swaps.',
//     likes: '2,118',
//     comments: '145',
//     icon: Droplets,
//     filename: 'repair.webp',
//     imageAlt: 'Ultrasonic water damage repair',
//   },
//   {
//     id: 'screen-peel',
//     type: 'reel',
//     title: 'Satisfying Peel',
//     description: 'Clean screen replacement on a folding device. 100% genuine OEM display.',
//     likes: '3,890',
//     comments: '280',
//     icon: Smartphone,
//     filename: 'studio.webp',
//     imageAlt: 'Satisfying screen peel',
//   },
//   {
//     id: 'cleanroom',
//     type: 'post',
//     title: 'ESD Cleanroom',
//     description: 'Behind the scenes in our dust-free cleanroom. ESD-safe mats and ionizers.',
//     likes: '956',
//     comments: '42',
//     icon: Activity,
//     filename: 'office.webp',
//     imageAlt: 'ESD safe cleanroom office',
//   },
//   {
//     id: 'satisfaction',
//     type: 'reel',
//     title: 'Device Resurrection',
//     description: 'Another device saved from e-waste. Genuine BGA chip transplant complete.',
//     likes: '1,875',
//     comments: '102',
//     icon: Sparkles,
//     filename: 'doorstep.webp',
//     imageAlt: 'Device resurrection doorstep delivery',
//   },
// ];

// // ─── Animation variants ───────────────────────────────────────────────────────
// const titleContainerVariants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.08 } },
// };

// const wordVariants = {
//   hidden: { y: '110%', rotate: 2 },
//   visible: {
//     y: '0%',
//     rotate: 0,
//     transition: { type: 'spring' as const, stiffness: 90, damping: 14 },
//   },
// };

// const gridVariants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 30, scale: 0.96 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { type: 'spring' as const, stiffness: 80, damping: 15 },
//   },
// };

// const titleWords = 'INSIDE CELL CURE HUB'.split(' ');

// // ─── Component ────────────────────────────────────────────────────────────────
// export function InstagramSection() {
//   return (
//     <section className="relative bg-black py-24 sm:py-32 border-t border-white/5 z-20 overflow-hidden select-none">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

//         {/* ── Section Header ── */}
//         <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="flex items-center justify-center gap-2 mb-2"
//           >
//             <Instagram className="w-4 h-4 text-[#FF5C00]" />
//             <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#FF5C00]">
//               Follow Our Lab
//             </span>
//           </motion.div>

//           <motion.h2
//             variants={titleContainerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: '-50px' }}
//             className="text-3xl sm:text-5xl font-black tracking-tighter text-white uppercase flex flex-wrap justify-center gap-x-3 gap-y-1"
//           >
//             {titleWords.map((word, idx) => (
//               <span key={idx} className="inline-block overflow-hidden h-fit py-1">
//                 <motion.span
//                   variants={wordVariants}
//                   className={cn(
//                     'inline-block origin-bottom-left',
//                     (word === 'CELL' || word === 'CURE' || word === 'HUB') && 'text-[#FF5C00]',
//                   )}
//                 >
//                   {word}
//                 </motion.span>
//               </span>
//             ))}
//           </motion.h2>

//           <p className="text-sm sm:text-base text-white/50">
//             Check out our micro-soldering videos, repair satisfaction peels, and lab updates on Instagram.
//           </p>

//           <a
//             href="https://www.instagram.com/cellcure_hub/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block text-xs font-black uppercase tracking-widest text-[#FF5C00] hover:text-white transition-colors duration-200"
//           >
//             @cellcure_hub
//           </a>
//         </div>

//         {/* ── 5-Column Grid ── */}
//         <motion.div
//           variants={gridVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: '-100px' }}
//           className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4"
//         >
//           {posts.map((post) => (
//             <motion.a
//               href="https://www.instagram.com/cellcure_hub/"
//               target="_blank"
//               rel="noopener noreferrer"
//               key={post.id}
//               variants={cardVariants}
//               whileHover={{ y: -6, scale: 1.025 }}
//               transition={{ type: 'spring', stiffness: 300, damping: 22 }}
//               className="group relative block aspect-[9/16] rounded-2xl border border-white/[0.07] bg-zinc-950 overflow-hidden shadow-2xl cursor-pointer"
//             >
//               {/*
//                * ImageKit delivers:
//                *   - fo-face  → face-detected crop center
//                *   - ar-9-16  → already portrait, fills card perfectly
//                *   - f-auto   → WebP/AVIF auto
//                * So we just need object-cover; no objectPosition hacks needed.
//                */}
//               <img
//                 src={ikUrl(post.filename)}
//                 alt={post.imageAlt}
//                 loading="lazy"
//                 decoding="async"
//                 className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
//               />

//               {/* Multi-stop scrim — strong at bottom, subtle vignette top */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.08) 100%)' }} />
//               {/* Subtle top vignette so badge always readable */}
//               <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />

//               {/* Reel / Post badge — top left */}
//               <div className="absolute top-3 left-3 z-10">
//                 <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md border border-white/15 rounded-full px-2.5 py-1 shadow-lg">
//                   {post.type === 'reel' ? <ReelIcon /> : <Instagram className="w-2.5 h-2.5 text-white" />}
//                   <span className="text-[9px] font-bold text-white uppercase tracking-widest">
//                     {post.type === 'reel' ? 'Reel' : 'Post'}
//                   </span>
//                 </div>
//               </div>

//               {/* Orange accent dot — top right corner */}
//               <div className="absolute top-3 right-3 z-10 w-2 h-2 rounded-full bg-[#FF5C00] shadow-[0_0_8px_2px_rgba(255,92,0,0.6)]" />

//               {/* Hover overlay */}
//               <div className="absolute inset-0 bg-[#FF5C00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
//               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
//                 <div className="w-11 h-11 rounded-full bg-white/10 border border-white/30 backdrop-blur-md flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300 ease-out shadow-xl">
//                   <Instagram className="w-4 h-4 text-white" />
//                 </div>
//               </div>

//               {/* Bottom info */}
//               <div className="absolute bottom-0 left-0 right-0 z-10 p-3 sm:p-4 space-y-1">
//                 {/* Orange rule */}
//                 <div className="w-6 h-[2px] bg-[#FF5C00] rounded-full mb-2 group-hover:w-10 transition-all duration-300" />

//                 <h3 className="text-white font-black text-[11px] sm:text-[12px] uppercase tracking-wider group-hover:text-[#FF5C00] transition-colors duration-200 leading-tight drop-shadow-md">
//                   {post.title}
//                 </h3>
//                 <p className="text-[10px] text-white/55 line-clamp-2 leading-snug">
//                   {post.description}
//                 </p>

//                 {/* Likes / Comments */}
//                 <div className="flex items-center gap-3 pt-1">
//                   <span className="flex items-center gap-1 text-[10px] text-white/45">
//                     <svg className="w-3 h-3 text-[#FF5C00]/70" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//                     </svg>
//                     {post.likes}
//                   </span>
//                   <span className="flex items-center gap-1 text-[10px] text-white/45">
//                     <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                       <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
//                     </svg>
//                     {post.comments}
//                   </span>
//                 </div>
//               </div>
//             </motion.a>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   );
// }

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Droplets, Smartphone, Activity, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

// ─── ImageKit config ────────────────────────────────────────────────────────
const IK_BASE = 'https://ik.imagekit.io/yzstxngc8/cellcureInsta';

/**
 * Build an ImageKit URL with smart transformations:
 *   - c-maintain_ratio  → crop to fill without distortion
 *   - fo-face           → auto face-detect and center crop on face
 *   - ar-9-16           → portrait 9:16 aspect ratio
 *   - w-480             → 480px wide (retina: serves 2× on HiDPI via srcset)
 *   - f-auto            → serve WebP / AVIF automatically
 *   - q-80              → quality 80 (great balance size/sharpness)
 */
/**
 * ImageKit URL — just resize + quality, NO auto-focus cropping.
 * Source images are landscape (16:9), cards are portrait (9:16).
 * Auto fo-* always over-zooms. CSS objectPosition controls crop anchor.
 *
 * w-600,h-1067 → deliver at 600×1067 (9:16), ImageKit fills via c-force
 * c-force      → force exact dimensions (crops server-side, CSS fine-tunes)
 * f-auto       → WebP / AVIF
 * q-85         → sharp thumbnails
 * e-sharpen    → crisp after resize
 */
function ikUrl(filename: string) {
  return `${IK_BASE}/${filename}?tr=w-600,h-1067,c-force,f-auto,q-85,e-sharpen`;
}

// ─── Types ───────────────────────────────────────────────────────────────────
interface InstaPost {
  id: string;
  type: 'reel' | 'post';
  title: string;
  description: string;
  likes: string;
  comments: string;
  icon: React.ElementType;
  filename: string; // ImageKit filename
  imageAlt: string;
  pos: string;  // CSS object-position
  href: string; // individual reel link
}

// ─── SVG Icons ───────────────────────────────────────────────────────────────
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

const ReelIcon = () => (
  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.27 8.27 0 0 0 4.84 1.56V6.82a4.85 4.85 0 0 1-1.07-.13z" />
  </svg>
);

// ─── Data ────────────────────────────────────────────────────────────────────
const posts: InstaPost[] = [
  {
    id: 'board-repair',
    type: 'reel',
    title: 'The Best Decision',
    description: 'From a crazy idea to a real startup — this is how Cell Cure Hub was born. Best decision we ever made.',
    likes: '1,420',
    comments: '94',
    href: 'https://www.instagram.com/reel/DYB-usMp53z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    icon: Cpu,
    filename: 'mobile-repair.webp',
    imageAlt: 'Startup idea to best decision',
    pos: 'center 30%',
  },
  {
    id: 'water-damage',
    type: 'reel',
    title: 'We Launched 🚀',
    description: 'Cell Cure Hub is officially live! The startup is real, the mission is clear — premium mobile repair, Nagpur.',
    likes: '2,118',
    comments: '145',
    href: 'https://www.instagram.com/reel/DYo2HfZpdnw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    icon: Droplets,
    filename: 'repair.webp',
    imageAlt: 'Cell Cure Hub startup launch',
    pos: 'center 25%',
  },
  {
    id: 'screen-peel',
    type: 'reel',
    title: 'The Journey',
    description: 'Every repair tells a story. This is ours — the grind, the growth, and the best time to build something great.',
    likes: '3,890',
    comments: '280',
    href: 'https://www.instagram.com/reel/DX8yAGnqj71/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    icon: Smartphone,
    filename: 'studio.webp',
    imageAlt: 'Startup journey Cell Cure Hub',
    pos: 'center 20%',
  },
  {
    id: 'cleanroom',
    type: 'reel',
    title: 'Trust The Process',
    description: "Inspired by real problems, driven by trust. We fix what others can't — because your device deserves better.",
    likes: '956',
    comments: '42',
    href: 'https://www.instagram.com/reel/DYUJa2cNfiK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    icon: Activity,
    filename: 'office.webp',
    imageAlt: 'Inspiration and trust Cell Cure Hub',
    pos: 'center 15%',
  },
  {
    id: 'satisfaction',
    type: 'reel',
    title: 'Nagpur Rises',
    description: 'Building more than a repair shop — building a startup community in Nagpur. Join the movement.',
    likes: '1,875',
    comments: '102',
    href: 'https://www.instagram.com/reel/DYR44EjJGHl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    icon: Sparkles,
    filename: 'doorstep.webp',
    imageAlt: 'Nagpur startup community Cell Cure Hub',
    pos: 'center 20%',
  },
];

// ─── Animation variants ───────────────────────────────────────────────────────
const titleContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const wordVariants = {
  hidden: { y: '110%', rotate: 2 },
  visible: {
    y: '0%',
    rotate: 0,
    transition: { type: 'spring' as const, stiffness: 90, damping: 14 },
  },
};

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 80, damping: 15 },
  },
};

const titleWords = 'INSIDE CELL CURE HUB'.split(' ');

// ─── Component ────────────────────────────────────────────────────────────────
export function InstagramSection() {
  return (
    <section className="relative bg-black py-24 sm:py-32 border-t border-white/5 z-20 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <Instagram className="w-4 h-4 text-[#FF5C00]" />
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#FF5C00]">
              Follow Our Lab
            </span>
          </motion.div>

          <motion.h2
            variants={titleContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="text-3xl sm:text-5xl font-black tracking-tighter text-white uppercase flex flex-wrap justify-center gap-x-3 gap-y-1"
          >
            {titleWords.map((word, idx) => (
              <span key={idx} className="inline-block overflow-hidden h-fit py-1">
                <motion.span
                  variants={wordVariants}
                  className={cn(
                    'inline-block origin-bottom-left',
                    (word === 'CELL' || word === 'CURE' || word === 'HUB') && 'text-[#FF5C00]',
                  )}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h2>

          <p className="text-sm sm:text-base text-white/50">
            Check out our micro-soldering videos, repair satisfaction peels, and lab updates on Instagram.
          </p>

          <a
            href="https://www.instagram.com/cellcure_hub/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs font-black uppercase tracking-widest text-[#FF5C00] hover:text-white transition-colors duration-200"
          >
            @cellcure_hub
          </a>
        </div>

        {/* ── 5-Column Grid ── */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4"
        >
          {posts.map((post) => (
            <motion.a
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              key={post.id}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.025 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group relative block aspect-[9/16] rounded-2xl border border-white/[0.07] bg-zinc-950 overflow-hidden shadow-2xl cursor-pointer"
            >
              {/*
               * ImageKit delivers:
               *   - fo-face  → face-detected crop center
               *   - ar-9-16  → already portrait, fills card perfectly
               *   - f-auto   → WebP/AVIF auto
               * So we just need object-cover; no objectPosition hacks needed.
               */}
              <img
                src={ikUrl(post.filename)}
                alt={post.imageAlt}
                loading="lazy"
                decoding="async"
                style={{ objectPosition: post.pos }}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
              />

              {/* Multi-stop scrim — strong at bottom, subtle vignette top */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.08) 100%)' }} />
              {/* Subtle top vignette so badge always readable */}
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />

              {/* Reel / Post badge — top left */}
              <div className="absolute top-3 left-3 z-10">
                <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md border border-white/15 rounded-full px-2.5 py-1 shadow-lg">
                  {post.type === 'reel' ? <ReelIcon /> : <Instagram className="w-2.5 h-2.5 text-white" />}
                  <span className="text-[9px] font-bold text-white uppercase tracking-widest">
                    {post.type === 'reel' ? 'Reel' : 'Post'}
                  </span>
                </div>
              </div>

              {/* Orange accent dot — top right corner */}
              <div className="absolute top-3 right-3 z-10 w-2 h-2 rounded-full bg-[#FF5C00] shadow-[0_0_8px_2px_rgba(255,92,0,0.6)]" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#FF5C00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                <div className="w-11 h-11 rounded-full bg-white/10 border border-white/30 backdrop-blur-md flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300 ease-out shadow-xl">
                  <Instagram className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-3 sm:p-4 space-y-1">
                {/* Orange rule */}
                <div className="w-6 h-[2px] bg-[#FF5C00] rounded-full mb-2 group-hover:w-10 transition-all duration-300" />

                <h3 className="text-white font-black text-[11px] sm:text-[12px] uppercase tracking-wider group-hover:text-[#FF5C00] transition-colors duration-200 leading-tight drop-shadow-md">
                  {post.title}
                </h3>
                <p className="text-[10px] text-white/55 line-clamp-2 leading-snug">
                  {post.description}
                </p>

                {/* Likes / Comments */}
                <div className="flex items-center gap-3 pt-1">
                  <span className="flex items-center gap-1 text-[10px] text-white/45">
                    <svg className="w-3 h-3 text-[#FF5C00]/70" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-white/45">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    {post.comments}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}