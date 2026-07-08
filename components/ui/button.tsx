import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill text-sm font-sans font-medium tracking-wider uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-45',
  {
    variants: {
      variant: {
        primary: 'bg-wine-600 text-white-warm hover:bg-wine-700 active:bg-wine-800',
        secondary:
          'border border-gold-500 text-wine-700 bg-transparent hover:bg-wine-600 hover:text-white-warm hover:border-wine-600',
        ghost: 'bg-transparent text-wine-700 hover:bg-wine-50',
        gold: 'bg-gold-600 text-wine-950 hover:bg-gold-700',
      },
      size: {
        sm: 'px-4 py-2 text-2xs',
        md: 'px-6 py-3 text-xs',
        lg: 'px-8 py-4 text-sm',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
