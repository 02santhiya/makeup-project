
import { PortfolioImage, Service, Testimonial, SiteSettings } from './types';

export const INITIAL_SERVICES: Service[] = [
  { id: '1', title: 'Bridal Makeup', description: 'Timeless elegance for your special day with long-lasting HD finishes.' },
  { id: '2', title: 'Reception / Party Makeup', description: 'Glamorous looks tailored for evenings and celebrations.' },
  { id: '3', title: 'Engagement Makeup', description: 'Soft, radiant glows for your first step towards forever.' },
  { id: '4', title: 'Celebrity / Event Makeup', description: 'High-fashion editorial looks designed for camera and red carpets.' },
  { id: '5', title: 'HD / Airbrush Makeup', description: 'Precision application for a flawless, skin-like texture.' }
];

export const INITIAL_PORTFOLIO: PortfolioImage[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000', category: 'Bridal', title: 'Royal Indian Bride' },
  { id: '2', url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000', category: 'Celebrity', title: 'Red Carpet Glam' },
  { id: '3', url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000', category: 'Party', title: 'Euphoria Nights' },
  { id: '4', url: 'https://images.unsplash.com/photo-1457974182514-a74088503f48?q=80&w=1000', category: 'Bridal', title: 'Classic Elegance' },
  { id: '5', url: 'https://images.unsplash.com/photo-1503910368127-b2488cea68ee?q=80&w=1000', category: 'Celebrity', title: 'Studio Glow' },
  { id: '6', url: 'https://images.unsplash.com/photo-1526045612212-70caf35c11bc?q=80&w=1000', category: 'Bridal', title: 'Intimate Ceremony' },
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Sophia Loren', role: 'Bride', content: 'JK made me feel like royalty. The makeup lasted over 12 hours without a single smudge!', rating: 5 },
  { id: '2', name: 'Alisha Khan', role: 'Celebrity', content: 'Incredible attention to detail. The best red carpet experience I have ever had.', rating: 5 },
  { id: '3', name: 'Priya Verma', role: 'Event Client', content: 'Professional, punctual, and absolutely gifted. Highly recommend!', rating: 5 },
];

export const INITIAL_SETTINGS: SiteSettings = {
  phone: '+91 98765 43210',
  whatsapp: '919876543210',
  instagram: '@jkbeautician_luxury',
  aboutText: 'JK Beautician is a premium destination for luxury makeup artistry, specializing in bridal, celebrity, and high-fashion editorial looks. With over a decade of experience in the elite beauty industry, our philosophy is to enhance natural beauty with a touch of timeless sophistication.',
  ctaText: 'Your Special Day Deserves a Luxury Touch',
  seoTitle: 'JK Beautician | Luxury Bridal & Celebrity Makeup'
};
