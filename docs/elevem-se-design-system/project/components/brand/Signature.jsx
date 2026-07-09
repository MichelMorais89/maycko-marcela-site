import React from 'react';

/**
 * Mentor signature for the endorsed architecture (Elevem-se = method;
 * Maycko & Marcela = the mentors who sign it). Serif uppercase form:
 * name + fine rule with a dot + spaced surname. Brand colours —
 * Marcela = dourado, Maycko = vinho. 'couple' renders the joint lockup.
 */
export function Signature({
  mentor = 'couple',     // 'marcela' | 'maycko' | 'couple'
  tone = 'wine',         // 'wine' (on light) | 'light' (on wine/dark)
  size = 'md',           // 'sm' | 'md' | 'lg'
  role = false,          // show the "dourado · prosperidade" sub-line
  style,
  ...rest
}) {
  const onDark = tone === 'light';
  const sizes = {
    sm: { name: 20, sur: 9.5, rule: 110 },
    md: { name: 30, sur: 12, rule: 150 },
    lg: { name: 42, sur: 15, rule: 200 },
  };
  const s = sizes[size] || sizes.md;

  const palette = {
    marcela: {
      ink: onDark ? 'var(--gold-300)' : 'var(--gold-700)',
      line: onDark ? 'var(--gold-400)' : 'var(--gold-600)',
      role: 'Dourado · prosperidade',
    },
    maycko: {
      ink: onDark ? 'var(--ink-300)' : 'var(--ink-800)',
      line: onDark ? 'var(--ink-400)' : 'var(--ink-600)',
      role: 'Azul · estrutura',
    },
  };

  const data = {
    marcela: { name: 'MARCELA', sur: 'ZANARDO' },
    maycko: { name: 'MAYCKO', sur: 'ALVES' },
  };

  if (mentor === 'couple') {
    const ink = onDark ? 'var(--white-warm)' : 'var(--graphite-900)';
    const amp = onDark ? 'var(--gold-300)' : 'var(--gold-600)';
    return (
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 'var(--weight-medium)',
          fontSize: s.name * 0.78,
          letterSpacing: '0.04em',
          color: ink,
          display: 'inline-flex',
          alignItems: 'baseline',
          gap: '0.18em',
          ...style,
        }}
        {...rest}
      >
        Maycko <span style={{ color: amp, fontStyle: 'italic', padding: '0 0.04em' }}>&amp;</span> Marcela
      </span>
    );
  }

  const p = palette[mentor] || palette.maycko;
  const d = data[mentor] || data.maycko;

  return (
    <span
      style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 9, ...style }}
      {...rest}
    >
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-medium)', fontSize: s.name, letterSpacing: '0.14em', lineHeight: 1, color: p.ink }}>
        {d.name}
      </span>
      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: s.rule }}>
        <span style={{ flex: 1, height: 1, background: p.line }} />
        <span style={{ width: 4, height: 4, borderRadius: '50%', flex: 'none', background: p.line }} />
        <span style={{ flex: 1, height: 1, background: p.line }} />
      </span>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: s.sur, letterSpacing: '0.42em', color: p.ink }}>
        {d.sur}
      </span>
      {role && (
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 9, letterSpacing: '0.26em', textTransform: 'uppercase', color: onDark ? 'var(--gold-300)' : 'var(--text-muted)', marginTop: 2 }}>
          {p.role}
        </span>
      )}
    </span>
  );
}
