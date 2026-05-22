// import Link from 'next/link';

// export function TopBanner() {
//   return (
//     <div className="w-full bg-[#FF6B35] text-white py-3 px-4 text-center z-[100] relative flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 shadow-[0_4px_20px_rgba(255,107,53,0.3)] select-none">
//       <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] font-sans">
//         LAUNCHING SOON • EARLY ACCESS OPEN — JOIN THE WAITLIST
//       </span>
//       <Link 
//         href="/early-bird" 
//         className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] bg-white text-[#FF6B35] px-4 py-1.5 rounded-full hover:bg-black hover:text-white transition-colors duration-300 shadow-md"
//       >
//         RESERVE SEAT →
//       </Link>
//     </div>
//   );
// }


import Link from 'next/link';

export function TopBanner() {
  return (
    <div className="w-full bg-[#FF6B35] text-white py-2.5 px-4 text-center z-[100] relative flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-4 shadow-[0_4px_20px_rgba(255,107,53,0.3)] select-none">
      <span className="text-[9px] sm:text-[10px] md:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] font-sans leading-snug">
        LAUNCHING SOON • EARLY ACCESS OPEN
      </span>
      <Link
        href="/early-bird"
        className="text-[9px] sm:text-[10px] md:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] bg-white text-[#FF6B35] px-3 py-1 sm:px-4 sm:py-1.5 rounded-full hover:bg-black hover:text-white transition-colors duration-300 shadow-md whitespace-nowrap"
      >
        RESERVE SEAT →
      </Link>
    </div>
  );
}