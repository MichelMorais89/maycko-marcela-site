---
title: Wireframes V3 — Leveza Editorial
type: wireframes
status: revisado-v3-refinamentos
agent: sites-ux
created: 2026-07-09
updated: 2026-07-09
version: v3
tags: [wireframes, v3, home, metodo, mentoria, biografia, conteudo, blog]
related: [[project/v3-briefing]], [[project/design-tokens-v3]], [[project/conceito-central-marca]]
---

# Wireframes V3 — Leveza Editorial

> Baseado nas DECISÕES EXECUTIVAS do [[project/v3-briefing]] (Michel, 2026-07-09).
> **Revisado** com REFINAMENTOS DA APRESENTAÇÃO (Michel, 2026-07-09): bloco escuro SOMENTE onde há foto dominante.
> Notação de fundo: `[BEGE]` `[VINHO+FOTO]` `[GOLDEN]`
> Notação de foto: `📷 nome-do-arquivo.jpg` + `[paleta da foto]`
> `[VINHO]` sem foto NÃO existe mais. CTA final: bege + botão vinho.

---

## Catálogo de Fotos — Classificação por Paleta (revisado)

> **Regra V3 refinada:** foto escura só pode ser usada em bloco onde ela é DOMINANTE (foto de fundo com overlay) e justifica o fundo escuro. Foto escura como elemento lateral/secundário em bloco escuro = proibido. CTA final não precisa de bloco escuro — o botão vinho é o destaque suficiente.

| Arquivo | Paleta dominante | Uso em bege (lateral/destaque) | Uso em bloco escuro (foto DOMINANTE) | Bloco V3 atribuído |
|---|---|---|---|---|
| `hero-couple.jpg` | warm/neutral | não — tons médios | **sim — foto de fundo + overlay vinho** | Home Hero |
| `manifesto-couple-hands.jpg` | neutro/claro | **sim — paleta limpa, ideal** | não | Home Manifesto (lateral bege) |
| `legado-couple-white.jpg` | branco/claro | **sim — paleta ideal V3** | não | Biografia blocos alternados / Método |
| `mentores-couple-warm.jpg` | quente/bege | **sim — paleta ideal V3** | não | Biografia blocos alternados / Mentoria |
| `mentores-couple.jpg` | neutro | sim | não | Mentoria hero interno (lateral bege) |
| `mentor-marcela.jpg` | neutro/close | sim | não | Biografia retrato Marcela (lateral bege) |
| `mentor-maycko.jpg` | neutro/close | sim | não | Biografia retrato Maycko (lateral bege) |
| `metodo-marcela-kimono.jpg` | warm/dourado | **sim — paleta ideal V3** | não | Método abertura (lateral bege) |
| `prova-marcela-close.jpg` | neutro/close | sim (ornamento lateral) | não | Home Prova (ornamento, não dominante) |
| `conceito-marcela-perfil.jpg` | neutro/claro | sim | não | Mentoria / Método (lateral bege) |
| `depoimentos-marcela-tablet.jpg` | neutro/interior | sim | não | Home Depoimentos (ornamento opcional) |
| `sobre-hero-couple-black.jpg` | escuro/preto | **não** | **sim — foto de fundo + overlay** | Biografia Hero |
| `final-cta-couple-navy.jpg` | navy/escuro | **não** | **sim — foto de fundo + overlay** | Home FinalCta |
| `conceito-marcela-dark.jpg` | escuro | **não** | **sim — foto de fundo + overlay** | Hero alternativo (se necessário) |
| `historia-couple-navy.jpg` | navy/escuro | **não** | **REMOVIDO** de uso V3 — sem bloco escuro sem foto dominante na Biografia | Sem atribuição ativa |
| `dores-couple-bw.jpg` | P&B | **sim — P&B funciona sobre bege** | não recomendado sem overlay explícito | Método abertura (lateral bege) |
| `dores-couple-hug-bw.jpg` | P&B | **sim — P&B funciona sobre bege** | não recomendado | Método / reserva |
| `stock/casal-conversa-simples.jpg` | neutro/claro | **sim** | não | Mentoria experiência (lateral bege) |
| `stock/conquista-casal-praia.jpg` | claro/natural | **sim** | não | Mentoria / Biografia Fase 3 |
| `stock/familia-bebe-beijo.jpg` | warm/claro | **sim** | não | Biografia Legado / Mentoria |
| `stock/familia-campo-crianca.jpg` | claro/natural | **sim** | não | Biografia Legado / Mentoria |
| `stock/familia-pjs-crianca.jpg` | quente/interior | sim | não | Mentoria / Legado |
| `stock/casal-montanha-bw.jpg` | P&B | **sim — sobre bege** | não recomendado | Método abertura (alternativa lateral) |
| `stock/casal-sofa-laptop.jpg` | neutro/interior | sim | não | Conteúdo / Blog |
| `stock/casal-conversa-terapia.jpg` | neutro | sim | não | Mentoria / Método |
| `stock/casal-cozinha-tensao.jpg` | neutro/frio | não recomendada | não recomendada | Evitar — transmite tensão |

