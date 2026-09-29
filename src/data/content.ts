/**
 * Single source of truth for every piece of copy on the site.
 * Edit this file to update the portfolio — no component changes needed.
 *
 * Anything not yet supplied is left as `null` / an empty array on purpose.
 * Components hide the corresponding UI rather than showing invented content.
 */

export const profile = {
  name: 'Fortune Richman Sunday',
  shortName: 'Fortune Richman',
  logo: 'FORTUNE RICHMAN',
  title: 'Pharmacist | Data Scientist',
  fullTitle: 'Pharmacist | Data Scientist | Healthcare & Data Analytics Professional',
  positioning: 'Where Pharmaceutical Science Meets Data.',
  supporting: 'Transforming healthcare knowledge into data-driven insights.',
  location: 'Nigeria',
  email: 'fortunerichman97@gmail.com',
  phone: '+234 816 6536 123',
  phoneHref: '+2348166536123',
  /**
   * Drop the CV PDF at `public/cv/Fortune-Richman-Sunday-CV.pdf`.
   * Set to `null` to hide every "Download CV" button site-wide.
   */
  cvUrl: '/cv/Fortune-Richman-Sunday-CV.pdf' as string | null,
  /**
   * Drop a portrait at `public/fortune-portrait.jpg` and set the path here.
   * While `null`, the hero renders the abstract science-meets-data composition.
   */
  portrait: null as string | null,
}

/**
 * Social / profile links.
 * `url: null` renders a muted "coming soon" placeholder instead of a dead link.
 * Fill in a real URL to activate the link.
 */
export type Social = { label: string; url: string | null }

export const socials: Social[] = [
  { label: 'LinkedIn', url: null },
  { label: 'GitHub', url: null },
  { label: 'Tableau Public', url: null },
  { label: 'Kaggle', url: null },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  eyebrow: 'Pharmacy × Data Science',
  headline: ['Turning Healthcare Knowledge Into', 'Data-Driven Insights.'],
  paragraph:
    "I'm Fortune Richman, a pharmacist and data scientist passionate about using research, analytics, and technology to solve problems in healthcare and improve decision-making.",
  badges: ['Pharmacist + Data Scientist', 'Research • Analytics • Healthcare'],
}

export const about = {
  heading: 'About Fortune',
  paragraphs: [
    'Fortune Richman Sunday is a pharmacist and data scientist with a strong interest in applying data, research, and technology to healthcare challenges.',
    'With a Bachelor of Pharmacy from the University of Uyo and experience spanning pharmacy practice, laboratory research, data analytics, STEM education, and community health initiatives, Fortune brings together scientific knowledge and analytical thinking to approach complex problems from multiple perspectives.',
    'Her interests sit at the intersection of healthcare, pharmaceutical research, data analytics, and technology.',
  ],
  stats: [
    { value: '4.48/5.00', label: 'B.Pharm Grade', note: 'University of Uyo' },
    { value: '9', label: 'Data & Technology Tools', note: 'Python, R, SQL and more' },
    { value: '6', label: 'Leadership & Volunteer Roles', note: '2022 – 2025' },
    { value: '7', label: 'Scholarships & Grants', note: 'Merit-based awards' },
  ],
  pillars: ['Pharmacy', 'Data', 'Research', 'Impact'],
}

export type ExpertiseIcon = 'pill' | 'chart' | 'brain' | 'flask' | 'heart' | 'grad'

export type Expertise = {
  title: string
  description: string
  icon: ExpertiseIcon
  tools?: string[]
}

export const expertise: Expertise[] = [
  {
    title: 'Pharmaceutical Practice',
    icon: 'pill',
    description:
      'Medication counselling, dispensing support, medication safety, pharmaceutical practice, and patient-focused care.',
  },
  {
    title: 'Data Analytics',
    icon: 'chart',
    description:
      'Data cleaning, exploratory analysis, statistical analysis, reporting, and visualization.',
    tools: ['Python', 'R', 'SQL', 'Excel', 'SPSS', 'Power BI', 'Tableau'],
  },
  {
    title: 'Data Science',
    icon: 'brain',
    description:
      'Use data-driven approaches to identify patterns, generate insights, and support evidence-based decision-making.',
  },
  {
    title: 'Pharmaceutical Research',
    icon: 'flask',
    description:
      'Laboratory research, drug extraction and assay, scientific analysis, and research documentation.',
  },
  {
    title: 'Public Health',
    icon: 'heart',
    description:
      'Health advocacy, community outreach, health education, and awareness initiatives.',
  },
  {
    title: 'STEM Education',
    icon: 'grad',
    description:
      'Digital literacy education, STEM advocacy, and technology training for young people.',
  },
]

