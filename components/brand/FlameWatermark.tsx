type Props = {
  side?: 'left' | 'right'
  heightVh?: number
  offsetPct?: number
}

export function FlameWatermark({
  side = 'left',
  heightVh = 110,
  offsetPct = 15,
}: Props) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: '50%',
        [side]: `-${offsetPct}%`,
        transform: 'translateY(-50%)',
        height: `${heightVh}vh`,
        aspectRatio: '1 / 1',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      <div
        className="hero-flame-live"
        style={{ width: '100%', height: '100%' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/elevemse-simbolo.svg"
          alt=""
          style={{ width: '100%', height: '100%', display: 'block' }}
        />
      </div>
    </div>
  )
}