**Regra de uso atualizada:**
- Fotos claras/warm/P&B: livre uso como elemento lateral em blocos bege
- Fotos escuras (`-dark`, `-navy`, `-black`): exclusivas de Hero com foto de fundo + overlay. Nunca como elemento lateral.
- `historia-couple-navy.jpg`: sem bloco escuro designado na Biografia V3 — foto ficará em reserva até haver necessidade específica.

---

## Nav — Header (todas as páginas)

```
┌─────────────────────────────────────────────────────────────────────┐
│  [BEGE]                                                             │
│  ◆ ELEVEM-SE    Home · Método · Mentoria · Biografia · Conteúdo · Blog · Contato   [Aplicar →] │
└─────────────────────────────────────────────────────────────────────┘
```

- Logo: wordmark Spectral + ◆ dourado
- Links: Mulish medium, graphite-700, hover wine-600
- CTA: botão pill vinho, gold-border sutil
- Mobile: drawer lateral, mesma ordem
- Rota `/contato` é link direto — não abre dropdown

---

## HOME — 5 blocos

### Ritmo de fundos
```
[VINHO+FOTO]  → Bloco 1: Hero          ← escuro JUSTIFICADO: foto de fundo dominante
[BEGE]        → Bloco 2: Manifesto
[BEGE]        → Bloco 3: Prova
[BEGE-sunken] → Bloco 4: Depoimentos
[VINHO+FOTO]  → Bloco 5: FinalCta      ← escuro JUSTIFICADO: foto de fundo dominante
```

> 2 blocos escuros na Home — ambos justificados por foto dominante de fundo. Os 3 blocos centrais respiram em bege. Nenhum bloco escuro sem foto.

---

### Bloco 1 — HERO
**Fundo:** `[VINHO]` `--surface-wine` ou `[DARK]` com overlay  
**Foto:** `hero-couple.jpg` ou `sobre-hero-couple-black.jpg` — foto de fundo com overlay vinho 60%

```
┌─────────────────────────────────────────────────────┐
│  [VINHO + foto de fundo com overlay]                │
│                                                     │
│                                                     │
│   — — — — — — gold rule — — — — — —                │
│                                                     │
│   CASAMENTOS EXTRAORDINÁRIOS                        │  ← Spectral display, white-warm
│   NÃO ACONTECEM POR SORTE.                         │
│   ELES SÃO CONSTRUÍDOS.                             │
│                                                     │
│   Maycko e Marcela ajudam casais que querem         │  ← Mulish body, gold-300
│   elevar o relacionamento — antes que o             │
│   tempo decida por eles.                            │
│                                                     │
│   [  Quero elevar meu casamento →  ]               │  ← btn pill gold
│                                                     │
│   — — — — — — gold rule — — — — — —                │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Decisão editorial:** sem "caminho", sem breadcrumb de jornada, sem etapas numeradas. Headline = frase-conceito da marca. Subtexto = 2 linhas máx. Um único CTA.

---

### Bloco 2 — MANIFESTO
**Fundo:** `[BEGE]` `--surface-bege`  
**Foto:** `manifesto-couple-hands.jpg` — lateral direita, proporção 40/60

```
┌──────────────────────────────────────────────────────────────┐
│  [BEGE]                                                      │
│                                                              │
│  ┌────────────────────────┐  ┌────────────────────────────┐ │
│  │  TEXTO (40%)           │  │  📷 manifesto-couple-      │ │
│  │                        │  │     hands.jpg              │ │
│  │  eyebrow: A VERDADE    │  │  [paleta limpa/neutra]     │ │
│  │  QUE POUCOS CASAIS     │  │                            │ │
│  │  PERCEBEM              │  │  Foto: close de mãos do    │ │
│  │                        │  │  casal, tom warm/neutro.   │ │
│  │  O sucesso profissional│  │  Ideal para fundo bege.    │ │
│  │  recebe planejamento.  │  │                            │ │
│  │  O patrimônio recebe   │  │                            │ │
│  │  investimento.         │  │                            │ │
│  │  Os filhos recebem     │  │                            │ │
│  │  atenção.              │  │                            │ │
│  │                        │  │                            │ │
│  │  Mas muitos casamentos │  │                            │ │
│  │  são deixados para     │  │                            │ │
│  │  quando "sobrar        │  │                            │ │
│  │  tempo".               │  │                            │ │
│  │                        │  │                            │ │
│  │  ——— gold rule ———     │  │                            │ │
│  │                        │  │                            │ │
│  │  O casamento de vocês  │  │                            │ │
│  │  não precisa estar em  │  │                            │ │
│  │  crise para precisar   │  │                            │ │
│  │  evoluir.              │  │                            │ │
│  └────────────────────────┘  └────────────────────────────┘ │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Decisão editorial:** este bloco absorve EvolucaoSemCrise. O posicionamento "evolução, não crise" está na última frase do texto, não num bloco separado. Densidade máxima: 8 linhas de corpo.

