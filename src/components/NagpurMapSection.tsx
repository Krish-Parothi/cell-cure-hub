// // 'use client';

// // import React, { useState, useEffect, useRef } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { MapPin, Truck, ShieldCheck, Clock } from 'lucide-react';
// // import { cn } from '@/lib/utils';

// // export function NagpurMapSection() {
// //   const [svgContent, setSvgContent] = useState<string>('');
// //   const [tooltip, setTooltip] = useState<{ x: number; y: number; show: boolean; content: string }>({
// //     x: 0,
// //     y: 0,
// //     show: false,
// //     content: ''
// //   });
// //   const containerRef = useRef<HTMLDivElement>(null);

// //   // Fetch the India SVG map and inject Nagpur pulsing pin
// //   useEffect(() => {
// //     fetch('/india.svg')
// //       .then((res) => res.text())
// //       .then((data) => {
// //         // Find </svg> and inject the pulsing geopin element before it
// //         const pinContent = `
// //           <g id="nagpur-pin">
// //             <!-- Outer Pulsing Rings -->
// //             <circle cx="260" cy="345" r="8" fill="#FF5C00" opacity="0.9" />
// //             <circle cx="260" cy="345" r="20" fill="none" stroke="#FF5C00" stroke-width="2">
// //               <animate attributeName="r" values="8;35;8" dur="2.5s" repeatCount="indefinite" />
// //               <animate attributeName="opacity" values="0.8;0;0.8" dur="2.5s" repeatCount="indefinite" />
// //             </circle>
// //             <circle cx="260" cy="345" r="35" fill="none" stroke="#FF5C00" stroke-width="1">
// //               <animate attributeName="r" values="8;55;8" dur="4s" repeatCount="indefinite" />
// //               <animate attributeName="opacity" values="0.5;0;0.5" dur="4s" repeatCount="indefinite" />
// //             </circle>
// //             <!-- Map marker pin head shape -->
// //             <path d="M260,345 C254,334 248,328 260,310 C272,328 266,334 260,345 Z" fill="#FF5C00" stroke="#FFFFFF" stroke-width="1" />
// //             <circle cx="260" cy="322" r="3.5" fill="#FFFFFF" />
// //           </g>
// //         `;
// //         const updatedSvg = data.replace('</svg>', `${pinContent}</svg>`);
// //         setSvgContent(updatedSvg);
// //       })
// //       .catch((err) => console.error('Error fetching map:', err));
// //   }, []);

// //   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
// //     const target = e.target as SVGElement;
// //     if (target && target.tagName === 'path') {
// //       const id = target.getAttribute('id');
// //       const name = target.getAttribute('name');
// //       const rect = containerRef.current?.getBoundingClientRect();
// //       if (!rect) return;

// //       // Position tooltip relative to container to prevent page scroll issues
// //       const tooltipX = e.clientX - rect.left + 15;
// //       const tooltipY = e.clientY - rect.top + 15;

// //       if (id === 'mh') {
// //         setTooltip({
// //           x: tooltipX,
// //           y: tooltipY,
// //           show: true,
// //           content: 'Maharashtra — Active Service Zone (Nagpur HQ)'
// //         });
// //       } else if (name) {
// //         setTooltip({
// //           x: tooltipX,
// //           y: tooltipY,
// //           show: true,
// //           content: `${name} — Expansion Coming Soon`
// //         });
// //       }
// //     } else {
// //       setTooltip((prev) => ({ ...prev, show: false }));
// //     }
// //   };

// //   const handleMouseLeave = () => {
// //     setTooltip((prev) => ({ ...prev, show: false }));
// //   };

