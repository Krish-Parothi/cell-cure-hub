
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
import NextImage from "next/image";

// ─── CONFIG ──────────────────────────────────────────────────────────────────
// const TOTAL_FRAMES = 480;
const TOTAL_FRAMES = 480;
// const FRAME_PREFIX = "/iphone-wow-images/ezgif-frame-";
const FRAME_PREFIX = "https://ik.imagekit.io/yzstxngc8/iphone-frames/image";

// ─── MOBILE FRAME CONFIG (WebP, 160 frames, ~1.5 MB total) ───────────────────
const MOBILE_TOTAL  = 160;   // every 3rd original frame
const MOBILE_STRIDE = 3;     // 480 / 160 = 3
const MOBILE_PREFIX = "/iphone-mobile-frames/";

function getFramePath(i: number) {
  return `${FRAME_PREFIX}${String(i + 1).padStart(3, "0")}.jpg`;
}

function getMobileFramePath(mobileIdx: number) {
  // mobileIdx is 0-based (0 → 001.webp … 159 → 160.webp)
  return `${MOBILE_PREFIX}${String(mobileIdx + 1).padStart(3, "0")}.webp`;
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
    endProgress: 0.12,
    headline: "Screen\nDamage.",
    sub: "Cracked, shattered, or broken display? We replace it same-day.",
    align: "left",
  },
  {
    startProgress: 0.15,
    endProgress: 0.28,
    headline: "Battery\nReplacement.",
    sub: "Low battery life? We install a fresh, original battery.",
    align: "right",
  },
  {
    startProgress: 0.31,
    endProgress: 0.44,
    headline: "IC & Chip\nRepair.",
    sub: "Charging problems, no signal, or hardware issues? Fixed with precision.",
    align: "left",
  },
  {
    startProgress: 0.47,
    endProgress: 0.58,
    headline: "Water\nDamage.",
    sub: "Dropped in water? We clean, dry, and repair every component.",
    align: "right",
  },
  {
    startProgress: 0.61,
    endProgress: 0.70,
    headline: "Device\nRestored.",
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
  const span = endProgress - startProgress;
  const fadeInEnd   = startProgress + Math.min(0.04, span * 0.25);
  const fadeOutStart = endProgress  - Math.min(0.05, span * 0.25);

  const opacity = useTransform(scrollProgress, (v: number) => {
    if (v <= startProgress || v >= endProgress) return 0;
    if (v < fadeInEnd) {
      return (v - startProgress) / (fadeInEnd - startProgress);
    }
    if (v <= fadeOutStart) {
      return 1;
    }
    return 1 - (v - fadeOutStart) / (endProgress - fadeOutStart);
  });

  const y = useTransform(scrollProgress, (v: number) => {
    if (v <= startProgress) return 30;
    if (v >= endProgress) return -20;
    if (v < fadeInEnd) {
      const pct = (v - startProgress) / (fadeInEnd - startProgress);
      return 30 - pct * 30;
    }
    if (v <= fadeOutStart) {
      return 0;
    }
    const pct = (v - fadeOutStart) / (endProgress - fadeOutStart);
    return -pct * 20;
  });

  const alignClass =
    align === "left"
      ? "md:items-start md:text-left md:pl-28 lg:pl-36 items-center text-center px-5"
      : align === "right"
      ? "md:items-end md:text-right md:pr-28 lg:pr-36 items-center text-center px-5"
      : "items-center text-center px-5";

  const lines = headline.split("\n");

  return (
    <motion.div
      style={{ opacity, y }}
      className={`absolute bottom-0 left-0 right-0 h-[calc((100vh-56.25vw)/2)] md:inset-0 md:h-full flex flex-col justify-center z-10 pointer-events-none ${alignClass}`}
    >
      <div className="max-w-xl space-y-3 md:space-y-4">
        <h2
          className="text-2xl sm:text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight"
          style={{ 
            fontFamily: "'SF Pro Display', 'Helvetica Neue', sans-serif",
            textShadow: "0 4px 16px rgba(0,0,0,0.95), 0 2px 4px rgba(0,0,0,0.95), 0 0 20px rgba(0,0,0,0.9)"
          }}
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
          className="text-sm sm:text-base md:text-lg font-semibold leading-relaxed"
          style={{
            fontFamily: "'SF Pro Text', 'Helvetica Neue', sans-serif",
            color: "rgba(255,255,255,0.95)",
            textShadow: "0 2px 8px rgba(0,0,0,0.95), 0 0 15px rgba(0,0,0,0.9)"
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
  // Desktop: HTMLImageElement[]; Mobile: ImageBitmap[]
  const imagesRef   = useRef<HTMLImageElement[]>([]);
  const bitmapsRef  = useRef<ImageBitmap[]>([]);
  const isMobileRef = useRef(false); // set once on mount
  const [loaded, setLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const displayFrameRef  = useRef(0);
  const lastDrawnFrameRef = useRef(-1);  // dirty-frame guard
  const rafRef = useRef<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  // State-driven overlay (useTransform + motion.div style binding was silently failing)
  const [overlayState, setOverlayState] = useState({ black: 0 });
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v: number) => {
      // Black overlay: 0.70 → 0.78
      const black = v <= 0.70 ? 0 : v >= 0.70 ? 1 : (v - 0.70) / 0.03;
      setOverlayState({ black });
    });
    return unsubscribe;
  }, [scrollYProgress]);

  // Detect mobile once (runs client-side only)
  useEffect(() => {
    isMobileRef.current = window.innerWidth < 768 ||
      /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }, []);

  // Lenis smooth scroll — desktop only; native touch scroll is GPU-accelerated on mobile
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;
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

  // Frame loading:
  //   Desktop → 480 JPEG batches (unchanged)
  //   Mobile  → 160 WebP frames via createImageBitmap, priority-first
  //             1.55 MB vs 56 MB → ~35× smaller → loads in seconds not minutes
  useEffect(() => {
    const mobile = typeof window !== 'undefined' && (
      window.innerWidth < 768 ||
      /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
    );
    isMobileRef.current = mobile;

    if (mobile && typeof createImageBitmap === 'function') {
      // ── Mobile: load 160 WebP frames, priority-first ──────────────────────
      const PRIORITY_COUNT = 20; // load first 20 frames before showing loader done
      const BATCH_SIZE = 10;
      const bitmaps: ImageBitmap[] = new Array(MOBILE_TOTAL);
      let done = 0;

      const loadMobileBitmap = (mobileIdx: number, isPriority: boolean): Promise<void> =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = getMobileFramePath(mobileIdx);
          img.decoding = 'async';
          img.onload = () => {
            createImageBitmap(img)
              .then((bmp) => { bitmaps[mobileIdx] = bmp; })
              .catch(() => {})
              .finally(() => {
                done++;
                if (isPriority) {
                  setLoadProgress(Math.min(100, Math.round((done / PRIORITY_COUNT) * 100)));
                }
                resolve();
              });
          };
          img.onerror = () => {
            done++;
            if (isPriority) {
              setLoadProgress(Math.min(100, Math.round((done / PRIORITY_COUNT) * 100)));
            }
            resolve();
          };
        });

      const loadAll = async () => {
        // Phase 1: priority frames 0-19 — loads fast, gets animation started
        const priorityBatch: Promise<void>[] = [];
        for (let i = 0; i < PRIORITY_COUNT; i++) {
          priorityBatch.push(loadMobileBitmap(i, true));
        }
        await Promise.all(priorityBatch);

        // Signal ready immediately after priority frames are in
        bitmapsRef.current = bitmaps;
        setLoaded(true);
        setTimeout(() => {
          setRevealed(true);
          if (typeof window !== 'undefined') {
            (window as any).__cellcureRevealed = true;
            window.dispatchEvent(new Event('cellcure-revealed'));
          }
        }, 600);

        // Phase 2: stream remaining frames in background (non-blocking)
        for (let start = PRIORITY_COUNT; start < MOBILE_TOTAL; start += BATCH_SIZE) {
          const batch: Promise<void>[] = [];
          for (let i = start; i < Math.min(start + BATCH_SIZE, MOBILE_TOTAL); i++) {
            batch.push(loadMobileBitmap(i, false));
          }
          await Promise.all(batch);
          // Keep bitmapsRef updated as new frames arrive
          bitmapsRef.current = bitmaps;
        }
      };
      loadAll();

    } else {
      // ── Desktop: 480 JPEG batches (unchanged) ────────────────────────────
      const BATCH_SIZE = 12;
      let done = 0;
      const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);

      const loadImage = (idx: number): Promise<void> =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = getFramePath(idx);
          img.decoding = 'async';
          const finish = () => {
            done++;
            setLoadProgress(Math.round((done / TOTAL_FRAMES) * 100));
            resolve();
          };
          img.onload = finish;
          img.onerror = finish;
          images[idx] = img;
        });

      const loadAll = async () => {
        for (let start = 0; start < TOTAL_FRAMES; start += BATCH_SIZE) {
          const batch: Promise<void>[] = [];
          for (let i = start; i < Math.min(start + BATCH_SIZE, TOTAL_FRAMES); i++) {
            batch.push(loadImage(i));
          }
          await Promise.all(batch);
        }
        imagesRef.current = images;
        setLoaded(true);
        setTimeout(() => {
          setRevealed(true);
          if (typeof window !== 'undefined') {
            (window as any).__cellcureRevealed = true;
            window.dispatchEvent(new Event('cellcure-revealed'));
          }
        }, 600);
      };
      loadAll();
    }
  }, []);

  const drawFrame = useCallback((displayFrame: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const mobile = isMobileRef.current || canvas.offsetWidth < 768;
    const loFrame = Math.floor(displayFrame);
    const hiFrame = Math.min(TOTAL_FRAMES - 1, loFrame + 1);
    const blend = displayFrame - loFrame;

    // On mobile: map the 0-479 display frame to the 0-159 mobile bitmap index
    const mobileLo = Math.min(MOBILE_TOTAL - 1, Math.floor(loFrame / MOBILE_STRIDE));
    const mobileHi = Math.min(MOBILE_TOTAL - 1, mobileLo + 1);

    const cw = canvas.offsetWidth;
    const ch = canvas.offsetHeight;

    // ── Source selection: ImageBitmap (mobile) vs HTMLImageElement (desktop) ──
    let srcLo: HTMLImageElement | ImageBitmap | null = null;
    let srcHi: HTMLImageElement | ImageBitmap | null = null;
    let imgW: number, imgH: number;

    if (mobile && bitmapsRef.current.length > 0) {
      srcLo = bitmapsRef.current[mobileLo] ?? null;
      srcHi = bitmapsRef.current[mobileHi] ?? null;
      if (!srcLo) return;
      imgW = (srcLo as ImageBitmap).width;
      imgH = (srcLo as ImageBitmap).height;
    } else {
      const imgLo = imagesRef.current[loFrame];
      const imgHi = imagesRef.current[hiFrame];
      if (!imgLo?.complete || !imgLo.naturalWidth) return;
      srcLo = imgLo;
      srcHi = imgHi;
      imgW = imgLo.naturalWidth;
      imgH = imgLo.naturalHeight;
    }

    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();

    let scale: number, dw: number, dh: number, dx: number, dy: number;

    if (mobile) {
      // Mobile: fill width, center vertically
      scale = cw / imgW;
      dw = cw;
      dh = imgH * scale;
      dx = 0;
      dy = (ch - dh) / 2;
    } else {
      // Desktop: cover mode — fill viewport, crop edges (unchanged)
      scale = Math.max(cw / imgW, ch / imgH);
      dw = imgW * scale;
      dh = imgH * scale;
      dx = (cw - dw) / 2;
      dy = (ch - dh) / 2;
    }

    ctx.imageSmoothingEnabled = true;
    // Mobile: 'medium' saves GPU time; desktop keeps 'high'
    ctx.imageSmoothingQuality = mobile ? 'medium' : 'high';

    ctx.globalAlpha = 1;
    ctx.drawImage(srcLo as CanvasImageSource, dx, dy, dw, dh);

    // Sub-frame blending — skip on mobile (saves a full drawImage call per frame)
    if (!mobile && blend > 0 && srcHi) {
      const hi = srcHi as HTMLImageElement;
      if (hi.complete && hi.naturalWidth) {
        ctx.globalAlpha = blend;
        ctx.drawImage(hi, dx, dy, dw, dh);
      }
    }
    ctx.globalAlpha = 1;

    // Mobile: seamless gradient fades at top & bottom — reuse gradient objects
    if (mobile) {
      const fadeH = Math.round(dh * 0.18);
      const bg = '#050505';

      // Bars above/below frame
      ctx.fillStyle = bg;
      if (dy > 0) ctx.fillRect(0, 0, cw, dy);
      if (dy + dh < ch) ctx.fillRect(0, dy + dh, cw, ch - (dy + dh));

      // Top fade
      const topGrad = ctx.createLinearGradient(0, dy, 0, dy + fadeH);
      topGrad.addColorStop(0, bg);
      topGrad.addColorStop(1, 'rgba(5,5,5,0)');
      ctx.fillStyle = topGrad;
      ctx.fillRect(0, dy, cw, fadeH);

      // Bottom fade
      const btmGrad = ctx.createLinearGradient(0, dy + dh - fadeH, 0, dy + dh);
      btmGrad.addColorStop(0, 'rgba(5,5,5,0)');
      btmGrad.addColorStop(1, bg);
      ctx.fillStyle = btmGrad;
      ctx.fillRect(0, dy + dh - fadeH, cw, fadeH);
    }
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rawDpr = window.devicePixelRatio || 1;
    const mobile = isMobileRef.current;
    // Cap DPR at 1 on mobile — halves GPU memory & fill-rate cost at no visible quality loss
    const dpr = mobile ? Math.min(1, rawDpr) : rawDpr;
    const cssW = window.innerWidth;
    const cssH = window.innerHeight;
    canvas.width  = cssW * dpr;
    canvas.height = cssH * dpr;
    canvas.style.width  = `${cssW}px`;
    canvas.style.height = `${cssH}px`;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = mobile ? 'medium' : 'high';
    }
    lastDrawnFrameRef.current = -1; // invalidate cache on resize
    drawFrame(displayFrameRef.current);
  }, [drawFrame]);

  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [resizeCanvas]);

  // Animation loop with lerp + dirty-frame guard
  useEffect(() => {
    if (!loaded) return;

    const mobile = isMobileRef.current;
    // Mobile: snappier lerp (0.22) so scroll feels immediately responsive
    // Desktop: buttery lerp (0.12) for the cinematic feel
    const LERP = mobile ? 0.22 : 0.12;

    let targetFrame = 0;
    let displayFrame = 0;

    const unsubscribe = scrollYProgress.on('change', (v) => {
      const progressMapped = Math.min(1, v / 0.70);
      const eased = 1 - Math.pow(1 - progressMapped, 1.8);
      targetFrame = Math.min(TOTAL_FRAMES - 1, Math.max(0, eased * (TOTAL_FRAMES - 1)));
    });

    const animate = () => {
      displayFrame += (targetFrame - displayFrame) * LERP;
      displayFrameRef.current = displayFrame;

      // Dirty-frame guard: only repaint if the integer frame changed
      // On mobile this skips ~60% of drawFrame calls during slow/no scroll
      const roundedFrame = Math.round(displayFrame);
      if (roundedFrame !== lastDrawnFrameRef.current) {
        lastDrawnFrameRef.current = roundedFrame;
        drawFrame(displayFrame);
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
              {/* <div className="flex flex-col items-center gap-2">
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
              </div> */}
            <div className="relative flex items-center justify-center p-6">
              <div 
                className="absolute w-96 h-96 rounded-full pointer-events-none" 
                style={{
                  background: "radial-gradient(circle, rgba(255, 92, 0, 0.16) 0%, rgba(255, 92, 0, 0) 70%)"
                }}
              />
              <NextImage
                src="/logo.png"
                alt="CellCure Hub"
                width={400}
                height={140}
                className="object-contain relative z-10"
                style={{ filter: "drop-shadow(0 0 10px rgba(255, 92, 0, 0.35)) brightness(1.06)" }}
              />
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

        {/* ── BLACK OVERLAY — state-driven, plain div ─────────────────── */}
        <div 
          style={{ 
            opacity: overlayState.black,
            backgroundColor: "#050505",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 50,
            pointerEvents: "none",
            willChange: "opacity"
          }}
        />

        {/* Scroll hint — rises up last */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.8, delay: 0.85, ease: "easeOut" }}
          className="absolute bottom-10 left-0 right-0 flex flex-col items-center justify-center gap-2 pointer-events-none"
          style={{ zIndex: 5 }}
        >
          <motion.div
            style={{ opacity: scrollHintOpacity }}
            className="flex flex-col items-center gap-2 w-full justify-center"
          >
            <span
              className="text-xs uppercase tracking-[0.25em] text-center font-bold"
              style={{ 
                fontFamily: "'SF Pro Text', sans-serif", 
                color: "rgba(255,255,255,0.9)",
                textShadow: "0 2px 10px rgba(0,0,0,1), 0 0 5px rgba(0,0,0,0.8)" 
              }}
            >
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-0.5 h-10 mx-auto mt-1"
              style={{ background: "linear-gradient(to bottom, rgba(255,92,0,0.95), transparent)" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}