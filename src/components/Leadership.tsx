import {
  Compass,
  GraduationCap,
  HeartPulse,
  Sparkles,
  Users,
  Wallet,
  type LucideIcon,
} from 'lucide-react'
import { leadership, type LeadershipIcon } from '../data/content'
import { Reveal, Section, SectionHeading } from './ui'

const icons: Record<LeadershipIcon, LucideIcon> = {
  grad: GraduationCap,
  compass: Compass,
  users: Users,
  heart: HeartPulse,
  sparkles: Sparkles,
  wallet: Wallet,
}

export default function Leadership() {
  return (
    <Section
      id="leadership"
      labelledBy="leadership-heading"
      className="relative overflow-hidden bg-navy-950 text-navy-100"
    >
      <div aria-hidden="true" className="grid-pattern-dark absolute inset-0 opacity-70" />
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/3 h-[28rem] w-[28rem] rounded-full bg-teal-500/10 blur-[120px]"
      />

      <div className="container-x relative">
        <Reveal>
          <SectionHeading
            id="leadership-heading"
            eyebrow="Leadership & Impact"
            tone="dark"
            title="Leadership Beyond the Lab"
            intro="Roles across STEM education, public health advocacy and student leadership — where scientific training turns into community impact."
          />
        </Reveal>

        <ul className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {leadership.map((role, i) => {
            const Icon = icons[role.icon]
            return (
              <Reveal as="li" key={`${role.role}-${role.organization}`} delay={i * 70} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-400 hover:-translate-y-1.5 hover:border-teal-400/40 hover:bg-white/[0.07]">
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-7 h-0.5 w-0 bg-teal-400 transition-all duration-500 group-hover:w-12"
                  />

                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-navy-900 text-teal-300 transition-colors duration-400 group-hover:border-teal-400/40 group-hover:bg-teal-500 group-hover:text-white">
                      <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    {role.period && (
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-display text-[0.68rem] font-semibold text-navy-300">
                        {role.period}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 font-display text-lg leading-tight font-bold tracking-tight text-white">
                    {role.role}
                  </h3>
                  <p className="mt-1.5 font-display text-sm leading-snug font-semibold text-teal-300">
                    {role.organization}
                  </p>
                  {role.tagline && (
                    <p className="mt-2 text-xs leading-relaxed text-navy-400 italic">
                      {role.tagline}
                    </p>
                  )}

                  <ul className="mt-5 flex-1 space-y-2 border-t border-white/10 pt-5">
                    {role.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-navy-200"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400/70"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}
