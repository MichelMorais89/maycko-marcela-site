---
title: V3 Briefing — Leveza Editorial + Nova IA
type: brief
updated: 2026-07-09
tags: [v3, refactor, visual, editorial, arquitetura-informacao]
---

> 🎬 **DIREÇÃO CRIATIVA 2026-07-14 (feedback do diretor)** — este bloco tem PRIORIDADE MÁXIMA sobre qualquer outra parte deste documento.
>
> ## Frase-âncora
>
> **"Que cada pessoa saia do site lembrando menos da mentoria e mais da marca ELEVEM-SE."**
>
> ## Consequências práticas
>
> 1. **Estrutura e copy V3 estão travadas.** Não reescrever a copy. Não reestruturar páginas. Todo trabalho daqui pra frente é *refinamento de percepção de marca*.
> 2. **Marca > produto em toda decisão.** Se um elemento reforça a marca, mantém/amplia. Se só reforça o produto (mentoria de 12 meses), mantém mas não prioriza. Se enfraquece a marca, refaz.
> 3. **Nome ELEVEM-SE vira elemento gráfico** — marca d'água gigante em outline dourado ~5-8% opacidade, com movimento sutil (breathing/parallax/zoom discreto). Em todos os Heros. Nunca competir com headline. SVG, `prefers-reduced-motion` respeitado.
> 4. **Bloco novo "O que é elevar-se?"** entra logo após o Hero da Home (Home vira 7 blocos). Define o verbo publicamente. Serif elegante, muito respiro, sem foto dominante.
> 5. **Assinatura da marca — DECIDIDA (2026-07-14):** **"CASAMENTOS EXTRAORDINÁRIOS SÃO CONSTRUÍDOS."** — frase-filosofia repetida em footer, ebooks, podcast, e-mails, social media. Regras visuais e locais em `docs/copy-v3-elevem-se.md` (seção Assinatura da Marca).
> 6. **Direção de imagem** — sempre "vida real" (não "campanha"). Cenas: conversas naturais, momentos em família, bastidores dos encontros, workshops, casais interagindo, caminhadas, abraços espontâneos, olhares, mãos, ambientes elegantes/acolhedores.
> 7. **Direção de arte** — bege 75%+, azul/vinho como pontuação, dourado só para valorizar, linhas douradas discretas conectando seções, texturas de papel leves, muito respiro. Sensação-alvo: calma, sofisticação, exclusividade.
> 8. **Método visual** — em `/metodo`, reduzir bullets, usar linha do tempo horizontal, ícones dourados por eixo, conexões visuais entre as 3 fases. "O visitante vê a jornada, não lê sobre ela."
> 9. **Mentoria vende experiência** — em `/mentoria`, teste editorial de cada bloco: "eu consigo me ver vivendo isso?". Se não passa, o bloco descreve em vez de convidar.
> 10. **Humanização cirúrgica** — máx 1 frase emocional por página, cirurgicamente colocada em ponto onde a copy racional é mais forte. Zero emoção em Método/Biografia/Blog.
> 11. **Ebook em `/conteudo/ebooks` = produto pago com sigilo total.** Nenhum PDF público, nenhum preview, nenhuma amostra. Só capa + sinopse curta + botão de compra. Ver regra completa em [[../../copy-v3-elevem-se]] (Bloco 2 de Ebooks).
>
> Documento canônico com todos os detalhes: `docs/copy-v3-elevem-se.md` — seções "Direção Criativa", "Assinatura da Marca", "Elemento Gráfico da Marca", "Direção de Imagem", "Direção de Arte", "Humanização da Copy", "ELEVEM-SE como Filosofia".

---

