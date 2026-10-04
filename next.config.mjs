/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export (out/), so the site can be hosted on GitHub Pages.
  output: 'export',
  // Set to "/<repo-name>" when served from a GitHub Pages project URL; empty locally.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    // GitHub Pages has no image-optimization server; public/images already ships WebP copies.
    unoptimized: true,
  },
}

if (process.env.NODE_ENV === 'production' && !process.env.NEXT_PUBLIC_SITE_URL) {
  console.warn(
    '\n⚠  NEXT_PUBLIC_SITE_URL is not set — canonical URLs and sitemap.xml will use a placeholder domain.\n' +
      '   Set it in .env.production (see .env.example) before deploying.\n',
  )
}

export default nextConfig
