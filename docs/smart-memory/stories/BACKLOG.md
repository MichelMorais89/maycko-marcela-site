---
title: Story Backlog
type: backlog
updated: 2026-07-14
tags: [story, v3, backlog]
---

# Backlog de Stories

## Escopo do ciclo V3 (aprovado 2026-07-14)

> Refactor completo do site na branch `feature/v3-copy` (isolada de V2 em `feature/2-3-vida-profundidade`), aplicando:
> - Copy V3 completa aprovada em `docs/copy-v3-elevem-se.md`
> - Direção criativa "marca > mentoria" (`v3-briefing.md` topo, prioridade máxima)
> - Assinatura da marca canonizada: **"CASAMENTOS EXTRAORDINÁRIOS SÃO CONSTRUÍDOS."**
> - 9 páginas (Home · Método · Mentoria · Biografia · Ebooks · Vídeos · Podcasts · Blog · Contato) + Footer mega-menu
> - Elemento gráfico ELEVEM-SE como marca d'água em todos os Heros

## Stories ativas

| Story | Título | Complexidade | Status | Agente | Depende |
|---|---|---|---|---|---|
| [[backlog/4.0-setup-marca-dagua\|4.0]] | Setup Branch V3 + Elemento Gráfico ELEVEM-SE | M | 📋 backlog | sites-dev-alpha | — |
| [[backlog/4.1-home-7-blocos\|4.1]] | Home V3 — 7 Blocos com "O que é elevar-se?" | L | 📋 backlog | sites-dev-alpha | 4.0 |
| [[backlog/4.2-metodo-quiz\|4.2]] | /metodo V3 — 5 blocos visuais + Quiz das 3 fases | XL | 📋 backlog | sites-dev-alpha | 4.0, 4.1 |
| [[backlog/4.3-mentoria-experiencia\|4.3]] | /mentoria V3 — Página de venda focada em experiência | L | 📋 backlog | sites-dev-alpha | 4.0 |
| [[backlog/4.4-biografia-7-blocos\|4.4]] | /biografia — 7 Blocos com fotos solo Marcela + Maycko | L | 📋 backlog | sites-dev-alpha | 4.0 |
| [[backlog/4.5-conteudo-ebooks\|4.5]] | /conteudo/ebooks — Card único (Comunicação R$67 + Hubla) | S | 📋 backlog | sites-dev-alpha | 4.0 |
| [[backlog/4.6-conteudo-videos-podcasts\|4.6]] | /conteudo/videos + /conteudo/podcasts | M | 📋 backlog | sites-dev-alpha | 4.0 |
| [[backlog/4.7-blog-curadoria\|4.7]] | /blog — Placeholder editorial premium com curadoria | M | 📋 backlog | sites-dev-alpha | 4.0 |
| [[backlog/4.8-footer-mega-menu\|4.8]] | Footer mega-menu + Assinatura da marca canonizada | S | 📋 backlog | sites-dev-alpha | 4.0 |
| [[backlog/4.9-qa-smoke-test\|4.9]] | QA Final + Smoke Test Cross-Page V3 | M | 📋 backlog | sites-qa | 4.0 → 4.8 |

## Stories concluídas

| Story | Título | Status |
|---|---|---|
| [[done/1.1-setup-nextjs\|1.1]] | Setup do Projeto Next.js | ✅ done |
| [[done/1.2-implementar-home\|1.2]] | Implementar a HOME (V1) | ✅ done |
| [[done/2.8-v2-reposicionamento-evolucao\|2.8]] | V2 — Reposicionamento evolução | ✅ done |
| [[done/3.0-nav-v3-shells\|3.0]] | Navegação V3 + Shells das Rotas Novas | ✅ done |
| [[done/3.1-sistema-design-v3\|3.1]] | Sistema de Design V3 — Nova Paleta + Tokens | ✅ done |

## Stories arquivadas

Backlog 3.2 → 3.9 (versão anterior, pré-refinamentos criativos 2026-07-14) foi arquivado em `docs/smart-memory/archive/backlog-v3-antigo-2026-07-14/` — decisão do diretor (Michel) de fazer novo backlog alinhado com a copy V3 completa e a direção criativa "marca > mentoria".

## Ordem sugerida de dispatch

1. **4.0 (fundação obrigatória)** — sem a marca d'água como componente, nenhuma outra story entrega a direção "marca > mentoria"
2. **Paralelo após 4.0:** 4.1 (Home) · 4.3 (Mentoria) · 4.4 (Biografia) · 4.5 (Ebooks) · 4.6 (Vídeos/Podcasts) · 4.7 (Blog) · 4.8 (Footer)
3. **Após 4.1:** 4.2 (Método + Quiz) — depende do Manifesto de 4.1 estar consolidado para o teste "cross-page"
4. **Após tudo:** 4.9 (QA final) — gate formal com autoridade exclusiva sites-qa
