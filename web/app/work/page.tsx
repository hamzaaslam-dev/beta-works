import type { Metadata } from 'next'
import { SectionHeading } from '@/components/section-heading'
import { StatStrip } from '@/components/stat-strip'
import { WorkGrid } from '@/components/work-grid'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Work — Beta Works',
  description: 'Recent ships across web, mobile, AI/ML, agentic systems, Shopify and brand.',
}

export default function WorkPage() {
  return (
    <main className="bg-[#020617] pt-28">
      <section className="mx-auto max-w-6xl px-4 pb-8 md:px-6">
        <SectionHeading
          eyebrow="Work"
          title="Recent ships."
          lead="Deeper case studies available under NDA — just ask."
        />
        <StatStrip
          stats={[
            { value: 120, suffix: '+', label: 'Products shipped' },
            { value: 120, prefix: '$', suffix: 'M+', label: 'Revenue driven' },
            { value: 2.4, decimals: 1, suffix: 'M+', label: 'Users touched' },
            { value: 18, label: 'Countries served' },
          ]}
        />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <WorkGrid />
      </section>

      <CtaBand
        eyebrow="Let's add yours"
        title="Your project, next on this page."
        body="Tell us what you're building and we'll show you how a senior squad ships it."
        secondaryHref="/services"
        secondaryLabel="Explore services"
      />
    </main>
  )
}
