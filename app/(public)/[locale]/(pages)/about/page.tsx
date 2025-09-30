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
import { Download, MapPin, Calendar, Briefcase } from 'lucide-react'
import { SKILLS } from '@/lib/constants'

export default function AboutPage() {
  const t = useTranslations()

  const experience = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'Tech Corp',
      period: '2022 - Present',
      description:
        'Leading development of scalable web applications and mentoring junior developers.',
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      period: '2020 - 2022',
      description:
        'Built responsive user interfaces and improved application performance by 40%.',
    },
    {
      title: 'Junior Developer',
      company: 'Web Solutions Inc',
      period: '2019 - 2020',
      description:
        'Developed and maintained client websites using modern web technologies.',
    },
  ]

  return (
    <div className="container max-w-4xl space-y-12">
      {/* Hero Section */}
      <section className="space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          {t('about.title')}
        </h1>
        <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
          {t('about.bio')}
        </p>
      </section>

      {/* Bio Section */}
      <section className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <div className="prose prose-lg max-w-none">
              <p>
                I&apos;m a passionate full-stack developer with over 5 years of
                experience building modern web applications. I specialize in
                React, Next.js, TypeScript, and Node.js, with a strong focus on
                creating user-friendly interfaces and solving complex problems
                with clean, efficient code.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new
                technologies, contributing to open-source projects, or sharing
                knowledge through blog posts and technical talks. I believe in
                continuous learning and staying up-to-date with the latest
                industry trends.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Skills Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">
          {t('about.skills.title')}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                {t('about.skills.languages')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {SKILLS.languages.map((skill) => (
                  <Badge key={skill} variant="default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                {t('about.skills.frameworks')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {SKILLS.frameworks.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                {t('about.skills.tools')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {SKILLS.tools.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">
          {t('about.timeline.title')}
        </h2>
        <div className="space-y-6">
          {experience.map((job, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-muted-foreground">{job.company}</p>
                    <p className="text-sm text-muted-foreground">
                      {job.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {job.period}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Info */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">
                    San Francisco, CA
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Availability</p>
                  <p className="text-sm text-muted-foreground">
                    Open to new opportunities
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="text-center">
          <Button size="lg" asChild>
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              {t('about.downloadCV')}
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
