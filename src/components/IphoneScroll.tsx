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

//   // ✅ useTransform at top level
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

//     // ✅ FIX: Use CSS pixel dimensions (offsetWidth/Height), NOT raw canvas.width/height
//     // canvas.width/height are DPR-multiplied (e.g. 2x on retina), so centering math
//     // was placing the image at the wrong position. offsetWidth/Height are true CSS pixels.
//     const cw = canvas.offsetWidth;
//     const ch = canvas.offsetHeight;

//     // Clear using raw canvas dimensions (actual backing buffer)
//     ctx.save();
//     ctx.setTransform(1, 0, 0, 1, 0, 0);
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.restore();

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

//     // ✅ FIX: Size canvas to full viewport — not the container's offset width
//     // which might be narrower if a sidebar or scrollbar affects layout.
//     const cssW = window.innerWidth;
//     const cssH = window.innerHeight;

//     canvas.width = cssW * dpr;
//     canvas.height = cssH * dpr;
//     canvas.style.width = `${cssW}px`;
//     canvas.style.height = `${cssH}px`;

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
//     // ✅ FIX: Force container to always start at left:0 and span full viewport width.
//     // Without this, if a parent has padding or a sidebar, the sticky child inherits
//     // the offset and the canvas appears shifted.
//     <div
//       ref={containerRef}
//       className="relative"
//       style={{ height: "400vh", marginLeft: 0, width: "100%" }}
//     >
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

//       {/* ✅ FIX: sticky viewport pinned to left:0, full 100vw — prevents any parent
//           padding/margin/sidebar from shifting this section off-center */}
//       <div
//         className="sticky top-0 h-screen overflow-hidden"
//         style={{
//           background: "#050505",
//           left: 0,
//           width: "100vw",
//           // If a parent has padding-left (e.g. sidebar layout), pull this back:
//           marginLeft: "calc(-1 * ((100vw - 100%) / 2))",
//         }}
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

// "use client";

// import { useEffect, useRef, useState, useCallback } from "react";

// import {
//   useScroll,
//   useTransform,
//   useMotionTemplate,
//   motion,
//   MotionValue,
// } from "framer-motion";

// import Lenis from "lenis";

// // IMPORTANT:
// // keep this SAME as your actual frame count
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
//     sub: "Lighter than steel. Stronger than ever.",
//     align: "left",
//   },

//   {
//     startProgress: 0.52,
//     endProgress: 0.75,
//     headline: "Camera system. Redefined.",
//     sub: "Five-lens array engineered for cinematic imaging.",
//     align: "right",
//   },

//   {
//     startProgress: 0.8,
//     endProgress: 1,
//     headline: "The future is now.",
//     sub: "Experience the next evolution of iPhone.",
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
//   const {
//     startProgress,
//     endProgress,
//     headline,
//     sub,
//     align,
//   } = overlay;

//   const opacity = useTransform(
//     scrollProgress,
//     [
//       startProgress,
//       startProgress + 0.04,
//       endProgress - 0.06,
//       endProgress,
//     ],
//     [0, 1, 1, 0]
//   );

//   const y = useTransform(
//     scrollProgress,
//     [
//       startProgress,
//       startProgress + 0.04,
//       endProgress - 0.06,
//       endProgress,
//     ],
//     [40, 0, 0, -30]
//   );

//   const blurValue = useTransform(
//     scrollProgress,
//     [
//       startProgress,
//       startProgress + 0.04,
//       endProgress - 0.06,
//       endProgress,
//     ],
//     [14, 0, 0, 14]
//   );

//   const filter =
//     useMotionTemplate`blur(${blurValue}px)`;

//   const alignClass =
//     align === "left"
//       ? "items-start text-left pl-8 md:pl-24"
//       : align === "right"
//       ? "items-end text-right pr-8 md:pr-24"
//       : "items-center text-center";

//   return (
//     <motion.div
//       style={{
//         opacity,
//         y,
//         filter,
//       }}
//       className={`absolute inset-0 flex flex-col justify-center z-10 pointer-events-none ${alignClass}`}
//     >
//       <div className="max-w-xl space-y-5">
//         <h2
//           className="text-4xl md:text-6xl font-semibold text-white/95 tracking-tight leading-tight"
//           style={{
//             fontFamily:
//               "'SF Pro Display', sans-serif",
//           }}
//         >
//           {headline}
//         </h2>

//         <p
//           className="text-base md:text-xl text-white/55 font-light leading-relaxed"
//           style={{
//             fontFamily:
//               "'SF Pro Text', sans-serif",
//           }}
//         >
//           {sub}
//         </p>
//       </div>
//     </motion.div>
//   );
// }

// export default function IphoneScroll() {
//   const containerRef =
//     useRef<HTMLDivElement>(null);

//   const canvasRef =
//     useRef<HTMLCanvasElement>(null);

//   const imagesRef =
//     useRef<HTMLImageElement[]>([]);

//   const [loaded, setLoaded] =
//     useState(false);

//   const [loadProgress, setLoadProgress] =
//     useState(0);

//   const currentFrameRef = useRef(0);

//   const rafRef = useRef<number | null>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const scrollHintOpacity = useTransform(
//     scrollYProgress,
//     [0, 0.05],
//     [1, 0]
//   );

//   // ULTRA BUTTERY LENIS
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       smoothWheel: true,
//       smoothTouch: true,
//       wheelMultiplier: 1,
//       touchMultiplier: 1.1,
//       lerp: 0.12,
//     });

//     function raf(time: number) {
//       lenis.raf(time);

//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     return () => {
//       lenis.destroy();
//     };
//   }, []);

//   // PRELOAD FRAMES
//   useEffect(() => {
//     let done = 0;

//     const images: HTMLImageElement[] =
//       new Array(TOTAL_FRAMES);

//     const onLoad = () => {
//       done++;

//       setLoadProgress(
//         Math.round(
//           (done / TOTAL_FRAMES) * 100
//         )
//       );

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

//   const drawFrame = useCallback(
//     (index: number) => {
//       const canvas = canvasRef.current;

//       if (!canvas) return;

//       const ctx =
//         canvas.getContext("2d");

//       if (!ctx) return;

//       const img =
//         imagesRef.current[index];

//       if (
//         !img?.complete ||
//         !img.naturalWidth
//       )
//         return;

//       const cw = canvas.offsetWidth;
//       const ch = canvas.offsetHeight;

//       ctx.save();

//       ctx.setTransform(
//         1,
//         0,
//         0,
//         1,
//         0,
//         0
//       );

//       ctx.clearRect(
//         0,
//         0,
//         canvas.width,
//         canvas.height
//       );

//       ctx.restore();

//       const scale =
//         Math.min(
//           cw / img.naturalWidth,
//           ch / img.naturalHeight
//         ) * 0.94;

//       const dw =
//         img.naturalWidth * scale;

//       const dh =
//         img.naturalHeight * scale;

//       const dx = (cw - dw) / 2;

//       const dy = (ch - dh) / 2;

//       ctx.imageSmoothingEnabled = true;

//       ctx.imageSmoothingQuality = "high";

//       // tiny cinematic softness
//       ctx.filter = "blur(0.15px)";

//       ctx.drawImage(
//         img,
//         dx,
//         dy,
//         dw,
//         dh
//       );

//       ctx.filter = "none";
//     },
//     []
//   );

//   const resizeCanvas = useCallback(() => {
//     const canvas = canvasRef.current;

//     if (!canvas) return;

//     const dpr =
//       window.devicePixelRatio || 1;

//     const cssW = window.innerWidth;

//     const cssH = window.innerHeight;

//     canvas.width = cssW * dpr;

//     canvas.height = cssH * dpr;

//     canvas.style.width = `${cssW}px`;

//     canvas.style.height = `${cssH}px`;

//     const ctx =
//       canvas.getContext("2d");

//     if (ctx) {
//       ctx.scale(dpr, dpr);

//       ctx.imageSmoothingEnabled = true;

//       ctx.imageSmoothingQuality =
//         "high";
//     }

//     drawFrame(currentFrameRef.current);
//   }, [drawFrame]);

//   useEffect(() => {
//     resizeCanvas();

//     window.addEventListener(
//       "resize",
//       resizeCanvas
//     );

//     return () => {
//       window.removeEventListener(
//         "resize",
//         resizeCanvas
//       );
//     };
//   }, [resizeCanvas]);

//   // ULTRA BUTTERY FRAME ENGINE
//   useEffect(() => {
//     if (!loaded) return;

//     let targetFrame = 0;

//     let displayFrame = 0;

//     const unsubscribe =
//       scrollYProgress.on(
//         "change",
//         (v) => {
//           // cinematic easing
//           const eased =
//             1 -
//             Math.pow(1 - v, 1.8);

//           targetFrame = Math.min(
//             TOTAL_FRAMES - 1,

//             Math.max(
//               0,
//               eased *
//                 (TOTAL_FRAMES - 1)
//             )
//           );
//         }
//       );

//     const animate = () => {
//       // ultra buttery inertia
//       displayFrame +=
//         (targetFrame -
//           displayFrame) *
//         0.12;

//       const frameIdx =
//         Math.round(displayFrame);

//       currentFrameRef.current =
//         frameIdx;

//       // ALWAYS DRAW
//       drawFrame(frameIdx);

//       rafRef.current =
//         requestAnimationFrame(
//           animate
//         );
//     };

//     rafRef.current =
//       requestAnimationFrame(
//         animate
//       );

//     return () => {
//       unsubscribe();

