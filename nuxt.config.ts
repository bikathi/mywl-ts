// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      script: [
        
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
    "~/plugins/preline.client.ts"
  ],
  css: ['~/assets/css/tailwind.css'],
  modules: [
    '@pinia/nuxt',
    'nuxt-icon',
    '@vueuse/nuxt',
    '@samk-dev/nuxt-vcalendar',
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
