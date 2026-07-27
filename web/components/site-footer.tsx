import Link from 'next/link'
import { BrandLogo } from '@/components/brand-logo'
import { site, services } from '@/lib/content'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-[#030712] text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-4 md:px-6">
        <div className="md:col-span-1">
          <BrandLogo variant="stacked" size="md" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">{site.tagline}</p>
        </div>

        <div>
          <h4 className="mb-4 text-xs tracking-[0.16em] text-slate-500 uppercase">Services</h4>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.id}>
                <Link href={`/services#${s.id}`} className="transition-colors hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs tracking-[0.16em] text-slate-500 uppercase">Studio</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="transition-colors hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/work" className="transition-colors hover:text-white">
                Work
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs tracking-[0.16em] text-slate-500 uppercase">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="transition-colors hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>{site.location}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 border-t border-white/10 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:items-center md:px-6">
        <span>© {year} Beta Works. All rights reserved.</span>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-white"
          aria-label="Beta Works on LinkedIn"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