---

### Bloco 3 — PROVA
**Fundo:** `[BEGE]` `--surface-bege`  
**Foto:** `prova-marcela-close.jpg` — ornamento lateral, não hero

```
┌──────────────────────────────────────────────────────────────┐
│  [BEGE]                                                      │
│                                                              │
│              eyebrow: EM NÚMEROS                             │
│                                                              │
│   ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌─────────┐ │
│   │  +XXX     │  │  +XX      │  │  XX anos  │  │  ★★★★★ │ │
│   │  casais   │  │  países   │  │  juntos   │  │  avalia- │ │
│   │  elevados │  │           │  │           │  │  ções   │ │
│   └───────────┘  └───────────┘  └───────────┘  └─────────┘ │
│                                                              │
│   ← números em Spectral 4xl/5xl vinho-600, label Mulish xs  │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Decisão editorial:** 4 números máximo. Sem texto explicativo abaixo de cada número — o número fala sozinho. Sem foto dominante aqui — o branco e os números são o respiro.

---

### Bloco 4 — DEPOIMENTOS
**Fundo:** `[BEGE-sunken]` `--surface-bege-sunken` (tom levemente diferente do bege base)  
**Foto:** `depoimentos-marcela-tablet.jpg` — background decorativo opcional

```
┌──────────────────────────────────────────────────────────────┐
│  [BEGE-sunken]                                               │
│                                                              │
│              eyebrow: O QUE CASAIS DIZEM                     │
│                                                              │
│  ┌─────────────────────────┐  ┌─────────────────────────┐   │
│  │  [card surface-raised]  │  │  [card surface-raised]  │   │
│  │                        │  │                          │   │
│  │  " [depoimento]        │  │  " [depoimento]          │   │
│  │                        │  │                          │   │
│  │  — Nome do casal        │  │  — Nome do casal         │   │
│  │  ★★★★★               │  │  ★★★★★                │   │
│  └─────────────────────────┘  └─────────────────────────┘   │
│                                                              │
│              [card terceiro — centralizado, menor]           │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Decisão editorial:** cards claros (`surface-raised`) sobre fundo bege-sunken. Máximo 3 depoimentos. Texto do depoimento: máx 3 linhas (sem cortar a emoção, mas sem romance). Nomes reais. Sem foto dos depoentes (por ora).

---

### Bloco 5 — FINAL CTA
**Fundo:** `[VINHO]` `--surface-wine`  
**Foto:** `final-cta-couple-navy.jpg` — background com overlay vinho 70%

