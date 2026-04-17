import React from 'react';
import type { ResponsiveImageProps } from './ResponsiveImage.types';

const ResponsiveImage = ({
  src,
  srcSm,
  alt,
  className = '',
  loading = 'lazy',
  breakpoint = 768,
}: ResponsiveImageProps): React.ReactElement => (
  <picture>
    <source media={`(max-width:${breakpoint}px)`} srcSet={srcSm} />
    <img src={src} alt={alt} loading={loading} className={className} />
  </picture>
);

export { ResponsiveImage };
