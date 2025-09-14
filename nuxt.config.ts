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
      titleTemplate: (t?: string) => {
        const site = 'TG元宝'
        const sub = '海外掘金一站式 TG应用平台'
        return t && t !== site ? `${t} - ${site} · ${sub}` : `${site} · ${sub}`
      },
      htmlAttrs: { lang: 'zh-CN' }
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
