---
title: Catálogo de Componentes — Elevem-se Design System
type: reference
status: complete
agent: sites-ux
created: 2026-07-08
updated: 2026-07-08
tags: [components, design-system, ui-catalog, shadcn]
related: [[project/design-tokens]], [[project/handoff-bundles]]
---

# Catálogo de Componentes — Elevem-se DS

Fonte: `docs/elevem-se-design-system/project/` e `docs/elevem-se-kv-site/project/site/shared/`.
Namespace do DS em runtime: `window.ElevemSeDesignSystem_00d476`.

---

## Componentes de Marca (brand/)

### Logo
**Path:** `components/brand/Logo.jsx`
**Propósito:** Marca completa da Elevem-se — símbolo chama (dois filamentos SVG: vinho + dourado), wordmark Spectral e tagline. Único ponto de verdade visual da marca.

**Variantes (prop `variant`):**
| Valor | Descrição |
|---|---|
| `lockup` (default) | Empilhado, centralizado: símbolo + wordmark + tagline |
| `horizontal` | Símbolo à esquerda + wordmark/tagline à direita |
| `wordmark` | Só texto + tagline, sem símbolo |
| `mark` | Só o símbolo SVG da chama |

**Props:**
| Prop | Tipo | Default | Descrição |
|---|---|---|---|
| `variant` | string | `'lockup'` | Layout do lockup |
| `tone` | string | `'wine'` | `'wine'` (sobre claro) / `'light'` (sobre vinho/escuro) |
| `size` | number | `72` | Altura do mark em px |
| `tagline` | boolean | `true` | Exibir tagline "Mentoria para casais" |

**Tokens consumidos:** `--font-display`, `--font-sans`, `--wine-600`, `--wine-700`, `--gold-300`, `--gold-400`, `--gold-500`, `--gold-800`, `--ivory`, `--white-warm`

**Uso nas páginas KV:**
- `site-kit.jsx` — `SiteNav` (horizontal, size 36/32, sem tagline) e `SiteFooter` (horizontal, tone light, size 42)
- `home.jsx` — `FinalCta` (mark, tone wine, size 52)

**Shadcn equivalente:** nenhum — componente proprietário de marca, sem primitivo shadcn.

---

### Quote
**Path:** `components/brand/Quote.jsx`
**Propósito:** Pull quote / depoimento editorial. Spectral itálico com régua dourada e atribuição. Transmite autoridade e calor emocional.

**Variantes (prop `tone`):**
| Valor | Uso |
|---|---|
| `light` (default) | Sobre fundo claro (marfim, creme) |
| `wine` | Sobre fundo vinho |

**Props:**
| Prop | Tipo | Default | Descrição |
|---|---|---|---|
| `children` | node | — | Texto da citação |
| `cite` | string | — | Nome do autor |
| `role` | string | — | Papel/descrição do autor |
| `tone` | string | `'light'` | Paleta de cor |
| `size` | string | `'md'` | `'sm'` / `'md'` / `'lg'` — tamanho do texto |
| `align` | string | `'left'` | `'left'` / `'center'` |

**Tokens consumidos:** `--font-display`, `--font-sans`, `--text-lg/xl/2xl`, `--leading-snug`, `--rule-gold`, `--rule-gold-on-wine`, `--text-strong`, `--text-on-wine-strong`, `--white-warm`, `--gold-300`, `--text-gold`, `--text-sm`, `--text-2xs`, `--tracking-wide`, `--tracking-widest`, `--space-5`

**Uso nas páginas KV:**
- `home.jsx` — `Hero` (size sm, dentro de Card raised — flutuante sobre foto)

**Shadcn equivalente:** `shadcn/blockquote` (primitivo semântico) — estilo inteiramente proprietário.

---

### Signature
**Path:** `components/brand/Signature.jsx`
**Propósito:** Assinatura dos mentores em caixa-alta Spectral. Reforça autoria e personalidade da marca. Três modos: individual Marcela (dourado), individual Maycko (ink/navy), casal (combinado itálico).

**Variantes (prop `mentor`):**
| Valor | Cor | Uso |
|---|---|---|
| `couple` (default) | Grafite + âmpersand dourado itálico | Assinatura conjunta |
| `marcela` | Dourado | Seção sobre Marcela |
| `maycko` | Azul-marinho (ink) | Seção sobre Maycko |

