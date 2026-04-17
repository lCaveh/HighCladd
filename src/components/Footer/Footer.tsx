import React from 'react';
import { SOCIAL_LINKS } from './Footer.types';

const Footer = (): React.ReactElement => (
  <footer className="bg-slate-950 py-10 text-white/50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">

      <div className="flex items-center gap-3">
        <img src="/assets/images/image0_sm.jpeg" alt="HighCladd" className="h-9 w-auto rounded-sm object-contain" />
        <div>
          <p className="text-white font-semibold text-sm leading-none">HighCladd</p>
          <p className="text-white/40 text-xs mt-0.5">Siding · and more</p>
        </div>
      </div>

      <p className="text-xs text-center">
        &copy; {new Date().getFullYear()} HighCladd. Expert Exterior Siding — Toronto &amp; GTA.
      </p>

      <div className="flex items-center gap-5 text-lg">
        {SOCIAL_LINKS.map(({ href, icon, title, hoverColor, external }) => (
          <a
            key={href}
            href={href}
            className={`${hoverColor} transition-colors`}
            title={title}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <i className={`bi ${icon}`} />
          </a>
        ))}
      </div>

    </div>
  </footer>
);

export { Footer };
