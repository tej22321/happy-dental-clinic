import { ArrowRight, Star } from 'lucide-react'
import BookButton from './BookButton'
import Photo from './Photo'

const STEPS = [
  {
    n: '01',
    title: 'Comprehensive Consultation / Online Teledentistry',
    text: 'Visit the clinic or consult us online. We examine, listen, and explain every finding clearly.',
    image: 'about',
    alt: 'Dental consultation with Dr. Ch. Tanuja at Happy Super Speciality Dental Clinic Machilipatnam',
  },
  {
    n: '02',
    title: 'Personalized & Painless Treatment Plan',
    text: 'A plan built around your needs, budget and comfort — with sedation options when needed.',
    image: 'rootCanal',
    alt: 'Painless dental treatment in progress at Happy Super Speciality Dental Clinic Machilipatnam',
  },
  {
    n: '03',
    title: 'Long-term Preventive Care & Oral Hygiene',
    text: 'Regular reviews, cleanings and home-care guidance that keep your smile strong for years.',
    image: 'treatmentRoom',
    alt: 'Modern sterilized dental treatment room at Happy Super Speciality Dental Clinic Machilipatnam',
  },
]

export default function Pathway() {
  return (
    <section aria-labelledby="pathway-heading" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:px-8">
        <div>
          <p className="flex items-center gap-2 text-sm font-bold tracking-wider text-teal uppercase">
            <Star size={14} fill="currentColor" strokeWidth={0} /> How We Work
          </p>
          <h2 id="pathway-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-ocean uppercase sm:text-4xl">
            Your Path to a Stronger Smile
          </h2>
          <p className="mt-5 leading-relaxed text-slate-600">
            Specialist dental care should feel simple. From your first conversation to long-term maintenance, we guide you
            through every step with clear communication and gentle, expert care.
          </p>
          <BookButton className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3.5 font-bold text-white shadow-lg shadow-teal/25 transition hover:bg-ocean">
            Schedule Online <ArrowRight size={18} />
          </BookButton>
        </div>

        <ol className="relative space-y-6">
          <span className="absolute top-8 bottom-8 left-[27px] w-px border-l-2 border-dashed border-teal/40 sm:left-[31px]" aria-hidden="true" />
          {STEPS.map((s) => (
            <li key={s.n} className="relative flex gap-4 sm:gap-6">
              <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border-2 border-teal bg-white text-lg font-extrabold text-teal shadow-md sm:h-16 sm:w-16 sm:text-xl">
                {s.n}
              </span>
              <article className="group flex flex-1 flex-col overflow-hidden rounded-3xl bg-mist ring-1 ring-slate-900/5 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-ocean/10 sm:flex-row sm:items-center">
                <div className="flex-1 p-5 sm:p-6">
                  <p className="text-xs font-bold tracking-wider text-teal uppercase">Step {s.n}</p>
                  <h3 className="mt-1 text-lg font-bold text-ocean">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
                </div>
                <Photo
                  slot={s.image}
                  alt={s.alt}
                  className="aspect-[16/9] w-full shrink-0 sm:m-4 sm:aspect-square sm:h-32 sm:w-32 sm:rounded-full sm:ring-4 sm:ring-white"
                  sizes="(min-width: 640px) 128px, 100vw"
                />
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