//       if (rafRef.current) {
//         cancelAnimationFrame(
//           rafRef.current
//         );
//       }
//     };
//   }, [
//     loaded,
//     scrollYProgress,
//     drawFrame,
//   ]);

//   return (
//     <div
//       ref={containerRef}
//       className="relative"
//       style={{
//         height: "700vh",
//         width: "100%",
//         marginLeft: 0,
//       }}
//     >
//       {/* LOADER */}
//       {!loaded && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center"
//           style={{
//             background: "#050505",
//           }}
//         >
//           <div className="space-y-6 text-center">
//             <div
//               className="text-lg uppercase tracking-[0.35em] text-white/40"
//               style={{
//                 fontFamily:
//                   "'SF Pro Display', sans-serif",
//               }}
//             >
//               iPhone 17 Pro Max
//             </div>

//             <div className="relative w-16 h-16 mx-auto">
//               <svg
//                 className="w-full h-full -rotate-90"
//                 viewBox="0 0 64 64"
//               >
//                 <circle
//                   cx="32"
//                   cy="32"
//                   r="28"
//                   fill="none"
//                   stroke="rgba(255,255,255,0.08)"
//                   strokeWidth="3"
//                 />

//                 <circle
//                   cx="32"
//                   cy="32"
//                   r="28"
//                   fill="none"
//                   stroke="rgba(255,255,255,0.7)"
//                   strokeWidth="3"
//                   strokeLinecap="round"
//                   strokeDasharray={`${
//                     (loadProgress /
//                       100) *
//                     175.9
//                   } 175.9`}
//                 />
//               </svg>

//               <span
//                 className="absolute inset-0 flex items-center justify-center text-xs text-white/50"
//                 style={{
//                   fontFamily:
//                     "'SF Pro Text', sans-serif",
//                 }}
//               >
//                 {loadProgress}%
//               </span>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* MAIN */}
//       <div
//         className="sticky top-0 h-screen overflow-hidden"
//         style={{
//           background: "#050505",
//           width: "100vw",
//           left: 0,

//           marginLeft:
//             "calc(-1 * ((100vw - 100%) / 2))",
//         }}
//       >
//         {/* ambient glow */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background: `
//               radial-gradient(
//                 ellipse 60% 50% at 50% 55%,
//                 rgba(255,120,20,0.09) 0%,
//                 transparent 70%
//               )
//             `,
//           }}
//         />

//         <canvas
//           ref={canvasRef}
//           className="absolute inset-0"
//           style={{
//             display: loaded
//               ? "block"
//               : "none",
//           }}
//         />

//         {loaded &&
//           TEXT_OVERLAYS.map(
//             (overlay, i) => (
//               <TextSection
//                 key={i}
//                 overlay={overlay}
//                 scrollProgress={
//                   scrollYProgress
//                 }
//               />
//             )
//           )}

//         {/* scroll hint */}
//         {loaded && (
//           <motion.div
//             style={{
//               opacity:
//                 scrollHintOpacity,
//             }}
//             className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
//           >
//             <span
//               className="text-xs uppercase tracking-[0.2em] text-white/30"
//               style={{
//                 fontFamily:
//                   "'SF Pro Text', sans-serif",
//               }}
//             >
//               Scroll to explore
//             </span>

//             <motion.div
//               animate={{
//                 y: [0, 6, 0],
//               }}
//               transition={{
//                 repeat: Infinity,
//                 duration: 1.8,
//                 ease: "easeInOut",
//               }}
//               className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
//             />
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useEffect, useRef, useState, useCallback } from "react";
// import {
//   useScroll,
//   useTransform,
//   useMotionTemplate,
//   motion,
//   MotionValue,
// } from "framer-motion";
// import Lenis from "lenis";

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
//     sub: "Lighter than steel. Stronger than ever.",
//     align: "left",
//   },
//   {
//     startProgress: 0.52,
//     endProgress: 0.75,
//     headline: "Camera system. Redefined.",
//     sub: "Five-lens array engineered for cinematic imaging.",
//     align: "right",
//   },
//   {
//     startProgress: 0.8,
//     endProgress: 1,
//     headline: "The future is now.",
//     sub: "Experience the next evolution of iPhone.",
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

//   const opacity = useTransform(
//     scrollProgress,
//     [startProgress, startProgress + 0.04, endProgress - 0.06, endProgress],
//     [0, 1, 1, 0]
//   );
//   const y = useTransform(
//     scrollProgress,
//     [startProgress, startProgress + 0.04, endProgress - 0.06, endProgress],
//     [40, 0, 0, -30]
//   );
//   const blurValue = useTransform(
//     scrollProgress,
//     [startProgress, startProgress + 0.04, endProgress - 0.06, endProgress],
//     [14, 0, 0, 14]
//   );
//   const filter = useMotionTemplate`blur(${blurValue}px)`;

//   const alignClass =
//     align === "left"
//       ? "items-start text-left pl-8 md:pl-24"
//       : align === "right"
//       ? "items-end text-right pr-8 md:pr-24"
//       : "items-center text-center";

//   return (
//     <motion.div
//       style={{ opacity, y, filter }}
//       className={`absolute inset-0 flex flex-col justify-center z-10 pointer-events-none ${alignClass}`}
//     >
//       <div className="max-w-xl space-y-5">
//         <h2
//           className="text-4xl md:text-6xl font-semibold text-white/95 tracking-tight leading-tight"
//           style={{ fontFamily: "'SF Pro Display', sans-serif" }}
//         >
//           {headline}
//         </h2>
//         <p
//           className="text-base md:text-xl text-white/55 font-light leading-relaxed"
//           style={{ fontFamily: "'SF Pro Text', sans-serif" }}
//         >
//           {sub}
//         </p>
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
//   const displayFrameRef = useRef(0); // float, for blending
//   const rafRef = useRef<number | null>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

//   // Lenis smooth scroll
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       smoothWheel: true,
//       smoothTouch: true,
//       wheelMultiplier: 1,
//       touchMultiplier: 1.1,
//       lerp: 0.12,
//     });
//     function raf(time: number) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);
//     return () => lenis.destroy();
//   }, []);

//   // Preload frames
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

//   // ✅ KEY FIX: draw with sub-frame blending between two adjacent frames
//   // e.g. displayFrame = 23.7 → draws frame 23 at alpha 1, then frame 24 at alpha 0.7 on top
//   // This eliminates the snap/jump between integer frames entirely
//   const drawFrame = useCallback((displayFrame: number) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const loFrame = Math.floor(displayFrame);
//     const hiFrame = Math.min(TOTAL_FRAMES - 1, loFrame + 1);
//     const blend = displayFrame - loFrame; // 0.0 → 1.0

//     const imgLo = imagesRef.current[loFrame];
//     const imgHi = imagesRef.current[hiFrame];

//     if (!imgLo?.complete || !imgLo.naturalWidth) return;

//     const cw = canvas.offsetWidth;
//     const ch = canvas.offsetHeight;

//     ctx.save();
//     ctx.setTransform(1, 0, 0, 1, 0, 0);
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.restore();

//     const scale = Math.min(cw / imgLo.naturalWidth, ch / imgLo.naturalHeight) * 0.94;
//     const dw = imgLo.naturalWidth * scale;
//     const dh = imgLo.naturalHeight * scale;
//     const dx = (cw - dw) / 2;
//     const dy = (ch - dh) / 2;

//     ctx.imageSmoothingEnabled = true;
//     ctx.imageSmoothingQuality = "high";

//     // Draw base frame fully
//     ctx.globalAlpha = 1;
//     ctx.drawImage(imgLo, dx, dy, dw, dh);

//     // Blend next frame on top based on fractional position
//     if (blend > 0 && imgHi?.complete && imgHi.naturalWidth) {
//       ctx.globalAlpha = blend;
//       ctx.drawImage(imgHi, dx, dy, dw, dh);
//     }

//     ctx.globalAlpha = 1;
//   }, []);

//   const resizeCanvas = useCallback(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const dpr = window.devicePixelRatio || 1;
//     const cssW = window.innerWidth;
//     const cssH = window.innerHeight;
//     canvas.width = cssW * dpr;
//     canvas.height = cssH * dpr;
//     canvas.style.width = `${cssW}px`;
//     canvas.style.height = `${cssH}px`;
//     const ctx = canvas.getContext("2d");
//     if (ctx) {
//       ctx.scale(dpr, dpr);
//       ctx.imageSmoothingEnabled = true;
//       ctx.imageSmoothingQuality = "high";
//     }
//     drawFrame(displayFrameRef.current);
//   }, [drawFrame]);

//   useEffect(() => {
//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);
//     return () => window.removeEventListener("resize", resizeCanvas);
//   }, [resizeCanvas]);

//   // Animation loop — lerp displayFrame as a float, pass directly to drawFrame
//   useEffect(() => {
//     if (!loaded) return;

//     let targetFrame = 0;
//     let displayFrame = 0;

//     const unsubscribe = scrollYProgress.on("change", (v) => {
//       const eased = 1 - Math.pow(1 - v, 1.8);
//       targetFrame = Math.min(TOTAL_FRAMES - 1, Math.max(0, eased * (TOTAL_FRAMES - 1)));
//     });

//     const animate = () => {
//       // Lerp as float — never round until drawFrame blends it
//       displayFrame += (targetFrame - displayFrame) * 0.12;
//       displayFrameRef.current = displayFrame;

//       // Pass raw float — blending happens inside drawFrame
//       drawFrame(displayFrame);

