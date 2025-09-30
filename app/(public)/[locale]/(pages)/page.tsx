import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Github, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'

// Mock data - in a real app, this would come from Contentlayer
const featuredProjects = [
  {
    title: 'E-commerce Platform',
    description:
      'A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe.',
    stack: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    cover: '/images/project-1.jpg',
    slug: 'ecommerce-platform',
    dateStart: '2024-01-01',
    dateEnd: '2024-03-01',
  },
  {
    title: 'AI Dashboard',
    description:
      'A real-time analytics dashboard with AI-powered insights and visualizations.',
    stack: ['React', 'Python', 'FastAPI', 'D3.js'],
    cover: '/images/project-2.jpg',
    slug: 'ai-dashboard',
    dateStart: '2023-11-01',
    dateEnd: '2024-01-01',
  },
  {
    title: 'Mobile Banking App',
    description:
      'A secure mobile banking application with biometric authentication.',
    stack: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
    cover: '/images/project-3.jpg',
    slug: 'mobile-banking-app',
    dateStart: '2023-08-01',
    dateEnd: '2023-12-01',
  },
]

const latestPosts = [
  {
    title: 'Building Scalable React Applications',
    description:
      'Best practices for creating maintainable and performant React applications.',
    slug: 'building-scalable-react-applications',
    date: '2024-03-15',
    tags: ['React', 'JavaScript', 'Performance'],
    readingTime: 5,
  },
  {
    title: 'The Future of Web Development',
    description:
      'Exploring emerging technologies and trends in modern web development.',
    slug: 'future-of-web-development',
    date: '2024-03-10',
    tags: ['Web Development', 'Technology', 'Trends'],
    readingTime: 8,
  },
  {
    title: 'TypeScript Best Practices',
    description:
      'How to write better TypeScript code with advanced patterns and techniques.',
    slug: 'typescript-best-practices',
    date: '2024-03-05',
    tags: ['TypeScript', 'Programming', 'Best Practices'],
    readingTime: 6,
  },
]

export default function HomePage() {
  const t = useTranslations()

  return (
    <div className="flex flex-col space-y-16">
      {/* Hero Section */}
      <section className="space-y-8 py-20 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {t('home.title')}
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            {t('home.subtitle')}
          </p>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            {t('home.description')}
          </p>
        </div>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/projects">
              {t('home.cta')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            {t('home.featuredProjects')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Some of my recent work and side projects
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
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
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {formatDate(project.dateStart)} -{' '}
                    {formatDate(project.dateEnd)}
                  </span>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/projects/${project.slug}` as any}>
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button variant="outline" asChild>
            <Link href="/projects">
              {t('home.viewAll')} Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            {t('home.latestPosts')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Thoughts on web development, design, and technology
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <Card
              key={post.slug}
              className="group transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <CardTitle className="transition-colors group-hover:text-primary">
                  {post.title}
                </CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{formatDate(post.date)}</span>
                  <span>{post.readingTime} min read</span>
                </div>
                <Button variant="ghost" className="w-full" asChild>
                  <Link href={`/blog/${post.slug}` as any}>
                    {t('common.readMore')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button variant="outline" asChild>
            <Link href="/blog">
              {t('home.viewAll')} Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
