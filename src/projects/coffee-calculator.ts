import { defineProject } from "../lib/utils/define-project";
import { Skill } from "../lib/utils/skills";
import type { IProjectSkills } from "../types/projects.types";

const SKILLS: IProjectSkills = [
	Skill.TypesSript,
	Skill.ReactNative,
	Skill.Expo,
	Skill.Biome,
];

export default defineProject("coffee-calculator", {
	title: "Coffee calculator",
	repoHref: "https://github.com/yet3/coffee-calculator",
	skills: SKILLS,
	contentBlocks: [
		"Simple react-native app for calculating the coffee-water ratio, as well as collecting stats on how much coffee you drink. Made with Expo and a passion for caffeine.",
	],
});
