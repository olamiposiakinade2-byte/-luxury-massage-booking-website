export const businessConfig = {
  brand: 'Mysa House',
  location: { city: 'Nashville', region: 'Tennessee', country: 'USA', timezone: 'America/Chicago', serviceArea: 'Nashville, Tennessee and nearby neighborhoods' },
  contact: { email: 'hello@mysa.house', phone: '+1 (615) 555-0148' },
  demoNotice: 'Demo only — requests are not sent to a real business.',
  services: [
    { id: 'restore', title: 'Restorative Ritual', duration: '90 minutes', price: '$185', description: 'A slow, intuitive full-body ritual for deep release and nervous-system calm.' },
    { id: 'deep', title: 'Deep Tissue Therapy', duration: '75 minutes', price: '$165', description: 'Targeted pressure and skilled movement to soften chronic tension and restore range.' },
    { id: 'glow', title: 'Prenatal Glow', duration: '60 minutes', price: '$145', description: 'Nurturing, side-lying comfort designed to ease the changing body with care.' }
  ],
  demoSlots: ['10:00 AM', '11:30 AM', '1:00 PM', '2:30 PM', '4:00 PM', '5:30 PM']
} as const;