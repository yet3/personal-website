<script lang="ts">
	import type { ClassValue } from "svelte/elements";

	interface IProps {
		text: string;
		class?: ClassValue;
		element?: string;
	}

	const { text, class: className, element = "span" }: IProps = $props();

	let container: HTMLElement;
</script>

<svelte:element
	this={element}
	bind:this={container}
	class={["hover-zoom-letters flex w-fit", className]}
	role="presentation"
	tabindex="-1"
>
	{#each text as char}
		<span>{char}</span>
	{/each}
</svelte:element>

<style>
	.hover-zoom-letters {
		display: inline-flex;

		span {
			white-space: pre;
			transition: transform 250ms 0s var(--ease-bubble-200);

			--y: 0%;
			--s: 1;
			--r: 0deg;
			transform: translateY(var(--y)) scale(var(--s)) rotate(var(--r));

			&:nth-child(n):hover {
				--r: -4deg;
			}
			&:nth-child(2n):hover {
				--r: 4deg;
			}
		}

		span:hover {
			--y: -10%;
			--s: 1.1;
		}
		span:hover + span,
		span:has(+ span:hover) {
			--y: -5%;
			--s: 1.05;
		}
	}
</style>
