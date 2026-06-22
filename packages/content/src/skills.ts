export enum SkillCategory {
  Lang = "programming_language",
  "Lib" = "libs_and_frameworkds",
  "Tools" = "tools_and_platforms",
  "Database" = "database",
  "Exploring" = "exploring",
}

export enum CvSkillCategory {
  Lang = "language",
  Core = "Core",
  Other = "Other",
  Exploring = "exploring",
}

export interface ISkill {
  label: string;
  href?: string;
  category?: SkillCategory;
  cvCategory?: CvSkillCategory;
}

export const SKILLS: Record<string, ISkill> = Object.freeze({
  Polish: {
    label: "Polish",
    cvCategory: CvSkillCategory.Lang,
    category: SkillCategory.Lang,
  },
  English: {
    label: "English",
    cvCategory: CvSkillCategory.Lang,
    category: SkillCategory.Lang,
  },
  JavaScript: {
    label: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    category: SkillCategory.Lang,
  },
  TypesSript: {
    label: "TypeScript",
    href: "https://www.typescriptlang.org/",
    category: SkillCategory.Lang,
  },
  "JS/TS": {
    label: "JavaScript/TypeScript",
    cvCategory: CvSkillCategory.Core,
  },
  Css: {
    label: "CSS",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    category: SkillCategory.Lang,
  },
  Scss: {
    label: "SCSS",
    href: "https://sass-lang.com/",
    category: SkillCategory.Lang,
  },
  Html: {
    label: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    category: SkillCategory.Lang,
  },
  HtmlCss: {
    label: "HTML/CSS",
    cvCategory: CvSkillCategory.Core,
  },
  StyledComponents: {
    label: "Styled Components",
    href: "https://styled-components.com/",
    category: SkillCategory.Lib,
  },
  TailwindCss: {
    label: "TailwindCSS",
    href: "https://tailwindcss.com/",
    cvCategory: CvSkillCategory.Other,
    category: SkillCategory.Lib,
  },
  UnoCss: {
    label: "UnoCSS",
    href: "https://unocss.dev/",
    category: SkillCategory.Lib,
  },
  Go: {
    label: "Go",
    href: "https://go.dev/",
    cvCategory: CvSkillCategory.Exploring,
    category: SkillCategory.Exploring,
  },
  Rust: {
    label: "Rust",
    href: "https://rust-lang.org/",
    cvCategory: CvSkillCategory.Exploring,
    category: SkillCategory.Exploring,
  },
  React: {
    label: "React",
    href: "https://react.dev/",
    cvCategory: CvSkillCategory.Core,
    category: SkillCategory.Lib,
  },
  ReactNative: {
    label: "React Native",
    href: "https://reactnative.dev/",
    cvCategory: CvSkillCategory.Core,
    category: SkillCategory.Lib,
  },
  Expo: {
    label: "Expo",
    href: "https://expo.dev/",
    cvCategory: CvSkillCategory.Other,
    category: SkillCategory.Tools,
  },
  Electron: {
    label: "Electron",
    href: "https://www.electronjs.org/",
    cvCategory: CvSkillCategory.Other,
    category: SkillCategory.Lib,
  },
  Solidjs: {
    label: "SolidJS",
    href: "https://www.solidjs.com/",
    cvCategory: CvSkillCategory.Other,
    category: SkillCategory.Lib,
  },
  Svelte: {
    label: "Svelte",
    href: "https://svelte.dev/",
    cvCategory: CvSkillCategory.Other,
    category: SkillCategory.Lib,
  },
  Astro: {
    label: "Astro",
    href: "https://astro.build/",
    cvCategory: CvSkillCategory.Other,
    category: SkillCategory.Lib,
  },
  Nextjs: {
    label: "Next.js",
    href: "https://nextjs.org/",
    cvCategory: CvSkillCategory.Core,
    category: SkillCategory.Lib,
  },
  SolidStart: {
    label: "SolidStart",
    href: "https://start.solidjs.com/",
    category: SkillCategory.Lib,
  },
  Vitest: {
    label: "Vitest",
    href: "https://vitest.dev/",
    cvCategory: CvSkillCategory.Other,
    category: SkillCategory.Tools,
  },
  Puppeteer: {
    label: "Puppeteer",
    href: "https://pptr.dev/",
    cvCategory: CvSkillCategory.Other,
    category: SkillCategory.Lib,
  },
  Nodejs: {
    label: "Node.js",
    href: "https://nodejs.org/en",
    cvCategory: CvSkillCategory.Core,
    category: SkillCategory.Tools,
  },
  Express: {
    label: "Express",
    href: "https://expressjs.com/",
    cvCategory: CvSkillCategory.Core,
    category: SkillCategory.Lib,
  },
  PostgreSql: {
    label: "PostgreSQL",
    href: "https://www.postgresql.org/",
    cvCategory: CvSkillCategory.Core,
    category: SkillCategory.Database,
  },
  Sqlite: {
    label: "SQLite",
    href: "https://www.sqlite.org/",
    cvCategory: CvSkillCategory.Other,
    category: SkillCategory.Database,
  },
  Mongodb: {
    label: "MongoDB",
    href: "https://www.mongodb.com/",
    cvCategory: CvSkillCategory.Core,
    category: SkillCategory.Database,
  },
  Vite: {
    label: "Vite",
    href: "https://vite.dev/",
    cvCategory: CvSkillCategory.Other,
    category: SkillCategory.Tools,
  },
  Supabase: {
    label: "Supabase",
    href: "https://supabase.com/",
    cvCategory: CvSkillCategory.Other,
    category: SkillCategory.Tools,
  },
  Firebase: {
    label: "Firebase",
    href: "https://firebase.google.com/",
    cvCategory: CvSkillCategory.Other,
    category: SkillCategory.Tools,
  },
  Webpack: {
    label: "Webpack",
    href: "https://webpack.js.org/",
    cvCategory: CvSkillCategory.Other,
    category: SkillCategory.Tools,
  },
  Rsbuild: {
    label: "Rsbuild",
    href: "https://rsbuild.dev/",
    cvCategory: CvSkillCategory.Other,
    category: SkillCategory.Tools,
  },
  Pnpm: {
    label: "Pnpm",
    href: "https://pnpm.io/",
    category: SkillCategory.Tools,
  },
  Biome: {
    label: "Biome",
    href: "https://biomejs.dev/",
    category: SkillCategory.Tools,
  },
  Eslint: {
    label: "Eslint",
    href: "https://eslint.org/",
    category: SkillCategory.Tools,
  },
  Prettier: {
    label: "Prettier",
    href: "https://prettier.io/",
    category: SkillCategory.Tools,
  },
  Vercel: {
    label: "Vercel",
    href: "https://vercel.com/",
    cvCategory: CvSkillCategory.Other,
    category: SkillCategory.Tools,
  },
  Git: {
    label: "Git",
    href: "https://git-scm.com/",
    cvCategory: CvSkillCategory.Core,
    category: SkillCategory.Tools,
  },
  GitHub: {
    label: "GitHub",
    href: "https://github.com/",
    category: SkillCategory.Tools,
  },
  Figma: {
    label: "Figma",
    href: "https://www.figma.com/",
    cvCategory: CvSkillCategory.Other,
    category: SkillCategory.Tools,
  },
  Zustand: {
    label: "Zustand",
    href: "https://zustand-demo.pmnd.rs/",
    cvCategory: CvSkillCategory.Other,
    category: SkillCategory.Lib,
  },
  Openai: {
    label: "OpenAI",
    href: "https://openai.com/",
    cvCategory: CvSkillCategory.Other,
    category: SkillCategory.Tools,
  },
  Mixpanel: {
    label: "Mixpanel",
    href: "https://mixpanel.com/",
    cvCategory: CvSkillCategory.Other,
    category: SkillCategory.Tools,
  },
  Monday: {
    label: "Monday",
    href: "https://monday.com/",
    category: SkillCategory.Tools,
  },
  ClickUp: {
    label: "ClickUp",
    href: "https://clickup.com/",
    category: SkillCategory.Tools,
  },
  Turborepo: {
    label: "Turborepo",
    href: "https://turborepo.com/",
    cvCategory: CvSkillCategory.Other,
    category: SkillCategory.Tools,
  },
  Svgo: {
    label: "SVGO",
    href: "https://github.com/svg/svgo",
    category: SkillCategory.Tools,
  },
  Raylib: {
    label: "Raylib",
    href: "https://www.raylib.com/",
    category: SkillCategory.Lib,
  },
  Raygui: {
    label: "RayGUI",
    href: "https://github.com/raysan5/raygui",
    category: SkillCategory.Lib,
  },
  SerwerSms: {
    label: "SerwerSMS",
    href: "https://serwersms.pl/",
    category: SkillCategory.Tools,
  },
} satisfies Record<string, ISkill>);

export type ISkillKey = keyof typeof SKILLS;

export const Skill = Object.freeze(
  (() => {
    const tmp: Record<string, string> = {};
    for (const key of Object.keys(SKILLS)) {
      tmp[key] = key;
    }
    return tmp as Record<ISkillKey, ISkillKey>;
  })(),
);
