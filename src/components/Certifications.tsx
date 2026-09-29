import { ArrowUpRight, BadgeCheck, FolderOpen } from 'lucide-react'
import { certifications, trainingResourcesUrl } from '../data/content'
import { Reveal, Section, SectionHeading } from './ui'

export default function Certifications() {
  return (
    <Section
      id="certifications"
      labelledBy="certifications-heading"
      className="relative overflow-hidden bg-mist-50"
    >
      <div aria-hidden="true" className="grid-pattern absolute inset-0 opacity-60" />
      <div className="container-x relative">
        <Reveal>
          <SectionHeading
            id="certifications-heading"
            eyebrow="Training"
            title="Certifications & Training"
            intro="Structured data analytics training completed alongside the pharmacy degree."
          />
        </Reveal>

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal as="li" key={`${cert.provider}-${cert.title}`} delay={i * 80} className="h-full">
              <article className="group flex h-full flex-col rounded-2xl border border-mist-200 bg-white p-7 transition-all duration-400 hover:-translate-y-1.5 hover:border-teal-200 hover:shadow-[0_28px_60px_-32px_rgba(10,24,52,0.35)]">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-mist-200 bg-mist-50 text-teal-600 transition-colors duration-400 group-hover:border-teal-200 group-hover:bg-teal-500 group-hover:text-white">
                    <BadgeCheck className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  {cert.period && (
                    <span className="rounded-full bg-mist-100 px-3 py-1 font-display text-[0.7rem] font-bold text-navy-500">
                      {cert.period}
                    </span>
                  )}
                </div>

                <p className="mt-5 font-display text-[0.7rem] font-bold tracking-[0.14em] text-teal-600 uppercase">
                  {cert.provider}
                </p>
                <h3 className="mt-2 font-display text-lg leading-snug font-bold tracking-tight text-navy-900">
                  {cert.title}
                </h3>

                <ul className="mt-5 flex-1 space-y-2.5 border-t border-mist-200 pt-5">
                  {cert.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-navy-600">
                      <span
                        aria-hidden="true"
                        className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ul>

        {/* Training resources link */}
        <Reveal delay={140}>
          <a
            href={trainingResourcesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 flex flex-col gap-4 rounded-2xl border border-navy-100 bg-navy-900 p-7 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_30px_64px_-30px_rgba(10,24,52,0.7)] sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-teal-300">
                <FolderOpen className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-base font-bold tracking-tight text-white sm:text-lg">
                  Training &amp; project resources
                </h3>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-navy-300">
                  Certificates, capstone materials and supporting files from the data analytics
                  training programmes.
                </p>
              </div>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-white/20 px-5 py-2.5 font-display text-sm font-semibold text-white transition-colors duration-300 group-hover:border-teal-300/70 group-hover:bg-white/5 sm:self-auto">
              Open folder
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </Reveal>
      </div>
    </Section>
  )
}
