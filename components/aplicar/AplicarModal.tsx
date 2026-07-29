'use client'

import { useCallback, useEffect, useState } from 'react'

const FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSd7X9eTbbHpJcoJ5cFykq_2lA-yw0Vm5wHic-dw1-38kANyxg/viewform?embedded=true'
const FORM_PUBLIC_URL = 'https://forms.gle/2uon6U5AwNvn13z6A'
const EVENT_NAME = 'aplicar-modal:open'

export function openAplicarModal() {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent(EVENT_NAME))
}

export function AplicarModal() {
  const [open, setOpen] = useState(false)
  const [iframeLoaded, setIframeLoaded] = useState(false)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    function handler() {
      setIframeLoaded(false)
      setOpen(true)
    }
    window.addEventListener(EVENT_NAME, handler)
    return () => window.removeEventListener(EVENT_NAME, handler)
  }, [])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [open, close])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Formulário de aplicação ELEVEM-SE"
      onClick={(e) => {
        if (e.target === e.currentTarget) close()
      }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        background: 'rgba(10, 15, 25, 0.78)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(0.75rem, 2.5vw, 2rem)',
        overflowY: 'auto',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 780,
          maxHeight: '92vh',
          background: 'var(--surface-bege, #EDE3CF)',
          border: '1px solid rgba(194,161,77,0.35)',
          borderRadius: 14,
          boxShadow:
            '0 40px 80px rgba(0,0,0,0.55), 0 20px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 'clamp(0.85rem, 1.5vw, 1.15rem) clamp(1rem, 2vw, 1.5rem)',
            background: 'rgba(255,255,255,0.35)',
            borderBottom: '1px solid rgba(194,161,77,0.22)',
          }}
        >
          <div>
            <p
              className="elv-sans"
              style={{
                fontSize: '0.68rem',
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: 'var(--text-gold, #735422)',
                fontWeight: 600,
                margin: 0,
              }}
            >
              APLICAÇÃO ELEVEM-SE
            </p>
            <p
              className="elv-serif"
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                color: 'var(--text-strong, #2E2A2B)',
                fontStyle: 'italic',
                margin: '2px 0 0',
                lineHeight: 1.25,
              }}
            >
              Preencha para conversarmos com o casal.
            </p>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Fechar formulário"
            style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              background: 'var(--wine-600, #6E2A36)',
              color: '#F5F0E8',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              lineHeight: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              marginLeft: '1rem',
              transition: 'background 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--wine-700, #5A1F28)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--wine-600, #6E2A36)'
            }}
          >
            ✕
          </button>
        </div>

        <div
          style={{
            position: 'relative',
            flex: 1,
            minHeight: 520,
            background: '#fff',
          }}
        >
          {!iframeLoaded && (
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted, #716A6B)',
                fontSize: '0.9rem',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Carregando formulário…
            </div>
          )}
          <iframe
            src={FORM_EMBED_URL}
            title="Formulário de aplicação ELEVEM-SE"
            loading="lazy"
            onLoad={() => setIframeLoaded(true)}
            style={{
              width: '100%',
              height: '100%',
              minHeight: 520,
              border: 0,
              display: 'block',
              opacity: iframeLoaded ? 1 : 0,
              transition: 'opacity 250ms ease',
            }}
          />
        </div>

        <div
          style={{
            padding: '0.75rem 1.25rem',
            background: 'rgba(255,255,255,0.35)',
            borderTop: '1px solid rgba(194,161,77,0.22)',
            fontSize: '0.78rem',
            color: 'var(--text-muted, #716A6B)',
            textAlign: 'center',
            fontFamily: 'var(--font-sans)',
          }}
        >
          Se o formulário não carregar,{' '}
          <a
            href={FORM_PUBLIC_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--wine-600, #6E2A36)',
              fontWeight: 600,
              textDecoration: 'underline',
            }}
          >
            abra em uma nova aba
          </a>
          .
        </div>
      </div>
    </div>
  )
}
