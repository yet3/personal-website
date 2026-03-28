import { Skill } from "#src/skills";
import { defineProject } from "#projects/define-project";
import type { IProjectSkills } from "#projects/projects.types";
import { getProjectImages } from "#projects/get-project-images";

const SKILLS: IProjectSkills = [Skill.Rust];

export default defineProject("shortie", {
  title: "Shortie (Text expander)",
  repoHref: "https://github.com/yet3/shortie",
  showInCv: true,
  skills: SKILLS,
  images: await getProjectImages(__dirname),
  contentBlocks: ["A very simple text expander made in rust"],
});
