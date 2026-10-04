import Link from 'next/link'
import { CLINIC, assetPath } from '@/lib/site'

export default function Logo({ light = true }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${CLINIC.name} – home`}>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white p-1 shadow-lg shadow-teal/30">
        <img src={assetPath('/logo-mark.svg')} alt="" width="36" height="36" className="h-full w-full" />
      </span>
      <span className={`leading-tight ${light ? 'text-white' : 'text-ocean'}`}>
        <span className="block text-[15px] font-extrabold tracking-tight">Happy Super Speciality</span>
        <span className={`block text-xs font-medium ${light ? 'text-white/70' : 'text-slate-500'}`}>Dental Clinic</span>
      </span>
    </Link>
  )
}
