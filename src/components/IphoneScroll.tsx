// // "use client";

// // import { useEffect, useRef, useState, useCallback } from "react";
// // import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

// // const TOTAL_FRAMES = 60;
// // const FRAME_PREFIX = "/iphone-images/ezgif-frame-";

// // // Pad frame index to 3 digits: 001, 002, ...
// // function getFramePath(i: number) {
// //   return `${FRAME_PREFIX}${String(i + 1).padStart(3, "0")}.jpg`;
// // }

// // interface TextOverlay {
// //   startProgress: number;
// //   endProgress: number;
// //   headline: string;
// //   sub: string;
// //   align: "left" | "right" | "center";
// // }

// // const TEXT_OVERLAYS: TextOverlay[] = [
// //   {
// //     startProgress: 0,
// //     endProgress: 0.22,
// //     headline: "Titanium. Reimagined.",
// //     sub: "iPhone 17 Pro Max — The most advanced iPhone ever created.",
// //     align: "center",
// //   },
// //   {
// //     startProgress: 0.25,
// //     endProgress: 0.48,
// //     headline: "Forged in aerospace-grade titanium.",
// //     sub: "Lighter than steel. Stronger than ever. Built to outlast everything.",
// //     align: "left",
// //   },
// //   {
// //     startProgress: 0.52,
// //     endProgress: 0.75,
// //     headline: "Camera system. Redefined.",
// //     sub: "Five-lens array. Computational photography at its absolute peak.",
// //     align: "right",
// //   },
// //   {
// //     startProgress: 0.80,
// //     endProgress: 1.0,
// //     headline: "The future is now.",
// //     sub: "Order iPhone 17 Pro Max. Available now.",
// //     align: "center",
// //   },
// // ];

// // function TextSection({
// //   overlay,
// //   scrollProgress,
// // }: {
// //   overlay: TextOverlay;
// //   scrollProgress: MotionValue<number>;
// // }) {
// //   const { startProgress, endProgress, headline, sub, align } = overlay;
// //   const mid = (startProgress + endProgress) / 2;
// //   const fadeIn = startProgress + (mid - startProgress) * 0.3;
// //   const fadeOut = mid + (endProgress - mid) * 0.7;

// //   const opacity = useTransform(
// //     scrollProgress,
// //     [startProgress, fadeIn, fadeOut, endProgress],
// //     [0, 1, 1, 0]
// //   );
// //   const y = useTransform(
// //     scrollProgress,
// //     [startProgress, fadeIn, fadeOut, endProgress],
// //     [28, 0, 0, -20]
// //   );

// //   const alignClass =
// //     align === "left"
// //       ? "items-start text-left pl-8 md:pl-20"
// //       : align === "right"
// //       ? "items-end text-right pr-8 md:pr-20"
// //       : "items-center text-center";

// //   return (
// //     <motion.div
// //       style={{ opacity, y }}
// //       className={`absolute inset-0 flex flex-col justify-center pointer-events-none z-10 ${alignClass}`}
// //     >
// //       <div className="max-w-md space-y-4">
// //         <h2
// //           className="text-3xl md:text-5xl font-semibold tracking-tight text-white/90 leading-tight"
// //           style={{ fontFamily: "'SF Pro Display', 'Helvetica Neue', sans-serif" }}
// //         >
// //           {headline}
// //         </h2>
// //         <p
// //           className="text-base md:text-lg text-white/55 font-light leading-relaxed"
// //           style={{ fontFamily: "'SF Pro Text', 'Helvetica Neue', sans-serif" }}
// //         >
// //           {sub}
// //         </p>
// //         {overlay.align === "center" && overlay.startProgress > 0.5 && (
// //           <motion.button
// //             className="mt-4 px-8 py-3 rounded-full text-sm font-medium tracking-wide pointer-events-auto"
// //             style={{
// //               background: "rgba(255,255,255,0.12)",
// //               border: "1px solid rgba(255,255,255,0.2)",
// //               color: "rgba(255,255,255,0.9)",
// //               backdropFilter: "blur(12px)",
// //             }}
// //             whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.18)" }}
// //             whileTap={{ scale: 0.97 }}
// //           >
// //             Order Now →
// //           </motion.button>
// //         )}
// //       </div>
// //     </motion.div>
// //   );
// // }

