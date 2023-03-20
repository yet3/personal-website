import clsx from "clsx";
import { For, JSX, mergeProps } from "solid-js";
import { AnimTextPopIn } from "./text";

interface Props {
  text: string;

  delay?: number;
  duration?: number;

  class?: string;
  style?: JSX.CSSProperties;
}

const STAGGER = 0.1;

export const AnimTextLinePopIn = (_props: Props) => {
  const props = mergeProps({ delay: 0, duration: 0.8 }, _props);

  const chars = () => [...props.text];


  return (
    <div class={clsx("inline-flex", props.class)} style={props.style}>
      <For each={chars()}>
        {(char, i) => (
          <AnimTextPopIn
            text={char}
            delay={props.delay + i() * STAGGER}
            duration={props.duration}
          />
        )}
      </For>
    </div>
  );
};
