import React from 'react';

/**
 * Small uppercase label with wide tracking — the brand's "eyebrow".
 * Optionally prefixed with a short gold rule. Sets a refined,
 * editorial tone above headings.
 */
export function Badge({
  children,
  tone = 'gold',        // 'gold' | 'wine' | 'muted' | 'onWine'
  rule = false,         // prefix a short gold rule
  style,
  ...rest
}) {
  const tones = {
    gold: { color: 'var(--text-gold)' },
    wine: { color: 'var(--wine-600)' },
    muted: { color: 'var(--text-muted)' },
    onWine: { color: 'var(--gold-300)' },
  };

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--weight-medium)',
        fontSize: 'var(--text-2xs)',
        letterSpacing: 'var(--tracking-widest)',
        textTransform: 'uppercase',
        lineHeight: 1,
        ...(tones[tone] || tones.gold),
        ...style,
      }}
      {...rest}
    >
      {rule && (
        <span
          aria-hidden="true"
          style={{
            width: 28,
            height: 1,
            background: tone === 'onWine' ? 'var(--rule-gold-on-wine)' : 'var(--rule-gold)',
            flex: 'none',
          }}
        />
      )}
      {children}
    </span>
  );
}
