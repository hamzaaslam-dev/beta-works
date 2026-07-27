import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  lead,
  className,
}: {
  eyebrow?: string
  title: ReactNode
  lead?: string
  className?: string
}) {
  return (
    <div className={cn('mb-10 max-w-3xl', className)}>
      {eyebrow && (
        <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] text-sky-200/80 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-[family-name:var(--font-heading)] text-3xl leading-tight font-semibold tracking-[-0.03em] text-white md:text-5xl">
        {title}
      </h2>
      {lead && <p className="mt-4 text-base leading-relaxed text-slate-400 md:text-lg">{lead}</p>}
    </div>
  )
}
