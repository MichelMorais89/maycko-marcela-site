import { cn } from '@/lib/utils'
import { Eyebrow } from './Eyebrow'

interface SectionHeadProps {
  eyebrow?: string
  title: string
  lead?: string
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  titleClass?: string
  max?: string
  className?: string
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  align = 'left',
  tone = 'dark',
  titleClass = 'elv-fluid-h2',
  max = '24ch',
  className,
}: SectionHeadProps) {
  const isCenter = align === 'center'
  const isLight = tone === 'light'

  return (
    <div
      className={cn(isCenter && 'elv-center', className)}
      style={{
        maxWidth: isCenter ? '46rem' : undefined,
        marginInline: isCenter ? 'auto' : undefined,
      }}
    >
      {eyebrow && <Eyebrow tone={isLight ? 'onWine' : 'gold'}>{eyebrow}</Eyebrow>}
      {title && (
        <h2
          className={cn('elv-h', titleClass, isLight && 'elv-h--light')}
          style={{ marginTop: 'var(--space-4)', maxWidth: max, textWrap: 'balance' } as React.CSSProperties}
        >
          {title}
        </h2>
      )}
      {lead && (
        <p
          className={cn('elv-lead elv-fluid-lead', isLight ? 'elv-on-wine' : 'elv-muted')}
          style={{
            marginTop: 'var(--space-5)',
            maxWidth: '48ch',
            marginInline: isCenter ? 'auto' : undefined,
          }}
        >
          {lead}
        </p>
      )}
    </div>
  )
}
