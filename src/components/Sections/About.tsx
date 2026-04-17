import React from 'react';
import { Button } from '../Common/Button';
import { ResponsiveImage } from '../Common/ResponsiveImage';
import { FEATURES } from './About.types';
import type { FeatureItem } from './About.types';

const FeatureRow = ({ icon, title, description }: FeatureItem): React.ReactElement => (
  <div className="flex gap-4">
    <div className="bg-blue-50 rounded-xl p-3 shrink-0 h-fit">
      <i className={`${icon} text-blue-600 text-xl`} />
    </div>
    <div>
      <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const About = (): React.ReactElement => (
  <section id="about" className="py-10 sm:py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <ResponsiveImage
              src="/assets/images/image8.jpeg"
              srcSm="/assets/images/image8_sm.jpeg"
              alt="HighCladd installation team"
              className="w-full h-80 sm:h-[480px] object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-blue-600 text-white rounded-2xl px-6 py-4 shadow-xl">
            <p className="text-2xl font-bold leading-none">GTA</p>
            <p className="text-blue-200 text-xs mt-1">Wide Coverage</p>
          </div>
        </div>

        <div className="pt-6 lg:pt-0">
          <p className="text-blue-600 font-semibold tracking-widest uppercase text-xs mb-3">Why HighCladd</p>
          <h2 className="playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-5 leading-tight">
            Built on Quality,<br />Backed by Expertise
          </h2>

          <div className="space-y-5 mb-8">
            {FEATURES.map(feature => (
              <FeatureRow key={feature.title} {...feature} />
            ))}
          </div>

          <Button as="a" href="#contact" variant="dark">
            Start Your Project <i className="bi bi-arrow-right" />
          </Button>
        </div>

      </div>
    </div>
  </section>
);

export { About };
