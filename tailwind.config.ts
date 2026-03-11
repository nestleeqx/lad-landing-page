import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				cream: {
					DEFAULT: '#F5F0E8',
					dark: '#EDE5D5'
				},
				green: {
					DEFAULT: '#1E3A2F',
					mid: '#2D5240',
					light: '#4A7A5E'
				},
				gold: '#C8A96E',
				walnut: '#2A2016',
				'text-muted': '#6B5E4A'
			},
			fontFamily: {
				serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
				display: ['var(--font-unbounded)', 'sans-serif'],
				sans: ['var(--font-inter)', 'sans-serif']
			}
		}
	},
	plugins: []
}

export default config
