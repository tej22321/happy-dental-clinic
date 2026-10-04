'use client'

import { useBooking } from './BookingProvider'

/** A button that opens the booking modal, optionally pre-selecting a service. */
export default function BookButton({ service, className, children, onClick }) {
  const openBooking = useBooking()
  return (
    <button
      type="button"
      onClick={() => {
        onClick?.()
        openBooking(service)
      }}
      className={className}
    >
      {children}
    </button>
  )
}