// // export default function IphoneScroll() {
// //   const containerRef = useRef<HTMLDivElement>(null);
// //   const canvasRef = useRef<HTMLCanvasElement>(null);
// //   const imagesRef = useRef<HTMLImageElement[]>([]);
// //   const [loaded, setLoaded] = useState(false);
// //   const [loadProgress, setLoadProgress] = useState(0);
// //   const currentFrameRef = useRef(0);
// //   const rafRef = useRef<number | null>(null);

// //   const { scrollYProgress } = useScroll({
// //     target: containerRef,
// //     offset: ["start start", "end end"],
// //   });

// //   // Preload all frames
// //   useEffect(() => {
// //     let loaded = 0;
// //     const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);

// //     const onLoad = () => {
// //       loaded++;
// //       setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
// //       if (loaded === TOTAL_FRAMES) {
// //         imagesRef.current = images;
// //         setLoaded(true);
// //       }
// //     };

// //     for (let i = 0; i < TOTAL_FRAMES; i++) {
// //       const img = new Image();
// //       img.src = getFramePath(i);
// //       img.onload = onLoad;
// //       img.onerror = onLoad; // don't stall on missing frames
// //       images[i] = img;
// //     }
// //   }, []);

// //   const drawFrame = useCallback((index: number) => {
// //     const canvas = canvasRef.current;
// //     if (!canvas) return;
// //     const ctx = canvas.getContext("2d");
// //     if (!ctx) return;
// //     const img = imagesRef.current[index];
// //     if (!img?.complete || !img.naturalWidth) return;

// //     const { width: cw, height: ch } = canvas;
// //     ctx.clearRect(0, 0, cw, ch);

// //     // Contain with slight padding so phone floats
// //     const scale = Math.min(cw / img.naturalWidth, ch / img.naturalHeight) * 0.92;
// //     const dw = img.naturalWidth * scale;
// //     const dh = img.naturalHeight * scale;
// //     const dx = (cw - dw) / 2;
// //     const dy = (ch - dh) / 2;

// //     ctx.drawImage(img, dx, dy, dw, dh);
// //   }, []);

// //   // Resize canvas to DPR-aware size
// //   const resizeCanvas = useCallback(() => {
// //     const canvas = canvasRef.current;
// //     if (!canvas) return;
// //     const dpr = window.devicePixelRatio || 1;
// //     canvas.width = window.innerWidth * dpr;
// //     canvas.height = window.innerHeight * dpr;
// //     canvas.style.width = `${window.innerWidth}px`;
// //     canvas.style.height = `${window.innerHeight}px`;
// //     const ctx = canvas.getContext("2d");
// //     if (ctx) ctx.scale(dpr, dpr);
// //     drawFrame(currentFrameRef.current);
// //   }, [drawFrame]);

// //   useEffect(() => {
// //     resizeCanvas();
// //     window.addEventListener("resize", resizeCanvas);
// //     return () => window.removeEventListener("resize", resizeCanvas);
// //   }, [resizeCanvas]);

// //   // Smooth scroll → frame with lerp
// //   useEffect(() => {
// //     if (!loaded) return;

// //     let targetFrame = 0;
// //     let displayFrame = 0;

// //     const unsubscribe = scrollYProgress.on("change", (v) => {
// //       targetFrame = Math.min(
// //         TOTAL_FRAMES - 1,
// //         Math.max(0, Math.floor(v * (TOTAL_FRAMES - 1)))
// //       );
// //     });

