'use client'

import { useState } from 'react'

const FAQ_ITEMS = [
  {
    q: 'Para quem é a mentoria ELEVEM-SE?',
    a: 'Para casais que já conquistaram resultados expressivos na vida profissional e financeira, mas percebem que o casamento ficou para segundo plano. A mentoria é para quem quer construir, não consertar.',
  },
  {
    q: 'Qual a duração do programa?',
    a: '12 meses. Cada fase tem duração e ritmo próprios: Elevação Individual, Construção do Nós e Legado em Casal se desenvolvem em ciclos progressivos.',
  },
  {
    q: 'Como funciona o processo seletivo?',
    a: 'Após preencher o formulário de aplicação, passamos por uma conversa de alinhamento para entender o momento do casal. Aceitamos no máximo 12 casais por ciclo para garantir atenção real.',
  },
  {
    q: 'É necessário os dois participarem juntos?',
    a: 'Sim. A mentoria é fundamentalmente um programa para o casal. A presença e o comprometimento de ambos é requisito básico.',
  },
  {
    q: 'Tem garantia?',
    a: 'Sim. Oferecemos 7 dias de garantia incondicional desde o início do programa. Se por qualquer razão você sentir que não é o momento certo, devolvemos o investimento integral.',
  },
  {
    q: 'Os encontros são presenciais ou online?',
    a: 'Os encontros em grupo são online ao vivo. Dependendo do plano escolhido, há opção de sessões presenciais em Brasília.',
  },
  {
    q: 'Qual o investimento?',
    a: 'O investimento é apresentado durante a conversa de alinhamento, após o formulário. Trabalhamos com condições personalizadas conforme o ciclo e o plano selecionado.',
  },
  {
    q: 'Em quanto tempo vemos resultados?',
    a: 'Os primeiros deslocamentos costumam aparecer nas primeiras semanas, especialmente em comunicação e perspectiva. Os resultados estruturais se consolidam ao longo dos 12 meses.',
  },
]

export function MentoriaFaq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div style={{ borderTop: '1px solid rgba(46,42,43,0.10)' }}>
      {FAQ_ITEMS.map((item, i) => (
        <div
          key={i}
          style={{ borderBottom: '1px solid rgba(46,42,43,0.10)' }}
        >
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="w-full text-left flex justify-between items-center gap-3 py-3"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <span
              className="font-medium"
              style={{ color: 'var(--text-strong, #2E2A2B)', fontSize: '0.95rem' }}
            >
              {item.q}
            </span>
            <span
              className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-sm transition-transform duration-200"
              style={{
                border: '1px solid rgba(115,84,34,0.4)',
                color: 'var(--text-gold, #735422)',
                transform: open === i ? 'rotate(45deg)' : 'none',
              }}
              aria-hidden="true"
            >
              +
            </span>
          </button>
          {open === i && (
            <p
              className="pb-3 leading-snug"
              style={{ color: 'var(--text-muted, #716A6B)', fontSize: '0.88rem', marginTop: '-2px' }}
            >
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}
