---
title: Design Tokens — Elevem-se Design System
type: reference
status: complete
agent: sites-ux
created: 2026-07-08
updated: 2026-07-08
tags: [design-tokens, colors, typography, spacing, tailwind, css-variables]
related: [[agents/ux/components]], [[project/handoff-bundles]]
---

# Design Tokens — Elevem-se DS

Fonte autoritativa: `docs/elevem-se-design-system/project/tokens/` + `_ds_manifest.json`.
CSS global: `tokens/fonts.css` → `tokens/colors.css` → `tokens/typography.css` → `tokens/spacing.css` → `styles.css`.

---

## Paleta de Cores

### Vinho / Bordô — Cor primária de marca
Romance, paixão, profundidade. Cor dominante de CTAs e superfícies de destaque.

| Token | Hex | Uso |
|---|---|---|
| `--wine-950` | `#2A0E16` | Sombras densas, gradientes de fundo |
| `--wine-900` | `#3A1420` | Fundo dramático (modo noturno) |
| `--wine-800` | `#4A1B29` | Press state do primary button |
| `--wine-700` | `#5C2230` | Hover do primary button; texto de marca sobre claro |
| `--wine-600` | `#6E2A36` | **Primary brand** — action-primary, surface-wine |
| `--wine-500` | `#874050` | Primary no modo noturno |
| `--wine-400` | `#A8636F` | Primary hover no modo noturno |
| `--wine-300` | `#C8939B` | Feedback de erro sutil |
| `--wine-200` | `#E6C9CC` | Background de erro muito leve |
| `--wine-100` | `#F3E2E0` | Tints leves |
| `--wine-50` | `#FAF2F0` | Background de hover ghost |

### Dourado / Gold — Accent premium
Prosperidade, sofisticação. Nunca em texto pequeno (contraste insuficiente). Réguas, anéis, CTAs sobre escuro.

| Token | Hex | Uso |
|---|---|---|
| `--gold-800` | `#735422` | Texto dourado sobre claro (`--text-gold`) |
| `--gold-700` | `#946F26` | Hover de action-gold; warning |
| `--gold-600` | `#AC8838` | Action-gold; asterisco required |
| `--gold-500` | `#C2A14D` | **Principal** — rule-gold, focus-ring, borda secondary button, ring do Avatar |
| `--gold-400` | `#D2B673` | Rule sobre vinho; balas de lista sobre escuro |
| `--gold-300` | `#E0CB99` | Texto eyebrow sobre vinho; texto de assinatura no dark |
| `--gold-200` | `#EDDFBE` | Mensagem de sucesso no footer |
| `--gold-100` | `#F6EFD8` | Ring de focus (box-shadow) |
| `--gold-50` | `#FBF7EB` | Background muito leve |

### Azul-marinho / Ink — Âncora estrutural (Maycko)
Estrutura, autoridade, estratégia. Cor do mentor Maycko. Superfície alternativa premium.

| Token | Hex | Uso |
|---|---|---|
| `--ink-950` | `#0D1422` | Noir máximo |
| `--ink-900` | `#16233A` | Surface-anchor-deep; superfície modo noturno |
| `--ink-800` | `#21314F` | Card variant ink; anchor; assinatura Maycko |
| `--ink-700` | `#2C3F61` | Rule-anchor |
| `--ink-600` | `#3B4F74` | Anchor-soft |
| `--ink-500` | `#51668A` | Médio |
| `--ink-400` | `#7487A0` | Texto âncora dark; rule em card ink |
| `--ink-300` | `#A7B4C6` | Texto âncora modo noturno |
| `--ink-200` | `#CCD4DF` | Borda leve |
| `--ink-100` | `#E5EAF0` | Texto em card ink |

### Neutros Claros — Base de respiro
Marfim, creme, areia, nude. Leveza e espaço. Fundo da maioria das páginas.

| Token | Hex | Uso |
|---|---|---|
| `--ivory` | `#F4EEE2` | **Surface-page** — fundo principal do site |
| `--cream` | `#EBE1CE` | Surface-sunken; seções cream alternadas |
| `--sand` | `#D9C4A3` | Surface-fill; fundo de Avatar fallback |
| `--nude` | `#C9B492` | Border-hairline; borda default do Input |