**Props:**
| Prop | Tipo | Default | Descrição |
|---|---|---|---|
| `mentor` | string | `'couple'` | Qual assinatura renderizar |
| `tone` | string | `'wine'` | `'wine'` (sobre claro) / `'light'` (sobre escuro) |
| `size` | string | `'md'` | `'sm'` / `'md'` / `'lg'` |
| `role` | boolean | `false` | Exibir sub-linha de papel (ex: "Dourado · prosperidade") |

**Tokens consumidos:** `--font-display`, `--font-sans`, `--weight-medium`, `--gold-300/400/600/700`, `--ink-300/400/600/800`, `--graphite-900`, `--white-warm`, `--text-muted`

**Uso nas páginas KV:**
- `home.jsx` — `Mentores` (couple, tone wine, size md)
- `site-kit.jsx` — `SiteFooter` (couple, tone light, size sm)

**Shadcn equivalente:** nenhum — componente proprietário.

---

## Componentes Core (core/)

### Button
**Path:** `components/core/Button.jsx`
**Propósito:** CTA principal do site. Premium e calmo — sem sharp corners (pill), foco dourado, transições suaves. Self-contained (hover/press em estado interno React).

**Variantes (prop `variant`):**
| Valor | Aparência | Uso |
|---|---|---|
| `primary` (default) | Sólido vinho, texto branco | CTA principal — "Quero aplicar" |
| `secondary` | Borda dourada, texto vinho; hover → sólido vinho | CTA secundário |
| `ghost` | Transparente, texto vinho; hover → tint suave | Links de navegação tipo botão |
| `gold` | Sólido dourado, texto vinho-950 | Destaque premium, CTA sobre fundo escuro |

**Props:**
| Prop | Tipo | Default | Descrição |
|---|---|---|---|
| `variant` | string | `'primary'` | Paleta |
| `size` | string | `'md'` | `'sm'` / `'md'` / `'lg'` |
| `fullWidth` | boolean | `false` | Esticar 100% do container |
| `disabled` | boolean | `false` | Estado desabilitado |
| `iconLeft` | node | `null` | Ícone à esquerda do label |
| `iconRight` | node | `null` | Ícone à direita do label |

**Estados:** Default / Hover (JS) / Press (JS + scale 0.99) / Disabled (opacity 0.45)

**Acessibilidade:** `disabled` nativo no `<button>`; `cursor: not-allowed` quando desabilitado; foco via `:focus-visible` (não implementado in-component — requer CSS global `.elv-focus`).

**Tokens consumidos:** `--action-primary`, `--action-primary-hover`, `--action-primary-press`, `--action-gold`, `--action-gold-hover`, `--gold-500/600`, `--wine-700/950`, `--text-brand`, `--white-warm`, `--font-sans`, `--weight-medium`, `--tracking-wider`, `--radius-pill`, `--duration-fast`, `--ease-standard`, `--text-2xs/xs/sm`

**Uso nas páginas KV:**
- `home.jsx` — Hero (primary lg, secondary lg, ghost md), MetodoResumo (ghost md), FinalCta (primary lg)
- `site-kit.jsx` — SiteNav (primary sm), MobileCTABar (gold sm), SiteFooter (gold md)
- Usado em todas as páginas do KV site.

**Shadcn equivalente:** `shadcn/button` — variantes mapeiam para `variant` do shadcn com estilo customizado via `className`.

---

### Card
**Path:** `components/core/Card.jsx`
**Propósito:** Container de superfície para agrupar conteúdo. Quatro variantes de profundidade/cor. Padding configurável.

**Variantes (prop `variant`):**
| Valor | Background | Sombra | Uso |
|---|---|---|---|
| `plain` (default) | `--surface-card` (branco quente) | Ring hairline dourado | Cards de depoimento, info leve |
| `raised` | `--surface-card` | `--shadow-md` | Cards flutuantes, quote sobre foto |
| `wine` | `--surface-wine` (vinho) | Sombra densa vinho | Seções de destaque, Fase 02 do método |
| `ink` | `--ink-800` (navy profundo) | Sombra densa ink | Seções anchor, Fase 01 do método |
| `outline` | Transparente | Borda dourada 1px | Cards sobre fundos coloridos |

