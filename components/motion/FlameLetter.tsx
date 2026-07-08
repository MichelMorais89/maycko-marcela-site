export function FlameLetter({ size = '1em' }: { size?: string | number }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        verticalAlign: 'middle',
        position: 'relative',
        top: '-0.08em',
      }}
    >
      <svg
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        <path
          d="M59 99 C 51 80 46 58 51 40 C 54 31 58 30 60 33 C 56 31 49 44 44 64 C 42 80 50 92 59 99 Z"
          fill="var(--wine-600)"
        />
        <path
          d="M61 99 C 69 78 74 56 69 36 C 66 26 62 22 60 19 C 62 23 71 40 76 60 C 78 78 70 92 61 99 Z"
          fill="var(--gold-500)"
        />
      </svg>
    </span>
  )
}
