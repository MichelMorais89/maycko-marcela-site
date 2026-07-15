'use client'

import { useRef, useEffect, useState } from 'react'
import { Ornament } from '@/components/shared/Ornament'
import { Reveal } from '@/components/shared/Reveal'
import { SplitText } from '@/components/motion/SplitText'

type Mes = {
  n: string
  titulo: string
  lead: string
  exercicios: string[]
  quote: string
}

const FASE1: Mes[] = [
  {
    n: '01',
    titulo: 'Mentalidade',
    lead: 'Os padrões subconscientes que moldam suas reações, e como reescrever os que estão te limitando.',
    exercicios: ['Mapeamento de crenças herdadas', 'Diário de padrões reativos', 'Reprogramação de narrativas internas', 'Prática de presença intencional'],
    quote: 'O casamento que vocês têm é reflexo direto de quem cada um escolheu ser.',
  },
  {
    n: '02',
    titulo: 'Inteligência Emocional',
    lead: 'Reconhecer, nomear e administrar emoções, a habilidade que mais falta em casamentos que parecem ter tudo.',
    exercicios: ['Vocabulário emocional ampliado', 'Escuta sem defesa', 'Regulação antes de responder', 'Registro de ciclos emocionais'],
    quote: 'Quem aprende a nomear o que sente, para de deixar que as emoções falem por ele.',
  },
  {
    n: '03',
    titulo: 'Saúde e Energia',
    lead: 'O corpo como base do casamento. Sem energia, não há presença. Sem presença, não há conexão real.',
    exercicios: ['Diagnóstico de ritmo e sono', 'Movimento como cuidado conjunto', 'Nutrição e clareza mental', 'Rituais de energia partilhados'],
    quote: 'Casamento saudável começa em corpos e mentes que estão em ordem.',
  },
  {
    n: '04',
    titulo: 'Organização',
    lead: 'Rotina, tempo e dinheiro pessoal alinhados. A desordem individual contamina tudo o que é construído a dois.',
    exercicios: ['Mapa de tempo semanal', 'Financeiro pessoal estruturado', 'Prioridades declaradas', 'Agenda individual x agenda do casal'],
    quote: 'Você não pode construir algo grande com quem não consegue organizar o próprio espaço.',
  },
  {
    n: '05',
    titulo: 'Ressignificação',
    lead: 'As crenças herdadas sobre casamento, e a decisão consciente de manter as que elevam e soltar as que limitam.',
    exercicios: ['Genograma relacional', 'Contratos invisíveis identificados', 'Escolhas conscientes em casal', 'Novos modelos de referência'],
    quote: 'Você carrega modelos de casamento que não escolheu. Chegou a hora de escolher os seus.',
  },
  {
    n: '06',
    titulo: 'Identidade e Propósito',
    lead: 'Quem você é hoje, não quem você era quando se casou. Identidade clara é pré-requisito para parceria real.',
    exercicios: ['Declaração de identidade atualizada', 'Propósito individual articulado', 'Valores pessoais revisitados', 'Visão de si mesmo no futuro'],
    quote: 'Dois propósitos individuais claros formam um propósito de casal inabalável.',
  },
]

