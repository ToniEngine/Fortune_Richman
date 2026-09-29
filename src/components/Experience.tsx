import { Building2, Check, MapPin } from 'lucide-react'
import { experience } from '../data/content'
import { Reveal, Section, SectionHeading } from './ui'

export default function Experience() {
  return (
    <Section id="experience" labelledBy="experience-heading" className="bg-white">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            id="experience-heading"
            eyebrow="Experience"
            title="Practice & Professional Experience"
            intro="Hands-on pharmacy practice grounded in patient counselling, medication safety, and community health."
          />
        </Reveal>

        <ol className="relative mt-14 sm:pl-0">
          {/* timeline spine */}
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[9px] w-px bg-gradient-to-b from-teal-400 via-mist-300 to-transparent sm:left-[11px]"
          />

          {experience.map((job, i) => (
            <Reveal as="li" key={`${job.role}-${i}`} delay={i * 90} className="relative pb-10 pl-8 last:pb-0 sm:pl-12">
              {/* node */}
              <span
                aria-hidden="true"
                className="absolute top-1.5 left-0 grid h-[19px] w-[19px] place-items-center rounded-full border-2 border-teal-500 bg-white sm:h-[23px] sm:w-[23px]"
              >
                <span className="h-2 w-2 rounded-full bg-teal-500 sm:h-2.5 sm:w-2.5" />
                {job.current && (
                  <span className="absolute inset-0 animate-ping rounded-full border-2 border-teal-400 opacity-60" />
                )}
              </span>

              <article className="group rounded-2xl border border-mist-200 bg-white p-6 transition-all duration-400 hover:border-teal-200 hover:shadow-[0_26px_56px_-32px_rgba(10,24,52,0.4)] sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-3">
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight text-navy-900 sm:text-2xl">
                      {job.role}
                    </h3>
                    <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-navy-500">
                      <span className="inline-flex items-center gap-1.5 font-semibold text-teal-700">
                        <Building2 className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                        {job.organization}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-navy-300" strokeWidth={1.8} aria-hidden="true" />
                        {job.location}
                      </span>
                    </p>
                  </div>

                  <span
                    className={`inline-flex shrink-0 items-center gap-2 rounded-full px-3.5 py-1.5 font-display text-xs font-bold tracking-tight ${
                      job.current
                        ? 'bg-leaf-100 text-leaf-600'
                        : 'bg-mist-100 text-navy-500'
                    }`}
                  >
                    {job.current && (
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-leaf-500" />
                    )}
                    {job.period}
                  </span>
                </div>

                <ul className="mt-6 grid gap-3 border-t border-mist-200 pt-6 sm:grid-cols-2">
                  {job.responsibilities.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-navy-600">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-teal-50 text-teal-600"
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  )
}