// //     const animate = () => {
// //       // Lerp for smoothness — tweak 0.12 for faster/slower catch-up
// //       displayFrame += (targetFrame - displayFrame) * 0.18;
// //       const frameIdx = Math.round(displayFrame);
// //       if (frameIdx !== currentFrameRef.current) {
// //         currentFrameRef.current = frameIdx;
// //         drawFrame(frameIdx);
// //       }
// //       rafRef.current = requestAnimationFrame(animate);
// //     };

// //     rafRef.current = requestAnimationFrame(animate);

// //     return () => {
// //       unsubscribe();
// //       if (rafRef.current) cancelAnimationFrame(rafRef.current);
// //     };
// //   }, [loaded, scrollYProgress, drawFrame]);

// //   return (
// //     <div
// //       ref={containerRef}
// //       className="relative"
// //       style={{ height: "400vh" }}
// //     >
// //       {/* Loading screen */}
// //       {!loaded && (
// //         <div
// //           className="fixed inset-0 z-50 flex flex-col items-center justify-center"
// //           style={{ background: "#050505" }}
// //         >
// //           <div className="space-y-6 text-center">
// //             <div
// //               className="text-lg tracking-[0.3em] uppercase text-white/40 font-light"
// //               style={{ fontFamily: "'SF Pro Display', sans-serif" }}
// //             >
// //               iPhone 17 Pro Max
// //             </div>
// //             {/* Ring spinner */}
// //             <div className="relative w-16 h-16 mx-auto">
// //               <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
// //                 <circle
// //                   cx="32" cy="32" r="28"
// //                   fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3"
// //                 />
// //                 <circle
// //                   cx="32" cy="32" r="28"
// //                   fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="3"
// //                   strokeLinecap="round"
// //                   strokeDasharray={`${(loadProgress / 100) * 175.9} 175.9`}
// //                   style={{ transition: "stroke-dasharray 0.2s ease" }}
// //                 />
// //               </svg>
// //               <span
// //                 className="absolute inset-0 flex items-center justify-center text-xs text-white/50"
// //                 style={{ fontFamily: "'SF Pro Text', sans-serif" }}
// //               >
// //                 {loadProgress}%
// //               </span>
// //             </div>
// //             <div
// //               className="text-xs tracking-widest text-white/25 uppercase"
// //               style={{ fontFamily: "'SF Pro Text', sans-serif" }}
// //             >
// //               Loading experience
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Sticky viewport */}
// //       <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ background: "#050505" }}>
// //         {/* Subtle radial glow matching the warm orange of the phone */}
// //         <div
// //           className="absolute inset-0 pointer-events-none"
// //           style={{
// //             background:
// //               "radial-gradient(ellipse 60% 50% at 50% 55%, rgba(180,80,20,0.07) 0%, transparent 70%)",
// //           }}
// //         />

// //         {/* Canvas */}
// //         <canvas
// //           ref={canvasRef}
// //           className="absolute inset-0"
// //           style={{ display: loaded ? "block" : "none" }}
// //         />

// //         {/* Text overlays */}
// //         {loaded &&
// //           TEXT_OVERLAYS.map((overlay, i) => (
// //             <TextSection key={i} overlay={overlay} scrollProgress={scrollYProgress} />
// //           ))}

// //         {/* Scroll hint — fades out as user starts scrolling */}
// //         {loaded && (
// //           <motion.div
// //             className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
// //             style={{
// //               opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]),
// //             }}
// //           >
// //             <span
// //               className="text-xs tracking-[0.2em] uppercase text-white/30"
// //               style={{ fontFamily: "'SF Pro Text', sans-serif" }}
// //             >
// //               Scroll to explore
// //             </span>
// //             <motion.div
// //               animate={{ y: [0, 6, 0] }}
// //               transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
// //               className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
// //             />
// //           </motion.div>
// //         )}

