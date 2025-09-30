<script lang="ts">
	import { getCssVarValue } from "$utils/css-var";
	import { DELAY_SECTIONS } from "$utils/delays";
	import { onDestroy } from "svelte";

	interface IProps {
		isVisible: boolean;
	}

	const { isVisible }: IProps = $props();
	const primaryText = "Hello there!";
	const secondaryText = "General Kenobi.";

	const longerText = primaryText.length > secondaryText.length ? primaryText : secondaryText;

	let LETTER_DUR = 250;
	let PER_DELAY = 50;
	let SHOW_FOR = 1.5 * 1000;
	let CHANGE_TIME = LETTER_DUR + longerText.length * PER_DELAY;

	let primaryY = $state(-100);
	let primaryTrans = $state(true);
	let secondaryY = $state(-100);
	let secondaryTrans = $state(true);
	let timeout = $state<NodeJS.Timeout | null>(null);

	onDestroy(() => {
		if (timeout != null) {
			clearTimeout(timeout);
		}
	});

	$effect(() => {
		if (isVisible) {
			let inTimeout: NodeJS.Timeout | null = setTimeout(() => {
				primaryTrans = true;
				primaryY = 0;
				inTimeout = null;
			}, getCssVarValue(DELAY_SECTIONS));

			return () => {
				if (inTimeout != null) {
					clearInterval(inTimeout);
				}
			};
		}
	});

	const handleStart = () => {
		if (timeout || !isVisible) return;

		primaryTrans = true;
		primaryY = 100;

		secondaryTrans = true;
		secondaryY = 0;

		timeout = setTimeout(() => {
			primaryTrans = false;
			primaryY = -100;

			timeout = setTimeout(() => {
				primaryTrans = true;
				primaryY = 0;

				secondaryTrans = true;
				secondaryY = 100;

				timeout = setTimeout(() => {
					secondaryTrans = false;
					secondaryY = -100;

					timeout = null;
				}, CHANGE_TIME);
			}, SHOW_FOR);
		}, CHANGE_TIME);
	};
</script>

{#snippet letters(text: string, y = 0, hasTrans = true)}
	<div class="absolute top-0 left-0 flex w-fit">
		{#each text as char, idx}
			<span
				class={[
					"whitespace-pre ease-bubble",
					hasTrans ? "transition-transform" : "transition-none"
				]}
				style="--tw-duration: {LETTER_DUR}ms; transform: translateY({y}%); transition-delay: {idx *
					PER_DELAY}ms;">{char}</span
			>
		{/each}
	</div>
{/snippet}

<h2 class={["relative w-fit text-2xl mb-3", isVisible && "group"]}>
	<button
		type="button"
		onclick={() => handleStart()}
		class={[
			"font-medium relative overflow-hidden origin-[40%_50%]",
			isVisible && "cursor-pointer"
		]}
	>
		{@render letters(primaryText, primaryY, primaryTrans)}
		{@render letters(secondaryText, secondaryY, secondaryTrans)}
		<span class="invisible">{longerText}</span>
	</button>

	{#if isVisible}
		<div
			class={[
				"absolute top-0 -left-1.5 w-0.5 h-full bg-accent transition-transform ease-bubble duration-250",
				!timeout ? "origin-top scale-y-0 group-hover:scale-y-100" : "scale-y-0 origin-bottom"
			]}
		></div>
	{/if}
</h2>
