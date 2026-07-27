'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className="fixed top-4 right-0 left-0 z-50 px-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#07111f]/75 px-5 py-3 text-sm text-slate-100 shadow-[0_18px_50px_rgba(5,15,40,0.35)] backdrop-blur-xl">
        <Link href="/" className="font-[family-name:var(--font-heading)] text-base font-semibold tracking-tight">
          Beta Works
        </Link>

        <nav className="hidden items-center gap-6 text-slate-300 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'transition-colors hover:text-white',
                isActive(link.href) && 'text-white'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 px-4 py-2 text-xs font-semibold text-slate-950 shadow-[0_10px_30px_rgba(37,99,235,0.35)] sm:inline-flex"
          >
            Start a project
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-3xl border border-white/10 bg-[#07111f]/95 p-4 text-slate-100 shadow-xl backdrop-blur-xl md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                'rounded-2xl px-4 py-3 transition-colors hover:bg-white/5',
                isActive(link.href) && 'bg-white/5 text-white'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 px-4 py-3 text-sm font-semibold text-slate-950"
          >
            Start a project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </header>
  )
}