### Grafite Suave — Texto e linhas
Substitui preto puro — sem peso excessivo.

| Token | Hex | Uso |
|---|---|---|
| `--graphite-900` | `#2E2A2B` | **text-strong** |
| `--graphite-700` | `#4D4748` | **text-body** |
| `--graphite-500` | `#716A6B` | **text-muted** |
| `--graphite-300` | `#A99FA0` | Border-soft |
| `--graphite-100` | `#DAD2D2` | Border-soft alternativo |

### Calor / Clay — Acento emocional
Intimidade, Amante/Explorador. Nunca rosa ou magenta.

| Token | Hex | Uso |
|---|---|---|
| `--warm-600` | `#8C5038` | text-warm |
| `--warm-500` | `#B47254` | accent-warm |
| `--warm-300` | `#D8A98E` | warm-line |
| `--warm-100` | `#F1DECE` | warm-fill, highlight-warm |

### Extremos
| Token | Hex | Uso |
|---|---|---|
| `--white-warm` | `#FFFDFA` | Surface raised/card; texto principal sobre escuro |
| `--black-warm` | `#1C1518` | Texto máximo (raramente usado direto) |

### Feedback de Sistema
| Token | Referência | Uso |
|---|---|---|
| `--success` | `#5B6B4E` | Confirmações (ex: email enviado) |
| `--warning` | `--gold-700` | Alertas |
| `--danger` | `--wine-600` | Erros de formulário |
| `--info` | `--graphite-700` | Informações neutras |

---

## Tokens Semânticos de Cor (aliases)

### Superfícies
| Token | Resolve para | Hex real |
|---|---|---|
| `--surface-page` | `--ivory` | `#F4EEE2` |
| `--surface-raised` | `--white-warm` | `#FFFDFA` |
| `--surface-card` | `--white-warm` | `#FFFDFA` |
| `--surface-sunken` | `--cream` | `#EBE1CE` |
| `--surface-fill` | `--sand` | `#D9C4A3` |
| `--surface-wine` | `--wine-600` | `#6E2A36` |
| `--surface-wine-deep` | `--wine-800` | `#4A1B29` |
| `--surface-anchor` | `--ink-900` | `#16233A` |
| `--surface-anchor-deep` | `--ink-950` | `#0D1422` |

### Texto
| Token | Resolve para | Uso |
|---|---|---|
| `--text-strong` | `--graphite-900` | Headings, labels |
| `--text-body` | `--graphite-700` | Parágrafos |
| `--text-muted` | `--graphite-500` | Hints, metadata |
| `--text-on-wine` | `--gold-100` | Corpo sobre fundo vinho |
| `--text-on-wine-strong` | `--white-warm` | Headings sobre fundo vinho |
| `--text-brand` | `--wine-700` | Links de marca, ghost button |
| `--text-gold` | `--gold-800` | Eyebrows, ornamentação |
| `--text-warm` | `--warm-600` | Destaque emocional |
| `--text-anchor` | `--ink-800` | Texto em contexto anchor |

### Bordas e Réguas
| Token | Resolve para | Uso |
|---|---|---|
| `--border-hairline` | `--nude` | Bordas finas padrão |
| `--border-soft` | `--graphite-100` | Divisores suaves |
| `--rule-gold` | `--gold-500` | Régua decorativa sobre claro |
| `--rule-gold-on-wine` | `--gold-400` | Régua decorativa sobre vinho |
| `--rule-anchor` | `--ink-700` | Régua sobre ink |

### Ações
| Token | Resolve para | Uso |
|---|---|---|
| `--action-primary` | `--wine-600` | Fundo button primary |
| `--action-primary-hover` | `--wine-700` | Hover button primary |
| `--action-primary-press` | `--wine-800` | Press button primary |
| `--action-gold` | `--gold-600` | Fundo button gold |
| `--action-gold-hover` | `--gold-700` | Hover button gold |
| `--focus-ring` | `--gold-500` | Outline de foco |

---

## Tema Noturno (`data-theme="noturno"`)

Ativado com `:root[data-theme="noturno"]`. Override dos tokens semânticos.