```
┌──────────────────────────────────────────────────────────────┐
│  [VINHO + foto fundo navy/escuro com overlay]                │
│                                                              │
│         — — — — — gold rule — — — — —                       │
│                                                              │
│         O próximo passo                                      │  ← Spectral 3xl, white-warm
│         começa com uma decisão.                              │
│                                                              │
│         [  Quero aplicar para a mentoria →  ]               │  ← btn pill gold
│                                                              │
│         — — — — — gold rule — — — — —                       │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Decisão editorial:** 2 linhas. 1 CTA. Ponto final.

---

## MÉTODO — 3 fases + abertura

### Ritmo de fundos
```
[BEGE]        → Abertura (título + tagline + foto lateral P&B)
[BEGE]        → Grid das 3 Fases Interativas (cards InteractiveCard3D)
[BEGE]        → CTA                ← CONVERTIDO de [VINHO] — sem foto, fundo bege
```

> Página 100% clara. Nenhum bloco escuro — não há foto de fundo dominante em nenhum bloco. O tilt 3D nos cards é o elemento de sofisticação. CTA em bege com botão vinho.

> **Nota:** wireframe anterior tinha 3 blocos split foto/texto por fase. Substituído pelo grid de 3 placas interativas (spec em [[agents/ux/spec-3-fases-interativas]]). O bloco de abertura mantém split lateral com foto P&B.

---

### Abertura do Método
**Fundo:** `[BEGE]`  
**Foto:** `dores-couple-bw.jpg` ou `stock/casal-montanha-bw.jpg` — lateral, P&B gera contraste elegante sobre bege

```
┌──────────────────────────────────────────────────────────────┐
│  [BEGE]                                                      │
│                                                              │
│  ┌────────────────────────┐  ┌────────────────────────────┐ │
│  │  TEXTO (50%)           │  │  📷 dores-couple-bw.jpg    │ │
│  │                        │  │  [P&B — contraste elegante │ │
│  │  eyebrow: O MÉTODO     │  │   sobre fundo bege]        │ │
│  │                        │  │                            │ │
│  │  Há casamentos que     │  │                            │ │
│  │  funcionam. E há os    │  │                            │ │
│  │  que florescem.        │  │                            │ │
│  │                        │  │                            │ │
│  │  A diferença não é     │  │                            │ │
│  │  sorte. É um método.   │  │                            │ │
│  │                        │  │                            │ │
│  │  Três fases. Uma       │  │                            │ │
│  │  jornada intencional.  │  │                            │ │
│  └────────────────────────┘  └────────────────────────────┘ │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

### Fase 1 — Elevação Individual
**Fundo:** `[BEGE]`  
**Foto:** `metodo-marcela-kimono.jpg` — tons warm/dourado, ideal para bege

```
┌──────────────────────────────────────────────────────────────┐
│  [BEGE]                                                      │
│                                                              │
│  ┌────────────────────────────┐  ┌──────────────────────┐   │
│  │  📷 metodo-marcela-        │  │  FASE 1 (60% / 40%)  │   │
│  │     kimono.jpg             │  │                      │   │
│  │  [warm/dourado — ideal]    │  │  ◆ Fase 1            │   │
│  │                            │  │                      │   │
│  │                            │  │  Elevação            │   │
│  │                            │  │  Individual          │   │
│  │                            │  │                      │   │
│  │                            │  │  [corpo: o que       │   │
│  │                            │  │  acontece nesta      │   │
│  │                            │  │  fase, emoção,       │   │
│  │                            │  │  transformação —     │   │
│  │                            │  │  máx 6 linhas]       │   │
│  └────────────────────────────┘  └──────────────────────┘   │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

### Fase 2 — Construção do Nós
**Fundo:** `[BEGE-sunken]` (diferencia visualmente sem escurecer)  
**Foto:** `stock/casal-conversa-simples.jpg` ou `mentores-couple-warm.jpg`

```
┌──────────────────────────────────────────────────────────────┐
│  [BEGE-sunken]                                               │
│                                                              │
│  ┌──────────────────────┐  ┌────────────────────────────┐   │
│  │  FASE 2 (40% / 60%)  │  │  📷 mentores-couple-       │   │
│  │                      │  │     warm.jpg               │   │
│  │  ◆ Fase 2            │  │  [warm/bege — ideal]       │   │
│  │                      │  │                            │   │
│  │  Construção          │  │                            │   │
│  │  do Nós              │  │                            │   │
│  │                      │  │                            │   │
│  │  [corpo — máx        │  │                            │   │
│  │   6 linhas]          │  │                            │   │
│  │                      │  │                            │   │
│  └──────────────────────┘  └────────────────────────────┘   │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

### Fase 3 — Legado em Casal
**Fundo:** `[BEGE]`  
**Foto:** `legado-couple-white.jpg` ou `stock/conquista-casal-praia.jpg` — paleta clara, ideal V3

```
┌──────────────────────────────────────────────────────────────┐
│  [BEGE]                                                      │
│                                                              │
│  ┌────────────────────────────┐  ┌──────────────────────┐   │
│  │  📷 legado-couple-         │  │  FASE 3 (60% / 40%)  │   │
│  │     white.jpg              │  │                      │   │
│  │  [branco/claro — ideal V3] │  │  ◆ Fase 3            │   │
│  │                            │  │                      │   │
│  │                            │  │  Legado em Casal     │   │
│  │                            │  │                      │   │
│  │                            │  │  [corpo — máx        │   │
│  │                            │  │   6 linhas]          │   │
│  └────────────────────────────┘  └──────────────────────┘   │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

### CTA do Método
**Fundo:** `[BEGE]` — sem foto, sem bloco escuro. Botão vinho é o destaque suficiente.

```
┌──────────────────────────────────────────────────────────────┐
│  [BEGE]                                                      │
│                                                              │
│         — — — — gold rule — — — —                            │
│                                                              │
│         Três fases. Uma escolha.          ← Spectral 2xl graphite-900
│                                                              │
│         [  Conheça a mentoria →  ]        ← btn pill vinho  │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