> 📌 **DECISÕES EXECUTIVAS 2026-07-09 (Michel autorizou "decida por mim")** — este bloco tem prioridade sobre o texto abaixo em caso de conflito.
>
> ## Análise de duplicação da Home V2 (11 blocos)
>
> | Bloco V2 | Diagnóstico | Destino V3 |
> |---|---|---|
> | Hero | mantém, mas **retirar "caminho"** e enxugar copy | 🏠 Home |
> | Manifesto | posicionamento (ok) | 🏠 Home (absorve EvolucaoSemCrise) |
> | Prova | credibilidade objetiva | 🏠 Home |
> | Dores | vocabulário "dor" tensiona o playbook; entrada para o Método | 📄 /metodo (como abertura) |
> | EvolucaoSemCrise | **DUPLICA** posicionamento do Manifesto | ❌ fundir no Manifesto |
> | Conceito | **DUPLICA** filosofia do Método | 📄 /metodo (fundir) |
> | MetodoResumo | Michel pediu: só 3 pontos, sai da Home | 📄 /metodo (integral) |
> | Transformacao | resultado de 12 meses — é da Mentoria | 📄 /mentoria |
> | Mentores | biografia do casal | 📄 /biografia |
> | Depoimentos | social proof | 🏠 Home |
> | FinalCta | conversão | 🏠 Home |
>
> ## Home V3 = 5 blocos apenas
>
> 1. **Hero** — headline + subhead + 1 CTA. Sem "caminho", sem breadcrumb de jornada.
> 2. **Manifesto** — o que o casal viverá aqui (absorve o "evolução, não crise").
> 3. **Prova** — 3-4 números objetivos, bloco curto.
> 4. **Depoimentos** — social proof (voz do cliente).
> 5. **FinalCta** — chamada para aplicação.
>
> ## Método V3 = SÓ os 3 pontos
>
> 1. Fase 1 — Elevação Individual
> 2. Fase 2 — Construção do Nós
> 3. Fase 3 — Legado em Casal
>
> **Tirar de /metodo tudo o que não são essas 3 fases.** Filosofia, formato de encontros,
> resultados detalhados: fora. A página é as 3 fases + abertura curta + CTA. Se sobrar
> conteúdo valioso (Dores, Conceito), fundir na abertura de cada fase, não como bloco autônomo.
>
> ## Mentoria V3 = experiência 12 meses
>
> Absorve o bloco `Transformacao` (o que muda em 12 meses). Diferenciais reais (workshops,
> encontros, comunidade) ficam com placeholder até levantamento com Maycko/Marcela.
>
> ## Paleta V3 — regra final e não-negociável
>
> - **Bege é 75%+ do site.**
> - **Vinho + Navy** = APENAS pontos estratégicos: badges, ícones, linhas, hover, 1-2 blocos
>   escuros pontuais em toda a página (ex.: Hero + FinalCta na Home).
> - **Dourado** = premium sutil (mantém).
> - **Fotos claras > fotos escuras.** Priorizar fotos com paleta bege/branco/madeira/dourado.
>   Fotos com dominância vinho ou azul frio só em blocos escuros pontuais.
>
> ## Navegação V3 — abas
>
> Header nav (ordem final): **Home · Método · Mentoria · Biografia · Conteúdo · Blog · Contato**.
> As 3 novas (Biografia, Conteúdo, Blog) entram já com shells (placeholder) para que a
> IA fique visível e o restante do refactor aconteça com a navegação completa no ar.
>
> ## 📌 REFINAMENTOS DA APRESENTAÇÃO (2026-07-09)
>
> Após ver o V3 no Chrome, Michel refinou 5 pontos que passam a ser vinculantes:
>
> ### 1. "V3 toda clara, praticamente"
> A base bege é ainda mais dominante do que o previsto. Toda página começa com a suposição
> de fundo bege. Vinho e navy só entram como destaques (linhas, badges, ícones, hover, um
> bloco escuro pontual por página no máximo).
>
> ### 2. Blocos escuros — sugestão, não regra rígida (revisão 2026-07-14)
> Blocos escuros vinho/navy funcionam bem com foto dominante (Hero com foto, FinalCta com
> foto, Hero de Biografia com foto) — esse é o uso preferencial. Mas Michel autorizou
> explicitamente (2026-07-14) que blocos escuros também podem ser usados em **pontos que
> precisam chamar atenção** mesmo sem foto — a critério da narrativa da página.
> Continua valendo: bege dominante 75%+, escuros como pontuação estratégica.
>
> ### 3. Tipografia adaptada para fundo claro
> Todos os textos default são para fundo claro: `--text-primary` (grafite), links em vinho,
> ícones em dourado/vinho. Só onde há bloco escuro específico é que a tipografia inverte.
>
> ### 4. Mentoria = base bege igual às outras
> A /mentoria V3 NÃO é uma exceção escura. Mesma diretriz das demais: base bege dominante,
> vinho/navy como pontuação de destaque (com ou sem foto — ver item 2 revisado 2026-07-14).
> O fundo bege dominante nesta página é decisão explícita para reforçar a leveza da marca.
>
> ### 4-QUINQUIES. /metodo V3 = 5 blocos (revisão 2026-07-09)
>
> Michel enviou mais screenshots da V2 e detalhou a nova estrutura de /metodo. Total de **5 blocos**:
>
> **1. Hero "O Caminho"** (escuro/foto de mãos) — copy V2 literal, já detalhado no 4-QUATER
>
> **2. Filosofia por Trás** (fundo NAVY escuro / cards em BEGE para contraste) — restaurado da V2
> - Eyebrow dourado: `A FILOSOFIA POR TRÁS`
> - Headline: `TRÊS PILARES QUE SUSTENTAM TUDO O QUE CONSTRUÍMOS.` (parte "TUDO O QUE CONSTRUÍMOS" em itálico dourado)
> - Subhead: `O método Elevem-se não começa com o casamento. Começa com cada pessoa dentro dele.`
> - 3 cards em BEGE (não escuros como V2): PROPÓSITO (Saber para onde) · ALIANÇA (Duas histórias alinhadas) · [3º pilar a preservar da V2]
> - **Justificativa do bloco escuro:** Michel autorizou explicitamente. Fundo navy sólido sem foto — exceção autorizada à regra "escuros só com foto". Contraste cards-bege sobre fundo-navy é o que Michel quer visualmente.
>
> **3. Introdução das 3 Fases** (bege) — texto de transição preservado da V2
> - Headline: `aprendem primeiro a fortalecer cada indivíduo. Depois, o relacionamento.` (parte de texto maior que precede)
> - Subhead: `Porque pessoas emocionalmente saudáveis constroem relacionamentos saudáveis.`
>
> **4. 3 Fases Interativas (bege + cards 3D)** — copy detalhada preservada da V2
> - **Fase 1 — ELEVAÇÃO INDIVIDUAL** (número 01, eyebrow "PRIMEIRA FASE"):
>   - Subhead: "Antes de fortalecer o casamento, fortalecemos quem existe dentro dele."
>   - Bullets (+): Mentalidade · Inteligência emocional · Saúde e energia · Organização da rotina · Ressignificação de crenças · Identidade e propósito
>   - Rodapé itálico: "Porque relacionamentos saudáveis começam em pessoas [conforme V2 — completar]"
> - **Fase 2 — CONSTRUÇÃO DO NÓS** (número 02): copy da V2 preservada — dev-alpha extrai do componente `_v3-dev/components/metodo/*` da V2
> - **Fase 3 — LEGADO EM CASAL** (número 03): copy da V2 preservada — dev-alpha extrai do componente V2
> - Cada card usa o primitivo `InteractiveCard3D` — tilt 3D, hover reveal, respeitando `prefers-reduced-motion`
>
> **5. CTA final** (bege ou vinho como botão)
>
> ⚠️ Nota sobre "Doze meses. Três fases. Uma transformação" (bloco de transição que estava planejado): pode virar redundante agora. Sugestão: usar como subtítulo/eyebrow da seção das 3 Fases OU remover completamente. Michel decide.
>
> ### 4-QUATER. Hero "O Caminho" restaurado no início de /metodo V3 (revisão 2026-07-09)
>
> Michel enviou screenshot do Hero da /metodo V2 e pediu para restaurar na V3, "assim como estava no V2".
>
> **Estrutura preservada 1:1 conforme V2:**
> - Eyebrow dourado: `O CAMINHO`
> - Headline gigante serif: `DOZE MESES QUE CONSTROEM UM CASAMENTO PARA A VIDA TODA.` (parte "UM CASAMENTO PARA A VIDA TODA" em itálico dourado)
> - Subhead: `Um método estruturado em duas fases — primeiro a elevação de cada indivíduo, depois a construção do que vocês são juntos.`
> - CTAs: `QUERO APLICAR` (vinho, primário) + `VER OS 12 MESES` (outline dourado, secundário)
> - Scroll hint: `SCROLL` dourado abaixo
> - Fundo: foto grande de mãos entrelaçadas ao pôr do sol (foto dominante) — **bloco escuro justificado**
>
> **Nova estrutura da /metodo V3 = 4 blocos:**
> 1. **Hero "O Caminho" (escuro/foto)** — restaurado agora
> 2. O Método Completo (bege — transição)
> 3. 3 Fases Interativas (bege)
> 4. CTA final (bege)
>
> Regra do "no máximo 2 escuros" continua respeitada — /metodo tem só 1 bloco escuro (o Hero), justificado por foto dominante.
>
> **⚠️ Ambiguidade sinalizada:** o subhead da V2 fala "duas fases", enquanto o bloco "O Método Completo" (transição) usa "Três fases". Copy V2 mantida por ora — Michel decide alinhamento posteriormente.
>
> ### 4-TER. Manifesto V3 = EvolucaoSemCrise V2 em fundo claro (revisão 2026-07-09)
>
> Michel enviou screenshot do bloco `EvolucaoSemCrise` da V2 e disse: "deixa esse na v3 conforme estava na v2 porém com fundo claro, e muda as cores da tipografia".
>
> **Decisão executiva:** o Manifesto V3 na Home = o próprio EvolucaoSemCrise da V2, com estrutura/copy preservados 1:1, MAS com fundo bege claro e tipografia invertida. Isso substitui a versão "Manifesto arrochado" que havia sido proposta antes.
>
> **Estrutura preservada (V2 → V3):**
> - Eyebrow dourado: `A VERDADE QUE POUCOS CASAIS PERCEBEM`
> - Headline serif: `Tudo na vida de vocês recebe cuidado.`
> - Checklist 01/02/03 com checks: Empresa recebe planejamento / Patrimônio recebe investimento / Filhos recebem atenção
> - Divisor: `MAS...` em vinho itálico
> - Card destaque 04 (com X vermelho/vinho): `Casamento fica para "quando sobrar tempo".`
> - (Continuação abaixo: "Acreditamos que o relacionamento deve...")
> - Foto lateral do casal sorrindo
>
> **Mudanças V2 → V3:**
> - Fundo: navy escuro → **bege claro**
> - Headline: branca → **grafite escuro**
> - Checklist labels: cream → **grafite escuro**
> - Checklist ênfases itálicas: dourado → **dourado (mantém)**
> - Eyebrow: dourado (mantém)
> - "MAS..." em vinho (mantém — funciona em fundo claro)
> - X do card 04: vermelho → **vinho**
> - Foto lateral: pode ficar dentro de card com sombra suave, contorno bege, sem ocupar 100% da altura (respira em fundo bege)
>
> **Componente:** aproveitar `_v3-dev/components/home/EvolucaoSemCrise.tsx` (que NÃO deletamos) — apenas ajustar as classes de cor. A copy fica igual.
>
> **⚠️ Impacto na 3.2 já implementada:** o "Manifesto arrochado" que dev-alpha implementou (com copy "Casamentos não perdem força no conflito...") sai. É substituído por `EvolucaoSemCrise` restaurado em fundo claro. Isso não é retrabalho grande — é troca de componente.
>
> ### 4-BIS. Bloco Dores volta para a Home (revisão 2026-07-09)
>
> Michel apresentou screenshot da V2 e pediu que o bloco `Dores` volte à Home V3 exatamente como estava na V2 (fundo escuro + foto grande dominante do casal + copy "VOCÊS SE AMAM. MAS O RELACIONAMENTO ESTÁ APENAS FUNCIONANDO." + bullets).
>
> **Reversão:** Dores NÃO migra mais para /metodo. Fica na Home.
>
> **Nova estrutura da Home V3 = 6 blocos** (era 5):
> 1. Hero (escuro + foto)
> 2. **Dores (escuro + foto do casal — bloco escuro justificado)**
> 3. Manifesto (bege) — hook "A verdade que poucos casais percebem"
> 4. Prova (cream)
> 5. Depoimentos (ivory)
> 6. FinalCta (escuro + foto)
>
> **Impacto em /metodo:** o Hero Emocional criado (copy "Talvez vocês reconheçam") sai. /metodo passa a ser: O Método Completo → 3 Fases Interativas → CTA. Sem duplicação.
>
> **Regra "no máx 2 blocos escuros":** Michel autorizou explicitamente 3 blocos escuros na Home (Hero + Dores + FinalCta) pois todos têm foto dominante. Escopo autorizado, não é violação de gate.
>
> ### 5. Separação editorial nítida entre as 3 páginas centrais
>
> | Página | Papel único | O que NÃO faz |
> |---|---|---|
> | **/biografia** | Fala sobre ELES (casal, história, marcos, quem são) | Não vende, não explica método |
> | **/metodo** | Explica o COMO enxuto (3 fases + CTA) | Não fala sobre eles, não vende preço |
> | **/mentoria** | Página de VENDA — leva as pessoas a comprarem | Não é sobre eles, não é o método detalhado |
>
> Zero repetição entre essas 3. Cada página tem função única e não invade a das outras.


