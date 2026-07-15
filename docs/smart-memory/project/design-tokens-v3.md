---
title: Design Tokens V3 — Leveza Editorial
type: reference
status: v3-draft
agent: sites-ux
created: 2026-07-09
updated: 2026-07-09
version: v3-refined
tags: [design-tokens, v3, colors, typography, spacing, tailwind, bege, ritmo-alternado, escuros-com-foto]
related: [[project/v3-briefing]], [[project/design-tokens]], [[agents/ux/wireframes-v3]]
---

# Design Tokens V3 — Leveza Editorial

> **Arquivo V3 exclusivo.** Aplica-se ao worktree `_v3-dev/`. Nunca sobrescreve [[project/design-tokens]] (V2).
> Criado por sites-ux (Velani) em 2026-07-09. Norte: [[project/v3-briefing]].
> Refinado em 2026-07-09: regra dos blocos escuros + sistema de tipografia para fundo claro.

**Princípio-guia:** Bege é base. Vinho/navy são destaque. Nunca predominam. **Bloco escuro só com foto dominante.**

---

## Sistema de Ritmo de Fundos

### Padrão canônico de alternância entre seções

```
Posição 1 → surface-bege       (fundo claro: bege base)
Posição 2 → surface-escura     (fundo escuro: vinho OU ink — nunca consecutivos entre si)
Posição 3 → surface-bege       (fundo claro)
Posição 4 → surface-golden     (fundo claro com acento dourado sutil)
Posição 5 → (repete do 1)
```

**Regra de contraste obrigatória:**
- Fundo escuro (`surface-wine` / `surface-anchor` / `surface-dark`) → cards com `surface-raised` ou `surface-bege`
- Fundo claro (bege / golden / ivory) → cards podem ser `surface-raised` ou `surface-wine` (destaque pontual)
- **Proibido:** fundo escuro + card escuro sem separação visual (zero escuro-em-escuro)

### Escala de "escuros" — o que conta como fundo escuro no ritmo

| Nível | Token | Hex | Uso no ritmo |
|---|---|---|---|
| Escuro primário | `--surface-wine` | `#6E2A36` | Seção de destaque de marca (vinho) |
| Escuro primário deep | `--surface-wine-deep` | `#4A1B29` | Hero escuro, seção de impacto máximo |
| Escuro âncora | `--surface-anchor` | `#16233A` | Seção de credibilidade (Maycko/ink) |
| Escuro âncora deep | `--surface-anchor-deep` | `#0D1422` | Noir máximo (raramente) |
| Escuro marrom | `--surface-dark` | `#2C1A12` | **2ª cor escura V3** — contraste quente alternativo |

> `--surface-dark` (`#2C1A12`) é marrom-escuro quente. Mantém coerência com a paleta avermelhada da marca; evita cinza frio que quebraria a identidade.

### Proporção de uso V3 (regra editorial)

- **≈75%** fundos claros (bege + ivory + white-warm) — respiro e leveza. Bege domina.
- **≈15%** vinho — apenas seções de destaque estratégico (CTA principal, hero se necessário, bloco de depoimento)
- **≈7%** navy/ink — âncora, credibilidade, contexto Maycko, rodapé
- **≈3%** dourado — accent, réguas, ícones, anéis, ornamentos. Nunca fundo de seção inteira.

**V3 vs V2:** V2 tinha ~40% de área escura. V3 reduz para ~22%. A diferença é sentida como elegância e respiro.

---

## Regra dos Blocos Escuros — Refinamento 2026-07-09

> Adicionado após refinamento de Michel em apresentação do V3.

**Regra única e inegociável:** bloco escuro SOMENTE onde há foto DOMINANTE que justifica o fundo escuro.

| Condição | Fundo |
|---|---|
| Bloco com foto de fundo (overlay 60-70%) | `--surface-wine-deep` ou `--surface-dark` |
| Bloco sem foto (qualquer conteúdo) | `--surface-bege` ou `--surface-bege-sunken` |
| CTA final sem foto | `--surface-bege` + botão `--action-primary` (vinho) |
| Pull quote | `--surface-golden` (claro-dourado) |

**Não existe:** fundo escuro + conteúdo textual/cards sem foto de fundo.

