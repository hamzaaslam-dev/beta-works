'use client'

import type { FC, ReactNode } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface HighlightCardProps {
  title: string
  description: string[]
  icon?: ReactNode
  href?: string
  className?: string
}

const HighlightCard: FC<HighlightCardProps> = ({
  title,
  description,
  icon,
  href,
  className,
}) => {
  const card = (
    <div
      className={cn(
        'group h-full cursor-pointer transform transition-all duration-500 hover:scale-[1.03] hover:-rotate-1',
        className
      )}
    >
      <Card
        className={cn(
          'relative w-full overflow-hidden rounded-2xl border border-white/10',
          'bg-gradient-to-br from-[#020617] via-[#07111f] to-[#0b1b3a]',
          'text-white shadow-2xl backdrop-blur-xl',
          'hover:border-sky-300/35 hover:shadow-[0_24px_60px_rgba(14,165,233,0.12)]'
        )}
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/10 to-blue-500/10 opacity-40 transition-opacity duration-500 group-hover:opacity-70" />
          <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-gradient-to-tr from-sky-400/20 to-transparent opacity-30 blur-3xl transition-all duration-700 group-hover:scale-110 group-hover:opacity-55" />
          <div className="absolute top-10 left-10 h-16 w-16 animate-pulse rounded-full bg-sky-300/10 blur-xl" />
          <div className="absolute right-16 bottom-16 h-12 w-12 animate-pulse rounded-full bg-blue-400/10 blur-lg" />
          <div className="absolute inset-0 translate-x-full transform bg-gradient-to-r from-transparent via-sky-200/10 to-transparent transition-transform duration-1000 -skew-x-12 group-hover:translate-x-[-200%]" />
        </div>

        <div className="relative z-10 flex flex-col items-center p-8 text-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 animate-pulse rounded-full border border-sky-300/25" />
            <div className="absolute inset-0 rounded-full border border-sky-300/10" />

            <div className="transform rounded-full border border-sky-300/25 bg-gradient-to-br from-[#020617]/90 to-[#07111f]/80 p-5 shadow-2xl backdrop-blur-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-[0_0_28px_rgba(56,189,248,0.25)]">
              <div className="transform transition-transform duration-700 group-hover:rotate-180">
                {icon}
              </div>
            </div>
          </div>

          <h3 className="mb-4 bg-gradient-to-r from-white via-sky-100 to-white bg-clip-text font-[family-name:var(--font-heading)] text-2xl font-bold text-transparent transition-transform duration-300 group-hover:scale-105 md:text-[1.65rem]">
            {title}
          </h3>

          <div className="max-w-sm space-y-1">
            {description.map((line, idx) => (
              <p
                key={idx}
                className="text-sm leading-relaxed text-slate-300 transition-colors duration-300 group-hover:text-slate-200"
              >
                {line}
              </p>
            ))}
          </div>

          <div className="mt-6 h-0.5 w-1/3 rounded-full bg-gradient-to-r from-transparent via-sky-300 to-transparent transition-all duration-500 group-hover:h-1 group-hover:w-1/2" />

          <div className="mt-4 flex space-x-2 opacity-50 transition-opacity duration-300 group-hover:opacity-100">
            <div className="h-2 w-2 animate-bounce rounded-full bg-sky-300" />
            <div
              className="h-2 w-2 animate-bounce rounded-full bg-sky-300"
              style={{ animationDelay: '0.1s' }}
            />
            <div
              className="h-2 w-2 animate-bounce rounded-full bg-blue-400"
              style={{ animationDelay: '0.2s' }}
            />
          </div>
        </div>

        <div className="absolute top-0 left-0 h-20 w-20 rounded-br-3xl bg-gradient-to-br from-sky-300/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute right-0 bottom-0 h-20 w-20 rounded-tl-3xl bg-gradient-to-tl from-blue-400/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </Card>
    </div>
  )

  if (!href) return card

  return (
    <Link href={href} className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617]">
      {card}
    </Link>
  )
}

export default HighlightCard
