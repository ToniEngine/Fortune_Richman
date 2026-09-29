import {
  Activity,
  BarChart3,
  BrainCircuit,
  FlaskConical,
  GraduationCap,
  Pill,
  type LucideIcon,
} from 'lucide-react'
import { expertise, type ExpertiseIcon } from '../data/content'
import { Chip, Reveal, Section, SectionHeading } from './ui'

const icons: Record<ExpertiseIcon, LucideIcon> = {
  pill: Pill,
  chart: BarChart3,
  brain: BrainCircuit,
  flask: FlaskConical,
  heart: Activity,
  grad: GraduationCap,
}

export default function Expertise() {
  return (
    <Section
      id="expertise"
      labelledBy="expertise-heading"
      className="relative overflow-hidden bg-mist-50"
    >
      <div aria-hidden="true" className="grid-pattern absolute inset-0 opacity-60" />
      <div className="container-x relative">
        <Reveal>
          <SectionHeading
            id="expertise-heading"
            eyebrow="Expertise"
            title="What I Do"
            intro="Six areas where pharmaceutical training, analytical method, and technology reinforce one another."
          />
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, i) => {
            const Icon = icons[item.icon]
            return (
              <Reveal as="li" key={item.title} delay={i * 70}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-mist-200 bg-white p-7 transition-all duration-400 hover:-translate-y-1.5 hover:border-teal-200 hover:shadow-[0_28px_60px_-30px_rgba(10,24,52,0.35)]">
                  {/* hover wash */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-teal-50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-7 h-0.5 w-0 bg-teal-500 transition-all duration-500 group-hover:w-12"
                  />

                  <span className="relative grid h-12 w-12 place-items-center rounded-xl border border-mist-200 bg-mist-50 text-teal-600 transition-all duration-400 group-hover:border-teal-200 group-hover:bg-teal-500 group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                  </span>

                  <h3 className="relative mt-5 font-display text-lg font-bold tracking-tight text-navy-900">
                    {item.title}
                  </h3>
                  <p className="relative mt-3 flex-1 text-sm leading-relaxed text-navy-500">
                    {item.description}
                  </p>

                  {item.tools && (
                    <div className="relative mt-5 border-t border-mist-200 pt-4">
                      <p className="font-display text-[0.65rem] font-bold tracking-[0.16em] text-navy-400 uppercase">
                        Tools
                      </p>
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {item.tools.map((tool) => (
                          <Chip key={tool} tone="teal" className="px-2.5 py-1 text-[0.7rem]">
                            {tool}
                          </Chip>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}
