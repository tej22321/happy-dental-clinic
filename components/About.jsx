import { ArrowRight, Award, Baby, Phone, ShieldCheck, Star } from 'lucide-react'
import { CLINIC, PHONE_HREF } from '@/lib/site'
import BookButton from './BookButton'
import Photo from './Photo'

const HIGHLIGHTS = [
  {
    icon: ShieldCheck,
    title: '100% Hospital-Grade Sterilization',
    text: 'Every instrument goes through autoclave sterilization protocols before it reaches you.',
  },
  {
    icon: Award,
    title: 'MDS Specialist-Led Practice',
    text: `Treatment plans are designed and led by ${CLINIC.doctorFull} and her trained team.`,
  },
  {
    icon: Baby,
    title: 'Kid-Safe Setup & Play Area',
    text: 'A friendly, colourful environment that helps children feel at ease from the waiting room on.',
  },
]

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Offset-framed photo, after Pearlsmile's about block */}
        <div className="relative mr-4 mb-4">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border-2 border-teal/40" aria-hidden="true" />
          <Photo
            slot="about"
            alt="Dr. Ch. Tanuja MDS consulting with patients at Happy Super Speciality Dental Clinic Machilipatnam"
            className="aspect-[4/3] w-full rounded-[2rem] shadow-xl sm:aspect-[16/10]"
            sizes="(min-width: 1024px) 600px, 100vw"
          />
          <div className="absolute -top-6 -right-4 grid h-28 w-28 place-items-center rounded-full bg-teal text-center text-white shadow-xl ring-8 ring-white sm:h-32 sm:w-32">
            <div className="rounded-full border-2 border-dashed border-white/50 p-4 leading-tight">
              <span className="block text-2xl font-extrabold">MDS</span>
              <span className="block text-[11px] font-medium">Pedodontist</span>
            </div>
          </div>
        </div>

        <div>
          <p className="flex items-center gap-2 text-sm font-bold tracking-wider text-teal uppercase">
            <Star size={14} fill="currentColor" strokeWidth={0} /> About {CLINIC.doctor}
          </p>
          <h2 id="about-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-ocean uppercase sm:text-4xl">
            Specialist Care You Can Trust, In A Clinic You&apos;ll Feel Safe In
          </h2>
          <p className="mt-5 leading-relaxed text-slate-600">
            At {CLINIC.name}, {CLINIC.doctorFull} — a specialist pedodontist — leads a team focused on painless, preventive
            and long-lasting dental care for children and adults across Machilipatnam. From drill-free sealants for kids
            to root canals, crowns and implants, every treatment is planned around your comfort.
          </p>

          <ul className="mt-8 space-y-4">
            {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4 rounded-2xl bg-mist/70 p-4 transition hover:bg-mist">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white text-teal shadow-sm">
                  <Icon size={24} strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="font-bold text-ocean">{title}</h3>
                  <p className="mt-0.5 text-sm text-slate-600">{text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BookButton className="flex items-center justify-center gap-2 rounded-full bg-teal px-7 py-3.5 font-bold text-white shadow-lg shadow-teal/25 transition hover:bg-ocean">
              Book Appointment <ArrowRight size={18} />
            </BookButton>
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 rounded-full border-2 border-ocean/15 px-7 py-3.5 font-bold text-ocean transition hover:border-teal hover:text-teal"
            >
              <Phone size={18} /> Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
