<script lang="ts">
	import BlurHash from "$common/blur-hash.svelte";
	import PopIn from "$common/effects/pop-in.svelte";
	import type { IDelay } from "$types/anims.types";
	import type { IProject } from "$types/projects.types";

	interface IProps {
		data: IProject;
		isVisible: boolean;
		animDelay: IDelay;
	}

	let hasImageLoaded = $state(false);
	const { data, isVisible, animDelay }: IProps = $props();

  console.log(data)
	let imgPathBase = $state("");
	if (import.meta.env.DEV) {
		imgPathBase = ".svelte-kit/output/client/";
	}
</script>

<PopIn
	{isVisible}
	{animDelay}
	class={[
		"ease-bubble-105 relative aspect-video rounded-xl shadow-lg duration-400 w-full xl:w-9/10",
		"bg-base-240"
	]}
>
	<a href={data.appHref || data.repoHref} rel="noopener noreferrer" target="_blank">
		{#if !hasImageLoaded}
			<BlurHash
				hash={data.blurHash}
				class="rounded-xl transition-transform hover:scale-101 ease-bubble-200 size-full delay-100"
			/>
		{/if}

		<picture>
			<source srcset={imgPathBase + data.images[0].avif} type="image/avif" />
			<source srcset={imgPathBase + data.images[0].webp} type="image/webp" />
			<img
				src={imgPathBase + data.images[0].png}
				class={[
					"absolute top-0 left-0 size-full rounded-xl overflow-hidden transition-transform hover:scale-101 ease-bubble-200 delay-100 max-xl:object-center!",
					data.imageFit === "contain" ? "object-contain" : "object-cover"
				]}
				style:object-position={data.imagePosition ?? "50% 0%"}
				alt="Project preview"
				loading="lazy"
				decoding="async"
				fetchpriority="auto"
				onload={() => (hasImageLoaded = true)}
			/>
		</picture>
	</a>
</PopIn>
