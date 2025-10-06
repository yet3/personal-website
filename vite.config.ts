import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		sveltekit(),
		tailwindcss()
	],
	server: {
		fs: {
			allow: ["static"]
		}
	},
	css: {
		transformer: "lightningcss",
		lightningcss: {
			targets: browserslistToTargets(browserslist(">= 0.25%")),
		}
	},
	build: {
		cssMinify: "lightningcss"
	}
});
