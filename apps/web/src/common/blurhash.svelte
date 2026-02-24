<script lang="ts">
	import type { ClassValue } from "svelte/elements";
	import { decode } from "blurhash";

	interface IProps {
		hash: string;

		class?: ClassValue;
		width?: string | number;
		height?: string | number;
	}

	const { hash, class: className, width, height }: IProps = $props();

	let canvasEl: HTMLCanvasElement | null = null;

	$effect(() => {
		width;
		height;

		if (!canvasEl) return;
		const ctx = canvasEl.getContext("2d");
		if (!ctx) return;
		const imageData = ctx.createImageData(canvasEl.width, canvasEl.height);

		const pixels = decode(hash, canvasEl.width, canvasEl.height);
		imageData.data.set(pixels);
		ctx.putImageData(imageData, 0, 0);
	});
</script>

<canvas data-hash={hash} bind:this={canvasEl} class={className} {width} {height}></canvas>
