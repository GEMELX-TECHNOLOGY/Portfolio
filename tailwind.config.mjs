/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
		  utilities: {
			'.scrollbar-hide': {
			  '-ms-overflow-style': 'none', // IE and Edge
			  'scrollbar-width': 'none', // Firefox
			},
			'.scrollbar-hide::-webkit-scrollbar': {
			  display: 'none', // Chrome, Safari, and Opera
			},
		  },
		},
	  },
	plugins: [],
}
