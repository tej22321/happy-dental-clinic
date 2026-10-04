import { CalendarDays, MessageCircle, Video } from 'lucide-react'
import { CLINIC, WHATSAPP_HREF } from '@/lib/site'
import BookButton from './BookButton'

export default function Teledentistry() {
  return (
    <section id="teledentistry" aria-labelledby="tele-heading" className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-teal to-ocean-mid px-6 py-12 text-white shadow-xl sm:px-12 lg:py-14">
        <Video
          size={260}
          strokeWidth={0.8}
          className="pointer-events-none absolute -right-10 -bottom-16 text-white/10"
          aria-hidden="true"
        />
        <div className="relative grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold">
              <Video size={16} /> Teledentistry
            </span>
            <h2 id="tele-heading" className="mt-4 text-2xl font-extrabold tracking-tight uppercase sm:text-3xl">
              Can&apos;t visit right away? Consult {CLINIC.doctor} online.
            </h2>
            <p className="mt-3 max-w-xl text-white/85">
              Share your concern and photos on WhatsApp or schedule a video consultation — get specialist guidance from
              home, then visit only when you need to.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-ocean transition hover:bg-mist"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
            <BookButton
              service="Teledentistry & Online Consultations"
              className="flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-7 py-3.5 font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              <CalendarDays size={18} /> Schedule Online
            </BookButton>
          </div>
        </div>
      </div>
    </section>
  )
}
