import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type BrandLogoProps = {
  href?: string
  className?: string
  /** Use full lockup (B + BETA WORKS) vs mark + CSS wordmark */
  variant?: 'lockup' | 'mark'
  size?: 'sm' | 'md' | 'lg'
}

const lockupSizes = {
  sm: { width: 118, height: 40 },
  md: { width: 148, height: 50 },
  lg: { width: 180, height: 62 },
}

const markSizes = {
  sm: { width: 28, height: 28 },
  md: { width: 34, height: 34 },
  lg: { width: 44, height: 44 },
}

export function BrandLogo({
  href = '/',
  className,
  variant = 'lockup',
  size = 'md',
}: BrandLogoProps) {
  const content =
    variant === 'lockup' ? (
      <Image
        src="/brand/logo.png"
        alt="Beta Works"
        width={lockupSizes[size].width}
        height={lockupSizes[size].height}
        className={cn(
          'h-auto w-auto max-h-10 object-contain drop-shadow-[0_0_18px_rgba(14,165,233,0.22)] sm:max-h-11',
          size === 'md' && 'max-h-11 sm:max-h-12',
          size === 'lg' && 'max-h-14 sm:max-h-16',
          className
        )}
        priority
      />
    ) : (
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
    )

  if (!href) return content

  return (
    <Link href={href} aria-label="Beta Works home" className="inline-flex shrink-0">
      {content}
    </Link>
  )
}
