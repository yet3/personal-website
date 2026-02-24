import { Skill } from "#src/skills";
import { defineProject } from "#projects/define-project";
import type { IProjectSkills } from "#projects/projects.types";
import { getProjectImages } from "#projects/get-project-images";

const SKILLS: IProjectSkills = [
  Skill.TypesSript,
  Skill.SolidStart,
  Skill.Solidjs,
  Skill.Html,
  Skill.Css,
  Skill.UnoCss,
  Skill.Biome,
  Skill.Mixpanel,
];

export default defineProject("web-dev-tools", {
  title: "WebDevTools",
  appHref: "https://web-dev-tools-alpha.vercel.app/",
  showInFooter: true,
  showInCv: true,
  skills: SKILLS,
  images: await getProjectImages(__dirname),
  contentBlocks: ["A collection of useful tools for developers."],
});
