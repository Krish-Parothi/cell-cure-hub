// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Heart, MessageCircle, Play, Cpu, Droplets, Smartphone, Activity, Sparkles } from 'lucide-react';

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
// import { cn } from '@/lib/utils';

// interface InstaPost {
//   id: string;
//   type: 'reel' | 'post';
//   title: string;
//   description: string;
//   likes: string;
//   comments: string;
//   icon: React.ElementType;
//   color: string;
//   animation: React.ReactNode;
// }

// export function InstagramSection() {
//   const posts: InstaPost[] = [
//     {
//       id: "board-repair",
//       type: "reel",
//       title: "Micro-Soldering",
//       description: "0.2mm logic board trace reconstruction under our stereoscopic microscope. Resurrecting dead boards daily. #microsoldering #bga #techrepair",
//       likes: "1,420",
//       comments: "94",
//       icon: Cpu,
//       color: "from-[#FF5C00]/20 to-zinc-950",
//       animation: (
//         <div className="relative w-full h-full flex items-center justify-center bg-black/60 overflow-hidden">
//           {/* Diagnostic Grid */}
//           <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:10px_10px]" />
//           {/* Laser Traces */}
//           <svg className="absolute w-36 h-36 text-[#FF5C00]/40" viewBox="0 0 100 100">
//             <path d="M10 10 H90 V90 H10 Z" fill="none" stroke="currentColor" strokeWidth="1" />
//             <path d="M10 50 H90" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
//             <path d="M50 10 V90" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
//             <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
//             <path d="M30 30 L42 42" fill="none" stroke="#FF5C00" strokeWidth="1.5" />
//             <path d="M70 70 L58 58" fill="none" stroke="#FF5C00" strokeWidth="1.5" />
//             <path d="M70 30 L58 42" fill="none" stroke="#FF5C00" strokeWidth="1.5" />
//             <path d="M30 70 L42 58" fill="none" stroke="#FF5C00" strokeWidth="1.5" />
//           </svg>
//           <Cpu className="w-12 h-12 text-[#FF5C00] relative z-10 animate-pulse" />
//         </div>
//       )
//     },
//     {
//       id: "water-damage",
//       type: "reel",
//       title: "Ultrasonic Resus",
//       description: "Liquid damage recovery flow. Deep chemical ultrasonic bath, mainboard inspection, and micro-capacitor swaps. #waterdamage #iphonerepair #cleanroom",
//       likes: "2,118",
//       comments: "145",
//       icon: Droplets,
//       color: "from-blue-600/20 to-zinc-950",
//       animation: (
//         <div className="relative w-full h-full flex items-center justify-center bg-black/60 overflow-hidden">
//           {/* Pulsing water ripples */}
//           <div className="absolute w-24 h-24 rounded-full border border-blue-500/20 animate-[ping_3s_infinite]" />
//           <div className="absolute w-36 h-36 rounded-full border border-blue-500/10 animate-[ping_4s_infinite]" />
//           <Droplets className="w-12 h-12 text-blue-400 relative z-10 animate-bounce" />
//           {/* Simulated bubble dots */}
//           <div className="absolute top-10 left-12 w-1.5 h-1.5 rounded-full bg-blue-500/40 animate-bubble1" style={{ animation: 'bounce 2.5s infinite' }} />
//           <div className="absolute bottom-12 right-10 w-2 h-2 rounded-full bg-blue-500/40 animate-bubble2" style={{ animation: 'bounce 3.5s infinite 0.5s' }} />
//         </div>
//       )
//     },
//     {
//       id: "screen-peel",
//       type: "reel",
//       title: "Satisfying Peel",
//       description: "Clean screen replacement on a folding device. Nothing beats the final protective film peel. 100% genuine OEM display. #oddlysatisfying #screenrepair #foldingphone",
//       likes: "3,890",
//       comments: "280",
//       icon: Smartphone,
//       color: "from-amber-600/20 to-zinc-950",
//       animation: (
//         <div className="relative w-full h-full flex items-center justify-center bg-black/60 overflow-hidden">
//           {/* Smartphone wireframe outline */}
//           <div className="relative w-20 h-36 border border-amber-500/40 rounded-xl p-1 flex flex-col justify-between items-center bg-black/40">
//             {/* Screen bezel */}
//             <div className="w-full h-full border border-amber-500/20 rounded-lg flex items-center justify-center relative overflow-hidden bg-gradient-to-t from-amber-500/[0.03] to-transparent">
//               {/* Peel film swipe outline */}
//               <motion.div 
//                 animate={{ y: [-40, 100] }}
//                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//                 className="absolute left-0 right-0 h-0.5 bg-amber-500/80 shadow-[0_0_8px_#d97706]"
//               />
//               <Smartphone className="w-10 h-10 text-amber-500/80" />
//             </div>
//           </div>
//         </div>
//       )
//     },
//     {
//       id: "cleanroom",
//       type: "post",
//       title: "ESD Cleanroom",
//       description: "Behind the scenes in our dust-free cleanroom. ESD-safe mats, localized ionizers, and filtered air currents. Because particles destroy chips. #esdsafe #cleanroom #electronics",
//       likes: "956",
//       comments: "42",
//       icon: Activity,
//       color: "from-purple-600/20 to-zinc-950",
//       animation: (
//         <div className="relative w-full h-full flex items-center justify-center bg-black/60 overflow-hidden">
//           {/* Grid pattern with digital wave chart */}
//           <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:16px_16px]" />
          
