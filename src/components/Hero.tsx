import { ArrowRight, Download, Mail } from 'lucide-react'
import { about, hero, profile } from '../data/content'
import HeroVisual from './HeroVisual'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-36 lg:pb-28">
      {/* Backdrop */}
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-gradient-to-b from-mist-100 via-white to-white" />
      <div aria-hidden="true" className="grid-pattern fade-mask-b absolute inset-0 -z-10 opacity-70" />
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-teal-200/25 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 right-0 -z-10 h-[26rem] w-[26rem] rounded-full bg-sky-200/40 blur-[110px]"
      />

      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
          {/* ---------------- Left: message ---------------- */}
          <div className="max-w-xl lg:max-w-none">
            <p
              className="animate-rise eyebrow inline-flex items-center gap-2.5 rounded-full border border-teal-200/80 bg-teal-50/80 px-4 py-2 text-teal-700"
              style={{ animationDelay: '0.05s' }}
            >
              <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-500 opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal-600" />
              </span>
              {hero.eyebrow}
            </p>

            <h1
              className="animate-rise mt-6 text-[2.15rem] leading-[1.08] font-extrabold tracking-[-0.03em] text-navy-900 sm:text-5xl lg:text-[3.6rem] xl:text-[3.9rem]"
              style={{ animationDelay: '0.15s' }}
            >
              {hero.headline[0]}{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-teal-600 via-teal-500 to-sky-500 bg-clip-text text-transparent">
                  {hero.headline[1]}
                </span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-2.5 w-full text-teal-300/70"
                >
                  <path
                    d="M2 8.5C60 3 120 2.5 180 5.5C220 7.5 260 9 298 6"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>

            <p
              className="animate-rise mt-7 max-w-xl text-base leading-relaxed text-navy-500 sm:text-lg"
              style={{ animationDelay: '0.25s' }}
            >
              {hero.paragraph}
            </p>

            {/* CTAs */}
            <div
              className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
              style={{ animationDelay: '0.35s' }}
            >
              <a
                href="#projects"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-navy-900 px-7 font-display text-sm font-semibold text-white shadow-[0_14px_34px_-14px_rgba(10,24,52,0.85)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-[0_20px_44px_-16px_rgba(10,24,52,0.9)]"
              >
                View My Work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-navy-200 bg-white px-7 font-display text-sm font-semibold text-navy-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-400 hover:text-teal-700"
              >
                <Mail className="h-4 w-4 text-teal-600" />
                Get In Touch
              </a>

              {profile.cvUrl && (
                <a
                  href={profile.cvUrl}
                  download
                  className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full px-5 font-display text-sm font-semibold text-navy-600 underline-offset-4 transition-colors duration-300 hover:text-teal-700 hover:underline"
                >
                  <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                  Download CV
                </a>
              )}
            </div>

            {/* Pillars */}
            <div
              className="animate-rise mt-12 border-t border-mist-200 pt-6"
              style={{ animationDelay: '0.45s' }}
            >
              <ul className="flex flex-wrap items-center gap-x-2 gap-y-2 sm:gap-x-5">
                {about.pillars.map((pillar, i) => (
                  <li key={pillar} className="flex items-center gap-2 sm:gap-5">
                    <span className="font-display text-[0.62rem] font-bold tracking-[0.12em] text-navy-400 uppercase sm:text-xs sm:tracking-[0.16em]">
                      {pillar}
                    </span>
                    {i < about.pillars.length - 1 && (
                      <span aria-hidden="true" className="text-xs text-teal-400 sm:text-sm">
                        ×
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ---------------- Right: visual ---------------- */}
          <div
            className="animate-rise relative mx-auto w-full max-w-md px-4 sm:max-w-lg lg:max-w-none lg:px-0"
            style={{ animationDelay: '0.3s' }}
          >
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
