import { defineProject } from "../lib/utils/define-project";
import { Skill } from "../lib/utils/skills";
import type { IProjectSkills } from "../types/projects.types";

const SKILLS: IProjectSkills = [Skill.Go, Skill.Raylib, Skill.Raygui];

export default defineProject("go-chat", {
	title: "Go RayGUI TCP chat",
	repoHref: "https://github.com/yet3/tcp-raygui-chat",
	imageFit: "contain",
	imagePosition: "5% 0%",
	skills: SKILLS,
	contentBlocks: ["A simple gui tcp chat made in go using raylib and raygui."],
});
