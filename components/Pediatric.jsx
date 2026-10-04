import Link from 'next/link'
import { ArrowRight, CircleCheck, Star } from 'lucide-react'
import BookButton from './BookButton'
import Photo from './Photo'

const POINTS = [
  'Drill-free dental sealants that protect young teeth from cavities',
  'Gentle cavity care by a specialist pedodontist (MDS)',
  'Sedation options for anxious children — zero pain, zero fear',
  'Colourful kid-safe waiting area with toys and play corner',
]

export default function Pediatric() {
  return (
    <section
      id="pediatric"
      aria-labelledby="pediatric-heading"
      className="relative overflow-hidden bg-ocean py-20 text-white sm:py-24"
    >
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-teal/20 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="flex items-center gap-2 text-sm font-bold tracking-wider text-teal-light uppercase">
            <Star size={14} fill="currentColor" strokeWidth={0} /> Pediatric Care
          </p>
          <h2 id="pediatric-heading" className="mt-3 text-3xl font-extrabold tracking-tight uppercase sm:text-4xl">
            Happy Visits For Little Smiles
          </h2>
          <p className="mt-5 leading-relaxed text-white/75">
            Children deserve dental care designed around them. Our pediatric dentistry is led by a specialist pedodontist
            who knows how to make every visit calm, positive and pain-free.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {POINTS.map((p) => (
              <li key={p} className="flex gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <CircleCheck size={20} className="mt-0.5 shrink-0 text-teal-light" />
                <span className="text-sm text-white/90">{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <BookButton
              service="Pediatric Dentistry"
              className="inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3.5 font-bold text-white shadow-lg shadow-ocean-deep/40 transition hover:bg-teal-light"
            >
              Book a Kids&apos; Check-up <ArrowRight size={18} />
            </BookButton>
            <Link href="/pediatric-dentistry" className="font-semibold text-teal-light underline-offset-4 hover:underline">
              More on kids&apos; dentistry
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Photo
            slot="pediatric"
            alt="Child receiving gentle pediatric dental care from Dr. Ch. Tanuja in Machilipatnam"
            className="col-span-2 aspect-[16/9] w-full rounded-3xl"
            sizes="(min-width: 1024px) 600px, 100vw"
          />
          <Photo
            slot="reception"
            alt="Kid-friendly reception and play area at Happy Super Speciality Dental Clinic Machilipatnam"
            className="aspect-[4/3] w-full rounded-3xl"
            sizes="(min-width: 1024px) 300px, 50vw"
          />
          <figure className="relative">
            <Photo
              slot="schoolCamp"
              alt="School dental screening camp conducted by Dr. Ch. Tanuja in Machilipatnam"
              className="aspect-[4/3] w-full rounded-3xl"
              sizes="(min-width: 1024px) 300px, 50vw"
            />
            <figcaption className="absolute inset-x-2 bottom-2 rounded-xl bg-ocean-deep/80 px-3 py-1.5 text-center text-xs font-semibold backdrop-blur">
              School dental camps
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
