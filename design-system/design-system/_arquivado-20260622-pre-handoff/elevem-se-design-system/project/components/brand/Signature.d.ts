import * as React from 'react';

export interface SignatureProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Which signature. 'couple' = joint "Maycko & Marcela" lockup (default). */
  mentor?: 'marcela' | 'maycko' | 'couple';
  /** 'wine' on light backgrounds (default; Marcela=gold, Maycko=wine), 'light' on wine/dark. */
  tone?: 'wine' | 'light';
  /** Default 'md'. */
  size?: 'sm' | 'md' | 'lg';
  /** Show the "Dourado · prosperidade" sub-line (individual mentors only). */
  role?: boolean;
}

/** Mentor / couple signature for the endorsed brand architecture. */
export function Signature(props: SignatureProps): JSX.Element;