export const experience = [
  {
    role: 'Pharmacy Extern',
    organization: 'Grandpharma Medical Services',
    location: 'Uyo, Akwa Ibom State',
    period: 'September 2024 – Present',
    current: true,
    responsibilities: [
      'Provided patient counselling on medication usage, side effects, and interactions.',
      'Assisted in dispensing medications under pharmacist supervision.',
      'Ensured compliance with medication safety protocols.',
      'Developed practical knowledge of pharmaceutical practice and medication therapy management.',
      'Participated in community outreach initiatives promoting medication safety and health awareness.',
    ],
  },
]

export const research = {
  heading: 'Research & Scientific Inquiry',
  featured: {
    title:
      'Evaluation of Antioxidant Properties of Schiff Bases Derived from Benzaldehyde and Hexylamine and Heptylamine',
    role: 'B.Pharm Thesis Research',
    institution: 'University of Uyo',
    focus:
      'Schiff base compounds derived from benzaldehyde with hexylamine and heptylamine, evaluated for their antioxidant properties.',
    methodology: [
      'Preparation of Schiff bases from benzaldehyde with hexylamine and heptylamine.',
      'Laboratory-based evaluation of the antioxidant properties of the prepared compounds.',
      'Comparative analysis across the compounds studied.',
      'Documentation and reporting of the work as a B.Pharm thesis.',
    ],
    /* Findings intentionally empty — to be filled in once cleared for publication. */
    outcomes: [] as string[],
    outcomesNote: 'Detailed findings and the full thesis document are available on request.',
    tags: ['Medicinal Chemistry', 'Antioxidant Evaluation', 'Schiff Bases', 'Laboratory Research'],
  },
  secondary: {
    role: 'Laboratory Research Assistant',
    organization: 'Pharmacy Students Research Group, University of Uyo',
    description:
      'Involved in the extraction and assay of drugs from medicinal plants, applying data analytics tools including SPSS and Microsoft Excel to support research analysis.',
    tags: ['Pharmacognosy', 'Drug Extraction', 'SPSS', 'Microsoft Excel'],
  },
}

export type Project = {
  title: string
  status: 'published' | 'placeholder'
  summary: string
  problem?: string
  dataset?: string
  tools: string[]
  methodology?: string
  findings?: string
  link?: string | null
  repo?: string | null
  image?: string | null
}

/**
 * Add new projects here. Anything with `status: 'placeholder'` renders as a
 * muted outline "slot" card so the grid stays balanced until real work lands.
 * The optional fields (problem / dataset / methodology / findings / image /
 * repo) all render automatically once you fill them in.
 */
export const projects: Project[] = [
  {
    title: 'Data Analytics Capstone',
    status: 'published',
    summary:
      'An applied data analytics project developed during the Digi Girls Cybersafe Foundation training, demonstrating practical application of SQL and analytical techniques.',
    tools: ['SQL', 'Excel', 'Data Analysis'],
    link: 'https://drive.google.com/drive/folders/1hzCaxeMcgKLSriRmkPGeqLbzlicg3RJd?usp=sharing',
    repo: null,
    image: null,
  },
  {
    title: 'Next project',
    status: 'placeholder',
    summary: 'Problem · Dataset · Tools · Methodology · Key findings · Visualization · Link.',
    tools: [],
  },
  {
    title: 'Next project',
    status: 'placeholder',
    summary: 'Problem · Dataset · Tools · Methodology · Key findings · Visualization · Link.',
    tools: [],
  },
]

export type ToolkitIcon = 'code' | 'chart' | 'doc'

export const toolkit: { category: string; icon: ToolkitIcon; blurb: string; tools: string[] }[] = [
  {
    category: 'Programming & Data',
    icon: 'code',
    blurb: 'Querying, scripting and statistical computing.',
    tools: ['Python', 'R', 'SQL'],
  },
  {
    category: 'Analytics & Visualization',
    icon: 'chart',
    blurb: 'Analysis, dashboards and statistical reporting.',
    tools: ['Microsoft Excel', 'Power BI', 'Tableau', 'SPSS'],
  },
  {
    category: 'Productivity',
    icon: 'doc',
    blurb: 'Documentation and scientific communication.',
    tools: ['Microsoft Word', 'Microsoft PowerPoint'],
  },
]

