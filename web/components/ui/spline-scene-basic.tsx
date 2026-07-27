'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SplineScene } from '@/components/ui/splite'
import { Card } from '@/components/ui/card'
import { Spotlight } from '@/components/ui/spotlight'

export function SplineSceneBasic() {
  return (
    <Card className="relative h-[min(92svh,920px)] w-full overflow-hidden rounded-[28px] border-white/10 bg-[#050b18] shadow-[0_40px_120px_rgba(8,30,90,0.45)]">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        size={320}
        springOptions={{ bounce: 0, stiffness: 120, damping: 28 }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(59,130,246,0.28),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(14,165,233,0.18),transparent_28%),linear-gradient(180deg,rgba(5,11,24,0.15),rgba(5,11,24,0.72))]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.18)_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="relative z-10 flex h-full flex-col lg:flex-row">
        <div className="relative z-10 flex flex-1 flex-col justify-center px-8 py-10 md:px-12 lg:max-w-[48%] lg:px-14">
          <span
            className="hero-fade mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-sky-300/20 bg-sky-400/10 px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-sky-100 uppercase"
            style={{ ['--hero-delay' as string]: '40ms' }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-sky-300 shadow-[0_0_12px_rgba(125,211,252,0.9)]" />
            Senior product engineers · Est. 2026
          </span>

          <h1
            className="hero-fade max-w-[11ch] text-4xl leading-[0.95] font-semibold tracking-[-0.04em] text-white md:text-6xl lg:text-7xl"
            style={{ ['--hero-delay' as string]: '120ms' }}
          >
            Engineering the{' '}
            <span className="bg-gradient-to-r from-sky-200 via-blue-300 to-indigo-200 bg-clip-text text-transparent">
              future
            </span>{' '}
            of business.
          </h1>

          <p
            className="hero-fade mt-5 max-w-lg text-base leading-relaxed text-slate-300 md:text-lg"
            style={{ ['--hero-delay' as string]: '220ms' }}
          >
            Beta Works ships web, mobile, commerce, automation and agentic systems for teams that
            need senior judgment — not agency theater.
          </p>

          <div
            className="hero-fade mt-8 flex flex-wrap items-center gap-3"
            style={{ ['--hero-delay' as string]: '320ms' }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_40px_rgba(37,99,235,0.35)] transition-transform duration-200 hover:-translate-y-0.5"
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
            style={{ ['--hero-delay' as string]: '420ms' }}
          >
            <div>
              <dt className="text-[10px] tracking-[0.16em] text-slate-400 uppercase">Response</dt>
              <dd className="mt-2 text-lg font-semibold text-white">24h</dd>
            </div>
            <div>
              <dt className="text-[10px] tracking-[0.16em] text-slate-400 uppercase">Core lanes</dt>
              <dd className="mt-2 text-lg font-semibold text-white">07</dd>
            </div>
            <div>
              <dt className="text-[10px] tracking-[0.16em] text-slate-400 uppercase">Mode</dt>
              <dd className="mt-2 text-lg font-semibold text-white">Quietly fast</dd>
            </div>
          </dl>
        </div>

        <div className="relative min-h-[320px] flex-1 overflow-hidden lg:min-h-0">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-24 bg-gradient-to-r from-[#050b18] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-20 bg-gradient-to-t from-[#050b18]/80 to-transparent" />
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="h-full w-full"
          />
        </div>
      </div>
    </Card>
  )
}
