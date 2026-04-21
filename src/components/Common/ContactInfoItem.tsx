import React from 'react';
import type { ContactInfoItemProps } from './ContactInfoItem.types';

const ContactInfoItem = ({
  href,
  iconClass,
  iconColor,
  bgColor,
  hoverBg = '',
  label,
  value,
  subValue,
  external = false,
}: ContactInfoItemProps): React.ReactElement => {
  const content = (
    <>
      <div className={`${bgColor} ${hoverBg} rounded-xl p-3 transition-colors`}>
        <i className={`${iconClass} ${iconColor} text-lg`} />
      </div>
      <div>
        <p className="text-white/50 text-xs uppercase tracking-wider">{label}</p>
        <p className="text-white font-semibold">{value}</p>
        {subValue && <p className="text-white/60 text-sm">{subValue}</p>}
      </div>
    </>
  );

  if (!href) {
    return <div className="flex items-center gap-4">{content}</div>;
  }

  return (
    <a
      href={href}
      className="flex items-center gap-4 group"
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {content}
    </a>
  );
};

export { ContactInfoItem };
