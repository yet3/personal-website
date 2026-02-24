import { Skill } from "#src/skills";
import { defineProject } from "#projects/define-project";
import type { IProjectSkills } from "#projects/projects.types";
import { getProjectImages } from "#projects/get-project-images";

const SKILLS: IProjectSkills = [
  Skill.TypesSript,
  Skill.React,
  Skill.Html,
  Skill.Scss,
  Skill.TailwindCss,
  Skill.Zustand,
  Skill.Rsbuild,
  Skill.Biome,
];

export default defineProject("char-typer", {
  title: "Char typer",
  appHref: "https://char-typer.vercel.app/",
  repoHref: "https://github.com/yet3/char-typer",
  showInFooter: true,
  skills: SKILLS,
  images: await getProjectImages(__dirname),
  contentBlocks: [
    "Yet another app to train your typing skills, with focus on typing characters instead of words.",
  ],
});
