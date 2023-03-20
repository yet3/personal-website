import type { JSX } from "solid-js";

interface Props extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {
  content?: string;
}

export const Anchor = (props: Props) => {
  return (
    <a rel="noopener noreferrer" target="_blank" {...props}>
      {props.content == null ? props.children : props.content}
    </a>
  );
};
