'use client'

import { useTranslations } from 'next-intl'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Mail,
  MapPin,
  Calendar,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const t = useTranslations()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '', // Anti-spam field
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Check honeypot
    if (formData.honeypot) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // In a real app, you would send this to your API endpoint
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '', honeypot: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="container max-w-4xl space-y-12">
      {/* Header */}
      <section className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          {t('contact.title')}
        </h1>
        <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
          {t('contact.description')}
        </p>
      </section>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Contact Form */}
        <section className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>
                I&apos;ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium"
                    >
                      {t('contact.form.name')}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium"
                    >
                      {t('contact.form.email')}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium"
                    >
                      {t('contact.form.message')}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                    />
                  </div>
                </div>

                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">{t('contact.form.success')}</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-600">
                    <AlertCircle className="h-4 w-4" />
                    <span className="text-sm">{t('contact.form.error')}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-b-2 border-white" />
                      {t('contact.form.sending')}
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      {t('contact.form.submit')}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Contact Info */}
        <section className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Get in touch</CardTitle>
              <CardDescription>
                Prefer other ways to reach me? Here are some alternatives.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{t('contact.info.email')}</p>
                    <p className="text-sm text-muted-foreground">
                      hello@sthefanoc.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{t('contact.info.location')}</p>
                    <p className="text-sm text-muted-foreground">
                      San Francisco, CA
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">
                      {t('contact.info.availability')}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Available for new projects
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="mb-3 font-medium">Response Time</h3>
                <p className="text-sm text-muted-foreground">
                  I typically respond to messages within 24 hours. For urgent
                  matters, please mention it in your message.
                </p>
              </div>

              <div className="border-t pt-4">
                <h3 className="mb-3 font-medium">What I Can Help With</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Web application development</li>
                  <li>• Technical consulting</li>
                  <li>• Code reviews and mentoring</li>
                  <li>• Open source collaboration</li>
                  <li>• Speaking opportunities</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
