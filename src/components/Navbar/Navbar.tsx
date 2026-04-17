import React, { useState } from 'react';
import { asset } from '../../utils/asset';
import { useScrolled } from '../../hooks/useScrolled';
import { NAV_LINKS } from './Navbar.types';
import type { NavLink } from './Navbar.types';

const Navbar = (): React.ReactElement => {
  const scrolled = useScrolled(60);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-scrolled' : 'bg-transparent'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
        <a href="#home" className="flex items-center gap-3">
          <img
            src={asset('/assets/images/image0_sm.jpeg')}
            alt="HighCladd Logo"
            className="h-10 sm:h-12 w-auto rounded-sm object-contain"
          />
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
          {NAV_LINKS.map(({ href, label }: NavLink) => (
            <a
              key={href}
              href={href}
              className="hover:text-blue-300 transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full font-semibold transition-colors"
          >
            Get a Free Quote
          </a>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          <i className={`bi ${mobileOpen ? 'bi-x-lg' : 'bi-list'} text-2xl`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md px-4 pb-5 space-y-1">
          {NAV_LINKS.map(({ href, label }: NavLink) => (
            <a
              key={href}
              href={href}
              onClick={closeMobile}
              className="block text-white/90 py-3 border-b border-white/10 hover:text-blue-300"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMobile}
            className="block bg-blue-600 text-white text-center py-3 rounded-full mt-3 font-semibold"
          >
            Get a Free Quote
          </a>
        </div>
      )}
    </nav>
  );
};

export { Navbar };