// //         {/* Top nav */}
// //         {loaded && (
// //           <motion.nav
// //             className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-6 z-20 pointer-events-none"
// //             initial={{ opacity: 0, y: -10 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.4, duration: 0.8 }}
// //           >
// //             <span
// //               className="text-white/80 text-sm tracking-[0.15em] uppercase font-medium"
// //               style={{ fontFamily: "'SF Pro Display', sans-serif" }}
// //             >
// //               Apple
// //             </span>
// //             <span
// //               className="text-white/35 text-xs tracking-widest uppercase"
// //               style={{ fontFamily: "'SF Pro Text', sans-serif" }}
// //             >
// //               iPhone 17 Pro Max
// //             </span>
// //           </motion.nav>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// "use client";

// import { useEffect, useRef, useState, useCallback } from "react";
// import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

// const TOTAL_FRAMES = 60;
// const FRAME_PREFIX = "/iphone-images/ezgif-frame-";

// function getFramePath(i: number) {
//   return `${FRAME_PREFIX}${String(i + 1).padStart(3, "0")}.jpg`;
// }

// interface TextOverlay {
//   startProgress: number;
//   endProgress: number;
//   headline: string;
//   sub: string;
//   align: "left" | "right" | "center";
// }

// const TEXT_OVERLAYS: TextOverlay[] = [
//   {
//     startProgress: 0,
//     endProgress: 0.22,
//     headline: "Titanium. Reimagined.",
//     sub: "iPhone 17 Pro Max — The most advanced iPhone ever created.",
//     align: "center",
//   },
//   {
//     startProgress: 0.25,
//     endProgress: 0.48,
//     headline: "Forged in aerospace-grade titanium.",
//     sub: "Lighter than steel. Stronger than ever. Built to outlast everything.",
//     align: "left",
//   },
//   {
//     startProgress: 0.52,
//     endProgress: 0.75,
//     headline: "Camera system. Redefined.",
//     sub: "Five-lens array. Computational photography at its absolute peak.",
//     align: "right",
//   },
//   {
//     startProgress: 0.8,
//     endProgress: 1.0,
//     headline: "The future is now.",
//     sub: "Order iPhone 17 Pro Max. Available now.",
//     align: "center",
//   },
// ];

// function TextSection({
//   overlay,
//   scrollProgress,
// }: {
//   overlay: TextOverlay;
//   scrollProgress: MotionValue<number>;
// }) {
//   const { startProgress, endProgress, headline, sub, align } = overlay;
//   const mid = (startProgress + endProgress) / 2;
//   const fadeIn = startProgress + (mid - startProgress) * 0.3;
//   const fadeOut = mid + (endProgress - mid) * 0.7;

//   const opacity = useTransform(
//     scrollProgress,
//     [startProgress, fadeIn, fadeOut, endProgress],
//     [0, 1, 1, 0]
//   );
//   const y = useTransform(
//     scrollProgress,
//     [startProgress, fadeIn, fadeOut, endProgress],
//     [28, 0, 0, -20]
//   );

//   const alignClass =
//     align === "left"
//       ? "items-start text-left pl-8 md:pl-20"
//       : align === "right"
//       ? "items-end text-right pr-8 md:pr-20"
//       : "items-center text-center";

//   return (
//     <motion.div
//       style={{ opacity, y }}
//       className={`absolute inset-0 flex flex-col justify-center pointer-events-none z-10 ${alignClass}`}
//     >
//       <div className="max-w-md space-y-4">
//         <h2
//           className="text-3xl md:text-5xl font-semibold tracking-tight text-white/90 leading-tight"
//           style={{ fontFamily: "'SF Pro Display', 'Helvetica Neue', sans-serif" }}
//         >
//           {headline}
//         </h2>
//         <p
//           className="text-base md:text-lg text-white/55 font-light leading-relaxed"
//           style={{ fontFamily: "'SF Pro Text', 'Helvetica Neue', sans-serif" }}
//         >
//           {sub}
//         </p>
//         {overlay.align === "center" && overlay.startProgress > 0.5 && (
//           <motion.button
//             className="mt-4 px-8 py-3 rounded-full text-sm font-medium tracking-wide pointer-events-auto"
//             style={{
//               background: "rgba(255,255,255,0.12)",
//               border: "1px solid rgba(255,255,255,0.2)",
//               color: "rgba(255,255,255,0.9)",
//               backdropFilter: "blur(12px)",
//             }}
//             whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.18)" }}
//             whileTap={{ scale: 0.97 }}
//           >
//             Order Now →
//           </motion.button>
//         )}
//       </div>
//     </motion.div>
//   );
// }

