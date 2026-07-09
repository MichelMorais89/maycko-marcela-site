import React from 'react'

type Variant = 'fios' | 'elos' | 'subir'

interface BrandArrowProps {
  variant?: Variant
  size?: number | string
  color?: string
  strokeWidth?: number
  className?: string
  style?: React.CSSProperties
  ariaLabel?: string
}

/**
 * Setas oficiais ELEVEM-SE.
 * - fios: dois fios que viram uma seta só (CTA principal — mais autoral)
 * - elos: dois anéis entrelaçados (marcador de afeto, não direcional)
 * - subir: dois "v" invertidos sobem lado a lado (scroll hint / vertical)
 *
 * Ver iconografia canônica em docs/smart-memory/agents/ux/iconografia-setas.md
 */
export function BrandArrow({
  variant = 'fios',
  size = 20,
  color = 'currentColor',
  strokeWidth = 1.5,
  className,
  style,
  ariaLabel,
}: BrandArrowProps) {
  const commonProps = {
    width: size,
    height: size,
    viewBox: '0 0 32 32',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': ariaLabel ? undefined : true,
    'aria-label': ariaLabel,
    className,
    style: { display: 'inline-block', flexShrink: 0, ...style },
  }

  if (variant === 'fios') {
    // Opção A — Dois fios, um destino
    // Duas curvas suaves que se entrelaçam à esquerda e viram uma seta única à direita
    return (
      <svg {...commonProps}>
        {/* Fio 1 (superior) — entra em curva descendente */}
        <path
          d="M4 11 C 10 11, 13 14, 18 16"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        {/* Fio 2 (inferior) — entra em curva ascendente */}
        <path
          d="M4 21 C 10 21, 13 18, 18 16"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        {/* Ponta da seta unificada */}
        <path
          d="M18 16 L28 16 M22 11 L28 16 L22 21"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (variant === 'elos') {
    // Opção B — Elos (dois anéis entrelaçados, sem ponta)
    return (
      <svg {...commonProps}>
        <circle
          cx="12"
          cy="16"
          r="7"
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx="20"
          cy="16"
          r="7"
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Ponto sutil no encontro pra reforçar a união */}
        <circle cx="16" cy="16" r="0.6" fill={color} opacity="0.7" />
      </svg>
    )
  }

  // Opção C — Subir juntos (dois v invertidos lado a lado)
  return (
    <svg {...commonProps}>
      {/* V invertido esquerdo — chevron up */}
      <path
        d="M6 20 L12 12 L18 20"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* V invertido direito — chevron up */}
      <path
        d="M14 20 L20 12 L26 20"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
