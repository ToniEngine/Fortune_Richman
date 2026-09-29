import { BarChart4, FileText, Terminal, type LucideIcon } from 'lucide-react'
import { toolkit, type ToolkitIcon } from '../data/content'
import { Reveal, Section, SectionHeading } from './ui'

const icons: Record<ToolkitIcon, LucideIcon> = {
  code: Terminal,
  chart: BarChart4,
  doc: FileText,
}

export default function Toolkit() {
  return (
    <Section id="toolkit" labelledBy="toolkit-heading" className="relative overflow-hidden bg-mist-50">
      <div aria-hidden="true" className="dot-pattern absolute inset-0 opacity-40" />
      <div className="container-x relative">
        <Reveal>
          <SectionHeading
            id="toolkit-heading"
            eyebrow="Toolkit"
            title="My Data Toolkit"
            align="center"
            intro="The tools I reach for when turning healthcare questions into analysis."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {toolkit.map((group, i) => {
            const Icon = icons[group.icon]
            return (
              <Reveal key={group.category} delay={i * 90}>
                <article className="group h-full rounded-2xl border border-mist-200 bg-white p-7 transition-all duration-400 hover:-translate-y-1 hover:border-teal-200 hover:shadow-[0_28px_60px_-32px_rgba(10,24,52,0.35)]">
                  <div className="flex items-center gap-3.5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-900 text-teal-300 transition-colors duration-400 group-hover:bg-teal-500 group-hover:text-white">
                      <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-base leading-tight font-bold tracking-tight text-navy-900">
                        {group.category}
                      </h3>
                      <p className="mt-0.5 text-xs text-navy-400">{group.blurb}</p>
                    </div>
                  </div>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {group.tools.map((tool) => (
                      <li key={tool}>
                        <span className="inline-flex cursor-default items-center gap-2 rounded-xl border border-mist-200 bg-mist-50 px-3.5 py-2.5 font-display text-[0.8rem] font-semibold text-navy-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:bg-white hover:text-teal-700 hover:shadow-[0_10px_24px_-14px_rgba(20,162,155,0.85)]">
                          <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rounded-full bg-teal-400 transition-colors duration-300"
                          />
                          {tool}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