// export default function IphoneScroll() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const imagesRef = useRef<HTMLImageElement[]>([]);
//   const [loaded, setLoaded] = useState(false);
//   const [loadProgress, setLoadProgress] = useState(0);
//   const currentFrameRef = useRef(0);
//   const rafRef = useRef<number | null>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   // ✅ FIX: useTransform at top level — NOT inside JSX
//   const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

//   // Preload all frames
//   useEffect(() => {
//     let done = 0;
//     const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);

//     const onLoad = () => {
//       done++;
//       setLoadProgress(Math.round((done / TOTAL_FRAMES) * 100));
//       if (done === TOTAL_FRAMES) {
//         imagesRef.current = images;
//         setLoaded(true);
//       }
//     };

//     for (let i = 0; i < TOTAL_FRAMES; i++) {
//       const img = new Image();
//       img.src = getFramePath(i);
//       img.onload = onLoad;
//       img.onerror = onLoad;
//       images[i] = img;
//     }
//   }, []);

//   const drawFrame = useCallback((index: number) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;
//     const img = imagesRef.current[index];
//     if (!img?.complete || !img.naturalWidth) return;

//     const { width: cw, height: ch } = canvas;
//     ctx.clearRect(0, 0, cw, ch);

//     const scale = Math.min(cw / img.naturalWidth, ch / img.naturalHeight) * 0.92;
//     const dw = img.naturalWidth * scale;
//     const dh = img.naturalHeight * scale;
//     const dx = (cw - dw) / 2;
//     const dy = (ch - dh) / 2;

//     ctx.drawImage(img, dx, dy, dw, dh);
//   }, []);

//   const resizeCanvas = useCallback(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const dpr = window.devicePixelRatio || 1;
//     canvas.width = window.innerWidth * dpr;
//     canvas.height = window.innerHeight * dpr;
//     canvas.style.width = `${window.innerWidth}px`;
//     canvas.style.height = `${window.innerHeight}px`;
//     const ctx = canvas.getContext("2d");
//     if (ctx) ctx.scale(dpr, dpr);
//     drawFrame(currentFrameRef.current);
//   }, [drawFrame]);

//   useEffect(() => {
//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);
//     return () => window.removeEventListener("resize", resizeCanvas);
//   }, [resizeCanvas]);

//   useEffect(() => {
//     if (!loaded) return;

//     let targetFrame = 0;
//     let displayFrame = 0;

//     const unsubscribe = scrollYProgress.on("change", (v) => {
//       targetFrame = Math.min(
//         TOTAL_FRAMES - 1,
//         Math.max(0, Math.floor(v * (TOTAL_FRAMES - 1)))
//       );
//     });

//     const animate = () => {
//       displayFrame += (targetFrame - displayFrame) * 0.18;
//       const frameIdx = Math.round(displayFrame);
//       if (frameIdx !== currentFrameRef.current) {
//         currentFrameRef.current = frameIdx;
//         drawFrame(frameIdx);
//       }
//       rafRef.current = requestAnimationFrame(animate);
//     };

//     rafRef.current = requestAnimationFrame(animate);

//     return () => {
//       unsubscribe();
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, [loaded, scrollYProgress, drawFrame]);