// //   const deliveryFeatures = [
// //     {
// //       icon: MapPin,
// //       title: " Nagpur HQ Cleanroom",
// //       desc: "Our ISO ESD-safe diagnostic cleanroom is fully operational in Nagpur for extreme chip repairs."
// //     },
// //     {
// //       icon: Truck,
// //       title: "Free Doorstep Pickup",
// //       desc: "Zero travel required. We schedule doorstep pickup, repair in our lab, and deliver back to you."
// //     },
// //     {
// //       icon: Clock,
// //       title: "48-Hour Turnaround",
// //       desc: "Most screen replacements, battery swaps, and minor repairs are resolved within 24 to 48 hours."
// //     },
// //     {
// //       icon: ShieldCheck,
// //       title: "OEM-Grade Component Warranty",
// //       desc: "We only use original specification manufacturer parts with an absolute up to 1-year warranty."
// //     }
// //   ];

// //   return (
// //     <section className="relative bg-black py-24 sm:py-32 border-t border-white/5 z-20 overflow-hidden select-none">
      
// //       {/* Grid Pattern Background */}
// //       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
// //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
// //           {/* Left Column: Text Content */}
// //           <div className="lg:col-span-5 space-y-8">
// //             <div className="space-y-4">
// //               <motion.div 
// //                 initial={{ opacity: 0, x: -15 }}
// //                 whileInView={{ opacity: 1, x: 0 }}
// //                 viewport={{ once: true }}
// //                 className="flex items-center gap-2"
// //               >
// //                 <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00] animate-pulse" />
// //                 <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#FF5C00]">Active Coverage Region</span>
// //               </motion.div>
              
// //               <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-white leading-none uppercase">
// //                 DELIVERING BEST SERVICE <span className="text-[#FF5C00]">IN NAGPUR</span>
// //               </h2>
              
// //               <p className="text-white/60 text-sm sm:text-base leading-relaxed">
// //                 Cell Cure Hub is expanding. We are currently delivering doorstep premium repairs, diagnostic services, and hardware restorations across all zones of Nagpur.
// //               </p>
// //             </div>

// //             {/* Features List */}
// //             <div className="space-y-6">
// //               {deliveryFeatures.map((feat, i) => {
// //                 const Icon = feat.icon;
// //                 return (
// //                   <motion.div 
// //                     key={i}
// //                     initial={{ opacity: 0, y: 15 }}
// //                     whileInView={{ opacity: 1, y: 0 }}
// //                     viewport={{ once: true }}
// //                     transition={{ delay: i * 0.1 }}
// //                     className="flex gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 group"
// //                   >
// //                     <div className="flex-shrink-0 p-2.5 rounded-xl bg-[#FF5C00]/10 border border-[#FF5C00]/20 text-[#FF5C00] group-hover:scale-110 transition-transform duration-300 h-10 w-10 flex items-center justify-center">
// //                       <Icon className="w-5 h-5" />
// //                     </div>
// //                     <div>
// //                       <h4 className="text-white font-bold text-sm tracking-wide uppercase group-hover:text-[#FF5C00] transition-colors duration-300">
// //                         {feat.title}
// //                       </h4>
// //                       <p className="text-white/50 text-xs sm:text-sm mt-1 leading-relaxed">
// //                         {feat.desc}
// //                       </p>
// //                     </div>
// //                   </motion.div>
// //                 );
// //               })}
// //             </div>
// //           </div>

// //           {/* Right Column: India SVG Map */}
// //           <div className="lg:col-span-7 flex flex-col items-center relative">
// //             <div 
// //               ref={containerRef}
// //               className="relative w-full max-w-[500px] h-[550px] flex items-center justify-center border border-white/5 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent p-6 backdrop-blur-md overflow-hidden"
// //               onMouseMove={handleMouseMove}
// //               onMouseLeave={handleMouseLeave}
// //             >
// //               {/* Glow Behind Map */}
// //               <div className="absolute w-72 h-72 rounded-full bg-[#FF5C00]/5 blur-[80px] pointer-events-none" />

