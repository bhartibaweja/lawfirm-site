export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: true,
  routeRules: {
     '/': { static: true },
     '/#about': { static: true },
     '/#services': { static: true },
     '/#contact': { static: true },
     '/blog/**': { static: true }, // pre-render blog slugs
   },
  devtools: { enabled: false }, // disable in production

  app: {
    head: {
      title: 'Law Firm | Trusted Legal Experts',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'A modern law firm providing legal services across civil, criminal, corporate, family, and IP laws.'
        },
        { name: 'author', content: 'Vyomini Baweja' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'Law Firm | Trusted Legal Experts' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/images/logo.png' },
        { property: 'og:site_name', content: 'Baweja Law Firm' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Baweja Law Firm' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },

  css: ['@/assets/css/tailwind.css'],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    families: {
      'Playfair+Display': true,
      Inter: [400, 500, 600, 700]
    },
    display: 'swap'
  },

  runtimeConfig: {
    public: {
      sanityToken: process.env.SANITY_TOKEN
    }
  },

  image: {
    domains: ['cdn.sanity.io'],
    dir: 'public'
  },

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
      }
    }
  }
})
