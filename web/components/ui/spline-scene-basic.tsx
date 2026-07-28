'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SplineScene } from '@/components/ui/splite'

export function SplineSceneBasic() {
  return (
    <section className="relative h-svh min-h-[680px] w-full overflow-hidden bg-[#020617]">
      {/* Interactive 3D stage — no CSS transforms on this layer (breaks Spline mouse tracking) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 lg:inset-y-0 lg:right-0 lg:left-[22%]">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="h-full w-full"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_62%_48%,transparent_16%,rgba(2,6,23,0.28)_72%)]" />
      </div>

      {/* Atmosphere — pointer-events-none so cursor reaches Spline */}
      <div className="pointer-events-none absolute inset-0 z-[1] [background:linear-gradient(90deg,#020617_0%,rgba(2,6,23,0.9)_24%,rgba(2,6,23,0.28)_46%,rgba(2,6,23,0.05)_66%,rgba(2,6,23,0.2)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_16%_20%,rgba(59,130,246,0.22),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 z-[1] opacity-[0.12] [background-image:linear-gradient(rgba(148,163,184,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.2)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-36 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-24 bg-gradient-to-b from-[#020617]/75 to-transparent" />

      {/* Copy — wrapper is click-through; only the text column captures events */}
      <div className="pointer-events-none relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 md:px-10 lg:px-12">
        <div className="pointer-events-auto max-w-xl pt-16 lg:max-w-[520px]">
          <span
            className="hero-fade mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-sky-300/20 bg-sky-400/10 px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-sky-100 uppercase backdrop-blur-md"
            style={{ ['--hero-delay' as string]: '40ms' }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-sky-300 shadow-[0_0_12px_rgba(125,211,252,0.9)]" />
            Senior product engineers · Est. 2026
          </span>

          <h1
            className="hero-fade text-4xl leading-[0.95] font-semibold tracking-[-0.04em] text-white drop-shadow-[0_12px_40px_rgba(2,6,23,0.65)] md:text-6xl lg:text-7xl"
            style={{ ['--hero-delay' as string]: '100ms' }}
          >
            Engineering the{' '}
            <span className="bg-gradient-to-r from-sky-200 via-blue-300 to-indigo-200 bg-clip-text text-transparent">
              future
            </span>{' '}
            of business.
          </h1>

          <p
            className="hero-fade mt-5 max-w-lg text-base leading-relaxed text-slate-300 md:text-lg"
            style={{ ['--hero-delay' as string]: '180ms' }}
          >
            Beta Works ships web, mobile, commerce, automation and brand experiences for teams that
            need senior judgment — not agency theater.
          </p>

          <div
            className="hero-fade mt-8 flex flex-wrap items-center gap-3"
            style={{ ['--hero-delay' as string]: '260ms' }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_40px_rgba(37,99,235,0.45)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-slate-100 backdrop-blur-sm transition-colors duration-200 hover:border-sky-300/40 hover:bg-white/10"
            >
              Explore services
            </Link>
          </div>

          <dl
            className="hero-fade mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-6"
            style={{ ['--hero-delay' as string]: '340ms' }}
          >
            {[
              ['Response', '24h'],
              ['Core lanes', '05'],
              ['Mode', 'Quietly fast'],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-[10px] tracking-[0.16em] text-slate-400 uppercase">{k}</dt>
                <dd className="mt-2 text-lg font-semibold text-white">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-[10px] tracking-[0.2em] text-slate-500 uppercase">Scroll</span>
        <span className="scroll-cue h-8 w-px bg-gradient-to-b from-sky-300/80 to-transparent" />
      </div>
    </section>
  )
}
