import React from 'react';
import { Button } from '../Common/Button';
import { ResponsiveImage } from '../Common/ResponsiveImage';
import { CONTACT_PILLS, CTA_BUTTONS } from './HeroBanner.types';
import type { ContactPillProps } from './HeroBanner.types';

const ContactPill = ({ href, icon, iconColor, label, external = false }: ContactPillProps): React.ReactElement => (
  <a
    href={href}
    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-medium transition-all border border-white/20"
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
  >
    <i className={`${icon} ${iconColor}`} /> {label}
  </a>
);

const HeroBanner = (): React.ReactElement => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden">

    <div className="absolute inset-0">
      <ResponsiveImage
        src="/assets/images/image1.jpeg"
        srcSm="/assets/images/image1_sm.jpeg"
        alt="HighCladd exterior siding project"
        loading="eager"
        className="w-full h-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
    </div>

    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full pt-24 pb-14 sm:pt-28 sm:pb-20">
      <div className="max-w-3xl">

        <p className="fade-in-up text-blue-300 font-semibold tracking-widest uppercase text-xs mb-3">
          Toronto &amp; Greater Toronto Area
        </p>

        <h1 className="playfair fade-in-up delay-100 text-white text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6">
          Expert Exterior Siding<br />
          <span className="text-blue-300">Design, Manufacturing</span><br />
          &amp; Installation
        </h1>

        <p className="fade-in-up delay-200 text-white/80 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl">
          High-quality design, precision manufacturing, and professional installation of
          modern exterior siding across the Greater Toronto Area.
        </p>

        <div className="fade-in-up delay-200 flex flex-wrap gap-3 mb-8">
          {CONTACT_PILLS.map(pill => (
            <ContactPill key={pill.href} {...pill} />
          ))}
        </div>

        <div className="fade-in-up delay-300 flex flex-wrap gap-3">
          {CTA_BUTTONS.map(({ href, label, variant }) => (
            <Button key={label} as="a" href={href} variant={variant}>
              {label}
            </Button>
          ))}
        </div>
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/40 hidden sm:block">
      <i className="bi bi-chevron-double-down text-xl" />
    </div>
  </section>
);

export { HeroBanner };
