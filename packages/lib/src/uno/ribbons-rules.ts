import { type Rule, symbols } from "unocss";
import type { Theme } from "unocss/preset-wind4";

const makeRibbonClipPath = (
  tl: string | null,
  tr?: string | null,
  br?: string | null,
  bl?: string | null,
) =>
  `polygon(
    0px 100%,
    0px ${tl},
    ${tl} 0px,
    100% 0px,
    calc(100% - ${tr}) 0px,
    100% ${tr},
    100% calc(100% - ${br}),
    calc(100% - ${br}) 100%,
    ${bl} 100%,
    0px calc(100% - ${bl})
  );`;

export const ribbonRules: Rule<Theme>[] = [
  [
    /^clip-ribbon(-(\d+)){1,4}$/,
    ([str]) => {
      const values = str.replaceAll("clip-ribbon-", "").split("-");
      return {
        "--ribbon-tr": `${values[0] || 0}px`,
        "--ribbon-tl": `${values[1] || 0}px`,
        "--ribbon-br": `${values[2] || 0}px`,
        "--ribbon-bl": `${values[3] || 0}px`,
        "clip-path": makeRibbonClipPath(
          "var(--ribbon-tr)",
          "var(--ribbon-tl)",
          "var(--ribbon-br)",
          "var(--ribbon-bl)",
        ),
      };
    },
    {
      autocomplete: [
        "clip-ribbon-<num>",
        "clip-ribbon-<num>-<num>",
        "clip-ribbon-<num>-<num-<num>>",
        "clip-ribbon-<num>-<num>-<num>-<num>",
      ],
    },
  ],
  [
    /^ribbon-border-br-(\d+)$/,
    ([, d]) => {
      return {
        [symbols.selector]: (selector) => `${selector}::before`,
        content: "''",
        position: "absolute",
        width: `${d}px`,
        height: "100%",
        bottom: `-${d}px`,
        right: `calc(var(--ribbon-br) - ${d}px)`,
        transform: "rotate(45deg)",
        background: "var(--ribbon-border-color, black)",
        "transform-origin": "center bottom",
      };
    },
  ],
  [
    /^ribbon-border-(.*)$/,
    ([, c], { theme }) => {
      const colors = theme.colors;
      if (colors) {
        const parts = c.split("-");

        const mainColor = colors[parts[0]];
        if (mainColor) {
          if (typeof mainColor === "object") {
            const subColor = mainColor[parts[1]] ?? mainColor.DEFAULT;
            return {
              "--ribbon-border-color": subColor as string,
            };
          }
          return {
            "--ribbon-border-color": mainColor as string,
          };
        }
      }
      return {};
    },
    {
      autocomplete: "ribbon-border-$colors",
    },
  ],
];