### Blocos escuros válidos em toda a V3

| Página | Bloco | Foto de fundo |
|---|---|---|
| Home | Hero | `hero-couple.jpg` |
| Home | FinalCta | `final-cta-couple-navy.jpg` |
| Biografia | Hero | `sobre-hero-couple-black.jpg` |

Todas as demais seções de todas as páginas: **fundo bege ou variação clara**.

---

## Tipografia — Sistema para Fundo Claro (padrão V3)

> Refinamento 2026-07-09: toda tipografia default assume fundo claro. Inversão só em blocos escuros com foto justificada.

### Default (fundo bege / claro)

| Papel | Token de cor | Hex | Notas |
|---|---|---|---|
| Heading principal (h1/display) | `--text-strong` | `#2E2A2B` (graphite-900) | Spectral, peso 400 ou 600 |
| Heading de seção (h2/h3) | `--text-strong` | `#2E2A2B` | Spectral semibold |
| Corpo de texto | `--text-body` | `#4D4748` (graphite-700) | Mulish regular |
| Texto auxiliar / muted | `--text-muted` | `#716A6B` (graphite-500) | Labels, metadata |
| Eyebrow | `--text-gold` | `#735422` (gold-800) | Mulish, widest tracking, caixa-alta |
| Link / ghost button | `--text-brand` | `#5C2230` (wine-700) | Underline ou hover |
| Ícone de destaque | `--gold-500` / `--wine-600` | `#C2A14D` / `#6E2A36` | ◆ ornamental ou funcional |
| Hint / placeholder | `--graphite-300` | `#A99FA0` | Decorativo, não crítico |

### Inversão (apenas em blocos escuros com foto de fundo)

| Papel | Token de cor | Hex | Notas |
|---|---|---|---|
| Heading principal | `--text-on-wine-strong` | `#FFFDFA` (white-warm) | Sobre `--surface-wine` |
| Corpo de texto | `--text-on-wine` | `#F6EFD8` (gold-100) | Sobre `--surface-wine` |
| Eyebrow sobre escuro | `--gold-300` | `#E0CB99` | Mulish, widest |
| Corpo sobre dark/marrom | `--text-on-dark` | `#F5EFE4` (bege-100) | Sobre `--surface-dark` |
| Heading sobre dark | `--text-on-dark-strong` | `#FFFDFA` (white-warm) | Sobre `--surface-dark` |

### Regra de botão CTA por contexto

| Contexto de fundo | Botão primário | Botão secundário |
|---|---|---|
| Fundo bege (default) | pill vinho (`--action-primary`) | ghost outline wine-700 |
| Fundo escuro com foto | pill gold (`--action-gold`) | ghost outline gold-300 |
| Fundo golden | pill vinho (`--action-primary`) | ghost outline wine-700 |

**Nunca:** botão vinho sobre fundo vinho (sem contraste). **Nunca:** botão bege sobre fundo bege.

---

## Sistema de Respiro

### Espaçamento vertical entre seções

| Contexto | Token | Valor | Regra |
|---|---|---|---|
| Seção standard (mínimo V3) | `--space-12` | 8rem / 128px | Espaço entre seções na Home e páginas internas |
| Seção editorial leve | `--space-11` | 6.5rem / 104px | Quando seção tem muito padding próprio |
| Padding interno hero/destaque | `--space-10` | 5rem / 80px | Padding interno do hero (extra no topo) |
| Entre blocos dentro de seção | `--space-8` | 3rem / 48px | Espaço entre subcomponentes na mesma seção |
| Entre elementos dentro de bloco | `--space-5` a `--space-6` | 24–32px | Espaço texto/ícone/CTA dentro de card |

> **V2 usava `--space-9` (64px) entre seções.** V3 aumenta para `--space-12` (128px) como mínimo. Dobrar o respiro = dobrar a elegância percebida.

### Regra de densidade de texto por bloco

