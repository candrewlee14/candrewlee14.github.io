module.exports = {
	separator: '_',
	darkMode: 'class',
	purge: ['./src/**/*.html', './src/**/*.svelte'],
	content: [],
	theme: {
		extend: {
			colors: {
				"white": '#FCFCFC',
				"lightgray": "#D0D0D0",
			},
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
	]
};
