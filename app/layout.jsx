import localFont from 'next/font/local'
import BookingProvider from '@/components/BookingProvider'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MobileBar from '@/components/MobileBar'
import { SERVICE_PAGES } from '@/lib/pages'
import { JsonLd, clinicSchema } from '@/lib/schema'
import { CLINIC, SITE_URL, assetPath } from '@/lib/site'
import './globals.css'

// Self-hosted variable font (latin subset, weights 200–800), so builds don't depend on Google Fonts.
const jakarta = localFont({
  src: './fonts/PlusJakartaSans-latin-variable.woff2',
  weight: '200 800',
  variable: '--font-jakarta',
  display: 'swap',
})

const SERVICE_OPTIONS = ['General Check-up', ...SERVICE_PAGES.map((p) => p.bookService), 'Other / Not sure']

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${CLINIC.name} | Best Dentist in Machilipatnam – Dr. Ch. Tanuja MDS`,
    template: `%s | ${CLINIC.name}`,
  },
  description:
    'Leading super speciality dental clinic in Buttaipeta, Machilipatnam. Dr. Ch. Tanuja (MDS, Pedodontist) offers pediatric dentistry, painless root canals, zirconia crowns, dental implants, sedation dentistry and online consultations.',
  applicationName: CLINIC.name,
  icons: {
    icon: [
      { url: assetPath('/favicon.ico'), sizes: '48x48' },
      { url: assetPath('/favicon.svg'), type: 'image/svg+xml' },
    ],
    apple: assetPath('/apple-touch-icon.png'),
  },
  manifest: assetPath('/site.webmanifest'),
  openGraph: {
    type: 'website',
    siteName: CLINIC.name,
    locale: 'en_IN',
    images: [{ url: '/images/dr-tanuja-hero.png', alt: `${CLINIC.doctorFull} – ${CLINIC.name}` }],
  },
  other: {
    'geo.region': 'IN-AP',
    'geo.placename': 'Machilipatnam',
  },
}

export const viewport = {
  themeColor: '#073549',
  viewportFit: 'cover',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={jakarta.variable}>
      <body>
        <JsonLd data={clinicSchema()} />
        <BookingProvider serviceOptions={SERVICE_OPTIONS}>
          <Header />
          <main>{children}</main>
          <Footer />
          <MobileBar />
        </BookingProvider>
      </body>
    </html>
  )
}
