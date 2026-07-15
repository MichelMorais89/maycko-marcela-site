---
title: Gate Criteria V3 — Leveza Editorial + Nova IA
type: qa-gate
status: active
agent: sites-qa (Axilun)
created: 2026-07-09
updated: 2026-07-09
tags: [qa, gate, v3, criteria]
related:
  - [[project/v3-briefing]]
  - [[project/conceito-central-marca]]
---

# Gate Criteria V3 — Maycko e Marcela

Critérios formais de PASS / CONCERNS / FAIL para todas as entregas da iteração V3 (site-v3-leveza-editorial).

Autoridade exclusiva: **sites-qa (Axilun)**. Nenhum merge ocorre sem veredicto formal emitido por este agente ou WAIVED explícito por Michel Morais.

---

## Legenda de impacto

| Símbolo | Impacto | Efeito |
|---|---|---|
| FAIL | Bloqueante | Impede merge. Deve ser corrigido e resubmetido. |
| CONCERNS | Não-bloqueante | Pode fazer merge, mas plano de correção documentado obrigatório. |
| PASS | Aprovado | Sem restrições. |

---

## Bloco A — Visual + IA

Critérios que, se quebrados, resultam em **FAIL automático**.

### A1 — Dominância do bege / claros (FAIL se quebrar)

- Bege deve ser **75%+ do site** (decisão executiva Michel 2026-07-09).
- Contagem de áreas por página: fundos claros devem superar fundos escuros em proporção mínima de **3:1**.
- Vinho e Navy são exclusivos para: badges, ícones, linhas, hover, e no máximo 1-2 blocos escuros pontuais por página.
- Se qualquer página apresentar mais seções escuras do que claras: **FAIL**.

### A1b — Home tem no máx 2 blocos escuros, ambos estratégicos (FAIL se quebrar)

A Home V3 tem exatamente 5 blocos (Hero · Manifesto · Prova · Depoimentos · FinalCta). Os únicos blocos com fundo escuro permitidos são:

- **Hero** — abertura
- **FinalCta** — conversão

Se Manifesto, Prova ou Depoimentos tiverem fundo escuro: **FAIL**.

### A1c — Fotos: paleta alinhada ao fundo do bloco (CONCERNS se quebrar)

- Fotos com paleta bege / branco / madeira / dourado → somente em blocos de fundo claro.
- Fotos com dominância vinho ou azul frio → somente em blocos escuros pontuais (Hero, FinalCta).
- Foto de paleta escura em bloco claro: **CONCERNS**.

### A2 — Ritmo alternado de fundos (FAIL se quebrar)

O padrão de sequência de seções deve seguir:

```
claro → escuro → claro → claro-com-dourado → (repete)
```

- Dois fundos escuros consecutivos = **FAIL**.
- Dois fundos escuros sem nenhum fundo claro entre eles = **FAIL**.
- Variações permitidas (ex: claro → claro → escuro) desde que nunca haja dois escuros consecutivos.

### A3 — Zero escuro-em-escuro (FAIL se quebrar)

- Fundo escuro com card escuro: **FAIL** — sem exceção.
- Texto escuro sobre fundo escuro sem separação visual: **FAIL**.
- Regra canônica:
  - Fundo escuro → cards devem ser claros.
  - Cards escuros → fundo deve ser claro.

### A4 — Contraste alto entre fundo e cards (FAIL se quebrar)

- Em qualquer bloco (claro ou escuro), o card deve ter contraste WCAG AA mínimo (ratio ≥ 4.5:1 para texto normal, ≥ 3:1 para texto grande/bold).
- Verificar especialmente seções de depoimentos, cards de método, cards de conteúdo.
- Se qualquer par fundo/card não atingir 4.5:1 em texto de corpo: **FAIL**.

### A5 — Respiro entre seções (CONCERNS se quebrar)

- Espaçamento vertical entre seções: mínimo `py-16` (64px) em desktop — a alinhar com sites-ux via design tokens.
- Seções com padding inferior a `py-12` (48px) em mobile: **CONCERNS**.
- Sensação visual de "blocos colados" sem respiro: **CONCERNS** — registrar seção específica.

---

## Bloco B — Editorial

Critérios que, se quebrados, resultam em **FAIL automático**.

### B1 — Home tem exatamente 5 blocos (FAIL se quebrar)

