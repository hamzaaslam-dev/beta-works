import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CtaBand({
  eyebrow = "Let's build something rare",
  title,
  body,
  primaryHref = '/contact',
  primaryLabel = 'Start a project',
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow?: string
  title: ReactNode
  body: string
  primaryHref?: string
  primaryLabel?: string
  secondaryHref?: string
  secondaryLabel?: string
}) {
  return (
    <section className="px-4 py-20 md:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#0b1b3a] via-[#07111f] to-[#020617] px-8 py-14 md:px-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.12),transparent_35%)]" />
        <div className="relative">
          <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] text-sky-200/80 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
            {eyebrow}
          </span>
          <h2 className="max-w-2xl font-[family-name:var(--font-heading)] text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">{body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={primaryHref}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_40px_rgba(37,99,235,0.35)]"
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            {secondaryHref && secondaryLabel && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-slate-100 hover:bg-white/10"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
