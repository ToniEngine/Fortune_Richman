import { ArrowUpRight, Database, Github, Plus } from 'lucide-react'
import { projects, type Project } from '../data/content'
import { Chip, Reveal, Section, SectionHeading } from './ui'

export default function Projects() {
  return (
    <Section id="projects" labelledBy="projects-heading" className="relative bg-white">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            id="projects-heading"
            eyebrow="Projects"
            title="Data & Analytics Projects"
            intro="Applied analytics work — with room reserved for the projects currently in progress."
          />
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal as="li" key={`${project.title}-${i}`} delay={i * 80} className="h-full">
              {project.status === 'published' ? (
                <PublishedCard project={project} />
              ) : (
                <PlaceholderCard />
              )}
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <p className="mt-8 text-sm text-navy-400">
            More analytics and data science projects are in development and will be published here.
          </p>
        </Reveal>
      </div>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */

function PublishedCard({ project }: { project: Project }) {
  const href = project.link ?? project.repo ?? undefined
  const Wrapper = href ? 'a' : 'div'

  return (
    <Wrapper
      {...(href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-mist-200 bg-white transition-all duration-400 hover:-translate-y-1.5 hover:border-teal-200 hover:shadow-[0_30px_64px_-32px_rgba(10,24,52,0.4)]"
    >
      {/* Preview — a real screenshot when supplied, otherwise a generated chart motif */}
      <div className="relative aspect-[16/10] overflow-hidden bg-navy-900">
        {project.image ? (
          <img
            src={project.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
            <ChartMotif />
          </div>
        )}
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-navy-950/70 px-2.5 py-1 font-display text-[0.65rem] font-bold tracking-tight text-teal-300 backdrop-blur">
          <Database className="h-3 w-3" aria-hidden="true" />
          Analytics
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg leading-snug font-bold tracking-tight text-navy-900">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-500">{project.summary}</p>

        {project.problem && <Detail label="Problem" value={project.problem} />}
        {project.dataset && <Detail label="Dataset" value={project.dataset} />}
        {project.methodology && <Detail label="Methodology" value={project.methodology} />}
        {project.findings && <Detail label="Key findings" value={project.findings} />}

        {project.tools.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tools.map((tool) => (
              <Chip key={tool} tone="sky" className="px-2.5 py-1 text-[0.7rem]">
                {tool}
              </Chip>
            ))}
          </div>
        )}

        {href && (
          <span className="mt-6 inline-flex items-center gap-1.5 border-t border-mist-200 pt-4 font-display text-sm font-semibold text-teal-700">
            {project.repo && !project.link ? (
              <>
                <Github className="h-4 w-4" aria-hidden="true" />
                View repository
              </>
            ) : (
              'View project'
            )}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        )}
      </div>
    </Wrapper>
  )
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <p className="mt-3 text-sm leading-relaxed text-navy-500">
      <span className="font-display text-[0.65rem] font-bold tracking-[0.16em] text-navy-400 uppercase">
        {label}:{' '}
      </span>
      {value}
    </p>
  )
}

function PlaceholderCard() {
  const fields = ['Problem', 'Dataset', 'Tools', 'Methodology', 'Key findings', 'Visualization', 'Link']
  return (
    <div className="flex h-full flex-col rounded-2xl border border-dashed border-mist-300 bg-mist-50/60 p-6 transition-colors duration-400 hover:border-teal-300 hover:bg-mist-50">
      <span className="grid h-11 w-11 place-items-center rounded-xl border border-dashed border-mist-300 bg-white text-navy-300">
        <Plus className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-display text-base font-bold tracking-tight text-navy-400">
        Project slot
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-400">
        Reserved for an upcoming healthcare analytics project.
      </p>
      <ul className="mt-5 flex flex-1 flex-wrap content-start gap-1.5">
        {fields.map((field) => (
          <li
            key={field}
            className="rounded-full border border-mist-300 bg-white px-2.5 py-1 font-display text-[0.68rem] font-semibold text-navy-300"
          >
            {field}
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Generated dashboard-style preview used when a project has no screenshot yet. */
function ChartMotif() {
  return (
    <svg
      viewBox="0 0 320 200"
      className="h-full w-full"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="pm-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2ebbb3" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#2ebbb3" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="pm-bar" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#14a29b" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#6ba1de" stopOpacity="0.85" />
        </linearGradient>
      </defs>

      <rect width="320" height="200" fill="#0a1834" />
      <g stroke="#ffffff" strokeOpacity="0.06" strokeWidth="1">
        {[40, 80, 120, 160].map((y) => (
          <line key={y} x1="0" y1={y} x2="320" y2={y} />
        ))}
        {[64, 128, 192, 256].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="200" />
        ))}
      </g>

      {/* bars */}
      <g>
        {[
          [28, 40],
          [62, 66],
          [96, 52],
          [130, 84],
          [164, 72],
          [198, 104],
          [232, 90],
          [266, 122],
        ].map(([x, h], i) => (
          <rect key={i} x={x} y={172 - h} width="18" height={h} rx="4" fill="url(#pm-bar)" opacity="0.5" />
        ))}
      </g>

      {/* trend */}
      <path
        d="M20 148 L68 126 L116 136 L164 106 L212 116 L260 84 L300 96 L300 172 L20 172 Z"
        fill="url(#pm-area)"
      />
      <path
        d="M20 148 L68 126 L116 136 L164 106 L212 116 L260 84 L300 96"
        fill="none"
        stroke="#55cdc6"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g fill="#0a1834" stroke="#8ee0db" strokeWidth="2">
        <circle cx="164" cy="106" r="4.5" />
        <circle cx="260" cy="84" r="4.5" />
      </g>
      {/* corner mark */}
      <g>
        <rect x="278" y="14" width="26" height="26" rx="7" fill="#ffffff" fillOpacity="0.06" />
        <path
          d="M284 33 L289 26 L294 29 L299 21"
          fill="none"
          stroke="#55cdc6"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