//           <svg className="absolute w-full h-24 text-purple-500/30" viewBox="0 0 100 40">
//             <motion.path 
//               animate={{ d: [
//                 "M 0,20 Q 25,5 50,20 T 100,20",
//                 "M 0,20 Q 25,35 50,20 T 100,20",
//                 "M 0,20 Q 25,5 50,20 T 100,20"
//               ]}}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//               fill="none" 
//               stroke="currentColor" 
//               strokeWidth="1.5" 
//             />
//           </svg>
//           <Activity className="w-12 h-12 text-purple-400 relative z-10" />
//         </div>
//       )
//     },
//     {
//       id: "satisfaction",
//       type: "reel",
//       title: "Device Resurrection",
//       description: "Another device saved from e-waste. Genuine BGA chip transplant complete. From paperweight back to performance. #ewaste #techresurrect #cellcure",
//       likes: "1,875",
//       comments: "102",
//       icon: Sparkles,
//       color: "from-emerald-600/20 to-zinc-950",
//       animation: (
//         <div className="relative w-full h-full flex items-center justify-center bg-black/60 overflow-hidden">
//           {/* Sparkle star bursts */}
//           <div className="absolute top-8 left-8 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
//           <div className="absolute bottom-12 right-12 w-3 h-3 bg-emerald-400 rounded-full animate-ping" />
//           <div className="absolute top-16 right-16 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
//           <Sparkles className="w-12 h-12 text-emerald-400 relative z-10 animate-[spin_6s_infinite_linear]" />
//         </div>
//       )
//     }
//   ];

//   return (
//     <section className="relative bg-black py-24 sm:py-32 border-t border-white/5 z-20 overflow-hidden select-none">
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
//         {/* Section Header */}
//         <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
//           <motion.div 
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="flex items-center justify-center gap-2 mb-2"
//           >
//             <Instagram className="w-4 h-4 text-[#FF5C00]" />
//             <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#FF5C00]">Follow Our Lab</span>
//           </motion.div>
//           <h2 className="text-3xl sm:text-5xl font-black tracking-tighter text-white uppercase">
//             INSIDE CELL CURE HUB
//           </h2>
//           <p className="text-sm sm:text-base text-white/50">
//             Check out our micro-soldering videos, repair satisfaction peels, and lab updates on Instagram.
//           </p>
//           <a 
//             href="https://instagram.com" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="inline-block text-xs font-black uppercase tracking-widest text-[#FF5C00] hover:text-white transition-colors duration-200"
//           >
//             @cellcurehub_official
//           </a>
//         </div>

