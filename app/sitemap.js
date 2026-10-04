import { ALL_PAGES } from '@/lib/pages'
import { absoluteUrl } from '@/lib/site'

// Generated once at build time (required by the static export).
export const dynamic = 'force-static'

/** Served at /sitemap.xml: the home page plus every keyword route in lib/pages.js. */
export default function sitemap() {
  const lastModified = new Date()
  return [
    { url: absoluteUrl('/'), lastModified, changeFrequency: 'monthly', priority: 1 },
    ...ALL_PAGES.map((p) => ({
      url: absoluteUrl(`/${p.slug}`),
      lastModified,
      changeFrequency: 'monthly',
      priority: p.kind === 'location' ? 0.9 : 0.8,
    })),
  ]
}