> **Decisão V3:** CTA sem foto = fundo bege. O botão pill vinho carrega o peso visual. Bloco escuro sem foto viola a regra do refinamento.

---

## MENTORIA — Experiência 12 meses

### Ritmo de fundos
```
[BEGE]        → Hero interno           ← claro: foto lateral warm
[BEGE]        → O que é viver 12 meses ← claro: grid de cards
[BEGE-sunken] → Transformação          ← CONVERTIDO de [INK] — sem foto, fundo claro
[GOLDEN]      → Depoimento de resultado ← claro-dourado: pull quote
[BEGE]        → CTA / Aplicação        ← CONVERTIDO de [VINHO] — sem foto, fundo bege
```

> **Revisão aplicada:** `[INK]` (Transformação) removido — não havia foto dominante que o justificasse. `[VINHO]` (CTA) convertido para bege — sem foto. Michel confirmou: /mentoria deve ser base bege como as outras páginas.

---

### Hero Interno — Mentoria
**Fundo:** `[BEGE]`  
**Foto:** `conceito-marcela-perfil.jpg` ou `mentores-couple.jpg`

```
┌──────────────────────────────────────────────────────────────┐
│  [BEGE]                                                      │
│                                                              │
│  ┌──────────────────────┐  ┌────────────────────────────┐   │
│  │  TEXTO (50%)         │  │  📷 mentores-couple.jpg    │   │
│  │                      │  │  [neutro — ok para bege]   │   │
│  │  eyebrow: MENTORIA   │  │                            │   │
│  │  ELEVEM-SE           │  │                            │   │
│  │                      │  │                            │   │
│  │  Imagine como será   │  │                            │   │
│  │  o seu casamento     │  │                            │   │
│  │  daqui a 12 meses.   │  │                            │   │
│  │                      │  │                            │   │
│  │  Não o que vocês     │  │                            │   │
│  │  evitaram. O que     │  │                            │   │
│  │  vocês construíram.  │  │                            │   │
│  └──────────────────────┘  └────────────────────────────┘   │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

### Bloco — O que vocês vivem nos 12 meses
**Fundo:** `[BEGE]`

```
┌──────────────────────────────────────────────────────────────┐
│  [BEGE]                                                      │
│                                                              │
│         eyebrow: A EXPERIÊNCIA                               │
│                                                              │
│   ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│   │ [card]      │ │ [card]      │ │ [card]      │           │
│   │ ◆ Workshops │ │ ◆ Encontros │ │ ◆ Comunidade│           │
│   │ [placeholder│ │ [placeholder│ │ [placeholder│           │
│   │  até MM]    │ │  até MM]    │ │  até MM]    │           │
│   └─────────────┘ └─────────────┘ └─────────────┘           │
│                                                              │
│   ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│   │ [card]      │ │ [card]      │ │ [card]      │           │
│   │ ◆ Dinâmicas │ │ ◆ Recursos  │ │ ◆ Acomp.    │           │
│   │ [placeholder│ │ [placeholder│ │ [placeholder│           │
│   │  até MM]    │ │  até MM]    │ │  até MM]    │           │
│   └─────────────┘ └─────────────┘ └─────────────┘           │
│                                                              │
│   ⚠️ Conteúdo real pendente — levantamento com Maycko/Marcela│
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

### Bloco — Transformação (do Transformacao.tsx)
**Fundo:** `[BEGE-sunken]` — CONVERTIDO de `[INK]`. Sem foto dominante, portanto fundo claro.

