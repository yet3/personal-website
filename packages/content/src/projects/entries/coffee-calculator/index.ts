import { Skill } from "#src/skills";
import { defineProject } from "#projects/define-project";
import type { IProjectSkills } from "#projects/projects.types";
import { getProjectImages } from "#projects/get-project-images";

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
  images: await getProjectImages(__dirname),
  contentBlocks: [
    "Simple react-native app for calculating the coffee-water ratio, as well as collecting stats on how much coffee you drink. Made with Expo and a passion for caffeine.",
  ],
});