export const education = [
  {
    institution: 'University of Uyo, Uyo',
    degree: 'Bachelor of Pharmacy (B.Pharm)',
    period: 'October 2019 – September 2025',
    grade: '4.48 / 5.00',
    coursework: [
      { name: 'Pharmaceutical and Medicinal Chemistry', highlight: false, note: null },
      { name: 'Pharmacology', highlight: false, note: null },
      { name: 'Pharmaceutical Microbiology', highlight: false, note: null },
      { name: 'Pharmaceutics and Pharmaceutical Technology', highlight: false, note: null },
      { name: 'Pharmacognosy', highlight: false, note: null },
      { name: 'Biostatistics', highlight: true, note: 'Best Student award' },
      { name: 'Clinical Pharmacy', highlight: false, note: null },
      { name: 'Bio-Pharmacy', highlight: false, note: null },
    ],
  },
]

export const trainingResourcesUrl =
  'https://drive.google.com/drive/folders/1hzCaxeMcgKLSriRmkPGeqLbzlicg3RJd?usp=sharing'

export const certifications = [
  {
    provider: 'RLabs × Coursera',
    title: 'Data Analytics Training',
    period: null as string | null,
    items: ['R Programming', 'Structured Query Language', 'Microsoft Excel', 'Tableau'],
  },
  {
    provider: 'Microsoft Nigeria',
    title: '30 Days of Learning – Power BI',
    period: 'June 2022' as string | null,
    items: ['Power BI'],
  },
  {
    provider: 'Digi Girls Cybersafe Foundation',
    title: 'Data Analytics Training',
    period: null as string | null,
    items: ['SQL for Data Analytics', 'Data Analytics Capstone Project'],
  },
]

export type LeadershipIcon = 'grad' | 'compass' | 'users' | 'heart' | 'sparkles' | 'wallet'

export const leadership: {
  role: string
  organization: string
  tagline: string | null
  period: string | null
  icon: LeadershipIcon
  highlights: string[]
}[] = [
  {
    role: 'STEM Educator & Volunteer',
    organization: 'WAAW Foundation',
    tagline: 'Working to Advance STEM Education for African Women',
    period: 'January 2024 – September 2025',
    icon: 'grad',
    highlights: [
      'STEM inclusion',
      'Digital literacy',
      'Teaching secondary school students',
      'Encouraging girls to explore STEM',
    ],
  },
  {
    role: 'Co-Founder',
    organization: 'The Pans Scholarship / Professional Development Guide',
    tagline: null,
    period: null,
    icon: 'compass',
    highlights: [
      'Scholarship opportunities',
      'Application guidance',
      'Professional development programs',
      'Supporting pharmacy students',
    ],
  },
  {
    role: 'Vice President',
    organization: 'Rotaract Club, University of Uyo',
    tagline: null,
    period: 'June 2023 – June 2024',
    icon: 'users',
    highlights: [
      'Coordinating club activities',
      'Fundraising',
      'Humanitarian projects',
      'Health outreaches',
      'Community screening initiatives',
    ],
  },
  {
    role: 'Member',
    organization: 'PANS Public Health Team',
    tagline: null,
    period: 'May 2023 – September 2025',
    icon: 'heart',
    highlights: [
      'Health outreaches',
      'Public health advocacy',
      'Health-day articles',
      'Community engagement',
    ],
  },
  {
    role: 'DigiGirls Champion',
    organization: 'DigiGirls',
    tagline: null,
    period: 'September 2022',
    icon: 'sparkles',
    highlights: [
      'Coordinated digital literacy training',
      'Taught SQL for data analytics',
      'Supported girls in technology',
    ],
  },
  {
    role: 'Treasurer',
    organization: 'Rotaract Club, University of Uyo, Main Campus',
    tagline: null,
    period: 'May 2022',
    icon: 'wallet',
    highlights: ['Club finance and record keeping'],
  },
]

export const awards = [
  {
    title: 'Most Outstanding Academic Student in 100 Level',
    detail: 'Faculty of Pharmacy, University of Uyo',
    period: '2019/2020 Academic Session' as string | null,
  },
  {
    title: 'Best Student in Biostatistics',
    detail: 'University of Uyo',
    period: null as string | null,
  },
]

export const scholarships = [
  'Wells Mountain Initiative Scholarship',
  'Zeribe Nwosu Foundation Grant',
  'Federal Scholarship Board Award for Undergraduates in Nigerian Universities',
  'Jim Ovia Scholarship Award',
  'TotalEnergies Scholarship Award',
  'NLNG Scholarship Award',
  'AKISAN USA Scholarship Award',
]

export const brandQuote = {
  text: 'I believe the future of healthcare belongs to professionals who can understand both the science behind healthcare and the data that drives better decisions.',
  author: 'Fortune Richman',
  role: 'Pharmacist & Data Scientist',
}

export const contact = {
  heading: "Let's Connect",
  copy: "Interested in healthcare analytics, pharmaceutical research, data science, STEM education, or collaboration? I'd love to connect.",
}

export const footer = {
  tagline: 'Healthcare. Data. Research. Impact.',
  year: 2026,
}
