import { CalendarDays, MessageCircle, Phone } from 'lucide-react'
import { PHONE_HREF, WHATSAPP_HREF } from '@/lib/site'
import BookButton from './BookButton'

const pill = 'flex items-center justify-center gap-1.5 rounded-full py-3 text-sm font-bold transition active:scale-95'

export default function MobileBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(7,53,73,0.12)] backdrop-blur md:hidden"
    >
      <div className="grid grid-cols-3 gap-2">
        <a href={PHONE_HREF} className={`${pill} bg-ocean text-white`}>
          <Phone size={17} /> Call
        </a>
        <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className={`${pill} bg-[#25D366] text-white`}>
          <MessageCircle size={17} /> WhatsApp
        </a>
        <BookButton className={`${pill} bg-teal text-white`}>
          <CalendarDays size={17} /> Book
        </BookButton>
      </div>
    </nav>
  )
}