# V3 Briefing — Leveza Editorial + Nova IA

Documento canônico da iteração V3. Sucede [[v2-diretrizes]].

## 🎯 Princípio-guia (norte de tudo)

> **O site não deve responder todas as perguntas. Ele deve responder apenas o suficiente para que o casal queira dar o próximo passo.**
>
> Esse tipo de mentoria é vendido pela confiança e pelo desejo de viver uma
> transformação. Quando a Home tenta explicar tudo, ela perde impacto.
> Navegação leve, sem repetição, com espaço para o conteúdo "respirar" transmite
> exclusividade e valor.

**Regra editorial:** apresentar primeiro, aprofundar depois. A Home desperta interesse. As páginas internas entregam profundidade.

---

## 🎨 Paleta — nova hierarquia

| Cor | Papel V2 | Papel V3 |
|---|---|---|
| Bege / claros | Auxiliar | **BASE PRINCIPAL** |
| Vinho | Predominante | Cor de destaque (pontos estratégicos) |
| Navy | Predominante | Cor de destaque (pontos estratégicos) |
| Dourado | Detalhe | Reforço premium (mantém) |
| 2ª cor escura | — | Só em pontos estratégicos de contraste |

**Problema V2:** áreas escuras em excesso, blocos consecutivos escuros deixam
navegação pesada.

