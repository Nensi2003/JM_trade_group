export const company = {
  name: 'JM Trade Group',
  email: 'info@jmtradegroup.de',
  address: ['Königsallee 19, 40215', 'Düsseldorf, Germany'],
  socials: {
    linkedin: 'https://www.linkedin.com/company/jm-trade-group/',
    instagram: 'https://www.instagram.com/jmtradegroup/',
  },
};

// Update the homepage service panels here: title, description, service labels,
// and the button destination/text all stay together in this editable content list.
export const servicePanels = [
  {
    id: 'legal-services',
    className: 'service-legal',
    title: 'Legal Services',
    description: 'Practical legal and commercial support for business working across borders.',
    services: [
      'Cross Border Dispute Resolution',
      'Contract Law',
      'Incoterms & Cross Border Contracts',
      'Business Law',
    ],
  },
  {
    id: 'china-services',
    className: 'service-china',
    title: 'Business with China',
    description: 'On-the-ground support to help you source, produce and deliver with confidence.',
    services: [
      'Product Sourcing',
      'Price Negotiation',
      'Production Management',
      'Supplier Verification',
      'Quality Control',
      'Quality Inspections',
    ],
    action: {
      label: 'Discover our China services',
      href: '/china/',
    },
  },
];

export const founders = [
  {
    name: 'Jurgen Mecalla',
    role: 'Lawyer · Founder',
    location: 'Germany',
    image: '/images/jurgen-mecalla.png',
    alt: 'Portrait of Jurgen Mecalla',
  },
  {
    name: 'Camille Wang',
    role: 'Project Manager',
    location: 'China',
    image: '/images/camille-wang.png',
    alt: 'Portrait of Camille Wang',
  },
];

// The China overview and its metric detail pages can use this shared data later.
// Update these values here when the company figures change.
export const companyMetrics = [
  { value: 5, label: 'Ongoing Projects', href: '/china/projects/ongoing/', ring: 24, detail: 'Active work coordinated with our China team.' },
  { value: 35, label: 'Shipped Containers', href: '/china/containers/', ring: 43, detail: 'Containers shipped for client projects.' },
  { value: 8, label: 'Finished Projects', href: '/china/projects/finished/', ring: 22, detail: 'Projects delivered from planning through completion.' },
];

// Update these image paths, captions, or alt descriptions to maintain the shipment gallery.
export const shippedContainerPhotos = [
  { image: '/images/shipments/frame-assembly.png', stage: 'Partner workshop', orientation: 'landscape', caption: 'Furniture frames assembled', alt: 'Rows of wooden furniture frames assembled at a partner workshop.' },
  { image: '/images/shipments/chair-production.png', stage: 'Partner workshop', orientation: 'landscape', caption: 'Chair production', alt: 'Finished wooden chairs arranged for inspection at the workshop.' },
  { image: '/images/shipments/palletized-goods.png', stage: 'Packing & preparation', orientation: 'portrait', caption: 'Goods prepared for dispatch', alt: 'A forklift moving a pallet of packaged goods.' },
  { image: '/images/shipments/workshop-craftsmanship.png', stage: 'Partner workshop', orientation: 'landscape', caption: 'Craftsmanship in progress', alt: 'A craftsperson measuring a furniture component during production.' },
  { image: '/images/shipments/crated-shipment.png', stage: 'Packing & preparation', orientation: 'portrait', caption: 'Crated goods ready to load', alt: 'A large wooden shipping crate secured for transport.' },
  { image: '/images/shipments/cabinet-production.png', stage: 'Partner workshop', orientation: 'landscape', caption: 'Cabinet production', alt: 'Finished storage cabinets lined up at the factory.' },
  { image: '/images/shipments/upholstered-seating.png', stage: 'Partner workshop', orientation: 'landscape', caption: 'Upholstered seating', alt: 'Sofas and chairs arranged on a factory floor.' },
  { image: '/images/shipments/container-cargo-pallet.png', stage: 'Container loading', orientation: 'portrait', caption: 'Cargo loaded into a container', alt: 'A large pallet secured inside a shipping container.' },
  { image: '/images/shipments/container-cartons.png', stage: 'Container loading', orientation: 'portrait', caption: 'Packed cartons inside a container', alt: 'Rows of cartons packed inside a shipping container.' },
  { image: '/images/shipments/seating-inspection.png', stage: 'Partner workshop', orientation: 'landscape', caption: 'Finished seating prepared for shipment', alt: 'Rows of upholstered seating checked at a production facility.' },
  { image: '/images/shipments/product-quality-work.png', stage: 'Partner workshop', orientation: 'landscape', caption: 'Product quality checks', alt: 'A worker checking a furniture component during production.' },
  { image: '/images/shipments/container-loading-secured.png', stage: 'Container loading', orientation: 'portrait', caption: 'Container secured for transit', alt: 'A loaded shipping container secured with cargo netting on a truck.' },
];

export const chinaSystemDisciplines = [
  {
    title: 'ELV Systems',
    description: 'We connect you with specialist partners for integrated low-voltage and building technology.',
    columns: 5,
    items: [
      { label: 'Security systems', icon: 'security' },
      { label: 'IT systems', icon: 'it' },
      { label: 'Smart room control', icon: 'smart-room' },
      { label: 'Audio & video', icon: 'audiovisual' },
      { label: 'Acoustic solutions', icon: 'acoustic' },
    ],
  },
  {
    title: 'MEPF Systems',
    description: 'We coordinate with experienced companies across essential building systems.',
    columns: 4,
    items: [
      { label: 'HVAC systems', icon: 'hvac' },
      { label: 'Water systems', icon: 'water' },
      { label: 'Fire protection', icon: 'fire' },
      { label: 'Electrical systems', icon: 'electrical' },
    ],
  },
];

export const furniturePages = [
  {
    title: 'Hotel Furniture',
    href: '/china/hotel-furniture/',
    description: 'We connect hospitality projects with Chinese manufacturers and coordinate sourcing for each space.',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Calm, contemporary hotel guest room',
    categories: [
      { title: 'Hotel room', image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=80', alt: 'Contemporary furnished hotel room' },
      { title: 'Bathroom', image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=80', alt: 'Modern hotel bathroom interior' },
      { title: 'Spa', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80', alt: 'Spa relaxation area' },
      { title: 'Kitchen', image: 'https://images.unsplash.com/photo-1790156591731-09dbf6aee75a?auto=format&fit=crop&w=900&q=80', alt: 'Professional restaurant kitchen with stainless steel worktops, extraction hood, and hanging cookware' },
      { title: 'Public area', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80', alt: 'Hotel public area and lounge' },
      { title: 'Gym', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80', alt: 'Modern fitness room' },
      { title: 'Pool', image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=900&q=80', alt: 'Indoor pool area' },
    ],
  },
  {
    title: 'Commercial Furniture',
    href: '/china/commercial-furniture/',
    description: 'We connect commercial projects with Chinese manufacturers and coordinate sourcing for each space.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Bright, contemporary commercial workspace',
    categories: [
      { title: 'Office furniture', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80', alt: 'Modern open-plan office furniture' },
      { title: 'School furniture', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=80', alt: 'Bright classroom with desks' },
      { title: 'Hall furniture', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80', alt: 'Furniture in a spacious public hall' },
      { title: 'Hospital furniture', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80', alt: 'Modern hospital interior' },
      { title: 'Restaurant furniture', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80', alt: 'Contemporary restaurant dining furniture' },
    ],
  },
];
