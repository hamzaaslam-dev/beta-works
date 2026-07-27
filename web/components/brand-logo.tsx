import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type BrandLogoProps = {
  href?: string
  className?: string
  /** horizontal = nav lockup, stacked = footer lockup, mark = icon only */
  variant?: 'horizontal' | 'stacked' | 'mark'
  size?: 'sm' | 'md' | 'lg'
}

const horizontalSizes = {
  sm: { width: 168, height: 41 },
  md: { width: 210, height: 51 },
  lg: { width: 260, height: 64 },
}

const stackedSizes = {
  sm: { width: 110, height: 75 },
  md: { width: 140, height: 96 },
  lg: { width: 180, height: 123 },
}

const markSizes = {
  sm: { width: 28, height: 32 },
  md: { width: 36, height: 42 },
  lg: { width: 48, height: 56 },
}

export function BrandLogo({
  href = '/',
  className,
  variant = 'horizontal',
  size = 'md',
}: BrandLogoProps) {
  const content =
    variant === 'mark' ? (
      <Image
        src="/brand/mark.png"
        alt="Beta Works"
        width={markSizes[size].width}
        height={markSizes[size].height}
        className={cn(
          'h-auto w-auto object-contain drop-shadow-[0_0_18px_rgba(14,165,233,0.25)]',
          className
        )}
        priority
      />
    ) : variant === 'stacked' ? (
      <Image
        src="/brand/logo.png"
        alt="Beta Works"
        width={stackedSizes[size].width}
        height={stackedSizes[size].height}
        className={cn(
          'h-auto w-auto max-h-16 object-contain drop-shadow-[0_0_18px_rgba(14,165,233,0.22)] sm:max-h-20',
          size === 'lg' && 'max-h-24 sm:max-h-28',
          className
        )}
        priority
      />
    ) : (
      <Image
        src="/brand/logo-horizontal.png"
        alt="Beta Works"
        width={horizontalSizes[size].width}
        height={horizontalSizes[size].height}
        className={cn(
          'h-auto w-auto max-h-8 object-contain drop-shadow-[0_0_18px_rgba(14,165,233,0.22)] sm:max-h-9',
          size === 'md' && 'max-h-9 sm:max-h-10',
          size === 'lg' && 'max-h-11 sm:max-h-12',
          className
        )}
        priority
      />
    )

  if (!href) return content

  return (
    <Link href={href} aria-label="Beta Works home" className="inline-flex shrink-0">
      {content}
    </Link>
  )
}
