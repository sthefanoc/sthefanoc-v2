/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://sthefanoc.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*'],
  additionalPaths: async (config) => {
    const result = []

    // Add localized paths
    const locales = ['en', 'es', 'pt']
    const pages = ['', '/about', '/projects', '/blog', '/contact']

    for (const locale of locales) {
      for (const page of pages) {
        result.push({
          loc: `/${locale}${page}`,
          changefreq: 'daily',
          priority: page === '' ? 1.0 : 0.8,
          lastmod: new Date().toISOString(),
          alternateRefs: locales.map((loc) => ({
            href: `https://sthefanoc.com/${loc}${page}`,
            hreflang: loc,
          })),
        })
      }
    }

    return result
  },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}
