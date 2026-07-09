import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 'plain' = hairline (default), 'raised' = soft shadow, 'wine' = dark wine card, 'ink' = navy structural card, 'outline' = gold hairline. */
  variant?: 'plain' | 'raised' | 'wine' | 'ink' | 'outline';
  /** Inner padding. Default 'md'. */
  pad?: 'sm' | 'md' | 'lg';
}

/**
 * Warm surface container with restrained radius and soft warm shadow.
 */
export function Card(props: CardProps): JSX.Element;
