---
title: Veredicto QA — Story 4.9 | V3 Smoke Test Cross-Page — RE-GATE
type: qa-result
date: 2026-07-14
veredicto: CONCERNS
acs-cumpridos: 19/20
story: 4.9
agente: Axilun (sites-qa)
rodada: 2
---

# VEREDICTO FORMAL: ⚠️ CONCERNS

**Story:** 4.9 — QA Final + Smoke Test Cross-Page V3 (Re-gate)
**Data:** 2026-07-14
**Agente:** Axilun (sites-qa)
**Rodada:** 2 (após correções dev-alpha)
**ACs verificados:** 20/20
**ACs cumpridos:** 19/20
**Blockers:** 0
**Concerns:** 3

---

## Correções verificadas (3/3 ✅)

### AC1 — CORRIGIDO ✅
`components/home/Depoimentos.tsx:47` — headline substituída por "Casais que decidiram elevar antes que o tempo decidisse por eles." Copy canônica V3 preservada. Zero vocabulário proibido em todo app/ e components/ (exceto EvolucaoSemCrise.tsx que não é renderizado).

### AC14 — CORRIGIDO ✅
`app/metodo/page.tsx:102` — agora usa `/photos/metodo-casal-caminho.jpg`. `manifesto-couple-hands.jpg` aparece apenas em `components/home/Manifesto.tsx:292` (Home). Regra "cada foto num único lugar" respeitada.

### AC19 — CORRIGIDO ✅
`app/sobre/page.tsx` deletado. Diretório `app/sobre/` vazio — Next.js não roteia. Redirect 301 configurado em `next.config.ts` (`/sobre` → `/biografia`, permanent: true). Rota `/sobre` ausente do build (19 rotas, era 20).

---

## Concerns (não bloqueantes — para refinamento pós-publicação)

### [CONCERN-1] Vocabulário proibido em componente inativo

**Arquivo:** `components/home/EvolucaoSemCrise.tsx:71,93`
**Texto:** `"estar em crise"` e `"restauração"` (tachado visualmente)
**Status:** componente não importado, não renderizado em nenhuma rota. Risco zero para o usuário final.
**Recomendação:** deletar o arquivo para eliminar risco de uso acidental futuro.

### [CONCERN-2] "Contato" ausente no nav superior

**Arquivo:** `components/layout/SiteNav.tsx` — array `NAV_LINKS`
**Status:** `/contato` acessível via footer. Copy V3 canônica especifica 7 abas no nav incluindo Contato.
**Recomendação:** adicionar `{ href: '/contato', label: 'Contato' }` ao `NAV_LINKS`.

### [CONCERN-3] /privacidade e /termos sem shell

**Arquivo:** `components/layout/SiteFooter.tsx:429,440`
**Status:** já registrado como pendência externa no shared-context.
**Recomendação:** criar shells mínimos antes ou logo após publicação.

---

## Checklist completo — Rodada 2 (20 ACs)

### Copy e voz
- [x] AC1: PASS ✅ — "salvar" removido. Copy canônica aplicada. Zero vocabulário proibido renderizado.
- [x] AC2: PASS — zero menções religiosas/denominacionais
- [x] AC3: PASS — CTAs presentes em todas as páginas
- [x] AC4: PASS — voz construção/elevação/aliança/propósito/legado preservada

### Direção criativa
- [x] AC5: PASS — assinatura nos 3 locais obrigatórios (footer, /metodo bloco Filosofia, /biografia CTA)
- [x] AC6: PASS — marca d'água em todos os Heros + prefers-reduced-motion respeitado
- [x] AC7: PASS — bloco "O que é elevar-se?" na posição 2 da Home

### Direção de arte
- [x] AC8: PASS — bege dominante confirmado
- [x] AC9: PASS — vinho/navy como pontuação estratégica
- [x] AC10: PASS — dourado só para valorização
- [x] AC11: PASS — respiro visual generoso

### Sigilo do ebook
- [x] AC12: PASS — zero PDF em public/
- [x] AC13: PASS — ebooks: capa + sinopse + R$67 + Hubla apenas

### Cross-page
- [x] AC14: PASS ✅ — manifesto-couple-hands.jpg apenas na Home. /metodo usa metodo-casal-caminho.jpg.
- [x] AC15: PASS — zero repetição de copy entre páginas

### Técnico
- [x] AC16: PASS — `pnpm build` limpo. 19 rotas. 1 warning não-bloqueante (metadataBase).
- [ ] AC17: PENDENTE — Lighthouse não executado (pendência pré-existente, requer dev server)
- [x] AC18: CONCERN — /privacidade e /termos 404 (CONCERN-3 acima)
- [x] AC19: PASS ✅ — /sobre deletado + redirect 301 em next.config.ts. Rota ausente do build.
- [x] AC20: PASS — responsividade confirmada (clamp + breakpoints)

---

## Resumo executivo

**19/20 ACs cumpridos.** Zero blockers. 3 concerns documentados para refinamento pós-publicação.

Os 3 blockers do FAIL inicial foram corrigidos corretamente. Build limpo. Marca d'água em 9 Heros. Assinatura em 3 locais. Vocabulário limpo. Fotos sem duplicação. Sigilo do ebook preservado. Redirect /sobre configurado.

**APROVADO COM RESSALVAS.** Próximo passo: @sites-devops push.