| Token overridden | Valor no noturno |
|---|---|
| `--surface-page` | `--noir-800` (`#1A1F28`) |
| `--surface-raised` | `--noir-700` (`#242A35`) |
| `--surface-card` | `--noir-700` |
| `--surface-sunken` | `--noir-900` (`#14181F`) |
| `--surface-fill` | `#2E3540` |
| `--text-strong` | `--white-warm` |
| `--text-body` | `#D8DCE3` |
| `--text-muted` | `#99A2AF` |
| `--text-brand` | `--gold-300` |
| `--text-gold` | `--gold-300` |
| `--text-anchor` | `--ink-300` |
| `--border-hairline` | `rgba(214,188,129,0.20)` |
| `--border-soft` | `rgba(214,188,129,0.12)` |
| `--rule-gold` | `--gold-400` |
| `--action-primary` | `--wine-500` |
| `--action-primary-hover` | `--wine-400` |
| `--focus-ring` | `--gold-400` |

---

## Tipografia

### Famílias de fonte
| Token | Valor | Stack completo |
|---|---|---|
| `--font-display` | `'Spectral'` | `'Spectral', Georgia, 'Times New Roman', serif` |
| `--font-sans` | `'Mulish'` | `'Mulish', 'Helvetica Neue', Arial, sans-serif` |

- **Spectral** — serifada editorial, atemporal. Headings, pull quotes, assinaturas, wordmark.
- **Mulish** — sans-serif macia. Corpo, labels, eyebrows, navegação, formulários.

### Escala de tamanho
| Token | Valor rem | px equiv |
|---|---|---|
| `--text-2xs` | `0.6875rem` | ~11px |
| `--text-xs` | `0.75rem` | 12px |
| `--text-sm` | `0.875rem` | 14px |
| `--text-base` | `1rem` | 16px |
| `--text-md` | `1.125rem` | 18px |
| `--text-lg` | `1.375rem` | 22px |
| `--text-xl` | `1.75rem` | 28px |
| `--text-2xl` | `2.25rem` | 36px |
| `--text-3xl` | `3rem` | 48px |
| `--text-4xl` | `4rem` | 64px |
| `--text-5xl` | `5.5rem` | 88px |
| `--text-6xl` | `7.5rem` | 120px |

### Pesos
| Token | Valor |
|---|---|
| `--weight-light` | `300` |
| `--weight-regular` | `400` |
| `--weight-medium` | `500` |
| `--weight-semibold` | `600` |
| `--weight-bold` | `700` |

### Line-heights
| Token | Valor | Uso |
|---|---|---|
| `--leading-tight` | `1.04` | Display grande, impact |
| `--leading-snug` | `1.18` | Headings |
| `--leading-normal` | `1.5` | Corpo padrão |
| `--leading-relaxed` | `1.7` | Parágrafos longos, lead |

### Letter-spacing (tracking)
| Token | Valor | Uso |
|---|---|---|
| `--tracking-tight` | `-0.01em` | Display largo |
| `--tracking-normal` | `0em` | Padrão |
| `--tracking-wide` | `0.12em` | Labels, metadata |
| `--tracking-wider` | `0.2em` | Botões (uppercase) |
| `--tracking-widest` | `0.3em` | Eyebrows, badges |

### Papéis tipográficos compostos
| Papel | Família | Peso | Leading | Tracking | Uso |
|---|---|---|---|---|---|
| `display` | Spectral | regular (400) | tight (1.04) | tight (-0.01em) | Títulos heroicos, display |
| `heading` | Spectral | semibold (600) | snug (1.18) | — | Headings de seção (h2–h4) |
| `eyebrow` | Mulish | medium (500) | — | widest (0.3em) | Eyebrows/badges, 2xs |
| `body` | Mulish | regular (400) | relaxed (1.7) | — | Texto corrido |
| `label` | Mulish | medium (500) | — | wide (0.12em) | Labels, botões, navegação |
| `impact` | Spectral | semibold (600) | 1.04 | 0.015em | Caixa-alta de impacto social |

---

## Spacing Scale (base 4px)

