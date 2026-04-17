export type ServiceVariant = 'dark' | 'light';

export interface ServiceItem {
  image: string;
  imageSm: string;
  icon: string;
  badge: string;
  title: string;
  description: string;
  variant: ServiceVariant;
}

export interface ThemeConfig {
  card: string;
  icon: string;
  iconTxt: string;
  badge: string;
  title: string;
  desc: string;
}

export const THEME: Record<ServiceVariant, ThemeConfig> = {
  dark: {
    card:    'bg-slate-900 shadow-lg hover:shadow-2xl',
    icon:    'bg-blue-600/20',
    iconTxt: 'text-blue-400',
    badge:   'text-blue-400',
    title:   'text-white',
    desc:    'text-gray-300/80',
  },
  light: {
    card:    'bg-gray-50 border border-gray-100 shadow-sm hover:shadow-xl',
    icon:    'bg-blue-50',
    iconTxt: 'text-blue-600',
    badge:   'text-blue-600',
    title:   'text-gray-900',
    desc:    'text-gray-600',
  },
};

export const SERVICES: ServiceItem[] = [
  {
    image: '/assets/images/image2.jpeg', imageSm: '/assets/images/image2_sm.jpeg',
    icon: 'bi bi-layers-fill', badge: 'Premium Material', variant: 'dark',
    title: 'ACM Panels',
    description: 'We specialize in premium ACM (Aluminum Composite Material) panels, offering architectural-grade cladding solutions that combine lightweight construction with exceptional durability and striking aesthetics. Our ACM systems provide superior weather resistance, fire-rated options, and limitless design flexibility — from sleek flat panels to custom shapes and ventilated rainscreen systems.',
  },
  {
    image: '/assets/images/image3.jpeg', imageSm: '/assets/images/image3_sm.jpeg',
    icon: 'bi bi-grid-3x3', badge: 'Contemporary', variant: 'dark',
    title: 'Aluminum & Fluted Cladding',
    description: 'We are experts in aluminum panel systems, including fluted aluminum panels and other architectural aluminum cladding. These materials bring a contemporary, high-end look with excellent strength-to-weight ratio, corrosion resistance, and low maintenance. Our team handles everything from detailed design to custom fabrication and precise installation.',
  },
  {
    image: '/assets/images/image4.jpeg', imageSm: '/assets/images/image4_sm.jpeg',
    icon: 'bi bi-house-fill', badge: 'Finishing', variant: 'light',
    title: 'Soffit & Fascia',
    description: 'HighCladd specializes in professional soffit and fascia systems that perfectly finish your roofline while providing essential ventilation and protection. We use premium materials to create clean, modern lines with superior durability against harsh Canadian weather. Our expert installation ensures seamless integration with your siding and roofing.',
  },
  {
    image: '/assets/images/image5.jpeg', imageSm: '/assets/images/image5_sm.jpeg',
    icon: 'bi bi-rulers', badge: 'In-House', variant: 'light',
    title: 'Design & Planning',
    description: 'Our in-house design and planning team works closely with you from concept to completion. We provide detailed 3D renderings, material recommendations, and technical drawings to ensure your vision is executed flawlessly while meeting all building codes and aesthetic goals.',
  },
];

export const ADDITIONAL_SERVICES: string[] = [
  'Full range of siding materials — Vinyl, Fiber Cement, Metal, Wood Composite',
  'Custom fabrication & CNC cutting',
  'Rainscreen systems',
  'Complete project management & installation',
];