Estrutura canônica da Home V3 (decisão executiva Michel 2026-07-09):

| Ordem | Bloco | Função |
|---|---|---|
| 1 | Hero | Headline + subhead + 1 CTA. Sem "caminho", sem breadcrumb de jornada. |
| 2 | Manifesto | O que o casal viverá aqui — absorve "evolução, não crise". |
| 3 | Prova | 3-4 números objetivos. Bloco curto. |
| 4 | Depoimentos | Social proof — voz do cliente. |
| 5 | FinalCta | Chamada para aplicação. |

- Qualquer bloco a mais (ex: MetodoResumo, Dores, EvolucaoSemCrise, Mentores, Conceito, Transformacao): **FAIL**.
- Qualquer bloco a menos: **FAIL**.
- Cada bloco com **máximo de 2 frases de corpo** (excluindo headline e CTA): **FAIL** se exceder.

### B2 — Nenhum bloco da Home repete tema de outro (FAIL se quebrar)

Diff conceitual obrigatório entre os 5 blocos da Home:

- Manifesto ↔ Prova: Manifesto = posicionamento/promessa. Prova = números/credibilidade. Se Manifesto tiver números ou Prova tiver promessa filosófica: **FAIL**.
- Prova ↔ Depoimentos: Prova = dados objetivos. Depoimentos = voz do cliente. Se Prova tiver aspas de cliente ou Depoimentos tiver números objetivos misturados à fala: **FAIL**.
- Hero ↔ Manifesto: Hero = despertar/gancho. Manifesto = posicionamento. Se repetirem o mesmo conceito com palavras diferentes: **FAIL**.

Diff entre páginas: Home vs Método vs Mentoria vs Biografia — cada página cobre território temático diferente. Sobreposição de propósito = **FAIL**.

### B3 — Cada bloco tem função única (FAIL se quebrar)

- Bloco que mistura apresentação com prova social: **FAIL**.
- CTA misturado com conteúdo informacional: **FAIL** (CTA fica sempre no fim, isolado).

### B4 — /metodo tem exatamente 3 blocos de fase + abertura + CTA (FAIL se quebrar)

Estrutura canônica de `/metodo` V3:

| Elemento | Aceito |
|---|---|
| Abertura curta | Sim (1 bloco, máx 2 frases) |
| Fase 1 — Elevação Individual | Sim |
| Fase 2 — Construção do Nós | Sim |
| Fase 3 — Legado em Casal | Sim |
| CTA final | Sim |

Blocos **não permitidos** como seção autônoma em `/metodo`:

- Filosofia / conceito geral
- Formato de encontros / dinâmicas
- Resultados detalhados / transformação
- Dores (absorver na abertura de cada fase, não como bloco próprio)
- Qualquer bloco que não seja abertura, fase ou CTA: **FAIL**.

Conteúdo valioso de Dores/Conceito pode ser fundido dentro da abertura de cada fase — isso é permitido.

---

## Bloco C — Copy

Critérios que, se quebrados, resultam em **FAIL automático** (vocabulário proibido) ou **CONCERNS** (vocabulário oficial ausente).

### C1 — Zero vocabulário proibido (FAIL se quebrar)

Lista de termos banidos. A presença de **qualquer um** no código-fonte ou conteúdo renderizado resulta em **FAIL**:

```
superar / superação
restaurar / restauração
salvar / salvação
crise
reconciliar / reconciliação
resiliência (no contexto de relacionamento em crise)
```

Verificação: `grep -ri "superar\|superação\|restaurar\|salvar\|crise\|reconciliar\|resiliência" src/`

### C2 — Vocabulário oficial presente (CONCERNS se ausente)

Termos que devem aparecer no site de forma natural e distribuída:

```
construção / construídos / construir
elevação / elevar / ELEVEM-SE
vida (no contexto de construção de vida)
casal
```

Se a Home não contiver nenhum destes termos: **CONCERNS**.

### C3 — Frase-conceito canônica presente (FAIL se ausente na Home)

> "Casamentos extraordinários não acontecem por sorte. Eles são construídos."

Esta frase (ou fragmento oficial "Casamentos extraordinários" / "Eles são construídos") deve aparecer no Hero ou em destaque na Home. Se ausente: **FAIL**.

### C4 — CTA direto no fim de cada página (CONCERNS se ausente)