//   return (
//     <div ref={containerRef} className="relative" style={{ height: "400vh" }}>
//       {/* Loading screen */}
//       {!loaded && (
//         <div
//           className="fixed inset-0 z-50 flex flex-col items-center justify-center"
//           style={{ background: "#050505" }}
//         >
//           <div className="space-y-6 text-center">
//             <div
//               className="text-lg tracking-[0.3em] uppercase text-white/40 font-light"
//               style={{ fontFamily: "'SF Pro Display', sans-serif" }}
//             >
//               iPhone 17 Pro Max
//             </div>
//             <div className="relative w-16 h-16 mx-auto">
//               <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
//                 <circle
//                   cx="32" cy="32" r="28"
//                   fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3"
//                 />
//                 <circle
//                   cx="32" cy="32" r="28"
//                   fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="3"
//                   strokeLinecap="round"
//                   strokeDasharray={`${(loadProgress / 100) * 175.9} 175.9`}
//                   style={{ transition: "stroke-dasharray 0.2s ease" }}
//                 />
//               </svg>
//               <span
//                 className="absolute inset-0 flex items-center justify-center text-xs text-white/50"
//                 style={{ fontFamily: "'SF Pro Text', sans-serif" }}
//               >
//                 {loadProgress}%
//               </span>
//             </div>
//             <div
//               className="text-xs tracking-widest text-white/25 uppercase"
//               style={{ fontFamily: "'SF Pro Text', sans-serif" }}
//             >
//               Loading experience
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Sticky viewport */}
//       <div
//         className="sticky top-0 h-screen w-full overflow-hidden"
//         style={{ background: "#050505" }}
//       >
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background:
//               "radial-gradient(ellipse 60% 50% at 50% 55%, rgba(180,80,20,0.07) 0%, transparent 70%)",
//           }}
//         />

//         <canvas
//           ref={canvasRef}
//           className="absolute inset-0"
//           style={{ display: loaded ? "block" : "none" }}
//         />

//         {loaded &&
//           TEXT_OVERLAYS.map((overlay, i) => (
//             <TextSection key={i} overlay={overlay} scrollProgress={scrollYProgress} />
//           ))}

//         {/* ✅ FIX: scrollHintOpacity variable use ho raha hai, inline hook nahi */}
//         {loaded && (
//           <motion.div
//             style={{ opacity: scrollHintOpacity }}
//             className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
//           >
//             <span
//               className="text-xs tracking-[0.2em] uppercase text-white/30"
//               style={{ fontFamily: "'SF Pro Text', sans-serif" }}
//             >
//               Scroll to explore
//             </span>
//             <motion.div
//               animate={{ y: [0, 6, 0] }}
//               transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
//               className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
//             />
//           </motion.div>
//         )}

//         {loaded && (
//           <motion.nav
//             className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-6 z-20 pointer-events-none"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//           >
//             <span
//               className="text-white/80 text-sm tracking-[0.15em] uppercase font-medium"
//               style={{ fontFamily: "'SF Pro Display', sans-serif" }}
//             >
//               Apple
//             </span>
//             <span
//               className="text-white/35 text-xs tracking-widest uppercase"
//               style={{ fontFamily: "'SF Pro Text', sans-serif" }}
//             >
//               iPhone 17 Pro Max
//             </span>
//           </motion.nav>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

const TOTAL_FRAMES = 60;
const FRAME_PREFIX = "/iphone-images/ezgif-frame-";

function getFramePath(i: number) {
  return `${FRAME_PREFIX}${String(i + 1).padStart(3, "0")}.jpg`;
}

interface TextOverlay {
  startProgress: number;
  endProgress: number;
  headline: string;
  sub: string;
  align: "left" | "right" | "center";
}

const TEXT_OVERLAYS: TextOverlay[] = [
  {
    startProgress: 0,
    endProgress: 0.22,
    headline: "Titanium. Reimagined.",
    sub: "iPhone 17 Pro Max — The most advanced iPhone ever created.",
    align: "center",
  },
  {
    startProgress: 0.25,
    endProgress: 0.48,
    headline: "Forged in aerospace-grade titanium.",
    sub: "Lighter than steel. Stronger than ever. Built to outlast everything.",
    align: "left",
  },
  {
    startProgress: 0.52,
    endProgress: 0.75,
    headline: "Camera system. Redefined.",
    sub: "Five-lens array. Computational photography at its absolute peak.",
    align: "right",
  },
  {
    startProgress: 0.8,
    endProgress: 1.0,
    headline: "The future is now.",
    sub: "Order iPhone 17 Pro Max. Available now.",
    align: "center",
  },
];