//       rafRef.current = requestAnimationFrame(animate);
//     };

//     rafRef.current = requestAnimationFrame(animate);

//     return () => {
//       unsubscribe();
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, [loaded, scrollYProgress, drawFrame]);

//   return (
//     <div
//       ref={containerRef}
//       className="relative"
//       style={{ height: "700vh", width: "100%", marginLeft: 0 }}
//     >
//       {!loaded && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center"
//           style={{ background: "#050505" }}
//         >
//           <div className="space-y-6 text-center">
//             <div
//               className="text-lg uppercase tracking-[0.35em] text-white/40"
//               style={{ fontFamily: "'SF Pro Display', sans-serif" }}
//             >
//               iPhone 17 Pro Max
//             </div>
//             <div className="relative w-16 h-16 mx-auto">
//               <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
//                 <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
//                 <circle
//                   cx="32" cy="32" r="28"
//                   fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="3"
//                   strokeLinecap="round"
//                   strokeDasharray={`${(loadProgress / 100) * 175.9} 175.9`}
//                 />
//               </svg>
//               <span
//                 className="absolute inset-0 flex items-center justify-center text-xs text-white/50"
//                 style={{ fontFamily: "'SF Pro Text', sans-serif" }}
//               >
//                 {loadProgress}%
//               </span>
//             </div>
//           </div>
//         </div>
//       )}

//       <div
//         className="sticky top-0 h-screen overflow-hidden"
//         style={{
//           background: "#050505",
//           width: "100vw",
//           left: 0,
//           marginLeft: "calc(-1 * ((100vw - 100%) / 2))",
//         }}
//       >
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background: `radial-gradient(ellipse 60% 50% at 50% 55%, rgba(255,120,20,0.09) 0%, transparent 70%)`,
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

//         {loaded && (
//           <motion.div
//             style={{ opacity: scrollHintOpacity }}
//             className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
//           >
//             <span
//               className="text-xs uppercase tracking-[0.2em] text-white/30"
//               style={{ fontFamily: "'SF Pro Text', sans-serif" }}
//             >
//               Scroll to explore
//             </span>
//             <motion.div
//               animate={{ y: [0, 6, 0] }}
//               transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
//               className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
//             />
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useRef, useState, useCallback } from "react";
// import {
//   useScroll,
//   useTransform,
//   motion,
//   MotionValue,
// } from "framer-motion";
// import Lenis from "lenis";

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
//     sub: "Lighter than steel. Stronger than ever.",
//     align: "left",
//   },
//   {
//     startProgress: 0.52,
//     endProgress: 0.75,
//     headline: "Camera system. Redefined.",
//     sub: "Five-lens array engineered for cinematic imaging.",
//     align: "right",
//   },
//   {
//     startProgress: 0.8,
//     endProgress: 1,
//     headline: "The future is now.",
//     sub: "Experience the next evolution of iPhone.",
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

//   const opacity = useTransform(
//     scrollProgress,
//     [startProgress, startProgress + 0.04, endProgress - 0.06, endProgress],
//     [0, 1, 1, 0]
//   );
//   const y = useTransform(
//     scrollProgress,
//     [startProgress, startProgress + 0.04, endProgress - 0.06, endProgress],
//     [20, 0, 0, -15]
//   );


//   const alignClass =
//     align === "left"
//       ? "items-start text-left pl-8 md:pl-24"
//       : align === "right"
//       ? "items-end text-right pr-8 md:pr-24"
//       : "items-center text-center";

//   return (
//     <motion.div
//       style={{ opacity, y }}
//       className={`absolute inset-0 flex flex-col justify-center z-10 pointer-events-none ${alignClass}`}
//     >
//       <div className="max-w-xl space-y-5">
//         <h2
//           className="text-4xl md:text-6xl font-semibold text-white/95 tracking-tight leading-tight"
//           style={{ fontFamily: "'SF Pro Display', sans-serif" }}
//         >
//           {headline}
//         </h2>
//         <p
//           className="text-base md:text-xl text-white/55 font-light leading-relaxed"
//           style={{ fontFamily: "'SF Pro Text', sans-serif" }}
//         >
//           {sub}
//         </p>
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
//   const displayFrameRef = useRef(0); // float, for blending
//   const rafRef = useRef<number | null>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

//   // Lenis smooth scroll
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       smoothWheel: true,
//       smoothTouch: true,
//       wheelMultiplier: 1,
//       touchMultiplier: 1.1,
//       lerp: 0.12,
//     });
//     function raf(time: number) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);
//     return () => lenis.destroy();
//   }, []);

//   // Preload frames
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

//   // ✅ KEY FIX: draw with sub-frame blending between two adjacent frames
//   // e.g. displayFrame = 23.7 → draws frame 23 at alpha 1, then frame 24 at alpha 0.7 on top
//   // This eliminates the snap/jump between integer frames entirely
//   const drawFrame = useCallback((displayFrame: number) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const loFrame = Math.floor(displayFrame);
//     const hiFrame = Math.min(TOTAL_FRAMES - 1, loFrame + 1);
//     const blend = displayFrame - loFrame; // 0.0 → 1.0

//     const imgLo = imagesRef.current[loFrame];
//     const imgHi = imagesRef.current[hiFrame];

//     if (!imgLo?.complete || !imgLo.naturalWidth) return;

//     const cw = canvas.offsetWidth;
//     const ch = canvas.offsetHeight;

//     ctx.save();
//     ctx.setTransform(1, 0, 0, 1, 0, 0);
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.restore();

//     const scale = Math.min(cw / imgLo.naturalWidth, ch / imgLo.naturalHeight) * 0.94;
//     const dw = imgLo.naturalWidth * scale;
//     const dh = imgLo.naturalHeight * scale;
//     const dx = (cw - dw) / 2;
//     const dy = (ch - dh) / 2;

//     ctx.imageSmoothingEnabled = true;
//     ctx.imageSmoothingQuality = "high";

//     // Draw base frame fully
//     ctx.globalAlpha = 1;
//     ctx.drawImage(imgLo, dx, dy, dw, dh);

//     // Blend next frame on top based on fractional position
//     if (blend > 0 && imgHi?.complete && imgHi.naturalWidth) {
//       ctx.globalAlpha = blend;
//       ctx.drawImage(imgHi, dx, dy, dw, dh);
//     }

//     ctx.globalAlpha = 1;
//   }, []);

//   const resizeCanvas = useCallback(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const dpr = window.devicePixelRatio || 1;
//     const cssW = window.innerWidth;
//     const cssH = window.innerHeight;
//     canvas.width = cssW * dpr;
//     canvas.height = cssH * dpr;
//     canvas.style.width = `${cssW}px`;
//     canvas.style.height = `${cssH}px`;
//     const ctx = canvas.getContext("2d");
//     if (ctx) {
//       ctx.scale(dpr, dpr);
//       ctx.imageSmoothingEnabled = true;
//       ctx.imageSmoothingQuality = "high";
//     }
//     drawFrame(displayFrameRef.current);
//   }, [drawFrame]);

//   useEffect(() => {
//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);
//     return () => window.removeEventListener("resize", resizeCanvas);
//   }, [resizeCanvas]);

//   // Animation loop — lerp displayFrame as a float, pass directly to drawFrame
//   useEffect(() => {
//     if (!loaded) return;

//     let targetFrame = 0;
//     let displayFrame = 0;

//     const unsubscribe = scrollYProgress.on("change", (v) => {
//       const eased = 1 - Math.pow(1 - v, 1.8);
//       targetFrame = Math.min(TOTAL_FRAMES - 1, Math.max(0, eased * (TOTAL_FRAMES - 1)));
//     });

//     const animate = () => {
//       // Lerp as float — never round until drawFrame blends it
//       displayFrame += (targetFrame - displayFrame) * 0.12;
//       displayFrameRef.current = displayFrame;

//       // Pass raw float — blending happens inside drawFrame
//       drawFrame(displayFrame);

//       rafRef.current = requestAnimationFrame(animate);
//     };

//     rafRef.current = requestAnimationFrame(animate);

//     return () => {
//       unsubscribe();
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, [loaded, scrollYProgress, drawFrame]);

//   return (
//     <div
//       ref={containerRef}
//       className="relative"
//       style={{ height: "700vh", width: "100%", marginLeft: 0 }}
//     >
//       {!loaded && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center"
//           style={{ background: "#050505" }}
//         >
//           <div className="space-y-6 text-center">
//             <div
//               className="text-lg uppercase tracking-[0.35em] text-white/40"
//               style={{ fontFamily: "'SF Pro Display', sans-serif" }}
//             >
//               iPhone 17 Pro Max
//             </div>
//             <div className="relative w-16 h-16 mx-auto">
//               <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
//                 <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
//                 <circle
//                   cx="32" cy="32" r="28"
//                   fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="3"
//                   strokeLinecap="round"
//                   strokeDasharray={`${(loadProgress / 100) * 175.9} 175.9`}
//                 />
//               </svg>
//               <span
//                 className="absolute inset-0 flex items-center justify-center text-xs text-white/50"
//                 style={{ fontFamily: "'SF Pro Text', sans-serif" }}
//               >
//                 {loadProgress}%
//               </span>
//             </div>
//           </div>
//         </div>
//       )}

//       <div
//         className="sticky top-0 h-screen overflow-hidden"
//         style={{
//           background: "#050505",
//           width: "100vw",
//           left: 0,
//           marginLeft: "calc(-1 * ((100vw - 100%) / 2))",
//         }}
//       >
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background: `radial-gradient(ellipse 60% 50% at 50% 55%, rgba(255,120,20,0.09) 0%, transparent 70%)`,
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

