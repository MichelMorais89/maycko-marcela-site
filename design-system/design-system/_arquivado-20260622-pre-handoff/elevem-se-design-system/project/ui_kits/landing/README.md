# Landing / sales page — UI kit

A full sales page for the **Elevem-se** mentoria, composed from the design-system primitives
(`Logo`, `Badge`, `Button`, `Card`, `Quote`, `Avatar`, `Field`, `Input`).

## Files
- `index.html` — loads React + the compiled `_ds_bundle.js` + `Landing.jsx`, then mounts `LandingApp`.
- `Landing.jsx` — all sections (`Nav`, `Hero`, `ForWhom`, `Method`, `Mentors`, `Pricing`, `FinalCta`, `Footer`) and the `LandingApp`, assigned to `window.ElevemLandingApp`.

## Structure (top → bottom) — real content from elevem-se.com.br
1. **Nav** — logo + links + "Quero aplicar".
2. **Hero** — "Casais que crescem juntos não dependem da sorte. Dependem de estrutura." + couple photo + application CTA.
3. **QuemSomos** — Marcela & Maycko (20 anos juntos, 13 casados, 3 filhos) + couple photo + signature.
4. **Dores** — "Vocês se amam. Mas sabem que poderiam estar melhores." + pain list.
5. **Conceito** — wine section: "Casamentos não fracassam por falta de amor. Fracassam por falta de estrutura."
6. **Metodo** — 12 meses em 2 fases (Elevação Individual · Construção do Nós).
7. **Ecossistema** — what's included (14 encontros, 12 meses, grupo, planner, 3 livros, 3 sessões Inês Marcel).
8. **Exclusividade** — application/selection + 30-day guarantee.
9. **Legado** — full-bleed B&W couple photo + closing line.
10. **FinalCta** — application CTA.
11. **Footer** — lockup, couple signature, @handles.

## Notes
- Photos come from `assets/photos/*-web.jpg` (web-optimised crops of the studio ensaio); high-res
  originals are alongside without the `-web` suffix.
- It is an **application-based** 12-month mentorship — there is no public pricing on the site, so the
  landing leads to an application, not a checkout.
