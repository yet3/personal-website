<script lang="ts">
	// TODO: maybe delete this file if unused
	import { vardelay } from "$utils/delays";
	import type { ClassValue } from "svelte/elements";
	import type { IDelay } from "$types/anims.types";

	interface IProps {
		text: string;
		class?: ClassValue;
		element?: string;
		animDelay?: IDelay;
		isVisible?: boolean;
	}

	const { text, class: className, animDelay, element = "p", isVisible = true }: IProps = $props();
</script>

<svelte:element
	this={element}
	class={["pop-in-words flex [&_span]:whitespace-pre flex-wrap", className]}
	use:vardelay={["--delay", animDelay]}
	data-has-anim={isVisible}
>
	{#each text.split(" ") as word, idx}
		<span style:--idx={idx}>{word}{" "}</span>
	{/each}
</svelte:element>

<style>
	:global {
		.pop-in-words {
			&[data-has-anim="true"] span {
				animation: anim__scale-in 0.25s var(--ease-bubble-120) forwards;
				animation-delay: calc(var(--delay) + var(--idx, 0) * 50ms);
			}

			span {
				display: inline-flex;
				transform-origin: center;
				transform: scale(0);
			}
		}
	}
</style>