//         {loaded && (
//           <motion.div
//             style={{ opacity: scrollHintOpacity }}
//             className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
//           >
//             <span
//               className="text-xs uppercase tracking-[0.2em] text-white/30"
//               style={{ fontFamily: "'SF Pro Text', sans-serif" }}
//             >
//               Scroll to explore
//             </span>
//             <motion.div
//               animate={{ y: [0, 6, 0] }}
//               transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
//               className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
//             />
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useRef, useState, useCallback } from "react";
// import {
//   useScroll,
//   useTransform,
//   motion,
//   MotionValue,
// } from "framer-motion";
// import Lenis from "lenis";

// const TOTAL_FRAMES = 300;
// const FRAME_PREFIX = "/iphone-new-images/ezgif-frame-";

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
//     sub: "Lighter than steel. Stronger than ever.",
//     align: "left",
//   },
//   {
//     startProgress: 0.52,
//     endProgress: 0.75,
//     headline: "Camera system. Redefined.",
//     sub: "Five-lens array engineered for cinematic imaging.",
//     align: "right",
//   },
//   {
//     startProgress: 0.8,
//     endProgress: 1,
//     headline: "The future is now.",
//     sub: "Experience the next evolution of iPhone.",
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

//   const opacity = useTransform(
//     scrollProgress,
//     [startProgress, startProgress + 0.04, endProgress - 0.06, endProgress],
//     [0, 1, 1, 0]
//   );
//   const y = useTransform(
//     scrollProgress,
//     [startProgress, startProgress + 0.04, endProgress - 0.06, endProgress],
//     [20, 0, 0, -15]
//   );


//   const alignClass =
//     align === "left"
//       ? "items-start text-left pl-8 md:pl-24"
//       : align === "right"
//       ? "items-end text-right pr-8 md:pr-24"
//       : "items-center text-center";

//   return (
//     <motion.div
//       style={{ opacity, y }}
//       className={`absolute inset-0 flex flex-col justify-center z-10 pointer-events-none ${alignClass}`}
//     >
//       <div className="max-w-xl space-y-5">
//         <h2
//           className="text-4xl md:text-6xl font-semibold text-white/95 tracking-tight leading-tight"
//           style={{ fontFamily: "'SF Pro Display', sans-serif" }}
//         >
//           {headline}
//         </h2>
//         <p
//           className="text-base md:text-xl text-white/55 font-light leading-relaxed"
//           style={{ fontFamily: "'SF Pro Text', sans-serif" }}
//         >
//           {sub}
//         </p>
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
//   const displayFrameRef = useRef(0); // float, for blending
//   const rafRef = useRef<number | null>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

//   // Lenis smooth scroll
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       smoothWheel: true,
//       // smoothTouch: true,
//       wheelMultiplier: 1,
//       touchMultiplier: 1.1,
//       lerp: 0.12,
//     });
//     function raf(time: number) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);
//     return () => lenis.destroy();
//   }, []);

//   // Preload frames
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

//   // ✅ KEY FIX: draw with sub-frame blending between two adjacent frames
//   // e.g. displayFrame = 23.7 → draws frame 23 at alpha 1, then frame 24 at alpha 0.7 on top
//   // This eliminates the snap/jump between integer frames entirely
//   const drawFrame = useCallback((displayFrame: number) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const loFrame = Math.floor(displayFrame);
//     const hiFrame = Math.min(TOTAL_FRAMES - 1, loFrame + 1);
//     const blend = displayFrame - loFrame; // 0.0 → 1.0

//     const imgLo = imagesRef.current[loFrame];
//     const imgHi = imagesRef.current[hiFrame];

//     if (!imgLo?.complete || !imgLo.naturalWidth) return;

//     const cw = canvas.offsetWidth;
//     const ch = canvas.offsetHeight;

//     ctx.save();
//     ctx.setTransform(1, 0, 0, 1, 0, 0);
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.restore();

//     const scale = Math.min(cw / imgLo.naturalWidth, ch / imgLo.naturalHeight) * 0.94;
//     const dw = imgLo.naturalWidth * scale;
//     const dh = imgLo.naturalHeight * scale;
//     const dx = (cw - dw) / 2;
//     const dy = (ch - dh) / 2;

//     ctx.imageSmoothingEnabled = true;
//     ctx.imageSmoothingQuality = "high";

//     // Draw base frame fully
//     ctx.globalAlpha = 1;
//     ctx.drawImage(imgLo, dx, dy, dw, dh);

//     // Blend next frame on top based on fractional position
//     if (blend > 0 && imgHi?.complete && imgHi.naturalWidth) {
//       ctx.globalAlpha = blend;
//       ctx.drawImage(imgHi, dx, dy, dw, dh);
//     }

//     ctx.globalAlpha = 1;
//   }, []);

//   const resizeCanvas = useCallback(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const dpr = window.devicePixelRatio || 1;
//     const cssW = window.innerWidth;
//     const cssH = window.innerHeight;
//     canvas.width = cssW * dpr;
//     canvas.height = cssH * dpr;
//     canvas.style.width = `${cssW}px`;
//     canvas.style.height = `${cssH}px`;
//     const ctx = canvas.getContext("2d");
//     if (ctx) {
//       ctx.scale(dpr, dpr);
//       ctx.imageSmoothingEnabled = true;
//       ctx.imageSmoothingQuality = "high";
//     }
//     drawFrame(displayFrameRef.current);
//   }, [drawFrame]);

//   useEffect(() => {
//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);
//     return () => window.removeEventListener("resize", resizeCanvas);
//   }, [resizeCanvas]);

//   // Animation loop — lerp displayFrame as a float, pass directly to drawFrame
//   useEffect(() => {
//     if (!loaded) return;

//     let targetFrame = 0;
//     let displayFrame = 0;

//     const unsubscribe = scrollYProgress.on("change", (v) => {
//       const eased = 1 - Math.pow(1 - v, 1.8);
//       targetFrame = Math.min(TOTAL_FRAMES - 1, Math.max(0, eased * (TOTAL_FRAMES - 1)));
//     });

//     const animate = () => {
//       // Lerp as float — never round until drawFrame blends it
//       displayFrame += (targetFrame - displayFrame) * 0.12;
//       displayFrameRef.current = displayFrame;

//       // Pass raw float — blending happens inside drawFrame
//       drawFrame(displayFrame);

//       rafRef.current = requestAnimationFrame(animate);
//     };

//     rafRef.current = requestAnimationFrame(animate);

//     return () => {
//       unsubscribe();
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, [loaded, scrollYProgress, drawFrame]);

//   return (
//     <div
//       ref={containerRef}
//       className="relative"
//       style={{ height: "1400vh", width: "100%", marginLeft: 0 }}
//     >
//       {!loaded && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center"
//           style={{ background: "#050505" }}
//         >
//           <div className="space-y-6 text-center">
//             <div
//               className="text-lg uppercase tracking-[0.35em] text-white/40"
//               style={{ fontFamily: "'SF Pro Display', sans-serif" }}
//             >
//               iPhone 17 Pro Max
//             </div>
//             <div className="relative w-16 h-16 mx-auto">
//               <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
//                 <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
//                 <circle
//                   cx="32" cy="32" r="28"
//                   fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="3"
//                   strokeLinecap="round"
//                   strokeDasharray={`${(loadProgress / 100) * 175.9} 175.9`}
//                 />
//               </svg>
//               <span
//                 className="absolute inset-0 flex items-center justify-center text-xs text-white/50"
//                 style={{ fontFamily: "'SF Pro Text', sans-serif" }}
//               >
//                 {loadProgress}%
//               </span>
//             </div>
//           </div>
//         </div>
//       )}

//       <div
//         className="sticky top-0 h-screen overflow-hidden"
//         style={{
//           background: "#050505",
//           width: "100vw",
//           left: 0,
//           marginLeft: "calc(-1 * ((100vw - 100%) / 2))",
//         }}
//       >
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background: `radial-gradient(ellipse 60% 50% at 50% 55%, rgba(255,120,20,0.09) 0%, transparent 70%)`,
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

//         {loaded && (
//           <motion.div
//             style={{ opacity: scrollHintOpacity }}
//             className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
//           >
//             <span
//               className="text-xs uppercase tracking-[0.2em] text-white/30"
//               style={{ fontFamily: "'SF Pro Text', sans-serif" }}
//             >
//               Scroll to explore
//             </span>
//             <motion.div
//               animate={{ y: [0, 6, 0] }}
//               transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
//               className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
//             />
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useRef, useState, useCallback } from "react";
// import {
//   useScroll,
//   useTransform,
//   motion,
//   MotionValue,
// } from "framer-motion";
// import Lenis from "lenis";

// // ─── CONFIG ──────────────────────────────────────────────────────────────────
// const TOTAL_FRAMES = 240;
// const FRAME_PREFIX = "/iphone-wow-images/ezgif-frame-";

// function getFramePath(i: number) {
//   return `${FRAME_PREFIX}${String(i + 1).padStart(3, "0")}.jpg`;
// }

// // ─── TYPES ────────────────────────────────────────────────────────────────────
// interface TextOverlay {
//   startProgress: number;
//   endProgress: number;
//   headline: string;
//   sub: string;
//   align: "left" | "right" | "center";
// }

