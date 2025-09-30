<script lang="ts">
	import { DELAY_IN_ORDER, DELAY_LOCAL, animdelay } from "$utils/delays";
	import PopIn from "$common/effects/pop-in.svelte";
	import ArrowDownIcon from "$common/icons/arrow-down-icon.svelte";
	import type { IDelay } from "$types/anims.types";
	import type { IExperience } from "$types/experience.types";

	interface IProps {
		onToggleExpand: () => void;
		data: IExperience;
		isVisible: boolean;
		isOpen: boolean;
	}

	const { onToggleExpand, data, isVisible, isOpen }: IProps = $props();

	const DELAY: IDelay = [DELAY_LOCAL, 100, [75, "*", DELAY_IN_ORDER]];
</script>

{#snippet text(content: string, { delay, rotateRight = true }: { delay: number; rotateRight?: boolean })}
	<PopIn class="inline-flex" element="span" {isVisible} animDelay={[DELAY, delay]}>
		<span
			class={[
				"origin-center transition-transform ease-bubble-200",
				"hover:scale-word hover:-translate-y-word",
				rotateRight ? "hover:rotate-word" : "hover:-rotate-word"
			]}
		>
			{content}
		</span>
	</PopIn>
{/snippet}

<button
	type="button"
	onclick={onToggleExpand}
	class="grid grid-cols-[1fr_auto] cursor-pointer group/header text-base"
>
	<h3 class="w-fit font-medium text-sm sm:text-base text-left">
		{@render text(data.position, { delay: 25 })}
		{@render text("-", { delay: 125 })}
		{@render text(data.at, { delay: 75, rotateRight: false })}
	</h3>

	<PopIn
		animDelay={[DELAY, 200]}
		{isVisible}
		class={[
			"rounded size-6 grid place-items-center bg-base-240 items-center",
			"transition-transform ease-bubble-200"
		]}
	>
		<div
			class={[
				"text-accent transition-transform group-hover/header:scale-y-110 ease-bubble-120",
				isOpen
					? "rotate-180 -scale-x-100 group-hover/header:-scale-x-110"
					: "group-hover/header:scale-x-110"
			]}
		>
			<ArrowDownIcon />
		</div>
	</PopIn>

	<h4 class="w-fit text-sm sm:text-base text-primary/75">
		{@render text(`${data.workMode}, `, { delay: 100 })}
		{@render text(data.location, { delay: 150, rotateRight: false })}
	</h4>
</button>
