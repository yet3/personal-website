import { type Rule, symbols } from "unocss";
import type { Theme } from "unocss/preset-wind4";

export const animDelaysRules: Rule<Theme>[] = [
    [
      /^delay-(\d+)$/,
      ([, d]) => ({
        "--delay": `${d}ms`,
      }),
      { autocomplete: "delay-<num>" },
    ],
    [
      /^delay-page-(\d+)$/,
      ([, d]) => ({
        "--delay": `calc(var(--delay-page-in) + ${d}ms)`,
      }),
      { autocomplete: "delay-page-<num>" },
    ],
    //
    //
    // Home
    [
      /^delay-about-(\d+)$/,
      ([, d]) => ({
        "--delay": `calc(var(--delay-about) + ${d}ms)`,
      }),
      { autocomplete: "delay-about-<num>" },
    ],
    [
      /^delay-experience-(\d+)$/,
      ([, d]) => ({
        "--delay": `calc(var(--delay-experience) + ${d}ms)`,
      }),
      { autocomplete: "delay-experience-<num>" },
    ],
    [
      /^delay-proj-prev-(\d+)$/,
      ([, d]) => ({
        "--delay": `calc(var(--delay-projects-preview) + ${d}ms)`,
      }),
      { autocomplete: "delay-proj-prev-<num>" },
    ],
    //
    //
    // Projects
    [
      /^delay-tech-(\d+)$/,
      ([, d]) => ({
        "--delay": `calc(var(--delay-tech) + ${d}ms)`,
      }),
      { autocomplete: "delay-tech-<num>" },
    ],
    [
      /^delay-projects-(\d+)$/,
      ([, d]) => ({
        "--delay": `calc(var(--delay-projects) + ${d}ms)`,
      }),
      { autocomplete: "delay-projects-<num>" },
    ],
]
