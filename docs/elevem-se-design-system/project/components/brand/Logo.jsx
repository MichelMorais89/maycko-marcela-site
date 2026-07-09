import React from 'react';

/**
 * Elevem-se brand mark. Two intertwined licks (vinho + dourado) rising
 * as a flat flame — union (casal) + elevation (Mago) + paixão/calor
 * (Amante). Composes the symbol with the serif wordmark and tagline.
 */
export function Logo({
  variant = 'lockup',     // 'lockup' | 'horizontal' | 'wordmark' | 'mark'
  tone = 'wine',          // 'wine' (on light) | 'light' (on wine/dark)
  size = 72,              // mark height in px
  tagline = true,
  style,
  ...rest
}) {
  const flameWine = tone === 'light' ? 'var(--ivory, #F4EEE2)' : 'var(--wine-600, #6E2A36)';
  const flameGold = tone === 'light' ? 'var(--gold-400, #D2B673)' : 'var(--gold-500, #C2A14D)';
  const wordColor = tone === 'light' ? 'var(--white-warm, #FFFDFA)' : 'var(--wine-700, #631E33)';
  const tagColor = tone === 'light' ? 'var(--gold-300, #E4D0A6)' : 'var(--gold-800, #735422)';

  const Mark = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      style={{ display: 'block', flex: 'none' }}
    >
      <path d="M59 99 C 51 80 46 58 51 40 C 54 31 58 30 60 33 C 56 31 49 44 44 64 C 42 80 50 92 59 99 Z" fill={flameWine} />
      <path d="M61 99 C 69 78 74 56 69 36 C 66 26 62 22 60 19 C 62 23 71 40 76 60 C 78 78 70 92 61 99 Z" fill={flameGold} />
    </svg>
  );

  const Wordmark = (
    <span
      style={{
        fontFamily: "var(--font-display, 'Spectral', Georgia, serif)",
        fontWeight: 500,
        color: wordColor,
        lineHeight: 1,
        fontSize: size * 0.62,
        letterSpacing: '0.01em',
      }}
    >
      Elevem-se
    </span>
  );

  const Tagline = tagline ? (
    <span
      style={{
        fontFamily: "var(--font-sans, 'Mulish', sans-serif)",
        fontWeight: 500,
        color: tagColor,
        textTransform: 'uppercase',
        letterSpacing: '0.32em',
        fontSize: Math.max(8, size * 0.13),
      }}
    >
      Mentoria para casais
    </span>
  ) : null;

  if (variant === 'mark') {
    return <span style={{ display: 'inline-flex', ...style }} {...rest}>{Mark}</span>;
  }

  if (variant === 'wordmark') {
    return (
      <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: size * 0.14, ...style }} {...rest}>
        {Wordmark}
        {Tagline}
      </span>
    );
  }

  if (variant === 'horizontal') {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.28, ...style }} {...rest}>
        {Mark}
        <span style={{ display: 'inline-flex', flexDirection: 'column', gap: size * 0.1 }}>
          {Wordmark}
          {Tagline}
        </span>
      </span>
    );
  }

  // lockup (default) — stacked, centered
  return (
    <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: size * 0.2, ...style }} {...rest}>
      {Mark}
      <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: size * 0.14 }}>
        {Wordmark}
        {Tagline}
      </span>
    </span>
  );
}
