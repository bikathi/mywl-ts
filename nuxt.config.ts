export default defineNuxtConfig({
	devtools: { enabled: true },
	devServer: {
		port: 10000,
	},
	app: {
		head: {
			script: [],
		},
	},
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	plugins: [
		'~/plugins/preline.client.ts',
		'~/plugins/ofetch-interceptor.client.ts',
	],
	css: ['~/assets/css/tailwind.css'],
	modules: [
		'@pinia/nuxt',
		'nuxt-icon',
		'@vueuse/nuxt',
		'@samk-dev/nuxt-vcalendar',
		'nuxt-tiptap-editor',
	],
	tiptap: {
		prefix: 'Tiptap', //prefix for Tiptap imports, composables not included
	},
	pinia: {
		autoImports: ['defineStore', 'storeToRefs'],
	},

	routeRules: {
		'/api/**': {
			proxy: {
				to: 'http://127.0.0.1:8080/api/**',
			},
		},
	},
});
