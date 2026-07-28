import type { Metadata } from 'next'
import { SectionHeading } from '@/components/section-heading'
import { WorkGrid } from '@/components/work-grid'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Work — Beta Works',
  description: 'Selected projects across web, commerce, brand and product experiences.',
}

export default function WorkPage() {
  return (
    <main className="bg-[#020617] pt-28">
      <section className="mx-auto max-w-6xl px-4 pb-8 md:px-6">
        <SectionHeading
          eyebrow="Work"
          title="Selected projects."
          lead="Real ships — open a card to visit the live site."
        />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 md:px-6">
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
