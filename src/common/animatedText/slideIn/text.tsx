import { randomInRange } from "@utils/randomInRange.util";
import clsx from "clsx";
import { children, JSX, mergeProps } from "solid-js";
import "./style.scss";

export const AnimTextSlideInFrom = ["top", "bottom", "left", "right"] as const;

interface Props {
  delay?: number;
  duration?: number;

  from?: (typeof AnimTextSlideInFrom)[number] | "random";

  children: JSX.Element

  class?: string
  innerClass?: string
  style?: JSX.CSSProperties
}

export const AnimTextSlideIn = (_props: Props) => {
  const props = mergeProps(
    {
      delay: 0,
      duration: 0.8,
      from: "top",
    },
    _props
  );

  const from = () => {
    if (props.from === "random") {
      return AnimTextSlideInFrom[
        randomInRange(0, AnimTextSlideInFrom.length - 1, "int")
      ];
    }
    return props.from;
  };

  const c = children(() => props.children)

  return (
    <div class={clsx("relative overflow-hidden", props.class)} style={props.style}>
      <div
        style={{
          "line-height": 1.25,
          animation: `anim-text-slide-in-from-${from()} ease both`,
          "animation-delay": `${props.delay}s`,
          "animation-duration": `${props.duration}s`,
        }}
        class={props.innerClass}
      >
        {c()}
      </div>
    </div>
  );
};
