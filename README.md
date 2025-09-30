# sthefanoc.com - Portfolio Website

A modern, production-ready portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features internationalization, MDX content management, and comprehensive SEO optimization.

## 🚀 Features

- **Next.js 14** with App Router and TypeScript strict mode
- **Internationalization** (i18n) with next-intl (English, Spanish, Portuguese)
- **Content Management** with Contentlayer and MDX
- **Styling** with Tailwind CSS and shadcn/ui components
- **SEO Optimized** with dynamic metadata, OG images, and sitemap
- **Blog System** with syntax highlighting and reading time
- **Projects Showcase** with filtering and pagination
- **Contact Form** with spam protection (honeypot)
- **Dark/Light Theme** support
- **Responsive Design** for all devices
- **Performance Optimized** with Lighthouse scores ≥ 90

## 🛠️ Tech Stack

### Core

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components

### Content & i18n

- **Contentlayer** - Content management with MDX
- **next-intl** - Internationalization
- **MDX** - Markdown with JSX components

### SEO & Performance

- **next-sitemap** - Automatic sitemap generation
- **@vercel/og** - Dynamic OG image generation
- **next-themes** - Theme management

### Development

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Vitest** - Testing framework
- **React Testing Library** - Component testing

## 📁 Project Structure

```
/
├── app/                          # Next.js App Router
│   ├── (public)/[locale]/       # Localized routes
│   │   ├── (pages)/            # Page components
│   │   │   ├── page.tsx        # Home page
│   │   │   ├── about/          # About page
│   │   │   ├── projects/       # Projects pages
│   │   │   ├── blog/           # Blog pages
│   │   │   └── contact/        # Contact page
│   │   └── layout.tsx          # Locale layout
│   ├── api/og/                 # OG image API
│   ├── globals.css             # Global styles
│   └── layout.tsx              # Root layout
├── components/                  # Reusable components
│   ├── ui/                     # shadcn/ui components
│   ├── Header.tsx              # Site header
│   ├── Footer.tsx              # Site footer
│   ├── ThemeToggle.tsx         # Theme switcher
│   └── LanguageSwitcher.tsx    # Language switcher
├── content/                    # MDX content
│   ├── blog/                   # Blog posts
│   │   ├── en/                # English posts
│   │   ├── es/                # Spanish posts
│   │   └── pt/                # Portuguese posts
│   └── projects/               # Project showcases
│       ├── en/                # English projects
│       ├── es/                # Spanish projects
│       └── pt/                # Portuguese projects
├── lib/                        # Utility functions
│   ├── i18n.ts                # i18n configuration
│   ├── utils.ts               # Utility functions
│   └── constants.ts           # App constants
├── messages/                   # Translation files
│   ├── en.json                # English translations
│   ├── es.json                # Spanish translations
│   └── pt.json                # Portuguese translations
├── styles/                     # Additional styles
├── tests/                      # Test files
└── contentlayer.config.ts      # Contentlayer config
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/sthefanoc/sthefanoc-v2.git
   cd sthefanoc-v2
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp env.example .env.local
   ```

   Update the environment variables in `.env.local`:

   ```env
   NEXT_PUBLIC_SITE_URL=https://sthefanoc.com
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
   ```

4. **Run the development server**

   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Content Authoring

### Blog Posts

Create new blog posts in the `content/blog/{locale}/` directory:

```mdx
---
title: 'Your Post Title'
slug: 'your-post-slug'
date: '2024-03-15'
updated: '2024-03-16' # Optional
summary: 'Brief description of your post'
tags: ['React', 'Next.js', 'TypeScript']
cover: '/images/your-cover.jpg' # Optional
draft: false
locale: 'en'
---

# Your Post Title

Your content here...
```

### Projects

Create new projects in the `content/projects/{locale}/` directory:

