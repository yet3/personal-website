import { randomInRange } from "@utils/randomInRange.util";
import { JSX, mergeProps } from "solid-js";
import "./style.css";

export const AnimTextCurtainStartFrom = [
  "top",
  "bottom",
  "left",
  "right",
] as const;
export type TAnimTextCurtainStartFrom =
  (typeof AnimTextCurtainStartFrom)[number];

interface Props {
  text: JSX.Element;
  delay?: number;
  duration?: number;

  startFrom?: TAnimTextCurtainStartFrom | "random";
}

export const AnimTextCurtain = (_props: Props) => {
  const props = mergeProps(
    {
      delay: 0,
      duration: 0.8,
      startFrom: "top",
    },
    _props
  );

  if (props.text === " ") return <span>&nbsp;</span>;

  const startFrom = () => {
    if (props.startFrom === "random") {
      return AnimTextCurtainStartFrom[
        randomInRange(0, AnimTextCurtainStartFrom.length - 1, "int")
      ];
    }
    return props.startFrom;
  };

  return (
    <div class="relative overflow-hidden">
      <div
        class="opacity-0"
        style={{
          animation: "anim-text-curtain-string ease forwards",
          "animation-delay": `${props.delay + props.duration / 2}s`,
          "animation-duration": "0ms",
        }}
      >
        {props.text}
      </div>
      <div
        class="absolute top-0 left-0 w-full h-full bg-accent opacity-0"
        style={{
          animation: `anim-text-curtain-from-${startFrom()} ease forwards`,
          "animation-delay": `${props.delay}s`,
          "animation-duration": `${props.duration}s`,
        }}
      ></div>
    </div>
  );
};