- Cada página deve encerrar com um CTA claro e direto (aplicação, contato, próximo passo).
- CTA vago ou ausente: **CONCERNS**.
- CTA que use vocabulário proibido (C1): **FAIL**.

---

## Bloco D — Nova IA (Arquitetura de Informação)

Critérios de existência de rotas e redirecionamentos. **FAIL se ausente.**

### D1 — Rota /biografia existe (FAIL se ausente)

- `src/app/biografia/` deve existir com página funcional.
- Conteúdo mínimo: história do casal em profundidade, marcos objetivos.
- Proporção aproximada: ~40% texto / ~60% imagem (verificar visualmente).

### D2 — Rota /sobre removida ou redirecionando (FAIL se /sobre retornar 200 sem redirect)

- `/sobre` NÃO deve retornar 200 com conteúdo.
- Deve redirecionar 301 para `/biografia` ou retornar 404.
- Se `/sobre` retornar página ativa sem redirect: **FAIL**.

### D3 — Rota /conteudo existe com 3 seções (FAIL se ausente)

- `src/app/conteudo/` deve existir.
- Deve conter 3 seções ou abas: **Ebooks · Vídeos · Podcasts**.
- Cada item = card claro com CTA (baixar / assistir / ouvir).
- Se qualquer seção estiver faltando: **FAIL**.

### D4 — Rota /blog existe com placeholder (FAIL se ausente)

- `src/app/blog/` deve existir.
- Fase 1 aceita placeholder com curadoria de 3-5 tópicos/notícias de casal.
- Layout de blog premium com cards e respiro.
- Ausente = **FAIL**. Placeholder mal formatado = **CONCERNS**.

### D5 — Nav global com exatamente 7 abas na ordem correta (FAIL se quebrar)

Ordem canônica da navegação V3 (decisão executiva Michel 2026-07-09):

```
Home · Método · Mentoria · Biografia · Conteúdo · Blog · Contato
```

- Qualquer aba a mais ou a menos: **FAIL**.
- Qualquer aba fora de ordem: **FAIL**.
- Qualquer link apontando para `/sobre` sem redirect 301: **FAIL**.
- Link quebrado (404) em qualquer aba: **FAIL**.

Verificação: inspecionar o componente de Header/Nav e confirmar href de cada item contra a lista acima.

---

## Bloco E — Técnico

### E1 — Core Web Vitals não degradam vs V2 (CONCERNS se degradar)

Métricas de referência V2 (verificar commit `bb2af46`):

| Métrica | Meta V3 |
|---|---|
| LCP | ≤ 2.5s |
| CLS | ≤ 0.1 |
| FID / INP | ≤ 200ms |

Se qualquer métrica degradar em relação à V2: **CONCERNS** com número específico.

### E2 — Acessibilidade WCAG AA (CONCERNS se falhar)

- Contraste mínimo de texto: 4.5:1 (corpo), 3:1 (grande/bold) — conforme A4.
- Navegação por teclado funcional em todos os componentes interativos.
- Alt text em todas as imagens não-decorativas.
- Aria-labels em CTAs e botões sem texto descritivo.
- Falhas nestes pontos: **CONCERNS** com lista de elementos.

### E3 — Responsividade (CONCERNS se quebrar)

- Mobile (375px): sem overflow horizontal, texto legível sem zoom.
- Tablet (768px): layout adaptado, não simplesmente colapsado.
- Desktop (1280px+): ritmo de paleta e respiro preservados.
- Quebra em qualquer breakpoint: **CONCERNS** com screenshot descritivo.

### E4 — Cross-browser (CONCERNS se quebrar)

- Chrome (último), Safari (último), Firefox (último).
- Animações e motion devem ter fallback para `prefers-reduced-motion`.
- Quebra visual em qualquer browser listado: **CONCERNS**.

### E5 — Segurança básica (FAIL se quebrar)

- Zero dados sensíveis expostos em console, source ou network.
- Formulários com validação de input (contato, aplicação).
- Links externos com `rel="noopener noreferrer"`.
- Ausência de validação em form de contato: **FAIL**.

### E6 — Worktree isolado, porta sem colisão (FAIL se quebrar)

V3 roda em `_v3-dev/` (worktree separado), por decisão do Michel para comparação lado a lado com V2.