**Props:**
| Prop | Tipo | Default | Descrição |
|---|---|---|---|
| `variant` | string | `'plain'` | Paleta de superfície |
| `pad` | string | `'md'` | `'sm'` (`--space-5`) / `'md'` (`--space-6`) / `'lg'` (`--space-8`) |

**Tokens consumidos:** `--surface-card`, `--surface-wine`, `--ink-800`, `--ink-100`, `--text-body`, `--text-on-wine`, `--shadow-md`, `--shadow-lg`, `--ring-hairline`, `--gold-500`, `--radius-md`, `--space-5/6/8`

**Uso nas páginas KV:**
- `home.jsx` — Hero (raised, quote flutuante), MetodoResumo (ink + wine, fases), Depoimentos (plain, grid 3)

**Shadcn equivalente:** `shadcn/card` — variantes de cor são extensões customizadas.

---

### Avatar
**Path:** `components/core/Avatar.jsx`
**Propósito:** Portrait circular de mentor ou cliente. Suporta imagem ou iniciais com fundo areia. Ring dourado opcional reforça premium.

**Props:**
| Prop | Tipo | Default | Descrição |
|---|---|---|---|
| `src` | string | — | URL da imagem |
| `alt` | string | `''` | Alt text |
| `initials` | string | — | Texto de fallback (ex: `'RL'`) |
| `size` | number | `56` | Diâmetro em px |
| `ring` | boolean | `true` | Exibir ring dourado |

**Estados:** Com imagem / Com iniciais (fallback)

**Acessibilidade:** `aria-label` via `alt` nas iniciais; `alt` na `<img>`.

**Tokens consumidos:** `--gold-500`, `--ivory`, `--sand`, `--wine-700`, `--font-display`, `--weight-semibold`, `--radius-circle`

**Uso nas páginas KV:**
- `home.jsx` — Depoimentos (initials, size 40, sem contexto de imagem real)

**Shadcn equivalente:** `shadcn/avatar` — ring dourado é customização adicional.

---

### Badge
**Path:** `components/core/Badge.jsx`
**Propósito:** Eyebrow/label em caixa-alta com tracking amplo. Precede headings para contextualizar seções. Opcionalmente prefixado por régua dourada (28px).

**Variantes (prop `tone`):**
| Valor | Cor | Uso |
|---|---|---|
| `gold` (default) | `--text-gold` | Sobre fundo claro padrão |
| `wine` | `--wine-600` | Ênfase primária sobre claro |
| `muted` | `--text-muted` | Subtítulo discreto |
| `onWine` | `--gold-300` | Sobre fundo vinho ou escuro |

**Props:**
| Prop | Tipo | Default | Descrição |
|---|---|---|---|
| `children` | node | — | Texto do badge |
| `tone` | string | `'gold'` | Paleta de cor |
| `rule` | boolean | `false` | Exibir régua dourada como prefixo |

**Tokens consumidos:** `--font-sans`, `--weight-medium`, `--text-2xs`, `--tracking-widest`, `--text-gold`, `--wine-600`, `--text-muted`, `--gold-300`, `--rule-gold`, `--rule-gold-on-wine`, `--space-3`

**Uso nas páginas KV:**
- `home.jsx` — Conceito (onWine, rule), Legado (onWine, rule), FinalCta (gold, sem rule)
- `site-kit.jsx` — `Eyebrow` helper (wrapper do Badge, tone gold/onWine conforme tone da seção)

**Shadcn equivalente:** `shadcn/badge` — variant e estilo inteiramente customizados.

---

## Componentes de Formulário (forms/)

### Input
**Path:** `components/forms/Input.jsx`
**Propósito:** Campo de texto premium. Dois estilos: caixa arredondada (box) e linha inferior (line). Focus com borda/ring dourado. Self-contained (estado de focus interno React).

**Variantes (prop `variant`):**
| Valor | Estilo | Uso |
|---|---|---|
| `box` (default) | Border 1px + radius-md + ring gold no focus | Formulários padrão |
| `line` | Só border-bottom, sem background | Contexto editorial/minimalista |

**Props:**
| Prop | Tipo | Default | Descrição |
|---|---|---|---|
| `variant` | string | `'box'` | Estilo visual |
| `invalid` | boolean | `false` | Estado de erro (borda danger) |
| `disabled` | boolean | `false` | Estado desabilitado (opacity 0.5) |
| `size` | string | `'md'` | `'sm'` / `'md'` / `'lg'` |