```
┌──────────────────────────────────────────────────────────────┐
│  [BEGE-sunken]                                               │
│                                                              │
│         eyebrow: EM 12 MESES                                 │  ← gold-800, widest
│                                                              │
│  ┌──────────────────────────────────────────────────────┐    │
│  │  [card surface-raised — ivory sobre bege-sunken]     │    │
│  │  O que muda não é o casamento que vocês têm.         │    │  ← Spectral xl graphite-900
│  │  É o casal que vocês se tornam.                      │    │
│  └──────────────────────────────────────────────────────┘    │
│                                                              │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│   │ [card raised│  │ [card raised│  │ [card raised│         │
│   │  ◆ Clareza  │  │  ◆ Intenção │  │  ◆ Legado   │         │
│   │  [1-2 linhas│  │  [1-2 linhas│  │  [1-2 linhas│         │
│   │  graphite]  │  │  graphite]  │  │  graphite]  │         │
│   └─────────────┘  └─────────────┘  └─────────────┘         │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

> **Mudança:** ícone ◆ em wine-600 (não dourado) sobre fundo claro — contraste adequado. Eyebrow em gold-800. Bloco diferenciado do bege base pela sunken surface, sem precisar de fundo escuro.

---

### Bloco — Depoimento de resultado
**Fundo:** `[GOLDEN]` `--surface-golden`  
**Foto:** nenhuma — depoimento em destaque puro

```
┌──────────────────────────────────────────────────────────────┐
│  [GOLDEN]                                                    │
│                                                              │
│         — — — — gold rule — — — —                            │
│                                                              │
│         " [depoimento mais impactante — casal que            │
│           concluiu 12 meses. Máx 4 linhas.]                  │
│                                                              │
│         — Nome e nome do casal                               │
│                                                              │
│         — — — — gold rule — — — —                            │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

### CTA — Aplicação
**Fundo:** `[BEGE]` — CONVERTIDO de `[VINHO]`. Sem foto dominante, fundo bege. Botão vinho é o único destaque necessário.

```
┌──────────────────────────────────────────────────────────────┐
│  [BEGE]                                                      │
│                                                              │
│         — — — — gold rule — — — —                            │
│                                                              │
│         Vagas limitadas por ciclo.        ← Spectral 2xl graphite-900
│                                                              │
│         [  Quero aplicar para a mentoria →  ]  ← btn pill vinho
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## BIOGRAFIA (ex-/sobre)

### Ritmo de fundos
```
[VINHO+FOTO]  → Hero Biografia       ← escuro JUSTIFICADO: sobre-hero-couple-black foto de fundo
[BEGE]        → Bloco texto + foto (Marcela)
[BEGE-sunken] → Marcos objetivos
[BEGE]        → Bloco texto + foto (Maycko)
[BEGE]        → Bloco texto + foto (casal junto)
[GOLDEN]      → Pull quote do casal  ← claro-dourado, sem foto
[BEGE]        → CTA                  ← CONVERTIDO de [VINHO] — sem foto dominante
```

> **Revisão:** CTA da Biografia convertido de `[VINHO]` para `[BEGE]`. A `historia-couple-navy.jpg` (navy/escuro) não tem bloco designado — sem uso ativo em V3 (reserva). Proporção foto/texto: ~60% imagem / ~40% texto por bloco. Alternância lado da foto (dir/esq) a cada bloco.

---

### Hero — Biografia
**Fundo:** `[DARK]` ou `[VINHO]`  
**Foto:** `sobre-hero-couple-black.jpg` — paleta escura, ideal para bloco hero escuro

```
┌──────────────────────────────────────────────────────────────┐
│  [DARK + foto sobre-hero-couple-black com overlay 60%]      │
│                                                              │
│         eyebrow dourado: MAYCKO & MARCELA                    │
│                                                              │
│         Há mais de duas décadas                              │
│         construindo aquilo que hoje                          │
│         ensinam para outros casais.                          │
│                                                              │
│         — — — — gold rule — — — —                            │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

### Blocos alternados texto/foto (×3)

**Padrão A — foto à direita:**
```
┌──────────────────────────────────────────────────────────────┐
│  [BEGE]                                                      │
│                                                              │
│  ┌────────────────────────┐  ┌────────────────────────────┐ │
│  │  TEXTO (40%)           │  │  📷 foto-claro.jpg (60%)   │ │
│  │                        │  │  [paleta warm/branco]      │ │
│  │  [história/bloco]      │  │                            │ │
│  │  máx 8 linhas          │  │                            │ │
│  └────────────────────────┘  └────────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘
```

**Padrão B — foto à esquerda:**
```
┌──────────────────────────────────────────────────────────────┐
│  [BEGE-sunken ou BEGE]                                       │
│                                                              │
│  ┌────────────────────────────┐  ┌──────────────────────┐   │
│  │  📷 foto-claro.jpg (60%)   │  │  TEXTO (40%)         │   │
│  │  [paleta warm/branco]      │  │                      │   │
│  │                            │  │  [história/bloco]    │   │
│  │                            │  │  máx 8 linhas        │   │
│  └────────────────────────────┘  └──────────────────────┘   │
└──────────────────────────────────────────────────────────────┘
```

