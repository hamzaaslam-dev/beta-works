'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { SplineScene } from '@/components/ui/splite'
import { Spotlight } from '@/components/ui/spotlight'

export function SplineSceneBasic() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const gridY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 70])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0.25])
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.1])
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.9], [1, reduce ? 1 : 0.4])

  return (
    <section
      ref={ref}
      className="relative h-svh min-h-[680px] w-full overflow-hidden bg-[#020617]"
    >
      {/* Full-bleed 3D stage */}
      <motion.div
        style={{ scale: sceneScale, opacity: sceneOpacity }}
        className="absolute inset-0 z-0"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-y-0 right-0 w-full lg:w-[72%]">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="h-full w-full"
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_60%_45%,transparent_18%,rgba(2,6,23,0.35)_75%)]" />
        </div>
      </motion.div>

      <Spotlight
        className="-top-40 left-0 md:-top-10 md:left-40"
        size={480}
        springOptions={{ bounce: 0, stiffness: 110, damping: 30 }}
      />

      {/* Soft stage blend into navy — no hard card edge */}
      <div className="pointer-events-none absolute inset-0 z-[1] [background:linear-gradient(90deg,#020617_0%,rgba(2,6,23,0.92)_26%,rgba(2,6,23,0.35)_48%,rgba(2,6,23,0.08)_68%,rgba(2,6,23,0.25)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_18%_22%,rgba(59,130,246,0.26),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(14,165,233,0.14),transparent_28%)]" />
      <motion.div
        style={{ y: gridY }}
        className="pointer-events-none absolute inset-[-25%] z-[1] opacity-[0.14] [background-image:linear-gradient(rgba(148,163,184,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.22)_1px,transparent_1px)] [background-size:72px_72px]"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-44 bg-gradient-to-t from-[#020617] via-[#020617]/75 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-28 bg-gradient-to-b from-[#020617]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-16 bg-gradient-to-l from-[#020617]/55 to-transparent" />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-[16%] left-[10%] z-[1] h-44 w-44 rounded-full bg-sky-400/20 blur-3xl"
        animate={reduce ? undefined : { y: [0, -20, 0], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[12%] bottom-[18%] z-[1] h-56 w-56 rounded-full bg-blue-600/25 blur-3xl"
        animate={reduce ? undefined : { y: [0, 24, 0], opacity: [0.2, 0.42, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      />

      {/* Copy overlay */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 md:px-10 lg:px-12">
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="max-w-xl pt-16 lg:max-w-[520px]"
        >
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-sky-300/20 bg-sky-400/10 px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-sky-100 uppercase backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-300 shadow-[0_0_12px_rgba(125,211,252,0.9)]" />
            Senior product engineers · Est. 2026
          </motion.span>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl leading-[0.95] font-semibold tracking-[-0.04em] text-white drop-shadow-[0_12px_40px_rgba(2,6,23,0.65)] md:text-6xl lg:text-7xl"
          >
            Engineering the{' '}
            <span className="bg-gradient-to-r from-sky-200 via-blue-300 to-indigo-200 bg-clip-text text-transparent">
              future
            </span>{' '}
            of business.
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-lg text-base leading-relaxed text-slate-300 drop-shadow-[0_8px_24px_rgba(2,6,23,0.8)] md:text-lg"
          >
            Beta Works ships web, mobile, commerce, automation and agentic systems for teams that
            need senior judgment — not agency theater.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_40px_rgba(37,99,235,0.5)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-slate-100 backdrop-blur-md transition-colors duration-200 hover:border-sky-300/40 hover:bg-white/10"
            >
              Explore services
            </Link>
          </motion.div>

          <motion.dl
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-6"
          >
            {[
              ['Response', '24h'],
              ['Core lanes', '07'],
              ['Mode', 'Quietly fast'],
            ].map(([k, v]) => (
              <div key={k} className="group">
                <dt className="text-[10px] tracking-[0.16em] text-slate-400 uppercase">{k}</dt>
                <dd className="mt-2 text-lg font-semibold text-white transition-colors group-hover:text-sky-200">
                  {v}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <span className="text-[10px] tracking-[0.2em] text-slate-500 uppercase">Scroll</span>
        <motion.span
          className="h-8 w-px origin-top bg-gradient-to-b from-sky-300/80 to-transparent"
          animate={reduce ? undefined : { scaleY: [0.55, 1, 0.55], opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
