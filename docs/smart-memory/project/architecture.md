---
title: Arquitetura de Implementação — Site ELEVEM-SE
type: project
status: active
agent: sites-architect
created: 2026-07-08
updated: 2026-07-08
tags: [architecture, nextjs, deployment, seo, ds-integration]
related:
  - [[project/modules]]
  - [[project/tech-stack]]
  - [[project/handoff-bundles]]
---

# Arquitetura de Implementação — Site ELEVEM-SE

> **Ciclo 1:** produção em código somente da HOME (`/`).
> Demais páginas estão analisadas em [[project/modules]] mas não implementadas até liberação explícita.
> Stack base definida pelo sites-analyst em [[project/tech-stack]]: Next.js 15, TS strict, Tailwind v4, shadcn/ui.

---

## Framework: Next.js 15 com App Router

**Justificativa:** O bundle KV é React 18 (JSX, hooks, componentes funcionais). Next.js 15 App Router é o padrão para sites React com SSG nativo, `next/image`, Metadata API e deploy direto em Vercel. A estrutura de páginas do KV mapeia naturalmente para rotas `app/`. Os tokens CSS do DS se integram via `globals.css` sem adapter.

---

## Estrutura de Pastas — Mínimo para HOME Rodar

```
/
├── app/
│   ├── layout.tsx                 # Root layout: fonts, metadata global, imports de CSS
│   ├── page.tsx                   # Rota raiz / → Home (SSG)
│   └── (marketing)/               # Route group — demais páginas entram aqui (ciclos futuros)
│
├── components/
│   ├── layout/
│   │   ├── SiteNav.tsx            # Nav sticky + drawer mobile ("use client")
│   │   ├── SiteFooter.tsx         # Footer vinho-deep + newsletter inline ("use client")
│   │   └── MobileCTABar.tsx       # Barra fixa de conversão mobile ("use client")
│   ├── shared/
│   │   ├── Reveal.tsx             # Fade+rise via IntersectionObserver ("use client")
│   │   ├── SectionHead.tsx        # eyebrow → H2 → lead (Server Component)
│   │   ├── Photo.tsx              # next/image + frame dourado (Server Component)
│   │   └── Eyebrow.tsx            # Badge eyebrow (Server Component)
│   └── home/                      # Seções exclusivas da HOME
│       ├── Hero.tsx
│       ├── Prova.tsx
│       ├── Dores.tsx
│       ├── Conceito.tsx
│       ├── MetodoResumo.tsx
│       ├── Mentores.tsx
│       ├── Depoimentos.tsx
│       ├── Legado.tsx
│       └── FinalCta.tsx
│
├── lib/
│   └── metadata.ts                # Helpers de Metadata por rota
│
├── public/
│   └── photos/                    # Assets migrados de assets/photos/ do KV
│       ├── casal-01-web.jpg
│       ├── casal-02-web.jpg
│       ├── casal-bw-web.jpg
│       ├── marcela-01-web.jpg
│       ├── marcela-poltrona-web.jpg
│       └── marcela-sorriso-web.jpg
│
└── styles/
    ├── globals.css                # Entry point: importa tokens DS + site.css
    ├── site.css                   # CSS web-only adaptado de shared/site.css do KV
    └── ds/                        # Tokens CSS copiados do DS
        ├── fonts.css
        ├── colors.css
        ├── typography.css
        ├── spacing.css
        └── styles.css
```

**Sobre `(marketing)/`:** Route group do App Router (sem segmento na URL). Criado agora para que as próximas páginas (sobre, metodo, mentoria, blog, contato, manifesto) entrem em `app/(marketing)/[rota]/page.tsx` sem refactor na HOME.

---

## Rota da HOME

| URL | Arquivo | Render |
|---|---|---|
| `/` | `app/page.tsx` | SSG estático |

`app/page.tsx` é um Server Component (padrão Next.js 15) que importa os 9 blocos de `components/home/` em sequência. Não há fetch, dados externos ou estado — SSG puro.

```tsx
// app/page.tsx
import { Hero } from '@/components/home/Hero'
import { Prova } from '@/components/home/Prova'
// ... demais blocos

export default function HomePage() {
  return (
    <>
      <Hero />
      <Prova />
      <Dores />
      <Conceito />
      <MetodoResumo />
      <Mentores />
      <Depoimentos />
      <Legado />
      <FinalCta />
    </>
  );
}
```

CTAs de navegação usam `<Link href="/mentoria#aplicar">` (Next.js Link), não `onClick` com `location.href`.

---

## Integração do Design System

O DS (`elevem-se-design-system-00d476`) entrega tokens CSS e componentes React. Na produção:

**Tokens CSS** são copiados para `styles/ds/` e importados no `globals.css`:

