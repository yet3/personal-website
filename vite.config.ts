import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import { defineConfig } from "vite";
import { handleProjectsImages } from "./scripts/handle-projects-images";

export default defineConfig({
	plugins: [sveltekit(), tailwindcss(), handleProjectsImages()],
	server: {
		fs: {
			allow: ["static", "cv-output"]
		}
	},
	css: {
		transformer: "lightningcss",
		lightningcss: {
			targets: browserslistToTargets(browserslist(">= 0.25%"))
		}
	},
	build: {
		cssMinify: "lightningcss",
	}
});
