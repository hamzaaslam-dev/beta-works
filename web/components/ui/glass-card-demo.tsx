import * as React from 'react'
import GlassCard from '@/components/ui/glass-card'

const GlassCardDemo = () => {
  return (
    <div className="flex h-[450px] w-full items-center justify-center bg-[#020617] p-10">
      <GlassCard
        title="Beta Works"
        tag="Studio"
        description="Create, ship, and scale web, mobile, commerce and brand experiences with a senior squad."
        href="/work"
        ctaLabel="View work"
      />
    </div>
  )
}

export { GlassCardDemo as DemoOne }
