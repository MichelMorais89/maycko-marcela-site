'use client'

import { MagneticButton } from '@/components/motion/MagneticButton'
import { ShimmerCTA } from '@/components/motion/ShimmerCTA'

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 16px',
  borderRadius: 'var(--radius-md)',
  border: '1px solid rgba(184,140,72,0.20)',
  background: 'rgba(255,255,255,0.035)',
  color: 'var(--white-warm)',
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--text-md)',
  outline: 'none',
  boxSizing: 'border-box',
}

export function FormAplicacao() {
  return (
    <form
      action="#"
      onSubmit={(e) => e.preventDefault()}
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 'var(--space-4)' }}>
        <div>
          <label className="elv-sans" style={{ display: 'block', fontSize: 'var(--text-xs)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-400)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
            Nome dele
          </label>
          <input type="text" name="nome-dele" placeholder="Nome completo" style={inputStyle} />
        </div>
        <div>
          <label className="elv-sans" style={{ display: 'block', fontSize: 'var(--text-xs)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-400)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
            Nome dela
          </label>
          <input type="text" name="nome-dela" placeholder="Nome completo" style={inputStyle} />
        </div>
      </div>

      <div>
        <label className="elv-sans" style={{ display: 'block', fontSize: 'var(--text-xs)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-400)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
          E-mail do casal
        </label>
        <input type="email" name="email" placeholder="email@exemplo.com" style={inputStyle} />
      </div>

      <div>
        <label className="elv-sans" style={{ display: 'block', fontSize: 'var(--text-xs)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-400)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
          Telefone / WhatsApp
        </label>
        <input type="tel" name="telefone" placeholder="+55 (11) 99999-9999" style={inputStyle} />
      </div>

      <div>
        <label className="elv-sans" style={{ display: 'block', fontSize: 'var(--text-xs)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-400)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
          Por que agora?
        </label>
        <textarea
          name="por-que-agora"
          rows={5}
          placeholder="Compartilhe o momento do casal e o que buscam na mentoria..."
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 'var(--leading-relaxed)' }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-3)' }}>
        <MagneticButton>
          <ShimmerCTA href="#" style={{ padding: '17px 44px', fontSize: 'var(--text-sm)' }}>
            Enviar aplicação
          </ShimmerCTA>
        </MagneticButton>
        <p className="elv-sans" style={{ fontSize: 'var(--text-2xs)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,248,235,0.28)' }}>
          Respondemos em até 48h úteis
        </p>
      </div>
    </form>
  )
}
