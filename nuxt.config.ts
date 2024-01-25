// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      tenor_key: process.env.TENOR_API,
    },
  },
  modules: [
    '@vueuse/motion/nuxt',
    'nuxt-headlessui',
    '@vueuse/nuxt',
    'dayjs-nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@pinia/nuxt',
    '@nuxtjs/device',
    '@hypernym/nuxt-gsap',
    '@nuxt/image',
  ],
  image: {
    provider: 'cloudinary',
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/doig4w6cm/image/fetch/',
    },
    quality: 80,
    placeholder: 10,
    format: ['webp'],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536,
    },
  },
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/locomotive.css',
    '~/assets/css/style.scss',
    '~/assets/css/transition.scss',
    '~/assets/css/fonts.scss',
  ],
  app: {
    rootId: 'app',
    layoutTransition: { name: 'page', mode: 'out-in' },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
      // onEnter: () => {
      //   ScrollTrigger.refresh()
      // }
    },
  },
  i18n: {
    strategy: 'no_prefix',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.yaml', dir: 'ltr', name: 'EN' },
      { code: 'id', iso: 'id-ID', file: 'id.yaml', dir: 'ltr', name: 'ID' },
    ],
    langDir: 'locales',
    lazy: true,
    defaultLocale: 'en',
  },
  colorMode: {
    preference: 'dark',
    fallback: 'light',
    classSuffix: '',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: tag => ['dotlottie-player', 'lottie-player'].includes(tag),
    },
  },
  typescript: {
    shim: false,
    strict: true,
    tsConfig: {
      compilerOptions: {
        moduleResolution: 'bundler',
      },
    },
  },
  devtools: {
    timeline: {
      enabled: true,
    },
  },
  gsap: {
    composables: true,
    extraEases: {
      custom: true,
    },
    extraPlugins: {
      scrollTrigger: true,

    },
  },
  // build: {
  //   transpile: ['gsap']
  // }
})
