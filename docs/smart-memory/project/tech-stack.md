---
title: Tech Stack — ELEVEM-SE Site
type: decision
status: proposed
agent: sites-analyst
created: 2026-07-08
updated: 2026-07-08
tags: [tech-stack, nextjs, tailwind, typescript]
related: ["[[overview]]", "[[conventions]]", "[[handoff-bundles]]"]
---

# Tech Stack — ELEVEM-SE Site

**Status:** Proposta para aprovação do diretor (Michel).

---

## Runtime

| Camada | Escolha | Justificativa |
|--------|---------|---------------|
| **Node** | 22 LTS | Versão estável com suporte até 2027; compatível com Next.js 15 |
| **Package manager** | pnpm | Workspace-friendly, cache eficiente, mais rápido que npm/yarn |

---

## Framework

### Next.js 15 — App Router

**Justificativa:** SSG nativo para landing pages de alta performance (Core Web Vitals críticos para conversão de mentoria). App Router permite React Server Components, reduzindo JS enviado ao cliente. Vercel — deploy target natural — é mantido pelo mesmo time.

Evidência no bundle: o DS já entrega protótipos em `.jsx` por página (`[[../handoff-bundles#1. KV | SITE]]`), o que mapeia diretamente para `app/` routes.

---

## Linguagem

### TypeScript

Tipagem estática para tokens do DS e props de componentes reduz regressões ao transcrever os componentes do bundle (`_ds_manifest.json` lista 9 componentes com sourcePaths explícitos).

---

## Styling

### Tailwind CSS v4 + CSS Custom Properties do DS

O DS entrega tokens como CSS Custom Properties em 4 arquivos (`tokens/fonts.css`, `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`). Tailwind v4 consome CSS variables nativamente via `@theme inline`, eliminando duplicação de tokens.

**Estratégia de integração:**
```css
/* app/globals.css */
@import "../docs/elevem-se-design-system/project/styles.css"; /* importa os 4 token files */
@import "tailwindcss";

@theme inline {
  --color-wine-600: var(--wine-600);    /* #6E2A36 */
  --color-wine-700: var(--wine-700);    /* #5C2230 */
  --color-gold-400: var(--gold-400);    /* #D2B673 */
  --color-ink-900:  var(--ink-900);     /* #16233A */
  --color-ivory:    var(--ivory);       /* #F4EEE2 */
  --font-display:   var(--font-display); /* Spectral */
  --font-sans:      var(--font-sans);    /* Mulish  */
  /* ... demais tokens conforme necessidade */
}
```

Evidência: `[[../handoff-bundles#2. Design System]]` → `tokens/` com proporção de paleta 70% claros / 15% vinho / 10% navy+grafite / 5% dourado.

---

## Componentes

### shadcn/ui como base + componentes custom do DS

shadcn/ui fornece acessibilidade (Radix UI por baixo) sem lock-in de estilo. Os 9 componentes do DS (`Logo`, `Quote`, `Signature`, `Avatar`, `Badge`, `Button`, `Card`, `Field`, `Input`) são reimplementados sobre a base shadcn com tokens da marca.

Evidência: `_ds_manifest.json` → campo `components[]`, sourcePaths em `components/brand/` e `components/core/` e `components/forms/`.

---

## Fontes / Tipografia

**Famílias:** Spectral (display/heading serifada editorial) + Mulish (body/eyebrow/label sans-serif)

**Carregamento:** `next/font/google` com `display: 'swap'` e subset `latin,latin-ext` (pt-BR exige acentos — `type-specimen-acentos.html` valida renderização).

```ts
// app/fonts.ts
import { Spectral, Mulish } from 'next/font/google'

export const spectral = Spectral({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

export const mulish = Mulish({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})
```

Evidência: `tokens/fonts.css` linha 17 → `@import url('https://fonts.googleapis.com/css2?family=Spectral...')`. `next/font` é a versão de produção desse import.

---

## Ícones

### lucide-react

Default do shadcn/ui. Tree-shakeable por ícone, sem overhead de sprite. Se o bundle DS trouxer SVGs proprietários da marca (símbolo da chama), eles vivem em `public/icons/` como componentes SVG diretos.

---

## Animações / Motion

### Framer Motion (condicional)

Apenas para scroll-triggered animations no hero e seção de método (evidência visual: `ui_kits/landing/index.html` no DS tem motion implícito nas seções de conversão). Usar `motion.div` com `viewport={{ once: true }}` para não prejudicar LCP.

Se a seção não precisar de scroll trigger, usar CSS transitions (`--ease-entrance: cubic-bezier(0.16, 1, 0.3, 1)` e `--duration-slow: 420ms` já definidos nos tokens de spacing).

---

## Imagens

### next/image

`priority` no hero (LCP). Demais imagens com `loading="lazy"`. Assets em `public/images/`. Formatos: WebP com fallback JPEG. Fotos dos mentores seguem direção de uso do DS (`guidelines/cards/brand-photography.html` → ensaio escuro editorial, emoldurado ou full-bleed).

---

## Formulários

### React Hook Form + Zod

Para a página `application-form` (formulário de candidatura à mentoria). Zod valida schema no cliente; mesma validação pode ser reutilizada em Server Action.

Evidência: DS entrega componentes `Field` e `Input` (`components/forms/`) que mapeiam para controlled inputs do RHF.

---

## Analytics

`[ ]` **A decidir — pendente confirmação do diretor.**

Opções: Vercel Analytics (zero-config), Google Analytics 4, ou Plausible (privacy-first). Nenhuma implementada até aprovação.

---

## Deploy

### Vercel (preferência)

Deploy nativo para Next.js. CI/CD automático via push. Preview URLs por branch.

**Nota:** O bundle DS inclui `netlify-deploy/` com um `index.html` de preview estático do DS. Isso é apenas para visualização do design system, não para o site de produção. Manter Vercel como target a menos que o diretor indique outro.

---

## Tema dual

O DS define dois modos via `data-theme`:
- Default (claro): `--surface-page: var(--ivory)` — marfim predominante
- `data-theme="noturno"`: `--surface-page: var(--noir-800)` — fundo escuro dramático

Implementar via `next-themes` (provider leve, sem flash) com default `light`.

Evidência: `_ds_manifest.json` → campo `themes[]` → `{ selector: ":root[data-theme='noturno']", label: "Root Noturno" }`.