// // ─── SCROLL TEXT OVERLAYS ─────────────────────────────────────────────────────
// const TEXT_OVERLAYS: TextOverlay[] = [
//   {
//     startProgress: 0,
//     endProgress: 0.2,
//     headline: "We Fix What\nOthers Can't.",
//     sub: "Expert repair for every device — fast, reliable, and built to last.",
//     align: "center",
//   },
//   {
//     startProgress: 0.23,
//     endProgress: 0.44,
//     headline: "Screen shattered?\nWe've got you.",
//     sub: "Same-day screen replacements with OEM-quality glass.",
//     align: "left",
//   },
//   {
//     startProgress: 0.48,
//     endProgress: 0.68,
//     headline: "Battery dying\ntoo fast?",
//     sub: "Genuine battery swaps that breathe new life into your device.",
//     align: "right",
//   },
//   {
//     startProgress: 0.72,
//     endProgress: 0.92,
//     headline: "Water damage?\nDon't panic.",
//     sub: "Advanced micro-soldering and component-level repair. No fix, no fee.",
//     align: "left",
//   },
//   {
//     startProgress: 0.94,
//     endProgress: 1.0,
//     headline: "Your device.\nRestored.",
//     sub: "Walk in broken. Walk out fixed.",
//     align: "center",
//   },
// ];

// // ─── TEXT SECTION COMPONENT ───────────────────────────────────────────────────
// function TextSection({
//   overlay,
//   scrollProgress,
// }: {
//   overlay: TextOverlay;
//   scrollProgress: MotionValue<number>;
// }) {
//   const { startProgress, endProgress, headline, sub, align } = overlay;

//   const opacity = useTransform(
//     scrollProgress,
//     [startProgress, startProgress + 0.04, endProgress - 0.05, endProgress],
//     [0, 1, 1, 0]
//   );
//   const y = useTransform(
//     scrollProgress,
//     [startProgress, startProgress + 0.04, endProgress - 0.05, endProgress],
//     [30, 0, 0, -20]
//   );

//   const alignClass =
//     align === "left"
//       ? "items-start text-left pl-8 md:pl-24"
//       : align === "right"
//       ? "items-end text-right pr-8 md:pr-24"
//       : "items-center text-center";

//   const lines = headline.split("\n");

//   return (
//     <motion.div
//       style={{ opacity, y }}
//       className={`absolute inset-0 flex flex-col justify-center z-10 pointer-events-none ${alignClass}`}
//     >
//       <div className="max-w-xl space-y-4">
//         <h2
//           className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight"
//           style={{ fontFamily: "'SF Pro Display', 'Helvetica Neue', sans-serif" }}
//         >
//           {lines.map((line, i) => (
//             <span key={i} className="block">
//               {i === 1 ? (
//                 <span style={{ color: "#FF6B35" }}>{line}</span>
//               ) : (
//                 line
//               )}
//             </span>
//           ))}
//         </h2>
//         <p
//           className="text-base md:text-lg font-light leading-relaxed"
//           style={{
//             fontFamily: "'SF Pro Text', 'Helvetica Neue', sans-serif",
//             color: "rgba(255,255,255,0.55)",
//           }}
//         >
//           {sub}
//         </p>
//       </div>
//     </motion.div>
//   );
// }

// // ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
// export default function IphoneScroll() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const imagesRef = useRef<HTMLImageElement[]>([]);
//   const [loaded, setLoaded] = useState(false);
//   const [loadProgress, setLoadProgress] = useState(0);
//   const displayFrameRef = useRef(0);
//   const rafRef = useRef<number | null>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.04], [1, 0]);

//   // Lenis smooth scroll
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       smoothWheel: true,
//       wheelMultiplier: 1,
//       touchMultiplier: 1.1,
//       lerp: 0.12,
//     });
//     function raf(time: number) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);
//     return () => lenis.destroy();
//   }, []);

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

//   // Sub-frame blending for buttery smooth animation
//   const drawFrame = useCallback((displayFrame: number) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const loFrame = Math.floor(displayFrame);
//     const hiFrame = Math.min(TOTAL_FRAMES - 1, loFrame + 1);
//     const blend = displayFrame - loFrame;

//     const imgLo = imagesRef.current[loFrame];
//     const imgHi = imagesRef.current[hiFrame];

//     if (!imgLo?.complete || !imgLo.naturalWidth) return;

//     const cw = canvas.offsetWidth;
//     const ch = canvas.offsetHeight;

//     ctx.save();
//     ctx.setTransform(1, 0, 0, 1, 0, 0);
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.restore();

//     const scale = Math.min(cw / imgLo.naturalWidth, ch / imgLo.naturalHeight) * 0.94;
//     const dw = imgLo.naturalWidth * scale;
//     const dh = imgLo.naturalHeight * scale;
//     const dx = (cw - dw) / 2;
//     const dy = (ch - dh) / 2;

//     ctx.imageSmoothingEnabled = true;
//     ctx.imageSmoothingQuality = "high";

//     ctx.globalAlpha = 1;
//     ctx.drawImage(imgLo, dx, dy, dw, dh);

//     if (blend > 0 && imgHi?.complete && imgHi.naturalWidth) {
//       ctx.globalAlpha = blend;
//       ctx.drawImage(imgHi, dx, dy, dw, dh);
//     }

//     ctx.globalAlpha = 1;
//   }, []);

//   const resizeCanvas = useCallback(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const dpr = window.devicePixelRatio || 1;
//     const cssW = window.innerWidth;
//     const cssH = window.innerHeight;
//     canvas.width = cssW * dpr;
//     canvas.height = cssH * dpr;
//     canvas.style.width = `${cssW}px`;
//     canvas.style.height = `${cssH}px`;
//     const ctx = canvas.getContext("2d");
//     if (ctx) {
//       ctx.scale(dpr, dpr);
//       ctx.imageSmoothingEnabled = true;
//       ctx.imageSmoothingQuality = "high";
//     }
//     drawFrame(displayFrameRef.current);
//   }, [drawFrame]);

//   useEffect(() => {
//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);
//     return () => window.removeEventListener("resize", resizeCanvas);
//   }, [resizeCanvas]);

//   // Animation loop with lerp
//   useEffect(() => {
//     if (!loaded) return;

//     let targetFrame = 0;
//     let displayFrame = 0;

//     const unsubscribe = scrollYProgress.on("change", (v) => {
//       const eased = 1 - Math.pow(1 - v, 1.8);
//       targetFrame = Math.min(TOTAL_FRAMES - 1, Math.max(0, eased * (TOTAL_FRAMES - 1)));
//     });

//     const animate = () => {
//       displayFrame += (targetFrame - displayFrame) * 0.12;
//       displayFrameRef.current = displayFrame;
//       drawFrame(displayFrame);
//       rafRef.current = requestAnimationFrame(animate);
//     };

//     rafRef.current = requestAnimationFrame(animate);

//     return () => {
//       unsubscribe();
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, [loaded, scrollYProgress, drawFrame]);

//   return (
//     <div
//       ref={containerRef}
//       className="relative"
//       style={{ height: "1000vh", width: "100%", marginLeft: 0 }}
//     >
//       {/* Loading screen */}
//       {!loaded && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center"
//           style={{ background: "#050505" }}
//         >
//           <div className="space-y-8 text-center">
//             {/* Logo mark */}
//             <div className="flex flex-col items-center gap-2">
//               <div
//                 className="w-12 h-12 rounded-2xl flex items-center justify-center mb-2"
//                 style={{ background: "rgba(255,107,53,0.15)", border: "1px solid rgba(255,107,53,0.3)" }}
//               >
//                 <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
//                   <path d="M11 2L13.5 7.5H19.5L14.75 11.25L16.5 17L11 13.5L5.5 17L7.25 11.25L2.5 7.5H8.5L11 2Z" fill="#FF6B35" />
//                 </svg>
//               </div>
//               <div
//                 className="text-base uppercase tracking-[0.35em] font-medium"
//                 style={{ fontFamily: "'SF Pro Display', sans-serif", color: "rgba(255,255,255,0.5)" }}
//               >
//                 FixPoint Repairs
//               </div>
//             </div>

//             {/* Progress ring */}
//             <div className="relative w-14 h-14 mx-auto">
//               <svg className="w-full h-full -rotate-90" viewBox="0 0 56 56">
//                 <circle cx="28" cy="28" r="24" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="2.5" />
//                 <circle
//                   cx="28" cy="28" r="24"
//                   fill="none" stroke="#FF6B35" strokeWidth="2.5"
//                   strokeLinecap="round"
//                   strokeDasharray={`${(loadProgress / 100) * 150.8} 150.8`}
//                   style={{ transition: "stroke-dasharray 0.15s ease" }}
//                 />
//               </svg>
//               <span
//                 className="absolute inset-0 flex items-center justify-center text-xs font-medium"
//                 style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'SF Pro Text', sans-serif" }}
//               >
//                 {loadProgress}%
//               </span>
//             </div>

//             <p
//               className="text-xs tracking-widest uppercase"
//               style={{ color: "rgba(255,255,255,0.2)", fontFamily: "'SF Pro Text', sans-serif" }}
//             >
//               Loading experience
//             </p>
//           </div>
//         </div>
//       )}

//       {/* Sticky viewport */}
//       <div
//         className="sticky top-0 h-screen overflow-hidden"
//         style={{
//           background: "#050505",
//           width: "100vw",
//           left: 0,
//           marginLeft: "calc(-1 * ((100vw - 100%) / 2))",
//         }}
//       >
//         {/* Ambient glow */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background: `radial-gradient(ellipse 65% 55% at 50% 60%, rgba(255,107,53,0.07) 0%, transparent 70%)`,
//           }}
//         />

