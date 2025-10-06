<script lang="ts">
	import { debounce } from "$utils/debounce";
	import { vardelay } from "$utils/delays";
	import { onMount } from "svelte";
	import type { ClassValue } from "svelte/elements";
	import type { IDelay } from "$types/anims.types";

	interface IProps {
		text: string;
		class?: ClassValue;
		element?: string;
		animDelay?: IDelay;
		isVisible?: boolean;
	}

	const {
		text,
		class: className,
		animDelay,
		element = "p",
		isVisible = true
	}: IProps = $props();

	let el: HTMLElement | null;

	let lines = $state<string[][]>([]);

	onMount(() => {
		if (!el) return;

		const calculateLines = debounce(() => {
			if (!el) return;
			const rect = el.getBoundingClientRect();
			const maxWidth = rect.width;

			const messureContainer = document.createElement("div");
			messureContainer.style.setProperty("position", "fixed");
			messureContainer.style.setProperty("top", "-9999px");
			messureContainer.style.setProperty("left", "-9999px");
			messureContainer.style.setProperty("pointer-events", "none");
			messureContainer.style.setProperty("visibility", "hidden");

			messureContainer.innerHTML = `<div class="text-base ${className}">${text}</div>`;

			document.body.append(messureContainer);

			const r = new Range();
			const textNode = messureContainer.childNodes[0].childNodes[0];
			const tmpLines: string[][] = [];

			let lineWords: string[] = [];
			let totalWidth = 0;

			const words = text.split(" ");

			let lastIdx = 0;
			for (let i = 0; i < words.length; i++) {
				let word = words[i];

				r.setStart(textNode, lastIdx);
				r.setEnd(textNode, Math.min(lastIdx + word.length + 1, text.length));

				lastIdx += word.length + 1;

				const wordRect = r.getBoundingClientRect();
				if (i < words.length - 1) {
					word += " ";
				}

				if (totalWidth + wordRect.width >= maxWidth) {
					tmpLines.push(lineWords);
					lineWords = [];
					totalWidth = 0;
				}

				lineWords.push(word);
				totalWidth += wordRect.width;
			}

			if (lineWords.length > 0) {
				tmpLines.push(lineWords);
			}

			lines = tmpLines;

			messureContainer.remove();
		}, 50);

		const resizeObserver = new ResizeObserver(() => {
			calculateLines();
		});

		resizeObserver.observe(el);

		return () => {
			resizeObserver.disconnect();
		};
	});
</script>

<svelte:element
	this={element}
	bind:this={el}
	class={[
		"text-base pop-in-sentences container flex flex-wrap translate-y-0",
		className
	]}
	use:vardelay={["--delay", animDelay]}
	data-has-anim={isVisible}
>
	{#each lines as words, idx}
		<span>
			{#each words as word}
				<span style:--idx={idx}><span>{word}</span></span>
			{/each}
		</span>
	{/each}
</svelte:element>

<style>
	@reference "$styles/global.css";

	.pop-in-sentences {
		&[data-has-anim="true"] > span > span {
			scale: 100%;
		}

		& > span > span {
			display: inline-flex;
			transform-origin: center;
			white-space: pre;
			scale: 0%;

			transition-property: scale;
			transition-timing-function: var(--ease-bubble-120);
			transition-duration: var(--default-transition-duration);
			transition-delay: calc(var(--delay) + var(--idx, 0) * 125ms);

			--r: var(--rotate-word);
			&:nth-child(odd) {
				--r: calc(var(--rotate-word) * -1);
			}

			& > span {
				transition-property: translate, scale, rotate;
				transition-timing-function: var(--ease-bubble-200);
				transition-duration: var(--default-transition-duration);
				transform-origin: center;

				&:hover {
					scale: var(--scale-word);
					translate: 0 calc(var(--translate-word) * -1);
					rotate: var(--r);
				}
			}
		}
	}
</style>