// //               {/* Scoped CSS to Style the SVG Map paths */}
// //               <style jsx global>{`
// //                 .india-map-svg svg {
// //                   width: 100%;
// //                   height: 100%;
// //                   max-height: 500px;
// //                 }
// //                 .india-map-svg svg path {
// //                   fill: #0F0F0F;
// //                   stroke: #222222;
// //                   stroke-width: 0.8;
// //                   transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
// //                   cursor: pointer;
// //                 }
// //                 .india-map-svg svg path:hover {
// //                   fill: #1A1A1A;
// //                   stroke: #444444;
// //                 }
// //                 .india-map-svg svg path#mh {
// //                   fill: rgba(255, 92, 0, 0.12) !important;
// //                   stroke: #FF5C00 !important;
// //                   stroke-width: 1.5 !important;
// //                   filter: drop-shadow(0 0 6px rgba(255, 92, 0, 0.3));
// //                 }
// //                 .india-map-svg svg path#mh:hover {
// //                   fill: rgba(255, 92, 0, 0.2) !important;
// //                   stroke-width: 2.0 !important;
// //                 }
// //                 /* Pulsing pin styling */
// //                 .india-map-svg svg #nagpur-pin {
// //                   pointer-events: none;
// //                 }
// //               `}</style>

// //               {svgContent ? (
// //                 <div 
// //                   className="india-map-svg w-full h-full flex items-center justify-center"
// //                   dangerouslySetInnerHTML={{ __html: svgContent }} 
// //                 />
// //               ) : (
// //                 <div className="flex flex-col items-center justify-center space-y-4">
// //                   <div className="w-8 h-8 rounded-full border-2 border-t-[#FF5C00] border-r-transparent border-b-transparent border-l-transparent animate-spin" />
// //                   <span className="text-white/40 text-xs font-mono uppercase tracking-widest">Loading interactive map...</span>
// //                 </div>
// //               )}

// //               {/* Tooltip Overlay */}
// //               <AnimatePresence>
// //                 {tooltip.show && (
// //                   <motion.div
// //                     initial={{ opacity: 0, scale: 0.95 }}
// //                     animate={{ opacity: 1, scale: 1 }}
// //                     exit={{ opacity: 0, scale: 0.95 }}
// //                     style={{ left: tooltip.x, top: tooltip.y }}
// //                     className="absolute z-30 pointer-events-none bg-black/90 backdrop-blur-xl border border-white/10 px-4 py-2.5 rounded-xl shadow-2xl flex flex-col gap-0.5 whitespace-nowrap"
// //                   >
// //                     <div className="flex items-center gap-1.5">
// //                       <span className="w-2 h-2 rounded-full bg-[#FF5C00]" />
// //                       <span className="text-[11px] font-black text-white tracking-wide uppercase">Coverage Status</span>
// //                     </div>
// //                     <span className="text-xs text-white/70 font-medium font-sans">
// //                       {tooltip.content}
// //                     </span>
// //                   </motion.div>
// //                 )}
// //               </AnimatePresence>
// //             </div>

// //             {/* Map Legend */}
// //             <div className="mt-6 flex flex-wrap justify-center gap-6 text-[11px] uppercase tracking-wider font-bold">
// //               <div className="flex items-center gap-2">
// //                 <span className="w-3 h-3 rounded-md bg-[#FF5C00]/20 border border-[#FF5C00]" />
// //                 <span className="text-white/70 font-mono">Active Coverage (Maharashtra)</span>
// //               </div>
// //               <div className="flex items-center gap-2">
// //                 <div className="relative flex h-3 w-3">
// //                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5C00] opacity-75"></span>
// //                   <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF5C00]"></span>
// //                 </div>
// //                 <span className="text-white/70 font-mono">Nagpur HQ Lab</span>
// //               </div>
// //               <div className="flex items-center gap-2">
// //                 <span className="w-3 h-3 rounded-md bg-[#0F0F0F] border border-[#222222]" />
// //                 <span className="text-white/40 font-mono">Upcoming Regions</span>
// //               </div>
// //             </div>

// //           </div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { MapPin, Truck, ShieldCheck, Clock } from 'lucide-react';
// import { cn } from '@/lib/utils';

