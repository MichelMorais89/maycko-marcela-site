import * as React from 'react';

export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Composition. 'lockup' = stacked centered (default), 'horizontal' = mark beside wordmark, 'wordmark' = text only, 'mark' = symbol only. */
  variant?: 'lockup' | 'horizontal' | 'wordmark' | 'mark';
  /** 'wine' for light backgrounds (default), 'light' for wine/dark backgrounds. */
  tone?: 'wine' | 'light';
  /** Mark height in px; wordmark/tagline scale from it. Default 72. */
  size?: number;
  /** Show "Mentoria para casais" tagline. Default true. */
  tagline?: boolean;
}

/**
 * The Elevem-se brand mark + wordmark lockup.
 */
export function Logo(props: LogoProps): JSX.Element;