| Token | Valor rem | px equiv |
|---|---|---|
| `--space-0` | `0` | 0 |
| `--space-1` | `0.25rem` | 4px |
| `--space-2` | `0.5rem` | 8px |
| `--space-3` | `0.75rem` | 12px |
| `--space-4` | `1rem` | 16px |
| `--space-5` | `1.5rem` | 24px |
| `--space-6` | `2rem` | 32px |
| `--space-7` | `2.5rem` | 40px |
| `--space-8` | `3rem` | 48px |
| `--space-9` | `4rem` | 64px |
| `--space-10` | `5rem` | 80px |
| `--space-11` | `6.5rem` | 104px |
| `--space-12` | `8rem` | 128px |

**Nota:** Escala generosa com saltos não-lineares. Reflete editorial premium — muito respiro entre seções.

---

## Containers
| Token | Valor | Uso |
|---|---|---|
| `--container-sm` | `36rem` (576px) | Formulários, texto estreito |
| `--container-md` | `48rem` (768px) | Conteúdo médio |
| `--container-lg` | `64rem` (1024px) | Layout padrão |
| `--container-xl` | `75rem` (1200px) | Layout wide |
| `--gutter` | `var(--space-5)` (24px) | Padding lateral padrão |

---

## Border Radius
| Token | Valor | Uso |
|---|---|---|
| `--radius-none` | `0` | Elementos sem arredondamento |
| `--radius-xs` | `2px` | Micro-elementos |
| `--radius-sm` | `4px` | Pequenos |
| `--radius-md` | `8px` | Cards, inputs |
| `--radius-lg` | `14px` | Cards maiores |
| `--radius-xl` | `22px` | Destaque |
| `--radius-pill` | `999px` | Botões, tags |
| `--radius-circle` | `50%` | Avatar |

---

## Sombras
| Token | Valor | Uso |
|---|---|---|
| `--shadow-xs` | `0 1px 2px rgba(74,30,41,0.06)` | Micro elevação |
| `--shadow-sm` | `0 2px 8px rgba(74,30,41,0.07)` | Elevação sutil |
| `--shadow-md` | `0 10px 30px -12px rgba(74,30,41,0.18)` | Cards raised |
| `--shadow-lg` | `0 24px 60px -24px rgba(46,14,26,0.28)` | Modais, MobileCTABar |
| `--shadow-gold` | `0 8px 28px -14px rgba(154,114,51,0.45)` | Elementos com destaque dourado |
| `--ring-hairline` | `inset 0 0 0 1px var(--border-hairline)` | Card plain, borda interna |

**Nota:** Todas as sombras têm tom avermelhado-vinho (`rgba(74,30,41,...)`) — coerente com a paleta quente da marca.

---

## Bordas utilitárias
| Token | Valor | Uso |
|---|---|---|
| `--hairline` | `1px` | Borda mínima |
| `--rule-thin` | `1px` | Régua decorativa fina |
| `--rule-medium` | `2px` | Régua decorativa média |

---

## Breakpoints

O DS não define CSS custom properties de breakpoint — os valores são usados via JavaScript `useMediaQuery`:

| Breakpoint | Valor | Aplicação |
|---|---|---|
| Mobile | < 1000px | SiteNav drawer; MobileCTABar visível |
| Desktop | ≥ 1000px | SiteNav links horizontais; grids 2-3 colunas |

Os grids do KV usam classes utilitárias (`.elv-grid-2`, `.elv-grid-3`, `.elv-split`) com `@media` em `site.css`.

---

## Motion (animações)

