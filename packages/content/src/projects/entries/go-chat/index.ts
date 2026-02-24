import { Skill } from "#src/skills";
import { defineProject } from "#projects/define-project";
import type { IProjectSkills } from "#projects/projects.types";
import { getProjectImages } from "#projects/get-project-images";

const SKILLS: IProjectSkills = [Skill.Go, Skill.Raylib, Skill.Raygui];

export default defineProject("go-chat", {
  title: "Go RayGUI TCP chat",
  repoHref: "https://github.com/yet3/tcp-raygui-chat",
  imageFit: "contain",
  imagePosition: "5% 0%",
  skills: SKILLS,
  images: await getProjectImages(__dirname),
  contentBlocks: ["A simple gui tcp chat made in go using raylib and raygui."],
});
