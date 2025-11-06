import { defineProject } from "../lib/utils/define-project";
import { Skill } from "../lib/utils/skills";
import type { IProjectSkills } from "../types/projects.types";

const SKILLS: IProjectSkills = [
	Skill.TypesSript,
	Skill.React,
	Skill.Html,
	Skill.Css,
	Skill.TailwindCss,
	Skill.Zustand,
	Skill.Biome,
	Skill.Rsbuild
];

export default defineProject("cyberpunk-breach-protocol", {
	title: "Cyberpunk breach protocol",
	appHref: "https://www.cyberpunk-breach-protocol.com/",
	repoHref: "https://github.com/yet3/cyberpunk2077-breach-protocol",
	showInFooter: true,
	showInCv: true,
	skills: SKILLS,
	contentBlocks: [
		'A fan recreation of the hacking mini-game "Breach Protocol" from Cyberpunk 2077.'
	]
});
