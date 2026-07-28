'use client'

import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/content'

export function WorkGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((project) => {
        const inner = (
          <>
            <div className="mb-4 flex items-start justify-between gap-3">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] tracking-[0.14em] text-slate-300 uppercase">
                {project.tag}
              </span>
              {project.url ? (
                <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sky-300" />
              ) : null}
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-white">
              {project.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.description}</p>
            {project.url ? (
              <span className="mt-5 inline-flex text-sm font-medium text-sky-300/90 transition-colors group-hover:text-sky-200">
                Visit site
              </span>
            ) : (
              <span className="mt-5 inline-flex text-sm text-slate-500">Private / in progress</span>
            )}
          </>
        )

        if (project.url) {
          return (
            <a
              key={project.slug}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[24px] border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-sky-300/35 hover:bg-white/[0.055]"
            >
              {inner}
            </a>
          )
        }

        return (
          <div
            key={project.slug}
            className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6"
          >
            {inner}
          </div>
        )
      })}
    </div>
  )
}