```css
/* styles/globals.css */
@import './ds/fonts.css';      /* Spectral + Mulish via next/font (ver abaixo) */
@import './ds/colors.css';     /* --wine-*, --gold-*, --ink-*, semânticos, tema noturno */
@import './ds/typography.css'; /* escala de texto, pesos, leadings, roles */
@import './ds/spacing.css';    /* base-4, radii, sombras, containers, motion */
@import './ds/styles.css';     /* componentes base (elv-impact, elv-impact-kicker, etc.) */
@import './site.css';          /* adaptações web: containers, grids, reveal, breakpoints */
```

**Fontes:** via `next/font/google` no `app/layout.tsx` (self-hosting automático, elimina request CDN, melhora LCP):

```tsx
import { Spectral, Mulish } from 'next/font/google'
const spectral = Spectral({ subsets: ['latin'], weight: ['300','400','500','600'], variable: '--font-display' })
const mulish = Mulish({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-sans' })
```

**Componentes React do DS** (`Logo`, `Badge`, `Button`, `Card`, `Quote`, `Signature`, `Avatar`) são reimplementados como TSX nativos consumindo os tokens CSS. O bundle UMD `_ds_bundle.js` não é usado em produção.

**Referência para sites-ux:** novos tokens devem seguir a nomenclatura `--{categoria}-{escala}` já estabelecida no DS. Nenhum token novo deve ser inventado fora desse padrão.

> TODO decisão do diretor: confirmar self-hosting de fontes via `next/font` (recomendado) vs. Google Fonts CDN explícito.

---

## Estratégia de Assets / `next/image`

- Fotos de `assets/photos/` migram para `public/photos/`.
- Usar `<Image>` do `next/image` em substituição a todos os `<img>` do protótipo.
- `priority={true}` apenas na foto do Hero (acima da dobra). Demais: `loading="lazy"` (padrão).
- `sizes` configurado por contexto:
  - Hero split (50% em desktop): `(max-width: 1023px) 100vw, 50vw`
  - Full-bleed Legado: `100vw`
- `objectPosition` parametrizável via prop (herda valores do KV: `50% 20%`, `50% 24%`, etc.).
- Next.js 15 gera WebP/AVIF automaticamente.

> TODO decisão do diretor: as fotos atuais são placeholders do Claude Design. Confirmar disponibilidade das fotos reais do ensaio.

---

## SSG — HOME

**HOME: SSG estático.** Conteúdo hardcoded no JSX — sem dados externos. Build-time render. Zero requests em runtime.

Para as demais páginas (ciclos futuros):

| Página | Estratégia |
|---|---|
| sobre, metodo, mentoria, contato, manifesto | SSG |
| blog (listagem) | SSG fase 1 → ISR com CMS |
| blog/[slug] | SSG com `generateStaticParams` fase 1 → ISR com CMS |

Nunca SSR: sem dados de usuário autenticado nem conteúdo por request.

---

## SEO / Metadata da HOME

```ts
// app/page.tsx
export const metadata: Metadata = {
  title: 'Elevem-se — Mentoria para Casais',
  description: 'Mentoria exclusiva para casais empreendedores. 12 meses, duas fases, um método. Saia do automático com estrutura.',
  openGraph: {
    title: 'Elevem-se — Mentoria para Casais',
    description: 'Para casais que já conquistaram muito e decidiram que o casamento também precisa evoluir no mesmo nível.',
    images: [{ url: '/photos/casal-01-web.jpg', width: 1200, height: 630 }],
  },
}
```

`metadataBase` definida no `app/layout.tsx` com domínio de produção.

> TODO decisão do diretor: confirmar domínio de produção — impacta `metadataBase`, canonical tags e sitemap.

---

## Deployment Target

**Vercel** — deploy automático via `git push main`. Preview deploys para PRs. Edge network nativo com Next.js 15.

---

## Tema Noturno (Manifesto — ciclo futuro)

A página `/manifesto` usa `data-theme="noturno"`. Na implementação:
- Root `layout.tsx` NÃO aplica o tema.
- `app/(marketing)/manifesto/page.tsx` tem layout próprio com `data-theme="noturno"` no wrapper.
- O CSS do DS já cobre o tema via `:root[data-theme="noturno"]` em `styles/ds/colors.css`.
- Manifesto NÃO usa `SiteNav`/`SiteFooter` globais — tem `DarkBar` própria.

---

## Decisões Pendentes

> TODO decisão do diretor: self-hosting de fontes via `next/font` (recomendado para LCP) vs. Google Fonts CDN.
> TODO decisão do diretor: domínio de produção — impacta `metadataBase`, canonical e sitemap.
> TODO decisão do diretor: integração real do formulário de aplicação (ciclos futuros) — WhatsApp API, Typeform ou endpoint próprio?
> TODO decisão do diretor: CMS para posts do blog (ciclo futuro) — Sanity, Contentful, Notion API ou arquivo estático?
> TODO decisão do diretor: integração da newsletter do footer — Mailchimp, Brevo, ConvertKit?
> TODO decisão do diretor: analytics — GA4 ou Plausible?
