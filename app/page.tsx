import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { Manifesto } from '@/components/home/Manifesto'
import { Prova } from '@/components/home/Prova'
import { Dores } from '@/components/home/Dores'
import { Transformacao } from '@/components/home/Transformacao'
import { Conceito } from '@/components/home/Conceito'
import { MetodoResumo } from '@/components/home/MetodoResumo'
import { Mentores } from '@/components/home/Mentores'
import { Depoimentos } from '@/components/home/Depoimentos'
import { Legado } from '@/components/home/Legado'
import { FinalCta } from '@/components/home/FinalCta'

export const metadata: Metadata = {
  title: 'Elevem-se — Mentoria para Casais',
  description:
    'Casamentos extraordinários não acontecem por sorte. Eles são construídos. Mentoria exclusiva para casais que decidiram crescer juntos em todas as áreas da vida.',
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
      <Manifesto />
      <ConnectiveBleed from="var(--surface-anchor)" to="var(--surface-anchor)" />
      <Prova />
      <ConnectiveBleed from="var(--surface-anchor)" to="var(--surface-wine-deep)" />
      <Dores />
      <Transformacao />
      <ConnectiveBleed from="var(--surface-wine-deep)" to="var(--surface-wine)" />
      <Conceito />
      <MetodoResumo />
      <Mentores />
      <Depoimentos />
      <Legado />
      <FinalCta />
    </>
  )
}
