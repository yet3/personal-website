import { UNO_CONFIG } from "@repo/lib";
import { mergeConfigs, type ThemeExtender } from "unocss";

const makeSize = (s: string, lh = "1") => {
  return {
    fontSize: `var(--${s})`,
    lineHeight: lh,
  };
};

export default mergeConfigs([
  UNO_CONFIG,
  {
    extendTheme: [
      UNO_CONFIG.extendTheme as ThemeExtender,
      (theme) => {
        return {
          ...theme,
          spacing: {
            ...theme.spacing,
            columns: "var(--columns-gap)",
            sections: "var(--sections-gap)",
            skills: "var(--skills-gap)",
          },
          text: {
            ...theme.text,
            h1: makeSize("size-h1"),
            h2: makeSize("size-h2"),
            "head-info": makeSize("size-head-info"),
            //
            skill: makeSize("size-skill"),
            //
            content: makeSize("size-content", "1.5"),
            "sec-h1": makeSize("size-sec-h1"),
            "sec-h2": makeSize("size-sec-h2"),
            "sec-h3": makeSize("size-sec-h3"),
          },
        };
      },
    ],
  },
]);
