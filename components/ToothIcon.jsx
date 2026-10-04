/** Lucide-compatible tooth glyph (Lucide does not ship one). */
export default function ToothIcon({ size = 24, strokeWidth = 2, className = '', ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      <path d="M12 5.5C10.5 4 8.6 3 6.8 3.2 4.3 3.5 3 5.6 3 8c0 2.3.8 3.7 1.6 5.4.7 1.6 1 3.6 1.4 5.6.3 1.5.8 2.5 1.8 2.5 1.2 0 1.6-1.3 1.9-2.8.4-1.9.8-3.7 2.3-3.7s1.9 1.8 2.3 3.7c.3 1.5.7 2.8 1.9 2.8 1 0 1.5-1 1.8-2.5.4-2 .7-4 1.4-5.6.8-1.7 1.6-3.1 1.6-5.4 0-2.4-1.3-4.5-3.8-4.8C15.4 3 13.5 4 12 5.5Z" />
      <path d="M9 6.5c1 .2 2 .7 3 1.5" />
    </svg>
  )
}
