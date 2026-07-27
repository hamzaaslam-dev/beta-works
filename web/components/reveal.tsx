'use client'

import type { ReactNode } from 'react'
import { useRef } from 'react'
import { motion, useInView, useReducedMotion, type Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

const ease = [0.22, 1, 0.36, 1] as const

const variants: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0 },
  },
}

export function Reveal({
  children,
  className,
  delay = 0,
  variant = 'fadeUp',
  once = true,
}: {
  children: ReactNode
  className?: string
  delay?: number
  variant?: keyof typeof variants
  once?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, margin: '-10% 0px -8% 0px' })
  const reduce = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={reduce ? false : 'hidden'}
      animate={reduce || inView ? 'visible' : 'hidden'}
      variants={variants[variant]}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

export function RevealStagger({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode
  className?: string
  stagger?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })
  const reduce = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={reduce || inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: reduce ? 0 : stagger },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({
  children,
  className,
  variant = 'fadeUp',
}: {
  children: ReactNode
  className?: string
  variant?: keyof typeof variants
}) {
  return (
    <motion.div
      className={className}
      variants={variants[variant]}
      transition={{ duration: 0.65, ease }}
    >
      {children}
    </motion.div>
  )
}
