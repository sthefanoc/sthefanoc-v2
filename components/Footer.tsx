import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export default function Footer() {
  const t = useTranslations()
  const locale = useLocale()

  const socialLinks = [
    { name: 'GitHub', href: SITE_CONFIG.links.github, icon: Github },
    { name: 'LinkedIn', href: SITE_CONFIG.links.linkedin, icon: Linkedin },
    { name: 'Twitter', href: SITE_CONFIG.links.twitter, icon: Twitter },
    { name: 'Email', href: SITE_CONFIG.links.email, icon: Mail },
  ]

  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href={`/${locale}`} className="text-xl font-bold">
              sthefanoc
            </Link>
            <p className="text-sm text-muted-foreground">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href={`/${locale}/about` as any}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t('navigation.about')}
              </Link>
              <Link
                href={`/${locale}/projects` as any}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t('navigation.projects')}
              </Link>
              <Link
                href={`/${locale}/blog` as any}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t('navigation.blog')}
              </Link>
              <Link
                href={`/${locale}/contact` as any}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t('navigation.contact')}
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Get notified about new posts and projects.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
              <button className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground transition-colors hover:bg-primary/90">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-muted-foreground">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
