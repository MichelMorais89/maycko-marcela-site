'use client'

import type { CSSProperties, ReactNode } from 'react'
import { openAplicarModal } from '@/components/aplicar/AplicarModal'

interface AplicarButtonProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  ariaLabel?: string
}

export function AplicarButton({
  children,
  className,
  style,
  ariaLabel,
}: AplicarButtonProps) {
  return (
    <button
      type="button"
      onClick={() => openAplicarModal()}
      className={className}
      style={style}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
