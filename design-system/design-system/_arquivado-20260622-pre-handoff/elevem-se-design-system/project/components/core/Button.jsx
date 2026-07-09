import React from 'react';

/**
 * Elevem-se button. Calm, premium. Primary = solid wine; secondary =
 * gold hairline outline; ghost = quiet text; gold = filled antique gold.
 * Hover/press handled in-component (self-contained, no extra CSS).
 */
export function Button({
  children,
  variant = 'primary',   // 'primary' | 'secondary' | 'ghost' | 'gold'
  size = 'md',           // 'sm' | 'md' | 'lg'
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);

  const sizes = {
    sm: { padding: '8px 18px', fontSize: 'var(--text-2xs)', gap: 8 },
    md: { padding: '13px 28px', fontSize: 'var(--text-xs)', gap: 10 },
    lg: { padding: '17px 38px', fontSize: 'var(--text-sm)', gap: 12 },
  };

  const palettes = {
    primary: {
      base: { background: 'var(--action-primary)', color: 'var(--white-warm)', borderColor: 'var(--action-primary)' },
      hover: { background: 'var(--action-primary-hover)', borderColor: 'var(--action-primary-hover)' },
    },
    gold: {
      base: { background: 'var(--gold-500)', color: 'var(--wine-950)', borderColor: 'var(--gold-500)' },
      hover: { background: 'var(--gold-600)', color: 'var(--wine-950)', borderColor: 'var(--gold-600)' },
    },
    secondary: {
      base: { background: 'transparent', color: 'var(--text-brand)', borderColor: 'var(--gold-500)' },
      hover: { background: 'var(--wine-700)', color: 'var(--white-warm)', borderColor: 'var(--wine-700)' },
    },
    ghost: {
      base: { background: 'transparent', color: 'var(--text-brand)', borderColor: 'transparent' },
      hover: { background: 'color-mix(in srgb, var(--text-brand) 12%, transparent)', borderColor: 'transparent' },
    },
  };

  const s = sizes[size] || sizes.md;
  const pal = palettes[variant] || palettes.primary;
  const active = !disabled && hover ? { ...pal.base, ...pal.hover } : pal.base;

  return (
    <button
      disabled={disabled}
      data-variant={variant}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        display: fullWidth ? 'flex' : 'inline-flex',
        width: fullWidth ? '100%' : undefined,
        alignItems: 'center',
        justifyContent: 'center',
        gap: s.gap,
        padding: s.padding,
        fontFamily: 'var(--font-sans)',
        fontSize: s.fontSize,
        fontWeight: 'var(--weight-medium)',
        letterSpacing: 'var(--tracking-wider)',
        textTransform: 'uppercase',
        lineHeight: 1,
        border: '1px solid',
        borderRadius: 'var(--radius-pill)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transform: !disabled && press ? 'translateY(0.5px) scale(0.99)' : 'none',
        transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
        ...active,
        ...style,
      }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
