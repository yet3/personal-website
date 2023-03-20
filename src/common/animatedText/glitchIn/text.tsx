import { randomInRange } from "@utils/randomInRange.util";
import { JSX, mergeProps } from "solid-js";
import "./style.css";
interface Props {
  text: JSX.Element;
  delay?: number;
  duration?: number;
}

export const AnimTextGlitchIn = (_props: Props) => {
  const props = mergeProps(
    {
      delay: 0,
      duration: 0.8,
    },
    _props
  );

  if (props.text === " ") return <span>&nbsp;</span>;

  return (
    <div class="relative overflow-hidden">
      <div>{props.text}</div>
    </div>
  );
};
