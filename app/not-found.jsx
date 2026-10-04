import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = { title: 'Page not found', robots: { index: false } }

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 py-28 text-center sm:px-6">
      <p className="text-sm font-bold tracking-wider text-teal uppercase">404</p>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ocean uppercase sm:text-4xl">Page not found</h1>
      <p className="mt-4 text-slate-600">The page you are looking for doesn&apos;t exist or has moved.</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3.5 font-bold text-white transition hover:bg-ocean"
      >
        Back to home <ArrowRight size={18} />
      </Link>
    </section>
  )
}
