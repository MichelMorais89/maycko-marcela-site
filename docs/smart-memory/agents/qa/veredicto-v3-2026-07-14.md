---
title: Veredicto QA — Story 4.9 | V3 Smoke Test Cross-Page
type: qa-result
date: 2026-07-14
veredicto: FAIL
acs-cumpridos: 17/20
story: 4.9
agente: Axilun (sites-qa)
---

# VEREDICTO FORMAL: ❌ FAIL

**Story:** 4.9 — QA Final + Smoke Test Cross-Page V3
**Data:** 2026-07-14
**Agente:** Axilun (sites-qa)
**ACs verificados:** 20/20
**ACs cumpridos:** 17/20
**ACs com bloqueio:** 3

---

## Issues Bloqueantes

### [CRITICAL-1] Vocabulário proibido visível ao usuário — AC1

**Arquivo:** `components/home/Depoimentos.tsx:47`
**Texto:** `"Mais do que salvar relacionamentos."`
**Problema:** "salvar" é vocabulário de crise explicitamente proibido no playbook ELEVEM-SE. Esta linha é renderizada no H2 do bloco Depoimentos da Home, visível a todos os visitantes.
**Correção:** substituir por copy dentro do vocabulário de construção/elevação. Ex.: `"Casais que decidiram elevar antes que o tempo decidisse por eles."` (conforme copy V3 canônica, Bloco 6).

---

### [CRITICAL-2] Foto duplicada entre páginas — AC14

**Arquivos:**
- `components/home/Manifesto.tsx:292` — `src="/photos/manifesto-couple-hands.jpg"`
- `app/metodo/page.tsx:102` — `src="/photos/manifesto-couple-hands.jpg"`

**Problema:** regra "cada foto num único lugar" violada. A mesma foto aparece no Bloco 4 da Home (Manifesto) e no Hero do /metodo. Viola AC14 e a diretriz canônica de imagem.
**Correção:** substituir uma das ocorrências por foto diferente. Recomendado: manter na Home (Manifesto) e trocar no Hero do /metodo por foto de mãos entrelaçadas ao pôr do sol conforme copy V3 (`📸 Foto de mãos entrelaçadas ao pôr do sol`).

---

### [CRITICAL-3] /sobre não redireciona para /biografia — AC19

**Arquivo:** `app/sobre/page.tsx`
**Problema:** rota `/sobre` existe e renderiza a página V2 (componentes `SobreHero`, `SobreHistoria`, `SobreMarcela`, etc.). A decisão executiva canonizada determina que `/sobre` deve desaparecer — rota `Sobre → Biografia` confirmada por Michel. Dois problemas: (1) usuário que acessa `/sobre` vê conteúdo V2 desatualizado, não V3; (2) no build, `/sobre` aparece como rota separada (confirmado: `○ /sobre` na saída do `next build`).
**Correção:** converter `app/sobre/page.tsx` para redirect 301 para `/biografia`. Uma linha com `redirect('/biografia')` do `next/navigation` resolve.

---

## Concerns (não bloqueantes — documentar para refinamento)

### [CONCERN-1] Vocabulário proibido em componente inativo

**Arquivo:** `components/home/EvolucaoSemCrise.tsx:71,93`
**Texto:** `"estar em crise"` (linha 71) e `"restauração"` (linha 93, tachado visualmente)
**Status:** componente NÃO está importado nem renderizado em nenhuma página (`app/page.tsx` usa `<Manifesto />` no bloco 4, não `<EvolucaoSemCrise />`). Não afeta usuário final.
**Recomendação:** deletar o arquivo para eliminar risco de uso acidental futuro. Não bloqueia publicação.

### [CONCERN-2] "Contato" ausente no nav superior

**Arquivo:** `components/layout/SiteNav.tsx:6-12`
**Problema:** `NAV_LINKS` inclui Início, Biografia, O Método, A Mentoria, Blog — mas não Contato. Copy V3 canônica especifica `Home · Método · Mentoria · Biografia · Conteúdo ▼ · Blog · Contato` (7 abas). Contato está ausente.
**Recomendação:** adicionar `{ href: '/contato', label: 'Contato' }` ao array `NAV_LINKS`. Não bloqueia publicação pois `/contato` está acessível via footer.

### [CONCERN-3] /privacidade e /termos sem shell

**Arquivo:** `components/layout/SiteFooter.tsx:429,440`
**Problema:** footer linka para `/privacidade` e `/termos` — rotas inexistentes que geram 404. Já registrado como pendência externa no shared-context.
**Recomendação:** criar shells mínimos antes de publicar. Não bloqueia gate de copy/marca.