//         {/* 5-Column Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//           {posts.map((post, idx) => {
//             return (
//               <motion.div 
//                 key={post.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="group relative h-[380px] rounded-2xl border border-white/5 bg-zinc-950 overflow-hidden shadow-xl cursor-pointer"
//               >
//                 {/* Colored Glow Layer */}
//                 <div className={cn("absolute -inset-16 bg-gradient-to-br opacity-5 blur-2xl group-hover:opacity-10 transition-opacity duration-500 pointer-events-none", post.color)} />

//                 {/* Animation / Video Canvas Area (Top 70%) */}
//                 <div className="h-[75%] w-full relative border-b border-white/5 overflow-hidden">
//                   {post.animation}

//                   {/* Reel Play Badge */}
//                   {post.type === 'reel' && (
//                     <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/60 border border-white/10 text-white/80 z-20">
//                       <Play className="w-3.5 h-3.5 fill-white" />
//                     </div>
//                   )}

//                   {/* Center View overlay */}
//                   <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
//                     <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-300">
//                       <Instagram className="w-5 h-5" />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Info / Footer Area (Bottom 25%) */}
//                 <div className="h-[25%] p-4 flex flex-col justify-between relative z-10 bg-zinc-950/80 backdrop-blur-md">
//                   <div>
//                     <h3 className="text-white font-bold text-xs uppercase tracking-wider group-hover:text-[#FF5C00] transition-colors duration-200">
//                       {post.title}
//                     </h3>
//                     <p className="text-[10px] text-white/40 truncate mt-0.5">
//                       {post.description}
//                     </p>
//                   </div>

//                   {/* Metrics Row */}
//                   <div className="flex items-center justify-between text-[11px] font-semibold text-white/60 pt-2 border-t border-white/5">
//                     <div className="flex items-center gap-1.5">
//                       <Heart className="w-3.5 h-3.5 text-[#FF5C00] fill-[#FF5C00]" />
//                       <span>{post.likes}</span>
//                     </div>
//                     <div className="flex items-center gap-1.5">
//                       <MessageCircle className="w-3.5 h-3.5 text-white/40" />
//                       <span>{post.comments}</span>
//                     </div>
//                   </div>
//                 </div>

//               </motion.div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Play, Cpu, Droplets, Smartphone, Activity, Sparkles } from 'lucide-react';

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
import { cn } from '@/lib/utils';

interface InstaPost {
  id: string;
  type: 'reel' | 'post';
  title: string;
  description: string;
  likes: string;
  comments: string;
  icon: React.ElementType;
  color: string;
  animation: React.ReactNode;
}

