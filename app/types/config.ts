export interface SiteConfig {
  site: {
    title: string;
    description: string;
    keywords: string;
  };
  contact: {
    phone: string;
    whatsapp: string;
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