//         {/* Canvas */}
//         <canvas
//           ref={canvasRef}
//           className="absolute inset-0"
//           style={{ display: loaded ? "block" : "none" }}
//         />

//         {/* Text overlays */}
//         {loaded &&
//           TEXT_OVERLAYS.map((overlay, i) => (
//             <TextSection key={i} overlay={overlay} scrollProgress={scrollYProgress} />
//           ))}

//         {/* Top nav */}
//         {loaded && (
//           <motion.nav
//             className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-6 z-20 pointer-events-none"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//           >
//             <div className="flex items-center gap-2.5">
//               <div
//                 className="w-7 h-7 rounded-lg flex items-center justify-center"
//                 style={{ background: "rgba(255,107,53,0.2)", border: "1px solid rgba(255,107,53,0.4)" }}
//               >
//                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//                   <path d="M6 1L7.5 4.5H11L8.25 6.75L9.5 10.5L6 8.25L2.5 10.5L3.75 6.75L1 4.5H4.5L6 1Z" fill="#FF6B35" />
//                 </svg>
//               </div>
//               <span
//                 className="text-sm font-semibold tracking-wide"
//                 style={{ fontFamily: "'SF Pro Display', sans-serif", color: "rgba(255,255,255,0.85)" }}
//               >
//                 FixPoint
//               </span>
//             </div>
//             <span
//               className="text-xs tracking-widest uppercase"
//               style={{ fontFamily: "'SF Pro Text', sans-serif", color: "rgba(255,255,255,0.3)" }}
//             >
//               Device Repair Specialists
//             </span>
//           </motion.nav>
//         )}

//         {/* Scroll hint */}
//         {loaded && (
//           <motion.div
//             style={{ opacity: scrollHintOpacity }}
//             className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
//           >
//             <span
//               className="text-xs uppercase tracking-[0.2em]"
//               style={{ fontFamily: "'SF Pro Text', sans-serif", color: "rgba(255,255,255,0.25)" }}
//             >
//               Scroll to explore
//             </span>
//             <motion.div
//               animate={{ y: [0, 6, 0] }}
//               transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
//               className="w-px h-8"
//               style={{ background: "linear-gradient(to bottom, rgba(255,107,53,0.5), transparent)" }}
//             />
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useEffect, useRef, useState, useCallback } from "react";
// import {
//   useScroll,
//   useTransform,
//   motion,
//   MotionValue,
// } from "framer-motion";
// import Lenis from "lenis";

// // ─── CONFIG ──────────────────────────────────────────────────────────────────
// const TOTAL_FRAMES = 240;
// const FRAME_PREFIX = "/iphone-wow-images/ezgif-frame-";

// function getFramePath(i: number) {
//   return `${FRAME_PREFIX}${String(i + 1).padStart(3, "0")}.jpg`;
// }

// // ─── TYPES ────────────────────────────────────────────────────────────────────
// interface TextOverlay {
//   startProgress: number;
//   endProgress: number;
//   headline: string;
//   sub: string;
//   align: "left" | "right" | "center";
// }

// // ─── SCROLL TEXT OVERLAYS ─────────────────────────────────────────────────────
// const TEXT_OVERLAYS: TextOverlay[] = [
//   {
//     startProgress: 0,
//     endProgress: 0.2,
//     headline: "We Fix What\nOthers Can't.",
//     sub: "Expert repair for every device — fast, reliable, and built to last.",
//     align: "center",
//   },
//   {
//     startProgress: 0.23,
//     endProgress: 0.44,
//     headline: "Screen shattered?\nWe've got you.",
//     sub: "Same-day screen replacements with OEM-quality glass.",
//     align: "left",
//   },
//   {
//     startProgress: 0.48,
//     endProgress: 0.68,
//     headline: "Battery dying\ntoo fast?",
//     sub: "Genuine battery swaps that breathe new life into your device.",
//     align: "right",
//   },
//   {
//     startProgress: 0.72,
//     endProgress: 0.85,
//     headline: "Water damage?\nDon't panic.",
//     sub: "Advanced micro-soldering and component-level repair. No fix, no fee.",
//     align: "left",
//   },
//   {
//     startProgress: 0.88,
//     endProgress: 1.0,
//     headline: "Your device.\nRestored.",
//     sub: "Walk in broken. Walk out fixed.",
//     align: "center",
//   },
// ];

// // ─── TEXT SECTION COMPONENT ───────────────────────────────────────────────────
// function TextSection({
//   overlay,
//   scrollProgress,
// }: {
//   overlay: TextOverlay;
//   scrollProgress: MotionValue<number>;
// }) {
//   const { startProgress, endProgress, headline, sub, align } = overlay;

//   // Clamp so keypoints are always strictly increasing regardless of window size
//   const span = endProgress - startProgress;
//   const fadeInEnd   = startProgress + Math.min(0.04, span * 0.25);
//   const fadeOutStart = endProgress  - Math.min(0.05, span * 0.25);
//   // Guard: if window is tiny, keep at least a hair of separation
//   const safePoints: [number, number, number, number] = [
//     startProgress,
//     Math.min(fadeInEnd, startProgress + span * 0.4),
//     Math.max(fadeOutStart, startProgress + span * 0.6),
//     endProgress,
//   ];

//   const opacity = useTransform(scrollProgress, safePoints, [0, 1, 1, 0]);
//   const y       = useTransform(scrollProgress, safePoints, [30, 0, 0, -20]);

//   const alignClass =
//     align === "left"
//       ? "items-start text-left pl-8 md:pl-24"
//       : align === "right"
//       ? "items-end text-right pr-8 md:pr-24"
//       : "items-center text-center";

//   const lines = headline.split("\n");

//   return (
//     <motion.div
//       style={{ opacity, y }}
//       className={`absolute inset-0 flex flex-col justify-center z-10 pointer-events-none ${alignClass}`}
//     >
//       <div className="max-w-xl space-y-4">
//         <h2
//           className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight"
//           style={{ fontFamily: "'SF Pro Display', 'Helvetica Neue', sans-serif" }}
//         >
//           {lines.map((line, i) => (
//             <span key={i} className="block">
//               {i === 1 ? (
//                 <span style={{ color: "#FF6B35" }}>{line}</span>
//               ) : (
//                 line
//               )}
//             </span>
//           ))}
//         </h2>
//         <p
//           className="text-base md:text-lg font-light leading-relaxed"
//           style={{
//             fontFamily: "'SF Pro Text', 'Helvetica Neue', sans-serif",
//             color: "rgba(255,255,255,0.55)",
//           }}
//         >
//           {sub}
//         </p>
//       </div>
//     </motion.div>
//   );
// }

// // ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
// export default function IphoneScroll() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const imagesRef = useRef<HTMLImageElement[]>([]);
//   const [loaded, setLoaded] = useState(false);
//   const [loadProgress, setLoadProgress] = useState(0);
//   const displayFrameRef = useRef(0);
//   const rafRef = useRef<number | null>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.04], [1, 0]);

//   // Lenis smooth scroll
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       smoothWheel: true,
//       wheelMultiplier: 1,
//       touchMultiplier: 1.1,
//       lerp: 0.12,
//     });
//     function raf(time: number) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);
//     return () => lenis.destroy();
//   }, []);

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

//   // Sub-frame blending for buttery smooth animation
//   const drawFrame = useCallback((displayFrame: number) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const loFrame = Math.floor(displayFrame);
//     const hiFrame = Math.min(TOTAL_FRAMES - 1, loFrame + 1);
//     const blend = displayFrame - loFrame;

//     const imgLo = imagesRef.current[loFrame];
//     const imgHi = imagesRef.current[hiFrame];

//     if (!imgLo?.complete || !imgLo.naturalWidth) return;

//     const cw = canvas.offsetWidth;
//     const ch = canvas.offsetHeight;

//     ctx.save();
//     ctx.setTransform(1, 0, 0, 1, 0, 0);
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.restore();

//     const scale = Math.min(cw / imgLo.naturalWidth, ch / imgLo.naturalHeight) * 0.94;
//     const dw = imgLo.naturalWidth * scale;
//     const dh = imgLo.naturalHeight * scale;
//     const dx = (cw - dw) / 2;
//     const dy = (ch - dh) / 2;

//     ctx.imageSmoothingEnabled = true;
//     ctx.imageSmoothingQuality = "high";

//     ctx.globalAlpha = 1;
//     ctx.drawImage(imgLo, dx, dy, dw, dh);

//     if (blend > 0 && imgHi?.complete && imgHi.naturalWidth) {
//       ctx.globalAlpha = blend;
//       ctx.drawImage(imgHi, dx, dy, dw, dh);
//     }

//     ctx.globalAlpha = 1;
//   }, []);

//   const resizeCanvas = useCallback(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const dpr = window.devicePixelRatio || 1;
//     const cssW = window.innerWidth;
//     const cssH = window.innerHeight;
//     canvas.width = cssW * dpr;
//     canvas.height = cssH * dpr;
//     canvas.style.width = `${cssW}px`;
//     canvas.style.height = `${cssH}px`;
//     const ctx = canvas.getContext("2d");
//     if (ctx) {
//       ctx.scale(dpr, dpr);
//       ctx.imageSmoothingEnabled = true;
//       ctx.imageSmoothingQuality = "high";
//     }
//     drawFrame(displayFrameRef.current);
//   }, [drawFrame]);

