/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts,md}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['IBM Plex Mono', 'monospace'],
				sans: ['Inter', 'sans-serif']
			},
			colors: {
				'brand-black': '#050505',
				'cyber-green': {
					DEFAULT: '#4ade80',
					light: '#86efac',
					dark: '#22c55e'
				},
				'accent-white': '#e5e5e5',
				'line-white': '#f5f5f5',
				'line-gray': '#404040'
			},
			transitionProperty: {
				'opacity-transform': 'opacity, transform'
			},
			transitionDuration: {
				600: '600ms'
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	darkMode: 'class',
	daisyui: {
		themes: [
			{
				dark: {
					...require('daisyui/src/theming/themes')['dark'],
					'base-content': '#FAF9F6',
					'base-100': '#050505',
					primary: '#4ade80'
				},
				light: {
					...require('daisyui/src/theming/themes')['light'],
					primary: '#4ade80'
				}
			}
		]
	}
};
