import { Skill } from "#src/skills";
import { defineProject } from "#projects/define-project";
import type { IProjectSkills } from "#projects/projects.types";
import { getProjectImages } from "#projects/get-project-images";

const SKILLS: IProjectSkills = [
  Skill.Figma,
  Skill.TypesSript,
  Skill.Solidjs,
  Skill.Turborepo,
  Skill.Html,
  Skill.Scss,
  Skill.TailwindCss,
  Skill.Biome,
  Skill.Vite,
  Skill.Vitest,
  Skill.Svgo,
  Skill.Prettier,
  Skill.Nodejs,
];

export default defineProject("figma-svg-to-react", {
  title: "SVG to React / Native / SolidJS",
  appHref:
    "https://www.figma.com/community/plugin/1139659790182545298/svg-to-react-native-solidjs",
  repoHref: "https://github.com/yet3/figma-svg-to-react",
  isPreviewProject: true,
  showInFooter: true,
  showInCv: true,
  skills: SKILLS,
  images: await getProjectImages(__dirname),
  contentBlocks: [
    "A Figma plugin that lets you easily optimize and transform multiple SVG files into JSX components.",
  ],
});
