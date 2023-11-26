// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      script: [
        {
          src: '/preline/dist/preline.js',
          body: true,
          defer: true
        }
      ]
    }
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    }
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    { 
      ssr: false, 
      src: "~/plugins/preAppStart.js", 
      mode: "client" 
    },
  ],
  css: ['~/assets/css/tailwind.css'],
  modules: [
    '@pinia/nuxt',
    'nuxt-icon',
    '@vueuse/nuxt',
  ],
  pinia: {
    autoImports: [
      'defineStore', 'storeToRefs'
    ]
  },
  runtimeConfig: {
    jwtSecretKey: process.env.MYWL_JWT_SECRET
  },
})
