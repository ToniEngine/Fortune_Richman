import { GraduationCap, Trophy } from 'lucide-react'
import { awards, scholarships } from '../data/content'
import { Reveal, Section, SectionHeading } from './ui'

export default function Awards() {
  return (
    <Section id="awards" labelledBy="awards-heading" className="relative overflow-hidden bg-white">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            id="awards-heading"
            eyebrow="Recognition"
            title="Recognition & Achievements"
            intro="Academic awards and merit-based scholarships received during the pharmacy programme."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
          {/* Awards */}
          <div>
            <Reveal>
              <p className="font-display text-[0.68rem] font-bold tracking-[0.16em] text-navy-400 uppercase">
                Academic awards
              </p>
            </Reveal>
            <ul className="mt-5 grid gap-4">
              {awards.map((award, i) => (
                <Reveal as="li" key={award.title} delay={i * 90}>
                  <article className="group relative overflow-hidden rounded-2xl border border-mist-200 bg-gradient-to-br from-mist-50 to-white p-7 transition-all duration-400 hover:-translate-y-1 hover:border-teal-200 hover:shadow-[0_28px_60px_-32px_rgba(10,24,52,0.35)]">
                    <span
                      aria-hidden="true"
                      className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-teal-100/50 blur-2xl transition-opacity duration-500 group-hover:opacity-80"
                    />
                    <div className="relative flex items-start gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-900 text-teal-300 transition-transform duration-400 group-hover:scale-105">
                        <Trophy className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-display text-base leading-snug font-bold tracking-tight text-navy-900 sm:text-lg">
                          {award.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-navy-500">{award.detail}</p>
                        {award.period && (
                          <p className="mt-2 inline-block rounded-full bg-white px-3 py-1 font-display text-[0.68rem] font-semibold text-navy-400 ring-1 ring-mist-200">
                            {award.period}
                          </p>
                        )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Scholarships */}
          <div>
            <Reveal delay={60}>
              <p className="font-display text-[0.68rem] font-bold tracking-[0.16em] text-navy-400 uppercase">
                Scholarships &amp; grants
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-5 rounded-2xl border border-mist-200 bg-mist-50 p-2">
                <ul className="grid gap-2">
                  {scholarships.map((scholarship) => (
                    <li key={scholarship}>
                      <div className="group flex items-center gap-3.5 rounded-xl bg-white px-5 py-4 transition-all duration-300 hover:translate-x-1 hover:shadow-[0_14px_30px_-20px_rgba(10,24,52,0.5)]">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-teal-50 text-teal-600 transition-colors duration-300 group-hover:bg-teal-500 group-hover:text-white">
                          <GraduationCap className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                        </span>
                        <span className="font-display text-sm leading-snug font-semibold text-navy-800">
                          {scholarship}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  )
}