**Solução V3 — ritmo alternado:**
1. Fundo claro (bege)
2. Fundo escuro
3. Fundo claro
4. Fundo claro com detalhes dourados
5. (repete o padrão)

---

## 🧱 Contraste dos blocos

Hoje há seções com fundo escuro + cards escuros + textos escuros → tudo pesa.

**Regra V3:** sempre garantir contraste alto entre fundo e cards.
- Fundo escuro → **cards claros**
- Cards escuros → **fundo claro**

Nunca escuro-em-escuro sem separação visual clara.

---

## 🗂️ Nova Arquitetura de Informação

| Página | Status V3 | Objetivo |
|---|---|---|
| **Home** | Refactor pesado | Apresentar, gerar identificação, criar desejo, levar para aplicação |
| **Método** | Refactor (reduzir) | Aprofundar as 3 fases |
| **Mentoria** | Refactor (expandir experiência) | Vender a experiência dos 12 meses |
| **Biografia** | Rename `/sobre` → `/biografia` + expandir | História do casal, credibilidade, marcos |
| **Conteúdo** | 🆕 nova página | Ebooks + Vídeos + Podcasts unificados |
| **Blog** | 🆕 nova página | Curadoria de notícias/temas de casal (placeholder até produção própria) |
| **Contato** | Mantém | Existe |

