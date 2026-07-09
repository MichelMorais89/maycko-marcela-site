import React from 'react';

/**
 * Surface card. Warm off-white with a hairline, soft warm shadow.
 * Variants: 'plain' (hairline), 'raised' (shadow), 'wine' (dark
 * section card), 'outline' (gold hairline, transparent).
 */
export function Card({
  children,
  variant = 'plain',     // 'plain' | 'raised' | 'wine' | 'outline'
  pad = 'md',            // 'sm' | 'md' | 'lg'
  style,
  ...rest
}) {
  const pads = {
    sm: 'var(--space-5)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)',
  };

  const variants = {
    plain: {
      background: 'var(--surface-card)',
      boxShadow: 'var(--ring-hairline)',
      color: 'var(--text-body)',
    },
    raised: {
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-md)',
      color: 'var(--text-body)',
    },
    wine: {
      background: 'var(--surface-wine)',
      boxShadow: '0 24px 60px -30px rgba(46,14,26,0.5)',
      color: 'var(--text-on-wine)',
    },
    ink: {
      background: 'var(--ink-800)',
      boxShadow: '0 24px 60px -30px rgba(13,20,34,0.55)',
      color: 'var(--ink-100)',
    },
    outline: {
      background: 'transparent',
      boxShadow: 'inset 0 0 0 1px var(--gold-500)',
      color: 'var(--text-body)',
    },
  };

  return (
    <div
      style={{
        borderRadius: 'var(--radius-md)',
        padding: pads[pad] || pads.md,
        ...(variants[variant] || variants.plain),
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
