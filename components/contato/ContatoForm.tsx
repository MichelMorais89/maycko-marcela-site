'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'

const schema = z.object({
  nome: z.string().min(2, 'Nome muito curto'),
  email: z.string().email('E-mail inválido'),
  telefone: z.string().min(10, 'Telefone inválido').max(15, 'Telefone inválido'),
  assunto: z.enum(['aplicacao', 'duvida', 'imprensa', 'parceria'] as const, {
    error: 'Selecione um assunto',
  }),
  mensagem: z.string().min(20, 'Mensagem muito curta — escreva pelo menos 20 caracteres'),
})

type FormData = z.infer<typeof schema>

const ASSUNTOS = [
  { value: 'aplicacao', label: 'Aplicação para a mentoria' },
  { value: 'duvida', label: 'Dúvida sobre o programa' },
  { value: 'imprensa', label: 'Imprensa' },
  { value: 'parceria', label: 'Parceria' },
]

const fieldStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 16px',
  borderRadius: 'var(--radius-md)',
  border: '1px solid var(--border-hairline)',
  background: 'color-mix(in srgb, var(--white-warm) 60%, transparent)',
  fontFamily: 'var(--font-sans)',
  fontSize: 'clamp(0.9rem, 1vw, 1rem)',
  color: 'var(--text-strong)',
  outline: 'none',
  transition: 'border-color 200ms var(--ease-standard)',
  boxSizing: 'border-box',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-sans)',
  fontSize: 'clamp(0.75rem, 0.75rem + 0.1vw, 0.85rem)',
  fontWeight: 600,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--text-strong)',
  marginBottom: 'var(--space-2)',
}

const errorStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.8rem',
  color: 'var(--wine-600)',
  marginTop: 'var(--space-2)',
}

export function ContatoForm() {
  const [sent, setSent] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormData) {
    await new Promise((r) => setTimeout(r, 800))
    console.log('Contato form:', data)
    setSent(true)
    reset()
  }

  if (sent) {
    return (
      <div
        style={{
          padding: 'var(--space-10) var(--space-8)',
          background: 'color-mix(in srgb, var(--gold-100, #fdf6e3) 60%, var(--white-warm))',
          border: '1px solid var(--gold-300, #d4a853)',
          borderRadius: 'var(--radius-lg)',
          textAlign: 'center',
        }}
      >
        <p
          className="elv-serif"
          style={{
            fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
            color: 'var(--wine-700)',
            fontStyle: 'italic',
            margin: 0,
            marginBottom: 'var(--space-4)',
          }}
        >
          Mensagem recebida.
        </p>
        <p
          className="elv-sans"
          style={{
            fontSize: 'clamp(0.9rem, 1vw, 1rem)',
            color: 'var(--text-body)',
            margin: 0,
          }}
        >
          Em breve nossa equipe entrará em contato com você.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}
    >
      {/* Nome */}
      <div>
        <label htmlFor="nome" style={labelStyle}>Nome</label>
        <input
          id="nome"
          type="text"
          autoComplete="name"
          placeholder="Seu nome completo"
          style={{
            ...fieldStyle,
            borderColor: errors.nome ? 'var(--wine-500)' : 'var(--border-hairline)',
          }}
          {...register('nome')}
        />
        {errors.nome && <span role="alert" style={errorStyle}>{errors.nome.message}</span>}
      </div>

      {/* Email + Telefone — lado a lado em desktop */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: 'var(--space-5)',
        }}
      >
        <div>
          <label htmlFor="email" style={labelStyle}>E-mail</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="seu@email.com"
            style={{
              ...fieldStyle,
              borderColor: errors.email ? 'var(--wine-500)' : 'var(--border-hairline)',
            }}
            {...register('email')}
          />
          {errors.email && <span role="alert" style={errorStyle}>{errors.email.message}</span>}
        </div>

        <div>
          <label htmlFor="telefone" style={labelStyle}>Telefone</label>
          <input
            id="telefone"
            type="tel"
            autoComplete="tel"
            placeholder="(61) 9 9999-9999"
            style={{
              ...fieldStyle,
              borderColor: errors.telefone ? 'var(--wine-500)' : 'var(--border-hairline)',
            }}
            {...register('telefone')}
          />
          {errors.telefone && <span role="alert" style={errorStyle}>{errors.telefone.message}</span>}
        </div>
      </div>

      {/* Assunto */}
      <div>
        <label htmlFor="assunto" style={labelStyle}>Assunto</label>
        <select
          id="assunto"
          style={{
            ...fieldStyle,
            borderColor: errors.assunto ? 'var(--wine-500)' : 'var(--border-hairline)',
            cursor: 'pointer',
            appearance: 'none',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%238a6a2c' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 14px center',
            paddingRight: 40,
          }}
          defaultValue=""
          {...register('assunto')}
        >
          <option value="" disabled>Selecione um assunto</option>
          {ASSUNTOS.map((a) => (
            <option key={a.value} value={a.value}>{a.label}</option>
          ))}
        </select>
        {errors.assunto && <span role="alert" style={errorStyle}>{errors.assunto.message}</span>}
      </div>

      {/* Mensagem */}
      <div>
        <label htmlFor="mensagem" style={labelStyle}>Mensagem</label>
        <textarea
          id="mensagem"
          rows={5}
          placeholder="Escreva sua mensagem..."
          style={{
            ...fieldStyle,
            borderColor: errors.mensagem ? 'var(--wine-500)' : 'var(--border-hairline)',
            resize: 'vertical',
            minHeight: 120,
          }}
          {...register('mensagem')}
        />
        {errors.mensagem && <span role="alert" style={errorStyle}>{errors.mensagem.message}</span>}
      </div>

      {/* Submit */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="shimmer-cta elv-cta-glow"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '15px 36px',
            borderRadius: 'var(--radius-pill)',
            background: isSubmitting
              ? 'color-mix(in srgb, var(--wine-600) 70%, transparent)'
              : 'var(--wine-600)',
            color: 'var(--white-warm)',
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--weight-semibold)',
            letterSpacing: 'var(--tracking-wider)',
            textTransform: 'uppercase',
            border: 'none',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            position: 'relative',
            overflow: 'hidden',
            transition: 'background 200ms var(--ease-standard)',
            minWidth: 200,
          }}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
        </button>
      </div>
    </form>
  )
}
