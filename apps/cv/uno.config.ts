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
          text: {
            ...theme.text,
            //
            "resume-name": makeSize("size-resume-name"),
            "resume-subname": makeSize("size-resume-subname"),
            //
            "resume-heading": makeSize("size-resume-heading"),
            "resume-title": makeSize("size-resume-title", "1.3"),
            "resume-body": makeSize("size-resume-body", "1.3"),
            "resume-meta": makeSize("size-resume-meta"),
          },
        };
      },
    ],
  },
]);