| Tipo de bloco | Máx de linhas de texto | Ação se ultrapassar |
|---|---|---|
| Hero headline | 2 linhas (display) | Cortar — nunca quebra em 3 |
| Hero subtexto | 3 linhas (body md) | Cortar — o restante vai para página interna |
| Bloco de seção (Home) | 4 linhas (body) | Mover excesso para página interna correspondente |
| Card de feature | 2 linhas (body sm) | Cortar — card não é parágrafo |
| Bloco editorial longo (Biografia) | 8 linhas (body) | Permitido — é página de profundidade |
| Pull quote | 2–3 linhas | Nenhum pull quote vira parágrafo |

**Regra de decisão:** "O visitante precisa desse texto agora para dar o próximo passo?" Se não → vai para a página interna.

---

## Paleta de Cores — V3

### Bege — BASE PRINCIPAL V3 (novo token)

Leveza, elegância, respiro. Substitui ivory como cor dominante de fundo de página. Ivory passa a surface-raised (cards sobre bege).

| Token | Hex | Uso |
|---|---|---|
| `--bege-50` | `#FAF7F2` | Surface para hover ghost sobre bege |
| `--bege-100` | `#F5EFE4` | Surface-bege-light — seções mais arejadas |
| `--bege-200` | `#EDE3CF` | **`--surface-page` / `--surface-bege`** — fundo principal V3 |
| `--bege-300` | `#E0CDB6` | Surface-bege-sunken — seção dentro de seção bege |
| `--bege-400` | `#CCBA9E` | Borda em superfície bege |
| `--bege-500` | `#B8A485` | Bege médio — ornamentos, separadores |
| `--bege-600` | `#9A8A6E` | Texto âncora editorial sobre bege claro |
| `--bege-700` | `#7A6E57` | Texto muted em contexto bege |

### Marrom Escuro — 2ª cor de contraste V3 (novo token)

Alternativa ao vinho e ink para seções escuras. Mantém calor da paleta sem repetir vinho.

| Token | Hex | Uso |
|---|---|---|
| `--dark-900` | `#2C1A12` | **`--surface-dark`** — fundo escuro quente alternativo |
| `--dark-700` | `#3D2418` | **`--surface-dark-raised`** — card sobre surface-dark |

### Vinho / Bordô — Cor de destaque de marca (V3: pontual, não dominante)

Tokens idênticos à V2. Apenas a hierarquia de uso muda: reservado a CTAs e UMA seção escura por página.

| Token | Hex | Uso V3 |
|---|---|---|
| `--wine-950` | `#2A0E16` | Sombras densas, gradientes de fundo |
| `--wine-900` | `#3A1420` | Fundo dramático (modo noturno) |
| `--wine-800` | `#4A1B29` | Press state do primary button; `--surface-wine-deep` |
| `--wine-700` | `#5C2230` | Hover do primary button; texto de marca sobre claro |
| `--wine-600` | `#6E2A36` | **Primary brand** — action-primary, `--surface-wine` |
| `--wine-500` | `#874050` | Primary no modo noturno |
| `--wine-400` | `#A8636F` | Primary hover no modo noturno |
| `--wine-300` | `#C8939B` | Feedback de erro sutil |
| `--wine-200` | `#E6C9CC` | Background de erro muito leve |
| `--wine-100` | `#F3E2E0` | Tints leves |
| `--wine-50` | `#FAF2F0` | Background de hover ghost |

### Dourado / Gold — Accent premium

Tokens idênticos à V2. `gold-100` passa a ter papel de `--surface-golden` (posição 4 do ritmo).

| Token | Hex | Uso V3 |
|---|---|---|
| `--gold-800` | `#735422` | Texto dourado sobre claro (`--text-gold`) |
| `--gold-700` | `#946F26` | Hover de action-gold; warning |
| `--gold-600` | `#AC8838` | Action-gold; asterisco required |
| `--gold-500` | `#C2A14D` | **Principal** — rule-gold, focus-ring, borda secondary button, ring Avatar |
| `--gold-400` | `#D2B673` | Rule sobre vinho; balas de lista sobre escuro |
| `--gold-300` | `#E0CB99` | Texto eyebrow sobre vinho; assinatura no dark |
| `--gold-200` | `#EDDFBE` | Mensagem de sucesso no footer |
| `--gold-100` | `#F6EFD8` | **`--surface-golden`** — posição 4 do ritmo de fundos |
| `--gold-50` | `#FBF7EB` | Background muito leve |

