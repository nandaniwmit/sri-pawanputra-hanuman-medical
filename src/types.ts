export type ActiveTab = 'home' | 'about' | 'services' | 'gallery' | 'contact' | 'whatsapp-order';

export interface Medicine {
  id: string;
  name: string;
  category: string;
  type: 'Tablet' | 'Capsule' | 'Syrup' | 'Injection' | 'Equipment' | 'Supplement' | 'Cream' | 'Device' | 'Support';
  description: string;
  price?: string; // Standard price range or availability
  isRx: boolean; // Prescription required
  manufacturer: string;
  availability: 'In Stock' | 'Available in 24h' | 'Out of Stock';
}

export interface FeaturedCategory {
  id: string;
  name: string;
  iconName: string;
  count: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  date: string;
  location?: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Ordering' | 'Prescription' | 'Store';
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string[];
  iconName: string;
  isPopular?: boolean;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'Store Front' | 'Shelves' | 'Products' | 'Equipment' | 'Team';
  imageUrl: string;
  aspectRatio: 'aspect-square' | 'aspect-video' | 'aspect-[4/3]' | 'aspect-[3/4]';
}

export interface HealthTip {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  readTime: string;
  date: string;
  iconName: string;
}

export interface SpecialOffer {
  id: string;
  title: string;
  description: string;
  code: string;
  discount: string;
  validUntil: string;
}

export interface WhatsAppOrderFormData {
  customerName: string;
  mobileNumber: string;
  email: string;
  address: string;
  medicineName: string;
  hasPrescription: boolean;
  prescriptionFile: File | null;
  message: string;
  preferredDeliveryTime: string;
}

export interface InquiryFormData {
  name: string;
  phone: string;
  email: string;
  medicineName: string;
  message: string;
}
