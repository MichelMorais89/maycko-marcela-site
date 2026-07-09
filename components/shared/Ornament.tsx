import React from 'react'

interface OrnamentProps {
  tone?: 'gold' | 'wine'
  variant?: 'diamond' | 'rule-diamond-rule' | 'rule'
  ruleWidth?: number
  style?: React.CSSProperties
  className?: string
}

const COLOR = {
  gold: 'var(--gold-500)',
  wine: 'var(--wine-600)',
}

export function Ornament({
  tone = 'gold',
  variant = 'rule-diamond-rule',
  ruleWidth = 46,
  style,
  className,
}: OrnamentProps) {
  const color = COLOR[tone]

  if (variant === 'diamond') {
    return (
      <span
        aria-hidden="true"
        className={className}
        style={{
          display: 'inline-block',
          width: 9,
          height: 9,
          border: `1px solid ${color}`,
          transform: 'rotate(45deg)',
          ...style,
        }}
      />
    )
  }

  if (variant === 'rule') {
    return (
      <span
        aria-hidden="true"
        className={className}
        style={{
          display: 'inline-block',
          width: ruleWidth,
          height: 1,
          background: color,
          ...style,
        }}
      />
    )
  }

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.75rem',
        ...style,
      }}
    >
      <span style={{ display: 'inline-block', width: ruleWidth, height: 1, background: color }} />
      <span
        style={{
          display: 'inline-block',
          width: 9,
          height: 9,
          border: `1px solid ${color}`,
          transform: 'rotate(45deg)',
        }}
      />
      <span style={{ display: 'inline-block', width: ruleWidth, height: 1, background: color }} />
    </div>
  )
}
