import { Skill } from "#src/skills";
import { defineProject } from "#projects/define-project";
import type { IProjectSkills } from "#src/projects/projects.types";
import { getProjectImages } from "#projects/get-project-images";

const SKILLS: IProjectSkills = [
  Skill.TypesSript,
  Skill.React,
  Skill.Html,
  Skill.Css,
  Skill.TailwindCss,
  Skill.Zustand,
  Skill.Biome,
  Skill.Rsbuild,
];

export default defineProject("cyberpunk-breach-protocol", {
  title: "Cyberpunk breach protocol",
  appHref:
    "https://cyberpunk2077-breach-protocol-git-main-yet3s-projects.vercel.app/",
  repoHref: "https://github.com/yet3/cyberpunk2077-breach-protocol",
  isPreviewProject: true,
  showInFooter: true,
  showInCv: true,
  skills: SKILLS,
  images: await getProjectImages(__dirname),
  contentBlocks: [
    'A fan recreation of the hacking mini-game "Breach Protocol" from Cyberpunk 2077.',
  ],
});

