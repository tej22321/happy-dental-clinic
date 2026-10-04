import { ArrowRight, BadgeCheck, MessageCircle, Star } from 'lucide-react'
import { CLINIC, WHATSAPP_HREF } from '@/lib/site'
import BookButton from './BookButton'
import Photo from './Photo'
import ToothIcon from './ToothIcon'

export function Stars({ size = 16 }) {
  return (
    <span className="flex gap-0.5 text-amber-400" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} fill="currentColor" strokeWidth={0} />
      ))}
    </span>
  )
}

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-ocean via-ocean-mid to-teal text-white"
    >
      {/* Flowing contour lines, after the Pearlsmile hero */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-56 w-full text-white/10"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {[0, 1, 2, 3].map((i) => (
          <path
            key={i}
            d={`M0 ${120 + i * 22} C 300 ${40 + i * 22}, 600 ${200 + i * 10}, 900 ${110 + i * 18} S 1300 ${60 + i * 25}, 1440 ${130 + i * 15}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        ))}
      </svg>
      <ToothIcon
        size={520}
        strokeWidth={0.6}
        className="pointer-events-none absolute top-6 right-[-120px] hidden text-white/[0.06] lg:block"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pt-12 pb-16 sm:px-6 md:pt-16 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pt-20 lg:pb-24">
        {/* Copy */}
        <div className="max-w-xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur sm:text-sm">
            <Star size={14} className="text-amber-300" fill="currentColor" strokeWidth={0} />
            Trusted Super Speciality Dental Care in Machilipatnam
          </p>

          <h1 id="hero-heading" className="mt-6">
            <span className="block text-sm font-semibold tracking-wide text-teal-light uppercase sm:text-base">
              Leading Super Speciality Dental Clinic in Machilipatnam
            </span>
            <span className="mt-3 block text-4xl leading-[1.05] font-extrabold tracking-tight uppercase sm:text-5xl lg:text-6xl">
              Painless, Specialist Dental Care For Your Entire Family
            </span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
            Spearheaded by {CLINIC.doctor} (MDS). Delivering drill-free cavity sealants for kids, painless root canals,
            crowns, aligners, and dental implants.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BookButton className="flex items-center justify-center gap-2 rounded-full bg-teal-light px-7 py-3.5 font-bold text-ocean-deep shadow-xl shadow-ocean-deep/30 transition hover:bg-white">
              Book Appointment <ArrowRight size={18} />
            </BookButton>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-ocean transition hover:bg-mist"
            >
              <MessageCircle size={18} /> WhatsApp Doctor
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <Stars />
            <p className="text-sm text-white/80">
              <strong className="text-white">{CLINIC.rating} / 5</strong> from {CLINIC.reviewCount} local patient reviews
            </p>
          </div>
        </div>

        {/* Arched doctor frame; the outline rings are pseudo-elements */}
        <div className="relative mx-auto w-full max-w-sm before:absolute before:-inset-4 before:rounded-t-[999px] before:rounded-b-[2.5rem] before:border before:border-white/20 after:absolute after:-inset-8 after:hidden after:rounded-t-[999px] after:rounded-b-[3rem] after:border after:border-dashed after:border-white/10 sm:max-w-md sm:after:block lg:mr-0">
          <Photo
            slot="hero"
            alt="Dr. Ch. Tanuja MDS - Lead Specialist at Happy Super Speciality Dental Clinic Machilipatnam"
            className="aspect-[4/5] w-full rounded-t-[999px] rounded-b-[2rem] bg-gradient-to-b from-white to-mist shadow-2xl shadow-ocean-deep/40"
            imgClassName="object-top"
            sizes="(min-width: 640px) 448px, 384px"
            priority
          />

          {/* Rating badge overlay */}
          <div className="absolute -bottom-6 -left-2 z-10 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-ocean shadow-xl sm:-left-10">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-amber-50 text-amber-400">
              <Star size={22} fill="currentColor" strokeWidth={0} />
            </span>
            <p className="leading-tight">
              <span className="block text-lg font-extrabold">
                {CLINIC.rating} <span className="text-sm font-semibold text-slate-400">/ 5 Rating</span>
              </span>
              <span className="block text-xs text-slate-500">from local patient reviews</span>
            </p>
          </div>

          {/* Credential chip */}
          <div className="absolute top-10 -right-2 z-10 flex items-center gap-2 rounded-2xl bg-ocean-deep/80 px-4 py-3 text-white shadow-xl ring-1 ring-white/15 backdrop-blur sm:-right-8">
            <BadgeCheck size={22} className="text-teal-light" />
            <p className="leading-tight">
              <span className="block text-sm font-bold">{CLINIC.doctorFull}</span>
              <span className="block text-xs text-white/70">Pedodontist &amp; Lead Specialist</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
