import dayjs from "dayjs";
import { createSignal, onCleanup, onMount } from "solid-js";

const UPDATE_EVERY = 0.5; // seconds
const FORMAT = "HH:mm D MMMM YYYY";

export const Clock = () => {
	const [date, setDate] = createSignal(dayjs().format(FORMAT));

	let interval: number;
	onMount(() => {
		interval = setInterval(() => {
			setDate(dayjs().format(FORMAT));
		}, UPDATE_EVERY * 1000);
	});

	onCleanup(() => {
		clearTimeout(interval);
	});

	return (
		<div
			class="text-lg font-medium flex justify-center text-center anim-top-slide-in text-white/75"
			style={{
				"--slide-start-y": "-12px",
				"animation-delay": "var(--delay-welcome-clock)",
				"animation-duration": "var(--dur-welcome-clock)",
			}}
		>
			{date()}
		</div>
	);
};
