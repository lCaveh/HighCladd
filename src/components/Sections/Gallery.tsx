import React, { useCallback, useEffect, useState } from 'react';
import { SectionHeader } from '../Common/SectionHeader';
import { ResponsiveImage } from '../Common/ResponsiveImage';
import { asset } from '../../utils/asset';
import { IMAGES } from './Gallery.types';
import type { GalleryCarouselProps, GalleryItemProps, GalleryProps } from './Gallery.types';

const GalleryItem = ({ src, alt, onClick }: GalleryItemProps): React.ReactElement => {
  const handleClick = useCallback(() => {
    onClick(`/assets/images/${src}.jpeg`, alt);
  }, [src, alt, onClick]);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`View full size: ${alt}`}
      className="group break-inside-avoid mb-3 sm:mb-4 relative overflow-hidden rounded-xl cursor-zoom-in shadow-md hover:shadow-xl transition-shadow duration-300"
      onClick={handleClick}
      onKeyDown={e => e.key === 'Enter' && handleClick()}
    >
      <ResponsiveImage
        src={`/assets/images/${src}.jpeg`}
        srcSm={`/assets/images/${src}_sm.jpeg`}
        alt={alt}
        loading="lazy"
        className="gallery-img w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-2 right-2 bg-black/50 rounded-full w-7 h-7 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <i className="bi bi-zoom-in text-white text-xs" />
      </div>
    </div>
  );
};

const GalleryCarousel = ({ images, onImageClick }: GalleryCarouselProps): React.ReactElement => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [images.length]);

  const handleClick = () => {
    const img = images[current];
    onImageClick(`/assets/images/${img.src}.jpeg`, img.alt);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`View full size: ${images[current].alt}`}
      className="relative overflow-hidden rounded-2xl shadow-lg cursor-zoom-in aspect-[4/3]"
      onClick={handleClick}
      onKeyDown={e => e.key === 'Enter' && handleClick()}
    >
      {images.map((img, i) => (
        <div
          key={img.src}
          className="absolute inset-0 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${(i - current) * 100}%)` }}
        >
          <img
            src={`/assets/images/${img.src}_sm.jpeg`}
            alt={img.alt}
            loading="eager"
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

      <div className="absolute bottom-3 left-0 right-0 flex flex-col items-center gap-2 pointer-events-none">
        <p className="text-white/80 text-xs font-medium">{images[current].alt}</p>
        <div className="flex gap-1.5">
          {images.map((_, i) => (
            <span
              key={i}
              className={`block rounded-full transition-all duration-300 ${
                i === current ? 'w-4 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="absolute top-3 right-3 bg-black/50 text-white/80 text-xs px-2 py-0.5 rounded-full pointer-events-none">
        {current + 1} / {images.length}
      </div>
    </div>
  );
};

const Gallery = ({ onImageClick }: GalleryProps): React.ReactElement => (
  <section id="projects" className="py-10 sm:py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">

      <SectionHeader
        eyebrow="Our Work"
        title="Recent Projects"
        subtitle="Explore our portfolio of exterior siding projects across Toronto and the GTA."
        className="mb-8 sm:mb-14"
      />

      <div className="sm:hidden">
        <GalleryCarousel images={IMAGES} onImageClick={onImageClick} />
      </div>

      <div className="hidden sm:block columns-2 lg:columns-3 gap-4">
        {IMAGES.map(img => (
          <GalleryItem key={img.src} {...img} onClick={onImageClick} />
        ))}
      </div>

    </div>
  </section>
);

export { Gallery };
