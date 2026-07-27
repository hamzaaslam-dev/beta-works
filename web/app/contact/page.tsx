import type { Metadata } from 'next'
import type { ComponentType } from 'react'
import { Mail, Phone, Globe2, Clock } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { ContactForm } from '@/components/contact-form'
import { site } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Contact — Beta Works',
  description: 'Tell us what you’re dreaming up. We reply within 24 hours with a plan and rough quote.',
}

const steps = [
  { num: 'Step 01', title: 'We read & reply', body: 'Within 24 business hours — a real human, not a ticket bot.', tag: 'Day 1' },
  {
    num: 'Step 02',
    title: 'Intro call',
    body: 'A 30-minute conversation to understand your goal, not pitch ours.',
    tag: 'Day 2–3',
  },
  {
    num: 'Step 03',
    title: 'Plan & quote',
    body: 'You get a written proposal with scope, timeline, milestones and pricing.',
    tag: 'Day 3–5',
  },
  {
    num: 'Step 04',
    title: 'Kick-off',
    body: 'We set up Slack, Linear, Figma and meet the squad. Work starts.',
    tag: 'Week 2',
  },
]

export default function ContactPage() {
  return (
    <main className="bg-[#020617] pt-28">
      <section className="mx-auto max-w-6xl px-4 pb-10 md:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Tell us what you're dreaming up."
          lead="Share a few details and we'll come back within 24 hours with a tailored plan, a rough quote and a calendar link to meet your senior squad."
        />
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-16 lg:grid-cols-[0.9fr_1.1fr] md:px-6">
        <aside className="flex flex-col gap-5 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <InfoRow icon={Mail} label="Email" value={site.email} href={`mailto:${site.email}`} />
          <InfoRow icon={Phone} label="Phone" value={site.phone} href={site.phoneHref} />
          <InfoRow icon={Globe2} label="Studio" value="Remote · Operating in 18+ countries" />
          <InfoRow icon={Clock} label="Response time" value="Within 24 hours, Mon–Fri" />
          <div className="mt-auto border-t border-white/10 pt-5">
            <div className="mb-3 text-[11px] tracking-[0.16em] text-slate-500 uppercase">Find us</div>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-sky-200 transition-colors hover:text-white"
            >
              LinkedIn →
            </a>
          </div>
        </aside>

        <ContactForm />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 md:px-6">
        <SectionHeading eyebrow="Next steps" title="What happens after you hit send." />
        <div className="space-y-3">
          {steps.map((step) => (
            <div
              key={step.num}
              className="grid items-center gap-4 rounded-[22px] border border-white/10 bg-white/[0.03] px-5 py-5 md:grid-cols-[140px_1fr_100px]"
            >
              <div className="font-mono text-xs tracking-[0.14em] text-sky-300/80 uppercase">{step.num}</div>
              <div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{step.body}</p>
              </div>
              <div className="justify-self-start rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300 md:justify-self-end">
                {step.tag}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: ComponentType<{ className?: string }>
  label: string
  value: string
  href?: string
}) {
  const content = href ? (
    <a href={href} className="text-white transition-colors hover:text-sky-200">
      {value}
    </a>
  ) : (
    <span className="text-white">{value}</span>
  )

  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-sky-300/20 bg-sky-400/10 text-sky-200">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-[11px] tracking-[0.14em] text-slate-500 uppercase">{label}</div>
        <div className="mt-1 text-sm">{content}</div>
      </div>
    </div>
  )
}