**Estados:** Default / Focus (borda + ring dourado) / Invalid (borda danger) / Disabled (opacity 0.5)

**Acessibilidade:** `aria-invalid` quando `invalid=true`; precisa de `<Field>` wrapper com `<label>` associado para acessibilidade completa.

**Tokens consumidos:** `--font-sans`, `--weight-regular`, `--text-strong`, `--white-warm`, `--nude`, `--gold-500`, `--gold-100`, `--danger`, `--radius-md`, `--duration-base`, `--ease-standard`, `--text-sm/base/md`

**Uso nas páginas KV:**
- `site-kit.jsx` — `SiteFooter` newsletter (input inline personalizado, não usa o componente Input diretamente)
- Disponível para formulário de aplicação e contato.

**Shadcn equivalente:** `shadcn/input` — estados de focus com token dourado são customização.

---

### Field
**Path:** `components/forms/Field.jsx`
**Propósito:** Wrapper de campo de formulário. Agrupa label (Mulish, caixa-alta, tracking wide), hint, controle (children) e mensagem de erro.

**Props:**
| Prop | Tipo | Default | Descrição |
|---|---|---|---|
| `label` | string | — | Texto do label |
| `hint` | string | — | Texto de ajuda |
| `error` | string | — | Mensagem de erro (prioridade sobre hint) |
| `required` | boolean | `false` | Asterisco dourado no label |
| `htmlFor` | string | — | ID do input associado |
| `children` | node | — | O controle de formulário |

**Estados:** Default / Com hint / Com erro / Required

**Acessibilidade:** `<label>` com `htmlFor` associado; erro em `<span>` textual (não só por cor).

**Tokens consumidos:** `--font-sans`, `--weight-medium`, `--text-2xs`, `--tracking-wide`, `--text-strong`, `--gold-600`, `--text-xs`, `--danger`, `--text-muted`, `--space-2`

**Uso nas páginas KV:**
- Disponível para `contato.jsx` e `mentoria.jsx` (formulário de aplicação).

**Shadcn equivalente:** `shadcn/form` (react-hook-form) ou `shadcn/label` + estrutura manual.

---

## Componentes Compartilhados do KV Site (shared/)

Fonte: `docs/elevem-se-kv-site/project/site/shared/site-kit.jsx`
Esses componentes compõem o shell de todas as páginas do site.

### SiteNav
**Propósito:** Barra de navegação sticky com glassmorphism (backdrop-filter blur 12px). Desktop: links horizontais + CTA. Mobile: hamburger + drawer animado.
**Tokens:** `--ivory`, `--border-hairline`, `--font-sans`, `--text-sm`, `--wine-700`, `--gold-500`, `--duration-fast`, `--ease-standard`, `--space-3`, `--space-7`
**Breakpoint:** min-width 1000px (JS `useMediaQuery`)
**Shadcn:** `shadcn/navigation-menu` (desktop) + Sheet/Drawer (mobile)

### SiteFooter
**Propósito:** Footer completo em fundo `--surface-wine-deep`. Colunas de links, newsletter inline, assinatura dos mentores e copyright.
**Tokens:** `--surface-wine-deep`, `--text-on-wine`, `--gold-100/200/300`, `--font-sans`, `--font-display`, `--space-2/3/4/5/7/8/9/10`, `--radius-pill`, `--wine-300`
**Shadcn:** nenhum equivalente direto — composição custom.

### MobileCTABar
**Propósito:** Barra flutuante fixa no bottom do mobile, surge após 560px de scroll e some perto do footer. CTA gold com label de urgência.
**Tokens:** `--surface-wine-deep`, `--gold-100`, `--radius-pill`, `--shadow-lg`, `--duration-slow/base`, `--ease-entrance/standard`
**Shadcn:** nenhum — padrão sticky mobile nativo.

### Reveal
**Propósito:** Wrapper de animação scroll-driven via IntersectionObserver. Adiciona classe `is-in` quando o elemento entra na viewport (threshold 0.12, rootMargin bottom -8%). Respeita `prefers-reduced-motion`.
**Props:** `as` (tag HTML), `delay` (0–N, mapeia para `data-delay`), `className`, `style`
**CSS:** classe `.elv-reveal` + `.is-in` em `site.css`.

