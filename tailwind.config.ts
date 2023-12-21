/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,vue}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.js',
		'./nuxt.config.js',
		'./app.vue',
		'./node_modules/preline/preline.js',
	],
	theme: {
		extend: {
			fontFamily: {
				ubuntu: ['Ubuntu', 'sans-serif'],
				nunito: ['Nunito', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif'],
			},
		},
	},
	plugins: [
		require('preline/plugin'),
		require('tailwind-scrollbar'),
		require('@tailwindcss/forms'),
	],
	variants: {
		scrollbar: ['rounded'],
	},
};