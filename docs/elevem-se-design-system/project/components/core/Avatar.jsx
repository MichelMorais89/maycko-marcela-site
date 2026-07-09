import React from 'react';

/**
 * Avatar for mentor / testimonial portraits. Image or initials,
 * with an optional fine gold ring. Warm, restrained.
 */
export function Avatar({
  src,
  alt = '',
  initials,
  size = 56,
  ring = true,
  style,
  ...rest
}) {
  const ringStyle = ring
    ? { boxShadow: 'inset 0 0 0 1px var(--gold-500), 0 0 0 4px var(--ivory)' }
    : {};

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        borderRadius: 'var(--radius-circle)',
        overflow: 'hidden',
        flex: 'none',
        background: 'var(--sand)',
        color: 'var(--wine-700)',
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--weight-semibold)',
        fontSize: size * 0.4,
        letterSpacing: '0.02em',
        ...ringStyle,
        ...style,
      }}
      {...rest}
    >
      {src ? (
        <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      ) : (
        <span aria-label={alt || undefined}>{initials}</span>
      )}
    </span>
  );
}
