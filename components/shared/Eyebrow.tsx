import { cn } from '@/lib/utils'

interface EyebrowProps {
  children: React.ReactNode
  tone?: 'gold' | 'onWine'
  className?: string
}

export function Eyebrow({ children, tone = 'gold', className }: EyebrowProps) {
  const colorClass = tone === 'onWine' ? 'text-gold-300' : 'text-gold-800'
  const ruleColor = tone === 'onWine' ? 'var(--rule-gold-on-wine)' : 'var(--rule-gold)'

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span
        aria-hidden="true"
        style={{ width: 28, height: 1, background: ruleColor, flexShrink: 0 }}
      />
      <span
        className={cn(
          'font-sans font-medium uppercase tracking-widest',
          colorClass
        )}
        style={{ fontSize: 'var(--text-2xs)' }}
      >
        {children}
      </span>
    </div>
  )
}
