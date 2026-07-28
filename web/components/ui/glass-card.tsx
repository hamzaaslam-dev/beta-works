import * as React from 'react'
import { ArrowUpRight, ExternalLink, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  tag?: string
  href?: string
  ctaLabel?: string
  icon?: LucideIcon
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  (
    {
      className,
      title,
      description,
      tag = 'Project',
      href,
      ctaLabel = 'Visit site',
      icon: Icon = ExternalLink,
      ...props
    },
    ref
  ) => {
    const initial = title.trim().charAt(0).toUpperCase() || 'B'

    const body = (
      <div
        className={cn(
          'relative h-full rounded-[40px] bg-gradient-to-br from-[#0b1b3a] via-[#07111f] to-[#020617]',
          'shadow-[0_24px_60px_rgba(2,6,23,0.55)] transition-all duration-500 ease-out',
          '[transform-style:preserve-3d]',
          'group-hover:[box-shadow:rgba(14,165,233,0.18)_0px_30px_60px_-20px,rgba(0,0,0,0.45)_20px_40px_30px_-30px]',
          'group-hover:[transform:rotate3d(1,1,0,18deg)]'
        )}
      >
        <div className="absolute inset-2 rounded-[34px] border border-sky-300/15 border-b-white/20 border-l-white/20 bg-gradient-to-b from-sky-200/15 via-white/5 to-transparent backdrop-blur-md [transform-style:preserve-3d] [transform:translate3d(0,0,22px)]" />

        <div className="absolute inset-x-0 top-0 [transform:translate3d(0,0,26px)]">
          <div className="px-7 pt-24 pb-0">
            <span className="mb-3 inline-flex rounded-full border border-sky-300/25 bg-sky-400/10 px-2.5 py-1 text-[10px] font-medium tracking-[0.16em] text-sky-100 uppercase">
              {tag}
            </span>
            <span className="mt-3 block font-[family-name:var(--font-heading)] text-xl font-semibold tracking-tight text-white">
              {title}
            </span>
            <span className="mt-3 block line-clamp-4 text-[14px] leading-relaxed text-slate-300/90">
              {description}
            </span>
          </div>
        </div>

        <div className="absolute right-5 bottom-5 left-5 flex items-center justify-between [transform-style:preserve-3d] [transform:translate3d(0,0,26px)]">
          <div className="flex gap-2.5 [transform-style:preserve-3d]">
            <span
              className={cn(
                'grid h-[34px] w-[34px] place-content-center rounded-full border border-sky-300/20',
                'bg-gradient-to-br from-sky-300 to-blue-500 text-slate-950',
                'shadow-[rgba(14,165,233,0.35)_0px_10px_18px_-8px] transition-all duration-300',
                'group-hover:[box-shadow:rgba(14,165,233,0.45)_-4px_16px_20px_0px]',
                'group-hover:[transform:translate3d(0,0,40px)]'
              )}
              style={{ transitionDelay: '200ms' }}
            >
              <Icon className="h-4 w-4" />
            </span>
          </div>

          <div className="flex items-center gap-1.5 transition-all duration-200 ease-out group-hover:[transform:translate3d(0,0,18px)]">
            <span className="text-xs font-semibold tracking-wide text-sky-100">
              {href ? ctaLabel : 'In progress'}
            </span>
            {href ? <ArrowUpRight className="h-4 w-4 stroke-sky-200" strokeWidth={2.5} /> : null}
          </div>
        </div>

        <div className="absolute top-0 right-0 [transform-style:preserve-3d]">
          {[
            { size: '160px', pos: '6px', z: '18px', delay: '0s', opacity: 'bg-sky-400/10' },
            { size: '130px', pos: '12px', z: '36px', delay: '0.15s', opacity: 'bg-blue-400/10' },
            { size: '100px', pos: '18px', z: '54px', delay: '0.3s', opacity: 'bg-sky-300/10' },
            { size: '72px', pos: '24px', z: '72px', delay: '0.45s', opacity: 'bg-white/10' },
          ].map((circle, index) => (
            <div
              key={index}
              className={cn(
                'absolute aspect-square rounded-full shadow-[rgba(56,189,248,0.12)_-8px_8px_18px_0px] transition-all duration-500 ease-out',
                circle.opacity
              )}
              style={{
                width: circle.size,
                top: circle.pos,
                right: circle.pos,
                transform: `translate3d(0, 0, ${circle.z})`,
                transitionDelay: circle.delay,
              }}
            />
          ))}
          <div
            className="absolute grid aspect-square w-[48px] place-content-center rounded-full bg-gradient-to-br from-white to-sky-100 text-sm font-bold text-slate-950 shadow-[rgba(14,165,233,0.25)_-6px_10px_18px_0px] transition-all duration-500 ease-out [transform:translate3d(0,0,92px)] [transition-delay:0.55s] group-hover:[transform:translate3d(0,0,110px)]"
            style={{ top: '32px', right: '32px' }}
            aria-hidden
          >
            {initial}
          </div>
        </div>
      </div>
    )

    const shellClass = cn(
      'group h-[320px] w-full max-w-[300px] [perspective:1000px]',
      'outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617]',
      className
    )

    if (href) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={shellClass}
          aria-label={`${title} — ${ctaLabel}`}
        >
          {body}
        </a>
      )
    }

    return (
      <div ref={ref} className={shellClass} {...props}>
        {body}
      </div>
    )
  }
)

GlassCard.displayName = 'GlassCard'

export default GlassCard
