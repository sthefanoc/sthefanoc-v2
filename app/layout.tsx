import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Sthefano C. - Full-Stack Developer',
    template: '%s | Sthefano C.',
  },
  description:
    'Full-stack developer and designer building modern web applications with a focus on user experience and performance.',
  keywords: [
    'web development',
    'full-stack',
    'react',
    'next.js',
    'typescript',
    'portfolio',
  ],
  authors: [{ name: 'Sthefano C.' }],
  creator: 'Sthefano C.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sthefanoc.com',
    siteName: 'Sthefano C.',
    title: 'Sthefano C. - Full-Stack Developer',
    description:
      'Full-stack developer and designer building modern web applications with a focus on user experience and performance.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sthefano C. - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sthefano C. - Full-Stack Developer',
    description:
      'Full-stack developer and designer building modern web applications with a focus on user experience and performance.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
