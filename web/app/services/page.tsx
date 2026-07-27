import type { Metadata } from 'next'
import { Check } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { CtaBand } from '@/components/cta-band'
import { faqs, services } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Services — Beta Works',
  description: 'Seven disciplines, one senior team — web, mobile, Shopify, automation, AI/ML, agentic systems and brand.',
}

export default function ServicesPage() {
  return (
    <main className="bg-[#020617] pt-28">
      <section className="mx-auto max-w-6xl px-4 pb-10 md:px-6">
        <SectionHeading
          eyebrow="Services"
          title="Seven disciplines, one team."
          lead="Deep specialists who still ship as one studio — so your product, platform and brand move together."
        />
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-4 pb-16 md:px-6">
        {services.map((service, index) => (
          <article
            key={service.id}
            id={service.id}
            className="scroll-mt-28 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 md:p-10"
          >
            <div className="mb-4 font-mono text-xs tracking-[0.16em] text-sky-300/70 uppercase">
              {String(index + 1).padStart(2, '0')} — {service.name}
            </div>
            <h2 className="max-w-3xl font-[family-name:var(--font-heading)] text-2xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
              {service.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-400 md:text-lg">{service.body}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {service.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-2 rounded-2xl border border-white/8 bg-[#050b18]/60 px-4 py-3 text-sm text-slate-300"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10 md:px-6">
        <SectionHeading eyebrow="FAQ" title="Straight answers before the call." />
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-[22px] border border-white/10 bg-white/[0.03] px-5 py-4 open:border-sky-300/25"
            >
              <summary className="cursor-pointer list-none font-medium text-white marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  {faq.q}
                  <span className="text-sky-300 transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaBand
        eyebrow="Ready when you are"
        title="Let's scope your next build."
        body="Book a discovery call and we'll map the fastest path from brief to shipped product."
        primaryLabel="Book a discovery call"
        secondaryHref="/work"
        secondaryLabel="See recent work"
      />
    </main>
  )
}
