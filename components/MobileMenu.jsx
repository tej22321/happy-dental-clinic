'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Menu, X } from 'lucide-react'
import BookButton from './BookButton'

export default function MobileMenu({ links }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="grid h-11 w-11 place-items-center rounded-full text-white transition hover:bg-white/10 lg:hidden"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div id="mobile-menu" className="absolute inset-x-0 top-full border-t border-white/10 bg-ocean shadow-xl lg:hidden">
          <ul className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 font-medium text-white/90 transition hover:bg-white/10"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <BookButton
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-teal px-5 py-3 font-bold text-white"
              >
                Schedule Appointment <ArrowRight size={16} />
              </BookButton>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
