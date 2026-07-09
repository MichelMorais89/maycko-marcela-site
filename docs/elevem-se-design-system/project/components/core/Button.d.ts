import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 'primary' = solid wine, 'gold' = solid antique gold, 'secondary' = gold hairline outline, 'ghost' = quiet text. Default 'primary'. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'gold';
  /** Default 'md'. */
  size?: 'sm' | 'md' | 'lg';
  /** Stretch to container width. */
  fullWidth?: boolean;
  /** Node rendered before the label. */
  iconLeft?: React.ReactNode;
  /** Node rendered after the label. */
  iconRight?: React.ReactNode;
}

/**
 * Primary call-to-action. Uppercase, wide tracking, pill shape.
 */
export function Button(props: ButtonProps): JSX.Element;
