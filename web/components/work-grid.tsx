'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/content'
import { cn } from '@/lib/utils'

const filters = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'ai', label: 'AI / ML' },
  { id: 'agentic', label: 'Agentic' },
  { id: 'shopify', label: 'Shopify' },
  { id: 'brand', label: 'Brand' },
]

export function WorkGrid() {
  const [filter, setFilter] = useState('all')

  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  )

  const featured = visible.find((p) => p.featured)
  const grid = visible.filter((p) => !p.featured)

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
            className={cn(
              'rounded-full border px-4 py-2 text-sm transition-colors',
              filter === f.id
                ? 'border-sky-300/40 bg-sky-400/15 text-sky-100'
                : 'border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20'
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
      <p className="mt-4 mb-8 text-sm text-slate-500">
        <span className="text-slate-300">{visible.length}</span> projects shown
      </p>

      {featured && (
        <Link
          href={`/work/${featured.slug}`}
          className="group relative mb-8 block overflow-hidden rounded-[28px] border border-white/10 bg-[#07111f]"
        >
          <div className="relative aspect-[16/8] overflow-hidden">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 1100px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050b18] via-[#050b18]/40 to-transparent" />
          </div>
          <div className="absolute top-5 left-5 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[11px] tracking-[0.14em] text-white uppercase backdrop-blur">
            Featured case
          </div>
          <div className="absolute right-5 bottom-5 left-5 md:right-8 md:bottom-8 md:left-8">
            <div className="mb-3 flex flex-wrap gap-2">
              {featured.chips?.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-slate-100 backdrop-blur"
                >
                  {chip}
                </span>
              ))}
            </div>
            <h2 className="max-w-3xl font-[family-name:var(--font-heading)] text-2xl font-semibold text-white md:text-4xl">
              {featured.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">{featured.desc}</p>
            <div className="mt-5 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
              {featured.metrics.map((m) => (
                <div key={m.label}>
                  <div className="text-lg font-semibold text-white">{m.value}</div>
                  <div className="text-xs text-slate-400">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Link>
      )}

      {visible.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-white/15 px-6 py-12 text-center text-slate-400">
          No projects in this category yet — more coming soon.
        </p>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {grid.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group overflow-hidden rounded-[24px] border border-white/10 bg-[#07111f] transition-colors hover:border-sky-300/30"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b18] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 text-[11px] tracking-[0.14em] text-slate-200 uppercase">
                  {project.num}
                </span>
                <span className="absolute top-4 right-4 rounded-full border border-white/15 bg-black/35 px-2.5 py-1 text-[10px] tracking-[0.12em] text-slate-100 uppercase backdrop-blur">
                  {project.tag}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sky-300" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.oneliner}</p>
                <div className="mt-4 grid grid-cols-3 gap-3 border-t border-white/10 pt-4">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-sm font-semibold text-white">{m.value}</div>
                      <div className="text-[11px] text-slate-500">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