// export function NagpurMapSection() {
//   const [svgContent, setSvgContent] = useState<string>('');
//   const [tooltip, setTooltip] = useState<{ x: number; y: number; show: boolean; content: string }>({ x: 0, y: 0, show: false, content: '' });
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     fetch('/india.svg')
//       .then((res) => res.text())
//       .then((data) => {
//         const pinContent = `
//           <g id="nagpur-pin">
//             <circle cx="260" cy="345" r="8" fill="#FF5C00" opacity="0.9" />
//             <circle cx="260" cy="345" r="20" fill="none" stroke="#FF5C00" stroke-width="2">
//               <animate attributeName="r" values="8;35;8" dur="2.5s" repeatCount="indefinite" />
//               <animate attributeName="opacity" values="0.8;0;0.8" dur="2.5s" repeatCount="indefinite" />
//             </circle>
//             <circle cx="260" cy="345" r="35" fill="none" stroke="#FF5C00" stroke-width="1">
//               <animate attributeName="r" values="8;55;8" dur="4s" repeatCount="indefinite" />
//               <animate attributeName="opacity" values="0.5;0;0.5" dur="4s" repeatCount="indefinite" />
//             </circle>
//             <path d="M260,345 C254,334 248,328 260,310 C272,328 266,334 260,345 Z" fill="#FF5C00" stroke="#FFFFFF" stroke-width="1" />
//             <circle cx="260" cy="322" r="3.5" fill="#FFFFFF" />
//           </g>
//         `;
//         setSvgContent(data.replace('</svg>', `${pinContent}</svg>`));
//       })
//       .catch((err) => console.error('Error fetching map:', err));
//   }, []);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const target = e.target as SVGElement;
//     if (target && target.tagName === 'path') {
//       const id = target.getAttribute('id');
//       const name = target.getAttribute('name');
//       const rect = containerRef.current?.getBoundingClientRect();
//       if (!rect) return;
//       const tooltipX = e.clientX - rect.left + 15;
//       const tooltipY = e.clientY - rect.top + 15;
//       if (id === 'mh') {
//         setTooltip({ x: tooltipX, y: tooltipY, show: true, content: 'Maharashtra — Active Service Zone (Nagpur HQ)' });
//       } else if (name) {
//         setTooltip({ x: tooltipX, y: tooltipY, show: true, content: `${name} — Expansion Coming Soon` });
//       }
//     } else {
//       setTooltip((prev) => ({ ...prev, show: false }));
//     }
//   };

//   const handleMouseLeave = () => setTooltip((prev) => ({ ...prev, show: false }));

//   const deliveryFeatures = [
//     { icon: MapPin, title: "Nagpur HQ Cleanroom", desc: "Our ISO ESD-safe diagnostic cleanroom is fully operational in Nagpur for extreme chip repairs." },
//     { icon: Truck, title: "Free Doorstep Pickup", desc: "Zero travel required. We schedule doorstep pickup, repair in our lab, and deliver back to you." },
//     { icon: Clock, title: "48-Hour Turnaround", desc: "Most screen replacements, battery swaps, and minor repairs are resolved within 24 to 48 hours." },
//     { icon: ShieldCheck, title: "OEM-Grade Component Warranty", desc: "We only use original specification manufacturer parts with an absolute up to 1-year warranty." },
//   ];

//   return (
//     <section className="relative bg-black py-20 sm:py-24 md:py-32 border-t border-white/5 z-20 overflow-hidden select-none">
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

//           {/* Left Column */}
//           <div className="lg:col-span-5 space-y-6 sm:space-y-8">
//             <div className="space-y-3 sm:space-y-4">
//               <motion.div initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-2">
//                 <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00] animate-pulse" />
//                 <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#FF5C00]">Active Coverage Region</span>
//               </motion.div>

