import { useTranslations } from 'next-intl'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Github, ExternalLink, Calendar } from 'lucide-react'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'

// Mock data - in a real app, this would come from Contentlayer
const projects = [
  {
    title: 'E-commerce Platform',
    description:
      'A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe. Features include user authentication, product catalog, shopping cart, and payment processing.',
    stack: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    cover: '/images/project-1.jpg',
    slug: 'ecommerce-platform',
    dateStart: '2024-01-01',
    dateEnd: '2024-03-01',
    role: 'Full-Stack Developer',
    company: 'Tech Corp',
    links: {
      repo: 'https://github.com/sthefanoc/ecommerce-platform',
      demo: 'https://ecommerce-demo.vercel.app',
    },
    impact:
      'Increased conversion rates by 25% and reduced page load times by 40%.',
    metrics: [
      '25% increase in conversions',
      '40% faster load times',
      '99.9% uptime',
    ],
  },
  {
    title: 'AI Dashboard',
    description:
      'A real-time analytics dashboard with AI-powered insights and interactive visualizations. Built for data scientists and business analysts.',
    stack: ['React', 'Python', 'FastAPI', 'D3.js', 'Redis'],
    cover: '/images/project-2.jpg',
    slug: 'ai-dashboard',
    dateStart: '2023-11-01',
    dateEnd: '2024-01-01',
    role: 'Frontend Developer',
    company: 'AI Solutions Inc',
    links: {
      repo: 'https://github.com/sthefanoc/ai-dashboard',
      demo: 'https://ai-dashboard.vercel.app',
    },
    impact:
      'Enabled data-driven decision making for 500+ users across 10 departments.',
    metrics: [
      '500+ active users',
      '10 departments served',
      'Real-time data processing',
    ],
  },
  {
    title: 'Mobile Banking App',
    description:
      'A secure mobile banking application with biometric authentication, real-time transactions, and financial insights.',
    stack: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'JWT'],
    cover: '/images/project-3.jpg',
    slug: 'mobile-banking-app',
    dateStart: '2023-08-01',
    dateEnd: '2023-12-01',
    role: 'Mobile Developer',
    company: 'FinTech Solutions',
    links: {
      repo: 'https://github.com/sthefanoc/mobile-banking',
      demo: 'https://banking-demo.vercel.app',
    },
    impact:
      'Served 10,000+ users with 99.99% security record and zero data breaches.',
    metrics: ['10,000+ users', '99.99% security', 'Zero data breaches'],
  },
  {
    title: 'Content Management System',
    description:
      'A headless CMS built with modern technologies, featuring a drag-and-drop interface and real-time collaboration.',
    stack: ['Next.js', 'Prisma', 'PostgreSQL', 'tRPC', 'Zustand'],
    cover: '/images/project-4.jpg',
    slug: 'content-management-system',
    dateStart: '2023-06-01',
    dateEnd: '2023-10-01',
    role: 'Full-Stack Developer',
    company: 'Media Corp',
    links: {
      repo: 'https://github.com/sthefanoc/cms',
      demo: 'https://cms-demo.vercel.app',
    },
    impact:
      'Reduced content publishing time by 60% and improved team collaboration.',
    metrics: [
      '60% faster publishing',
      'Real-time collaboration',
      'Drag-and-drop interface',
    ],
  },
  {
    title: 'Real-time Chat Application',
    description:
      'A scalable chat application with real-time messaging, file sharing, and video calls using WebRTC.',
    stack: ['React', 'Socket.io', 'Node.js', 'WebRTC', 'Redis'],
    cover: '/images/project-5.jpg',
    slug: 'real-time-chat-app',
    dateStart: '2023-03-01',
    dateEnd: '2023-07-01',
    role: 'Full-Stack Developer',
    company: 'Communication Ltd',
    links: {
      repo: 'https://github.com/sthefanoc/chat-app',
      demo: 'https://chat-demo.vercel.app',
    },
    impact:
      'Enabled seamless communication for remote teams with 1000+ concurrent users.',
    metrics: [
      '1000+ concurrent users',
      'Real-time messaging',
      'WebRTC video calls',
    ],
  },
  {
    title: 'Task Management Tool',
    description:
      'A comprehensive project management tool with kanban boards, time tracking, and team collaboration features.',
    stack: ['Vue.js', 'Laravel', 'MySQL', 'WebSockets', 'Docker'],
    cover: '/images/project-6.jpg',
    slug: 'task-management-tool',
    dateStart: '2023-01-01',
    dateEnd: '2023-05-01',
    role: 'Full-Stack Developer',
    company: 'Productivity Inc',
    links: {
      repo: 'https://github.com/sthefanoc/task-manager',
      demo: 'https://tasks-demo.vercel.app',
    },
    impact:
      'Improved team productivity by 35% and project delivery times by 20%.',
    metrics: [
      '35% productivity increase',
      '20% faster delivery',
      'Kanban boards',
    ],
  },
]

const allTags = Array.from(
  new Set(projects.flatMap((project) => project.stack))
)

export default function ProjectsPage() {
  const t = useTranslations()

  return (
    <div className="container max-w-6xl space-y-8">
      {/* Header */}
      <section className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          {t('projects.title')}
        </h1>
        <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
          {t('projects.description')}
        </p>
      </section>

      {/* Search and Filter */}
      <section className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex-1">
            <Input placeholder="Search projects..." className="w-full" />
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              {t('projects.all')}
            </Button>
            {allTags.slice(0, 5).map((tag) => (
              <Button key={tag} variant="outline" size="sm">
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.slug}
            className="group transition-shadow hover:shadow-lg"
          >
            <CardHeader>
              <div className="mb-4 flex aspect-video items-center justify-center rounded-lg bg-muted">
                <span className="text-muted-foreground">Project Image</span>
              </div>
              <CardTitle className="transition-colors group-hover:text-primary">
                {project.title}
              </CardTitle>
              <CardDescription className="line-clamp-3">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    {t('projects.role')}
                  </span>
                  <span className="font-medium">{project.role}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    {t('projects.company')}
                  </span>
                  <span className="font-medium">{project.company}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Period</span>
                  <span className="font-medium">
                    {formatDate(project.dateStart)} -{' '}
                    {formatDate(project.dateEnd)}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">{t('projects.stack')}</p>
                <div className="flex flex-wrap gap-1">
                  {project.stack.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.stack.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.stack.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">{t('projects.impact')}</p>
                <p className="text-sm text-muted-foreground">
                  {project.impact}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/projects/${project.slug}` as any}>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                  {project.links.repo && (
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={project.links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projects/${project.slug}` as any}>
                    View Details
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Pagination */}
      <section className="flex justify-center">
        <div className="flex space-x-2">
          <Button variant="outline" disabled>
            Previous
          </Button>
          <Button variant="default">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Next</Button>
        </div>
      </section>
    </div>
  )
}
