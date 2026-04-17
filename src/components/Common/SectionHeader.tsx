import React from 'react';
import type { SectionHeaderProps } from './SectionHeader.types';

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeaderProps): React.ReactElement => {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`${alignClass} ${className}`}>
      <p className="text-blue-600 font-semibold tracking-widest uppercase text-xs mb-3">
        {eyebrow}
      </p>
      <h2 className="playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">{title}</h2>
      {subtitle && (
        <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export { SectionHeader };
