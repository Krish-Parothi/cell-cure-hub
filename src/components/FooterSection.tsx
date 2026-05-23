

// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { MapPin, Phone, Mail } from 'lucide-react';

// const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
//     <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
//     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//     <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
//   </svg>
// );

// const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
//     <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//   </svg>
// );

// export function FooterSection() {
//   return (
//     <footer className="relative bg-[#050505] z-20 overflow-hidden select-none font-sans">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative z-10">

//         {/* Top: Logo + thin rule */}
//         <div className="flex items-center gap-6 mb-14">
//           <Link href="/" className="block group flex-shrink-0">
//             <Image
//               src="/logo.png"
//               alt="CellCure Hub Logo"
//               width={120}
//               height={42}
//               className="object-contain filter brightness-[1.05] drop-shadow-[0_0_8px_rgba(255,92,0,0.12)] group-hover:scale-[1.01] transition-transform duration-300"
//             />
//           </Link>
//           <div className="flex-1 h-px bg-white/[0.06]" />
//           {/* Powered by badge — top right */}
//           <div className="flex items-center gap-2 flex-shrink-0">
//             <span className="text-[10px] uppercase tracking-widest text-white/25 font-semibold">Powered by</span>
//             <span className="text-[10px] uppercase tracking-widest text-[#FF5C00]/80 font-black">Mukul Mobiles</span>
//             <span className="hidden sm:inline text-[10px] text-white/20 font-medium italic">· 25 years of trust</span>
//           </div>
//         </div>

//         {/* Main 2-col layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 pb-16 items-start">

//           {/* Left: About */}
//           <div className="space-y-5">
//             <h4 className="text-xs font-black uppercase tracking-widest text-[#FF5C00]">About Us</h4>
//             <p className="text-sm text-white/50 leading-[1.85]">
//               Great technology deserves exceptional care. Built on Mukul Mobile&apos;s 25-year legacy of trust and expertise, CellCure Hub is designed to make mobile repair effortless — from diagnosis to delivery. Combining skilled craftsmanship, modern technology, and transparent service, we restore devices with the precision they deserve and the confidence our customers expect.
//             </p>
//             {/* Socials */}
//             <div className="flex items-center gap-3 pt-1">
//               <a
//                 href="https://www.instagram.com/cellcure_hub/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-[#FF5C00]/60 transition-all duration-300"
//               >
//                 <Instagram className="w-4 h-4" />
//               </a>
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-[#FF5C00]/60 transition-all duration-300"
//               >
//                 <Facebook className="w-4 h-4" />
//               </a>
//             </div>
//           </div>

//           {/* Right: Contact / Find Us */}
//           <div className="space-y-5">
//             <h4 className="text-xs font-black uppercase tracking-widest text-[#FF5C00]">Find Us</h4>
//             <ul className="space-y-4">
//               <li className="flex items-start gap-3">
//                 <MapPin className="w-4 h-4 text-[#FF5C00]/60 mt-0.5 flex-shrink-0" />
//                 <span className="text-sm text-white/45 leading-relaxed">
//                   Mukul Mobile, Nagpur, Maharashtra
//                 </span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Phone className="w-4 h-4 text-[#FF5C00]/60 flex-shrink-0" />
//                 <a href="tel:+919322842703" className="text-sm text-white/45 hover:text-white/70 transition-colors duration-200">
//                   +91 93228 42703
//                 </a>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Mail className="w-4 h-4 text-[#FF5C00]/60 flex-shrink-0" />
//                 <a href="mailto:cellcurehub@gmail.com" className="text-sm text-white/45 hover:text-white/70 transition-colors duration-200">
//                   cellcurehub@gmail.com
//                 </a>
//               </li>
//             </ul>

//             {/* Opening Hours */}
//             <div className="pt-2 border-t border-white/[0.05] space-y-2">
//               <p className="text-[10px] uppercase tracking-widest text-white/25 font-semibold">Opening Soon</p>
//               <p className="text-sm text-white/40">Stay tuned — bookings launching shortly.</p>
//             </div>
//           </div>

//         </div>

//         {/* Giant watermark text */}
//         <div className="py-10 overflow-hidden select-none flex justify-center items-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 0.06, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
//             className="text-[14vw] sm:text-[8vw] font-medium text-center leading-none tracking-tighter select-none font-sans text-white cursor-default"
//           >
//             CellCureHub
//           </motion.h1>
//         </div>

//         {/* Bottom bar */}
//         <div className="pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-center gap-2 text-xs font-semibold text-white/25">
//           <p className="font-mono text-center">
//             &copy; {new Date().getFullYear()} CELL CURE HUB. ALL RIGHTS RESERVED.
//           </p>
//           <span className="hidden sm:inline text-white/15">•</span>
//           <p className="text-center">
//             Made and Managed by{' '}
//             <a
//               href="https://www.shaibyasolutions.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white/40 hover:text-[#FF5C00] transition-colors duration-200 underline decoration-white/10"
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

const GoogleBusiness = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" opacity="0" />
    <path d="M21.35 11.1H12.18V13.83H18.69C18.36 17.64 15.19 19.27 12.19 19.27C8.36 19.27 5 16.25 5 12C5 7.9 8.2 4.73 12.2 4.73C15.29 4.73 17.1 6.7 17.1 6.7L19 4.72C19 4.72 16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12C2.03 17.05 6.16 22 12.25 22C17.6 22 21.5 18.33 21.5 12.91C21.5 11.76 21.35 11.1 21.35 11.1Z" />
  </svg>
);

const WhatsApp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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
              {/* Instagram */}
              <a
                href="https://www.instagram.com/cellcure_hub/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-[#FF5C00]/60 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              {/* Google Business */}
              <a
                href="https://www.google.com/search?q=cellcure+hub+nagpur"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-[#FF5C00]/60 transition-all duration-300"
                title="Google Business"
              >
                <GoogleBusiness className="w-4 h-4" />
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/919322842703"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-[#25D366] hover:border-[#25D366]/60 transition-all duration-300"
                title="Chat on WhatsApp"
              >
                <WhatsApp className="w-4 h-4" />
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
                <a href="tel:+919322842703" className="text-sm text-white/45 hover:text-white/70 transition-colors duration-200">
                  +91 93228 42703
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FF5C00]/60 flex-shrink-0" />
                <a href="mailto:cellcurehub@gmail.com" className="text-sm text-white/45 hover:text-white/70 transition-colors duration-200">
                  cellcurehub@gmail.com
                </a>
              </li>
            </ul>

            <div className="pt-2 border-t border-white/[0.05] space-y-2">
              <p className="text-[10px] uppercase tracking-widest text-white/25 font-semibold">Opening Soon</p>
              <p className="text-sm text-white/40">Stay tuned — bookings launching shortly.</p>
            </div>
          </div>

        </div>

        {/* Giant watermark text with repeating shine effect */}
        <div className="py-10 overflow-hidden select-none flex justify-center items-center relative">
          <style>{`
            @keyframes shine {
              0%   { background-position: 200% center; }
              100% { background-position: -200% center; }
            }
            .cellcure-shine {
              background: linear-gradient(
                105deg,
                rgba(255,255,255,0.06) 0%,
                rgba(255,255,255,0.06) 40%,
                rgba(255,255,255,0.45) 50%,
                rgba(255,255,255,0.06) 60%,
                rgba(255,255,255,0.06) 100%
              );
              background-size: 200% auto;
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
              animation: shine 3.5s linear infinite;
            }
          `}</style>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="cellcure-shine text-[14vw] sm:text-[8vw] font-medium text-center leading-none tracking-tighter select-none font-sans cursor-default"
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