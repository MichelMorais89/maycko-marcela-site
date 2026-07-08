import Image from 'next/image'
import { cn } from '@/lib/utils'

interface PhotoProps {
  src: string
  alt: string
  ratio?: string
  frame?: boolean
  position?: string
  className?: string
  priority?: boolean
  sizes?: string
}

export function Photo({
  src,
  alt,
  ratio = '4 / 5',
  frame = true,
  position = '50% 30%',
  className,
  priority = false,
  sizes = '(max-width: 1023px) 100vw, 50vw',
}: PhotoProps) {
  return (
    <div
      className={cn('elv-photo', frame && 'elv-photo--frame', className)}
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        style={{ objectFit: 'cover', objectPosition: position }}
      />
    </div>
  )
}
