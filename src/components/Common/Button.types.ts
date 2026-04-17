import type React from 'react';

export type Variant = 'primary' | 'ghost' | 'dark';

export interface ButtonBaseProps {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}

export interface ButtonAsButton extends ButtonBaseProps {
  as?: 'button';
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  href?: never;
}

export interface ButtonAsAnchor extends ButtonBaseProps {
  as: 'a';
  href: string;
  target?: string;
  rel?: string;
  onClick?: never;
  disabled?: never;
  type?: never;
}

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export const VARIANT_CLASSES: Record<Variant, string> = {
  primary: 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/40',
  ghost:   'bg-white/10 hover:bg-white/25 backdrop-blur text-white border border-white/30',
  dark:    'bg-slate-900 hover:bg-slate-700 text-white',
};

export const BASE_CLASS =
  'inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-semibold text-sm sm:text-base transition-all disabled:opacity-60';
