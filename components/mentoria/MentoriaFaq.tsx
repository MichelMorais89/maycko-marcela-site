'use client'

import { useState } from 'react'

const FAQ_ITEMS = [
  {
    q: 'Para quem é a mentoria ELEVEM-SE?',
    a: 'Para casais que já conquistaram resultados expressivos na vida profissional, mas percebem que o casamento ficou para segundo plano. Para quem quer construir, não consertar. Para casais que desejam sair do senso comum, sair do automático. Que desejam construir um casamento, uma família com intenção, pautados em valores e objetivos claros. Para casais que performam muito bem no profissional mas deixaram de lado seu bem mais precioso, seu maior patrimônio. Sua família!',
  },
  {
    q: 'Qual a duração do programa?',
    a: 'Duração são de 12 meses. Os encontros online ocorreram nos primeiros 6 meses de mentoria, chamamos esse período de ativo, é quando todo o conhecimento é transmitido. Os próximos 6 meses é o chamado período passivo, onde o mentorado pode nos contactar diretamente via whatsapp, sempre quando precisar, para dúvidas e orientações. Essa fase é a consolidação de todo conhecimento adquirido.',
  },
  {
    q: 'Como funciona o processo seletivo?',
    a: 'Após preencher o formulário de aplicação, passamos por uma conversa de alinhamento para entender o momento do casal. Aceitamos no máximo 12 casais por ciclo para garantir atenção real.',
  },
  {
    q: 'É necessário os dois participarem juntos?',
    a: 'Não é necessário. É claro que o ideal seria a participação do casal, mas se apenas um dos cônjuges entrar já vai haver uma melhora bem significativa. Lembrando que mesmo se o casal participar juntos, todos os encontros são individuais.',
  },
  {
    q: 'Tem garantia?',
    a: 'Sim. Oferecemos 7 dias de garantia incondicional desde o início do programa. Se por qualquer razão você sentir que não é o momento certo, devolvemos o investimento integral.',
  },
  {
    q: 'Como ocorrerão os encontros?',
    a: 'Os encontros são 100% online e sempre individual. Mulheres são mentoradas pela Marcela e os homens são mentorados pelo Maycko. Todo assunto tratado nos encontros é confidencial e sigiloso, isso acontece para que cada cônjuge tenha liberdade de falar a sua visão sobre o outro e sobre o relacionamento, sem ser mal interpretado pelo parceiro.',
  },
  {
    q: 'Qual o investimento?',
    a: 'O investimento é apresentado durante a conversa de alinhamento, após o formulário. Trabalhamos com condições personalizadas conforme o ciclo e o plano selecionado.',
  },
  {
    q: 'Em quanto tempo vemos resultados?',
    a: 'Os primeiros resultados já podem ser sentido logo no inicio. Mas isso vai depender do empenho do participante. Em cada encontro, o mentorado receberá muita informação valiosa, mas caberá a ele colocar em pratica.',
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
