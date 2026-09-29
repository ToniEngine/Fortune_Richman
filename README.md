# Fortune Richman Sunday — Portfolio

Personal portfolio for **Fortune Richman Sunday**, Pharmacist & Data Scientist.
Positioning: _Where Pharmaceutical Science Meets Data._

Built with **React 18 + TypeScript + Vite + Tailwind CSS v4**, with
[lucide-react](https://lucide.dev) for icons. No UI framework, no runtime CSS-in-JS.

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve the production build
npm run lint     # TypeScript check (tsc --noEmit)
```

---

## Before you publish — two files to drop in

| What | Where | Effect |
| --- | --- | --- |
| **CV (PDF)** | `public/cv/Fortune-Richman-Sunday-CV.pdf` | Activates the three **Download CV** buttons. **Until this file exists those buttons 404** — either add the PDF or set `profile.cvUrl = null` in `src/data/content.ts` to hide them. |
| **Portrait (optional)** | `public/fortune-portrait.jpg`, then set `profile.portrait` to `'/fortune-portrait.jpg'` | The hero swaps the abstract science-meets-data composition for the photograph. The frame, floating badges and scrim are already designed to hold a portrait. |

---

## Editing content

**Everything is in [`src/data/content.ts`](src/data/content.ts).** Components read
from it and render nothing for data that is absent — you never have to touch JSX
to update the site.

### Adding a social / profile link

Links start as `url: null`, which renders a muted "Soon" placeholder instead of a
dead link. Fill in the real URL to turn it into a working link:

```ts
export const socials = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/…' },  // now live
  { label: 'GitHub', url: null },                                // still a placeholder
  …
]
```

### Adding a project

The projects grid keeps two dashed "slot" cards so it stays balanced while the
portfolio fills up. Replace a slot by adding a real entry to `projects`:

```ts
{
  title: 'Medication Adherence Analysis',
  status: 'published',
  summary: 'One or two sentences on what the project does.',
  problem: 'The question the analysis set out to answer.',
  dataset: 'Where the data came from, and its shape.',
  methodology: 'How it was cleaned, modelled and validated.',
  findings: 'What the analysis concluded.',
  tools: ['Python', 'SQL', 'Power BI'],
  image: '/projects/adherence-dashboard.png',   // drop the file in public/projects/
  link: 'https://…',                            // dashboard / write-up
  repo: 'https://github.com/…',                 // optional
}
```

`problem` / `dataset` / `methodology` / `findings` / `image` / `repo` are all
optional and only render when present. With no `image`, the card draws a
generated analytics motif so the grid still looks finished.

### Adding research findings

`research.featured.outcomes` is deliberately an empty array — the section shows
`outcomesNote` ("available on request") until real findings are added. Push
strings into `outcomes` and the note is replaced by the list.

---

## Structure

```
src/
├─ data/content.ts        ← all copy, links and data
├─ components/
│  ├─ ui.tsx              ← Reveal, Section, SectionHeading, Button, Chip, Lattice
│  ├─ Navbar.tsx          ← sticky, blurs on scroll, active-section tracking, mobile sheet
│  ├─ Hero.tsx / HeroVisual.tsx
│  ├─ About.tsx  Expertise.tsx  Experience.tsx  Research.tsx
│  ├─ Projects.tsx  Toolkit.tsx  BrandQuote.tsx  Education.tsx
│  ├─ Certifications.tsx  Leadership.tsx  Awards.tsx  Contact.tsx  Footer.tsx
├─ index.css              ← Tailwind theme tokens, base styles, motion primitives
└─ App.tsx
```

### Design tokens

Defined once in `src/index.css` under `@theme`, so `bg-navy-900`, `text-teal-500`
etc. work anywhere:

| Scale | Role |
| --- | --- |
| `navy-50…950` | Deep navy — primary brand colour, dark sections, body text |
| `teal-50…900` | Medical teal — primary accent, links, active states |
| `sky-100…500` | Soft blue — secondary accent, data points |
| `mist-50…300` | Very light gray — section grounds, card borders |
| `leaf-100…600` | Subtle green — "current" / positive states only |

Type: **Plus Jakarta Sans** for display (`font-display`), **Inter** for body
(`font-sans`), both from Google Fonts.

---

## Accessibility & performance notes

- Semantic landmarks (`header` / `nav` / `main` / `section[aria-labelledby]` / `footer`),
  a skip link, and `aria-current` on the active nav item.
- Every animation is wrapped in `prefers-reduced-motion` guards — the `Reveal`
  component shows content immediately rather than animating it.
- Scroll reveals use a single `IntersectionObserver` per element that disconnects
  after firing.
- All decorative SVG is `aria-hidden`; meaningful graphics carry `role="img"` and a label.
- Touch targets are ≥48px; verified with no horizontal overflow at 1440 / 1280 /
  1024 / 768 / 430 / 390 / 375px.
- `Person` JSON-LD, Open Graph and Twitter card metadata are in `index.html`.
  Update the `canonical` URL and add `public/og-image.png` when the domain is known.

---

## Deploying

The build is fully static — `npm run build` and serve `dist/`. Works as-is on
Netlify, Vercel, Cloudflare Pages or GitHub Pages (set `base` in
`vite.config.ts` if hosting from a subpath).
# Fortune_Richman
