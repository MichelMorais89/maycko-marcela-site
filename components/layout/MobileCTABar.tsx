'use client'

import { useState, useEffect } from 'react'
import { openAplicarModal } from '@/components/aplicar/AplicarModal'

interface MobileCTABarProps {
  label?: string
  cta?: string
}

function useMediaQuery(query: string) {
  const [match, setMatch] = useState(false)
  useEffect(() => {
    const m = window.matchMedia(query)
    const h = () => setMatch(m.matches)
    h()
    m.addEventListener('change', h)
    return () => m.removeEventListener('change', h)
  }, [query])
  return match
}

export function MobileCTABar({
  label = 'Vagas abertas neste ciclo',
  cta = 'Aplicar',
}: MobileCTABarProps) {
  const isMobile = useMediaQuery('(max-width: 999px)')
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (!isMobile) { setShown(false); return }
    const onScroll = () => {
      const y = window.scrollY
      const nearBottom = window.innerHeight + y > document.documentElement.scrollHeight - 320
      setShown(y > 560 && !nearBottom)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [isMobile])

  if (!isMobile) return null

  return (
    <div
      aria-hidden={!shown}
      style={{
        position: 'fixed',
        left: 12,
        right: 12,
        bottom: 12,
        zIndex: 55,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-3)',
        padding: '10px 12px 10px 18px',
        background: 'var(--surface-wine-deep)',
        borderRadius: 'var(--radius-pill)',
        boxShadow: 'var(--shadow-lg)',
        transform: shown ? 'translateY(0)' : 'translateY(140%)',
        opacity: shown ? 1 : 0,
        transition: 'transform var(--duration-slow) var(--ease-entrance), opacity var(--duration-base) var(--ease-standard)',
        pointerEvents: shown ? 'auto' : 'none',
      }}
    >
      <span
        className="elv-sans"
        style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--gold-100)', lineHeight: 1.2 }}
      >
        {label}
      </span>
      <button
        type="button"
        onClick={() => openAplicarModal()}
        style={{
          padding: '8px 18px',
          borderRadius: 'var(--radius-pill)',
          background: 'var(--action-gold)',
          color: 'var(--wine-950)',
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--text-xs)',
          fontWeight: 'var(--weight-medium)',
          letterSpacing: 'var(--tracking-wider)',
          textTransform: 'uppercase',
          border: 'none',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
        }}
      >
        {cta}
      </button>
    </div>
  )
}
