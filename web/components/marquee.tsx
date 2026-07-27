'use client'

import { motion } from 'framer-motion'

const items = [
  'Web Development',
  'Mobile Apps',
  'Shopify',
  'Automations',
  'AI & Machine Learning',
  'Agentic AI',
  'Graphic Design',
  'UI / UX',
  'Brand Identity',
]

export function Marquee() {
  const track = [...items, ...items]

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-[#050b18]/80 py-5 backdrop-blur-sm" aria-hidden="true">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#050b18] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#050b18] to-transparent" />
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 36, ease: 'linear', repeat: Infinity }}
      >
        {track.map((item, i) => (
          <span key={`${item}-${i}`} className="text-sm tracking-[0.2em] text-slate-400 uppercase">
            {item}
            <span className="ml-10 text-sky-400/50">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
