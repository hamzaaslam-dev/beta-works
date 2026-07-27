import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { caseStudies, getCaseStudy } from '@/lib/content'
import { CtaBand } from '@/components/cta-band'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) return { title: 'Case study — Beta Works' }
  return {
    title: `${study.title} — Beta Works`,
    description: study.standfirst,
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()

  const next = getCaseStudy(study.next)

  return (
    <main className="bg-[#020617] pt-28">
      <article className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <Link href="/work" className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white">
          <ArrowLeft className="h-4 w-4" />
          Back to all work
        </Link>

        <div className="mb-4 font-mono text-xs tracking-[0.16em] text-sky-300/80 uppercase">
          Case {study.number} — {study.category}
        </div>
        <h1 className="max-w-4xl font-[family-name:var(--font-heading)] text-3xl font-semibold tracking-[-0.03em] text-white md:text-6xl">
          {study.title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-400 md:text-lg">{study.standfirst}</p>

        <dl className="mt-8 grid gap-4 border-y border-white/10 py-6 sm:grid-cols-3">
          <div>
            <dt className="text-[11px] tracking-[0.14em] text-slate-500 uppercase">Year</dt>
            <dd className="mt-1 text-white">{study.year}</dd>
          </div>
          <div>
            <dt className="text-[11px] tracking-[0.14em] text-slate-500 uppercase">Scope</dt>
            <dd className="mt-1 text-white">{study.scope}</dd>
          </div>
          <div>
            <dt className="text-[11px] tracking-[0.14em] text-slate-500 uppercase">Stack</dt>
            <dd className="mt-1 text-white">{study.stack}</dd>
          </div>
        </dl>

        <div className="relative mt-10 aspect-[16/8] overflow-hidden rounded-[28px] border border-white/10">
          <Image
            src={study.image}
            alt={study.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1100px"
            priority
          />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {study.metrics.map((m) => (
            <div key={m.label} className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5">
              <div className="text-2xl font-semibold text-white">{m.value}</div>
              <div className="mt-1 text-sm text-slate-400">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="prose-invert mt-14 max-w-3xl space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-white">The challenge</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-400">{study.challenge}</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white">What we built</h2>
            <ul className="mt-4 space-y-3">
              {study.built.map((item) => (
                <li key={item} className="flex gap-3 text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white">The outcome</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-400">{study.outcome}</p>
          </section>
          <p className="rounded-2xl border border-sky-300/20 bg-sky-400/10 px-5 py-4 text-sm text-sky-100">
            Full case available under NDA —{' '}
            <Link href="/contact" className="underline underline-offset-3">
              Ask us for it
            </Link>
            .
          </p>
        </div>

        {next && (
          <Link
            href={`/work/${next.slug}`}
            className="mt-14 flex items-center justify-between gap-4 rounded-[24px] border border-white/10 bg-white/[0.03] px-6 py-6 transition-colors hover:border-sky-300/30"
          >
            <div>
              <div className="text-[11px] tracking-[0.14em] text-slate-500 uppercase">Next case</div>
              <div className="mt-1 text-lg font-semibold text-white">{next.title}</div>
            </div>
            <ArrowRight className="h-5 w-5 text-sky-300" />
          </Link>
        )}
      </article>

      <CtaBand
        eyebrow="Inspired?"
        title="Let's scope your version of this."
        body="Start a project with a senior squad matched to your timeline and stack."
        secondaryHref="/work"
        secondaryLabel="Back to all work"
      />
    </main>
  )
}
