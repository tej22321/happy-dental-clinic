import Image from 'next/image'
import { resolveImage } from '@/lib/images'
import { assetPath } from '@/lib/site'
import ToothIcon from './ToothIcon'

/**
 * Responsive photo for an image slot (see lib/images.js). The wrapper takes the sizing
 * classes (aspect ratio, rounding); the image always covers it. Slots with no file on
 * disk render a branded placeholder so the layout never breaks.
 */
export default function Photo({ slot, alt, className = '', imgClassName = '', sizes = '100vw', priority = false, icon: Icon = ToothIcon }) {
  const src = resolveImage(slot)

  if (!src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-ocean via-ocean-mid to-teal text-white ${className}`}
      >
        <span className="grid h-20 w-20 place-items-center rounded-full bg-white/10 ring-1 ring-white/25">
          <Icon size={38} strokeWidth={1.6} />
        </span>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image src={assetPath(src)} alt={alt} fill sizes={sizes} priority={priority} className={`object-cover ${imgClassName}`} />
    </div>
  )
}
