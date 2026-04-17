export interface FAQItem {
  question: string;
  answer: string;
}

export interface AccordionItemProps extends FAQItem {
  isOpen: boolean;
  onToggle: () => void;
}

export const FAQS: FAQItem[] = [
  {
    question: 'What areas do you serve?',
    answer: 'We serve Toronto and the entire Greater Toronto Area (GTA), including Mississauga, Brampton, Vaughan, Richmond Hill, Markham, Scarborough, Etobicoke, and surrounding regions.',
  },
  {
    question: 'Do you handle both residential and commercial projects?',
    answer: "Yes — HighCladd works with homeowners, contractors, and commercial developers. Whether it's a single-family home or a large commercial facade, we bring the same quality and precision.",
  },
  {
    question: 'What materials do you work with?',
    answer: 'We specialize in ACM (Aluminum Composite Material) panels, fluted aluminum cladding, vinyl siding, fiber cement, metal, wood composite, and more. We recommend the best material for your specific project and climate.',
  },
  {
    question: 'Can you help with design and permits?',
    answer: 'Absolutely. Our in-house design team provides 3D renderings, technical drawings, and material specifications. We also assist with building code compliance requirements throughout the GTA.',
  },
  {
    question: 'How do I get a quote?',
    answer: "Simply call 437-661-1916, email salemiafsh@gmail.com, or fill out the contact form below. We'll assess your project and provide a detailed, no-obligation quote.",
  },
  {
    question: 'Do you offer complete project management?',
    answer: 'Yes. HighCladd provides end-to-end project management from design through fabrication to final installation, ensuring everything runs on schedule and to specification.',
  },
];
