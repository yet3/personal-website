import type { PluginOption } from "vite";
import { loadExperiences } from "./load-experiences";
import { loadProjects } from "./load-projects";
import { optimizeProjectsImages } from "./optimize-projects-images";

export const handleProjectsAndExperiences = (): PluginOption => {
	return {
		name: "handle-projects-and-experiences",
		async generateBundle() {
			if (this.environment.name === "ssr") {
				return;
			}

			await optimizeProjectsImages(this.emitFile);
		},
		async transform(_, fileName) {
			if (this.environment.name === "ssr") {
				return;
			}

			if (fileName.includes("app-data.svelte.ts")) {
				try {
					const [experiences, projects] = await Promise.all([loadExperiences(), loadProjects()]);

					const data = JSON.stringify({
						experiences,
						projects
					});

					return {
						code: `export const APP_DATA=${data};`
					};
				} catch (e) {
					console.log(e);
				}
			}
		}
	};
};