### Decisão sobre Sobre → Biografia

**Opção A confirmada pelo Michel:** `Sobre` vira `Biografia` (uma coisa só, história do casal, estilo mais aprofundado inspirado em `erikacrivellari.com.br/biografia` — só a estrutura de conteúdo, NÃO o design visual dela).

### Referência de estrutura de conteúdo (não visual)

- **URL:** https://erikacrivellari.com.br/biografia
- **O que puxar:** mapa de páginas (biografia expandida, mentoria vende experiência, conteúdo unificado, blog, contato)
- **O que NÃO puxar:** paleta preto+dourado, tipografia, hierarquia visual dela — design V3 segue as 11 diretrizes deste documento
- **Vocabulário proibido:** "superação / resiliência / crise" — playbook ELEVEM-SE é construção/elevação

---

## 📄 Diretrizes por página

### Home
- **Função:** despertar. Não explicar.
- **Corte:** menos texto. Máx 1-2 frases por bloco. "O visitante precisa saber isso agora?" — se não, joga pra página interna.
- **Método na Home:** só os 3 nomes das fases + descrição de 1 linha cada + botão "Conheça o método completo →". Nada mais.
  - Fase 1 — Elevação Individual (1 linha)
  - Fase 2 — Construção do Nós (1 linha)
  - Fase 3 — Legado em Casal (1 linha)
