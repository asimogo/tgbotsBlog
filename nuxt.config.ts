// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui'
  ],
  app: {
    // For GitHub Pages project sites, the base URL will be set via env
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      title: 'TG元宝',
      titleTemplate: '%s - 海外掘金一站式TG应用平台',
      htmlAttrs: { lang: 'zh-CN' },
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: (process.env.NUXT_APP_BASE_URL || '/') + 'favicon.ico'
        }
      ]
    }
  },
  // Auto-import components (Nuxt resolves ~/components to app/components in App Dir)
  components: [
    { path: '~/components', pathPrefix: false }
  ],
  css: ['~/assets/css/main.css'],
  ui: {
    prefix: 'Nuxt'
  }
})
