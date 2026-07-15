'use client'

import { useState } from 'react'

export function NewsletterForm({ ctaLabel = 'QUERO RECEBER' }: { ctaLabel?: string }) {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'success' | 'error'>('idle')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setState('error')
      return
    }
    setState('success')
  }

  if (state === 'success') {
    return (
      <p
        className="elv-serif"
        style={{
          fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
          fontStyle: 'italic',
          color: 'var(--text-body, #4D4748)',
        }}
      >
        Perfeito, você será avisado quando o próximo ebook chegar.
      </p>
    )
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      style={{
        display: 'flex',
        gap: 'var(--space-3)',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Seu e-mail"
        required
        aria-label="E-mail para receber próximos ebooks"
        aria-describedby={state === 'error' ? 'email-error' : undefined}
        style={{
          flex: '1 1 220px',
          padding: '13px 18px',
          borderRadius: 'var(--radius-pill, 9999px)',
          border: `1px solid ${state === 'error' ? 'var(--wine-600, #6E2A36)' : 'var(--border-hairline, #C9B492)'}`,
          background: 'var(--white-warm, #FFFDFA)',
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--text-sm)',
          color: 'var(--text-strong, #2E2A2B)',
          outline: 'none',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '13px 24px',
          borderRadius: 'var(--radius-pill, 9999px)',
          background: 'var(--action-primary, #6E2A36)',
          color: 'var(--white-warm, #FFFDFA)',
          border: 'none',
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(0.72rem, 0.7rem + 0.18vw, 0.86rem)',
          fontWeight: 600,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          cursor: 'pointer',
        }}
      >
        {ctaLabel}
      </button>
      {state === 'error' && (
        <p
          id="email-error"
          role="alert"
          style={{
            width: '100%',
            fontSize: 'var(--text-xs)',
            color: 'var(--wine-600, #6E2A36)',
            margin: 0,
            textAlign: 'center',
          }}
        >
          Digite um e-mail válido.
        </p>
      )}
    </form>
  )
}
