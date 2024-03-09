import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./layouts/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}',
		'./pages/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}',
		'./components/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [
		typography,
	],
}
