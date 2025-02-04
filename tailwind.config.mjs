import fluid, { extract, screens, fontSize } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
	content: {
		files: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
		extract,
	},
	theme: {
		screens,
		fontSize,
		extend: {
			colors: {
				pink: {
					50: "#fff2f1",
					100: "#fee6e3",
					200: "#fdccc7",
					300: "#fcb3aa",
					400: "#fb998e",
					500: "#fa8072",
					600: "#c8665b",
					700: "#964d44",
					800: "#64332e",
					900: "#321a17",
				},
			},

			screens: {
				xs: "28.125rem",
			},
		},
	},
	plugins: [fluid],
};
