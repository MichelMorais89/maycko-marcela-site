'use client'

import { useEffect, useRef, type ElementType, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface RevealProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType
  delay?: 0 | 1 | 2 | 3 | 4
}

export function Reveal({ as: Tag = 'div', delay, className, children, ...props }: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-in')
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            io.unobserve(el)
            requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('is-in')))
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const TagEl = Tag as React.ElementType
  return (
    <TagEl
      ref={ref}
      className={cn('elv-reveal', className)}
      data-delay={delay ?? undefined}
      {...props}
    >
      {children}
    </TagEl>
  )
}
