'use client'

import { useEffect, useRef, useState } from 'react'
import { CalendarDays, CircleCheck, MessageCircle, Phone, X } from 'lucide-react'
import { CLINIC, PHONE_HREF, whatsappWith } from '@/lib/site'

const todayISO = () => {
  const d = new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}

const emptyForm = (service, options) => ({ name: '', phone: '', service: service || options[0], date: '' })

export default function BookingModal({ isOpen, onClose, initialService, serviceOptions }) {
  const [form, setForm] = useState(() => emptyForm(initialService, serviceOptions))
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const firstFieldRef = useRef(null)
  const dialogRef = useRef(null)

  // Reset form each time the modal opens, focus the first field, lock page scroll.
  useEffect(() => {
    if (!isOpen) return
    setForm(emptyForm(initialService, serviceOptions))
    setErrors({})
    setSubmitted(false)
    const previouslyFocused = document.activeElement
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    requestAnimationFrame(() => firstFieldRef.current?.focus())
    return () => {
      document.body.style.overflow = prevOverflow
      previouslyFocused?.focus?.()
    }
  }, [isOpen, initialService, serviceOptions])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab' && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        )
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const validate = () => {
    const next = {}
    if (form.name.trim().length < 2) next.name = 'Please enter your name.'
    const digits = form.phone.replace(/\D/g, '').replace(/^(91|0)(?=\d{10}$)/, '')
    if (!/^[6-9]\d{9}$/.test(digits)) next.phone = 'Enter a valid 10-digit mobile number.'
    if (!form.date) next.date = 'Please choose a preferred date.'
    else if (form.date < todayISO()) next.date = 'Please choose today or a future date.'
    return next
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length) return

    const prettyDate = new Date(`${form.date}T00:00:00`).toLocaleDateString('en-IN', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
    const message =
      `Hello ${CLINIC.name}, I would like to book an appointment.\n\n` +
      `Name: ${form.name.trim()}\nPhone: ${form.phone.trim()}\nService: ${form.service}\nPreferred date: ${prettyDate}`
    window.open(whatsappWith(message), '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  const fieldClass = (hasError) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-ocean placeholder:text-slate-400 outline-none transition focus:border-teal focus:ring-4 focus:ring-teal/15 ${
      hasError ? 'border-red-400' : 'border-slate-200'
    }`

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-4">
      <div className="absolute inset-0 bg-ocean-deep/70 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        className="relative max-h-[92dvh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
      >
        <div className="relative bg-gradient-to-br from-ocean to-ocean-mid px-6 pt-6 pb-8 text-white sm:px-8">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"
            aria-label="Close booking form"
          >
            <X size={20} />
          </button>
          <p className="flex items-center gap-2 text-sm font-medium text-teal-light">
            <CalendarDays size={16} /> Book Appointment
          </p>
          <h2 id="booking-title" className="mt-2 pr-10 text-2xl font-extrabold tracking-tight">
            Schedule your visit with {CLINIC.doctor}
          </h2>
          <p className="mt-2 text-sm text-white/75">
            Share your details and we&apos;ll confirm your slot on WhatsApp.
          </p>
        </div>

        {submitted ? (
          <div className="px-6 py-10 text-center sm:px-8">
            <CircleCheck size={56} className="mx-auto text-teal" />
            <h3 className="mt-4 text-xl font-bold text-ocean">Almost done, {form.name.trim().split(' ')[0]}!</h3>
            <p className="mt-2 text-slate-600">
              We&apos;ve opened WhatsApp with your appointment details. Tap <strong>Send</strong> there and our team
              will confirm your slot shortly.
            </p>
            <p className="mt-4 text-sm text-slate-500">WhatsApp didn&apos;t open? Call us directly instead.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 rounded-full bg-teal px-5 py-3 font-semibold text-white transition hover:bg-ocean"
              >
                <Phone size={18} /> Call {CLINIC.phoneDisplay}
              </a>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-slate-200 px-5 py-3 font-semibold text-ocean transition hover:bg-mist"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="-mt-4 space-y-4 rounded-t-3xl bg-white px-6 pt-6 pb-8 sm:px-8">
            <div>
              <label htmlFor="bk-name" className="mb-1.5 block text-sm font-semibold text-ocean">
                Full name
              </label>
              <input
                ref={firstFieldRef}
                id="bk-name"
                type="text"
                autoComplete="name"
                placeholder="e.g. Ramesh Kumar"
                value={form.name}
                onChange={update('name')}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'bk-name-err' : undefined}
                className={fieldClass(errors.name)}
              />
              {errors.name && <p id="bk-name-err" className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="bk-phone" className="mb-1.5 block text-sm font-semibold text-ocean">
                Mobile number
              </label>
              <input
                id="bk-phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="10-digit mobile number"
                value={form.phone}
                onChange={update('phone')}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'bk-phone-err' : undefined}
                className={fieldClass(errors.phone)}
              />
              {errors.phone && <p id="bk-phone-err" className="mt-1 text-sm text-red-600">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="bk-service" className="mb-1.5 block text-sm font-semibold text-ocean">
                Service
              </label>
              <select id="bk-service" value={form.service} onChange={update('service')} className={fieldClass(false)}>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="bk-date" className="mb-1.5 block text-sm font-semibold text-ocean">
                Preferred date
              </label>
              <input
                id="bk-date"
                type="date"
                min={todayISO()}
                value={form.date}
                onChange={update('date')}
                aria-invalid={!!errors.date}
                aria-describedby={errors.date ? 'bk-date-err' : undefined}
                className={fieldClass(errors.date)}
              />
              {errors.date && <p id="bk-date-err" className="mt-1 text-sm text-red-600">{errors.date}</p>}
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-teal px-6 py-3.5 font-bold text-white shadow-lg shadow-teal/25 transition hover:bg-ocean"
            >
              <MessageCircle size={18} /> Confirm via WhatsApp
            </button>
            <p className="text-center text-xs text-slate-500">
              Prefer to talk?{' '}
              <a href={PHONE_HREF} className="font-semibold text-teal underline-offset-2 hover:underline">
                Call {CLINIC.phoneDisplay}
              </a>
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
