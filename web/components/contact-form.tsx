'use client'

import { useState } from 'react'
import { site } from '@/lib/content'
import { ArrowRight } from 'lucide-react'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'error' | 'ok'>('idle')
  const [message, setMessage] = useState('')

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const brief = String(data.get('message') || '').trim()

    if (name.length <= 1 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || brief.length <= 5) {
      e.preventDefault()
      setStatus('error')
      setMessage('Please add your name, a valid email, and a short project brief.')
      return
    }

    const subject = form.querySelector<HTMLInputElement>('input[name="_subject"]')
    if (subject) subject.value = `New project brief from ${name}`
    setStatus('ok')
    setMessage('Sending your brief…')
  }

  return (
    <form
      className="space-y-5 rounded-[24px] border border-white/10 bg-white/[0.03] p-6 md:p-8"
      action={`https://formsubmit.co/${site.email}`}
      method="POST"
      noValidate
      onSubmit={onSubmit}
    >
      <input type="hidden" name="_subject" defaultValue="New project brief from Beta Works website" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-2 block text-slate-300">Your name</span>
          <input
            name="name"
            required
            placeholder="Jane Doe"
            className="w-full rounded-xl border border-white/10 bg-[#050b18] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-sky-400/50"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-2 block text-slate-300">Email</span>
          <input
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className="w-full rounded-xl border border-white/10 bg-[#050b18] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-sky-400/50"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-2 block text-slate-300">Company</span>
          <input
            name="company"
            placeholder="Company Inc."
            className="w-full rounded-xl border border-white/10 bg-[#050b18] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-sky-400/50"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-2 block text-slate-300">Budget range</span>
          <select
            name="budget"
            defaultValue="$25k – $75k"
            className="w-full rounded-xl border border-white/10 bg-[#050b18] px-4 py-3 text-white outline-none focus:border-sky-400/50"
          >
            <option>&lt; $10k</option>
            <option>$10k – $25k</option>
            <option>$25k – $75k</option>
            <option>$75k – $150k</option>
            <option>$150k+</option>
            <option>Not sure yet</option>
          </select>
        </label>
      </div>

      <label className="block text-sm">
        <span className="mb-2 block text-slate-300">What do you need?</span>
        <select
          name="service"
          className="w-full rounded-xl border border-white/10 bg-[#050b18] px-4 py-3 text-white outline-none focus:border-sky-400/50"
        >
          <option>Web Development</option>
          <option>Mobile Development</option>
          <option>Shopify Development</option>
          <option>Automation &amp; Ops</option>
          <option>Graphic &amp; Brand Design</option>
          <option>A full product launch (multiple)</option>
        </select>
      </label>

      <label className="block text-sm">
        <span className="mb-2 block text-slate-300">Project brief</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="A few lines about the goal, the timeline and anything already in motion."
          className="w-full resize-y rounded-xl border border-white/10 bg-[#050b18] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-sky-400/50"
        />
      </label>

      {status !== 'idle' && (
        <div
          role="status"
          className={
            status === 'error'
              ? 'rounded-xl border border-rose-400/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200'
              : 'rounded-xl border border-sky-400/30 bg-sky-500/10 px-4 py-3 text-sm text-sky-100'
          }
        >
          {message}
        </div>
      )}

      <button
        type="submit"
        className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_40px_rgba(37,99,235,0.35)]"
      >
        Send brief
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>

      <p className="text-xs leading-relaxed text-slate-500">
        By submitting you agree to our friendly privacy handling — we&apos;ll never share your details. You can also{' '}
        <a href={`mailto:${site.email}`} className="text-slate-300 underline underline-offset-3">
          email us directly
        </a>
        .
      </p>
    </form>
  )
}
