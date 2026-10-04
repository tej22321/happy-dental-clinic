import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ChevronRight, CircleCheck, MessageCircle, Phone, Star } from 'lucide-react'
import BookButton from '@/components/BookButton'
import Photo from '@/components/Photo'
import Services from '@/components/Services'
import { ALL_PAGES, getPage } from '@/lib/pages'
import { JsonLd, pageSchema } from '@/lib/schema'
import { CLINIC, PHONE_HREF, WHATSAPP_HREF } from '@/lib/site'

// Only the slugs in lib/pages.js exist; anything else is a 404.
export const dynamicParams = false

export function generateStaticParams() {
  return ALL_PAGES.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const page = getPage(slug)
  if (!page) return {}
  return {
    // metaTitles are already keyword-complete; skip the layout's "| Clinic name" suffix to stay under ~65 chars.
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    // Canonical strips query strings (?utm_source=..., ?hello=123) so they never index as duplicates.
    alternates: { canonical: `/${page.slug}` },
    openGraph: { url: `/${page.slug}`, title: page.metaTitle, description: page.metaDescription },
  }
}

export default async function KeywordPage({ params }) {
  const { slug } = await params
  const page = getPage(slug)
  if (!page) notFound()

  const { name, eyebrow, h1, intro, highlights, faqs, image, imageAlt, imagePosition = '', icon, bookService } = page

  return (
    <>
      <JsonLd data={pageSchema(page)} />

      <section aria-labelledby="page-heading" className="bg-gradient-to-br from-ocean via-ocean-mid to-teal text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pt-8 pb-16 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:px-8 lg:pt-10 lg:pb-20">
          <div>
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-1 text-sm text-white/70">
                <li>
                  <Link href="/" className="transition hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight size={14} />
                </li>
                <li aria-current="page" className="text-white">
                  {name}
                </li>
              </ol>
            </nav>

            <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold ring-1 ring-white/20 sm:text-sm">
              <Star size={14} className="text-amber-300" fill="currentColor" strokeWidth={0} /> {eyebrow}
            </p>
            <h1 id="page-heading" className="mt-5 text-3xl leading-tight font-extrabold tracking-tight uppercase sm:text-4xl lg:text-5xl">
              {h1}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">{intro[0]}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BookButton
                service={bookService}
                className="flex items-center justify-center gap-2 rounded-full bg-teal-light px-7 py-3.5 font-bold text-ocean-deep shadow-xl shadow-ocean-deep/30 transition hover:bg-white"
              >
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
          </div>

          <Photo
            slot={image}
            alt={imageAlt}
            icon={icon}
            className="aspect-[4/3] w-full rounded-[2rem] shadow-2xl shadow-ocean-deep/40"
            imgClassName={imagePosition}
            sizes="(min-width: 1024px) 560px, 100vw"
            priority
          />
        </div>
      </section>

      <section aria-labelledby="overview-heading" className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:px-8">
          <div>
            <h2 id="overview-heading" className="text-3xl font-extrabold tracking-tight text-ocean uppercase sm:text-4xl">
              What to expect
            </h2>
            {intro.slice(1).map((p) => (
              <p key={p} className="mt-5 leading-relaxed text-slate-600">
                {p}
              </p>
            ))}
            <p className="mt-5 leading-relaxed text-slate-600">
              Treatment is led by {CLINIC.doctorFull} at our clinic in Buttaipeta, Machilipatnam.
            </p>
            <a
              href={PHONE_HREF}
              className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-ocean/15 px-7 py-3.5 font-bold text-ocean transition hover:border-teal hover:text-teal"
            >
              <Phone size={18} /> Call {CLINIC.phoneDisplay}
            </a>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {highlights.map((h) => (
              <li key={h.title} className="rounded-3xl bg-mist p-6 ring-1 ring-slate-900/5">
                <CircleCheck size={24} className="text-teal" />
                <h3 className="mt-3 font-bold text-ocean">{h.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{h.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="bg-mist py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 id="faq-heading" className="text-center text-3xl font-extrabold tracking-tight text-ocean uppercase sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group rounded-2xl bg-white p-5 ring-1 ring-slate-900/5 open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-ocean [&::-webkit-details-marker]:hidden">
                  {q}
                  <ChevronRight size={20} className="shrink-0 text-teal transition group-open:rotate-90" />
                </summary>
                <p className="mt-3 leading-relaxed text-slate-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Services heading="Other Treatments at Our Machilipatnam Clinic" exclude={slug} />
    </>
  )
}
