import type { Metadata } from 'next'
import { SectionHeading } from '@/components/section-heading'
import { StatStrip } from '@/components/stat-strip'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'About — Beta Works',
  description: 'A distributed team of senior designers, engineers and AI specialists who refuse to wait.',
}

const values = [
  {
    num: '01',
    title: 'Senior-only squads',
    body: 'Every engineer and designer on your project has 6+ years of experience. No juniors practicing on your product.',
  },
  {
    num: '02',
    title: 'Outcomes over outputs',
    body: 'We measure ourselves in your revenue, retention and reduced cost — not hours logged or tickets closed.',
  },
  {
    num: '03',
    title: 'Radical transparency',
    body: 'Shared Linear, shared Slack, weekly demos, open pricing. You always know what\'s happening and why.',
  },
  {
    num: '04',
    title: 'Built to hand off',
    body: 'Clean code, full documentation, knowledge transfer. You keep the keys — we\'re your force multiplier, not your dependency.',
  },
  {
    num: '05',
    title: 'Design & engineering as one',
    body: 'Designers live in the code, engineers live in Figma. The seams that slow teams down? We removed them.',
  },
  {
    num: '06',
    title: 'AI-native from day one',
    body: 'We use AI to ship 3–5× faster, and weave it into the products we build so you compound the same advantage.',
  },
]

export default function AboutPage() {
  return (
    <main className="bg-[#020617] pt-28">
      <section className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <SectionHeading
          eyebrow="About"
          title="A studio for builders who refuse to wait."
          lead="Beta Works is a distributed team of senior designers, engineers and AI specialists."
        />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
        <div className="grid gap-8 rounded-[28px] border border-white/10 bg-white/[0.03] p-8 lg:grid-cols-2 lg:p-12">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-white md:text-4xl">
              Built by operators, for operators.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-400">
              We started Beta Works after years of shipping inside fast-growth startups and enterprise R&D labs. We were
              tired of watching great ideas die in Jira tickets, committees and six-month timelines.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              So we built the studio we wished existed: small, senior, opinionated. Every project led by someone who has
              scars, not slides. Every decision tied to business outcomes — shipped in weeks, not quarters.
            </p>
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-[24px] border border-white/10 bg-[#050b18]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.28),transparent_55%)]" />
            <div className="absolute inset-8 rounded-full border border-sky-300/20" />
            <div className="absolute inset-16 rounded-full border border-sky-300/15" />
            <div className="absolute inset-24 rounded-full border border-sky-300/10" />
            <div className="absolute top-1/2 left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-500 to-sky-400 shadow-[0_0_40px_rgba(56,189,248,0.45)]" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
        <SectionHeading eyebrow="What we stand for" title="Four principles, applied relentlessly." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div key={value.num} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
              <div className="font-mono text-xs tracking-[0.16em] text-sky-300/70">{value.num}</div>
              <h3 className="mt-3 text-xl font-semibold text-white">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{value.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10 md:px-6">
        <SectionHeading
          eyebrow="The people"
          title="Senior talent. Everywhere."
          lead="A small crew of specialists operating across four continents, assembled per-project around your goals."
        />
        <StatStrip
          stats={[
            { value: 120, suffix: '+', label: 'Projects shipped' },
            { value: 32, suffix: '+', label: 'Experts in the network' },
            { value: 18, suffix: '+', label: 'Countries served' },
            { value: 4.9, decimals: 1, suffix: '/5', label: 'Client satisfaction' },
          ]}
        />
      </section>

      <CtaBand
        eyebrow="Let's talk"
        title="Work with a team that actually ships."
        body="Get a senior squad matched to your project in under a week."
        primaryLabel="Book a discovery call"
        secondaryHref="/services"
        secondaryLabel="See our services"
      />
    </main>
  )
}