### Azul-marinho / Ink — Âncora estrutural (Maycko)

Tokens idênticos à V2. V3: reservado a seções de credibilidade.

| Token | Hex | Uso V3 |
|---|---|---|
| `--ink-950` | `#0D1422` | `--surface-anchor-deep` — noir máximo |
| `--ink-900` | `#16233A` | `--surface-anchor` — fundo escuro ink/navy |
| `--ink-800` | `#21314F` | Card variant ink; assinatura Maycko |
| `--ink-700` | `#2C3F61` | Rule-anchor |
| `--ink-600` | `#3B4F74` | Anchor-soft |
| `--ink-500` | `#51668A` | Médio |
| `--ink-400` | `#7487A0` | Texto âncora dark; rule em card ink |
| `--ink-300` | `#A7B4C6` | Texto âncora modo noturno |
| `--ink-200` | `#CCD4DF` | Borda leve |
| `--ink-100` | `#E5EAF0` | Texto em card ink |

### Neutros Claros — papel redistribuído em V3

| Token | Hex | Uso V3 (mudou de V2) |
|---|---|---|
| `--ivory` | `#F4EEE2` | **Surface-raised** — cards elevados sobre fundo bege (era surface-page em V2) |
| `--cream` | `#EBE1CE` | Surface-sunken; seções sunken dentro de bege |
| `--sand` | `#D9C4A3` | Surface-fill; fundo de Avatar fallback |
| `--nude` | `#C9B492` | Border-hairline; borda default do Input |

### Grafite Suave — Texto e linhas (sem mudança)

| Token | Hex | Uso |
|---|---|---|
| `--graphite-900` | `#2E2A2B` | text-strong |
| `--graphite-700` | `#4D4748` | text-body |
| `--graphite-500` | `#716A6B` | text-muted |
| `--graphite-300` | `#A99FA0` | Border-soft |
| `--graphite-100` | `#DAD2D2` | Border-soft alternativo |

### Calor / Clay — Acento emocional (sem mudança)

| Token | Hex | Uso |
|---|---|---|
| `--warm-600` | `#8C5038` | text-warm |
| `--warm-500` | `#B47254` | accent-warm |
| `--warm-300` | `#D8A98E` | warm-line |
| `--warm-100` | `#F1DECE` | warm-fill, highlight-warm |

### Extremos (sem mudança)

| Token | Hex | Uso |
|---|---|---|
| `--white-warm` | `#FFFDFA` | Surface card máximo (modal); texto principal sobre escuro |
| `--black-warm` | `#1C1518` | Texto máximo (raramente usado direto) |

---

## Tokens Semânticos de Cor — V3 (aliases atualizados)

### Superfícies

| Token | Resolve para | Hex real | Delta vs V2 |
|---|---|---|---|
| `--surface-page` | `--bege-200` | `#EDE3CF` | **MUDOU** — era ivory `#F4EEE2` |
| `--surface-bege` | `--bege-200` | `#EDE3CF` | NOVO — alias explícito para ritmo |
| `--surface-bege-light` | `--bege-100` | `#F5EFE4` | NOVO |
| `--surface-bege-sunken` | `--bege-300` | `#E0CDB6` | NOVO |
| `--surface-raised` | `--ivory` | `#F4EEE2` | **MUDOU** — era white-warm |
| `--surface-card` | `--white-warm` | `#FFFDFA` | mantém — card máximo elevado |
| `--surface-sunken` | `--cream` | `#EBE1CE` | mantém |
| `--surface-fill` | `--sand` | `#D9C4A3` | mantém |
| `--surface-golden` | `--gold-100` | `#F6EFD8` | NOVO — posição 4 do ritmo |
| `--surface-wine` | `--wine-600` | `#6E2A36` | mantém |
| `--surface-wine-deep` | `--wine-800` | `#4A1B29` | mantém |
| `--surface-anchor` | `--ink-900` | `#16233A` | mantém |
| `--surface-anchor-deep` | `--ink-950` | `#0D1422` | mantém |
| `--surface-dark` | `--dark-900` | `#2C1A12` | NOVO — 2ª escura V3 |
| `--surface-dark-raised` | `--dark-700` | `#3D2418` | NOVO — card sobre surface-dark |

