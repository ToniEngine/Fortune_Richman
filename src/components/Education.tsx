import { Award, GraduationCap } from 'lucide-react'
import { education } from '../data/content'
import { Reveal, Section, SectionHeading } from './ui'

export default function Education() {
  return (
    <Section id="education" labelledBy="education-heading" className="bg-white">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            id="education-heading"
            eyebrow="Education"
            title="Academic Foundation"
            intro="A six-year pharmacy degree spanning medicinal chemistry, pharmacology, microbiology and biostatistics."
          />
        </Reveal>

        <ol className="relative mt-14">
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[9px] w-px bg-gradient-to-b from-teal-400 via-mist-300 to-transparent sm:left-[11px]"
          />

          {education.map((entry) => (
            <Reveal
              as="li"
              key={entry.institution}
              className="relative pb-2 pl-8 sm:pl-12"
            >
              <span
                aria-hidden="true"
                className="absolute top-1.5 left-0 grid h-[19px] w-[19px] place-items-center rounded-full border-2 border-teal-500 bg-white sm:h-[23px] sm:w-[23px]"
              >
                <span className="h-2 w-2 rounded-full bg-teal-500 sm:h-2.5 sm:w-2.5" />
              </span>

              <article className="overflow-hidden rounded-2xl border border-mist-200 bg-white transition-shadow duration-400 hover:shadow-[0_26px_56px_-32px_rgba(10,24,52,0.4)]">
                <div className="grid gap-6 border-b border-mist-200 bg-mist-50 p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
                  <div className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-900 text-teal-300">
                      <GraduationCap className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl leading-tight font-bold tracking-tight text-navy-900 sm:text-2xl">
                        {entry.degree}
                      </h3>
                      <p className="mt-1.5 font-display text-sm font-semibold text-teal-700">
                        {entry.institution}
                      </p>
                      <p className="mt-1 text-sm text-navy-400">{entry.period}</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-teal-200 bg-white px-6 py-4 text-center sm:min-w-[9.5rem]">
                    <p className="font-display text-[0.62rem] font-bold tracking-[0.16em] text-navy-400 uppercase">
                      Grade
                    </p>
                    <p className="mt-1 font-display text-2xl leading-none font-extrabold tracking-tight text-navy-900">
                      {entry.grade}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="font-display text-[0.65rem] font-bold tracking-[0.16em] text-navy-400 uppercase">
                    Relevant coursework
                  </p>
                  <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {entry.coursework.map((course) => (
                      <li
                        key={course.name}
                        className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-sm transition-colors duration-300 ${
                          course.highlight
                            ? 'border-teal-200 bg-teal-50 font-semibold text-navy-900'
                            : 'border-mist-200 bg-mist-50 text-navy-600 hover:border-mist-300 hover:bg-white'
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                            course.highlight ? 'bg-teal-500' : 'bg-navy-200'
                          }`}
                        />
                        <span className="flex-1">
                          {course.name}
                          {course.note && (
                            <span className="mt-1.5 flex items-center gap-1.5 font-display text-[0.7rem] font-bold text-teal-700">
                              <Award className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                              {course.note}
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  )
}
