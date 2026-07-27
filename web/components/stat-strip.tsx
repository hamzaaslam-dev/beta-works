'use client'

import { useEffect, useRef, useState } from 'react'

type Stat = {
  value: number
  decimals?: number
  suffix?: string
  prefix?: string
  label: string
}

function useInView(once = true) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) io.disconnect()
        }
      },
      { threshold: 0.35 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [once])

  return { ref, visible }
}

function AnimatedValue({
  value,
  decimals = 0,
  suffix = '',
  prefix = '',
  active,
}: {
  value: number
  decimals?: number
  suffix?: string
  prefix?: string
  active: boolean
}) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!active) return
    const duration = 1200
    const start = performance.now()
    let frame = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(value * eased)
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, value])

  return (
    <span>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export function StatStrip({ stats }: { stats: Stat[] }) {
  const { ref, visible } = useInView()

  return (
    <div ref={ref} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] px-5 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-transform duration-300 hover:-translate-y-1"
        >
          <div className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-white md:text-4xl">
            <AnimatedValue
              value={stat.value}
              decimals={stat.decimals}
              suffix={stat.suffix}
              prefix={stat.prefix}
              active={visible}
            />
          </div>
          <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