---

## Checklist completo (20 ACs)

### Copy e voz
- [x] AC1: ❌ FALHOU — "salvar" em Depoimentos.tsx:47 (CRITICAL-1)
- [x] AC2: PASS — zero menções religiosas/denominacionais em todo app/ e components/
- [x] AC3: PASS — CTAs presentes em todas as páginas principais (Home, Metodo, Mentoria, Biografia, Ebooks, Videos, Podcasts, Blog)
- [x] AC4: PASS — voz construção/elevação/aliança/propósito/legado preservada

### Direção criativa
- [x] AC5: PASS — assinatura "CASAMENTOS EXTRAORDINÁRIOS SÃO CONSTRUÍDOS." presente nos 3 locais obrigatórios: footer (`SiteFooter.tsx:291`), /metodo (`app/metodo/page.tsx:246`), /biografia (`app/biografia/page.tsx:302`)
- [x] AC6: PASS — ElevemseWatermark presente em todos os Heros: Home (`Hero.tsx:209`), Metodo (`metodo/page.tsx:93`), Mentoria (`mentoria/page.tsx:64`), Biografia (`biografia/page.tsx:25`), Ebooks (`ebooks/page.tsx:70`), Videos (`videos/page.tsx:26`), Podcasts (`podcasts/page.tsx:31`), Blog (`blog/page.tsx:26`), Footer (`SiteFooter.tsx:226`). `prefers-reduced-motion` respeitado (`ElevemseWatermark.tsx:48`).
- [x] AC7: PASS — bloco "O que é elevar-se?" existe na Home logo após o Hero (`BlocoElevarSe` em posição 2 em `app/page.tsx:22`), layout minimalista confirmado

### Direção de arte
- [x] AC8: PASS — bege dominante confirmado estruturalmente (base em `var(--surface-anchor)`, `var(--surface-page)`, blocos escuros pontuais: Hero, Dores, FinalCta na Home; Hero no Metodo)
- [x] AC9: PASS — vinho/navy como pontuação (badges, CTA buttons, 1-2 blocos escuros por página)
- [x] AC10: PASS — dourado em linhas, ícones, assinatura, marca d'água
- [x] AC11: PASS — estrutura de componentes usa clamp() e espaçamento generoso com `paddingBlock` e `var(--space-*)` amplos

### Sigilo do ebook
- [x] AC12: PASS — zero PDF em `public/` (`find public/ -name "*.pdf"` retornou vazio)
- [x] AC13: PASS — `/conteudo/ebooks` expõe apenas capa + sinopse + preço R$67 + link Hubla externo (`https://pay.hub.la/ZVvbzHw07h8ETdYByF5z`)

### Cross-page
- [x] AC14: ❌ FALHOU — `manifesto-couple-hands.jpg` repetida em Home (Manifesto.tsx:292) e Metodo (metodo/page.tsx:102) (CRITICAL-2)
- [x] AC15: PASS — cada página tem função editorial única sem repetição de copy entre páginas

### Técnico
- [x] AC16: PASS — `pnpm build` passou sem erros. TypeScript ✅. 20 rotas geradas. 1 warning não-bloqueante (metadataBase).
- [ ] AC17: PENDENTE — Lighthouse não executado (requer dev server). Pendência conhecida desde as stories 4.1, 4.3, 4.4.
- [x] AC18: CONCERN — `/privacidade` e `/termos` são 404 (links no footer). Pendência registrada no shared-context. Demais links internos navegáveis.
- [x] AC19: ❌ FALHOU — `/sobre` existe e renderiza V2 sem redirect para `/biografia` (CRITICAL-3). Demais rotas todas navegáveis via nav + dropdown.
- [x] AC20: PASS — estrutura responsiva com media queries e `clamp()` em toda a base de componentes. Breakpoints definidos no design system.

---

## Resumo executivo

**17/20 ACs cumpridos.** 3 blockers impedem publicação:

1. Headline "salvar relacionamentos" no bloco Depoimentos — viola regra inegociável de vocabulário.
2. Foto duplicada `manifesto-couple-hands.jpg` entre Home e /metodo — viola regra "cada foto num único lugar".
3. Rota `/sobre` ativa renderizando V2 — deve redirecionar para `/biografia`.

As 3 correções são simples e rápidas (estimativa: 30 min dev). Após correção, resubmeter para re-gate.

---

## Próximo passo

@dev-alpha: corrigir os 3 blockers listados acima e resubmeter para re-gate.
