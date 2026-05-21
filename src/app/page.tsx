
import IphoneScroll from "@/components/IphoneScroll";
import { StorySection } from "@/components/StorySection";
import { NagpurMapSection } from "@/components/NagpurMapSection";
import { InstagramSection } from "@/components/InstagramSection";
import { FooterSection } from "@/components/FooterSection";
import { TopBanner } from "@/components/TopBanner";
import { EarlyBirdPromo } from "@/components/EarlyBirdPromo";

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main style={{ background: "#050505" }}>
      <TopBanner />

      {/* ── SCROLL ANIMATION ─────────────────────────────────────────────── */}
      <IphoneScroll />

      <EarlyBirdPromo />

      <StorySection />
      <NagpurMapSection />
      <InstagramSection />

      {/* ── COMING SOON ──────────────────────────────────────────────────── */}
      <section
        className="relative px-6 py-32 md:py-44 overflow-hidden"
        style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        {/* Glow orbs */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ width: "800px", height: "800px", background: "radial-gradient(circle, rgba(255,107,53,0.06) 0%, transparent 65%)" }}
        />
        <div
          className="absolute top-0 right-0 pointer-events-none"
          style={{ width: "400px", height: "400px", background: "radial-gradient(circle, rgba(255,107,53,0.04) 0%, transparent 70%)" }}
        />

        <div className="relative max-w-3xl mx-auto text-center">
          {/* Pill badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-10"
            style={{ background: "rgba(255,107,53,0.08)", border: "1px solid rgba(255,107,53,0.2)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#FF6B35" }} />
            <span
              className="text-xs tracking-[0.3em] uppercase font-medium"
              style={{ fontFamily: "'SF Pro Text', sans-serif", color: "#FF6B35" }}
            >
              Coming Soon
            </span>
          </div>

          <h2
            className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none mb-6"
            style={{ fontFamily: "'SF Pro Display', sans-serif" }}
          >
            Something big
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #FF6B35 0%, #FF9A6C 50%, #FF6B35 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              is Coming Soon...
            </span>
          </h2>

          

          
        </div>
      </section>

      
    </main>
  );
}