- **Blocos:** cada um com **uma única função**. Sem repetir conceito entre blocos.
- **CTA final:** direto (aplicação/mentoria).

### Método
- Aprofunda as 3 fases (o que a Home só apresenta).
- Detalhes, exemplos, jornada emocional de cada fase.

### Mentoria
- **Vende experiência, não descrição técnica.**
- Visitante deve imaginar como será viver os próximos 12 meses.
- Levantar com Maycko/Marcela (⚠️ pendente):
  - Workshops
  - Encontros ao vivo
  - Eventos presenciais
  - Dinâmicas
  - Exercícios
  - Comunidade
  - Acompanhamentos
  - Recursos exclusivos
- Mais emoção. Menos bullet técnico.

### Biografia (ex-Sobre)
- História do casal em profundidade.
- Marcos objetivos (equivalente ao "MDRT" da Erika — mas em métricas de casal: anos juntos, casais elevados, background profissional, etc.).
- Fotos em ritmo alternado com blocos de texto (proporção ~40% texto / ~60% imagem).

### Conteúdo (nova)
- **Estrutura:** 1 página, 3 seções (ou 3 abas): Ebooks · Vídeos · Podcasts.
- Michel confirmou que Vídeos + Podcasts podem ficar juntos na mesma página.
- Cada item é card claro com CTA (baixar / assistir / ouvir).

### Blog (nova)
- **Fase 1 (placeholder):** curadoria de 3-5 notícias/temas de casal do momento.
- **Fase 2 (futuro):** produção própria de Maycko e Marcela.
- Layout de blog premium — leve, cards com respiro.

### Contato
- Existente. Refinar só o suficiente para casar com nova paleta.

---

## ✂️ Regras editoriais inegociáveis

1. **Não repetir conceito entre blocos.** Cada bloco = uma função única.
2. **Home é convite, não manual.** Se o visitante precisa daquilo pra dar o próximo passo, fica na Home. Senão, vai pra página interna.
3. **Menos é mais.** Ao escrever qualquer bloco novo, perguntar: "isso precisa estar aqui agora?"
4. **Vocabulário construção/elevação.** Zero "superação / salvar / restaurar / crise" — playbook.
5. **CTA direto** no fim de cada página.

---

## 🖼️ Identidade visual — sensação a transmitir

- Elegância.
- Respiro.
- Muitos espaços em branco.
- Poucos blocos pesados.
- Sensação de organização, calma, sofisticação.
- NÃO transmitir "muito conteúdo" — a página deve parecer curada, não densa.

---

## 🔗 Documentos relacionados

- [[v2-diretrizes]] — iteração anterior (2026-07-08)
- [[conceito-central-marca]] — posicionamento oficial
- [[design-tokens]] — tokens Tailwind (serão atualizados para nova paleta)
- [[architecture]] — arquitetura Next.js
- [[modules]] — módulos existentes
- Stories: [[../stories/BACKLOG]] (a serem criadas pela sites-architect)
