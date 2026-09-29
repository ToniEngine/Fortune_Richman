import { about, profile } from '../data/content'
import { Lattice, Reveal, Section, SectionHeading } from './ui'

export default function About() {
  return (
    <Section id="about" labelledBy="about-heading" className="relative overflow-hidden bg-white">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 xl:gap-20">
          {/* Left rail */}
          <Reveal>
            <SectionHeading id="about-heading" eyebrow="Who I Am" title={about.heading} />

            <div className="relative mt-9 overflow-hidden rounded-3xl border border-mist-200 bg-mist-50 p-7 sm:p-8">
              <Lattice className="absolute -right-8 -bottom-10 h-44 w-44 text-teal-500/15" />
              <p className="relative font-display text-[0.68rem] font-bold tracking-[0.16em] text-teal-600 uppercase">
                Positioning
              </p>
              <p className="relative mt-3 font-display text-lg leading-snug font-extrabold tracking-tight text-navy-900 sm:text-xl">
                {profile.positioning}
              </p>
              <p className="relative mt-3 max-w-[26ch] text-sm leading-relaxed text-navy-500">
                {profile.supporting}
              </p>
            </div>
          </Reveal>

          {/* Body copy */}
          <Reveal delay={80}>
            <div className="space-y-6 text-base leading-relaxed text-navy-600 sm:text-lg">
              {about.paragraphs.map((paragraph, i) => (
                <p key={i} className={i === 0 ? 'text-navy-800' : undefined}>
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Stats — full width so every figure has room to breathe */}
        <Reveal delay={140}>
          <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-mist-200 bg-mist-200 lg:mt-16 lg:grid-cols-4">
            {about.stats.map((stat) => (
              <div
                key={stat.label}
                className="group bg-white p-5 transition-colors duration-300 hover:bg-mist-50 sm:p-7"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-[1.6rem] leading-none font-extrabold tracking-[-0.02em] text-navy-900 sm:text-3xl">
                    {stat.value}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-4 block h-0.5 w-8 rounded-full bg-teal-400 transition-all duration-500 group-hover:w-16"
                  />
                  <span className="mt-4 block font-display text-sm leading-tight font-bold text-navy-800">
                    {stat.label}
                  </span>
                  <span className="mt-1.5 block text-xs leading-snug text-navy-400">
                    {stat.note}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
