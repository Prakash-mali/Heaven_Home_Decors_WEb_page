import { Testimonial, ServiceItem } from '../types';

export const CLIENT_TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Suresh & Lavanya Raju',
    location: 'Sai Nagar, Vizianagaram',
    projectType: 'Full 3BHK Residence Interior & Modular Kitchen',
    rating: 5,
    date: '3 weeks ago',
    comment:
      'Heaven Interior’s made our dream home a reality! From the initial 3D visualization to the final handover in exactly 38 days, their commitment to craftsmanship and material quality was extraordinary. The false ceiling cove lighting and modular kitchen storage solutions are simply world-class. Highly recommended in Vizianagaram!',
    avatarBg: 'bg-amber-800 text-amber-100',
    verified: true,
    projectImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 't-2',
    name: 'Dr. Venkat Rao K.',
    location: 'Thotapalem, Vizianagaram',
    projectType: 'Master Bedroom & Living Room TV Feature Wall',
    rating: 5,
    date: '1 month ago',
    comment:
      'Outstanding attention to detail. The team visited our site in Thotapalem, took precise laser measurements, and delivered flawless fluted wooden panels and Hafele fittings. No hidden costs or delays. They maintain very clean site hygiene during execution.',
    avatarBg: 'bg-emerald-800 text-emerald-100',
    verified: true,
    projectImage: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 't-3',
    name: 'Priyanka & Madhav V.',
    location: 'Pedavemali, Vizianagaram',
    projectType: 'Modular Kitchen with Quartz Counter & Pantry',
    rating: 5,
    date: '2 months ago',
    comment:
      'We wanted a modern kitchen with quartz countertop and fluted glass cabinetry. Heaven Interior’s team executed the design impeccably within our budget. The soft-close Blum drawers and under-cabinet warm LEDs make cooking every day an absolute pleasure.',
    avatarBg: 'bg-stone-800 text-stone-100',
    verified: true,
    projectImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 't-4',
    name: 'Kalyan Chakravarthy',
    location: 'Cantonment Area, Vizianagaram',
    projectType: 'Duplex Villa Complete Turnkey Interior',
    rating: 5,
    date: '3 months ago',
    comment:
      'Superb work quality! They provided 10-year material warranties and transparent pricing breakdown upfront. The team in Sai Nagar was always reachable and accommodated all our custom storage requests. Best interior designers in our region.',
    avatarBg: 'bg-slate-800 text-slate-100',
    verified: true,
    projectImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 't-5',
    name: 'Ananya S. & Family',
    location: 'Collectorate Junction, Vizianagaram',
    projectType: 'False Ceiling, Smart Lighting & Wardrobes',
    rating: 5,
    date: '4 months ago',
    comment:
      'The lighting design in our living room and children’s bedroom is phenomenal. The gypsum finish is razor-sharp with no seams or cracks. Their on-time delivery promise of under 45 days was strictly maintained. Five stars all the way!',
    avatarBg: 'bg-amber-900 text-amber-100',
    verified: true
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Complete Turnkey Home Interiors',
    description: 'End-to-end bespoke interior design from concept, 3D renderings, woodwork fabrication, to final handover.',
    iconName: 'Home',
    badge: 'Popular',
    features: [
      'Comprehensive 3D realistic rendering previews',
      'Civil modifications, electrical & plumbing planning',
      'Factory-finished modular woodwork & precision edgebanding',
      '45-day guaranteed on-time delivery with 10-year warranty'
    ]
  },
  {
    id: 'srv-2',
    title: 'Modern Ergonomic Modular Kitchens',
    description: 'Custom engineered kitchen layouts tailored to Indian cooking habits with German soft-close mechanisms.',
    iconName: 'ChefHat',
    badge: 'Specialty',
    features: [
      'L-Shape, U-Shape, Parallel, and Island configurations',
      'Kalinga Quartz, Granite, and Corian solid surfaces',
      'BWP 710 marine grade boiling waterproof ply cores',
      'Blum & Hafele lifetime warranty drawer and lift-up fittings'
    ]
  },
  {
    id: 'srv-3',
    title: 'Architectural False Ceilings & Lighting',
    description: 'High-precision Gyproc gypsum ceilings, cove ambient lighting, magnetic track lights, and acoustic profiles.',
    iconName: 'Lightbulb',
    badge: 'Bespoke',
    features: [
      'Multi-tier concealed LED cove profiles and recessed spots',
      'Anti-crack Saint-Gobain Gyproc moisture resistant boards',
      'Smart home tunable lighting & automation integration',
      'Acoustic ceiling paneling and sound isolation options'
    ]
  },
  {
    id: 'srv-4',
    title: 'Custom Wardrobes & Space Saving Storage',
    description: 'Floor-to-ceiling sliding, openable, and walk-in wardrobe units designed for maximum usable volume.',
    iconName: 'Layers',
    badge: 'Engineered',
    features: [
      'Smoked glass, fluted acrylic, and anti-scratch suede finishes',
      'Integrated motion sensor LED internal lighting',
      'Velvet drawer organizers, pullout mirrors, and shoe racks',
      'Heavy-duty floor-mounted and top-hung smooth sliding tracks'
    ]
  },
  {
    id: 'srv-5',
    title: 'Living Room TV Units & Wall Paneling',
    description: 'Showstopper media focal walls combining acoustic louvers, Italian marble slabs, and concealed wire routing.',
    iconName: 'Tv',
    badge: 'Signature',
    features: [
      'Book-matched Italian marble & large porcelain stoneware',
      'Acoustic wooden louvers and fluted PVC/charcoal slats',
      'Floating media consoles with seamless mitred joints',
      'Concealed conduit routing for amplifiers, consoles, and subwoofers'
    ]
  },
  {
    id: 'srv-6',
    title: 'Commercial, Retail & Office Spaces',
    description: 'Functional, inspiring workplace environments built for productivity, client impact, and durability.',
    iconName: 'Briefcase',
    badge: 'Commercial',
    features: [
      'Soundproof glass partitions and executive cabin suites',
      'Conference tables with integrated cable management',
      'Bespoke reception desks and illuminated brand signage',
      'Commercial grade high-traffic durable materials'
    ]
  }
];

export const STUDIO_INFO = {
  name: "Heaven Interior's",
  tagline: 'Transforming Spaces into Timeless Living Experiences',
  address: 'Sai Nagar Rd, Thotapalem, Pedavemali, Vizianagaram, Andhra Pradesh 535003',
  landmark: 'Sai Nagar Road, Thotapalem Area',
  city: 'Vizianagaram, Andhra Pradesh',
  pincode: '535003',
  googleMapsUrl: 'https://maps.app.goo.gl/6uFTNGMnesoWtnMk6?g_st=ac',
  phone: '+91 94412 88765',
  phoneDisplay: '+91 94412 88765 / +91 89192 34567',
  email: 'heaveninteriors.vzm@gmail.com',
  workingHours: 'Monday – Saturday: 9:30 AM – 8:30 PM | Sunday: 10:00 AM – 4:00 PM',
  experienceYears: '9+',
  projectsCompleted: '450+',
  warrantyYears: '10-Year',
  handoverDays: '45 Days',
  rating: 5.0,
  totalReviews: 86
};
