'use client'

interface EbookBuyButtonProps {
  href: string
  price: string
}

export function EbookBuyButton({ href, price }: EbookBuyButtonProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-6)',
        flexWrap: 'wrap',
      }}
    >
      <span
        className="elv-serif"
        style={{
          fontSize: 'clamp(1.6rem, 2.4vw, 2.2rem)',
          fontWeight: 600,
          color: 'var(--text-strong, #2E2A2B)',
          letterSpacing: '-0.01em',
        }}
      >
        {price}
      </span>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '14px 28px',
          borderRadius: 'var(--radius-pill, 9999px)',
          background: 'var(--action-primary, #6E2A36)',
          color: 'var(--white-warm, #FFFDFA)',
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(0.78rem, 0.74rem + 0.2vw, 0.92rem)',
          fontWeight: 600,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          transition: 'background 200ms ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--action-primary-hover, #5C2230)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'var(--action-primary, #6E2A36)'
        }}
      >
        COMPRAR AGORA →
      </a>
    </div>
  )
}
