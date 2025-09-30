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
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'

// Mock data - in a real app, this would come from Contentlayer
const posts = [
  {
    title: 'Building Scalable React Applications',
    description:
      'Learn the best practices for creating maintainable and performant React applications that can grow with your team and business needs.',
    slug: 'building-scalable-react-applications',
    date: '2024-03-15',
    updated: '2024-03-16',
    tags: ['React', 'JavaScript', 'Performance', 'Architecture'],
    readingTime: 5,
    cover: '/images/blog-1.jpg',
    summary:
      'A comprehensive guide to building scalable React applications with modern patterns and best practices.',
  },
  {
    title: 'The Future of Web Development',
    description:
      'Exploring emerging technologies and trends that are shaping the future of web development, from AI integration to edge computing.',
    slug: 'future-of-web-development',
    date: '2024-03-10',
    updated: '2024-03-12',
    tags: ['Web Development', 'Technology', 'Trends', 'AI'],
    readingTime: 8,
    cover: '/images/blog-2.jpg',
    summary:
      'An in-depth look at the technologies and trends that will define web development in the coming years.',
  },
  {
    title: 'TypeScript Best Practices',
    description:
      'How to write better TypeScript code with advanced patterns, type safety techniques, and performance optimizations.',
    slug: 'typescript-best-practices',
    date: '2024-03-05',
    updated: '2024-03-07',
    tags: ['TypeScript', 'Programming', 'Best Practices', 'Type Safety'],
    readingTime: 6,
    cover: '/images/blog-3.jpg',
    summary:
      'Master TypeScript with these proven patterns and techniques for better code quality and developer experience.',
  },
  {
    title: 'Modern CSS Techniques',
    description:
      'Discover the latest CSS features and techniques for creating beautiful, responsive, and performant user interfaces.',
    slug: 'modern-css-techniques',
    date: '2024-02-28',
    updated: '2024-03-01',
    tags: ['CSS', 'Design', 'Responsive', 'Performance'],
    readingTime: 7,
    cover: '/images/blog-4.jpg',
    summary:
      'Explore modern CSS features like Grid, Flexbox, and custom properties to create stunning layouts.',
  },
  {
    title: 'Database Design Patterns',
    description:
      'Learn essential database design patterns and optimization techniques for building scalable data architectures.',
    slug: 'database-design-patterns',
    date: '2024-02-20',
    updated: '2024-02-22',
    tags: ['Database', 'SQL', 'Architecture', 'Performance'],
    readingTime: 9,
    cover: '/images/blog-5.jpg',
    summary:
      'Master database design with proven patterns and optimization strategies for better performance and scalability.',
  },
  {
    title: 'API Design Best Practices',
    description:
      'Create robust and maintainable APIs with these essential design principles and implementation strategies.',
    slug: 'api-design-best-practices',
    date: '2024-02-15',
    updated: '2024-02-17',
    tags: ['API', 'REST', 'GraphQL', 'Architecture'],
    readingTime: 6,
    cover: '/images/blog-6.jpg',
    summary:
      'Build better APIs with these proven design principles and implementation strategies.',
  },
]

const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)))

export default function BlogPage() {
  const t = useTranslations()

  return (
    <div className="container max-w-6xl space-y-8">
      {/* Header */}
      <section className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight">{t('blog.title')}</h1>
        <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
          {t('blog.description')}
        </p>
      </section>

      {/* Search and Filter */}
      <section className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex-1">
            <Input placeholder={t('blog.search')} className="w-full" />
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              {t('blog.all')}
            </Button>
            {allTags.slice(0, 6).map((tag) => (
              <Button key={tag} variant="outline" size="sm">
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Featured Post</h2>
        <Card className="group transition-shadow hover:shadow-lg">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex aspect-video items-center justify-center rounded-lg bg-muted">
              <span className="text-muted-foreground">Featured Image</span>
            </div>
            <div className="space-y-4 p-6">
              <div className="space-y-2">
                <Badge variant="default">Featured</Badge>
                <CardTitle className="text-2xl transition-colors group-hover:text-primary">
                  {posts[0].title}
                </CardTitle>
                <CardDescription className="text-base">
                  {posts[0].description}
                </CardDescription>
              </div>
              <div className="flex flex-wrap gap-2">
                {posts[0].tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {formatDate(posts[0].date)}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {posts[0].readingTime} {t('blog.readingTime')}
                </div>
              </div>
              <Button asChild>
                <Link href={`/blog/${posts[0].slug}` as any}>
                  {t('common.readMore')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* Posts Grid */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">All Posts</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(1).map((post) => (
            <Card
              key={post.slug}
              className="group transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-4 flex aspect-video items-center justify-center rounded-lg bg-muted">
                  <span className="text-muted-foreground">Post Image</span>
                </div>
                <CardTitle className="line-clamp-2 transition-colors group-hover:text-primary">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {post.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{post.tags.length - 3} more
                    </Badge>
                  )}
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readingTime} min
                  </div>
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
