import React from 'react';

/**
 * Editorial pull quote / testimonial. Large Spectral italic over
 * light, with a signature gold rule and optional attribution.
 */
export function Quote({
  children,
  cite,
  role,
  tone = 'light',          // 'light' | 'wine'
  size = 'md',             // 'sm' | 'md' | 'lg'
  align = 'left',          // 'left' | 'center'
  style,
  ...rest
}) {
  const onWine = tone === 'wine';
  const fontSize = { sm: 'var(--text-lg)', md: 'var(--text-xl)', lg: 'var(--text-2xl)' }[size] || 'var(--text-xl)';

  return (
    <figure
      style={{
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        textAlign: align,
        gap: 'var(--space-5)',
        maxWidth: '40ch',
        ...style,
      }}
      {...rest}
    >
      <span
        aria-hidden="true"
        style={{
          width: 44,
          height: 1,
          background: onWine ? 'var(--rule-gold-on-wine)' : 'var(--rule-gold)',
        }}
      />
      <blockquote
        style={{
          margin: 0,
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontWeight: 'var(--weight-medium)',
          fontSize,
          lineHeight: 'var(--leading-snug)',
          letterSpacing: '0.005em',
          color: onWine ? 'var(--text-on-wine-strong)' : 'var(--text-strong)',
        }}
      >
        {children}
      </blockquote>
      {(cite || role) && (
        <figcaption
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: align === 'center' ? 'center' : 'flex-start',
          }}
        >
          {cite && (
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 'var(--weight-medium)',
                fontSize: 'var(--text-sm)',
                letterSpacing: 'var(--tracking-wide)',
                color: onWine ? 'var(--white-warm)' : 'var(--text-strong)',
              }}
            >
              {cite}
            </span>
          )}
          {role && (
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-2xs)',
                textTransform: 'uppercase',
                letterSpacing: 'var(--tracking-widest)',
                color: onWine ? 'var(--gold-300)' : 'var(--text-gold)',
              }}
            >
              {role}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
