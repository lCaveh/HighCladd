interface SocialLink {
  href: string;
  icon: string;
  title: string;
  hoverColor: string;
  external?: boolean;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { href: 'tel:4376611916',                  icon: 'bi-telephone-fill', title: 'Call',      hoverColor: 'hover:text-blue-400' },
  { href: 'mailto:salemiafsh@gmail.com',     icon: 'bi-envelope-fill',  title: 'Email',     hoverColor: 'hover:text-blue-400' },
  { href: 'https://instagram.com/highcladd', icon: 'bi-instagram',      title: 'Instagram', hoverColor: 'hover:text-pink-400', external: true },
];