function TextSection({
  overlay,
  scrollProgress,
}: {
  overlay: TextOverlay;
  scrollProgress: MotionValue<number>;
}) {
  const { startProgress, endProgress, headline, sub, align } = overlay;
  const mid = (startProgress + endProgress) / 2;
  const fadeIn = startProgress + (mid - startProgress) * 0.3;
  const fadeOut = mid + (endProgress - mid) * 0.7;

  const opacity = useTransform(
    scrollProgress,
    [startProgress, fadeIn, fadeOut, endProgress],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    scrollProgress,
    [startProgress, fadeIn, fadeOut, endProgress],
    [28, 0, 0, -20]
  );

  const alignClass =
    align === "left"
      ? "items-start text-left pl-8 md:pl-20"
      : align === "right"
      ? "items-end text-right pr-8 md:pr-20"
      : "items-center text-center";

  return (
    <motion.div
      style={{ opacity, y }}
      className={`absolute inset-0 flex flex-col justify-center pointer-events-none z-10 ${alignClass}`}
    >
      <div className="max-w-md space-y-4">
        <h2
          className="text-3xl md:text-5xl font-semibold tracking-tight text-white/90 leading-tight"
          style={{ fontFamily: "'SF Pro Display', 'Helvetica Neue', sans-serif" }}
        >
          {headline}
        </h2>
        <p
          className="text-base md:text-lg text-white/55 font-light leading-relaxed"
          style={{ fontFamily: "'SF Pro Text', 'Helvetica Neue', sans-serif" }}
        >
          {sub}
        </p>
        {overlay.align === "center" && overlay.startProgress > 0.5 && (
          <motion.button
            className="mt-4 px-8 py-3 rounded-full text-sm font-medium tracking-wide pointer-events-auto"
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(12px)",
            }}
            whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.18)" }}
            whileTap={{ scale: 0.97 }}
          >
            Order Now →
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}

