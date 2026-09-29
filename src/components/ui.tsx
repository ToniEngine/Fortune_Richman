import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

/* -------------------------------------------------------------------------- */
/*  Reveal — IntersectionObserver-driven scroll animation                      */
/* -------------------------------------------------------------------------- */

export function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  className = '',
  ...rest
}: {
  children: ReactNode
  as?: ElementType
  delay?: number
  className?: string
} & Record<string, unknown>) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Respect users who have asked for less motion: show immediately.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ ['--reveal-delay' as string]: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section shell + heading                                                    */
/* -------------------------------------------------------------------------- */

export function Section({
  id,
  children,
  className = '',
  labelledBy,
}: {
  id: string
  children: ReactNode
  className?: string
  labelledBy?: string
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`py-20 sm:py-24 lg:py-28 ${className}`}
    >
      {children}
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  align = 'left',
  tone = 'light',
}: {
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  id?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
}) {
  const centered = align === 'center'
  return (
    <div className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
      <p
        className={`eyebrow flex items-center gap-2.5 ${centered ? 'justify-center' : ''} ${
          tone === 'dark' ? 'text-teal-300' : 'text-teal-600'
        }`}
      >
        <span
          aria-hidden="true"
          className={`h-px w-7 ${tone === 'dark' ? 'bg-teal-400/60' : 'bg-teal-500/50'}`}
        />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-4 text-3xl leading-[1.12] font-extrabold tracking-[-0.02em] sm:text-4xl lg:text-[2.75rem] ${
          tone === 'dark' ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            tone === 'dark' ? 'text-navy-200' : 'text-navy-500'
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Buttons                                                                    */
/* -------------------------------------------------------------------------- */

const buttonBase =
  'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-display text-sm font-semibold tracking-tight transition-all duration-300 min-h-[48px] whitespace-nowrap'

const buttonVariants = {
  primary:
    'bg-navy-900 text-white shadow-[0_8px_24px_-10px_rgba(10,24,52,0.7)] hover:bg-navy-800 hover:shadow-[0_14px_34px_-12px_rgba(10,24,52,0.75)] hover:-translate-y-0.5',
  teal: 'bg-teal-500 text-white shadow-[0_8px_24px_-10px_rgba(20,162,155,0.85)] hover:bg-teal-600 hover:shadow-[0_14px_34px_-12px_rgba(20,162,155,0.9)] hover:-translate-y-0.5',
  outline:
    'border border-navy-200 bg-white/70 text-navy-800 hover:border-teal-400 hover:bg-white hover:text-teal-700 hover:-translate-y-0.5',
  ghost: 'text-navy-700 hover:text-teal-600',
  onDark:
    'border border-white/25 bg-white/5 text-white backdrop-blur-sm hover:border-teal-300/70 hover:bg-white/10 hover:-translate-y-0.5',
} as const

export type ButtonVariant = keyof typeof buttonVariants

export function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  external = false,
  download = false,
  onClick,
}: {
  href: string
  children: ReactNode
  variant?: ButtonVariant
  className?: string
  external?: boolean
  download?: boolean
  onClick?: () => void
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...(download ? { download: '' } : {})}
      className={`${buttonBase} ${buttonVariants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}

/* -------------------------------------------------------------------------- */
/*  Badges / chips                                                             */
/* -------------------------------------------------------------------------- */

export function Chip({
  children,
  tone = 'default',
  className = '',
}: {
  children: ReactNode
  tone?: 'default' | 'teal' | 'sky' | 'leaf' | 'dark'
  className?: string
}) {
  const tones = {
    default: 'border-mist-300 bg-mist-100 text-navy-600',
    teal: 'border-teal-200 bg-teal-50 text-teal-700',
    sky: 'border-sky-200 bg-sky-100 text-navy-600',
    leaf: 'border-leaf-300/60 bg-leaf-100 text-leaf-600',
    dark: 'border-white/15 bg-white/10 text-navy-100',
  } as const
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1.5 font-display text-xs font-semibold tracking-tight transition-colors duration-300 ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  )
}

/* -------------------------------------------------------------------------- */
/*  Decorative primitives                                                      */
/* -------------------------------------------------------------------------- */

/** Faint node-and-edge lattice — the site's recurring "science × data" motif. */
export function Lattice({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      strokeLinecap="round"
    >
      <g stroke="currentColor" strokeWidth="1" opacity="0.5">
        <path d="M40 60 L100 30 L160 60 L160 130 L100 165 L40 130 Z" />
        <path d="M40 60 L100 95 L160 60 M100 95 L100 165" />
      </g>
      <g fill="currentColor">
        {[
          [40, 60],
          [100, 30],
          [160, 60],
          [160, 130],
          [100, 165],
          [40, 130],
          [100, 95],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={i === 6 ? 5 : 3.5} />
        ))}
      </g>
    </svg>
  )
}
