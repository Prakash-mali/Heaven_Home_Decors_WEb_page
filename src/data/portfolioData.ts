import { Project } from '../types';
import heroImg from '../assets/images/heaven_interior_hero_1787742505565.jpg';
import kitchenImg from '../assets/images/heaven_kitchen_1787742520756.jpg';
import bedroomImg from '../assets/images/heaven_bedroom_1787742536125.jpg';
import tvUnitImg from '../assets/images/heaven_tv_unit_1787742555604.jpg';

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'prj-1',
    title: 'Contemporary Luxury Living & Dining Space',
    category: 'living-room',
    categoryLabel: 'Living & Dining',
    location: 'Sai Nagar, Vizianagaram',
    area: '1,850 sq.ft',
    timeline: '38 Days',
    budgetRange: '₹8.5L - ₹11L',
    image: heroImg,
    galleryImages: [
      heroImg,
      tvUnitImg,
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80'
    ],
    description:
      'A bespoke open-concept living and foyer transformation featuring warm architectural cove lighting, acoustic fluted wall paneling in teak finish, custom TV entertainment unit with Italian marble slab backdrop, and balanced earthen tones.',
    highlights: [
      'Multi-layer concealed warm-white cove ceiling with dimmable profiles',
      'Italian Statuario marble backsplash for TV unit with backlit acoustic louvers',
      'Custom plush sectional sofa matching natural oak and champagne brass trims',
      'Concealed cable management and ambient smart mood lighting automation'
    ],
    materialSpecs: {
      finish: 'Matte acrylic laminates with champagne brushed brass profiles',
      lighting: 'Philips Hue smart tunable LED strips with magnetic track fixtures',
      woodwork: 'CenturyPly Marine Grade BWP Plywood with Teak Veneer finish',
      hardware: 'Hafele soft-close concealed hinges and push-to-open channels'
    },
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    afterImage: heroImg
  },
  {
    id: 'prj-2',
    title: 'Modern Ergonomic Modular Kitchen',
    category: 'kitchen',
    categoryLabel: 'Modular Kitchen',
    location: 'Thotapalem, Vizianagaram',
    area: '240 sq.ft',
    timeline: '25 Days',
    budgetRange: '₹4.5L - ₹6.8L',
    image: kitchenImg,
    galleryImages: [
      kitchenImg,
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80'
    ],
    description:
      'Engineered with premium German hardware, quartz countertop, fluted glass upper cabinetry with under-cabinet warm LED illumination, and dual-tone charcoal matte and natural oak finishes.',
    highlights: [
      'Seamless 20mm Kalinga Quartz stone counter with waterfall edge',
      'Full tandem box drawers with 45kg load capacity and soft-close damping',
      'Fluted glass upper cabinets with anti-glare profile lighting for glassware',
      'Dedicated spice pullouts, tall pantry unit, and built-in microwave recess'
    ],
    materialSpecs: {
      finish: 'Anti-fingerprint anti-scratch matte acrylic & fluted glass',
      lighting: '4000K Natural White warm under-counter profile lighting',
      woodwork: 'Boiling Waterproof (BWP 710) Calibrated Ply with PVC Edgebanding',
      hardware: 'Blum Aventos lift-ups & Blum Tandembox drawer systems'
    },
    beforeImage: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1200&q=80',
    afterImage: kitchenImg
  },
  {
    id: 'prj-3',
    title: 'Master Suite with Fluted Headboard & Walk-in Wardrobe',
    category: 'bedroom',
    categoryLabel: 'Master Bedroom',
    location: 'Pedavemali, Vizianagaram',
    area: '320 sq.ft',
    timeline: '30 Days',
    budgetRange: '₹5.2L - ₹7.5L',
    image: bedroomImg,
    galleryImages: [
      bedroomImg,
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80'
    ],
    description:
      'A serene, sanctuary-inspired master bedroom featuring an upholstered headboard with vertical fluted teak wall panels, soft recessed cove ceiling lighting, and floor-to-ceiling tinted glass sliding wardrobes with internal sensor lighting.',
    highlights: [
      'Floor-to-ceiling 9ft wardrobe with aluminium profile and smoked glass doors',
      'Integrated motion sensor wardrobe internal drawer lights',
      'Curved plaster false ceiling design with dual-circuit ambient cove lighting',
      'Floating bedside consoles with wireless charging pads and brass pendant lights'
    ],
    materialSpecs: {
      finish: 'Suede textured laminates, charcoal tinted glass, fluted MDF slats',
      lighting: '3000K Warm Gold LED indirect cove & focused reading spots',
      woodwork: 'Greenply Club HDWR & BWP Grade Marine Plywood',
      hardware: 'Hettich TopLine slide systems & hydraulic bed lifting mechanism'
    },
    beforeImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    afterImage: bedroomImg
  },
  {
    id: 'prj-4',
    title: 'Sleek Designer TV Media Console & Wall Paneling',
    category: 'living-room',
    categoryLabel: 'Living & Media Unit',
    location: 'Cantonment, Vizianagaram',
    area: '180 sq.ft (Feature Wall)',
    timeline: '12 Days',
    budgetRange: '₹1.8L - ₹2.9L',
    image: tvUnitImg,
    galleryImages: [
      tvUnitImg,
      heroImg,
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80'
    ],
    description:
      'High-impact entertainment focal wall combining dark acoustic louvers, book-matched porcelain stoneware backdrop, concealed soundbar recess, and floating storage console with bevelled edge detail.',
    highlights: [
      'Floating console with seamless mitred 45-degree edge detailing',
      'Concealed IR repeater and hidden high-speed conduit routing',
      'Controllable ambient backlight outlining the porcelain wall panel',
      'Sleek display cubbies for artifacts with micro-spotlights'
    ],
    materialSpecs: {
      finish: 'Glazed porcelain slab with charcoal acoustic wooden louvers',
      lighting: 'COB warm strip lighting 240 LED/m high CRI > 90',
      woodwork: 'Century Plywood with PU matte lacquered paint finish',
      hardware: 'Hafele heavy-duty concealed floating wall brackets'
    }
  },
  {
    id: 'prj-5',
    title: 'Designer Architectural False Ceiling & Lighting',
    category: 'false-ceiling',
    categoryLabel: 'False Ceiling & Lights',
    location: 'Collectorate Junction, Vizianagaram',
    area: '2,200 sq.ft (Full Residence)',
    timeline: '18 Days',
    budgetRange: '₹2.8L - ₹4.5L',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      heroImg,
      tvUnitImg
    ],
    description:
      'Seamless Gyproc false ceiling architecture featuring curved perimeter coves, magnetic track light channels, and ambient recessed spotlights engineered for energy efficiency and zero shadow casting.',
    highlights: [
      'Saint-Gobain Gyproc moisture resistant plasterboards with GI channel grid',
      'Magnetic low-voltage track lighting system for flexible spot orientation',
      'Curved seamless perimeter transition without visible joints',
      'Concealed AC ducting slots and speaker grills'
    ],
    materialSpecs: {
      finish: 'Asian Paints Royale Luxury Emulsion in pristine Chantilly lace',
      lighting: 'Wipro & Philips Smart magnetic tracks, 12W deep anti-glare COBs',
      woodwork: 'Solid wood perimeter trims where applicable',
      hardware: 'Heavy duty GI framework with rust-proof zinc coating'
    }
  },
  {
    id: 'prj-6',
    title: 'Custom Walk-In Wardrobes & Vanity Suite',
    category: 'wardrobe',
    categoryLabel: 'Wardrobes & Storage',
    location: 'Sai Nagar, Vizianagaram',
    area: '190 sq.ft',
    timeline: '16 Days',
    budgetRange: '₹3.2L - ₹4.8L',
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1200&q=80',
      bedroomImg
    ],
    description:
      'Custom floor-to-ceiling wardrobe system with dedicated shoe pull-outs, velvet-lined jewelry drawers, backlit dressing mirror vanity, and premium linen-texture interior laminates.',
    highlights: [
      'Gold aluminum slim frame sliding panels with tempered bronze glass',
      'Velvet drawer organizers with acrylic dividers for watches and accessories',
      'Full-height LED light bars recessed in wardrobe vertical partitions',
      'Integrated vanity table with 3-tone touch LED illuminated mirror'
    ],
    materialSpecs: {
      finish: 'Bronze profile aluminium, bronze tinted glass, Fabric-touch laminate',
      lighting: 'Automated door-sensor warm white LED strips',
      woodwork: 'Action TESA HDHMR boards with anti-termite treatment',
      hardware: 'Blum soft close slides and Hafele pullout organizers'
    }
  },
  {
    id: 'prj-7',
    title: 'Corporate Executive Office & Conference Room',
    category: 'commercial',
    categoryLabel: 'Commercial & Office',
    location: 'Main Road, Vizianagaram',
    area: '1,400 sq.ft',
    timeline: '32 Days',
    budgetRange: '₹9.0L - ₹14.5L',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80'
    ],
    description:
      'Ergonomic executive corporate suite with acoustic glass partition conference room, custom veneer executive desk, linear task lighting, and sleek visitor lounge.',
    highlights: [
      'Double glazed 12mm soundproof glass partitions with black aluminum slim frame',
      'Bespoke 10-seater conference table with integrated pop-up power modules',
      'Acoustic ceiling baffles for speech clarity and echo dampening',
      'Custom reception feature wall with backlit 3D acrylic brand emblem'
    ],
    materialSpecs: {
      finish: 'Natural smoked eucalyptus veneer, acoustic polyester felt, matte black trims',
      lighting: 'Linear architectural LED pendant profiles 24W/m 4000K',
      woodwork: 'Commercial grade BWP plywood with high pressure laminate',
      hardware: 'Dorma glass door floor springs and access control locks'
    }
  }
];
