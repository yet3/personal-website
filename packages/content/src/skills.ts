export enum SkillCategory {
  Lang = "programming_language",
  "Lib" = "libs_and_frameworkds",
  "Tools" = "tools_and_platforms",
  "Database" = "database",
}

export interface ISkill {
  label: string;
  href?: string;
  showInCv?: boolean;
  category: SkillCategory;
}

export const SKILLS = Object.freeze({
  JavaScript: {
    label: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    showInCv: true,
    category: SkillCategory.Lang,
  },
  TypesSript: {
    label: "TypeScript",
    href: "https://www.typescriptlang.org/",
    showInCv: true,
    category: SkillCategory.Lang,
  },
  Css: {
    label: "CSS",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    showInCv: true,
    category: SkillCategory.Lang,
  },
  Scss: {
    label: "SCSS",
    href: "https://sass-lang.com/",
    showInCv: true,
    category: SkillCategory.Lang,
  },
  Html: {
    label: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    showInCv: true,
    category: SkillCategory.Lang,
  },
  StyledComponents: {
    label: "Styled Components",
    href: "https://styled-components.com/",
    showInCv: true,
    category: SkillCategory.Lib,
  },
  TailwindCss: {
    label: "TailwindCSS",
    href: "https://tailwindcss.com/",
    showInCv: true,
    category: SkillCategory.Lib,
  },
  UnoCss: {
    label: "UnoCSS",
    href: "https://unocss.dev/",
    showInCv: false,
    category: SkillCategory.Lib,
  },
  Go: {
    label: "Go",
    href: "https://go.dev/",
    showInCv: true,
    category: SkillCategory.Lang,
  },
  React: {
    label: "React",
    href: "https://react.dev/",
    showInCv: true,
    category: SkillCategory.Lib,
  },
  ReactNative: {
    label: "React Native",
    href: "https://reactnative.dev/",
    showInCv: true,
    category: SkillCategory.Lib,
  },
  Expo: {
    label: "Expo",
    href: "https://expo.dev/",
    showInCv: true,
    category: SkillCategory.Tools,
  },
  Electron: {
    label: "Electron",
    href: "https://www.electronjs.org/",
    showInCv: true,
    category: SkillCategory.Lib,
  },
  Solidjs: {
    label: "Solidjs",
    href: "https://www.solidjs.com/",
    showInCv: true,
    category: SkillCategory.Lib,
  },
  Svelte: {
    label: "Svelte",
    href: "https://svelte.dev/",
    showInCv: true,
    category: SkillCategory.Lib,
  },
  Astro: {
    label: "Astro",
    href: "https://astro.build/",
    showInCv: true,
    category: SkillCategory.Lib,
  },
  Nextjs: {
    label: "Next.js",
    href: "https://nextjs.org/",
    showInCv: true,
    category: SkillCategory.Lib,
  },
  SolidStart: {
    label: "SolidStart",
    href: "https://start.solidjs.com/",
    showInCv: false,
    category: SkillCategory.Lib,
  },
  Vitest: {
    label: "Vitest",
    href: "https://vitest.dev/",
    showInCv: true,
    category: SkillCategory.Tools,
  },
  Puppeteer: {
    label: "Puppeteer",
    href: "https://pptr.dev/",
    showInCv: true,
    category: SkillCategory.Lib,
  },
  Nodejs: {
    label: "Node.js",
    href: "https://nodejs.org/en",
    showInCv: true,
    category: SkillCategory.Tools,
  },
  Express: {
    label: "Express",
    href: "https://expressjs.com/",
    showInCv: true,
    category: SkillCategory.Lib,
  },
  PostgreSql: {
    label: "PostgreSQL",
    href: "https://www.postgresql.org/",
    showInCv: true,
    category: SkillCategory.Database,
  },
  Sqlite: {
    label: "SQLite",
    href: "https://www.sqlite.org/",
    showInCv: true,
    category: SkillCategory.Database,
  },
  Mongodb: {
    label: "MongoDB",
    href: "https://www.mongodb.com/",
    showInCv: true,
    category: SkillCategory.Database,
  },
  Vite: {
    label: "Vite",
    href: "https://vite.dev/",
    showInCv: true,
    category: SkillCategory.Tools,
  },
  Supabase: {
    label: "Supabase",
    href: "https://supabase.com/",
    showInCv: true,
    category: SkillCategory.Tools,
  },
  Firebase: {
    label: "Firebase",
    href: "https://firebase.google.com/",
    showInCv: true,
    category: SkillCategory.Tools,
  },
  Webpack: {
    label: "Webpack",
    href: "https://webpack.js.org/",
    showInCv: false,
    category: SkillCategory.Tools,
  },
  Rsbuild: {
    label: "Rsbuild",
    href: "https://rsbuild.dev/",
    showInCv: true,
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
    showInCv: true,
    category: SkillCategory.Tools,
  },
  Git: {
    label: "Git",
    href: "https://git-scm.com/",
    showInCv: true,
    category: SkillCategory.Tools,
  },
  GitHub: {
    label: "GitHub",
    href: "https://github.com/",
    showInCv: true,
    category: SkillCategory.Tools,
  },
  Figma: {
    label: "Figma",
    href: "https://www.figma.com/",
    showInCv: true,
    category: SkillCategory.Tools,
  },
  Zustand: {
    label: "Zustand",
    href: "https://zustand-demo.pmnd.rs/",
    showInCv: true,
    category: SkillCategory.Lib,
  },
  Openai: {
    label: "OpenAI",
    href: "https://openai.com/",
    showInCv: true,
    category: SkillCategory.Tools,
  },
  Mixpanel: {
    label: "Mixpanel",
    href: "https://mixpanel.com/",
    showInCv: true,
    category: SkillCategory.Tools,
  },
  Monday: {
    label: "Monday",
    href: "https://monday.com/",
    showInCv: false,
    category: SkillCategory.Tools,
  },
  ClickUp: {
    label: "ClickUp",
    href: "https://clickup.com/",
    showInCv: false,
    category: SkillCategory.Tools,
  },
  Turborepo: {
    label: "Turborepo",
    href: "https://turborepo.com/",
    showInCv: true,
    category: SkillCategory.Tools,
  },
  Svgo: {
    label: "SVGO",
    href: "https://github.com/svg/svgo",
    showInCv: false,
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
    showInCv: false,
    category: SkillCategory.Lib,
  },
  SerwerSms: {
    label: "SerwerSMS",
    href: "https://serwersms.pl/",
    showInCv: false,
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
