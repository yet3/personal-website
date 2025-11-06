import { defineProject } from "../lib/utils/define-project";
import { Skill } from "../lib/utils/skills";
import type { IProjectSkills } from "../types/projects.types";

const SKILLS: IProjectSkills = [
	Skill.TypesSript,
	Skill.Solidjs,
	Skill.Svgo,
	Skill.Html,
	Skill.TailwindCss,
	Skill.Vite,
	Skill.Biome,
	Skill.Mixpanel
];

export default defineProject("fast-svg-optimizer", {
	title: "Fast SVG Optimizer",
	appHref: "https://www.fast-svg-optimizer.com/",
	showInFooter: true,
	showInCv: true,
	skills: SKILLS,
	contentBlocks: [
		"A tool for optimizing SVGs using SVGO. Process multiple SVGs at once, preview the before-and-after, adjust SVGO settings, and batch edit dimensions for all SVGs."
	]
});
