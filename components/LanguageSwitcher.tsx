'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react'
import { LOCALES } from '@/lib/constants'

const localeNames = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
} as const

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const handleLocaleChange = (newLocale: string) => {
    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'
    router.push(`/${newLocale}${pathWithoutLocale}` as any)
  }

  return (
    <div className="group relative">
      <Button variant="ghost" size="sm" className="gap-2">
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">
          {localeNames[locale as keyof typeof localeNames]}
        </span>
        <span className="sm:hidden">{locale.toUpperCase()}</span>
      </Button>

      <div className="invisible absolute right-0 top-full z-50 mt-2 w-32 rounded-md border bg-popover opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
        <div className="py-1">
          {LOCALES.map((loc) => (
            <button
              key={loc}
              onClick={() => handleLocaleChange(loc)}
              className={`w-full px-3 py-2 text-left text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${
                locale === loc ? 'bg-accent text-accent-foreground' : ''
              }`}
            >
              {localeNames[loc as keyof typeof localeNames]}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
