import { brandQuote } from '../data/content'
import { Lattice, Reveal } from './ui'

export default function BrandQuote() {
  return (
    <section
      aria-label="Personal brand statement"
      className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-navy-800 py-20 sm:py-24 lg:py-28"
    >
      <div aria-hidden="true" className="grid-pattern-dark absolute inset-0 opacity-60" />
      <Lattice
        className="pointer-events-none absolute -top-10 -left-16 h-72 w-72 text-white/10"
      />
      <Lattice
        className="pointer-events-none absolute -right-16 -bottom-16 h-80 w-80 text-white/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <svg
            aria-hidden="true"
            viewBox="0 0 48 36"
            className="mx-auto h-8 w-10 text-white/35"
            fill="currentColor"
          >
            <path d="M0 36V22C0 9.85 7.4 1.5 19 0v6.5C12.6 8.2 9 12.6 9 18h9v18H0zm30 0V22C30 9.85 37.4 1.5 49 0v6.5C42.6 8.2 39 12.6 39 18h9v18H30z" />
          </svg>

          <blockquote className="mt-7">
            <p className="font-display text-xl leading-[1.35] font-extrabold tracking-[-0.02em] text-white text-balance sm:text-2xl lg:text-[2rem]">
              &ldquo;{brandQuote.text}&rdquo;
            </p>
            <footer className="mt-9">
              <div
                aria-hidden="true"
                className="mx-auto mb-6 h-px w-16 bg-white/30"
              />
              <cite className="not-italic">
                <span className="block font-display text-base font-bold tracking-tight text-white">
                  {brandQuote.author}
                </span>
                <span className="mt-1 block font-display text-[0.72rem] font-semibold tracking-[0.16em] text-teal-100/80 uppercase">
                  {brandQuote.role}
                </span>
              </cite>
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
