import { describe, it, expect } from 'vitest'
import { cn, formatDate, slugify, getInitials, truncateText } from '@/lib/utils'

describe('utils', () => {
  describe('cn', () => {
    it('merges class names correctly', () => {
      expect(cn('class1', 'class2')).toBe('class1 class2')
    })

    it('handles conditional classes', () => {
      expect(cn('base', true && 'conditional')).toBe('base conditional')
      expect(cn('base', false && 'conditional')).toBe('base')
    })
  })

  describe('formatDate', () => {
    it('formats date correctly', () => {
      const date = '2024-03-15'
      expect(formatDate(date)).toBe('March 15, 2024')
    })

    it('formats date with custom locale', () => {
      const date = '2024-03-15'
      expect(formatDate(date, 'es')).toBe('15 de marzo de 2024')
    })
  })

  describe('slugify', () => {
    it('converts text to slug', () => {
      expect(slugify('Hello World!')).toBe('hello-world')
      expect(slugify('Test & Example')).toBe('test-example')
      expect(slugify('Multiple   Spaces')).toBe('multiple-spaces')
    })
  })

  describe('getInitials', () => {
    it('extracts initials from name', () => {
      expect(getInitials('John Doe')).toBe('JD')
      expect(getInitials('Jane Smith Wilson')).toBe('JS')
      expect(getInitials('A')).toBe('A')
    })
  })

  describe('truncateText', () => {
    it('truncates text correctly', () => {
      expect(truncateText('Short text', 20)).toBe('Short text')
      expect(
        truncateText('This is a very long text that should be truncated', 20)
      ).toBe('This is a very long...')
    })
  })
})