### Eyebrow
**Propósito:** Helper wrapper — renderiza `<Badge>` com tone contextual (gold em fundo claro, onWine em fundo escuro) ou fallback `<span class="elv-eyebrow">`.

### Photo
**Propósito:** Container de foto com aspect-ratio configurável e frame opcional (classe `.elv-photo--frame`). `<img>` com `loading="lazy"` e `objectPosition` configurável.

### SectionHead
**Propósito:** Bloco composto de eyebrow + h2 + lead. Alinhamento esquerda/centro configurável. Padrão editorial repetido em todas as seções.
**Props:** `eyebrow`, `title`, `lead`, `align`, `tone`, `titleClass`, `max`

### Page
**Propósito:** Shell de página — skip link de acessibilidade + SiteNav + `<main>` + SiteFooter + MobileCTABar opcional. Bind automático do DS e Lucide icons.

---

## Utilitários CSS do DS

Fonte: `docs/elevem-se-design-system/project/styles.css`

Classes utilitárias documentadas no bundle (não componentes React mas usados extensivamente nos JSX):

| Classe | Função |
|---|---|
| `.elv-wrap` | Container centralizado com gutter e max-width |
| `.elv-wrap--md` | Container estreito (formulários, CTAs centralizados) |
| `.elv-sec` | Seção com padding vertical padrão |
| `.elv-sec--wine` | Seção com fundo `--surface-wine` |
| `.elv-sec--cream` | Seção com fundo `--cream` |
| `.elv-sec--page` | Seção com fundo de página (ivory) |
| `.elv-split` | Layout 2 colunas (texto + mídia) |
| `.elv-split--media-first` | Inverte ordem (mídia à esquerda) |
| `.elv-grid-2` | Grid 2 colunas |
| `.elv-grid-3` | Grid 3 colunas |
| `.elv-center` | Centralização horizontal (flex/text) |
| `.elv-h` | Heading serifado base |
| `.elv-h--wine` | Heading em cor vinho |
| `.elv-h--light` | Heading em cor clara (sobre escuro) |
| `.elv-lead` | Parágrafo de lead (maior) |
| `.elv-serif` | Font-family display (Spectral) |
| `.elv-sans` | Font-family sans (Mulish) |
| `.elv-muted` | Cor de texto muted |
| `.elv-on-wine` | Cor de texto sobre fundo vinho |
| `.elv-ital-gold` | Itálico em cor dourada |
| `.elv-ital-warm` | Itálico em cor warm |
| `.elv-mark-warm` | Destaque warm (background) |
| `.elv-lift` | Hover lift com sombra |
| `.elv-reveal` | Base para animação scroll |
| `.elv-tick` | Linha decorativa horizontal |
| `.elv-tick--wine` | Linha decorativa dourada sobre vinho |
| `.elv-skip` | Skip link de acessibilidade |
| `.elv-nav-link` | Link de navegação com estado ativo |
| `.elv-photo` | Container de foto com aspect-ratio |
| `.elv-photo--frame` | Foto com borda/frame dourado |
| `.elv-fluid-hero` | Título hero com clamp responsivo |
| `.elv-fluid-h1` | H1 fluido responsivo |
| `.elv-fluid-h2` | H2 fluido responsivo |
| `.elv-fluid-lead` | Lead fluido responsivo |
| `.elv-row` | Flex row com gap padrão |
| `.elv-eyebrow` | Eyebrow fallback (sem Badge) |

---

## Mapa de Shadcn/UI

| Componente DS | Shadcn primitivo | Observação |
|---|---|---|
| Button | `button` | Variantes customizadas; pill radius |
| Card | `card` | Variantes de cor adicionais (wine, ink) |
| Avatar | `avatar` | Ring dourado é extensão |
| Badge | `badge` | Totalmente resestilizado |
| Input | `input` | Focus ring dourado customizado |
| Field | `form` + `label` | Estrutura manual ou react-hook-form |
| Quote | — | Sem equivalente; `<figure>/<blockquote>` semântico |
| Logo | — | Proprietário — SVG inline |
| Signature | — | Proprietário |
| SiteNav | `navigation-menu` | Desktop; Sheet para mobile drawer |
| MobileCTABar | — | Pattern mobile custom |
| Reveal | — | IntersectionObserver wrapper |
