import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales } from '@/lib/i18n'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}) {
  const { locale } = params

  if (!locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages({ locale })
  const t = (key: string) => messages[key as keyof typeof messages] as string

  return {
    title: {
      default: t('home.title'),
      template: `%s | ${t('home.title')}`,
    },
    description: t('home.description'),
    alternates: {
      canonical: `https://sthefanoc.com/${locale}`,
      languages: {
        en: 'https://sthefanoc.com/en',
        es: 'https://sthefanoc.com/es',
        pt: 'https://sthefanoc.com/pt',
      },
    },
  }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound()

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale })

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
