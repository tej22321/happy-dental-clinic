import Link from 'next/link'
import { CalendarDays, Clock, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react'
import { ALL_PAGES } from '@/lib/pages'
import { CLINIC, MAPS_EMBED_SRC, MAPS_HREF, NAV_LINKS, PHONE_HREF, WHATSAPP_HREF } from '@/lib/site'
import BookButton from './BookButton'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer id="contact" className="bg-ocean-deep pb-28 text-white/75 md:pb-0">
      <div className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          {/* Contact details */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white uppercase sm:text-4xl">Visit Us in Machilipatnam</h2>
            <p className="mt-3 max-w-md">Located in Buttaipeta, opposite Bharat Gas Company and beside Town Hall.</p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="flex gap-3">
                <MapPin size={22} className="mt-0.5 shrink-0 text-teal-light" />
                <address className="not-italic">
                  <span className="block font-bold text-white">{CLINIC.name}</span>
                  {CLINIC.addressLines.map((l) => (
                    <span key={l} className="block text-sm">
                      {l}
                    </span>
                  ))}
                </address>
              </div>
              <div className="flex gap-3">
                <Clock size={22} className="mt-0.5 shrink-0 text-teal-light" />
                <div>
                  <p className="font-bold text-white">Operating Hours</p>
                  <dl className="text-sm">
                    {CLINIC.hours.map((h) => (
                      <div key={h.days} className="mt-1">
                        <dt className="font-semibold text-white/90">{h.days}</dt>
                        <dd>{h.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 rounded-full bg-teal px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-light"
              >
                <Phone size={16} /> {CLINIC.phoneDisplay}
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-bold text-white ring-1 ring-white/15 transition hover:bg-white/20"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
              <a
                href={MAPS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-bold text-white ring-1 ring-white/15 transition hover:bg-white/20"
              >
                <Navigation size={16} /> Get Directions
              </a>
              <BookButton className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-ocean transition hover:bg-mist">
                <CalendarDays size={16} /> Book Appointment
              </BookButton>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-3xl ring-1 ring-white/10">
            <iframe
              title="Map showing Happy Super Speciality Dental Clinic, Buttaipeta, Machilipatnam"
              src={MAPS_EMBED_SRC}
              className="h-80 w-full lg:h-full lg:min-h-[22rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-white/10 py-10 md:grid-cols-[1fr_2fr]">
          <div>
            <Logo />
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <nav aria-label="Footer navigation">
              <p className="text-sm font-bold text-white">Quick Links</p>
              <ul className="mt-3 space-y-2 text-sm">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="transition hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Treatments">
              <p className="text-sm font-bold text-white">Treatments in Machilipatnam</p>
              <ul className="mt-3 space-y-2 text-sm">
                {ALL_PAGES.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/${p.slug}`} className="transition hover:text-white">
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <p className="border-t border-white/10 py-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {CLINIC.name}, Machilipatnam. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
