export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GalleryProps {
  onImageClick: (src: string, alt: string) => void;
}

export interface GalleryItemProps extends GalleryImage {
  onClick: (src: string, alt: string) => void;
}

export interface GalleryCarouselProps {
  images: GalleryImage[];
  onImageClick: (src: string, alt: string) => void;
}

export const IMAGES: GalleryImage[] = [
  { src: 'kfc-exterior',               alt: 'Commercial exterior cladding — KFC renovation' },
  { src: 'modern-home-acm',            alt: 'Modern home with ACM panels and wood cladding' },
  { src: 'soffit-overhang-lights',     alt: 'Wood soffit overhang with recessed lighting' },
  { src: 'residential-mixed-cladding', alt: 'Mixed cladding — wood composite, ACM and stone' },
  { src: 'wood-cladding-commercial',   alt: 'Commercial wood cladding with large windows' },
  { src: 'acm-panel-soffit',           alt: 'ACM panel soffit detail with pot lights' },
  { src: 'fluted-wood-ceiling',        alt: 'Fluted wood ceiling and soffit installation' },
  { src: 'heritage-brick-soffit',      alt: 'Heritage brick building soffit and fascia' },
  { src: 'wood-cladding-residential',  alt: 'Residential wood cladding project' },
  { src: 'acm-white-townhouse',        alt: 'Modern townhouse with white ACM panels' },
  { src: 'acm-dark-glass-facade',      alt: 'Dark ACM glass facade installation' },
];
