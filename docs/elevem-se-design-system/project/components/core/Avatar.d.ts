import * as React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL. If absent, `initials` render. */
  src?: string;
  /** Alt text for the image. */
  alt?: string;
  /** Fallback initials, e.g. "MA". */
  initials?: string;
  /** Diameter in px. Default 56. */
  size?: number;
  /** Fine gold ring. Default true. */
  ring?: boolean;
}

/** Circular mentor / testimonial portrait with optional gold ring. */
export function Avatar(props: AvatarProps): JSX.Element;