const FASE2: Mes[] = [
  {
    n: '07',
    titulo: 'Comunicação Madura',
    lead: 'Falar sem ferir. Ouvir sem se defender. A habilidade que transforma conflito em construção.',
    exercicios: ['Comunicação não-violenta aplicada', 'Conversas difíceis com estrutura', 'Escuta ativa em prática', 'Acordos de comunicação'],
    quote: 'A maioria dos problemas do casal não é o problema, é a forma como tentam resolvê-lo.',
  },
  {
    n: '08',
    titulo: 'Admiração',
    lead: 'Enxergar o outro de novo. Reconstruir o olhar que se perde quando a rotina domina tudo.',
    exercicios: ['Mapa de forças do parceiro', 'Ritual de gratidão intencional', 'Expressão de admiração verbal', 'Redescoberta de qualidades invisibilizadas'],
    quote: 'Não é que vocês pararam de se admirar. É que pararam de olhar.',
  },
  {
    n: '09',
    titulo: 'Alinhamento Financeiro',
    lead: 'Decisões de dinheiro em unidade. O tema que mais divide casais, e o que mais une quando dominado.',
    exercicios: ['Diagnóstico financeiro do casal', 'Metas financeiras compartilhadas', 'Modelo de decisão conjunta', 'Projeto patrimonial de longo prazo'],
    quote: 'Dinheiro não é um problema de número. É um problema de acordo.',
  },
  {
    n: '10',
    titulo: 'Intimidade',
    lead: 'Física, emocional, espiritual. A intimidade real vai muito além do óbvio, e exige os três níveis.',
    exercicios: ['Mapa de necessidades de intimidade', 'Presença emocional profunda', 'Rituais de conexão diária', 'Espaço sagrado do casal'],
    quote: 'Intimidade real é ser completamente visto, e escolhido assim mesmo.',
  },
  {
    n: '11',
    titulo: 'Parceria',
    lead: 'Projetos em conjunto. Quando o casal aprende a construir junto, negócios, família, vida, tudo se multiplica.',
    exercicios: ['Mapa de projetos em casal', 'Divisão consciente de papéis', 'Tomada de decisão conjunta', 'Celebração de conquistas partilhadas'],
    quote: 'Parceiros de vida constroem juntos, não dividem o peso: multiplicam a força.',
  },
  {
    n: '12',
    titulo: 'Decisões em Unidade',
    lead: 'Visão de futuro compartilhada. O mês em que tudo o que foi construído se transforma em legado com direção.',
    exercicios: ['Visão de casal para 10 anos', 'Manifesto de família', 'Acordos de longo prazo', 'Rituais de renovação de compromisso'],
    quote: 'Um casal com visão compartilhada não tem concorrente, tem missão.',
  },
]

function MesCard({ mes, isVisible }: { mes: Mes; isVisible: boolean }) {
  const [isHovered, setIsHovered] = useState(false)
  const active = isVisible || isHovered
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: 'clamp(28px, 3.5vw, 48px)',
        background: active
          ? 'linear-gradient(155deg, rgba(38,26,32,0.92) 0%, rgba(22,14,18,0.98) 60%, rgba(12,7,10,1) 100%)'
          : 'linear-gradient(155deg, rgba(14,8,12,0.75) 0%, rgba(8,4,8,0.90) 100%)',
        borderRadius: 'var(--radius-lg)',
        border: `1px solid ${active ? 'rgba(184,140,72,0.45)' : 'rgba(184,140,72,0.08)'}`,
        boxShadow: active
          ? '0 1px 0 rgba(255,220,150,0.14) inset, 0 20px 50px rgba(0,0,0,0.55), 0 0 40px rgba(184,140,72,0.08)'
          : '0 4px 16px rgba(0,0,0,0.3)',
        transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1)',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      {/* Highlight top */}
      {isVisible && (
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 'clamp(32px, 4vw, 56px)',
            right: 'clamp(32px, 4vw, 56px)',
            height: 1,
            background: 'linear-gradient(to right, transparent 0%, var(--gold-500) 50%, transparent 100%)',
            opacity: 0.55,
          }}
        />
      )}

      {/* Lead */}
      <p
        className="elv-sans"
        style={{
          fontSize: 'clamp(0.98rem, 1.3vw, 1.12rem)',
          lineHeight: 'var(--leading-relaxed)',
          color:  active ? 'rgba(255,248,235,0.82)' : 'rgba(255,248,235,0.40)',
          margin: '0 0 var(--space-6)',
          transition: 'color 0.5s ease',
        }}
      >
        {mes.lead}
      </p>

      {/* Exercícios */}
      <ul
        style={{
          listStyle: 'none',
          margin: '0 0 var(--space-6)',
          padding: 0,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
          gap: 'var(--space-3)',
        }}
      >
        {mes.exercicios.map((ex, i) => (
          <li
            key={i}
            className="elv-sans"
            style={{
              display: 'flex',
              gap: 'var(--space-2)',
              alignItems: 'flex-start',
              fontSize: 'clamp(0.88rem, 1.1vw, 0.98rem)',
              color:  active ? 'rgba(255,248,235,0.75)' : 'rgba(255,248,235,0.30)',
              transition: 'color 0.5s ease',
            }}
          >
            <span style={{ color: 'var(--gold-400)', fontSize: '0.6em', marginTop: '0.45em', flexShrink: 0, opacity:  active ? 1 : 0.4 }}>◆</span>
            <span>{ex}</span>
          </li>
        ))}
      </ul>

      {/* Quote, border-left dourado + texto sólido */}
      <div
        style={{
          marginTop: 'var(--space-6)',
          paddingLeft: 'var(--space-5)',
          borderLeft: `2px solid ${ active ? 'var(--gold-500)' : 'rgba(184,140,72,0.35)'}`,
          transition: 'border-color 0.5s ease',
        }}
      >
        <p
          className="elv-serif"
          style={{
            fontStyle: 'italic',
            fontSize: 'clamp(0.98rem, 1.35vw, 1.15rem)',
            color:  active ? 'var(--gold-300)' : 'rgba(184,140,72,0.55)',
            margin: 0,
            lineHeight: 1.45,
            transition: 'color 0.5s ease',
          }}
        >
          &ldquo;{mes.quote}&rdquo;
        </p>
      </div>
    </div>
  )
}

