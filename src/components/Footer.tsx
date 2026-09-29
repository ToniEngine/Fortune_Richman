import { ArrowUp, Mail } from 'lucide-react'
import { footer, navLinks, profile, socials } from '../data/content'

const footerSocialLabels = ['LinkedIn', 'GitHub']

export default function Footer() {
  const footerSocials = socials.filter((s) => footerSocialLabels.includes(s.label))

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-300">
      <div aria-hidden="true" className="grid-pattern-dark absolute inset-0 opacity-50" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-500/40 to-transparent"
      />

      <div className="container-x relative">
        <div className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-12">
          {/* Brand */}
          <div>
            <p className="font-display text-lg font-extrabold tracking-[0.12em] text-white">
              {profile.logo}
            </p>
            <p className="mt-2 font-display text-sm font-semibold text-teal-300">{profile.title}</p>
            <p className="mt-5 max-w-xs font-display text-xl leading-snug font-bold tracking-tight text-white/90">
              {footer.tagline}
            </p>
            <div aria-hidden="true" className="mt-6 flex items-center gap-1">
              {[8, 14, 10, 18, 15, 22, 17, 26].map((h, i) => (
                <span
                  key={i}
                  className="w-1.5 rounded-full bg-gradient-to-t from-teal-500/20 to-teal-400/70"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
          </div>

          {/* Navigate */}
          <nav aria-label="Footer">
            <p className="font-display text-[0.65rem] font-bold tracking-[0.16em] text-navy-400 uppercase">
              Navigate
            </p>
            <ul className="mt-4 grid grid-cols-2 lg:grid-cols-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-[40px] items-center font-display text-sm font-medium text-navy-300 transition-colors duration-300 hover:text-teal-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <p className="font-display text-[0.65rem] font-bold tracking-[0.16em] text-navy-400 uppercase">
              Connect
            </p>
            <ul className="mt-4 space-y-1">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex min-h-[40px] items-center gap-2.5 text-sm text-navy-300 transition-colors duration-300 hover:text-teal-300"
                >
                  <Mail className="h-4 w-4 text-navy-400 transition-colors duration-300 group-hover:text-teal-400" />
                  <span className="break-all">{profile.email}</span>
                </a>
              </li>
              {footerSocials.map((social) => (
                <li key={social.label}>
                  {social.url ? (
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[40px] items-center text-sm text-navy-300 transition-colors duration-300 hover:text-teal-300"
                    >
                      {social.label}
                    </a>
                  ) : (
                    <span className="inline-flex min-h-[40px] items-center gap-2 text-sm text-navy-500">
                      {social.label}
                      <span className="rounded-full border border-white/10 px-2 py-0.5 font-display text-[0.6rem] font-bold tracking-[0.1em] uppercase">
                        Soon
                      </span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start gap-4 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-navy-400">
            &copy; {footer.year} {profile.shortName}. All rights reserved.
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 font-display text-xs font-semibold text-navy-300 transition-colors duration-300 hover:border-teal-400/50 hover:text-teal-300"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