export function InstagramSection() {
  const posts: InstaPost[] = [
    {
      id: "board-repair",
      type: "reel",
      title: "Micro-Soldering",
      description: "0.2mm logic board trace reconstruction under our stereoscopic microscope. Resurrecting dead boards daily. #microsoldering #bga #techrepair",
      likes: "1,420",
      comments: "94",
      icon: Cpu,
      color: "from-white/5 to-zinc-950",
      animation: (
        <div className="relative w-full h-full flex items-center justify-center bg-black/60 overflow-hidden">
          {/* Schematic Micro-soldering matrix */}
          <svg className="w-full h-full text-white/5 p-8" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
            <path d="M0 20 H100 M0 40 H100 M0 60 H100 M0 80 H100 M20 0 V100 M40 0 V100 M60 0 V100 M80 0 V100" strokeWidth="0.2" strokeDasharray="2 2" />
            <rect x="30" y="30" width="40" height="40" rx="2" stroke="currentColor" strokeWidth="1" />
            <circle cx="50" cy="50" r="14" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 2" />
            {/* Minimal circuit paths */}
            <path d="M10 50 H30 M70 50 H90 M50 10 V30 M50 70 V90" strokeWidth="0.8" />
            <path d="M15 15 L30 30 M85 15 L70 30" strokeWidth="0.5" />
          </svg>
          <Instagram className="absolute w-8 h-8 text-white/10 z-10" />
        </div>
      )
    },
    {
      id: "water-damage",
      type: "reel",
      title: "Ultrasonic Resus",
      description: "Liquid damage recovery flow. Deep chemical ultrasonic bath, mainboard inspection, and micro-capacitor swaps. #waterdamage #iphonerepair #cleanroom",
      likes: "2,118",
      comments: "145",
      icon: Droplets,
      color: "from-white/5 to-zinc-950",
      animation: (
        <div className="relative w-full h-full flex items-center justify-center bg-black/60 overflow-hidden">
          {/* Sonic resonance waves */}
          <svg className="w-full h-full text-white/5 p-8" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
            <path d="M0 20 H100 M0 40 H100 M0 60 H100 M0 80 H100 M20 0 V100 M40 0 V100 M60 0 V100 M80 0 V100" strokeWidth="0.2" strokeDasharray="2 2" />
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.4" strokeDasharray="4 4" />
            <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="0.6" />
            <circle cx="50" cy="50" r="14" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 2" />
            <circle cx="50" cy="50" r="6" stroke="currentColor" strokeWidth="0.8" />
          </svg>
          <Instagram className="absolute w-8 h-8 text-white/10 z-10" />
        </div>
      )
    },
    {
      id: "screen-peel",
      type: "reel",
      title: "Satisfying Peel",
      description: "Clean screen replacement on a folding device. Nothing beats the final protective film peel. 100% genuine OEM display. #oddlysatisfying #screenrepair #foldingphone",
      likes: "3,890",
      comments: "280",
      icon: Smartphone,
      color: "from-white/5 to-zinc-950",
      animation: (
        <div className="relative w-full h-full flex items-center justify-center bg-black/60 overflow-hidden">
          {/* Exploded display stack */}
          <svg className="w-full h-full text-white/5 p-8" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
            <path d="M0 20 H100 M0 40 H100 M0 60 H100 M0 80 H100 M20 0 V100 M40 0 V100 M60 0 V100 M80 0 V100" strokeWidth="0.2" strokeDasharray="2 2" />
            <g transform="rotate(-12 50 50)">
              <rect x="25" y="15" width="50" height="22" rx="1" stroke="currentColor" strokeWidth="0.8" />
              <rect x="25" y="42" width="50" height="22" rx="1" strokeWidth="0.5" strokeDasharray="2 2" />
              <rect x="25" y="68" width="50" height="22" rx="1" strokeWidth="0.4" />
            </g>
          </svg>
          {/* Clean scanning laser line */}
          <motion.div 
            animate={{ y: ["-30%", "130%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[1px] bg-white/20 shadow-[0_0_8px_rgba(255,255,255,0.2)] z-10"
          />
          <Instagram className="absolute w-8 h-8 text-white/10 z-10" />
        </div>
      )
    },
    {
      id: "cleanroom",
      type: "post",
      title: "ESD Cleanroom",
      description: "Behind the scenes in our dust-free cleanroom. ESD-safe mats, localized ionizers, and filtered air currents. Because particles destroy chips. #esdsafe #cleanroom #electronics",
      likes: "956",
      comments: "42",
      icon: Activity,
      color: "from-white/5 to-zinc-950",
      animation: (
        <div className="relative w-full h-full flex items-center justify-center bg-black/60 overflow-hidden">
          {/* Air current frequency lines */}
          <svg className="w-full h-full text-white/5 p-8" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
            <path d="M0 20 H100 M0 40 H100 M0 60 H100 M0 80 H100 M20 0 V100 M40 0 V100 M60 0 V100 M80 0 V100" strokeWidth="0.2" strokeDasharray="2 2" />
            <path d="M10 30 C 30 15, 40 45, 60 30 C 80 15, 90 30, 90 30" stroke="currentColor" strokeWidth="0.8" />
            <path d="M10 50 C 30 35, 40 65, 60 50 C 80 35, 90 50, 90 50" stroke="currentColor" strokeWidth="0.4" strokeDasharray="3 2" />
            <path d="M10 70 C 30 55, 40 85, 60 70 C 80 55, 90 70, 90 70" stroke="currentColor" strokeWidth="0.8" />
          </svg>
          <Instagram className="absolute w-8 h-8 text-white/10 z-10" />
        </div>
      )
    },
    {
      id: "satisfaction",
      type: "reel",
      title: "Device Resurrection",
      description: "Another device saved from e-waste. Genuine BGA chip transplant complete. From paperweight back to performance. #ewaste #techresurrect #cellcure",
      likes: "1,875",
      comments: "102",
      icon: Sparkles,
      color: "from-white/5 to-zinc-950",
      animation: (
        <div className="relative w-full h-full flex items-center justify-center bg-black/60 overflow-hidden">
          {/* Target alignment crosshairs */}
          <svg className="w-full h-full text-white/5 p-8" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
            <path d="M0 20 H100 M0 40 H100 M0 60 H100 M0 80 H100 M20 0 V100 M40 0 V100 M60 0 V100 M80 0 V100" strokeWidth="0.2" strokeDasharray="2 2" />
            <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="0.6" />
            <path d="M50 10 V90 M10 50 H90" strokeWidth="0.4" strokeDasharray="4 4" />
            <rect x="40" y="40" width="20" height="20" stroke="currentColor" strokeWidth="0.8" />
          </svg>
          <Instagram className="absolute w-8 h-8 text-white/10 z-10" />
        </div>
      )
    }
  ];

  // Title animations setup
  const titleWords = "INSIDE CELL CURE HUB".split(" ");

  const titleContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const wordVariants = {
    hidden: { y: "110%", rotate: 2 },
    visible: {
      y: "0%",
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 90,
        damping: 14,
        duration: 0.6
      }
    }
  };

  // Card staggered animation
  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <section className="relative bg-black py-24 sm:py-32 border-t border-white/5 z-20 overflow-hidden select-none">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <Instagram className="w-4 h-4 text-[#FF5C00]" />
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#FF5C00]">Follow Our Lab</span>
          </motion.div>
          
          <motion.h2 
            variants={titleContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-3xl sm:text-5xl font-black tracking-tighter text-white uppercase flex flex-wrap justify-center gap-x-3 gap-y-1"
          >
            {titleWords.map((word, idx) => (
              <span key={idx} className="inline-block overflow-hidden h-fit py-1">
                <motion.span 
                  variants={wordVariants}
                  className={cn(
                    "inline-block origin-bottom-left",
                    (word === "CELL" || word === "CURE" || word === "HUB") && "text-[#FF5C00]"
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

        {/* 5-Column Grid */}
        <motion.div 
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {posts.map((post) => {
            return (
              <motion.a 
                href="https://www.instagram.com/cellcure_hub/"
                target="_blank"
                rel="noopener noreferrer"
                key={post.id}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative block h-[300px] sm:h-[380px] rounded-2xl border border-white/5 bg-zinc-950 overflow-hidden shadow-xl cursor-pointer"
              >
                {/* Colored Glow Layer */}
                <div className={cn("absolute -inset-16 bg-gradient-to-br opacity-5 blur-2xl group-hover:opacity-10 transition-opacity duration-500 pointer-events-none", post.color)} />

                {/* Animation / Video Canvas Area (Top 80%) */}
                <div className="h-[80%] w-full relative border-b border-white/5 overflow-hidden">
                  {post.animation}

                  {/* Center View overlay */}
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Instagram className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Info / Footer Area (Bottom 20%) */}
                <div className="h-[20%] p-4 flex flex-col justify-center relative z-10 bg-zinc-950/80 backdrop-blur-md">
                  <h3 className="text-white font-bold text-xs uppercase tracking-wider group-hover:text-[#FF5C00] transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-[10px] text-white/40 truncate mt-0.5">
                    {post.description}
                  </p>
                </div>

              </motion.a>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

