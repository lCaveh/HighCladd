export interface ResponsiveImageProps {
  src: string;
  srcSm: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  breakpoint?: number;
}
