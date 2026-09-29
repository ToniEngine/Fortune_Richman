import { profile } from '../data/content'

/**
 * The "science meets data" composition that anchors the hero.
 *
 * A hexagonal molecular lattice at the top dissolves into scattered data
 * points, which resolve into an analytics line + bar chart below — the whole
 * brand argument in one image. When `profile.portrait` is set, the same frame
 * hosts the photograph and the composition becomes its surrounding detail.
 */
export default function HeroVisual() {
  const hasPortrait = Boolean(profile.portrait)

  return (
    <div className="relative aspect-[4/4.5] w-full max-w-[30rem] sm:aspect-[4/4.2] lg:max-w-none">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(46,187,179,0.16),transparent_72%)] blur-2xl"
      />

      <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-navy-100 bg-gradient-to-br from-navy-900 via-navy-900 to-navy-800 shadow-[0_40px_90px_-40px_rgba(10,24,52,0.6)]">
        {/* Data-grid substrate */}
        <div aria-hidden="true" className="grid-pattern-dark absolute inset-0 opacity-70" />
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl"
        />

        {hasPortrait ? (
          <img
            src={profile.portrait!}
            alt={`${profile.name}, ${profile.title}`}
            width={960}
            height={1080}
            loading="eager"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        ) : (
          <Composition />
        )}

        {/* Gradient scrim keeps the badges legible over either treatment */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950/85 to-transparent"
        />
      </div>

      {/* Floating credential cards */}
      <div className="animate-float absolute -top-4 -left-3 z-10 sm:-left-6 lg:-left-10">
        <div className="flex items-center gap-2.5 rounded-2xl border border-navy-100 bg-white/95 px-4 py-3 shadow-[0_18px_40px_-18px_rgba(10,24,52,0.45)] backdrop-blur">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-teal-50">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
              <path
                d="M4 19a3 3 0 003 3h10a3 3 0 003-3M8 3v8m8-8v8"
                stroke="#0d8380"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M8 3h8M4 19V11h16v8"
                stroke="#0d8380"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="font-display text-[0.78rem] font-bold tracking-tight text-navy-900 sm:text-sm">
            Pharmacist + Data Scientist
          </span>
        </div>
      </div>

      <div
        className="animate-float absolute -right-2 -bottom-5 z-10 sm:-right-5 lg:-right-8"
        style={{ animationDelay: '1.6s' }}
      >
        <div className="rounded-2xl border border-navy-700/60 bg-navy-900/95 px-4 py-3 shadow-[0_18px_40px_-16px_rgba(10,24,52,0.7)] backdrop-blur">
          <p className="font-display text-[0.78rem] font-bold tracking-tight text-white sm:text-sm">
            Research • Analytics • Healthcare
          </p>
          <div className="mt-2 flex items-center gap-1" aria-hidden="true">
            {[10, 16, 12, 22, 18, 26, 21].map((h, i) => (
              <span
                key={i}
                className="w-1.5 rounded-full bg-gradient-to-t from-teal-500/40 to-teal-300"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */

function Composition() {
  return (
    <svg
      viewBox="0 0 420 460"
      className="absolute inset-0 h-full w-full"
      role="img"
      aria-label="Abstract composition of a molecular structure dissolving into data points and an analytics chart"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="hv-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2ebbb3" />
          <stop offset="55%" stopColor="#55cdc6" />
          <stop offset="100%" stopColor="#6ba1de" />
        </linearGradient>
        <linearGradient id="hv-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2ebbb3" stopOpacity="0.38" />
          <stop offset="100%" stopColor="#2ebbb3" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hv-bar" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#14a29b" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#55cdc6" stopOpacity="0.95" />
        </linearGradient>
        <radialGradient id="hv-node">
          <stop offset="0%" stopColor="#8ee0db" />
          <stop offset="100%" stopColor="#14a29b" />
        </radialGradient>
      </defs>

      {/* ---- Molecular lattice ---- */}
      <g
        stroke="#7f9cc4"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.55"
        fill="none"
        style={{ strokeDasharray: 900, strokeDashoffset: 900, animation: 'draw-line 2.4s ease-out 0.3s forwards' }}
      >
        {/* fused hexagons — a benzaldehyde-ish skeleton, abstracted */}
        <path d="M120 96 L162 72 L204 96 L204 144 L162 168 L120 144 Z" />
        <path d="M204 96 L246 72 L288 96 L288 144 L246 168 L204 144" />
        <path d="M162 72 L162 40 L196 22" />
        <path d="M288 120 L322 104 L356 120" />
        <path d="M162 168 L140 200" />
        <path d="M246 168 L268 202" />
      </g>

      {/* Double-bond hint lines */}
      <g stroke="#2ebbb3" strokeWidth="1.3" opacity="0.5" strokeLinecap="round">
        <path d="M129 102 L129 138" />
        <path d="M213 102 L213 138" />
        <path d="M255 79 L285 96" />
      </g>

      {/* Lattice nodes */}
      <g>
        {[
          [120, 96],
          [162, 72],
          [204, 96],
          [204, 144],
          [162, 168],
          [120, 144],
          [246, 72],
          [288, 96],
          [288, 144],
          [246, 168],
          [162, 40],
          [196, 22],
          [322, 104],
          [356, 120],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={i % 4 === 0 ? 5.5 : 3.6}
            fill="url(#hv-node)"
            opacity={0.95}
            style={{
              transformOrigin: `${cx}px ${cy}px`,
              animation: `pulse-node ${5 + (i % 4)}s ease-in-out ${i * 0.22}s infinite`,
            }}
          />
        ))}
      </g>

      {/* ---- Dissolution zone: molecule becomes data ---- */}
      <g fill="#9cc2ec">
        {[
          [140, 200, 2.6],
          [268, 202, 2.6],
          [178, 214, 2],
          [222, 208, 1.6],
          [248, 232, 2.2],
          [112, 226, 1.8],
          [304, 218, 2],
          [196, 240, 1.5],
          [330, 244, 1.7],
          [86, 250, 1.5],
          [154, 252, 1.4],
          [286, 254, 1.5],
        ].map(([cx, cy, r], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={r}
            opacity={0.75}
            style={{
              transformOrigin: `${cx}px ${cy}px`,
              animation: `pulse-node ${4 + (i % 5)}s ease-in-out ${i * 0.3}s infinite`,
            }}
          />
        ))}
      </g>

      {/* ---- Analytics panel ---- */}
      <g transform="translate(0 40)">
        {/* axis rules */}
        <g stroke="#ffffff" strokeOpacity="0.1" strokeWidth="1">
          <line x1="52" y1="300" x2="372" y2="300" />
          <line x1="52" y1="350" x2="372" y2="350" />
          <line x1="52" y1="400" x2="372" y2="400" />
        </g>

        {/* bars */}
        <g>
          {[
            [72, 34],
            [108, 58],
            [144, 46],
            [180, 76],
            [216, 64],
            [252, 96],
            [288, 84],
            [324, 112],
          ].map(([x, h], i) => (
            <rect
              key={i}
              x={x}
              y={400 - h}
              width="15"
              height={h}
              rx="4"
              fill="url(#hv-bar)"
              opacity="0.55"
            />
          ))}
        </g>

        {/* trend area + line */}
        <path
          d="M60 372 L116 344 L172 356 L228 314 L284 326 L340 284 L372 296 L372 400 L60 400 Z"
          fill="url(#hv-area)"
        />
        <path
          d="M60 372 L116 344 L172 356 L228 314 L284 326 L340 284 L372 296"
          fill="none"
          stroke="url(#hv-line)"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 520,
            strokeDashoffset: 520,
            animation: 'draw-line 2s ease-out 0.9s forwards',
          }}
        />
        <g fill="#0a1834" stroke="#55cdc6" strokeWidth="2.4">
          {[
            [116, 344],
            [228, 314],
            [340, 284],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="5" />
          ))}
        </g>
      </g>
    </svg>
  )
}