### Texto

| Token | Resolve para | Uso | Delta vs V2 |
|---|---|---|---|
| `--text-strong` | `--graphite-900` | Headings, labels | mantém |
| `--text-body` | `--graphite-700` | Parágrafos | mantém |
| `--text-muted` | `--graphite-500` | Hints, metadata | mantém |
| `--text-on-wine` | `--gold-100` | Corpo sobre fundo vinho | mantém |
| `--text-on-wine-strong` | `--white-warm` | Headings sobre fundo vinho | mantém |
| `--text-on-dark` | `--bege-100` | Corpo sobre surface-dark | NOVO |
| `--text-on-dark-strong` | `--white-warm` | Headings sobre surface-dark | NOVO |
| `--text-brand` | `--wine-700` | Links de marca, ghost button | mantém |
| `--text-gold` | `--gold-800` | Eyebrows, ornamentação | mantém |
| `--text-warm` | `--warm-600` | Destaque emocional | mantém |
| `--text-anchor` | `--ink-800` | Texto em contexto anchor | mantém |

### Bordas e Réguas (sem mudança)

| Token | Resolve para | Uso |
|---|---|---|
| `--border-hairline` | `--nude` | Bordas finas padrão |
| `--border-soft` | `--graphite-100` | Divisores suaves |
| `--rule-gold` | `--gold-500` | Régua decorativa sobre claro |
| `--rule-gold-on-wine` | `--gold-400` | Régua decorativa sobre vinho |
| `--rule-anchor` | `--ink-700` | Régua sobre ink |

### Ações (sem mudança)

| Token | Resolve para | Uso |
|---|---|---|
| `--action-primary` | `--wine-600` | Fundo button primary |
| `--action-primary-hover` | `--wine-700` | Hover button primary |
| `--action-primary-press` | `--wine-800` | Press button primary |
| `--action-gold` | `--gold-600` | Fundo button gold |
| `--action-gold-hover` | `--gold-700` | Hover button gold |
| `--focus-ring` | `--gold-500` | Outline de foco |

---

## Tipografia (sem mudança vs V2)

Famílias, escala, pesos, line-heights, tracking e papéis tipográficos permanecem idênticos à V2.
Ver [[project/design-tokens]] para a tabela completa.

---

## Spacing (tokens iguais, uso mínimo maior)

Tokens idênticos à V2. O que muda é o **uso mínimo entre seções**: V3 usa `--space-12` (128px) onde V2 usava `--space-9` (64px).
Ver [[project/design-tokens]] para a escala completa.

---

## Tailwind config — delta V3 (adicionar ao config existente)

```js
// tailwind.config.js — ADICIONAR ao extend.colors já existente no _v3-dev/
// Os demais tokens (wine, gold, ink, graphite, warm, ivory, etc.) permanecem iguais.
colors: {
  // NOVO V3: Bege (base principal de fundo)
  bege: {
    50:  '#FAF7F2',
    100: '#F5EFE4',
    200: '#EDE3CF', // --surface-page V3
    300: '#E0CDB6',
    400: '#CCBA9E',
    500: '#B8A485',
    600: '#9A8A6E',
    700: '#7A6E57',
  },
  // NOVO V3: Marrom escuro quente (2ª escura)
  dark: {
    700: '#3D2418', // --surface-dark-raised
    900: '#2C1A12', // --surface-dark
  },
},
```

---

## Proporção de uso de cores — V3 (regra editorial)

- **≈75%** fundos claros (bege + ivory + white-warm) — respiro e leveza. Bege domina.
- **≈15%** vinho — apenas seções de destaque estratégico (CTA principal, hero, bloco de depoimento)
- **≈7%** navy/ink — âncora, credibilidade, contexto Maycko, rodapé
- **≈3%** dourado — accent, réguas, ícones, anéis, ornamentos. Nunca fundo de seção inteira.

**Nunca usar dourado como cor de texto abaixo de ~18px bold** — contraste insuficiente, falha WCAG AA.

**V3 vs V2:** V2 tinha ~40% de área escura. V3 reduz para ~22%. A diferença é sentida como elegância e respiro.
