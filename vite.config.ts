import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import { defineConfig } from "vite";
import { handleProjectsData } from "./scripts/transformers/handle-projects-data";

export default defineConfig({
	plugins: [sveltekit(), tailwindcss(), handleProjectsData()],
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
		cssMinify: "lightningcss"
	}
});