//   useEffect(() => {
//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);
//     return () => window.removeEventListener("resize", resizeCanvas);
//   }, [resizeCanvas]);

//   // Animation loop with lerp
//   useEffect(() => {
//     if (!loaded) return;

//     let targetFrame = 0;
//     let displayFrame = 0;

//     const unsubscribe = scrollYProgress.on("change", (v) => {
//       const eased = 1 - Math.pow(1 - v, 1.8);
//       targetFrame = Math.min(TOTAL_FRAMES - 1, Math.max(0, eased * (TOTAL_FRAMES - 1)));
//     });

//     const animate = () => {
//       displayFrame += (targetFrame - displayFrame) * 0.12;
//       displayFrameRef.current = displayFrame;
//       drawFrame(displayFrame);
//       rafRef.current = requestAnimationFrame(animate);
//     };

//     rafRef.current = requestAnimationFrame(animate);

//     return () => {
//       unsubscribe();
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, [loaded, scrollYProgress, drawFrame]);

//   return (
//     <div
//       ref={containerRef}
//       className="relative"
//       style={{ height: "1000vh", width: "100%", marginLeft: 0 }}
//     >
//       {/* Loading screen */}
//       {!loaded && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center"
//           style={{ background: "#050505" }}
//         >
//           <div className="space-y-8 text-center">
//             {/* Logo mark */}
//             <div className="flex flex-col items-center gap-2">
//               <div
//                 className="w-12 h-12 rounded-2xl flex items-center justify-center mb-2"
//                 style={{ background: "rgba(255,107,53,0.15)", border: "1px solid rgba(255,107,53,0.3)" }}
//               >
//                 <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
//                   <path d="M11 2L13.5 7.5H19.5L14.75 11.25L16.5 17L11 13.5L5.5 17L7.25 11.25L2.5 7.5H8.5L11 2Z" fill="#FF6B35" />
//                 </svg>
//               </div>
//               <div
//                 className="text-base uppercase tracking-[0.35em] font-medium"
//                 style={{ fontFamily: "'SF Pro Display', sans-serif", color: "rgba(255,255,255,0.5)" }}
//               >
//                 CellCureHub
//               </div>
//             </div>

//             {/* Progress ring */}
//             <div className="relative w-14 h-14 mx-auto">
//               <svg className="w-full h-full -rotate-90" viewBox="0 0 56 56">
//                 <circle cx="28" cy="28" r="24" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="2.5" />
//                 <circle
//                   cx="28" cy="28" r="24"
//                   fill="none" stroke="#FF6B35" strokeWidth="2.5"
//                   strokeLinecap="round"
//                   strokeDasharray={`${(loadProgress / 100) * 150.8} 150.8`}
//                   style={{ transition: "stroke-dasharray 0.15s ease" }}
//                 />
//               </svg>
//               <span
//                 className="absolute inset-0 flex items-center justify-center text-xs font-medium"
//                 style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'SF Pro Text', sans-serif" }}
//               >
//                 {loadProgress}%
//               </span>
//             </div>

//             <p
//               className="text-xs tracking-widest uppercase"
//               style={{ color: "rgba(255,255,255,0.2)", fontFamily: "'SF Pro Text', sans-serif" }}
//             >
//               Loading experience
//             </p>
//           </div>
//         </div>
//       )}

//       {/* Sticky viewport */}
//       <div
//         className="sticky top-0 h-screen overflow-hidden"
//         style={{
//           background: "#050505",
//           width: "100vw",
//           left: 0,
//           marginLeft: "calc(-1 * ((100vw - 100%) / 2))",
//         }}
//       >
//         {/* Ambient glow */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background: `radial-gradient(ellipse 65% 55% at 50% 60%, rgba(255,107,53,0.07) 0%, transparent 70%)`,
//           }}
//         />

//         {/* Canvas */}
//         <canvas
//           ref={canvasRef}
//           className="absolute inset-0"
//           style={{ display: loaded ? "block" : "none" }}
//         />

//         {/* Text overlays */}
//         {loaded &&
//           TEXT_OVERLAYS.map((overlay, i) => (
//             <TextSection key={i} overlay={overlay} scrollProgress={scrollYProgress} />
//           ))}

//         {/* Top nav */}
//         {loaded && (
//           <motion.nav
//             className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-6 z-20 pointer-events-none"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//           >
//             <div className="flex items-center gap-2.5">
//               <div
//                 className="w-7 h-7 rounded-lg flex items-center justify-center"
//                 style={{ background: "rgba(255,107,53,0.2)", border: "1px solid rgba(255,107,53,0.4)" }}
//               >
//                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//                   <path d="M6 1L7.5 4.5H11L8.25 6.75L9.5 10.5L6 8.25L2.5 10.5L3.75 6.75L1 4.5H4.5L6 1Z" fill="#FF6B35" />
//                 </svg>
//               </div>
//               <span
//                 className="text-sm font-semibold tracking-wide"
//                 style={{ fontFamily: "'SF Pro Display', sans-serif", color: "rgba(255,255,255,0.85)" }}
//               >
//                 CellCureHub
//               </span>
//             </div>
//             <span
//               className="text-xs tracking-widest uppercase"
//               style={{ fontFamily: "'SF Pro Text', sans-serif", color: "rgba(255,255,255,0.3)" }}
//             >
//               Device Repair Specialists
//             </span>
//           </motion.nav>
//         )}

//         {/* Scroll hint */}
//         {loaded && (
//           <motion.div
//             style={{ opacity: scrollHintOpacity }}
//             className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
//           >
//             <span
//               className="text-xs uppercase tracking-[0.2em]"
//               style={{ fontFamily: "'SF Pro Text', sans-serif", color: "rgba(255,255,255,0.25)" }}
//             >
//               Scroll to explore
//             </span>
//             <motion.div
//               animate={{ y: [0, 6, 0] }}
//               transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
//               className="w-px h-8"
//               style={{ background: "linear-gradient(to bottom, rgba(255,107,53,0.5), transparent)" }}
//             />
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
  MotionValue,
} from "framer-motion";
import Lenis from "lenis";

// ─── CONFIG ──────────────────────────────────────────────────────────────────
const TOTAL_FRAMES = 480;
const FRAME_PREFIX = "/iphone-wow-images/ezgif-frame-";

function getFramePath(i: number) {
  return `${FRAME_PREFIX}${String(i + 1).padStart(3, "0")}.jpg`;
}

// ─── TYPES ────────────────────────────────────────────────────────────────────
interface TextOverlay {
  startProgress: number;
  endProgress: number;
  headline: string;
  sub: string;
  align: "left" | "right" | "center";
}

// ─── SCROLL TEXT OVERLAYS ─────────────────────────────────────────────────────
const TEXT_OVERLAYS: TextOverlay[] = [
  {
    startProgress: 0,
    endProgress: 0.2,
    headline: "We Fix What\nOthers Can't.",
    sub: "Expert repair for every device — fast, reliable, and built to last.",
    align: "center",
  },
  {
    startProgress: 0.23,
    endProgress: 0.44,
    headline: "Screen shattered?\nWe've got you.",
    sub: "Same-day screen replacements with OEM-quality glass.",
    align: "left",
  },
  {
    startProgress: 0.48,
    endProgress: 0.68,
    headline: "Battery dying\ntoo fast?",
    sub: "Genuine battery swaps that breathe new life into your device.",
    align: "right",
  },
  {
    startProgress: 0.72,
    endProgress: 0.85,
    headline: "Water damage?\nDon't panic.",
    sub: "Advanced micro-soldering and component-level repair. No fix, no fee.",
    align: "left",
  },
  {
    startProgress: 0.88,
    endProgress: 1.0,
    headline: "Your device.\nRestored.",
    sub: "Walk in broken. Walk out fixed.",
    align: "center",
  },
];

