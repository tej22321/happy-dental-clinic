import Link from 'next/link'
import { ArrowRight, MapPin, MessageCircle, Phone } from 'lucide-react'
import { CLINIC, MAPS_HREF, NAV_LINKS, PHONE_HREF, WHATSAPP_HREF } from '@/lib/site'
import BookButton from './BookButton'
import Logo from './Logo'
import MobileMenu from './MobileMenu'

export default function Header() {
  return (
    <>
      {/* Top utility header */}
      <div className="bg-ocean-deep text-xs text-white/80 sm:text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
          <a
            href={MAPS_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-w-0 items-center gap-1.5 transition hover:text-white"
          >
            <MapPin size={15} className="shrink-0 text-teal-light" />
            <span className="truncate">{CLINIC.addressShort}</span>
          </a>
          <div className="hidden shrink-0 items-center gap-4 md:flex">
            <a href={PHONE_HREF} className="flex items-center gap-1.5 font-semibold text-white transition hover:text-teal-light">
              <Phone size={15} /> {CLINIC.phoneDisplay}
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 border-l border-white/20 pl-4 font-semibold text-white transition hover:text-teal-light"
            >
              <MessageCircle size={15} /> WhatsApp Consult
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-ocean/95 backdrop-blur supports-[backdrop-filter]:bg-ocean/85">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <Logo />

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <BookButton className="hidden items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-teal/30 transition hover:bg-teal-light sm:flex">
              Schedule Appointment <ArrowRight size={16} />
            </BookButton>
            <MobileMenu links={NAV_LINKS} />
          </div>
        </nav>
      </header>
    </>
  )
}
