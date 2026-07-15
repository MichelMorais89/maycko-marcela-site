import type { Metadata } from 'next'
import Image from 'next/image'
import { ContatoForm } from '@/components/contato/ContatoForm'

export const metadata: Metadata = {
  title: 'Contato, Maycko & Marcela | ELEVEM-SE',
  description:
    'Fale com a equipe ELEVEM-SE. Aplicação, imprensa, parceria ou dúvidas, respondemos pessoalmente.',
  openGraph: {
    title: 'Contato, ELEVEM-SE',
    description: 'Fale com a equipe ELEVEM-SE.',
    images: [{ url: '/photos/hero-couple.jpg', width: 1200, height: 630 }],
  },
}

const REDES = [
  { label: 'WhatsApp', short: '+55 17 99115-1006', href: 'https://wa.me/5517991151006', icon: 'WA' },
  { label: 'Instagram Marcela', short: '@marcelazanardo', href: 'https://www.instagram.com/marcelazanardo/', icon: 'IG' },
  { label: 'Instagram Maycko', short: '@maycko.alves', href: 'https://www.instagram.com/maycko.alves/', icon: 'IG' },
  { label: 'YouTube', short: '@mayko.alvess', href: 'https://www.youtube.com/@mayko.alvess', icon: 'YT' },
  { label: 'E-mail', short: 'contato@eleve-mse.com.br', href: 'mailto:contato@eleve-mse.com.br', icon: '@' },
]

