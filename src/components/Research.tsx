import { ArrowDown, Atom, FlaskConical, Microscope, Sparkles } from 'lucide-react'
import { profile, research } from '../data/content'
import { Chip, Reveal, Section, SectionHeading } from './ui'

export default function Research() {
  const { featured, secondary } = research

  return (
    <Section
      id="research"
      labelledBy="research-heading"
      className="relative overflow-hidden bg-navy-950 text-navy-100"
    >
      <div aria-hidden="true" className="grid-pattern-dark absolute inset-0 opacity-80" />
      <div
        aria-hidden="true"
        className="absolute top-1/4 -left-40 h-[30rem] w-[30rem] rounded-full bg-teal-500/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-sky-500/10 blur-[120px]"
      />

      <div className="container-x relative">
        <Reveal>
          <SectionHeading
            id="research-heading"
            eyebrow="Research"
            tone="dark"
            title={research.heading}
            intro="Laboratory science and analytical rigour — from synthesising compounds at the bench to interpreting the data they produce."
          />
        </Reveal>

        {/* ---------------- Featured thesis ---------------- */}
        <Reveal delay={80}>
          <article className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm">
            <div className="grid lg:grid-cols-[1.25fr_0.75fr]">
              {/* Copy */}
              <div className="order-2 p-7 sm:p-10 lg:order-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-teal-500/15 px-3.5 py-1.5 font-display text-xs font-bold tracking-tight text-teal-300">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                    Featured Research
                  </span>
                  <span className="font-display text-xs font-semibold tracking-tight text-navy-300">
                    {featured.role}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl leading-snug font-extrabold tracking-tight text-white sm:text-2xl lg:text-[1.7rem]">
                  {featured.title}
                </h3>

                <dl className="mt-7 grid gap-5 border-y border-white/10 py-6 sm:grid-cols-2">
                  <div>
                    <dt className="font-display text-[0.65rem] font-bold tracking-[0.16em] text-navy-400 uppercase">
                      Institution
                    </dt>
                    <dd className="mt-1.5 text-sm font-semibold text-navy-100">
                      {featured.institution}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-display text-[0.65rem] font-bold tracking-[0.16em] text-navy-400 uppercase">
                      Research focus
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-navy-200">
                      {featured.focus}
                    </dd>
                  </div>
                </dl>

                <div id="research-detail" className="pt-6">
                  <p className="font-display text-[0.65rem] font-bold tracking-[0.16em] text-navy-400 uppercase">
                    Scientific methodology
                  </p>
                  <ol className="mt-4 space-y-3">
                    {featured.methodology.map((step, i) => (
                      <li key={step} className="flex gap-3.5 text-sm leading-relaxed text-navy-200">
                        <span
                          aria-hidden="true"
                          className="mt-px grid h-5 w-5 shrink-0 place-items-center rounded-md border border-teal-400/30 bg-teal-400/10 font-display text-[0.65rem] font-bold text-teal-300"
                        >
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="mt-7 rounded-2xl border border-white/10 bg-navy-900/60 p-5">
                  <p className="font-display text-[0.65rem] font-bold tracking-[0.16em] text-navy-400 uppercase">
                    Research outcomes
                  </p>
                  {featured.outcomes.length > 0 ? (
                    <ul className="mt-3 space-y-2">
                      {featured.outcomes.map((outcome) => (
                        <li key={outcome} className="text-sm leading-relaxed text-navy-200">
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2.5 text-sm leading-relaxed text-navy-300">
                      {featured.outcomesNote}
                    </p>
                  )}
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-2.5">
                  {featured.tags.map((tag) => (
                    <Chip key={tag} tone="dark">
                      {tag}
                    </Chip>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#research-detail"
                    className="group inline-flex min-h-[48px] items-center gap-2 rounded-full bg-teal-500 px-6 font-display text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-400"
                  >
                    View Research
                    <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                  </a>
                  <a
                    href={`mailto:${profile.email}?subject=Research%20enquiry%20%E2%80%94%20B.Pharm%20thesis`}
                    className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-white/20 px-6 font-display text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300/70 hover:bg-white/5"
                  >
                    Request Full Thesis
                  </a>
                </div>
              </div>

              {/* Molecular graphic */}
              <div className="relative order-1 min-h-[15rem] border-b border-white/10 bg-gradient-to-br from-navy-900 to-navy-800 lg:order-2 lg:min-h-0 lg:border-b-0 lg:border-l">
                <SchiffBaseGraphic />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-display text-[0.65rem] font-bold tracking-[0.16em] text-teal-300/80 uppercase">
                    Schiff base motif
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-navy-300">
                    Aldehyde + primary amine → imine (C=N) linkage
                  </p>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* ---------------- Secondary role ---------------- */}
        <Reveal delay={140}>
          <article className="group mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-400 hover:border-teal-400/30 hover:bg-white/[0.06] sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-navy-900 text-teal-300 transition-colors duration-400 group-hover:border-teal-400/40">
                <Microscope className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold tracking-tight text-white sm:text-xl">
                  {secondary.role}
                </h3>
                <p className="mt-1.5 font-display text-sm font-semibold text-teal-300">
                  {secondary.organization}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy-200">
                  {secondary.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {secondary.tags.map((tag) => (
                    <Chip key={tag} tone="dark">
                      {tag}
                    </Chip>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */

/** Abstract imine-linkage diagram: aromatic ring, C=N bond, alkyl chain. */
function SchiffBaseGraphic() {
  return (
    <div className="absolute inset-0 grid place-items-center p-6">
      <svg
        viewBox="0 0 260 260"
        className="h-full max-h-[19rem] w-full"
        role="img"
        aria-label="Abstract diagram of a Schiff base: an aromatic ring joined by an imine linkage to an alkyl chain"
      >
        <defs>
          <radialGradient id="rs-node">
            <stop offset="0%" stopColor="#8ee0db" />
            <stop offset="100%" stopColor="#14a29b" />
          </radialGradient>
        </defs>

        {/* faint orbit rings */}
        <g stroke="#ffffff" strokeOpacity="0.07" fill="none">
          <circle cx="130" cy="130" r="96" />
          <circle cx="130" cy="130" r="66" strokeDasharray="3 7" />
        </g>

        {/* benzene ring */}
        <g stroke="#7f9cc4" strokeWidth="1.6" fill="none" strokeLinejoin="round" opacity="0.8">
          <path d="M62 96 L92 78 L122 96 L122 132 L92 150 L62 132 Z" />
        </g>
        <g stroke="#2ebbb3" strokeWidth="1.6" opacity="0.7" strokeLinecap="round">
          <path d="M70 100 L70 128M97 82 L119 95M97 146 L119 133" />
        </g>

        {/* imine linkage C=N */}
        <g stroke="#55cdc6" strokeWidth="2" strokeLinecap="round">
          <path d="M122 114 L152 100" />
          <path d="M152 100 L182 114" />
          <path d="M155 106 L181 119" opacity="0.65" />
        </g>
        <text
          x="152"
          y="88"
          textAnchor="middle"
          className="font-display"
          fontSize="12"
          fontWeight="700"
          fill="#8ee0db"
        >
          C=N
        </text>

        {/* alkyl chain — zig-zag standing in for hexyl / heptyl */}
        <g stroke="#9cc2ec" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M182 114 L200 132 L218 114 L236 132" />
        </g>

        {/* nodes */}
        <g>
          {[
            [62, 96, 3.4],
            [92, 78, 3.4],
            [122, 96, 3.4],
            [122, 132, 3.4],
            [92, 150, 3.4],
            [62, 132, 3.4],
            [122, 114, 5],
            [152, 100, 6],
            [182, 114, 5],
            [200, 132, 3.2],
            [218, 114, 3.2],
            [236, 132, 3.2],
          ].map(([cx, cy, r], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={r}
              fill="url(#rs-node)"
              style={{
                transformOrigin: `${cx}px ${cy}px`,
                animation: `pulse-node ${5 + (i % 3)}s ease-in-out ${i * 0.25}s infinite`,
              }}
            />
          ))}
        </g>

        {/* scattered data points, tying the science back to analysis */}
        <g fill="#6ba1de" opacity="0.55">
          {[
            [40, 186],
            [66, 202],
            [96, 190],
            [126, 206],
            [156, 194],
            [186, 208],
            [216, 196],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={2.4} />
          ))}
        </g>
        <path
          d="M40 186 L66 202 L96 190 L126 206 L156 194 L186 208 L216 196"
          fill="none"
          stroke="#6ba1de"
          strokeOpacity="0.35"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>

      <span className="absolute top-6 right-6 grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-teal-300">
        <FlaskConical className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
      </span>
      <span className="absolute top-6 left-6 grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-sky-300">
        <Atom className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
      </span>
    </div>
  )
}