//               {/* FIX: text-3xl mobile → 4xl sm → 5xl md */}
//               <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white leading-none uppercase">
//                 DELIVERING BEST SERVICE <span className="text-[#FF5C00]">IN NAGPUR</span>
//               </h2>
//               <p className="text-white/60 text-sm leading-relaxed">
//                 Cell Cure Hub is expanding. We are currently delivering doorstep premium repairs, diagnostic services, and hardware restorations across all zones of Nagpur.
//               </p>
//             </div>

//             <div className="space-y-4 sm:space-y-6">
//               {deliveryFeatures.map((feat, i) => {
//                 const Icon = feat.icon;
//                 return (
//                   <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 group">
//                     <div className="flex-shrink-0 p-2 sm:p-2.5 rounded-xl bg-[#FF5C00]/10 border border-[#FF5C00]/20 text-[#FF5C00] group-hover:scale-110 transition-transform duration-300 h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center">
//                       <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
//                     </div>
//                     <div>
//                       <h4 className="text-white font-bold text-xs sm:text-sm tracking-wide uppercase group-hover:text-[#FF5C00] transition-colors duration-300">{feat.title}</h4>
//                       <p className="text-white/50 text-xs mt-1 leading-relaxed">{feat.desc}</p>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Right Column: Map */}
//           <div className="lg:col-span-7 flex flex-col items-center relative">
//             <div
//               ref={containerRef}
//               // FIX: height auto on mobile (was 550px fixed — too tall for phones)
//               className="relative w-full max-w-[500px] h-[380px] sm:h-[480px] lg:h-[550px] flex items-center justify-center border border-white/5 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent p-4 sm:p-6 backdrop-blur-md overflow-hidden"
//               onMouseMove={handleMouseMove}
//               onMouseLeave={handleMouseLeave}
//             >
//               <div className="absolute w-72 h-72 rounded-full bg-[#FF5C00]/5 blur-[80px] pointer-events-none" />

//               <style jsx global>{`
//                 .india-map-svg svg { width: 100%; height: 100%; max-height: 500px; }
//                 .india-map-svg svg path { fill: #0F0F0F; stroke: #222222; stroke-width: 0.8; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); cursor: pointer; }
//                 .india-map-svg svg path:hover { fill: #1A1A1A; stroke: #444444; }
//                 .india-map-svg svg path#mh { fill: rgba(255, 92, 0, 0.12) !important; stroke: #FF5C00 !important; stroke-width: 1.5 !important; filter: drop-shadow(0 0 6px rgba(255, 92, 0, 0.3)); }
//                 .india-map-svg svg path#mh:hover { fill: rgba(255, 92, 0, 0.2) !important; stroke-width: 2.0 !important; }
//                 .india-map-svg svg #nagpur-pin { pointer-events: none; }
//               `}</style>

//               {svgContent ? (
//                 <div className="india-map-svg w-full h-full flex items-center justify-center" dangerouslySetInnerHTML={{ __html: svgContent }} />
//               ) : (
//                 <div className="flex flex-col items-center justify-center space-y-4">
//                   <div className="w-8 h-8 rounded-full border-2 border-t-[#FF5C00] border-r-transparent border-b-transparent border-l-transparent animate-spin" />
//                   <span className="text-white/40 text-xs font-mono uppercase tracking-widest">Loading map...</span>
//                 </div>
//               )}

