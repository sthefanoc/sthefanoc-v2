'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ThemeToggle'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { NAVIGATION } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function Header() {
  const t = useTranslations()
  const locale = useLocale()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center space-x-2">
          <span className="text-xl font-bold">sthefanoc</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 md:flex">
          {NAVIGATION.map((item) => (
            <Link
              key={item.name}
              href={`/${locale}${item.href}` as any}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {t(item.name)}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center space-x-4 md:flex">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t bg-background md:hidden">
          <div className="container space-y-4 py-4">
            <nav className="flex flex-col space-y-4">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  href={`/${locale}${item.href}` as any}
                  className="text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.name)}
                </Link>
              ))}
            </nav>
            <div className="flex items-center justify-between border-t pt-4">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
