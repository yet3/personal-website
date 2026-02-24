import {
  defineConfig,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import { ribbonRules } from "./ribbons-rules";
import { animDelaysRules } from "./anim-delays-rules";

export const UNO_CONFIG = defineConfig({
  transformers: [transformerDirectives(), transformerVariantGroup()],
  presets: [
    presetWind4({
      preflights: {
        reset: false,
      },
    }),
  ],
  extendTheme: (theme) => {
    return {
      ...theme,
      spacing: {
        ...theme.spacing,
        nav: "3rem",
      },
      text: {
        ...theme.text,
        md: { ...theme.text?.base },
      },
      breakpoint: {
        ...theme.breakpoint,
        "2xs": "25rem",
        xs: "33.75rem",
        x545: "34.0625rem",
        x768: "48rem",
      },
      colors: {
        ...theme.colors,
        base: {
          DEFAULT: "oklch(0.985 0 0)",
          100: "oklch(0.985 0 0)",
        },
        primary: {
          DEFAULT: "oklch(0.2 0 0)",
          100: "oklch(0.2 0 0)",
          200: "oklch(0.3 0 0)",
          300: "oklch(0.4 0 0)",
          400: "oklch(0.5 0 0)",
        },
        secondary: {
          DEFAULT: "oklch(0.45 0 0)",
          100: "oklch(0.55 0 0)",
          200: "oklch(0.65 0 0)",
          300: "oklch(0.75 0 0)",
          400: "oklch(0.85 0 0)",
          500: "oklch(0.95 0 0)",
        },
        accent: {
          DEFAULT: "oklch(0.2 0 0)",
          100: "oklch(0.2 0 0)",
        },
      },
    };
  },
  rules: [
    ...ribbonRules,
    ...animDelaysRules,
  ],
});
