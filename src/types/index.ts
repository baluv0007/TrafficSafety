export interface Product {
  id: string;
  title: string;
  shortDescription: string;
  images: string[];
  description: string;
  detailedInfo?: {
    overview: string;
    specifications?: {
      title: string;
      items: string[];
    };
    benefits?: {
      title: string;
      items: string[];
    };
    technical?: {
      title: string;
      items: string[];
    };
  };
  features: string[];
  applications: string[];
  whyChooseUs: string[];
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  images: string[];
  description: string;
  features: string[];
  whyChooseUs: string[];
}
