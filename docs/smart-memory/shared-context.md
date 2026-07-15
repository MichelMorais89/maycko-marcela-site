---
title: Shared Context
type: status-board
updated: 2026-07-09
tags: [ops]
---

# Status Board

O lead (team-os) atualiza este arquivo a cada mudança de estado dos teammates.

## Team ativo

**Nome:** site-v3-copy (superseded `site-v3-leveza-editorial`)
**Objetivo:** Refactor V3 aplicando copy completa + direção criativa "marca > mentoria" + assinatura canonizada
**Branch:** `feature/v3-copy` (V2 congelada em `feature/2-3-vida-profundidade`)
**Início:** 2026-07-14
**Briefing canônico:** [[project/v3-briefing]] (topo — DIREÇÃO CRIATIVA 2026-07-14)
**Copy canônica:** [[../copy-v3-elevem-se]]
**Frase-âncora:** "Que cada pessoa saia do site lembrando menos da mentoria e mais da marca ELEVEM-SE."

## Teammates ativos

| Teammate | Status | Task atual | Desde |
|---|---|---|---|
| dev-alpha | ✅ cascata concluída | 8 stories entregues (4.0/4.1/4.2/4.3/4.4/4.5/4.6/4.7/4.8), build ✅ | 2026-07-14 |
| qa | 🚧 gate final | Story 4.9 — QA cross-page + veredicto formal | 2026-07-14 |

## Stories concluídas neste team

| Story | Título | Concluída |
|---|---|---|
| 4.0 | Setup Branch V3 + Marca d'água ELEVEM-SE | 2026-07-14 (10 ACs, dev-alpha "Novael") |
| 4.1 | Home V3 — 7 blocos + "O que é elevar-se?" | 2026-07-14 (11/12 ACs — AC12 Lighthouse pendente dev server) |
| 4.5 | /conteudo/ebooks — Comunicação R$67 + Hubla | 2026-07-14 (11 ACs) |
| 4.8 | Footer mega-menu + Assinatura canonizada | 2026-07-14 (10 ACs) |
| 4.4 | /biografia — 7 blocos + fotos SOLO + redirect /sobre→/biografia | 2026-07-14 (11/12 ACs — AC12 Lighthouse pendente) |
| 4.3 | /mentoria V3 — página de venda 6 blocos + formulário + FAQ | 2026-07-14 (11/12 ACs — AC12 pendente) |
| 4.2 | /metodo V3 — 5 blocos + Quiz das 3 fases (localStorage + modal) | 2026-07-14 (16/17 ACs — AC17 pendente) |
| 4.6 | /conteudo/videos + /conteudo/podcasts | 2026-07-14 (14/15 ACs — AC14 build ✅) |
| 4.7 | /blog — 6 posts placeholder + grid + sidebar + SSG | 2026-07-14 (12/12 ACs ✅ — build ✅) |

## Princípio-guia da V3

> O site responde só o suficiente para o casal querer o próximo passo — vende pela confiança e pelo desejo, não pela explicação.

## Nova IA (Arquitetura de Informação)

- Home (refactor pesado — vira convite)
- Método (refactor — só aprofundar)
- Mentoria (refactor — vender experiência 12 meses)
- **Biografia** (rename `/sobre` → `/biografia` + expandir)
- **Conteúdo** 🆕 (ebooks + vídeos + podcasts unificados)
- **Blog** 🆕 (placeholder de curadoria)
- Contato (manter)

## Paleta V3 — nova hierarquia

- **Base:** bege / claros
- **Destaque:** vinho + navy (só pontos estratégicos)
- **Premium:** dourado (mantém)
- **Contraste:** 2ª cor escura só em pontos estratégicos
- **Ritmo:** claro → escuro → claro → claro-com-dourado (alternado)

## Decisões ativas

- **Sobre → Biografia** (opção A confirmada) — rota `/biografia`, `/sobre` some
- **Vídeos + Podcasts na mesma página `/conteudo`** — junto com Ebooks (3 seções ou abas)
- **Blog em fase placeholder** — curadoria até Maycko/Marcela produzirem próprio
- **Erika = referência de estrutura, NÃO de design** — puxar mapa de páginas, ignorar visual

## Blockers

_(lead registra quando teammate está travado)_

## Pendências de fim de ciclo

- **Abrir Chrome no site local (porta 3006) SÓ QUANDO TUDO ESTIVER PRONTO** — Michel confirmou (2026-07-14): não abrir revisão parcial. Aguardar 4.1–4.9 completo (todas as 9 stories restantes do ciclo). Comando final: `PORT=3006 pnpm dev` + abrir `http://localhost:3006` no Chrome.

## Pendências externas

- **Levantamento com Maycko e Marcela** — diferenciais da mentoria (workshops, encontros, comunidade, dinâmicas, recursos) para página `/mentoria`. Michel confirma quando tem esse conteúdo.
- **WhatsApp real dos mentores** — placeholder atual `5561999999999` no footer. Maycko/Marcela fornecem número real.
- **Shells `/privacidade` e `/termos`** — dev-alpha reportou links quebrados no footer. Criar shells simples depois de fechar as stories principais.
- **História pessoal Marcela + Maycko + encontro** — corpo dos blocos 2/3/4/6 da /biografia fica com placeholder até Michel enviar versão final.

## Histórico recente

### V2 — encerrada (2026-07-08)
- Branch: `feature/2-3-vida-profundidade`
- Commit V2: `bb2af46`
- V1 congelada: tag `v1.0` / commit `c2a1f79`
- Apresentação cliente: 2026-07-09 → V3 nasce do feedback pós-apresentação
- Story: [[stories/done/2.8-v2-reposicionamento-evolucao]]
