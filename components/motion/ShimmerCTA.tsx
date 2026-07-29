import Link from 'next/link'

interface ShimmerCTAProps {
  href: string
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export function ShimmerCTA({ href, children, style, className, onClick }: ShimmerCTAProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`shimmer-cta elv-cta-glow ${className ?? ''}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '15px 32px',
        borderRadius: 'var(--radius-pill)',
        background: 'var(--wine-600)',
        color: 'var(--white-warm)',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: 'var(--tracking-wider)',
        textTransform: 'uppercase',
        textDecoration: 'none',
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
    </Link>
  )
}