export default function IphoneScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ✅ useTransform at top level
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  // Preload all frames
  useEffect(() => {
    let done = 0;
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);

    const onLoad = () => {
      done++;
      setLoadProgress(Math.round((done / TOTAL_FRAMES) * 100));
      if (done === TOTAL_FRAMES) {
        imagesRef.current = images;
        setLoaded(true);
      }
    };

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = onLoad;
      img.onerror = onLoad;
      images[i] = img;
    }
  }, []);

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const img = imagesRef.current[index];
    if (!img?.complete || !img.naturalWidth) return;

    // ✅ FIX: Use CSS pixel dimensions (offsetWidth/Height), NOT raw canvas.width/height
    // canvas.width/height are DPR-multiplied (e.g. 2x on retina), so centering math
    // was placing the image at the wrong position. offsetWidth/Height are true CSS pixels.
    const cw = canvas.offsetWidth;
    const ch = canvas.offsetHeight;

    // Clear using raw canvas dimensions (actual backing buffer)
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();

    const scale = Math.min(cw / img.naturalWidth, ch / img.naturalHeight) * 0.92;
    const dw = img.naturalWidth * scale;
    const dh = img.naturalHeight * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;

    ctx.drawImage(img, dx, dy, dw, dh);
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;

    // ✅ FIX: Size canvas to full viewport — not the container's offset width
    // which might be narrower if a sidebar or scrollbar affects layout.
    const cssW = window.innerWidth;
    const cssH = window.innerHeight;

    canvas.width = cssW * dpr;
    canvas.height = cssH * dpr;
    canvas.style.width = `${cssW}px`;
    canvas.style.height = `${cssH}px`;

    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);

    drawFrame(currentFrameRef.current);
  }, [drawFrame]);

  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [resizeCanvas]);

  useEffect(() => {
    if (!loaded) return;

    let targetFrame = 0;
    let displayFrame = 0;

    const unsubscribe = scrollYProgress.on("change", (v) => {
      targetFrame = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.floor(v * (TOTAL_FRAMES - 1)))
      );
    });

    const animate = () => {
      displayFrame += (targetFrame - displayFrame) * 0.18;
      const frameIdx = Math.round(displayFrame);
      if (frameIdx !== currentFrameRef.current) {
        currentFrameRef.current = frameIdx;
        drawFrame(frameIdx);
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      unsubscribe();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [loaded, scrollYProgress, drawFrame]);

  return (
    // ✅ FIX: Force container to always start at left:0 and span full viewport width.
    // Without this, if a parent has padding or a sidebar, the sticky child inherits
    // the offset and the canvas appears shifted.
    <div
      ref={containerRef}
      className="relative"
      style={{ height: "400vh", marginLeft: 0, width: "100%" }}
    >
      {/* Loading screen */}
      {!loaded && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{ background: "#050505" }}
        >
          <div className="space-y-6 text-center">
            <div
              className="text-lg tracking-[0.3em] uppercase text-white/40 font-light"
              style={{ fontFamily: "'SF Pro Display', sans-serif" }}
            >
              iPhone 17 Pro Max
            </div>
            <div className="relative w-16 h-16 mx-auto">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
                <circle
                  cx="32" cy="32" r="28"
                  fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3"
                />
                <circle
                  cx="32" cy="32" r="28"
                  fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={`${(loadProgress / 100) * 175.9} 175.9`}
                  style={{ transition: "stroke-dasharray 0.2s ease" }}
                />
              </svg>
              <span
                className="absolute inset-0 flex items-center justify-center text-xs text-white/50"
                style={{ fontFamily: "'SF Pro Text', sans-serif" }}
              >
                {loadProgress}%
              </span>
            </div>
            <div
              className="text-xs tracking-widest text-white/25 uppercase"
              style={{ fontFamily: "'SF Pro Text', sans-serif" }}
            >
              Loading experience
            </div>
          </div>
        </div>
      )}

      {/* ✅ FIX: sticky viewport pinned to left:0, full 100vw — prevents any parent
          padding/margin/sidebar from shifting this section off-center */}
      <div
        className="sticky top-0 h-screen overflow-hidden"
        style={{
          background: "#050505",
          left: 0,
          width: "100vw",
          // If a parent has padding-left (e.g. sidebar layout), pull this back:
          marginLeft: "calc(-1 * ((100vw - 100%) / 2))",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 55%, rgba(180,80,20,0.07) 0%, transparent 70%)",
          }}
        />

        <canvas
          ref={canvasRef}
          className="absolute inset-0"
          style={{ display: loaded ? "block" : "none" }}
        />

        {loaded &&
          TEXT_OVERLAYS.map((overlay, i) => (
            <TextSection key={i} overlay={overlay} scrollProgress={scrollYProgress} />
          ))}

        {loaded && (
          <motion.div
            style={{ opacity: scrollHintOpacity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
          >
            <span
              className="text-xs tracking-[0.2em] uppercase text-white/30"
              style={{ fontFamily: "'SF Pro Text', sans-serif" }}
            >
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
            />
          </motion.div>
        )}

        {loaded && (
          <motion.nav
            className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-6 z-20 pointer-events-none"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span
              className="text-white/80 text-sm tracking-[0.15em] uppercase font-medium"
              style={{ fontFamily: "'SF Pro Display', sans-serif" }}
            >
              Apple
            </span>
            <span
              className="text-white/35 text-xs tracking-widest uppercase"
              style={{ fontFamily: "'SF Pro Text', sans-serif" }}
            >
              iPhone 17 Pro Max
            </span>
          </motion.nav>
        )}
      </div>
    </div>
  );
}