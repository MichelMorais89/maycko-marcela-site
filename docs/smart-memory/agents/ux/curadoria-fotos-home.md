---
title: Curadoria de Fotos — HOME (Ciclo 1)
type: reference
status: complete
agent: team-lead
created: 2026-07-08
updated: 2026-07-08
tags: [ux, fotografia, curadoria, home]
related:
  - [[../../project/handoff-bundles]]
  - [[../../stories/active/1.2-implementar-home]]
---

# Curadoria de Fotos — HOME (Ciclo 1)

Diretor (Michel Morais) aprovou em 2026-07-08.
Base: ensaio Marcela e Maycko em `docs/fotos-ensaio-mm/` (68 fotos JPG alta resolução).
Amostragem: 25 fotos scaneadas visualmente pelo lead antes da seleção.

## 8 fotos escolhidas — em `public/photos/`

| Bloco | Arquivo final | Foto origem | Cenário | Uso |
|---|---|---|---|---|
| Hero | `hero-couple.jpg` | #52 | Estúdio dark, casal all black gola alta | Impacto principal, olhar direto |
| Prova | `prova-marcela-close.jpg` | #60 | Close editorial Marcela | Ancora citações/social proof |
| Dores | `dores-couple-bw.jpg` | #55 | Casal B&W cabeça-cabeça | Empatia contemplativa sem drama |
| Conceito | `conceito-marcela-perfil.jpg` | #15 | Marcela sentada perfil B&W | Introspecção do conceito |
| Mentor — Marcela | `mentor-marcela.jpg` | #10 | Warm ambient (ripas madeira) | Retrato individual acolhedor |
| Mentor — Maycko | `mentor-maycko.jpg` | #52 crop (1800x5750) | Crop de 47% da esquerda da #52 | Retrato individual dark |
| Legado | `legado-couple-white.jpg` | #32 | Casal all white, luminoso | Legado luminoso, cumplicidade |
| Final CTA | `final-cta-couple-navy.jpg` | #45 | Casal navy blazer, íntimo | Fecho emocional, sorriso |

## Decisões justificadas

**Hero em preto dark, não warm:** paleta ELEVEM-SE (vinho + dourado + navy + escuros) casa com dark cinemático. Warm ficou pra bloco Mentor (contraste intencional).

**Sem retrato individual real do Maycko:** as 25 fotos scaneadas não trouxeram retrato dele sozinho — ensaio focou em Marcela solo + casal. Solução: crop da #52 (aprovado pelo diretor). Se ensaio futuro trouxer retrato dele isolado, substitui.

**Blocos sem foto neste ciclo:** MetodoResumo, Depoimentos (usa avatares de alunos, não das mentoras).

## Reservas — não usadas na HOME mas fortes pra rotação/blog/social

- **Marcela sozinha (warm):** #1, #8 (blazer creme braços cruzados), #20 (LV coffee cup), #25 (kimono sitting), #38 (tablet lifestyle)
- **Marcela sozinha (dark editorial):** #13 (BW sitting), #63 (perfil dress preto), #65 (poltrona vintage)
- **Marcela sozinha (studio claro):** #30 (all white standing)
- **Casal juntos (dark):** #35 (BW power couple), #44 (navy sitting), #47 (navy laughing), #50 (all black hands), #57 (BW hug editorial)
- **Casal juntos (warm):** #40, #42 (tablet ambient)

## Pendências
- Tratamento de cor final (mantém original ou faz cor grading alinhado à paleta ELEVEM-SE?)
- Otimização — arquivos originais entre 6MB e 14MB. Next `next/image` faz a otimização em runtime, mas pra LCP ideal do Hero recomenda-se pre-processar em `.webp` + variantes (mobile/desktop).

## Uso técnico pelo dev

- Fotos já estão em `public/photos/` — dev pode usar com `next/image` direto: `<Image src="/photos/hero-couple.jpg" ... />`
- Hero exige `priority={true}` + `sizes` responsivo
- Demais: lazy loading padrão do next/image
