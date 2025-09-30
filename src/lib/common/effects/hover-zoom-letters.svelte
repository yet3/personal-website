<script lang="ts">
	import { animdelay } from "$utils/delays";
	import type { IDelay } from "$types/anims.types";
	import type { ClassValue } from "svelte/elements";

	interface IProps {
		text: string;
		class?: ClassValue;
		element?: string;
		animDelay?: IDelay;
	}

	const { text, class: className, element = "span", animDelay }: IProps = $props();

	let container: HTMLElement;
	const charEls = new Set<Element>();

	const removeItem = (el: Element) => {
		el.removeAttribute("data-status");
		charEls.delete(el);
	};

	const addMainItem = (el?: Element | null) => {
		if (!el) return;
		el.setAttribute("data-status", "main");
		charEls.add(el);
	};

	const addAroundItem = (el?: Element | null) => {
		if (!el) return;
		el.setAttribute("data-status", "around");
		charEls.add(el);
	};

	const handleMouseMove = (e: MouseEvent) => {
		const target = e.target;
		if (!(target instanceof HTMLSpanElement) || !container.contains(target)) {
			return;
		}

		const prev = target.previousElementSibling;
		const next = target.nextElementSibling;

		for (const el of charEls) {
			let isAny = el === target || el === prev || el === next;
			if (!isAny) {
				removeItem(el);
			}
		}

		addMainItem(target);
		addAroundItem(prev);
		addAroundItem(next);
	};

	const handleMouseLeave = () => {
		if (container) {
			container.querySelectorAll("span").forEach((el) => removeItem(el));
		}
	};
</script>

<svelte:element
	this={element}
	bind:this={container}
	class={["hover-zoom-letters flex w-fit", className]}
  use:animdelay={animDelay}
	onmousemove={handleMouseMove}
	onmouseleave={handleMouseLeave}
	role="presentation"
	tabindex="-1"
>
	{#each text as char}
		<span>{char}</span>
	{/each}
</svelte:element>

<style>
	:global {
		.hover-zoom-letters {
			display: inline-flex;

			span {
				white-space: pre;
				transition: transform 250ms 0s var(--ease-bubble-200);

				--y: 0%;
				--s: 1;
				--r: 0deg;
				transform: translateY(var(--y)) scale(var(--s)) rotate(var(--r));

				&[data-status="around"] {
					--y: -5%;
					--s: 1.05;
				}
				&[data-status="main"] {
					--y: -10%;
					--s: 1.1;
				}

				&:nth-child(n):hover {
					--r: -4deg;
				}
				&:nth-child(2n):hover {
					--r: 4deg;
				}
			}
		}
	}
</style>
