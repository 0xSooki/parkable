/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				secondary: {
					DEFAULT: '#ED5564',
				},
				accent: {
					DEFAULT: '#20408a',
				},
				'card-bg': '#37BCF8',
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['night'],
	},
}