```mdx
---
title: 'Project Name'
slug: 'project-slug'
summary: 'Brief project description'
role: 'Your Role'
company: 'Company Name'
stack: ['Next.js', 'TypeScript', 'Tailwind']
links:
  repo: 'https://github.com/username/repo'
  demo: 'https://demo-url.com'
cover: '/images/project-cover.jpg'
images: ['/images/project-1.jpg', '/images/project-2.jpg']
dateStart: '2024-01-01'
dateEnd: '2024-03-01' # Optional
impact: 'Project impact description'
metrics: ['Metric 1', 'Metric 2']
draft: false
locale: 'en'
---

# Project Name

Your project description...
```

## 🌍 Internationalization

The site supports three languages:

- **English** (`/en`) - Default
- **Spanish** (`/es`)
- **Portuguese** (`/pt`)

### Adding New Translations

1. Add new keys to `messages/{locale}.json`
2. Use translations in components:

   ```tsx
   import { useTranslations } from 'next-intl'

   const t = useTranslations()
   return <h1>{t('home.title')}</h1>
   ```

### Adding New Locales

1. Add locale to `lib/i18n.ts`
2. Create message file in `messages/`
3. Update middleware configuration
4. Add content in new locale directories

## 🎨 Customization

### Styling

- **Global styles**: `app/globals.css`
- **Component styles**: Use Tailwind classes
- **Theme**: Configure in `tailwind.config.ts`

### Components

- **UI components**: `components/ui/` (shadcn/ui)
- **Custom components**: `components/`
- **Add new components**: Follow existing patterns

### Configuration

- **Site config**: `lib/constants.ts`
- **i18n config**: `lib/i18n.ts`
- **Contentlayer**: `contentlayer.config.ts`

## 🧪 Testing

### Run Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:ui

# Run tests with coverage
pnpm test:coverage
```

### Test Structure

- **Component tests**: `tests/components/`
- **Page tests**: `tests/pages/`
- **Utility tests**: `tests/lib/`

## 📦 Build & Deployment

### Build for Production

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

### Deploy to Vercel

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** - Vercel will automatically build and deploy

### Environment Variables

Required environment variables:

- `NEXT_PUBLIC_SITE_URL` - Your site URL
- `NEXT_PUBLIC_FORMSPREE_ENDPOINT` - Contact form endpoint
- `NEXT_PUBLIC_ANALYTICS_ID` - Analytics ID (optional)

## 🔧 Development Scripts

```bash
# Development
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint errors
pnpm format           # Format code with Prettier
pnpm format:check     # Check code formatting

# Testing
pnpm test             # Run tests
pnpm test:ui          # Run tests with UI
pnpm test:coverage    # Run tests with coverage

# Content
pnpm contentlayer     # Build content layer

# Deployment
pnpm postbuild        # Generate sitemap
```

## 📊 Performance

The site is optimized for performance with:

- **Lighthouse Performance**: ≥ 90
- **Lighthouse Best Practices**: ≥ 90
- **Lighthouse SEO**: ≥ 90
- **Core Web Vitals**: All green

### Performance Features

- Image optimization with Next.js Image
- Code splitting and lazy loading
- Static site generation where possible
- CDN integration
- Caching strategies

## 🔍 SEO Features

- **Dynamic metadata** for all pages
- **Open Graph** and Twitter Card support
- **Dynamic OG images** with @vercel/og
- **XML sitemap** with next-sitemap
- **Robots.txt** configuration
- **Structured data** for better search results

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Contentlayer](https://www.contentlayer.dev/) - Content management
- [next-intl](https://next-intl-docs.vercel.app/) - Internationalization

## 📞 Contact

- **Website**: [sthefanoc.com](https://sthefanoc.com)
- **Email**: hello@sthefanoc.com
- **GitHub**: [@sthefanoc](https://github.com/sthefanoc)
- **LinkedIn**: [Sthefano C.](https://linkedin.com/in/sthefanoc)

---

Built with ❤️ by [Sthefano C.](https://sthefanoc.com)
