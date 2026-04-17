import React from 'react';
import { SectionHeader } from '../Common/SectionHeader';
import { ResponsiveImage } from '../Common/ResponsiveImage';
import { asset } from '../../utils/asset';
import { SERVICES, ADDITIONAL_SERVICES, THEME } from './Services.types';
import type { ServiceItem } from './Services.types';

const ServiceCard = ({ image, imageSm, icon, badge, title, description, variant }: ServiceItem): React.ReactElement => {
  const t = THEME[variant];
  return (
    <div className={`service-card rounded-2xl overflow-hidden transition-all duration-300 ${t.card}`}>
      <div className="aspect-video overflow-hidden">
        <ResponsiveImage src={asset(image)} srcSm={asset(imageSm)} alt={title} className="gallery-img w-full h-full object-cover" />
      </div>
      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-3">
          <div className={`${t.icon} p-2 rounded-lg`}>
            <i className={`${icon} ${t.iconTxt} text-xl`} />
          </div>
          <span className={`${t.badge} text-xs font-semibold tracking-widest uppercase`}>{badge}</span>
        </div>
        <h3 className={`playfair ${t.title} text-xl sm:text-2xl font-bold mb-3`}>{title}</h3>
        <p className={`${t.desc} text-sm leading-relaxed`}>{description}</p>
      </div>
    </div>
  );
};

const Services = (): React.ReactElement => (
  <section id="services" className="py-10 sm:py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">

      <SectionHeader
        eyebrow="What We Do"
        title="Our Services"
        subtitle="At HighCladd, we specialize in complete exterior siding solutions — from supply and custom design to precision fabrication and expert installation. We work with a wide range of high-performance materials to deliver modern, durable, and visually stunning results for both residential and commercial projects across Toronto and the GTA."
        className="mb-8 sm:mb-14"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        {SERVICES.map(service => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>

      <div className="bg-slate-900 rounded-2xl p-6 sm:p-8">
        <p className="text-blue-400 font-semibold text-xs tracking-widest uppercase mb-5">Additional Services</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ADDITIONAL_SERVICES.map(service => (
            <div key={service} className="flex items-start gap-3 text-gray-300 text-sm">
              <i className="bi bi-check-circle-fill text-blue-500 mt-0.5 shrink-0" />
              <span>{service}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export { Services };
