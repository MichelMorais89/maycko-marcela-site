'use client'

import { useRef, useEffect, useState } from 'react'

interface SplitTextProps {
  as?: keyof React.JSX.IntrinsicElements
  children: string
  className?: string
  style?: React.CSSProperties
  mode?: 'words' | 'chars'
  staggerMs?: number
  durationMs?: number
  delay?: number
}

export function SplitText({
  as: Tag = 'span',
  children,
  className,
  style,
  mode = 'words',
  staggerMs = 55,
  durationMs = 560,
  delay = 0,
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) { setVisible(true); return }

    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const units = mode === 'chars'
    ? children.split('')
    : children.split(' ')

  const TagEl = Tag as React.ElementType

  return (
    <TagEl
      ref={ref}
      className={className}
      style={{ ...style, display: 'inline' }}
      aria-label={children}
    >
      {units.map((unit, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            verticalAlign: 'bottom',
            marginRight: mode === 'words' ? '0.25em' : undefined,
          }}
        >
          <span
            style={{
              display: 'inline-block',
              transform: visible ? 'translateY(0)' : 'translateY(105%)',
              opacity: visible ? 1 : 0,
              transition: visible
                ? `transform ${durationMs}ms cubic-bezier(0.16,1,0.3,1) ${delay + i * staggerMs}ms, opacity ${durationMs * 0.6}ms ease ${delay + i * staggerMs}ms`
                : 'none',
            }}
          >
            {unit}
            {mode === 'chars' && unit === ' ' ? ' ' : ''}
          </span>
        </span>
      ))}
    </TagEl>
  )
}
