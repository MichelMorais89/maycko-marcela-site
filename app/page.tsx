import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { Prova } from '@/components/home/Prova'
import { Dores } from '@/components/home/Dores'
import { Conceito } from '@/components/home/Conceito'
import { MetodoResumo } from '@/components/home/MetodoResumo'
import { Mentores } from '@/components/home/Mentores'
import { Depoimentos } from '@/components/home/Depoimentos'
import { Legado } from '@/components/home/Legado'
import { FinalCta } from '@/components/home/FinalCta'

export const metadata: Metadata = {
  title: 'Elevem-se — Mentoria para Casais Empreendedores',
  description:
    'Mentoria exclusiva para casais empreendedores. 12 meses, duas fases, um método. Saia do automático e construa um relacionamento estruturado, consciente e próspero.',
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
      {/* Hero → Prova: dark→ink */}
      <ConnectiveBleed from="var(--surface-anchor)" to="var(--surface-anchor)" />
      <Prova />
      {/* Prova → Dores: ink→wine-deep */}
      <ConnectiveBleed from="var(--surface-anchor)" to="var(--surface-wine-deep)" />
      <Dores />
      {/* Dores → Conceito: wine-deep→wine */}
      <ConnectiveBleed from="var(--surface-wine-deep)" to="var(--surface-wine)" />
      <Conceito />
      {/* Conceito → Método: wine→page */}
      <ConnectiveBleed from="var(--surface-wine)" to="var(--surface-page)" />
      <MetodoResumo />
      <Mentores />
      <Depoimentos />
      <Legado />
      <FinalCta />
    </>
  )
}
