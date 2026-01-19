
export type Category = 'Bridal' | 'Party' | 'Celebrity';

export interface PortfolioImage {
  id: string;
  url: string;
  category: Category;
  title: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface Booking {
  id: string;
  name: string;
  phone: string;
  eventDate: string;
  serviceType: string;
  submittedAt: string;
}

export interface SiteSettings {
  phone: string;
  whatsapp: string;
  instagram: string;
  aboutText: string;
  ctaText: string;
  seoTitle: string;
}
