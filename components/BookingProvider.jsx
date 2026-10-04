'use client'

import { createContext, useCallback, useContext, useState } from 'react'
import BookingModal from './BookingModal'

const BookingContext = createContext(() => {})

export const useBooking = () => useContext(BookingContext)

/** Holds the booking modal's open state so any BookButton on the page can open it. */
export default function BookingProvider({ serviceOptions, children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [service, setService] = useState(undefined)

  const openBooking = useCallback((s) => {
    setService(typeof s === 'string' ? s : undefined)
    setIsOpen(true)
  }, [])
  const close = useCallback(() => setIsOpen(false), [])

  return (
    <BookingContext.Provider value={openBooking}>
      {children}
      <BookingModal isOpen={isOpen} onClose={close} initialService={service} serviceOptions={serviceOptions} />
    </BookingContext.Provider>
  )
}