//               <AnimatePresence>
//                 {tooltip.show && (
//                   <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} style={{ left: tooltip.x, top: tooltip.y }} className="absolute z-30 pointer-events-none bg-black/90 backdrop-blur-xl border border-white/10 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-2xl flex flex-col gap-0.5 whitespace-nowrap max-w-[200px] sm:max-w-none">
//                     <div className="flex items-center gap-1.5">
//                       <span className="w-2 h-2 rounded-full bg-[#FF5C00]" />
//                       <span className="text-[10px] sm:text-[11px] font-black text-white tracking-wide uppercase">Coverage Status</span>
//                     </div>
//                     <span className="text-[10px] sm:text-xs text-white/70 font-medium font-sans truncate">{tooltip.content}</span>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* FIX: Legend — flex-col on mobile to prevent overflow */}
//             <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 text-[11px] uppercase tracking-wider font-bold">
//               <div className="flex items-center gap-2">
//                 <span className="w-3 h-3 rounded-md bg-[#FF5C00]/20 border border-[#FF5C00] flex-shrink-0" />
//                 <span className="text-white/70 font-mono">Active Coverage (Maharashtra)</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="relative flex h-3 w-3 flex-shrink-0">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5C00] opacity-75" />
//                   <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF5C00]" />
//                 </div>
//                 <span className="text-white/70 font-mono">Nagpur HQ Lab</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="w-3 h-3 rounded-md bg-[#0F0F0F] border border-[#222222] flex-shrink-0" />
//                 <span className="text-white/40 font-mono">Upcoming Regions</span>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Truck, ShieldCheck, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

