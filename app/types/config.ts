export interface SiteConfig {
  site: {
    title: string;
    description: string;
    keywords: string;
  };
  contact: {
    phone: string;
    whatsapp: string;
    instagram: string;
    address: string;
    mapsUrl: string;
  };
  workingHours: {
    weekdays: string;
    weekend: string;
  };
  products: Product[];
  features: Feature[];
  process: ProcessStep[];
  faq: FAQ[];
  stats: Stat[];
  services: Service[];
  steps: Step[];
  deliveryTimeline: TimelineItem[];
  whyFeatures: WhyFeature[];
}

export interface Product {
  id: string;
  type: string;
  price: string;
  image: string;
  features: string[];
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Stat {
  number: string;
  label: string;
  variant: 'default' | 'accent' | 'accent-red';
}

export interface Service {
  emoji: string;
  title: string;
  description: string;
  tag: string;
  featured: boolean;
}

export interface Step {
  step: number;
  title: string;
  description: string;
  color: 'red' | 'teal';
}

export interface TimelineItem {
  day: string;
  dotColor: 'red' | 'teal' | 'gray';
  text: string;
}

export interface WhyFeature {
  icon: string;
  title: string;
  description: string;
  iconVariant: 'default' | 'red';
}
