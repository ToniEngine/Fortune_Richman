import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/content'

const sectionIds = navLinks.map((l) => l.href.slice(1))

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  /* Translucent + blurred once the page moves away from the top. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Highlight whichever section currently sits under the navbar. */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (hit) setActive(hit.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5] },
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  /* Lock body scroll while the mobile sheet is open. */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  /* Escape closes the mobile sheet. */
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:rounded-full focus:bg-navy-900 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-navy-100/80 bg-white/75 backdrop-blur-xl supports-[backdrop-filter]:bg-white/65'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav
          aria-label="Primary"
          className="container-x flex h-[72px] items-center justify-between gap-4 lg:h-20"
        >
          {/* Wordmark */}
          <a
            href="#home"
            className="group flex items-center gap-2.5"
            onClick={() => setOpen(false)}
          >
            <span
              aria-hidden="true"
              className="relative grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-navy-900 transition-transform duration-500 group-hover:scale-105"
            >
              <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
                <circle cx="10" cy="11" r="2.6" fill="#2ebbb3" />
                <circle cx="22" cy="8.5" r="1.9" fill="#6ba1de" />
                <circle cx="21.5" cy="22" r="2.6" fill="#2ebbb3" />
                <circle cx="9.5" cy="22.5" r="1.9" fill="#2fbf71" />
                <g stroke="#7f9cc4" strokeWidth="1.1" strokeLinecap="round">
                  <path d="M10 11 L22 8.5M10 11 L9.5 22.5M22 8.5 L21.5 22M9.5 22.5 L21.5 22" />
                </g>
              </svg>
            </span>
            <span className="font-display text-[0.94rem] font-extrabold tracking-[0.12em] text-navy-900 sm:text-base">
              {profile.logo}
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1)
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative rounded-full px-3.5 py-2 font-display text-[0.83rem] font-semibold tracking-tight transition-colors duration-300 ${
                      isActive ? 'text-teal-700' : 'text-navy-600 hover:text-navy-900'
                    }`}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3.5 -bottom-0.5 h-[2px] rounded-full bg-teal-500 transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="group hidden items-center gap-1.5 rounded-full bg-navy-900 px-5 py-2.5 font-display text-[0.83rem] font-semibold text-white shadow-[0_8px_22px_-12px_rgba(10,24,52,0.9)] transition-all duration-300 hover:bg-teal-600 hover:shadow-[0_12px_28px_-12px_rgba(20,162,155,0.9)] sm:inline-flex"
            >
              Let&rsquo;s Connect
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="grid h-11 w-11 place-items-center rounded-xl border border-navy-200/80 bg-white/70 text-navy-800 transition-colors duration-300 hover:border-teal-400 hover:text-teal-600 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 lg:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-navy-950/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`absolute inset-x-0 top-0 origin-top rounded-b-3xl border-b border-navy-100 bg-white px-5 pt-24 pb-8 shadow-2xl transition-all duration-400 ease-out sm:px-8 ${
            open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <ul className="flex flex-col">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${60 + i * 35}ms` : '0ms' }}
                  className={`flex items-center justify-between border-b border-mist-200 py-4 font-display text-lg font-bold tracking-tight transition-all duration-500 ${
                    open ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                  } ${active === link.href.slice(1) ? 'text-teal-600' : 'text-navy-900'}`}
                >
                  {link.label}
                  <ArrowRight className="h-4 w-4 text-navy-300" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-7 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-navy-900 px-6 font-display text-sm font-semibold text-white"
          >
            Let&rsquo;s Connect
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </>
  )
}