| Token | Valor | Uso |
|---|---|---|
| `--ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Transições de estado (hover, focus) |
| `--ease-entrance` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entradas/reveals, drawer mobile |
| `--duration-fast` | `140ms` | Hover de botão, cor |
| `--duration-base` | `240ms` | Transições padrão (input focus) |
| `--duration-slow` | `420ms` | Reveals, MobileCTABar |

**Reveal scroll:** `IntersectionObserver` com threshold 0.12 e rootMargin `-8%` bottom. Classe `is-in` ativa via RAF duplo. Respeita `prefers-reduced-motion`.

---

## Como mapear para Tailwind config

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        wine: {
          50:  '#FAF2F0',
          100: '#F3E2E0',
          200: '#E6C9CC',
          300: '#C8939B',
          400: '#A8636F',
          500: '#874050',
          600: '#6E2A36', // primary brand
          700: '#5C2230',
          800: '#4A1B29',
          900: '#3A1420',
          950: '#2A0E16',
        },
        gold: {
          50:  '#FBF7EB',
          100: '#F6EFD8',
          200: '#EDDFBE',
          300: '#E0CB99',
          400: '#D2B673',
          500: '#C2A14D', // rule, focus, avatar ring
          600: '#AC8838',
          700: '#946F26',
          800: '#735422', // text-gold
        },
        ink: {
          100: '#E5EAF0',
          200: '#CCD4DF',
          300: '#A7B4C6',
          400: '#7487A0',
          500: '#51668A',
          600: '#3B4F74',
          700: '#2C3F61',
          800: '#21314F',
          900: '#16233A',
          950: '#0D1422',
        },
        graphite: {
          100: '#DAD2D2',
          300: '#A99FA0',
          500: '#716A6B',
          700: '#4D4748',
          900: '#2E2A2B',
        },
        warm: {
          100: '#F1DECE',
          300: '#D8A98E',
          500: '#B47254',
          600: '#8C5038',
        },
        ivory:  '#F4EEE2',
        cream:  '#EBE1CE',
        sand:   '#D9C4A3',
        nude:   '#C9B492',
        'white-warm': '#FFFDFA',
        'black-warm': '#1C1518',
      },
      fontFamily: {
        display: ["'Spectral'", 'Georgia', "'Times New Roman'", 'serif'],
        sans:    ["'Mulish'", "'Helvetica Neue'", 'Arial', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1' }],
        xs:    ['0.75rem',   { lineHeight: '1' }],
        sm:    ['0.875rem',  { lineHeight: '1.5' }],
        base:  ['1rem',      { lineHeight: '1.5' }],
        md:    ['1.125rem',  { lineHeight: '1.5' }],
        lg:    ['1.375rem',  { lineHeight: '1.5' }],
        xl:    ['1.75rem',   { lineHeight: '1.18' }],
        '2xl': ['2.25rem',   { lineHeight: '1.18' }],
        '3xl': ['3rem',      { lineHeight: '1.04' }],
        '4xl': ['4rem',      { lineHeight: '1.04' }],
        '5xl': ['5.5rem',    { lineHeight: '1.04' }],
        '6xl': ['7.5rem',    { lineHeight: '1.04' }],
      },
      letterSpacing: {
        tight:   '-0.01em',
        normal:   '0em',
        wide:     '0.12em',
        wider:    '0.2em',
        widest:   '0.3em',
      },
      spacing: {
        1:  '0.25rem',
        2:  '0.5rem',
        3:  '0.75rem',
        4:  '1rem',
        5:  '1.5rem',
        6:  '2rem',
        7:  '2.5rem',
        8:  '3rem',
        9:  '4rem',
        10: '5rem',
        11: '6.5rem',
        12: '8rem',
      },
      borderRadius: {
        none:   '0',
        xs:     '2px',
        sm:     '4px',
        md:     '8px',
        lg:     '14px',
        xl:     '22px',
        pill:   '999px',
        circle: '50%',
      },
      boxShadow: {
        xs:   '0 1px 2px rgba(74,30,41,0.06)',
        sm:   '0 2px 8px rgba(74,30,41,0.07)',
        md:   '0 10px 30px -12px rgba(74,30,41,0.18)',
        lg:   '0 24px 60px -24px rgba(46,14,26,0.28)',
        gold: '0 8px 28px -14px rgba(154,114,51,0.45)',
      },
      transitionDuration: {
        fast: '140ms',
        base: '240ms',
        slow: '420ms',
      },
      transitionTimingFunction: {
        standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
        entrance: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      maxWidth: {
        sm: '36rem',
        md: '48rem',
        lg: '64rem',
        xl: '75rem',
      },
    },
  },
};
```

---

## Proporção de uso de cores (regra editorial)

- **≈70%** neutros claros (ivory, cream, white-warm) — respiro e leveza
- **≈15%** vinho — seções de destaque, CTAs, headers de impacto
- **≈10%** navy/grafite — âncora, texto, seções ink
- **≈5%** dourado — accent, réguas, ícones, anéis

Nunca usar dourado como cor de texto em tamanho pequeno (contraste insuficiente — WCAG AA falha abaixo de ~18px bold).
