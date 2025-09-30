import { render, screen } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'
import HomePage from '@/app/(public)/[locale]/(pages)/page'

const messages = {
  'home.title': 'Sthefano C.',
  'home.subtitle': 'Full-Stack Developer & Designer',
  'home.description':
    'I build modern web applications with a focus on user experience and performance.',
  'home.cta': 'View My Work',
  'home.featuredProjects': 'Featured Projects',
  'home.latestPosts': 'Latest Posts',
  'home.viewAll': 'View All',
  'common.readMore': 'Read more',
}

const renderWithIntl = (component: React.ReactElement) => {
  return render(
    <NextIntlClientProvider messages={messages} locale="en">
      {component}
    </NextIntlClientProvider>
  )
}

describe('HomePage', () => {
  it('renders the main heading', () => {
    renderWithIntl(<HomePage />)
    expect(screen.getByText('Sthefano C.')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    renderWithIntl(<HomePage />)
    expect(
      screen.getByText('Full-Stack Developer & Designer')
    ).toBeInTheDocument()
  })

  it('renders the description', () => {
    renderWithIntl(<HomePage />)
    expect(
      screen.getByText(/I build modern web applications/)
    ).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    renderWithIntl(<HomePage />)
    expect(screen.getByText('View My Work')).toBeInTheDocument()
  })

  it('renders featured projects section', () => {
    renderWithIntl(<HomePage />)
    expect(screen.getByText('Featured Projects')).toBeInTheDocument()
  })

  it('renders latest posts section', () => {
    renderWithIntl(<HomePage />)
    expect(screen.getByText('Latest Posts')).toBeInTheDocument()
  })

  it('renders project cards', () => {
    renderWithIntl(<HomePage />)
    expect(screen.getByText('E-commerce Platform')).toBeInTheDocument()
    expect(screen.getByText('AI Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Mobile Banking App')).toBeInTheDocument()
  })

  it('renders blog post cards', () => {
    renderWithIntl(<HomePage />)
    expect(
      screen.getByText('Building Scalable React Applications')
    ).toBeInTheDocument()
    expect(
      screen.getByText('The Future of Web Development')
    ).toBeInTheDocument()
    expect(screen.getByText('TypeScript Best Practices')).toBeInTheDocument()
  })
})
