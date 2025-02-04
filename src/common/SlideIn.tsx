import { type ParentProps, children } from "solid-js";
import type { Setter } from "solid-js/types/server/reactive.js";

type IProps = ParentProps<{
	from: string;

	class?: string;
	delay?: string;
	duration?: string;
}>;

export const SlideIn = (props: IProps) => {
	const c = children(() => props.children);
	return (
		<span
			class={props.class}
			classList={{ "anim-bottom-slide-in inline-block whitespace-pre": true }}
			style={{
				"--slide-start-y": props.from ?? "8px",
				"animation-duration": props.duration,
				"animation-delay": props.delay,
			}}
		>
			{c()}
		</span>
	);
};
