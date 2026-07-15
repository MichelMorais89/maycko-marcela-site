'use client'

import { useState } from 'react'

type State = 'idle' | 'loading' | 'success' | 'error'

export function MentoriaFormAplicacao() {
  const [state, setState] = useState<State>('idle')
  const [fields, setFields] = useState({
    nomeCasal: '',
    email: '',
    whatsapp: '',
    tempoCasamento: '',
    motivacao: '',
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState('loading')
    try {
      const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT
      if (endpoint) {
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...fields, form: 'mentoria-aplicacao' }),
        })
      }
      setState('success')
    } catch {
      setState('error')
    }
  }

  const inputClass =
    'w-full px-4 py-3 text-base border rounded-sm outline-none transition-colors duration-150 focus:border-amber-700'

  const inputStyle: React.CSSProperties = {
    background: '#fff',
    borderColor: 'rgba(46,42,43,0.15)',
    color: 'var(--text-strong, #2E2A2B)',
    fontFamily: 'inherit',
  }

  if (state === 'success') {
    return (
      <div className="text-center py-12">
        <p
          className="font-serif text-3xl mb-4"
          style={{ color: 'var(--text-strong, #2E2A2B)' }}
        >
          Aplicação recebida.
        </p>
        <p style={{ color: 'var(--text-muted, #716A6B)' }}>
          Em breve entraremos em contato para a conversa de alinhamento.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="nomeCasal"
            className="block text-xs tracking-[0.2em] uppercase mb-2"
            style={{ color: 'var(--text-gold, #735422)' }}
          >
            Nome do casal
          </label>
          <input
            id="nomeCasal"
            name="nomeCasal"
            type="text"
            required
            value={fields.nomeCasal}
            onChange={handleChange}
            className={inputClass}
            style={inputStyle}
            placeholder="Ex: Ana e Pedro"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs tracking-[0.2em] uppercase mb-2"
            style={{ color: 'var(--text-gold, #735422)' }}
          >
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={fields.email}
            onChange={handleChange}
            className={inputClass}
            style={inputStyle}
            placeholder="casal@email.com"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="whatsapp"
            className="block text-xs tracking-[0.2em] uppercase mb-2"
            style={{ color: 'var(--text-gold, #735422)' }}
          >
            WhatsApp
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            required
            value={fields.whatsapp}
            onChange={handleChange}
            className={inputClass}
            style={inputStyle}
            placeholder="(61) 9 9999-9999"
          />
        </div>
        <div>
          <label
            htmlFor="tempoCasamento"
            className="block text-xs tracking-[0.2em] uppercase mb-2"
            style={{ color: 'var(--text-gold, #735422)' }}
          >
            Tempo de casamento
          </label>
          <select
            id="tempoCasamento"
            name="tempoCasamento"
            required
            value={fields.tempoCasamento}
            onChange={handleChange}
            className={inputClass}
            style={inputStyle}
          >
            <option value="">Selecione</option>
            <option value="menos-2">Menos de 2 anos</option>
            <option value="2-5">2 a 5 anos</option>
            <option value="5-10">5 a 10 anos</option>
            <option value="10-20">10 a 20 anos</option>
            <option value="mais-20">Mais de 20 anos</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="motivacao"
          className="block text-xs tracking-[0.2em] uppercase mb-2"
          style={{ color: 'var(--text-gold, #735422)' }}
        >
          O que motivou vocês a aplicarem?
        </label>
        <textarea
          id="motivacao"
          name="motivacao"
          required
          rows={5}
          value={fields.motivacao}
          onChange={handleChange}
          className={inputClass}
          style={{ ...inputStyle, resize: 'vertical' }}
          placeholder="Contem um pouco do momento do casal..."
        />
      </div>

      {state === 'error' && (
        <p
          role="alert"
          className="text-sm"
          style={{ color: 'var(--wine-600, #6E2A36)' }}
        >
          Ocorreu um erro. Tente novamente ou entre em contato pelo WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'loading'}
        className="mentoria-submit-btn px-10 py-4 text-sm tracking-[0.2em] uppercase font-medium transition-colors duration-200 disabled:opacity-60"
      >
        {state === 'loading' ? 'ENVIANDO...' : 'ENVIAR APLICAÇÃO'}
      </button>
      <style>{`
        .mentoria-submit-btn {
          background: var(--wine-600, #6E2A36);
          color: #F5F0E8;
        }
        .mentoria-submit-btn:hover:not(:disabled) {
          background: var(--wine-700, #5A1F28);
        }
      `}</style>
    </form>
  )
}
