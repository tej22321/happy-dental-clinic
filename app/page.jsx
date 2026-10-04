import About from '@/components/About'
import Hero from '@/components/Hero'
import Pathway from '@/components/Pathway'
import Pediatric from '@/components/Pediatric'
import Services from '@/components/Services'
import Teledentistry from '@/components/Teledentistry'

export const metadata = {
  alternates: { canonical: '/' },
  openGraph: {
    url: '/',
    title: 'Happy Super Speciality Dental Clinic – Machilipatnam',
    description: 'Painless, specialist dental care for your entire family, led by Dr. Ch. Tanuja (MDS).',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Pediatric />
      <Pathway />
      <Teledentistry />
    </>
  )
}
