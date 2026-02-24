import type {
  CustomAtRules,
  Keyframe,
  ReturnedDeclaration,
  Rule,
  Visitor,
} from "lightningcss";
import { makeKeyframeRule } from "./make-keyframe-rule";

const steps = new Map<string, Rule[]>();

export const pluginAtRules = {
  "global-anim-step": {
    prelude: "<custom-ident>",
    body: "style-block",
  },
  "anim-step": {
    prelude: "<custom-ident>",
    body: "style-block",
  },
  "timed-anim": {
    prelude: "<custom-ident>",
    body: "declaration-list",
  },
} satisfies CustomAtRules;

export const pluginVisitor = (): Visitor<typeof pluginAtRules> => {
  return {
    Rule: {
      custom: {
        "global-anim-step"(rule) {
          steps.set(rule.prelude.value, rule.body.value);
          return [];
        },
        "anim-step"(rule) {
          steps.set(
            `${rule.loc.source_index}-${rule.prelude.value}`,
            rule.body.value,
          );
          return [];
        },
        "timed-anim"(rule) {
          const usedSteps: { name: string; times: number[] }[] = [];
          let totalTime = 0;
          const animDeclarations = rule.body.value.declarations.filter(
            (el) => el.property === "custom",
          );

          for (const dec of animDeclarations) {
            const times = [];

            for (const time of dec.value.value) {
              if (time.type === "time") {
                if (time.value.type === "seconds") {
                  times.push(time.value.value * 1000);
                  totalTime += time.value.value * 1000;
                } else if (time.value.type === "milliseconds") {
                  times.push(time.value.value);
                  totalTime += time.value.value;
                } else {
                  console.log("Unknown 'time' type!");
                }
              }
            }

            usedSteps.push({
              name: dec.value.name,
              times: times,
            });
          }

          const frames: Keyframe<ReturnedDeclaration>[] = [];
          let accumulatedDur = 0;

          for (const step of usedSteps) {
            const stepStyle =
              steps.get(`${rule.loc.source_index}-${step.name}`) ??
              steps.get(step.name);

            if (stepStyle) {
              const declarations = stepStyle
                .filter((el) => el.type === "nested-declarations")
                .map((el) => el.value.declarations);

              const addFrame = (dur: number) => {
                frames.push({
                  selectors: [
                    {
                      type: "percentage",
                      value: dur,
                    },
                  ],
                  declarations: declarations[0],
                });
              };

              accumulatedDur += step.times[0];
              addFrame(accumulatedDur / totalTime);

              if (step.times[1]) {
                accumulatedDur += step.times[1];
                addFrame(accumulatedDur / totalTime);
              }
            }
          }

          return makeKeyframeRule({
            name: rule.prelude.value,
            durationName: `duration_${rule.prelude.value}`,
            loc: rule.loc,
            totalTime,
            frames,
          });
        },
      },
    },
  };
};
