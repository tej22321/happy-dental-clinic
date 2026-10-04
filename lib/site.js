// Live domain, no trailing slash. Drives metadataBase, canonical URLs, JSON-LD and sitemap.xml.
// The .example fallback is a reserved, non-resolvable domain so a missing env var is obvious.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://happy-dental-clinic.example').replace(/\/+$/, '')

export const absoluteUrl = (path = '/') => `${SITE_URL}${path === '/' ? '' : path}`

// Path prefix when served from a subdirectory (e.g. GitHub Pages "/repo-name"). next/link adds it
// automatically; plain <img> tags, unoptimized next/image and metadata icons need assetPath().
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''
export const assetPath = (path) => `${BASE_PATH}${path}`

export const CLINIC = {
  name: 'Happy Super Speciality Dental Clinic',
  doctor: 'Dr. Ch. Tanuja',
  doctorFull: 'Dr. Ch. Tanuja, MDS',
  phoneDisplay: '+91 76758 28833',
  phoneE164: '+917675828833',
  addressShort: '25/324, Buttaipeta, Opp. Bharat Gas Company, Beside Town Hall, Machilipatnam - 521001',
  addressLines: [
    '25/324, Buttaipeta,',
    'Opp. Bharat Gas Company, Beside Town Hall,',
    'Machilipatnam, Andhra Pradesh - 521001',
  ],
  address: {
    streetAddress: '25/324, Buttaipeta, Opp. Bharat Gas Company, Beside Town Hall',
    addressLocality: 'Machilipatnam',
    addressRegion: 'Andhra Pradesh',
    postalCode: '521001',
    addressCountry: 'IN',
  },
  rating: '4.8',
  reviewCount: '50+',
  // TODO: confirm actual clinic timings with the clinic before launch.
  hours: [
    { days: 'Monday – Saturday', time: '10:00 AM – 2:00 PM, 5:00 PM – 9:00 PM' },
    { days: 'Sunday', time: 'By prior appointment' },
  ],
}

export const PHONE_HREF = `tel:${CLINIC.phoneE164}`
export const whatsappWith = (text) => `https://wa.me/917675828833?text=${encodeURIComponent(text)}`
export const WHATSAPP_HREF = whatsappWith(`Hello ${CLINIC.name}, I would like to book an appointment.`)
export const MAPS_HREF = 'https://maps.google.com/?q=Happy+Super+Speciality+Dental+Clinic+Machilipatnam'
export const MAPS_EMBED_SRC =
  'https://maps.google.com/maps?q=Happy+Super+Speciality+Dental+Clinic+Machilipatnam&z=16&output=embed'

// Homepage sections. Absolute ("/#...") so they also work from the service pages.
export const NAV_LINKS = [
  { label: 'About Us', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Pediatric Care', href: '/pediatric-dentistry' },
  { label: 'Teledentistry', href: '/teledentistry' },
  { label: 'Contact Us', href: '/#contact' },
]
