import { defineProject } from "../lib/utils/define-project";
import { Skill } from "../lib/utils/skills";
import type { IProjectSkills } from "../types/projects.types";

const SKILLS: IProjectSkills = [
	Skill.TypesSript,
	Skill.SolidStart,
	Skill.Solidjs,
	Skill.Html,
	Skill.Css,
	Skill.UnoCss,
	Skill.Biome,
	Skill.Mixpanel,
];

export default defineProject("web-dev-tools", {
	title: "WebDevTools",
	appHref: "https://web-dev-tools-alpha.vercel.app/",
	showInFooter: true,
	skills: SKILLS,
	contentBlocks: [
		"A collection of useful tools for developers (in-development).",
	],
});
