import type { Metadata } from 'next'
import { ElevemseWatermark } from '@/components/brand/ElevemseWatermark'
import { BlogGrid } from '@/components/blog/BlogGrid'
import { POSTS } from '@/content/blog/posts'

export const metadata: Metadata = {
  title: 'Blog, ELEVEM-SE',
  description:
    'Curadoria editorial para casais que pensam antes de sentir. Pesquisa, comunicação, rotina e legado.',
  openGraph: {
    title: 'Blog, ELEVEM-SE',
    description: 'Curadoria editorial para casais que pensam antes de sentir.',
    images: [{ url: '/photos/dores-couple-hug-bw.jpg', width: 1200, height: 630 }],
  },
}

export default function BlogPage() {
  return (
    <>
      {/* Bloco 1, Faixa navy compacta (cabeçalho do blog) com nome ELEVEM-SE passando ao fundo */}
      <section
        style={{
          background: 'var(--surface-anchor, #16233A)',
          borderBottom: '1px solid rgba(194,161,77,0.3)',
          position: 'relative',
          overflow: 'hidden',
        }}
        className="pt-24 pb-4 lg:pt-28 lg:pb-5"
      >
        <ElevemseWatermark
          variant="outline"
          color="dourado"
          motion="horizontal-slide"
          opacity={0.1}
          size="full"
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-4 flex-wrap relative z-10">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--gold-500, #C2A14D)' }} />
            <p
              className="text-xs tracking-[0.32em] uppercase font-semibold"
              style={{ color: 'var(--gold-400, #D2B673)' }}
            >
              MENTORIA ELEVEM-SE · BLOG
            </p>
          </div>
          <p
            className="text-xs tracking-[0.24em] uppercase"
            style={{ color: 'rgba(245,240,232,0.55)' }}
          >
            Edição Nº 06 · Julho 2026
          </p>
        </div>
      </section>

      {/* Blocos 2 e 3, Destaque + Grid (bege) */}
      <section style={{ background: 'var(--surface-bege, #EDE3CF)' }}>
        <BlogGrid posts={POSTS} />
      </section>
    </>
  )
}
