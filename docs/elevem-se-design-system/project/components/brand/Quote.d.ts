import * as React from 'react';

export interface QuoteProps extends Omit<React.HTMLAttributes<HTMLElement>, 'cite'> {
  /** The quotation text. */
  children: React.ReactNode;
  /** Attribution name, e.g. "Maycko & Marcela". */
  cite?: string;
  /** Role / sub-attribution, e.g. "Mentores". */
  role?: string;
  /** 'light' on light surfaces (default), 'wine' on wine sections. */
  tone?: 'light' | 'wine';
  /** Quote size. Default 'md'. */
  size?: 'sm' | 'md' | 'lg';
  /** Text alignment. Default 'left'. */
  align?: 'left' | 'center';
}

/** Editorial pull quote / testimonial in Spectral italic with a gold rule. */
export function Quote(props: QuoteProps): JSX.Element;