export default function ContatoPage() {
  return (
    <>
      {/* Hero navy, título grande "Contato" */}
      <section
        style={{
          background: 'var(--surface-anchor, #16233A)',
          paddingTop: 'clamp(6rem, 12vw, 9rem)',
          paddingBottom: 'clamp(4rem, 8vw, 6rem)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 50% 40% at 15% 30%, rgba(194,161,77,0.1) 0%, transparent 60%), radial-gradient(ellipse 55% 45% at 85% 80%, rgba(110,42,54,0.15) 0%, transparent 60%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span aria-hidden="true" style={{ display: 'inline-block', width: 32, height: 1, background: 'var(--gold-500, #C2A14D)' }} />
            <p className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ color: 'var(--gold-400, #D2B673)' }}>
              VAMOS CONVERSAR
            </p>
          </div>
          <h1
            className="font-serif leading-[1.02] mb-4"
            style={{
              color: '#F5F0E8',
              fontSize: 'clamp(3rem, 8vw, 6.5rem)',
              letterSpacing: '-0.01em',
              fontWeight: 500,
              textShadow: '0 2px 20px rgba(0,0,0,0.3)',
            }}
          >
            Contato
          </h1>
          <p
            className="text-base lg:text-lg leading-relaxed max-w-xl"
            style={{ color: 'rgba(245,240,232,0.72)' }}
          >
            Aplicação para a mentoria, imprensa, parceria ou uma dúvida específica. Escreva pelo canal que preferir, respondemos pessoalmente.
          </p>
        </div>
      </section>

      {/* Split: formulário à esquerda + foto do casal à direita */}
      <section
        style={{
          background: 'var(--surface-bege, #EDE3CF)',
          paddingTop: 'clamp(3rem, 6vw, 5rem)',
          paddingBottom: 'clamp(3rem, 6vw, 5rem)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="contato-split-grid">
            {/* FORMULÁRIO */}
            <div className="contato-form-card">
              <div className="contato-form-header">
                <p className="contato-form-eyebrow">FORMULÁRIO DIRETO</p>
                <h2 className="font-serif contato-form-title">
                  Envie sua{' '}
                  <em style={{ fontStyle: 'italic', color: 'var(--wine-600, #6E2A36)' }}>
                    mensagem
                  </em>
                </h2>
                <p className="contato-form-sub">
                  Preencha abaixo e nossa equipe retorna em até 48 horas úteis.
                </p>
              </div>
              <ContatoForm />
            </div>

            {/* COLUNA DIREITA, foto do casal + redes sociais */}
            <div className="contato-side">
              <div className="contato-photo-wrap">
                <div className="contato-photo-frame">
                  <Image
                    src="/photos/hero-couple.jpg"
                    alt="Maycko e Marcela"
                    fill
                    sizes="(max-width: 900px) 90vw, 480px"
                    className="object-cover"
                    style={{ objectPosition: '50% 25%' }}
                    priority
                  />
                  <div className="contato-photo-veil" aria-hidden="true" />
                  <div className="contato-photo-badge">
                    <p className="contato-photo-badge-eye">A EQUIPE ELEVEM-SE</p>
                    <p className="contato-photo-badge-name">Maycko &amp; Marcela</p>
                  </div>
                </div>
                {/* ornamento embaixo */}
                <div className="contato-photo-orn" aria-hidden="true">
                  <span />
                  <span className="contato-photo-orn-dot" />
                  <span />
                </div>
              </div>

              {/* Redes sociais + contatos diretos */}
              <div className="contato-links-card">
                <p className="contato-links-eyebrow">CANAIS DIRETOS</p>
                <h3 className="font-serif contato-links-title">
                  Nos siga ou{' '}
                  <em style={{ fontStyle: 'italic', color: 'var(--wine-600, #6E2A36)' }}>
                    escreva direto
                  </em>
                </h3>
                <ul className="contato-links-list">
                  {REDES.map((rede) => (
                    <li key={rede.label}>
                      <a
                        href={rede.href}
                        target={rede.href.startsWith('http') ? '_blank' : undefined}
                        rel={rede.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="contato-link-item"
                      >
                        <span className="contato-link-icon" aria-hidden="true">{rede.icon}</span>
                        <span className="contato-link-body">
                          <span className="contato-link-label">{rede.label}</span>
                          <span className="contato-link-value">{rede.short}</span>
                        </span>
                        <span className="contato-link-arrow" aria-hidden="true">→</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .contato-split-grid {
            display: grid;
            grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
            gap: clamp(2rem, 4vw, 3.5rem);
            align-items: start;
          }
          @media (max-width: 900px) {
            .contato-split-grid { grid-template-columns: 1fr; }
          }

          /* CARD DO FORMULÁRIO */
          .contato-form-card {
            background: rgba(255,255,255,0.65);
            border: 1px solid rgba(194,161,77,0.28);
            border-radius: 16px;
            padding: clamp(1.75rem, 3vw, 2.5rem);
            box-shadow:
              0 22px 44px rgba(60,25,35,0.08),
              0 8px 18px rgba(60,25,35,0.04);
            backdrop-filter: blur(4px);
          }
          .contato-form-header { margin-bottom: 1.75rem; }
          .contato-form-eyebrow {
            font-size: 0.68rem;
            letter-spacing: 0.3em;
            text-transform: uppercase;
            font-weight: 700;
            color: var(--text-gold, #735422);
            margin: 0 0 0.5rem;
          }
          .contato-form-title {
            font-size: clamp(1.55rem, 2.8vw, 2.1rem);
            color: var(--text-strong, #2E2A2B);
            line-height: 1.15;
            font-weight: 500;
            margin: 0 0 0.6rem;
            letter-spacing: -0.005em;
          }
          .contato-form-sub {
            font-size: 0.95rem;
            color: var(--text-body, #4D4748);
            line-height: 1.5;
            margin: 0;
          }

          /* COLUNA DIREITA */
          .contato-side {
            display: flex;
            flex-direction: column;
            gap: 1.75rem;
            position: sticky;
            top: 96px;
          }
          @media (max-width: 900px) {
            .contato-side { position: static; }
          }

          /* FOTO */
          .contato-photo-wrap { position: relative; }
          .contato-photo-frame {
            position: relative;
            aspect-ratio: 4 / 5;
            border-radius: 14px;
            overflow: hidden;
            border: 1.5px solid rgba(194,161,77,0.45);
            box-shadow:
              0 24px 50px rgba(60,25,35,0.18),
              0 8px 20px rgba(60,25,35,0.1),
              inset 0 0 0 1px rgba(255,255,255,0.35);
            transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 500ms ease;
          }
          .contato-photo-frame:hover {
            transform: translateY(-4px);
            box-shadow:
              0 34px 66px rgba(60,25,35,0.24),
              0 12px 26px rgba(60,25,35,0.14),
              inset 0 0 0 1px rgba(255,255,255,0.5);
          }
          .contato-photo-veil {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(22,35,58,0.6) 0%, rgba(22,35,58,0.05) 45%, transparent 100%);
            pointer-events: none;
          }
          .contato-photo-badge {
            position: absolute;
            left: 20px;
            right: 20px;
            bottom: 20px;
            padding: 14px 18px;
            background: rgba(22,35,58,0.85);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(194,161,77,0.4);
            border-radius: 10px;
            color: #F5F0E8;
          }
          .contato-photo-badge-eye {
            font-size: 0.62rem;
            letter-spacing: 0.28em;
            text-transform: uppercase;
            color: var(--gold-400, #D2B673);
            font-weight: 600;
            margin: 0 0 4px;
          }
          .contato-photo-badge-name {
            font-family: var(--font-serif);
            font-style: italic;
            font-size: 1.2rem;
            margin: 0;
            line-height: 1.1;
          }
          .contato-photo-orn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            margin-top: 14px;
          }
          .contato-photo-orn span:not(.contato-photo-orn-dot) {
            display: inline-block;
            width: 30px;
            height: 1px;
            background: linear-gradient(to right, transparent, var(--gold-500, #C2A14D));
          }
          .contato-photo-orn span:last-child {
            background: linear-gradient(to left, transparent, var(--gold-500, #C2A14D));
          }
          .contato-photo-orn-dot {
            width: 6px;
            height: 6px;
            border: 1px solid var(--gold-500, #C2A14D);
            transform: rotate(45deg);
            opacity: 0.7;
          }

          /* CARD DE LINKS */
          .contato-links-card {
            background: rgba(255,255,255,0.55);
            border: 1px solid rgba(194,161,77,0.28);
            border-radius: 14px;
            padding: 1.5rem 1.5rem 1rem;
            box-shadow: 0 14px 30px rgba(60,25,35,0.06);
          }
          .contato-links-eyebrow {
            font-size: 0.66rem;
            letter-spacing: 0.3em;
            text-transform: uppercase;
            font-weight: 700;
            color: var(--text-gold, #735422);
            margin: 0 0 0.35rem;
          }
          .contato-links-title {
            font-size: clamp(1.15rem, 1.8vw, 1.35rem);
            color: var(--text-strong, #2E2A2B);
            line-height: 1.25;
            font-weight: 500;
            margin: 0 0 1rem;
          }
          .contato-links-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 0.35rem;
          }
          .contato-link-item {
            display: grid;
            grid-template-columns: auto 1fr auto;
            align-items: center;
            gap: 0.9rem;
            padding: 0.7rem 0.5rem;
            border-radius: 8px;
            text-decoration: none;
            color: inherit;
            transition: background 220ms ease, transform 220ms ease;
          }
          .contato-link-item:hover {
            background: rgba(194,161,77,0.12);
            transform: translateX(3px);
          }
          .contato-link-icon {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: radial-gradient(circle at 30% 25%, #E5C87A 0%, #C2A14D 55%, #8A6A2C 100%);
            color: #FFF5D9;
            font-family: var(--font-serif);
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.02em;
            box-shadow:
              inset 0 1.5px 0 rgba(255,240,200,0.55),
              inset 0 -2px 4px rgba(60,25,35,0.15),
              0 4px 10px rgba(194,161,77,0.35);
            transition: transform 260ms cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          .contato-link-item:hover .contato-link-icon {
            transform: scale(1.1) rotateZ(-5deg);
          }
          .contato-link-body {
            display: flex;
            flex-direction: column;
            gap: 1px;
            min-width: 0;
          }
          .contato-link-label {
            font-size: 0.66rem;
            letter-spacing: 0.24em;
            text-transform: uppercase;
            font-weight: 600;
            color: var(--text-gold, #735422);
          }
          .contato-link-value {
            font-size: 0.92rem;
            font-weight: 500;
            color: var(--text-strong, #2E2A2B);
          }
          .contato-link-arrow {
            color: var(--gold-500, #C2A14D);
            font-size: 1rem;
            transition: transform 220ms ease;
          }
          .contato-link-item:hover .contato-link-arrow {
            transform: translateX(4px);
          }
        `}</style>
      </section>
    </>
  )
}
