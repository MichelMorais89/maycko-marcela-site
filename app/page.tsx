import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Elevem-se — Mentoria para Casais',
  description:
    'Mentoria exclusiva para casais empreendedores. 12 meses, duas fases, um método. Saia do automático com estrutura.',
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-ivory flex items-center justify-center">
      <div className="text-center">
        <p className="font-sans text-sm uppercase tracking-widest text-gold-800 mb-4">
          em breve
        </p>
        <h1 className="font-display text-3xl text-wine-600 uppercase tracking-tight mb-8">
          Home em breve
        </h1>
        <Button variant="primary" size="lg">
          Quero aplicar
        </Button>
      </div>
    </main>
  )
}
