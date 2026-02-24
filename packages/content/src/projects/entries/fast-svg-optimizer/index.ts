import { Skill } from "#src/skills";
import { defineProject } from "#projects/define-project";
import type { IProjectSkills } from "#projects/projects.types";
import { getProjectImages } from "#projects/get-project-images";

const SKILLS: IProjectSkills = [
  Skill.TypesSript,
  Skill.Solidjs,
  Skill.Svgo,
  Skill.Html,
  Skill.TailwindCss,
  Skill.Vite,
  Skill.Biome,
  Skill.Mixpanel,
];

export default defineProject("fast-svg-optimizer", {
  title: "Fast SVG Optimizer",
  appHref: "https://fast-svg-optimizer-git-main-yet3s-projects.vercel.app/",
  showInFooter: true,
  showInCv: true,
  skills: SKILLS,
  images: await getProjectImages(__dirname),
  contentBlocks: [
    "A tool for optimizing SVGs. Process multiple SVGs at once, adjust SVGO settings, and batch edit dimensions for all SVGs.",
  ],
});
