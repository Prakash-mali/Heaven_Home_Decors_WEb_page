export type ProjectCategory =
  | 'all'
  | 'living-room'
  | 'kitchen'
  | 'bedroom'
  | 'false-ceiling'
  | 'wardrobe'
  | 'commercial';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  location: string;
  area: string;
  timeline: string;
  budgetRange: string;
  image: string;
  galleryImages: string[];
  description: string;
  highlights: string[];
  materialSpecs: {
    finish: string;
    lighting: string;
    woodwork: string;
    hardware: string;
  };
  beforeImage?: string;
  afterImage?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  projectType: string;
  rating: number;
  date: string;
  comment: string;
  avatarBg: string;
  verified: boolean;
  projectImage?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  badge: string;
}

export interface BookingSubmission {
  id: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  propertyType: string;
  projectScope: string[];
  preferredLocation: 'studio' | 'site' | 'online';
  preferredDate: string;
  preferredTimeSlot: string;
  budgetRange: string;
  addressOrLandmark?: string;
  notes?: string;
  enableWhatsAppUpdates: boolean;
  submittedAt: string;
}
