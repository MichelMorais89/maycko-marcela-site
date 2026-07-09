---
title: Padrão Visual Oficial — Páginas Internas
type: reference
status: canonical
agent: team-lead
created: 2026-07-08
updated: 2026-07-08
tags: [ux, padrao, canonical, internas]
---

# Padrão Visual Oficial — Páginas Internas ELEVEM-SE

Consolidado após entrega da HOME (Story 2.3 + refinos). Aplicar em `/mentoria`, `/metodo`, `/sobre`, `/contato`, `/blog`.

## Identidade — INEGOCIÁVEL

- **Paleta**: creme `--surface-anchor` (background master) + vinho `--wine-600` (principal) + dourado `--gold-500` (acento) + ink escuro pra seções contrast
- **Fontes**: `--font-display` Spectral (títulos, itálicos, quotes) + `--font-sans` Mulish (corpo, eyebrows, labels)
- **Fé implícita** — nunca versículo, amém, denominação
- **Vocabulário de construção** — nunca "salvar/superar/restaurar/crise"

## Componentes de motion globais (já ativos via layout.tsx)

- `<Aurora />` — aurora respirando em vinho + dourado
- `<DottedGrid />` — grid dotted 3% opacidade
- `<GrainOverlay />` — grain film 2-3%
- `<ScrollProgress />` — barra dourada topo
- `<FlameCursor />` — chama + glow radial dourado
- `<LenisProvider />` — smooth scroll

## Padrões de bloco (reutilizar)

### Eyebrow padrão (topo de bloco)
```jsx
<div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)' }}>
  <Ornament variant="rule" ruleWidth={44} tone="gold" />
  <p className="elv-sans" style={{
    fontSize: 'clamp(0.75rem, 0.7rem + 0.2vw, 0.9rem)',
    letterSpacing: '0.26em', textTransform: 'uppercase',
    color: 'var(--gold-400)', fontWeight: 600,
  }}>{EYEBROW}</p>
</div>
```

### H2 padrão (título de seção)
```jsx
<h2 className="elv-serif" style={{
  fontSize: 'clamp(1.9rem, 3.6vw, 3.2rem)',
  color: 'var(--white-warm)', // ou --text-strong em fundo claro
  lineHeight: 1.12,
  textTransform: 'uppercase',
  letterSpacing: '0.008em',
  fontWeight: 'var(--weight-medium)',
  textWrap: 'balance',
}}>
  <SplitText>{TITULO}</SplitText>{' '}
  <em style={{ fontStyle: 'italic', color: 'var(--gold-400)', fontWeight: 'var(--weight-regular)' }}>
    <SplitText delay={400}>{DESTAQUE}</SplitText>
  </em>
</h2>
```

### Card 3D dark (Método, Transformação)
Ver `MetodoResumo.tsx` — usa gradient angular + shadow multicamada + highlight top double-line + ornamento diamante topo + número gigante gradient dourado + `elv-hover-card` class.

### Card criativo cream (Depoimentos)
Ver `Depoimentos.tsx` — gradient warm creme + shadow multicamada + aspas serif gradient + border 1px gold + avatar radial gradient.

### Foto full-bleed com casal empurrado (Dores)
Wrapper `overflow: hidden` + inner container deslocado `left: 22%, right: -22%` + Image objectPosition `50% 22%` + overlay linear-gradient dominante à esquerda.

### Foto em card com hover zoom (Manifesto)
`elv-photo-hover` class — transition scale + brightness.

## FX que já existem

- `.elv-hover-card` (lift + glow no hover)
- `.elv-photo-hover` (zoom + brightness)
- `.elv-stat-card` (Prova hover)
- `.elv-pillar-flame` / `.elv-pillar-rings` / `.elv-pillar-column` (animação constante nos ícones)
- `.elv-strike::after` (risco progressivo linear com CSS var duration/delay)
- `heroPhotoFadeIn` (fade inicial da foto Hero)
- `<Ornament tone="gold" variant="rule-diamond-rule|diamond|rule" />` (ornamentos boutique)
- `<FlameLetter />` (letra E de chama inline)
- `<SplitText delay={N}>` (word-stagger reveal)
- `<CountUp to={N} suffix={} />` (counting animation)
- `<MagneticButton>` + `<ShimmerCTA>` (CTA com shimmer + magnetic)
- `<TiltCard>` (tilt 3D no hover)

## Vídeos disponíveis (public/videos/)

- `casal-1.mp4` (6.0MB, 1080p 25fps, muted, faststart) — casal em sofá com laptops
- `casal-2.mp4` (1.9MB, 1080p 25fps, muted, faststart) — casal
- `casal-3-hd.mp4` (3.8MB, 1080p 30fps) — casal HD

Usar como `<video src="/videos/X.mp4" autoPlay muted loop playsInline preload="metadata" />` em backgrounds full-bleed com overlay vinho.

## Fotos stock adicionais (public/photos/stock/)

- `casal-sofa-laptop.jpg` — casal sofá + laptops (rotina digital)
- `casal-conversa-terapia.jpg` — casal em conversa/terapia
- `casal-cozinha-tensao.jpg` — casal na cozinha em tensão silenciosa
- `casal-conversa-simples.jpg` — casal em pé conversando
- `familia-pjs-crianca.jpg` — família de pijama com criança
- `familia-campo-crianca.jpg` — família em campo com criança
- `familia-bebe-beijo.jpg` — casal beijando bebê
- `casal-montanha-bw.jpg` — casal deitado em montanha BW (perfeito pra Legado/blog cover)

## Nav — items disponíveis
Home · Sobre · O Método · A Mentoria · Blog · Contato + CTA "QUERO A MENTORIA"

## Convenções específicas

- Cada página tem seu Hero próprio (foto full-bleed OU vídeo bg + wordmark topo + eyebrow + H1 + sub + CTAs + scroll hint)
- Transição entre blocos sem `ConnectiveBleed` amador — deixar background natural
- Ornamentos boutique em pontos-chave (rule + diamond + rule)
- Cursor chama funciona site-wide
- Sempre usar `<Reveal>` pra revelações + `<SplitText>` em títulos
- Metadata SEO por página (title, description, OG image)
- Todas as páginas SSG estático (App Router `page.tsx` sem `use client` no root)
