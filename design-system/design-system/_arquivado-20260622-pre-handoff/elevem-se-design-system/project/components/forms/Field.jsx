import React from 'react';

/**
 * Form field wrapper: label (Mulish label style), optional hint, the
 * control (children), and an optional error message.
 */
export function Field({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  children,
  style,
  ...rest
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', ...style }} {...rest}>
      {label && (
        <label
          htmlFor={htmlFor}
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 'var(--weight-medium)',
            fontSize: 'var(--text-2xs)',
            letterSpacing: 'var(--tracking-wide)',
            textTransform: 'uppercase',
            color: 'var(--text-strong)',
          }}
        >
          {label}
          {required && <span style={{ color: 'var(--gold-600)', marginLeft: 4 }}>*</span>}
        </label>
      )}
      {children}
      {error ? (
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', color: 'var(--danger)' }}>{error}</span>
      ) : hint ? (
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{hint}</span>
      ) : null}
    </div>
  );
}
