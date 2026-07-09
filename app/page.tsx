import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { Manifesto } from '@/components/home/Manifesto'
import { Prova } from '@/components/home/Prova'
import { Dores } from '@/components/home/Dores'
import { EvolucaoSemCrise } from '@/components/home/EvolucaoSemCrise'
import { Conceito } from '@/components/home/Conceito'
import { MetodoResumo } from '@/components/home/MetodoResumo'
import { Transformacao } from '@/components/home/Transformacao'
import { Mentores } from '@/components/home/Mentores'
import { Depoimentos } from '@/components/home/Depoimentos'
import { FinalCta } from '@/components/home/FinalCta'

export const metadata: Metadata = {
  title: 'Elevem-se — Mentoria para Casais',
  description:
    'Elevar-se é decidir crescer antes que os problemas obriguem vocês a mudar. Mentoria de evolução — não de restauração — para casais que decidiram construir juntos.',
}

function ConnectiveBleed({
  from,
  to,
}: {
  from: string
  to: string
}) {
  return (
    <div
      aria-hidden="true"
      style={{
        height: 80,
        background: `linear-gradient(to bottom, ${from}, ${to})`,
        marginTop: -1,
        marginBottom: -1,
        position: 'relative',
        zIndex: 2,
      }}
    />
  )
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ConnectiveBleed from="var(--surface-anchor)" to="var(--surface-anchor)" />
      {/* Bloco 2 — A verdade que poucos casais percebem */}
      <Manifesto />
      <ConnectiveBleed from="var(--surface-anchor)" to="var(--surface-anchor)" />
      {/* Bloco 3 — Prova (números) */}
      <Prova />
      <ConnectiveBleed from="var(--surface-anchor)" to="var(--surface-wine-deep)" />
      {/* Bloco 4 — Dores (reconhecimento) */}
      <Dores />
      {/* Bloco 5 — Evolução, não crise (reposicionamento) */}
      <EvolucaoSemCrise />
      {/* Bloco 6 — Filosofia Elevem-se */}
      <Conceito />
      {/* Bloco 7 — O Método (visão geral) */}
      <MetodoResumo />
      {/* Bloco 8 — Resultados esperados (Transformação) */}
      <Transformacao />
      {/* Bloco 9 — Quem conduz (enxuto) */}
      <Mentores />
      {/* Bloco 10 — Depoimentos */}
      <Depoimentos />
      {/* Bloco 11 — CTA Final */}
      <FinalCta />
    </>
  )
}
