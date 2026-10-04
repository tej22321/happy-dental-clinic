import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'
import { SERVICE_PAGES } from '@/lib/pages'
import BookButton from './BookButton'
import Photo from './Photo'

export default function Services({ heading = 'Pediatric Dentistry, Painless Root Canals & Implants in Buttaipet', exclude }) {
  const services = SERVICE_PAGES.filter((s) => s.slug !== exclude)
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-mist py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-2 text-sm font-bold tracking-wider text-teal uppercase">
            <Star size={14} fill="currentColor" strokeWidth={0} /> Our Specialized Services
          </p>
          <h2 id="services-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-ocean uppercase sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-slate-600">
            Specialist-led treatments for every age — from a child&apos;s first check-up to full-mouth restorations.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ slug, cardTitle, cardText, icon: Icon, image, imagePosition = '', imageAlt, bookService }) => (
            <li key={slug}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-900/5 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ocean/10">
                <Photo
                  slot={image}
                  alt={imageAlt}
                  icon={Icon}
                  className="aspect-[16/10] w-full"
                  imgClassName={`${imagePosition} transition duration-500 group-hover:scale-105`}
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                />
                <div className="relative flex flex-1 flex-col px-6 pt-10 pb-6">
                  <span className="absolute -top-7 left-6 grid h-14 w-14 place-items-center rounded-2xl bg-white text-teal shadow-lg ring-1 ring-slate-900/5 transition group-hover:bg-teal group-hover:text-white">
                    <Icon size={26} strokeWidth={1.8} />
                  </span>
                  <h3 className="text-lg font-bold text-ocean">
                    <Link href={`/${slug}`} className="transition hover:text-teal">
                      {cardTitle}
                    </Link>
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{cardText}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                    <BookButton
                      service={bookService}
                      className="inline-flex items-center gap-2 rounded-full bg-mist px-5 py-2.5 text-sm font-bold text-ocean transition group-hover:bg-teal group-hover:text-white"
                    >
                      Book This Service <ArrowRight size={16} />
                    </BookButton>
                    <Link
                      href={`/${slug}`}
                      className="text-sm font-semibold text-teal underline-offset-4 hover:underline"
                      aria-label={`Learn more about ${cardTitle}`}
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