**Sequência recomendada de fotos:**
- Bloco Marcela: `mentor-marcela.jpg` (retrato, paleta neutra) → depois `conceito-marcela-perfil.jpg`
- Bloco Maycko: `mentor-maycko.jpg`
- Bloco casal: `mentores-couple-warm.jpg` ou `legado-couple-white.jpg`

---

### Marcos objetivos
**Fundo:** `[BEGE-sunken]`

```
┌──────────────────────────────────────────────────────────────┐
│  [BEGE-sunken]                                               │
│                                                              │
│         eyebrow: EM NÚMEROS                                  │
│                                                              │
│   ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌─────────┐ │
│   │  +XXX     │  │  +XX      │  │  XX anos  │  │  [marco]│ │
│   │  casais   │  │  [métrica]│  │  juntos   │  │         │ │
│   └───────────┘  └───────────┘  └───────────┘  └─────────┘ │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

### Pull quote
**Fundo:** `[GOLDEN]`

```
┌──────────────────────────────────────────────────────────────┐
│  [GOLDEN]                                                    │
│                                                              │
│         " Elevar-se é decidir crescer antes                  │
│           que os problemas obriguem vocês a mudar. "         │
│                                                              │
│         — Maycko & Marcela                                   │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

### CTA — Biografia
**Fundo:** `[BEGE]` — CONVERTIDO de `[VINHO]`. Sem foto dominante, fundo bege. Botão vinho é suficiente.

```
┌──────────────────────────────────────────────────────────────┐
│  [BEGE]                                                      │
│                                                              │
│         — — — — gold rule — — — —                            │
│                                                              │
│         Conheça a mentoria que eles construíram.  ← Spectral 2xl
│                                                              │
│         [  Ver a Mentoria →  ]    ← btn pill vinho           │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## CONTEÚDO — Ebooks · Vídeos · Podcasts

### Ritmo de fundos
```
[BEGE]   → Hero interno + abas de navegação
[BEGE]   → Grid de cards (conteúdo da aba ativa)
[BEGE]   → CTA                 ← CONVERTIDO de [VINHO] — sem foto, fundo bege
```

---

### Hero interno + Abas
**Fundo:** `[BEGE]`

```
┌──────────────────────────────────────────────────────────────┐
│  [BEGE]                                                      │
│                                                              │
│         eyebrow: CONTEÚDO ELEVEM-SE                          │
│                                                              │
│         Para aprender antes de entrar.                       │
│                                                              │
│   ┌──────────┐  ┌──────────┐  ┌──────────────────┐         │
│   │  Ebooks  │  │  Vídeos  │  │  Podcasts        │         │
│   └──────────┘  └──────────┘  └──────────────────┘         │
│   ←— tab ativa: gold-500 underline, text vinho              │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

### Grid de Cards (por aba)
**Fundo:** `[BEGE]`

```
┌──────────────────────────────────────────────────────────────┐
│  [BEGE]                                                      │
│                                                              │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────┐  │
│  │  [card raised]  │  │  [card raised]  │  │ [card raised│  │
│  │  [thumbnail]    │  │  [thumbnail]    │  │  [thumbnail]│  │
│  │  Título         │  │  Título         │  │  Título     │  │
│  │  1-2 linhas     │  │  1-2 linhas     │  │  1-2 linhas │  │
│  │  [Baixar →]     │  │  [Assistir →]   │  │  [Ouvir →]  │  │
│  └─────────────────┘  └─────────────────┘  └─────────────┘  │
│                                                              │
│  Grid: 3 colunas desktop / 1 coluna mobile                   │
│  Card: border hairline, radius-lg, shadow-sm                 │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

### CTA — Conteúdo
**Fundo:** `[BEGE]` — CONVERTIDO de `[VINHO]`. Sem foto. Botão vinho como único destaque.

```
┌──────────────────────────────────────────────────────────────┐
│  [BEGE]                                                      │
│                                                              │
│         — — — — gold rule — — — —                            │
│                                                              │
│         Pronto para dar o próximo passo?   ← Spectral 2xl   │
│                                                              │
│         [  Conheça a Mentoria →  ]   ← btn pill vinho        │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## BLOG — Curadoria (Placeholder Fase 1)

### Ritmo de fundos
```
[BEGE]   → Hero interno
[BEGE]   → Grid de cards de artigos
[BEGE]   → (sem escuro — página de leitura deve ser leve)
```

---

### Hero interno
**Fundo:** `[BEGE]`

