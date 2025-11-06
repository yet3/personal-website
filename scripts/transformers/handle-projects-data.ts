import type { PluginOption } from "vite";
import { generateProjectsData } from "./generate-projects-data";
import { optimizeProjectsImages } from "./optimize-projects-images";

export const handleProjectsData = (): PluginOption => {
	return {
		name: "handle-projects-data",
		async generateBundle() {
			if (this.environment.name === "ssr") {
				return;
			}

			await optimizeProjectsImages(this.emitFile);
		},
		async transform(_, fileName) {
			if (fileName.includes("app-data.svelte.ts")) {
				try {
					const projects = await generateProjectsData();

					const data = JSON.stringify({
						PROJECTS: projects
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