export function NagpurMapSection() {
  const [svgContent, setSvgContent] = useState<string>('');

  // Fetch the India SVG map and inject Nagpur pulsing pin
  useEffect(() => {
    fetch('/india.svg')
      .then((res) => res.text())
      .then((data) => {
        // Find </svg> and inject the pulsing geopin element before it
        const pinContent = `
          <g id="nagpur-pin">
            <!-- Pulsing Rings -->
            <circle cx="220" cy="390" r="15" fill="none" stroke="#FF5C00" stroke-width="2">
              <animate attributeName="r" values="6;35;6" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0;0.8" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="220" cy="390" r="30" fill="none" stroke="#FF5C00" stroke-width="1">
              <animate attributeName="r" values="6;55;6" dur="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0;0.5" dur="4s" repeatCount="indefinite" />
            </circle>
            <!-- Core Location Dot -->
            <circle cx="220" cy="390" r="6" fill="#FF5C00" stroke="#FFFFFF" stroke-width="1.5" />
          </g>
        `;
        const updatedSvg = data.replace('</svg>', `${pinContent}</svg>`);
        setSvgContent(updatedSvg);
      })
      .catch((err) => console.error('Error fetching map:', err));
  }, []);

  const deliveryFeatures = [
    {
      icon: MapPin,
      title: "Nagpur HQ Cleanroom",
      desc: "Our ISO ESD-safe diagnostic cleanroom is fully operational in Nagpur for extreme chip repairs."
    },
    {
      icon: Truck,
      title: "Free Doorstep Pickup",
      desc: "Zero travel required. We schedule doorstep pickup, repair in our lab, and deliver back to you."
    },
    {
      icon: Clock,
      title: "48-Hour Turnaround",
      desc: "Most screen replacements, battery swaps, and minor repairs are resolved within 24 to 48 hours."
    },
    {
      icon: ShieldCheck,
      title: "OEM-Grade Component Warranty",
      desc: "We only use original specification manufacturer parts with an absolute up to 1-year warranty."
    }
  ];

  const headlineWords = "DELIVERING BEST SERVICE IN NAGPUR".split(" ");

  // Motion variants for text reveals
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

  // Motion variants for features list
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <section className="relative bg-black py-24 sm:py-32 border-t border-white/5 z-20 overflow-hidden select-none">

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Text Content */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00] animate-pulse" />
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#FF5C00]">Active Coverage Region</span>
              </motion.div>

              <motion.h2
                variants={titleContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-white leading-[0.95] uppercase flex flex-wrap gap-x-3 gap-y-1"
              >
                {headlineWords.map((word, idx) => (
                  <span key={idx} className="inline-block overflow-hidden h-fit py-1">
                    <motion.span
                      variants={wordVariants}
                      className={cn(
                        "inline-block origin-bottom-left",
                        (word === "IN" || word === "NAGPUR") && "text-[#FF5C00]"
                      )}
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-white/60 text-sm sm:text-base leading-relaxed"
              >
                Cell Cure Hub is expanding. We are currently delivering doorstep premium repairs, diagnostic services, and hardware restorations across all zones of Nagpur.
              </motion.p>
            </div>

            {/* Features List */}
            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              {deliveryFeatures.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-390 group"
                  >
                    <div className="flex-shrink-0 p-2.5 rounded-xl bg-[#FF5C00]/10 border border-[#FF5C00]/20 text-[#FF5C00] group-hover:scale-110 transition-transform duration-390 h-10 w-10 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm tracking-wide uppercase group-hover:text-[#FF5C00] transition-colors duration-390">
                        {feat.title}
                      </h4>
                      <p className="text-white/50 text-xs sm:text-sm mt-1 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: India SVG Map */}
          <div className="lg:col-span-7 flex flex-col items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 18,
                delay: 0.15
              }}
              className="relative w-full max-w-[500px] h-[380px] sm:h-[450px] lg:h-[550px] flex items-center justify-center border border-white/5 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent p-4 sm:p-6 backdrop-blur-md overflow-hidden pointer-events-none select-none"
            >
              {/* Glow Behind Map */}
              <div className="absolute w-72 h-72 rounded-full bg-[#FF5C00]/5 blur-[80px] pointer-events-none" />

              {/* Scoped CSS to Style the SVG Map paths */}
              <style dangerouslySetInnerHTML={{
                __html: `
                .india-map-svg svg {
                  width: 100%;
                  height: 100%;
                  max-height: 500px;
                }
                .india-map-svg svg path {
                  fill: transparent;
                  stroke: #222222;
                  stroke-width: 0.8;
                  opacity: 0;
                  animation: pathDraw 2.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                  cursor: default;
                }
                .india-map-svg svg path#mh {
                  fill: transparent;
                  stroke: #FF5C00 !important;
                  stroke-width: 1.5 !important;
                  filter: drop-shadow(0 0 6px rgba(255, 92, 0, 0.3));
                  animation: mhDraw 2.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                /* Pulsing pin styling with drop effect */
                .india-map-svg svg #nagpur-pin {
                  pointer-events: none;
                  transform-origin: 220px 390px;
                  animation: pinDrop 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 1.8s forwards;
                  opacity: 0;
                  transform: scale(0) translate(0, -20px);
                }
                @keyframes pathDraw {
                  0% {
                    stroke-dasharray: 1220;
                    stroke-dashoffset: 1220;
                    fill: transparent;
                    opacity: 0;
                  }
                  30% {
                    opacity: 0.5;
                  }
                  75% {
                    stroke-dashoffset: 0;
                    fill: transparent;
                  }
                  100% {
                    stroke-dashoffset: 0;
                    fill: #0F0F0F;
                    opacity: 1;
                  }
                }
                @keyframes mhDraw {
                  0% {
                    stroke-dasharray: 1220;
                    stroke-dashoffset: 1220;
                    fill: transparent;
                    opacity: 0;
                  }
                  30% {
                    opacity: 0.8;
                  }
                  70% {
                    stroke-dashoffset: 0;
                    fill: transparent;
                  }
                  100% {
                    stroke-dashoffset: 0;
                    fill: rgba(255, 92, 0, 0.12);
                    opacity: 1;
                  }
                }
                @keyframes pinDrop {
                  to {
                    opacity: 1;
                    transform: scale(1) translate(0, 0);
                  }
                }
              `}} />

              {svgContent ? (
                <div
                  className="india-map-svg w-full h-full flex items-center justify-center"
                  dangerouslySetInnerHTML={{ __html: svgContent }}
                />
              ) : (
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="w-8 h-8 rounded-full border-2 border-t-[#FF5C00] border-r-transparent border-b-transparent border-l-transparent animate-spin" />
                  <span className="text-white/40 text-xs font-mono uppercase tracking-widest">Loading map...</span>
                </div>
              )}
            </motion.div>



          </div>

        </div>
      </div>
    </section>
  );
}