```
┌──────────────────────────────────────────────────────────────┐
│  [BEGE]                                                      │
│                                                              │
│         eyebrow: BLOG ELEVEM-SE                              │
│                                                              │
│         Temas que importam para quem                         │
│         leva o casamento a sério.                            │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

### Grid de artigos
**Fundo:** `[BEGE]`

```
┌──────────────────────────────────────────────────────────────┐
│  [BEGE]                                                      │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐    │
│  │  [card raised — destaque, full-width ou 2/3]         │    │
│  │  [imagem 16:9]  Título do artigo em destaque         │    │
│  │  Subtítulo/resumo — 2 linhas máx    [Ler →]          │    │
│  └──────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────┐  │
│  │  [card raised]  │  │  [card raised]  │  │ [card raised│  │
│  │  [imagem 16:9]  │  │  [imagem 16:9]  │  │  [imagem]   │  │
│  │  Título         │  │  Título         │  │  Título     │  │
│  │  2 linhas max   │  │  2 linhas max   │  │  2 linhas   │  │
│  │  [Ler →]        │  │  [Ler →]        │  │  [Ler →]    │  │
│  └─────────────────┘  └─────────────────┘  └─────────────┘  │
│                                                              │
│  Fase 1: 3-5 artigos curados (links externos ou internos)    │
│  Grid: 3 colunas desktop / 1 mobile                          │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## CONTATO — Refinamento mínimo

### Ritmo de fundos
```
[BEGE]        → Hero + formulário + informações de contato (tudo numa seção)
[BEGE-sunken] → CTA alternativo (WhatsApp / redes)    ← CONVERTIDO de [VINHO] — sem foto
```

```
┌──────────────────────────────────────────────────────────────┐
│  [BEGE]                                                      │
│                                                              │
│         eyebrow: FALE COM A GENTE                            │
│                                                              │
│  ┌─────────────────────────┐  ┌─────────────────────────┐   │
│  │  FORMULÁRIO             │  │  INFORMAÇÕES            │   │
│  │  Nome                   │  │                         │   │
│  │  Email                  │  │  → WhatsApp             │   │
│  │  Mensagem               │  │  → Instagram            │   │
│  │  [Enviar →]             │  │  → Email direto         │   │
│  └─────────────────────────┘  └─────────────────────────┘   │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## Regras de aplicação — síntese para o dev (revisada)

| Regra | Valor |
|---|---|
| Fundo padrão de página | `--surface-bege` (`#EDE3CF`) |
| Fundo de card sobre bege | `--surface-raised` (`--ivory` `#F4EEE2`) |
| Bloco escuro: condição única | **Somente** quando há foto DOMINANTE de fundo (Hero, FinalCta Home) |
| Bloco escuro sem foto | **Proibido.** Converter para `--surface-bege-sunken` |
| CTA final sem foto | Fundo bege + botão pill vinho. Nunca fundo vinho sem foto. |
| Fotos claras/warm em blocos bege | Livre uso como elemento lateral |
| Fotos escuras (`-dark`, `-navy`, `-black`) | Exclusivas de blocos com foto de fundo + overlay 60-70% |
| Fotos P&B sobre bege | Permitidas como elemento lateral (contraste elegante) |
| Tipografia default | Sempre para fundo claro (grafite). Inversão só em bloco escuro justificado. |
| Blocos escuros totais na Home | 2 (Hero + FinalCta — ambos com foto de fundo) |
| Blocos escuros no Método | 0 (100% bege) |
| Blocos escuros na Mentoria | 0 (100% bege/sunken/golden) |
| Blocos escuros na Biografia | 1 (Hero — foto de fundo) |
| Blocos escuros em Conteúdo/Blog/Contato | 0 |
| Nav order | Home · Método · Mentoria · Biografia · Conteúdo · Blog · Contato |
| Shells necessários | `/biografia` `/conteudo` `/blog` (podem ser placeholder) |

### Mapa de blocos escuros — visão geral

| Página | Bloco escuro | Justificativa |
|---|---|---|
| Home | Hero | `hero-couple.jpg` foto de fundo + overlay vinho |
| Home | FinalCta | `final-cta-couple-navy.jpg` foto de fundo + overlay vinho |
| Biografia | Hero | `sobre-hero-couple-black.jpg` foto de fundo + overlay dark |
| **Todas as outras** | **nenhum** | **Sem foto dominante → fundo bege** |
| Espaço mínimo entre seções | `--space-12` (128px) |
| Densidade máxima Home | 4 linhas de corpo por bloco |
| Nav order | Home · Método · Mentoria · Biografia · Conteúdo · Blog · Contato |
| Shells necessários | `/biografia` `/conteudo` `/blog` (podem ser placeholder) |
