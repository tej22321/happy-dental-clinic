import fs from 'node:fs'
import path from 'node:path'

/**
 * Image slots. Each lists candidate files in public/images/ in order of preference;
 * the first one that exists at build time is used (next/image handles resizing and
 * WebP/AVIF conversion). A slot with no existing file renders a branded placeholder.
 *
 * Dedicated photos for implants/sedation/cosmetic/teledentistry don't exist yet:
 * drop e.g. implants.jpg into public/images/ and it replaces the clinic photo below.
 */
export const IMAGE_SLOTS = {
  hero: ['dr-tanuja-hero.png'],
  about: ['dr-tanuja-about.png'],
  reception: ['reception.jpeg'],
  treatmentRoom: ['treatment-room.png'],
  rootCanal: ['root-canal.png'],
  pediatric: ['pediatric.jpeg'],
  schoolCamp: ['Dental school camp.jpeg'],
  implants: ['implants.jpg', 'implants.png', 'treatment-room.png'],
  sedation: ['sedation.jpg', 'sedation.png', 'reception.jpeg'],
  cosmetic: ['cosmetic.jpg', 'cosmetic.png', 'dr-tanuja-hero.png'],
  teledentistry: ['teledentistry.jpg', 'teledentistry.png', 'dr-tanuja-about.png'],
}

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images')
const cache = new Map()

/** Returns the public URL of the first existing candidate for a slot, or null. */
export function resolveImage(slot) {
  if (cache.has(slot)) return cache.get(slot)
  const file = (IMAGE_SLOTS[slot] || []).find((f) => fs.existsSync(path.join(IMAGES_DIR, f)))
  const src = file ? `/images/${encodeURIComponent(file)}` : null
  cache.set(slot, src)
  return src
}
