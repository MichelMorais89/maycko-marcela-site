import * as React from 'react';

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Uppercase label text. */
  label?: string;
  /** Helper text below the control. */
  hint?: string;
  /** Error message (replaces hint, turns red). */
  error?: string;
  /** Append a gold asterisk. */
  required?: boolean;
  /** id of the control for the label's htmlFor. */
  htmlFor?: string;
  /** The control (Input, select, etc.). */
  children: React.ReactNode;
}

/** Label + hint/error wrapper around a form control. */
export function Field(props: FieldProps): JSX.Element;
