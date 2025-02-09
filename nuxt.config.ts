// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  future: {
    compatibilityVersion: 4,
  },

  srcDir: 'app',

  dir: {
    app: 'app'
  },

  experimental: {
    scanPageMeta: 'after-resolve',
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    normalizeComponentNames: false,
    spaLoadingTemplateLocation: 'within',
    defaults: {
      useAsyncData: {
        deep: true
      }
    }
  },

  features: {
    inlineStyles: true
  },
  
  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false
    }
  },

  modules: ['@nuxtjs/i18n', '@nuxt/image', '@nuxtjs/google-fonts'],

  i18n: {
    strategy: 'prefix_except_default',
    locales: [
      { code: 'uk', file: 'uk.json' },
      { code: 'en', file: 'en.json' }
    ],
    defaultLocale: 'uk',
    lazy: true,
  },

  googleFonts: {
    families: {
      Inter: [400, 500, 700],
    }
  }
})