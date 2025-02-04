interface IProps {
	class?: string;
	content: string;
	delay?: string;
	duration?: string;
}

export const PopTextIn = (props: IProps) => {
	return (
		<span
			class={props.class}
			classList={{ "anim-text-pop-in inline-block whitespace-pre": true }}
			style={{
				"animation-duration": props.duration,
				"animation-delay": props.delay,
			}}
		>
			{props.content}
		</span>
	);
};
