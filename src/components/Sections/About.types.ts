export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export const FEATURES: FeatureItem[] = [
  {
    icon: 'bi bi-award-fill',
    title: 'Premium Materials Only',
    description: 'We source only certified, high-performance exterior materials built to withstand Canadian weather conditions year-round.',
  },
  {
    icon: 'bi bi-tools',
    title: 'Custom Fabrication',
    description: 'In-house fabrication capabilities including CNC cutting ensure precision-fit components for every project, every time.',
  },
  {
    icon: 'bi bi-geo-alt-fill',
    title: 'Toronto & GTA Based',
    description: 'Local team with deep knowledge of Ontario building codes and weather requirements across the Greater Toronto Area.',
  },
  {
    icon: 'bi bi-building-fill-check',
    title: 'Residential & Commercial',
    description: 'From single-family homes to large commercial facades, we deliver the same quality and precision on every project.',
  },
];
