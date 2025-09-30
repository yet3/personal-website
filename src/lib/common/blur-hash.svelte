<script lang="ts">
	import { decode } from "blurhash";
	import type { ClassValue } from "svelte/elements";
	import type { IDelay } from "$types/anims.types";
	import { animdelay } from "$utils/delays";

	interface IProps {
		hash: string;

		class?: ClassValue;
		width?: string | number;
		height?: string | number;
		animDelay?: IDelay;
	}

	const { hash, class: className, width, height, animDelay }: IProps = $props();

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

<canvas
	bind:this={canvasEl}
	class={className}
  use:animdelay={animDelay}
	{width}
	{height}
></canvas>
