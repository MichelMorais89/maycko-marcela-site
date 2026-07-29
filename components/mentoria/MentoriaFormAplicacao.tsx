'use client'

import { Ornament } from '@/components/shared/Ornament'
import { openAplicarModal } from '@/components/aplicar/AplicarModal'

export function MentoriaFormAplicacao() {
  return (
    <div
      style={{
        maxWidth: 720,
        marginInline: 'auto',
        background: 'var(--surface-bege, #EDE3CF)',
        border: '1px solid rgba(194,161,77,0.28)',
        borderRadius: 'var(--radius-lg)',
        padding: 'clamp(2rem, 4vw, 3rem)',
        boxShadow: '0 4px 20px rgba(44,26,18,0.06)',
        textAlign: 'center',
      }}
    >
      <div style={{ marginBottom: 'var(--space-4)' }}>
        <Ornament variant="diamond" tone="gold" />
      </div>

      <p
        className="elv-sans"
        style={{
          fontSize: '0.72rem',
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
          color: 'var(--text-gold, #735422)',
          fontWeight: 600,
          margin: 0,
        }}
      >
        PROCESSO SELETIVO
      </p>

      <h3
        className="elv-serif"
        style={{
          fontSize: 'clamp(1.4rem, 2.2vw, 1.8rem)',
          color: 'var(--text-strong, #2E2A2B)',
          lineHeight: 1.25,
          margin: 'var(--space-4) auto 0',
          maxWidth: '28ch',
          fontWeight: 500,
        }}
      >
        Dê o primeiro passo.{' '}
        <em style={{ fontStyle: 'italic', color: 'var(--wine-600, #6E2A36)', fontWeight: 400 }}>
          Preencha a aplicação.
        </em>
      </h3>

      <p
        className="elv-sans"
        style={{
          fontSize: 'clamp(0.92rem, 1.1vw, 1rem)',
          color: 'var(--text-body, #4D4748)',
          lineHeight: 1.6,
          margin: 'var(--space-4) auto 0',
          maxWidth: '46ch',
        }}
      >
        A ELEVEM-SE é boutique. Trabalhamos com um número reduzido de casais por
        ciclo. O formulário é o primeiro filtro — respostas honestas ajudam a
        gente a entender se vale um convite pra conversa de alinhamento.
      </p>

      <button
        type="button"
        onClick={() => openAplicarModal()}
        style={{
          marginTop: 'var(--space-6)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          padding: '16px 36px',
          borderRadius: 'var(--radius-pill)',
          background: 'var(--wine-600, #6E2A36)',
          color: '#F5F0E8',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'var(--font-sans)',
          fontSize: '0.9rem',
          fontWeight: 600,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          boxShadow: '0 10px 24px rgba(110,42,54,0.28)',
          transition: 'background 0.15s ease, transform 0.15s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--wine-700, #5A1F28)'
          e.currentTarget.style.transform = 'translateY(-1px)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'var(--wine-600, #6E2A36)'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        Preencher aplicação
      </button>

      <p
        className="elv-sans"
        style={{
          fontSize: '0.78rem',
          color: 'var(--text-muted, #716A6B)',
          margin: 'var(--space-4) auto 0',
          maxWidth: '38ch',
        }}
      >
        Retorno em até 48h úteis. Aceitamos no máximo 12 casais por ciclo.
      </p>
    </div>
  )
}
