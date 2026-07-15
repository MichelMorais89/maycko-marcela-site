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
  replay?: boolean
}

export function SplitText({
  as: Tag = 'span',
  children,
  className,
  style,
  mode = 'words',
  staggerMs = 35,
  durationMs = 380,
  delay = 0,
  replay = false,
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [gen, setGen] = useState(0)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) { setVisible(true); return }

    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGen((g) => g + 1)
          setVisible(true)
          if (!replay) obs.disconnect()
        } else if (replay) {
          setVisible(false)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [replay])

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
          key={`${gen}-${i}`}
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
              animation: visible
                ? `splitTextIn ${durationMs}ms cubic-bezier(0.16,1,0.3,1) ${delay + i * staggerMs}ms both`
                : 'none',
              transform: visible ? undefined : 'translateY(105%)',
              opacity: visible ? undefined : 0,
            }}
          >
            {unit}
            {mode === 'chars' && unit === ' ' ? ' ' : ''}
          </span>
        </span>
      ))}
      <style>{`
        @keyframes splitTextIn {
          0%   { transform: translateY(105%); opacity: 0; }
          100% { transform: translateY(0);    opacity: 1; }
        }
      `}</style>
    </TagEl>
  )
}
