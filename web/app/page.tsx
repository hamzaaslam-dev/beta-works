import Link from 'next/link'
import { ArrowRight, Globe, Bot, Smartphone, Brain, ShoppingBag, Workflow, Palette } from 'lucide-react'
import { SplineSceneBasic } from '@/components/ui/spline-scene-basic'
import { Marquee } from '@/components/marquee'
import { SectionHeading } from '@/components/section-heading'
import { StatStrip } from '@/components/stat-strip'
import { CtaBand } from '@/components/cta-band'
import { Reveal, RevealItem, RevealStagger } from '@/components/reveal'
import { services } from '@/lib/content'

const icons = {
  web: Globe,
  agentic: Bot,
  mobile: Smartphone,
  aiml: Brain,
  shopify: ShoppingBag,
  automation: Workflow,
  design: Palette,
} as const

const homeOrder = ['web', 'agentic', 'mobile', 'aiml', 'shopify', 'automation', 'design'] as const

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
            lead="Seven deep capabilities, one connected team. Whether you need a flagship product or a focused sprint, we plug in and ship outcomes — not deliverables."
          />
        </Reveal>

        <RevealStagger className="grid gap-4 md:grid-cols-6">
          {cards.map((service, index) => {
            const Icon = icons[service.id as keyof typeof icons]
            const wide = index === 0 || index === 1 || index >= 5
            return (
              <RevealItem
                key={service.id}
                index={index}
                className={wide ? 'md:col-span-3' : 'md:col-span-2'}
              >
                <Link
                  href={`/services#${service.id}`}
                  className="group relative block h-full overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-6 transition-colors duration-200 hover:border-sky-300/35 hover:bg-white/[0.055]"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-300/20 bg-sky-400/10 text-sky-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-white">
                        {service.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">{service.summary}</p>
                    </div>
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-sky-300" />
                  </div>
                </Link>
              </RevealItem>
            )
          })}
        </RevealStagger>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 py-12 md:px-6">
        <Reveal>
          <StatStrip
            stats={[
              { value: 98, suffix: '%', label: 'Client retention' },
              { value: 4.9, decimals: 1, suffix: '/5', label: 'Average review score' },
              { value: 24, suffix: 'h', label: 'Average response time' },
              { value: 7, label: 'Core capabilities' },
            ]}
          />
        </Reveal>
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
