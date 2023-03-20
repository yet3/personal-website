import { randomInRange } from "@utils/randomInRange.util";
import clsx from "clsx";
import { For, JSX, mergeProps, Show } from "solid-js";
import {
  AnimTextCurtain,
  AnimTextCurtainStartFrom,
  TAnimTextCurtainStartFrom,
} from "./text";

interface Props {
  text: JSX.Element | string | Array<JSX.Element | string>;
  delay?: number;
  duration?: number;

  class?: string;
  style?: JSX.CSSProperties;
}

const getRandomAnimExcept = (except?: string | null) => {
  const anims = AnimTextCurtainStartFrom.slice();
  if (except) anims.splice(anims.indexOf(except as any), 1);
  return anims[randomInRange(0, anims.length - 1, "int")];
};

export const AnimTextLineCurtain = (_props: Props) => {
  const props = mergeProps(
    {
      delay: 0,
    },
    _props
  );

  const words = () => {
    let prevAnim: string | null = null;

    const ar = Array.isArray(props.text) ? props.text : [props.text];

    const result: { word: JSX.Element; anim: TAnimTextCurtainStartFrom }[] = [];
    ar.forEach((a) => {
      if (typeof a === "string") {
        result.push(
          ...a.split(" ").map((w) => {
            const anim = getRandomAnimExcept(prevAnim);
            prevAnim = anim;
            return { word: w, anim: anim };
          })
        );
      } else {
        const anim = getRandomAnimExcept(prevAnim);
        prevAnim = anim;
        result.push({ word: a, anim: anim });
      }
    });

    return result;
  };

  return (
    <div class={clsx("inline-flex flex-wrap justify-center", props.class)} style={props.style}>
      <For each={words()}>
        {(d, i) => {
          return (
            <>
              <Show when={i() > 0}>&nbsp;</Show>
              <AnimTextCurtain
                text={d.word}
                startFrom={d.anim}
                delay={props.delay + i() * 0.1}
                duration={props.duration}
              />
            </>
          );
        }}
      </For>
    </div>
  );
};
