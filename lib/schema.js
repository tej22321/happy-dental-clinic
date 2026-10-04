import { ALL_PAGES } from './pages'
import { CLINIC, MAPS_HREF, absoluteUrl } from './site'

const CLINIC_ID = absoluteUrl('/#clinic')

/** Dentist / LocalBusiness JSON-LD, rendered once in the root layout. */
export function clinicSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    '@id': CLINIC_ID,
    name: CLINIC.name,
    description:
      'Super speciality dental clinic in Buttaipeta, Machilipatnam offering pediatric dentistry, painless root canal therapy, zirconia crowns, dental implants, sedation dentistry, cosmetic dentistry and teledentistry.',
    url: absoluteUrl('/'),
    image: absoluteUrl('/images/dr-tanuja-hero.png'),
    logo: absoluteUrl('/logo-512.png'),
    telephone: CLINIC.phoneE164,
    priceRange: '₹₹',
    address: { '@type': 'PostalAddress', ...CLINIC.address },
    hasMap: MAPS_HREF,
    areaServed: ['Machilipatnam', 'Buttaipeta', 'Krishna District'],
    medicalSpecialty: 'Dentistry',
    employee: {
      '@type': 'Person',
      name: CLINIC.doctor,
      honorificSuffix: 'MDS',
      jobTitle: 'Lead Dental Specialist (Pedodontist)',
    },
    availableService: ALL_PAGES.filter((p) => p.kind === 'service').map((p) => ({
      '@type': 'MedicalProcedure',
      name: p.name,
      url: absoluteUrl(`/${p.slug}`),
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: CLINIC.rating,
      bestRating: '5',
      reviewCount: CLINIC.reviewCount.replace(/\D/g, ''),
    },
  }
}

/** Breadcrumb + FAQ JSON-LD for a keyword page. */
export function pageSchema(page) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: page.name, item: absoluteUrl(`/${page.slug}`) },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ]
}

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      // Escape "<" so content can never close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
