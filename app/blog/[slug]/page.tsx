import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPost, POSTS } from '@/content/blog/posts'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: `${post.title}, Blog ELEVEM-SE`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      tags: [post.category],
    },
    other: {
      'script:ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        publisher: {
          '@type': 'Organization',
          name: 'ELEVEM-SE',
        },
      }),
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <>
      {/* Header editorial */}
      <header
        style={{ background: 'var(--surface-bege, #EDE3CF)' }}
        className="py-20 lg:py-28"
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <Link
            href="/blog"
            className="text-xs tracking-[0.2em] uppercase mb-8 inline-block"
            style={{ color: 'var(--text-gold, #735422)', textDecoration: 'none' }}
          >
            ← BLOG
          </Link>
          <div
            className="inline-block text-xs tracking-[0.15em] uppercase px-3 py-1 rounded-sm mb-6 ml-4"
            style={{
              background: 'rgba(115,84,34,0.1)',
              color: 'var(--text-gold, #735422)',
            }}
          >
            {post.category}
          </div>
          <h1
            className="font-serif text-4xl lg:text-5xl leading-tight mb-6"
            style={{ color: 'var(--text-strong, #2E2A2B)' }}
          >
            {post.title}
          </h1>
          <p
            className="text-lg leading-relaxed mb-8"
            style={{ color: 'var(--text-muted, #716A6B)' }}
          >
            {post.description}
          </p>
          <div
            className="flex items-center gap-6 text-xs"
            style={{ color: 'var(--text-muted, #716A6B)' }}
          >
            <span>
              {new Date(post.date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <span>{post.readTime} de leitura</span>
          </div>
        </div>
      </header>

      {/* Corpo do post */}
      <article
        style={{ background: 'var(--surface-bege, #EDE3CF)' }}
        className="pb-20 lg:pb-32"
      >
        <div
          className="max-w-3xl mx-auto px-6 lg:px-12"
          style={{ borderTop: '1px solid rgba(46,42,43,0.08)', paddingTop: '2.5rem' }}
        >
          <div className="space-y-6">
            {post.paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-lg leading-[1.8]"
                style={{ color: 'var(--text-muted, #716A6B)' }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Fonte */}
          <div
            className="mt-12 pt-6 text-sm italic"
            style={{
              borderTop: '1px solid rgba(46,42,43,0.08)',
              color: 'var(--text-muted, #716A6B)',
            }}
          >
            Fonte: {post.source}
          </div>

          {/* CTA voltar + mentoria */}
          <div className="mt-16 flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="post-back-btn inline-block px-8 py-3 text-sm tracking-[0.15em] uppercase"
            >
              ← Ver mais matérias
            </Link>
            <Link
              href="/mentoria"
              className="post-mentoria-btn inline-block px-8 py-3 text-sm tracking-[0.15em] uppercase font-medium"
            >
              Conhecer a mentoria
            </Link>
          </div>
          <style>{`
            .post-back-btn {
              border: 1px solid rgba(115,84,34,0.3);
              color: var(--text-gold, #735422);
              background: transparent;
              transition: border-color 0.15s;
            }
            .post-back-btn:hover { border-color: rgba(115,84,34,0.7); }
            .post-mentoria-btn {
              background: var(--wine-600, #6E2A36);
              color: #F5F0E8;
              transition: background 0.15s;
            }
            .post-mentoria-btn:hover { background: var(--wine-700, #5A1F28); }
          `}</style>
        </div>
      </article>
    </>
  )
}
