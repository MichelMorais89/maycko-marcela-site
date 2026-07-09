---
title: Shared Context
type: status-board
updated: 2026-07-08
tags: [ops]
---

# Status Board

O lead (team-os) atualiza este arquivo a cada mudança de estado dos teammates.

## Teammates ativos

| Teammate | Status | Task atual | Desde |
|---|---|---|---|
| sites-architect | ✅ idle | modules.md ✅ · architecture.md ✅ · stories 1.1/1.2 ✅ | 2026-07-08 |
| sites-analyst | ✅ idle | tech-stack.md ✅ · conventions.md ✅ | 2026-07-08 |
| sites-ux | ✅ idle | design-tokens.md ✅ · components.md ✅ | 2026-07-08 |
| sites-dev-alpha | 🚧 executando | Story 1.1 — Setup Next.js | 2026-07-08 |

## Decisão arquitetural resolvida
**Tailwind v4 com `@theme inline`** (alinhado analyst + architect). Tokens do DS entregues como CSS vars são consumidos pelo Tailwind sem duplicação.

## Próximo bloqueio esperado
Story 1.2 (HOME) só desbloqueia após 1.1 passar em `pnpm build`.

## Team ativo

**Nome:** site-discovery
**Objetivo:** Bootstrap — descoberta inicial do projeto do site ELEVEM-SE
**Início:** 2026-07-08

## Marco atual — V2 pronta pra apresentação

- **Branch:** `feature/2-3-vida-profundidade`
- **V2 commit:** `bb2af46` (2026-07-08) — HOME + /sobre + /metodo com reposicionamento "evolução"
- **V1 congelada:** tag `v1.0` / commit `c2a1f79`
- **Apresentação cliente:** prevista 2026-07-09
- **Story:** [[stories/done/2.8-v2-reposicionamento-evolucao]]

## Decisões ativas
<!-- Architect atualiza após cada ADR -->

## Blockers
<!-- Lead registra quando teammate está travado -->
