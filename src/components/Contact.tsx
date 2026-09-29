import { ArrowUpRight, Download, Mail, MapPin, Phone } from 'lucide-react'
import { contact, profile, socials } from '../data/content'
import { Reveal, Section, SectionHeading } from './ui'

export default function Contact() {
  return (
    <Section
      id="contact"
      labelledBy="contact-heading"
      className="relative overflow-hidden bg-mist-50"
    >
      <div aria-hidden="true" className="grid-pattern absolute inset-0 opacity-70" />
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-24 h-[26rem] w-[26rem] rounded-full bg-teal-200/30 blur-[110px]"
      />

      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
          {/* Message */}
          <Reveal>
            <SectionHeading
              id="contact-heading"
              eyebrow="Contact"
              title={contact.heading}
              intro={contact.copy}
            />

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-navy-900 px-7 font-display text-sm font-semibold text-white shadow-[0_14px_34px_-14px_rgba(10,24,52,0.85)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-600 hover:shadow-[0_20px_44px_-16px_rgba(20,162,155,0.9)]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Send an Email
              </a>
              {profile.cvUrl && (
                <a
                  href={profile.cvUrl}
                  download
                  className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-navy-200 bg-white px-7 font-display text-sm font-semibold text-navy-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-400 hover:text-teal-700"
                >
                  <Download className="h-4 w-4 text-teal-600 transition-transform duration-300 group-hover:translate-y-0.5" />
                  Download CV
                </a>
              )}
            </div>
          </Reveal>

          {/* Details */}
          <Reveal delay={100}>
            <div className="rounded-3xl border border-mist-200 bg-white p-7 shadow-[0_30px_70px_-45px_rgba(10,24,52,0.5)] sm:p-9">
              <ul className="grid gap-3">
                <ContactRow
                  icon={<Mail className="h-[18px] w-[18px]" strokeWidth={1.8} />}
                  label="Email"
                  value={profile.email}
                  href={`mailto:${profile.email}`}
                />
                <ContactRow
                  icon={<Phone className="h-[18px] w-[18px]" strokeWidth={1.8} />}
                  label="Phone"
                  value={profile.phone}
                  href={`tel:${profile.phoneHref}`}
                />
                <ContactRow
                  icon={<MapPin className="h-[18px] w-[18px]" strokeWidth={1.8} />}
                  label="Based in"
                  value={profile.location}
                />
              </ul>

              {/* Profiles */}
              <div className="mt-8 border-t border-mist-200 pt-7">
                <p className="font-display text-[0.65rem] font-bold tracking-[0.16em] text-navy-400 uppercase">
                  Profiles
                </p>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {socials.map((social) =>
                    social.url ? (
                      <li key={social.label}>
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex min-h-[48px] items-center justify-between gap-3 rounded-xl border border-mist-200 bg-mist-50 px-4 py-3 font-display text-sm font-semibold text-navy-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:bg-white hover:text-teal-700"
                        >
                          {social.label}
                          <ArrowUpRight className="h-4 w-4 text-navy-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal-600" />
                        </a>
                      </li>
                    ) : (
                      <li key={social.label}>
                        <span className="flex min-h-[48px] items-center justify-between gap-3 rounded-xl border border-dashed border-mist-300 px-4 py-3 font-display text-sm font-semibold text-navy-300">
                          {social.label}
                          <span className="text-[0.65rem] font-bold tracking-[0.1em] uppercase">
                            Soon
                          </span>
                        </span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
}) {
  const inner = (
    <>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mist-100 text-teal-600 transition-colors duration-300 group-hover:bg-teal-500 group-hover:text-white">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block font-display text-[0.65rem] font-bold tracking-[0.16em] text-navy-400 uppercase">
          {label}
        </span>
        <span className="mt-0.5 block truncate font-display text-[0.95rem] font-semibold text-navy-900">
          {value}
        </span>
      </span>
    </>
  )

  return (
    <li>
      {href ? (
        <a
          href={href}
          className="group flex items-center gap-4 rounded-2xl p-3 transition-colors duration-300 hover:bg-mist-50"
        >
          {inner}
        </a>
      ) : (
        <div className="group flex items-center gap-4 rounded-2xl p-3">{inner}</div>
      )}
    </li>
  )
}
