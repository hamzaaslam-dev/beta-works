'use client'

import {
  Building2,
  HeartPulse,
  Home,
  Lamp,
  Lock,
  ShoppingBag,
  Sparkles,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import GlassCard from '@/components/ui/glass-card'
import { projects } from '@/lib/content'

const icons: Record<string, LucideIcon> = {
  'orient-lighting': Lamp,
  hissedari: Home,
  simulations: Workflow,
  sarmaya: Sparkles,
  'code4-security': Lock,
  'my-a-wellbeing': HeartPulse,
  'lemontree-and-co': ShoppingBag,
  orasure: Building2,
}

export function WorkGrid() {
  return (
    <div className="flex flex-wrap items-stretch justify-center gap-8 md:gap-10">
      {projects.map((project) => (
        <GlassCard
          key={project.slug}
          title={project.name}
          description={project.description}
          tag={project.tag}
          href={project.url}
          ctaLabel="Visit site"
          icon={icons[project.slug] ?? Sparkles}
          className="mx-auto"
        />
      ))}
    </div>
  )
}
