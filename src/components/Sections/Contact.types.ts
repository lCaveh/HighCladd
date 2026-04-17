import type React from 'react';

export interface FormFields {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export type FormAction =
  | { type: 'SET_FIELD'; field: keyof FormFields; value: string }
  | { type: 'RESET' };

export interface UseContactFormReturn {
  fields: FormFields;
  isPending: boolean;
  sent: boolean;
  setField: (field: keyof FormFields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  submit: () => void;
}

export interface ContactOption {
  value: string;
  label: string;
}

export interface ContactInfoEntry {
  href?: string;
  iconClass: string;
  iconColor: string;
  bgColor: string;
  hoverBg: string;
  label: string;
  value: string;
  external?: boolean;
}

export interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}

export const INPUT_CLASS =
  'w-full bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors';

export const SERVICE_OPTIONS: ContactOption[] = [
  { value: 'acm',      label: 'ACM Panels' },
  { value: 'aluminum', label: 'Aluminum / Fluted Cladding' },
  { value: 'soffit',   label: 'Soffit & Fascia' },
  { value: 'design',   label: 'Design & Planning' },
  { value: 'other',    label: 'Other' },
];

export const CONTACT_INFO: ContactInfoEntry[] = [
  { href: 'tel:4376611916',                  iconClass: 'bi bi-telephone-fill', iconColor: 'text-blue-300', bgColor: 'bg-blue-500/20', hoverBg: 'group-hover:bg-blue-500/40', label: 'Phone',        value: '437-661-1916' },
  { href: 'mailto:salemiafsh@gmail.com',     iconClass: 'bi bi-envelope-fill',  iconColor: 'text-blue-300', bgColor: 'bg-blue-500/20', hoverBg: 'group-hover:bg-blue-500/40', label: 'Email',        value: 'salemiafsh@gmail.com' },
  { href: 'https://instagram.com/highcladd', iconClass: 'bi bi-instagram',      iconColor: 'text-pink-300', bgColor: 'bg-pink-500/20', hoverBg: 'group-hover:bg-pink-500/40', label: 'Instagram',    value: '@highcladd', external: true },
  {                                           iconClass: 'bi bi-geo-alt-fill',   iconColor: 'text-blue-300', bgColor: 'bg-blue-500/20', hoverBg: '',                           label: 'Service Area', value: 'Toronto & Greater Toronto Area' },
];
