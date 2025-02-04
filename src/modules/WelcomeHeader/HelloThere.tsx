import { PopTextIn } from "@common/PopTextIn";
import { Index, createMemo, createSignal, onCleanup } from "solid-js";

const ANIM_DUR = 250;
const STAY_DUR = 750;

export const HelloThere = () => {
	const [isShown, setIsShown] = createSignal(false);

	let timeout: number | null = null;

	onCleanup(() => {
		if (timeout != null) {
			clearTimeout(timeout);
		}
	});
	const handleOnClick = () => {
		if (timeout != null) {
			clearTimeout(timeout);
			timeout = null;
		}

		setIsShown(true);
		timeout = setTimeout(() => {
			setIsShown(false);
			timeout = null;
		}, ANIM_DUR + STAY_DUR);
	};

	const chars = createMemo(() => {
		const els: { char: string; delay: number }[] = [];
		const str = "Hello there";
		const delays = [4, 2, 0, 5, 1, 0, 4, 2, 5, 7, 3];
		for (let i = 0; i < str.length; i++) {
			const char = str[i];

			els.push({
				char: char,
				delay: delays[i] * 40,
			});
		}
		return els;
	});

	return (
		<div class="relative ~text-3xl/5xl overflow-hidden font-medium">
      {/* biome-ignore lint: */}
			<h2
				class="absolute left-1/2 top-1/2 w-full"
				onClick={handleOnClick}
				style={{
					transform: `translate(-50%, ${isShown() ? 100 : -50}%)`,
					transition: `transform ${ANIM_DUR}ms ease`,
				}}
			>
				<Index each={chars()}>
					{(char) => (
						<PopTextIn
							content={char().char}
							duration="var(--dur-welcome-greeting)"
							delay={`calc(var(--delay-welcome-greeting) + ${char().delay}ms)`}
						/>
					)}
				</Index>
			</h2>

			<h2
				class="text-nowrap bg-clip-text text-transparent bg-gradient-to-t from-blue-400 to-pink-300"
				style={{
					transform: `translateY(${isShown() ? 0 : -100}%)`,
					transition: `transform ${ANIM_DUR}ms ease`,
				}}
			>
				General Kenobi
			</h2>
		</div>
	);
};
