---
title: Mapa de Refactor V3 — Código Atual
type: dev-alpha
agent: Novael (sites-dev-alpha)
created: 2026-07-09
updated: 2026-07-09
tags: [v3, refactor, dark-on-dark, blocos-repetitivos, rotas-novas, worktree]
---

# Mapa de Refactor V3 — Código Atual

Análise completa de `app/*.tsx` e `components/home/*.tsx` + páginas internas.
Base: regras do [[project/v3-briefing]] — bege base, escuros estratégicos, zero escuro-em-escuro, cada bloco = uma função.

---

## ⚠️ Estratégia de Worktree — LEIA ANTES DE IMPLEMENTAR

| Worktree | Path | Branch | Porta | Status |
|---|---|---|---|---|
| V1 | `_v1-preview/` | `v1-*` | localhost:3001 | Congelado |
| V2 | `.` (working tree atual) | `feature/2-*` | localhost:3000 | **NÃO TOCAR** |
| V3 | `_v3-dev/` | branch nova | localhost:3002 | Aguardando criação pelo lead |

**Regra absoluta:** Nenhuma alteração de implementação V3 no working tree atual. O mapa abaixo descreve problemas no código V2 como **referência de leitura**. As correções acontecem nos paths equivalentes dentro de `_v3-dev/{mesmo-path}`.

Quando o worktree `_v3-dev/` for criado pelo lead, Novael começa a implementação lá.

---

## Tokens V3 — Mudanças práticas (fonte: sites-ux, 2026-07-09)

Tokens completos em [[project/design-tokens]] (coluna "Nota V3" nas tabelas de aliases).

**O que muda no código:**

