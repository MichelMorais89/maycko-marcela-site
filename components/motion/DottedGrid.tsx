export function DottedGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        backgroundImage:
          'radial-gradient(circle, var(--wine-600) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        opacity: 0.03,
      }}
    />
  )
}