- V1 = `localhost:3001` (`_v1-preview/`)
- V2 = `localhost:3000` (raiz, branch atual)
- V3 = deve rodar em porta diferente de 3000 e 3001 (ex: `localhost:3002`)

Critérios:

- `_v3-dev/` deve ter seu próprio `package.json` com porta configurada (ou script `dev` com `-- -p 3002`): **FAIL** se não estiver explicitamente configurado.
- Rodando V2 e V3 em paralelo, nenhum conflito de porta: **FAIL** se colidir.
- Navegando V2 (localhost:3000) e V3 (localhost:3002) em abas paralelas, o Michel consegue avaliar a diferença sem confusão — o gate final inclui confirmação explícita do Michel ("diff visual V2→V3 aprovado"): **WAIVED** só com aprovação direta do Michel.

### E7 — Diff visual V2→V3 aprovado pelo Michel (gate final)

Este critério é o último a ser verificado, após todos os demais passarem.

- Michel deve comparar V2 (localhost:3000) e V3 (localhost:3002) lado a lado.
- Aprovação verbal/escrita do Michel = PASS deste critério.
- Sem aprovação do Michel: gate final não fecha, independentemente dos demais critérios.

---

## Checklist de verificação por story

Para cada story submetida a gate, verificar os seguintes pontos na ordem:

```
[ ] A1  — Bege 75%+ do site, proporção claros:escuros ≥ 3:1
[ ] A1b — Home: máx 2 blocos escuros (só Hero + FinalCta)
[ ] A1c — Fotos: paleta clara em blocos claros, escura só em blocos escuros
[ ] A2  — Nunca dois fundos escuros consecutivos
[ ] A3  — Zero escuro-em-escuro (fundo+card)
[ ] A4  — Contraste WCAG AA em todos os pares fundo/card
[ ] A5  — Respiro entre seções (py-16 desktop / py-12 mobile)
[ ] B1  — Home tem exatamente 5 blocos (Hero·Manifesto·Prova·Depoimentos·FinalCta), máx 2 frases/bloco
[ ] B2  — Nenhum bloco da Home repete tema de outro (diff Manifesto↔Prova↔Depoimentos)
[ ] B3  — Cada bloco tem função única
[ ] B4  — /metodo = apenas abertura + 3 fases + CTA (zero blocos autônomos extras)
[ ] C1  — Zero vocabulário proibido (grep obrigatório)
[ ] C2  — Vocabulário oficial presente
[ ] C3  — Frase-conceito canônica na Home
[ ] C4  — CTA direto no fim de cada página
[ ] D1  — /biografia existe e tem conteúdo mínimo
[ ] D2  — /sobre removida ou com redirect 301
[ ] D3  — /conteudo com 3 seções
[ ] D4  — /blog com placeholder
[ ] D5  — Nav global: exatamente 7 abas na ordem canônica, sem links quebrados
[ ] E1  — Core Web Vitals ≤ referência V2
[ ] E2  — WCAG AA: contraste, teclado, alt texts
[ ] E3  — Responsivo: 375px, 768px, 1280px
[ ] E4  — Cross-browser: Chrome, Safari, Firefox
[ ] E5  — Segurança: sem dados expostos, forms validados
[ ] E6  — Worktree _v3-dev/ rodando em porta sem colisão (≠ 3000, 3001)
[ ] E7  — Diff visual V2→V3 aprovado pelo Michel (gate final)
```

---

## Onde salvar veredictos

Cada veredicto = arquivo individual em:

```
docs/smart-memory/agents/qa/veredictos-v3/{id-story}.md
```

Exemplo: `veredictos-v3/3.1-home-refactor.md`

---

## Histórico de versões

| Data | Versão | Autor | Mudança |
|---|---|---|---|
| 2026-07-09 | 1.0 | Axilun (sites-qa) | Criação inicial |
| 2026-07-09 | 1.1 | Axilun (sites-qa) | Adicionados E6 (worktree + porta isolada) e E7 (diff visual aprovado pelo Michel) |
| 2026-07-09 | 1.2 | Axilun (sites-qa) | Decisões executivas Michel: A1b (Home máx 2 escuros), A1c (fotos/paleta), B1 (Home=5 blocos exatos), B2 (diff conceitual Manifesto↔Prova↔Depoimentos), B4 (/metodo só 3 fases+abertura+CTA), D5 (7 abas ordem canônica) |
