import React from 'react';

/**
 * Text input. Quiet by default: bottom-rule style or soft box.
 * Focus brings a gold underline / ring. Self-contained focus state.
 */
export function Input({
  variant = 'box',        // 'box' | 'line'
  invalid = false,
  disabled = false,
  size = 'md',            // 'sm' | 'md' | 'lg'
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);

  const sizes = {
    sm: { padding: variant === 'line' ? '8px 2px' : '10px 14px', fontSize: 'var(--text-sm)' },
    md: { padding: variant === 'line' ? '11px 2px' : '13px 16px', fontSize: 'var(--text-base)' },
    lg: { padding: variant === 'line' ? '14px 2px' : '16px 18px', fontSize: 'var(--text-md)' },
  };
  const s = sizes[size] || sizes.md;

  const borderColor = invalid
    ? 'var(--danger)'
    : focus
    ? 'var(--gold-500)'
    : 'var(--nude)';

  const base = {
    width: '100%',
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--weight-regular)',
    color: 'var(--text-strong)',
    background: variant === 'line' ? 'transparent' : 'var(--white-warm)',
    outline: 'none',
    transition: 'border-color var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)',
    opacity: disabled ? 0.5 : 1,
    ...s,
  };

  const skin =
    variant === 'line'
      ? {
          border: 'none',
          borderBottom: `1px solid ${borderColor}`,
          borderRadius: 0,
        }
      : {
          border: `1px solid ${borderColor}`,
          borderRadius: 'var(--radius-md)',
          boxShadow: focus && !invalid ? '0 0 0 3px var(--gold-100)' : 'none',
        };

  return (
    <input
      disabled={disabled}
      aria-invalid={invalid || undefined}
      onFocus={(e) => { setFocus(true); rest.onFocus && rest.onFocus(e); }}
      onBlur={(e) => { setFocus(false); rest.onBlur && rest.onBlur(e); }}
      style={{ ...base, ...skin, ...style }}
      {...rest}
    />
  );
}
