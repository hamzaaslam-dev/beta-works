import { Globe, Smartphone, ShoppingBag, Workflow, Palette } from 'lucide-react'
import { SplineSceneBasic } from '@/components/ui/spline-scene-basic'
import HighlightCard from '@/components/ui/highlight-card'
import { Marquee } from '@/components/marquee'
import { SectionHeading } from '@/components/section-heading'
import { CtaBand } from '@/components/cta-band'
import { Reveal, RevealItem, RevealStagger } from '@/components/reveal'
import { services } from '@/lib/content'

const icons = {
  web: Globe,
  mobile: Smartphone,
  shopify: ShoppingBag,
  automation: Workflow,
  design: Palette,
} as const

const homeOrder = ['web', 'mobile', 'shopify', 'automation', 'design'] as const

const process = [
  {
    num: '01 / Discover',
    title: 'Deep-dive & strategy',
    body: 'We audit the business, users and constraints. You leave session one with clarity, not a slide deck.',
    tag: 'Week 1',
  },
  {
    num: '02 / Design',
    title: 'Design the experience',
    body: 'High-fidelity prototypes, brand and systems — validated with real users before a line of code is written.',
    tag: 'Weeks 2–3',
  },
  {
    num: '03 / Build',
    title: 'Engineer in sprints',
    body: 'Weekly demos, shared Linear, direct Slack — you watch the product come together, not wait for a reveal.',
    tag: 'Weeks 3–8',
  },
  {
    num: '04 / Launch',
    title: 'Ship & scale',
    body: 'Deploy, analyse, iterate. We stay with you after launch to measure what matters and compound growth.',
    tag: 'Ongoing',
  },
]

function splitSummary(summary: string): string[] {
  const parts = summary
    .split(/[—–-]/)
    .map((p) => p.trim())
    .filter(Boolean)
  if (parts.length >= 2) {
    return [parts[0] + (summary.includes('—') || summary.includes('–') ? '.' : ''), ...parts.slice(1)]
  }
  // Fall back: soft-wrap into ~2 lines by sentence-ish chunks
  const mid = Math.ceil(summary.length / 2)
  const breakAt = summary.lastIndexOf(' ', mid)
  if (breakAt > 20) {
    return [summary.slice(0, breakAt).trim(), summary.slice(breakAt).trim()]
  }
  return [summary]
}

export default function HomePage() {
  const cards = homeOrder.map((id) => services.find((s) => s.id === id)!).filter(Boolean)

  return (
    <main className="overflow-x-hidden bg-[#020617]">
      <SplineSceneBasic />

      <Marquee />

      <section id="services" className="relative mx-auto max-w-6xl px-4 py-24 md:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                A full-stack studio for{' '}
                <span className="bg-gradient-to-r from-sky-200 via-blue-300 to-indigo-200 bg-clip-text text-transparent">
                  ambitious teams.
                </span>
              </>
            }
            lead="Five deep capabilities, one connected team. Whether you need a flagship product or a focused sprint, we plug in and ship outcomes — not deliverables."
          />
        </Reveal>

        <RevealStagger className="flex flex-wrap items-stretch justify-center gap-6 md:gap-8">
          {cards.map((service, index) => {
            const Icon = icons[service.id as keyof typeof icons]
            return (
              <RevealItem key={service.id} index={index} className="w-full max-w-[350px]">
                <HighlightCard
                  href={`/services#${service.id}`}
                  title={service.name}
                  description={splitSummary(service.summary)}
                  icon={<Icon className="h-8 w-8 text-sky-200" />}
                />
              </RevealItem>
            )
          })}
        </RevealStagger>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 py-24 md:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="How we work"
            title="A proven process, zero guesswork."
            lead="A transparent operating system that gets from idea to launch in weeks — not quarters."
          />
        </Reveal>
        <RevealStagger className="space-y-3">
          {process.map((step, i) => (
            <RevealItem key={step.num} index={i}>
              <div className="group grid items-center gap-4 rounded-[22px] border border-white/10 bg-white/[0.03] px-5 py-5 transition-colors duration-200 hover:border-sky-300/30 hover:bg-white/[0.05] md:grid-cols-[160px_1fr_120px] md:px-6">
                <div className="font-mono text-xs tracking-[0.14em] text-sky-300/80 uppercase">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{step.body}</p>
                </div>
                <div className="justify-self-start rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300 md:justify-self-end">
                  {step.tag}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <Reveal>
        <CtaBand
          title={
            <>
              Your next chapter,{' '}
              <span className="bg-gradient-to-r from-sky-200 via-blue-300 to-indigo-200 bg-clip-text text-transparent">
                shipped.
              </span>
            </>
          }
          body="Tell us about your product, timeline or the problem you're chasing. We'll send a custom plan and rough quote within 24 hours."
          secondaryHref="mailto:info@beta-works.com"
          secondaryLabel="info@beta-works.com"
        />
      </Reveal>
    </main>
  )
}