function TimelineFase({
  fase,
  meses,
  startIndex,
}: {
  fase: string
  meses: Mes[]
  startIndex: number
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const lineRef = useRef<SVGLineElement>(null)
  const [lineProgress, setLineProgress] = useState(0)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const handleScroll = () => {
      const right = rightRef.current
      if (!right) return

      // Update active month based on which item is most visible
      let bestIdx = 0
      let bestVisibility = -Infinity
      itemRefs.current.forEach((el, i) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        const viewportMid = window.innerHeight * 0.45
        const itemMid = rect.top + rect.height / 2
        const dist = Math.abs(itemMid - viewportMid)
        const visibility = -dist
        if (visibility > bestVisibility) {
          bestVisibility = visibility
          bestIdx = i
        }
      })
      setActiveIndex(bestIdx)

      // Line progress
      const rightRect = right.getBoundingClientRect()
      const total = rightRect.height
      const scrolled = Math.max(0, -rightRect.top + window.innerHeight * 0.4)
      const progress = Math.min(1, Math.max(0, scrolled / total))
      if (!prefersReduced) setLineProgress(progress)
      else setLineProgress(1)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div style={{ position: 'relative' }}>
      {/* Fase label */}
      <Reveal>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-4)',
            marginBottom: 'var(--space-10)',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: 6,
              height: 6,
              background: 'var(--gold-400)',
              borderRadius: '50%',
              flexShrink: 0,
            }}
          />
          <p
            className="elv-sans"
            style={{
              fontSize: 'clamp(0.72rem, 0.68rem + 0.2vw, 0.85rem)',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--gold-400)',
              fontWeight: 700,
              margin: 0,
            }}
          >
            {fase}
          </p>
          <span
            aria-hidden="true"
            style={{
              flex: 1,
              height: 1,
              background: 'linear-gradient(to right, rgba(184,140,72,0.35) 0%, transparent 100%)',
            }}
          />
        </div>
      </Reveal>

      {/* Two-column layout */}
      <div
        className="timeline-layout mobile-timeline"
        style={{
          display: 'grid',
          gridTemplateColumns: 'clamp(120px, 16vw, 200px) 1fr',
          gap: 'clamp(24px, 5vw, 80px)',
          alignItems: 'start',
          position: 'relative',
        }}
      >
        {/* Left, sticky numero + titulo */}
        <div
          style={{
            position: 'sticky',
            top: 'clamp(100px, 15vh, 140px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 'var(--space-4)',
          }}
        >
          {/* Numero gigante */}
          <div
            className="elv-serif"
            style={{
              fontSize: 'clamp(5rem, 10vw, 9rem)',
              lineHeight: 0.85,
              fontStyle: 'italic',
              fontWeight: 'var(--weight-light)',
              background:
                'linear-gradient(135deg, var(--gold-300) 0%, var(--gold-500) 50%, var(--gold-700, #6a4d1e) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 4px 12px rgba(184,140,72,0.18))',
              transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            {String(startIndex + activeIndex + 1).padStart(2, '0')}
          </div>

          {/* Linha dourada */}
          <span
            aria-hidden="true"
            style={{
              width: 44,
              height: 1,
              background: 'linear-gradient(to right, var(--gold-500) 0%, rgba(184,140,72,0) 100%)',
            }}
          />

          {/* Título do mês ativo */}
          <p
            className="elv-serif"
            style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.3rem)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--gold-300)',
              fontWeight: 'var(--weight-medium)',
              margin: 0,
              lineHeight: 1.2,
              transition: 'all 0.35s ease',
            }}
          >
            {meses[activeIndex].titulo}
          </p>

          {/* SVG golden line */}
          <div
            style={{
              position: 'relative',
              width: 2,
              marginTop: 'var(--space-4)',
              height: 120,
              overflow: 'hidden',
            }}
          >
            <svg
              width="2"
              height="120"
              viewBox="0 0 2 120"
              style={{ display: 'block' }}
              aria-hidden="true"
            >
              <line
                ref={lineRef}
                x1="1"
                y1="0"
                x2="1"
                y2="120"
                stroke="url(#lineGradFase)"
                strokeWidth="1.5"
                strokeDasharray="120"
                strokeDashoffset={120 - lineProgress * 120}
                style={{ transition: 'stroke-dashoffset 0.1s linear' }}
              />
              <defs>
                <linearGradient id="lineGradFase" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--gold-400)" />
                  <stop offset="100%" stopColor="rgba(184,140,72,0.1)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Right, scroll items */}
        <div
          ref={rightRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(24px, 3vw, 40px)',
          }}
        >
          {meses.map((mes, i) => (
            <div
              key={mes.n}
              ref={(el) => { itemRefs.current[i] = el }}
            >
              <MesCard mes={mes} isVisible={i === activeIndex} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function TimelineMetodo() {
  return (
    <section
      id="timeline"
      className="elv-sec"
      style={{
        background: 'var(--ink-900, #0a0709)',
        color: 'var(--white-warm)',
        paddingBlock: 'clamp(90px, 12vw, 150px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Aurora sutil */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 60% 40% at 15% 10%, rgba(184,140,72,0.08) 0%, transparent 60%), radial-gradient(ellipse 55% 45% at 88% 92%, rgba(122,28,46,0.12) 0%, transparent 58%)',
          pointerEvents: 'none',
        }}
      />

      <div className="elv-wrap" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section header */}
        <Reveal className="elv-center" style={{ marginBottom: 'clamp(64px, 10vw, 120px)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-5)' }}>
            <Ornament variant="rule" ruleWidth={44} tone="gold" style={{ opacity: 0.65 }} />
            <p
              className="elv-sans"
              style={{
                fontSize: 'clamp(0.75rem, 0.7rem + 0.2vw, 0.9rem)',
                letterSpacing: '0.26em',
                textTransform: 'uppercase',
                color: 'var(--gold-400)',
                fontWeight: 600,
                margin: 0,
              }}
            >
              O Método Completo
            </p>
            <Ornament variant="rule" ruleWidth={44} tone="gold" style={{ opacity: 0.65 }} />
          </div>
          <h2
            className="elv-serif"
            style={{
              fontSize: 'clamp(1.9rem, 3.6vw, 3.2rem)',
              color: 'var(--white-warm)',
              lineHeight: 1.12,
              textTransform: 'uppercase',
              letterSpacing: '0.008em',
              fontWeight: 'var(--weight-medium)',
              textWrap: 'balance',
              margin: '0 auto',
              maxWidth: '22ch',
            }}
          >
            <SplitText>Doze meses.</SplitText>{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold-400)', fontWeight: 'var(--weight-regular)' }}>
              <SplitText delay={400}>Duas fases. Uma transformação.</SplitText>
            </em>
          </h2>
          <p
            className="elv-sans"
            style={{
              marginTop: 'var(--space-6)',
              fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
              color: 'rgba(255,248,235,0.65)',
              maxWidth: '50ch',
              marginInline: 'auto',
              lineHeight: 'var(--leading-relaxed)',
            }}
          >
            Cada mês tem um tema, exercícios práticos e um princípio que guia o trabalho.
            Role para percorrer o caminho.
          </p>
        </Reveal>

        {/* Fase 1 */}
        <TimelineFase
          fase="Primeira Fase, Elevação Individual"
          meses={FASE1}
          startIndex={0}
        />

        {/* Divisor entre fases */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-5)',
            margin: 'clamp(60px, 10vw, 120px) 0',
          }}
        >
          <span style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, rgba(184,140,72,0.35))' }} />
          <Ornament variant="rule-diamond-rule" tone="gold" ruleWidth={32} style={{ opacity: 0.7 }} />
          <span style={{ flex: 1, height: 1, background: 'linear-gradient(to left, transparent, rgba(184,140,72,0.35))' }} />
        </div>

        {/* Fase 2 */}
        <TimelineFase
          fase="Segunda Fase, Construção do Nós"
          meses={FASE2}
          startIndex={6}
        />
      </div>

      <style>{`
        @media (max-width: 640px) {
          .timeline-layout {
            grid-template-columns: 1fr !important;
          }
          .timeline-layout > div:first-child {
            position: static !important;
            flex-direction: row !important;
            align-items: center !important;
            gap: var(--space-4) !important;
            margin-bottom: var(--space-6) !important;
          }
        }
      `}</style>
    </section>
  )
}
