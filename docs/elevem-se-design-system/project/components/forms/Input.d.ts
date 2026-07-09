import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** 'box' = soft bordered field (default), 'line' = minimal bottom rule. */
  variant?: 'box' | 'line';
  /** Error state — red rule. */
  invalid?: boolean;
  /** Default 'md'. */
  size?: 'sm' | 'md' | 'lg';
}

/** Quiet text input; focus brings a gold underline / ring. */
export function Input(props: InputProps): JSX.Element;