// ─── TEXT SECTION COMPONENT ───────────────────────────────────────────────────
function TextSection({
  overlay,
  scrollProgress,
}: {
  overlay: TextOverlay;
  scrollProgress: MotionValue<number>;
}) {
  const { startProgress, endProgress, headline, sub, align } = overlay;

  // Clamp so keypoints are always strictly increasing regardless of window size
  const span = endProgress - startProgress;
  const fadeInEnd   = startProgress + Math.min(0.04, span * 0.25);
  const fadeOutStart = endProgress  - Math.min(0.05, span * 0.25);
  // Guard: if window is tiny, keep at least a hair of separation
  const safePoints: [number, number, number, number] = [
    startProgress,
    Math.min(fadeInEnd, startProgress + span * 0.4),
    Math.max(fadeOutStart, startProgress + span * 0.6),
    endProgress,
  ];

  const opacity = useTransform(scrollProgress, safePoints, [0, 1, 1, 0]);
  const y       = useTransform(scrollProgress, safePoints, [30, 0, 0, -20]);

  const alignClass =
    align === "left"
      ? "items-start text-left pl-8 md:pl-24"
      : align === "right"
      ? "items-end text-right pr-8 md:pr-24"
      : "items-center text-center";

  const lines = headline.split("\n");

  return (
    <motion.div
      style={{ opacity, y }}
      className={`absolute inset-0 flex flex-col justify-center z-10 pointer-events-none ${alignClass}`}
    >
      <div className="max-w-xl space-y-4">
        <h2
          className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight"
          style={{ fontFamily: "'SF Pro Display', 'Helvetica Neue', sans-serif" }}
        >
          {lines.map((line, i) => (
            <span key={i} className="block">
              {i === 1 ? (
                <span style={{ color: "#FF6B35" }}>{line}</span>
              ) : (
                line
              )}
            </span>
          ))}
        </h2>
        <p
          className="text-base md:text-lg font-light leading-relaxed"
          style={{
            fontFamily: "'SF Pro Text', 'Helvetica Neue', sans-serif",
            color: "rgba(255,255,255,0.55)",
          }}
        >
          {sub}
        </p>
      </div>
    </motion.div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function IphoneScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [revealed, setRevealed] = useState(false); // triggers entrance animation
  const displayFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.04], [1, 0]);

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.1,
      lerp: 0.12,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

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
        // small delay so loader exit animation plays before canvas appears
        setTimeout(() => setRevealed(true), 600);
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

  // // Sub-frame blending for buttery smooth animation
  // const drawFrame = useCallback((displayFrame: number) => {
  //   const canvas = canvasRef.current;
  //   if (!canvas) return;
  //   const ctx = canvas.getContext("2d");
  //   if (!ctx) return;

  //   const loFrame = Math.floor(displayFrame);
  //   const hiFrame = Math.min(TOTAL_FRAMES - 1, loFrame + 1);
  //   const blend = displayFrame - loFrame;

  //   const imgLo = imagesRef.current[loFrame];
  //   const imgHi = imagesRef.current[hiFrame];

  //   if (!imgLo?.complete || !imgLo.naturalWidth) return;

  //   const cw = canvas.offsetWidth;
  //   const ch = canvas.offsetHeight;

  //   ctx.save();
  //   ctx.setTransform(1, 0, 0, 1, 0, 0);
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   ctx.restore();

  //   const scale = Math.min(cw / imgLo.naturalWidth, ch / imgLo.naturalHeight) * 0.94;
  //   const dw = imgLo.naturalWidth * scale;
  //   const dh = imgLo.naturalHeight * scale;
  //   const dx = (cw - dw) / 2;
  //   const dy = (ch - dh) / 2;

  //   ctx.imageSmoothingEnabled = true;
  //   ctx.imageSmoothingQuality = "high";

  //   ctx.globalAlpha = 1;
  //   ctx.drawImage(imgLo, dx, dy, dw, dh);

  //   if (blend > 0 && imgHi?.complete && imgHi.naturalWidth) {
  //     ctx.globalAlpha = blend;
  //     ctx.drawImage(imgHi, dx, dy, dw, dh);
  //   }

  //   ctx.globalAlpha = 1;
  // }, []);

// Replace your existing drawFrame function with this:

const drawFrame = useCallback((displayFrame: number) => {
  const canvas = canvasRef.current;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const loFrame = Math.floor(displayFrame);
  const hiFrame = Math.min(TOTAL_FRAMES - 1, loFrame + 1);
  const blend = displayFrame - loFrame;

  const imgLo = imagesRef.current[loFrame];
  const imgHi = imagesRef.current[hiFrame];

  if (!imgLo?.complete || !imgLo.naturalWidth) return;

  const cw = canvas.offsetWidth;
  const ch = canvas.offsetHeight;

  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.restore();

  // ── COVER MODE (no black bars) ──────────────────────────────────────
  // Scale so the image fills the entire canvas, cropping if needed
  const imgW = imgLo.naturalWidth;
  const imgH = imgLo.naturalHeight;

  const scale = Math.max(cw / imgW, ch / imgH); // <-- max instead of min
  const dw = imgW * scale;
  const dh = imgH * scale;
  const dx = (cw - dw) / 2;   // center-crop horizontally
  const dy = (ch - dh) / 2;   // center-crop vertically

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";

  ctx.globalAlpha = 1;
  ctx.drawImage(imgLo, dx, dy, dw, dh);

  if (blend > 0 && imgHi?.complete && imgHi.naturalWidth) {
    ctx.globalAlpha = blend;
    ctx.drawImage(imgHi, dx, dy, dw, dh);
  }

  ctx.globalAlpha = 1;
}, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const cssW = window.innerWidth;
    const cssH = window.innerHeight;
    canvas.width = cssW * dpr;
    canvas.height = cssH * dpr;
    canvas.style.width = `${cssW}px`;
    canvas.style.height = `${cssH}px`;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.scale(dpr, dpr);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
    }
    drawFrame(displayFrameRef.current);
  }, [drawFrame]);

  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [resizeCanvas]);

  // Animation loop with lerp
  useEffect(() => {
    if (!loaded) return;

    let targetFrame = 0;
    let displayFrame = 0;

    const unsubscribe = scrollYProgress.on("change", (v) => {
      const eased = 1 - Math.pow(1 - v, 1.8);
      targetFrame = Math.min(TOTAL_FRAMES - 1, Math.max(0, eased * (TOTAL_FRAMES - 1)));
    });

    const animate = () => {
      displayFrame += (targetFrame - displayFrame) * 0.12;
      displayFrameRef.current = displayFrame;
      drawFrame(displayFrame);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      unsubscribe();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [loaded, scrollYProgress, drawFrame]);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: "1000vh", width: "100%", marginLeft: 0 }}
    >
      {/* ── LOADER — fades out when loading completes ─────────────────── */}
      <AnimatePresence>
        {!loaded && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ background: "#050505" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <motion.div
              className="space-y-8 text-center"
              exit={{ opacity: 0, y: -16, scale: 0.97 }}
              transition={{ duration: 0.45, ease: "easeIn" }}
            >
              {/* Logo mark */}
              <div className="flex flex-col items-center gap-2">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-2"
                  style={{ background: "rgba(255,107,53,0.15)", border: "1px solid rgba(255,107,53,0.3)" }}
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M11 2L13.5 7.5H19.5L14.75 11.25L16.5 17L11 13.5L5.5 17L7.25 11.25L2.5 7.5H8.5L11 2Z" fill="#FF6B35" />
                  </svg>
                </div>
                <div
                  className="text-base uppercase tracking-[0.35em] font-medium"
                  style={{ fontFamily: "'SF Pro Display', sans-serif", color: "rgba(255,255,255,0.5)" }}
                >
                  CellCureHub
                </div>
              </div>

              {/* Progress ring */}
              <div className="relative w-14 h-14 mx-auto">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 56 56">
                  <circle cx="28" cy="28" r="24" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="2.5" />
                  <circle
                    cx="28" cy="28" r="24"
                    fill="none" stroke="#FF6B35" strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray={`${(loadProgress / 100) * 150.8} 150.8`}
                    style={{ transition: "stroke-dasharray 0.15s ease" }}
                  />
                </svg>
                <span
                  className="absolute inset-0 flex items-center justify-center text-xs font-medium"
                  style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'SF Pro Text', sans-serif" }}
                >
                  {loadProgress}%
                </span>
              </div>

              <p
                className="text-xs tracking-widest uppercase"
                style={{ color: "rgba(255,255,255,0.2)", fontFamily: "'SF Pro Text', sans-serif" }}
              >
                Loading experience
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── STICKY VIEWPORT ──────────────────────────────────────────────── */}
      <div
        className="sticky top-0 h-screen overflow-hidden"
        style={{
          background: "#050505",
          width: "100vw",
          left: 0,
          marginLeft: "calc(-1 * ((100vw - 100%) / 2))",
        }}
      >
        {/* Ambient glow — fades in with reveal */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: revealed ? 1 : 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          style={{
            background: `radial-gradient(ellipse 65% 55% at 50% 60%, rgba(255,107,53,0.07) 0%, transparent 70%)`,
          }}
        />

        {/* Canvas — pure opacity fade, no scale/blur */}
        <motion.canvas
          ref={canvasRef}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: revealed ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Text overlays — mount only after revealed so hooks are stable */}
        {revealed &&
          TEXT_OVERLAYS.map((overlay, i) => (
            <TextSection key={i} overlay={overlay} scrollProgress={scrollYProgress} />
          ))}

        {/* Top nav — slides down after canvas */}
        <motion.nav
          className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-6 z-20 pointer-events-none"
          initial={{ opacity: 0, y: -18 }}
          animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: -18 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: "rgba(255,107,53,0.2)", border: "1px solid rgba(255,107,53,0.4)" }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 1L7.5 4.5H11L8.25 6.75L9.5 10.5L6 8.25L2.5 10.5L3.75 6.75L1 4.5H4.5L6 1Z" fill="#FF6B35" />
              </svg>
            </div>
            <span
              className="text-sm font-semibold tracking-wide"
              style={{ fontFamily: "'SF Pro Display', sans-serif", color: "rgba(255,255,255,0.85)" }}
            >
              CellCureHub
            </span>
          </div>
          <span
            className="text-xs tracking-widest uppercase"
            style={{ fontFamily: "'SF Pro Text', sans-serif", color: "rgba(255,255,255,0.3)" }}
          >
            Device Repair Specialists
          </span>
        </motion.nav>

        {/* Scroll hint — rises up last */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.8, delay: 0.85, ease: "easeOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          {/* wrap in a second motion.div so scrollHintOpacity still works */}
          <motion.div
            style={{ opacity: scrollHintOpacity }}
            className="flex flex-col items-center gap-2"
          >
            <span
              className="text-xs uppercase tracking-[0.2em]"
              style={{ fontFamily: "'SF Pro Text', sans-serif", color: "rgba(255,255,255,0.25)" }}
            >
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-px h-8"
              style={{ background: "linear-gradient(to bottom, rgba(255,107,53,0.5), transparent)" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}