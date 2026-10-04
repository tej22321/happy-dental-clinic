import { absoluteUrl } from '@/lib/site'

// Generated once at build time (required by the static export).
export const dynamic = 'force-static'

/** Served at /robots.txt. */
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: absoluteUrl('/sitemap.xml'),
  }
}
