import type { Variant } from '../Common/Button.types';

export interface ContactPillProps {
  href: string;
  icon: string;
  iconColor: string;
  label: string;
  external?: boolean;
}

export interface CtaButton {
  href: string;
  label: string;
  variant: Variant;
}

export const CONTACT_PILLS: ContactPillProps[] = [
  { href: 'tel:4375590139',                  icon: 'bi bi-telephone-fill', iconColor: 'text-blue-300', label: '437-559-0139' },
  { href: 'tel:4376611916',                  icon: 'bi bi-telephone-fill', iconColor: 'text-blue-300', label: '437-661-1916' },
  { href: 'mailto:info@highcladd.ca',        icon: 'bi bi-envelope-fill',  iconColor: 'text-blue-300', label: 'info@highcladd.ca' },
  { href: 'https://instagram.com/highcladd', icon: 'bi bi-instagram',      iconColor: 'text-pink-300', label: '@highcladd', external: true },
];

export const CTA_BUTTONS: CtaButton[] = [
  { href: '#contact',  label: 'Get a Free Quote',  variant: 'primary' },
  { href: '#projects', label: 'View Our Projects', variant: 'ghost'   },
  { href: '#contact',  label: 'Contact Us',        variant: 'ghost'   },
];
