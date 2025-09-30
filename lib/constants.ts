export const SITE_CONFIG = {
  name: 'Sthefano C.',
  title: 'Full-Stack Developer & Designer',
  description:
    'Building modern web applications with a focus on user experience and performance.',
  url: 'https://sthefanoc.com',
  ogImage: '/og-image.png',
  links: {
    github: 'https://github.com/sthefanoc',
    linkedin: 'https://linkedin.com/in/sthefanoc',
    twitter: 'https://twitter.com/sthefanoc',
    email: 'mailto:hello@sthefanoc.com',
  },
} as const

export const NAVIGATION = [
  { name: 'navigation.home', href: '/' },
  { name: 'navigation.about', href: '/about' },
  { name: 'navigation.projects', href: '/projects' },
  { name: 'navigation.blog', href: '/blog' },
  { name: 'navigation.contact', href: '/contact' },
] as const

export const SKILLS = {
  languages: ['TypeScript', 'JavaScript', 'Python', 'Go', 'Rust'],
  frameworks: [
    'React',
    'Next.js',
    'Vue.js',
    'Node.js',
    'Express',
    'FastAPI',
    'Django',
  ],
  tools: [
    'Docker',
    'Kubernetes',
    'AWS',
    'Vercel',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'Git',
  ],
} as const

export const PAGINATION = {
  postsPerPage: 6,
  projectsPerPage: 9,
} as const

export const CONTACT_FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || ''

export const ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID || ''

export const LOCALES = ['en', 'es', 'pt'] as const
export type Locale = (typeof LOCALES)[number]