| Token | V2 | V3 | Impacto |
|---|---|---|---|
| `--surface-page` | `--ivory` (#F4EEE2) | `--bege-200` (#EDE3CF) | Fundo base do site muda — toda seção sem fundo explícito fica bege-200 |
| `--surface-raised` | `--white-warm` (#FFFDFA) | `--ivory` (#F4EEE2) | Cards elevados passam a usar o antigo ivory |

**`tailwind.config` — adições necessárias na story 3.1:**
- Paleta `bege` (escalas 50–700) — nova no config
- Paleta `dark` (700, 900) — nova no config
- Remap do `--surface-page` para `bege-200`

Não implementar até story 3.1 ser despachada e worktree `_v3-dev/` estar pronto.

---

## 1. Home — `app/page.tsx` + `components/home/`

### 1.1 Sequência de fundos escuros consecutivos (problema crítico)

A Home V2 empilha blocos escuros em cadeia. Mapeamento da sequência atual:

| Ordem | Componente | Fundo | Problema V3 |
|---|---|---|---|
| 1 | `Hero` | `var(--surface-anchor)` (ink-900) | OK — hero escuro é estratégico |
| 2 | `ConnectiveBleed` | `surface-anchor → surface-anchor` | Conecta dois escuros |
| 3 | `Manifesto` | `var(--surface-anchor)` (ink-900) | **ESCURO CONSECUTIVO** após Hero |
| 4 | `ConnectiveBleed` | `surface-anchor → surface-anchor` | Conecta dois escuros |
| 5 | `Prova` | herda `elv-sec--prova` (escuro via CSS) | **ESCURO CONSECUTIVO** |
| 6 | `ConnectiveBleed` | `surface-anchor → surface-wine-deep` | Conecta dois escuros |
| 7 | `Dores` | `var(--surface-wine-deep)` (#4A1B29) | **ESCURO CONSECUTIVO** |
| 8 | `EvolucaoSemCrise` | `var(--surface-anchor)` (ink-900) | **ESCURO CONSECUTIVO** |
| 9 | `Conceito` | `var(--ink-900, #0a0709)` | **ESCURO CONSECUTIVO** |
| 10 | `MetodoResumo` | `var(--ink-900, #0d0a0d)` | **ESCURO CONSECUTIVO** |
| 11 | `Transformacao` | `var(--surface-wine-deep)` | **ESCURO CONSECUTIVO** |
| 12 | `Mentores` | `elv-sec--cream` (cream claro) | Primeiro claro desde Hero |
| 13 | `Depoimentos` | `elv-sec--page` (ivory) | Claro |
| 14 | `FinalCta` | `var(--surface-anchor)` + foto escura | Escuro estratégico OK |

**Diagnóstico:** Blocos 1–11 são todos escuros consecutivos (10 blocos seguidos sem respiro claro). V3 exige alternância.

**Sugestão de ritmo V3 para Home:**
1. Hero → escuro (estratégico, impacto)
2. Manifesto → **BEGE** (respirar após hero)
3. Prova → **CREAM** (números sobre claro)
4. Dores → escuro/vinho (bloco emocional intenso — mantém escuro mas isolado)
5. EvolucaoSemCrise → **BEGE** (reposicionamento leve)
6. Conceito → escuro (pilar filosófico — mantém ink)
7. MetodoResumo → **CREAM** (método em cards claros)
8. Transformacao → **BEGE** ou vinho (bloco de contraste antes-depois)
9. Mentores → cream (já está — mantém)
10. Depoimentos → ivory (já está — mantém)
11. FinalCta → escuro (CTA final impacto — mantém)

---

### 1.2 Escuro-em-escuro com cards escuros (problema crítico)

#### `Conceito` — `components/home/Conceito.tsx` linha 471–488

```
Fundo da seção: ink-900 (#0a0709) — escuro
Cards dos 3 pilares: background linear-gradient(180deg, rgba(28,20,24,0.55) → rgba(15,10,14,0.78)) — ESCURO sobre ESCURO
```

**Problema:** Cards escuros (semitransparentes mas ainda muito escuros) sobre fundo ink-900. Zero separação visual real.

**Correção V3:** Se seção for mantida escura → cards claros (white-warm com borda gold). Se seção for bege → cards em white-warm normais.

---

#### `MetodoResumo` — `components/home/MetodoResumo.tsx` linhas 168–190

```
Fundo da seção: ink-900 (#0d0a0d) — escuro
Cards de fase: linear-gradient(155deg, rgba(38,26,32,0.85) → rgba(22,14,18,0.95) → rgba(12,7,10,1)) — ESCURO sobre ESCURO
```

**Problema:** Cards praticamente pretos sobre fundo ink (preto). Nenhum contraste funcional.

**Correção V3 (opção A — seção clara):** Mover para fundo cream. Cards em white-warm com sombra sutil.
**Correção V3 (opção B — seção escura com cards claros):** Manter ink-900 mas cards em white-warm/ivory com texto grafite.

---

#### `AtosSystem` — `components/mentoria/AtosSystem.tsx` linhas 183–197

```
Fundo da seção: ink-900 (#0d0a0d) — escuro
Botões/cards dos atos: linear-gradient(155deg, rgba(38,26,32,0.90) → rgba(22,14,18,0.96) → rgba(12,7,10,1)) — ESCURO sobre ESCURO
```

**Problema:** Mesmo padrão — cards escuros sobre ink. Idêntico ao MetodoResumo.

**Correção V3:** Seção ink com cards claros OR seção cream com cards escuros — nunca escuro-em-escuro.

---

#### `Transformacao` — `components/home/Transformacao.tsx` linhas 130–136 e 188–195

```
Fundo da seção: surface-wine-deep (#4A1B29) — escuro
Card "antes": rgba(28,12,18,0.55) — semitransparente escuro sobre escuro vinho
Card "depois": rgba(50,25,15,0.65) — semitransparente escuro sobre escuro vinho
```

**Problema:** Dois cards semitransparentes escuros sobre fundo vinho-deep. Legibilidade baixa.

**Correção V3:** Mover seção para fundo claro (cream). Cards em white-warm com borda vinho (antes) e borda gold (depois). Mantém a metáfora antes/depois com contraste real.

---

#### `Investimento` — `app/mentoria/page.tsx` linhas 451–465

```
Fundo da seção: ink-900 (#0d0a0d)
Card principal: linear-gradient(155deg, rgba(38,26,32,0.92) → rgba(22,14,18,0.97) → rgba(12,7,10,1)) — ESCURO sobre ESCURO
```

**Problema:** Card quase preto sobre fundo ink. Padrão idêntico ao restante.

---

#### `FormAplicacao (hero)` — `app/mentoria/page.tsx` linhas 572–580

```
Fundo da seção: ink-900 (#0d0a0d)
```
Seção de formulário em fundo totalmente escuro — aceita se for a última seção (CTA). Mas vem imediatamente após a seção Investimento (também ink). **ESCURO CONSECUTIVO.**

---

### 1.3 Blocos repetitivos (conceito duplicado entre seções)

| Bloco | Conceito | Duplica com |
|---|---|---|
| `Manifesto` | "Casamento fica para depois" — ativação da dor | `Dores` — lista de reconhecimento da dor |
| `EvolucaoSemCrise` | "Não precisam de crise para evoluir" | `Conceito` — "O que significa Elevem-se? Decidir crescer antes que os problemas obriguem" |
| `MetodoResumo` (Home) | 3 fases com lista de itens | `AtosSystem` (Mentoria) — mesmas 3 fases com mesmos itens |
| `Transformacao` | "Saem de X / Passam a viver Y" | `Dores` — lista negativa + fecho positivo |

**Diretrizes V3:** Cada bloco = uma função. Recomendações:
- `EvolucaoSemCrise` pode ser absorvida pelo `Conceito` (são o mesmo argumento)
- `Manifesto` e `Dores` precisam ser distintos: `Manifesto` é diagnóstico racional (checklist), `Dores` é reconhecimento emocional
- `MetodoResumo` na Home V3 deve ser APENAS os 3 nomes das fases + 1 linha cada + CTA → corta toda a lista de itens (itens ficam só na página `/metodo`)

---

### 1.4 Texto copy problemático (vocabulário proibido)

#### `Depoimentos` — `components/home/Depoimentos.tsx` linha 47

```tsx
<SplitText delay={100}>Mais do que salvar relacionamentos.</SplitText>
```

**Problema:** "salvar" é vocabulário de crise — proibido pelo playbook. Deve ser construção/elevação.

**Correção:** "Mais do que casamentos que funcionam." ou "Mais do que estar juntos." — sem "salvar".

---

#### `FAQ` — `app/mentoria/page.tsx` linha 63

```tsx
a: 'Os primeiros deslocamentos costumam aparecer nas primeiras semanas — especialmente em comunicação e perspectiva. Os resultados estruturais se consolidam ao longo dos 12 meses.',
```

**Observação:** "deslocamentos" é incomum mas não proibido. OK.

---

## 2. Método — `app/metodo/page.tsx` + `components/metodo/`

### 2.1 Hero escuro

`HeroMetodo` — `components/metodo/HeroMetodo.tsx` linha 34:
```
background: 'var(--ink-900, #0a0709)'
```
Hero com vídeo + ink-900. OK para hero de página — escuro estratégico isolado.

### 2.2 Verificar sequência de seções

As 4 seções do Método (`HeroMetodo`, `FilosofiaMetodo`, `TimelineMetodo`, `ResultadoMetodo`) precisam ser verificadas individualmente para ritmo de cores — não lidas neste mapeamento, mas anotado como pendência.

---

## 3. Mentoria — `app/mentoria/page.tsx`

Sequência atual de seções e fundos:

| Seção | Fundo | Problema |
|---|---|---|
| Hero (AC2) | ink-900 + foto | OK — escuro estratégico |
| Vídeo (AC3) | `#000` preto | **ESCURO CONSECUTIVO** após hero |
| AtosSystem (AC4) | ink-900 | **ESCURO CONSECUTIVO** |
| Calculadora (AC5) | desconhecido | Não lido — verificar |
| Investimento (AC8) | ink-900 | Pode ser **ESCURO CONSECUTIVO** |
| FAQ (AC9) | `elv-sec--cream` | Primeiro claro |
| FormAplicacao (AC10) | ink-900 | **ESCURO CONSECUTIVO** após FAQ |

**Diagnóstico:** Mentoria tem 4+ seções escuras consecutivas no topo antes do primeiro claro (FAQ).

---

## 4. Sobre — `app/sobre/page.tsx`

Componentes: `SobreHero`, `SobreHistoria`, `SobreMarcela`, `SobreMaycko`, `SobrePrincipios`, `SobreVideo`, `SobreIntimidadePresenca`, `SobreCTA`.

`SobreHero` usa foto full-bleed + overlay vinho dominante — escuro estratégico para hero. Os demais componentes não foram lidos neste mapeamento.

---

## 5. Contato — `app/contato/page.tsx`

| Seção | Fundo | Problema |
|---|---|---|
| Hero | `surface-wine-deep` (#1c0810) | OK — hero escuro estratégico |
| Corpo (form + info) | `surface-anchor` (ink-900) | **ESCURO CONSECUTIVO** após hero vinho |

**Correção V3:** Corpo do Contato (form + links) deveria ser bege/cream. Form em white-warm sobre claro = contraste natural. Info lateral mantém padrão claro.

---

## 6. Rotas Novas — Decisões de Arquitetura

### 6.1 `/sobre` → `/biografia`

**Decisão confirmada:** `app/sobre/` vira `app/biografia/`.

**Opções de implementação:**

**Opção A — Rename da pasta:**
- Criar `app/biografia/page.tsx` com conteúdo expandido
- Criar `app/sobre/page.tsx` com redirect 301:
  ```tsx
  // app/sobre/page.tsx
  import { redirect } from 'next/navigation'
  export default function SobrePage() { redirect('/biografia') }
  ```
- Atualizar todos os `<Link href="/sobre">` para `/biografia`

**Opção B — Manter pasta `/sobre`, mudar só o conteúdo:**
- Mantém URL `/sobre` mas com conteúdo expandido de biografia
- Custo zero de SEO (sem redirect)
- Não segue nomenclatura do briefing

**Recomendação:** Opção A — o briefing especifica `/biografia`. Redirect 301 preserva SEO do histórico.

**Impacto:** `components/home/Mentores.tsx` linha 104 tem `<Link href="/sobre">` — atualizar para `/biografia`.

---

### 6.2 `/conteudo` (nova página)

**Estrutura planejada:** 1 página, 3 seções ou abas: Ebooks · Vídeos · Podcasts.

**Plano de rota:**
- `app/conteudo/page.tsx` — SSG
- Layout: fundo bege (V3), seções alternadas bege/cream
- Cards claros (white-warm) com CTA por item

**Componentes novos:**
- `components/conteudo/ConteudoHero.tsx`
- `components/conteudo/ConteudoGrid.tsx` (com tabs ou scroll-sections)

---

### 6.3 `/blog` e `/blog/[slug]` (nova página)

**Fase 1 (placeholder):** 3-5 artigos/notícias curados + layout de blog premium.

**Plano de rota:**
- `app/blog/page.tsx` — SSG (listagem)
- `app/blog/[slug]/page.tsx` — SSG com `generateStaticParams`

**Componentes novos:**
- `components/blog/BlogHero.tsx`
- `components/blog/BlogCard.tsx`
- `components/blog/BlogGrid.tsx`

**Arquitetura de dados Fase 1:** Arquivo estático `lib/blog-posts.ts` com array de posts hardcoded — sem CMS até decisão do diretor.

---

## 7. Resumo dos Problemas por Prioridade

### P0 — Bloqueantes V3 (impede ritmo editorial)

1. **Home: 10 blocos escuros consecutivos** — precisa de bege intercalado em pelo menos 4 blocos
2. **Conceito cards:** escuro-em-escuro (ink-900 + cards rgba escuros)
3. **MetodoResumo cards:** escuro-em-escuro (ink-900 + cards quase pretos)
4. **Transformacao cards:** escuro-em-escuro (wine-deep + cards semitransparentes escuros)

### P1 — Vocabulário proibido

5. **Depoimentos:** "salvar relacionamentos" na linha 47 — substituir

### P2 — Repetição de conceito

6. **EvolucaoSemCrise ↔ Conceito** — conceito duplicado, considerar merge
7. **MetodoResumo Home:** lista de itens das 3 fases — cortar para só os nomes + 1 linha (itens ficam no /metodo)

### P3 — Rotas e links

8. **Link `/sobre` em `Mentores.tsx` linha 104** — atualizar para `/biografia` quando rota for criada
9. **Criar redirect 301 de `/sobre` → `/biografia`** quando nova página estiver pronta

---

## 8. Notas para Implementação

- **Não implementar nada** até stories 3.1+ serem despachadas pela sites-architect
- **Tokens V3** serão atualizados pela sites-ux — aguardar `design-tokens.md` atualizado antes de refatorar CSS
- Este mapa serve para que a implementação comece sem discovery — zero tempo perdido quando as stories chegarem
- Verificar `components/metodo/FilosofiaMetodo.tsx`, `TimelineMetodo.tsx`, `ResultadoMetodo.tsx` + `components/mentoria/Calculadora.tsx` — não lidos neste mapeamento inicial
