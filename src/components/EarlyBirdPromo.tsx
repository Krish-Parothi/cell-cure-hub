
import Link from 'next/link';

export function EarlyBirdPromo() {
  return (
    <section className="relative px-4 sm:px-6 py-20 sm:py-24 md:py-36 bg-[#050505] border-t border-white/5 select-none overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] rounded-[100%] bg-[#FF6B35]/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 sm:mb-8"
          style={{ background: "rgba(255,107,53,0.1)", border: "1px solid rgba(255,107,53,0.3)" }}
        >
          <span className="w-2 h-2 rounded-full animate-ping" style={{ background: "#FF6B35" }} />
          <span className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase font-bold text-[#FF6B35] font-sans">
            Early Access Open
          </span>
        </div>

        {/* FIX: text-4xl on mobile was fine, but md:text-7xl caused overflow — now uses clamp-like steps */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-4 sm:mb-6">
          Be the{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF9A6C]">
            Early Bird
          </span>
        </h2>

        <p className="text-sm sm:text-base md:text-xl text-white/50 mb-8 sm:mb-12 max-w-2xl mx-auto font-medium font-sans leading-relaxed px-2">
          Reserve your spot now and get a flat{' '}
          <span className="text-white font-bold">15% discount</span> on your first premium device repair when we launch.
        </p>

        <Link
          href="/early-bird"
          className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl font-black text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(255,107,53,0.2)] hover:shadow-[0_0_60px_rgba(255,107,53,0.4)] uppercase"
          style={{ background: "linear-gradient(135deg, #FF6B35 0%, #FF9A6C 100%)", color: "#fff" }}
        >
          <span>Claim 15% Off Now</span>
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}