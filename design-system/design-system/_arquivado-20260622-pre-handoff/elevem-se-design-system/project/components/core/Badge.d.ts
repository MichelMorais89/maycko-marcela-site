import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color. Default 'gold'. Use 'onWine' over wine sections. */
  tone?: 'gold' | 'wine' | 'muted' | 'onWine';
  /** Prefix with a short gold rule. */
  rule?: boolean;
}

/** Uppercase wide-tracking eyebrow label that sits above headings. */
export function Badge(props: BadgeProps): JSX.Element;
