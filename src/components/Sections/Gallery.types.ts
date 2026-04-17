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
  { src: 'image6',  alt: 'ACM panel installation Toronto' },
  { src: 'image7',  alt: 'Aluminum cladding project GTA' },
  { src: 'image8',  alt: 'Modern exterior siding' },
  { src: 'image9',  alt: 'Commercial cladding facade' },
  { src: 'image10', alt: 'Fluted aluminum panels' },
  { src: 'image12', alt: 'Residential siding project' },
  { src: 'image13', alt: 'Soffit and fascia installation' },
  { src: 'image14', alt: 'Custom ACM facade design' },
  { src: 'image15', alt: 'Contemporary building cladding' },
  { src: 'image16', alt: 'Premium siding installation' },
  { src: 'image17', alt: 'Metal panel cladding' },
  { src: 'image18', alt: 'Exterior renovation Toronto' },
  { src: 'image19', alt: 'HighCladd featured project' },
];
