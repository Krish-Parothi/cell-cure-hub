

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Droplets, Smartphone, Activity, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const IK_BASE = 'https://ik.imagekit.io/yzstxngc8/cellcurehubInsta';

/**
 * FINAL FIX:
 * The source images are landscape (16:9 thumbnails from reels).
 * Forcing them into 9:16 portrait via server-side crop always cuts content.
 *
 * Strategy:
 *   - Deliver at native width (w-900), no forced height/aspect crop
 *   - CSS card is aspect-[9/16] with overflow-hidden
 *   - object-fit: cover fills the card
 *   - object-position per card anchors which part of the landscape image shows
 *
 * Since the source is ~16:9 and card is 9:16, the image height after
 * object-cover will be ~(9/16) / (9/16) = full height of card — meaning
 * we see the full vertical extent of the image, just cropped horizontally.
 * Setting object-position to show the face/subject center does the job.
 */
function ikUrl(filename: string) {
  return `${IK_BASE}/${filename}?tr=w-900,f-auto,q-88,e-sharpen`;
}

interface InstaPost {
  id: string;
  type: 'reel' | 'post';
  title: string;
  description: string;
  likes: string;
  comments: string;
  icon: React.ElementType;
  filename: string;
  imageAlt: string;
  /**
   * CSS object-position:
   * For landscape-in-portrait crop, X% controls which horizontal
   * slice we see. 50% = center, 0% = left edge, 100% = right edge.
   * Y% has less effect since height is fully covered, but use it
   * to shift vertically within any slack.
   */
  pos: string;
  href: string;
}

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// const ReelIcon = () => (
//   <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
//     <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.27 8.27 0 0 0 4.84 1.56V6.82a4.85 4.85 0 0 1-1.07-.13z" />
//   </svg>
// );

const ReelIcon = () => (
  <Instagram className="w-3 h-3 text-white" />
);
const posts: InstaPost[] = [
  {
    id: 'board-repair',
    type: 'reel',
    title: 'The Best Decision',
    description: 'From a crazy idea to a real startup — this is how CellCure Hub was born. Best decision we ever made.',
    likes: '1,420',
    comments: '94',
    href: 'https://www.instagram.com/reel/DYB-usMp53z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    icon: Cpu,
    filename: 'mobile_repair_2.webp',
    imageAlt: 'Startup idea to best decision',
    // Person on right side of frame — shift right to center on face
    pos: '70% center',
  },
  {
    id: 'water-damage',
    type: 'reel',
    title: 'We Launched 🚀',
    description: 'CellCure Hub is officially live! The startup is real, the mission is clear — premium mobile repair, Nagpur.',
    likes: '2,118',
    comments: '145',
    href: 'https://www.instagram.com/reel/DYo2HfZpdnw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    icon: Droplets,
    filename: 'repair_2.webp',
    imageAlt: 'CellCure Hub startup launch',
    // Face center-left of frame
    pos: '35% center',
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
    filename: 'studio_2.webp',
    imageAlt: 'Startup journey CellCure Hub',
    // Person right-center, large text left — center on person
    pos: '60% center',
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
    filename: 'office_2.webp',
    imageAlt: 'Inspiration and trust CellCure Hub',
    // Face fills most of frame — center
    pos: '50% center',
  },
  {
    id: 'satisfaction',
    type: 'reel',
    title: 'Nagpur Rises',
    description: 'Building more than a repair shop — building a startup community in Nagpur. Join the movement.',
    likes: '1,875',
    comments: '102',
    href: 'https://www.instagram.com/reel/DYrW7h-p3SO/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==',
    icon: Sparkles,
    filename: 'doorstep_2.webp',
    imageAlt: 'Nagpur startup community CellCure Hub',
    // Two people — shift slightly right to include both
    pos: '65% center',
  },
];

const titleContainerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const wordVariants = {
  hidden: { y: '110%', rotate: 2 },
  visible: { y: '0%', rotate: 0, transition: { type: 'spring' as const, stiffness: 90, damping: 14 } },
};
const gridVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } };
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring' as const, stiffness: 80, damping: 15 } },
};

const titleWords = 'INSIDE CELLCURE HUB'.split(' ');

export function InstagramSection() {
  return (
    <section className="relative bg-black py-24 sm:py-32 border-t border-white/5 z-20 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center justify-center gap-2 mb-2">
            <Instagram className="w-4 h-4 text-[#FF5C00]" />
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#FF5C00]">Follow Our Lab</span>
          </motion.div>

          <motion.h2
            variants={titleContainerVariants} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="text-3xl sm:text-5xl font-black tracking-tighter text-white uppercase flex flex-wrap justify-center gap-x-3 gap-y-1"
          >
            {titleWords.map((word, idx) => (
              <span key={idx} className="inline-block overflow-hidden h-fit py-1">
                <motion.span variants={wordVariants} className={cn('inline-block origin-bottom-left', (word === 'CELLCURE' || word === 'HUB') && 'text-[#FF5C00]')}>
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h2>

          <p className="text-sm sm:text-base text-white/50">
            Check out our micro-soldering videos, repair satisfaction peels, and lab updates on Instagram.
          </p>
          <a href="https://www.instagram.com/cellcure_hub/" target="_blank" rel="noopener noreferrer"
            className="inline-block text-xs font-black uppercase tracking-widest text-[#FF5C00] hover:text-white transition-colors duration-200">
            @cellcure_hub
          </a>
        </div>

        {/* Grid */}
        <motion.div
          variants={gridVariants} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4"
        >
          {posts.map((post) => (
            <motion.a
              href={post.href} target="_blank" rel="noopener noreferrer"
              key={post.id} variants={cardVariants}
              whileHover={{ y: -6, scale: 1.025 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group relative block aspect-[9/16] rounded-2xl border border-white/[0.07] bg-zinc-950 overflow-hidden shadow-2xl cursor-pointer"
            >
              <img
                src={ikUrl(post.filename)}
                alt={post.imageAlt}
                loading="lazy"
                decoding="async"
                style={{ objectPosition: post.pos }}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
              />

              {/* Bottom scrim */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.05) 100%)' }} />
              {/* Top vignette */}
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />

              {/* Badge */}
              <div className="absolute top-3 left-3 z-10">
                <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md border border-white/15 rounded-full px-2.5 py-1 shadow-lg">
                  {post.type === 'reel' ? <ReelIcon /> : <Instagram className="w-2.5 h-2.5 text-white" />}
                  <span className="text-[9px] font-bold text-white uppercase tracking-widest">
                    {post.type === 'reel' ? 'Reel' : 'Post'}
                  </span>
                </div>
              </div>

              {/* Orange dot */}
              <div className="absolute top-3 right-3 z-10 w-2 h-2 rounded-full bg-[#FF5C00] shadow-[0_0_8px_2px_rgba(255,92,0,0.6)]" />

              {/* Hover */}
              <div className="absolute inset-0 bg-[#FF5C00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                <div className="w-11 h-11 rounded-full bg-white/10 border border-white/30 backdrop-blur-md flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300 ease-out shadow-xl">
                  <Instagram className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-3 sm:p-4 space-y-1">
                <div className="w-6 h-[2px] bg-[#FF5C00] rounded-full mb-2 group-hover:w-10 transition-all duration-300" />
                <h3 className="text-white font-black text-[11px] sm:text-[12px] uppercase tracking-wider group-hover:text-[#FF5C00] transition-colors duration-200 leading-tight drop-shadow-md">
                  {post.title}
                </h3>
                <p className="text-[10px] text-white/55 line-clamp-2 leading-snug">{post.description}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}