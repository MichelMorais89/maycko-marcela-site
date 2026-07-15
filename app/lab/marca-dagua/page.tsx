import type { Metadata } from 'next'
import { ElevemseWatermark } from '@/components/brand/ElevemseWatermark'

export const metadata: Metadata = {
  title: 'Lab, Marca d\'Água ELEVEM-SE',
  robots: { index: false, follow: false },
}

interface DemoCardProps {
  label: string
  bg: string
  children: React.ReactNode
}

function DemoCard({ label, bg, children }: DemoCardProps) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-medium tracking-widest uppercase text-graphite-500">{label}</p>
      <div
        className="relative overflow-hidden rounded-xl"
        style={{ background: bg, height: 220 }}
      >
        {children}
        <div className="absolute inset-0 flex items-end justify-start p-6 pointer-events-none z-10">
          <p className="text-sm opacity-40 font-serif italic">
            Headline de exemplo, não compete
          </p>
        </div>
      </div>
    </div>
  )
}

export default function MarcaDaguaPage() {
  return (
    <main className="min-h-screen" style={{ background: '#EDE3CF' }}>
      <div className="max-w-6xl mx-auto px-6 py-24">

        <header className="mb-20">
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#C2A14D' }}>
            LAB, COMPONENTE INTERNO
          </p>
          <h1 className="font-serif text-4xl font-light" style={{ color: '#2E2A2B' }}>
            ElevemseWatermark
          </h1>
          <p className="mt-3 text-base" style={{ color: '#716A6B' }}>
            4 motions × 2 variantes de cor. Use este lab para validar o elemento gráfico em contextos de aplicação.
          </p>
        </header>

        {/* Section 1, Dourado */}
        <section className="mb-20">
          <h2 className="font-serif text-xl mb-8 pb-2 border-b border-[#CCBA9E]" style={{ color: '#2E2A2B' }}>
            Cor: Dourado
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <DemoCard label="Breathing (outline)" bg="#16233A">
              <ElevemseWatermark
                variant="outline"
                color="dourado"
                motion="breathing"
                opacity={0.08}
                size="full"
              />
            </DemoCard>

            <DemoCard label="Horizontal-Slide (outline)" bg="#2C1A12">
              <ElevemseWatermark
                variant="outline"
                color="dourado"
                motion="horizontal-slide"
                opacity={0.08}
                size="full"
              />
            </DemoCard>

            <DemoCard label="Zoom (outline)" bg="#EDE3CF">
              <ElevemseWatermark
                variant="outline"
                color="dourado"
                motion="zoom"
                opacity={0.12}
                size="full"
              />
            </DemoCard>

            <DemoCard label="Parallax (outline), role a página" bg="#4A1B29">
              <ElevemseWatermark
                variant="outline"
                color="dourado"
                motion="parallax"
                opacity={0.10}
                size="full"
              />
            </DemoCard>

          </div>
        </section>

        {/* Section 2, Vinho */}
        <section className="mb-20">
          <h2 className="font-serif text-xl mb-8 pb-2 border-b border-[#CCBA9E]" style={{ color: '#2E2A2B' }}>
            Cor: Vinho
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <DemoCard label="Breathing (outline)" bg="#F5EFE4">
              <ElevemseWatermark
                variant="outline"
                color="vinho"
                motion="breathing"
                opacity={0.12}
                size="full"
              />
            </DemoCard>

            <DemoCard label="Horizontal-Slide (outline)" bg="#EDE3CF">
              <ElevemseWatermark
                variant="outline"
                color="vinho"
                motion="horizontal-slide"
                opacity={0.10}
                size="full"
              />
            </DemoCard>

            <DemoCard label="Zoom (outline)" bg="#F5EFE4">
              <ElevemseWatermark
                variant="outline"
                color="vinho"
                motion="zoom"
                opacity={0.12}
                size="full"
              />
            </DemoCard>

            <DemoCard label="Parallax (outline), role a página" bg="#EDE3CF">
              <ElevemseWatermark
                variant="outline"
                color="vinho"
                motion="parallax"
                opacity={0.10}
                size="full"
              />
            </DemoCard>

          </div>
        </section>

        {/* Section 3, Sizes */}
        <section className="mb-20">
          <h2 className="font-serif text-xl mb-8 pb-2 border-b border-[#CCBA9E]" style={{ color: '#2E2A2B' }}>
            Variações de Tamanho (motion: none)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <DemoCard label="size: full" bg="#16233A">
              <ElevemseWatermark
                variant="outline"
                color="dourado"
                motion="none"
                opacity={0.12}
                size="full"
              />
            </DemoCard>

            <DemoCard label="size: half" bg="#16233A">
              <ElevemseWatermark
                variant="outline"
                color="dourado"
                motion="none"
                opacity={0.15}
                size="half"
              />
            </DemoCard>

            <DemoCard label="size: quarter" bg="#16233A">
              <ElevemseWatermark
                variant="outline"
                color="dourado"
                motion="none"
                opacity={0.20}
                size="quarter"
              />
            </DemoCard>

          </div>
        </section>

        {/* Footer note */}
        <footer className="pt-8 border-t border-[#CCBA9E]">
          <p className="text-xs" style={{ color: '#9A8A6E' }}>
            Regras de aplicação: nunca sobre foto do casal. Sempre em áreas de respiro.
            Sempre outline ou opacidade baixa. Sempre dourado ou vinho.
            Sempre SVG. prefers-reduced-motion respeitado.
          </p>
        </footer>

      </div>
    </main>
  )
}
