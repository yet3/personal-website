import { defineProject } from "../lib/utils/define-project";
import { Skill } from "../lib/utils/skills";
import type { IProjectSkills } from "../types/projects.types";

const SKILLS: IProjectSkills = [
	Skill.TypesSript,
	Skill.React,
	Skill.Html,
	Skill.Scss,
	Skill.TailwindCss,
	Skill.Zustand,
	Skill.Rsbuild,
	Skill.Biome
];

export default defineProject("char-typer", {
	title: "Char typer",
	appHref: "https://char-typer.vercel.app/",
	repoHref: "https://github.com/yet3/char-typer",
	showInFooter: true,
	showInCv: true,
	skills: SKILLS,
	contentBlocks: [
		"Yet another app to train your typing skills, with focus on typing characters instead of words."
	]
});
