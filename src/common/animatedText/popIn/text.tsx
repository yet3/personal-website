import clsx from "clsx";
import { JSX, mergeProps } from "solid-js";
import "./style.css";

interface Props {
  text: JSX.Element;

  delay?: number;
  duration?: number;

  class?: string;
}

export const AnimTextPopIn = (_props: Props) => {
  const props = mergeProps({ delay: 0, duration: 0.5 }, _props);

  if (props.text === " ") return <span>&nbsp;</span>;

  return (
    <div class={clsx("inline-flex whitespace-pre-wrap", props.class)}>
      <div
        class="opacity-0"
        style={{
          animation: "anim-text-pop-in ease forwards",
          "animation-delay": `${props.delay}s`,
          "animation-duration": `${props.duration}s`,
        }}
      >
        {props.text}
      </div>
    </div>
  );
};
