<script lang="ts">
	import BlurHash from "$common/blur-hash.svelte";
	import { APP_DATA } from "$lib/app-data.svelte";
	import type { IProject, IProjectGeneratedData } from "$types/projects.types";
	import { type IProjectId } from "../../../projects";

	interface IProps {
		data: IProject;
	}

	let hasImageLoaded = $state(false);
	const { data }: IProps = $props();

	let imgPathBase = $state("");
	if (import.meta.env.DEV) {
		imgPathBase = ".svelte-kit/output/client/";
	}

	const def: IProjectGeneratedData = {
		blurHash: "",
		images: [
			{
				png: "",
				webp: "",
				avif: ""
			}
		]
	};

	let previewData = $state(APP_DATA.PROJECTS[data.id as IProjectId] ?? def);

	if (typeof window !== "undefined") {
		$effect(() => {
			previewData = APP_DATA.PROJECTS[data.id as IProjectId] ?? def;
		});
	}
</script>

<div
	class={[
		"ease-bubble-105 relative aspect-video rounded-xl shadow-lg duration-400 w-full xl:w-9/10",
		"bg-base-240"
	]}
>
	<a href={data.appHref || data.repoHref} rel="noopener noreferrer" target="_blank">
		{#if !hasImageLoaded}
			<BlurHash
				hash={previewData.blurHash}
				class="rounded-xl transition-transform hover:scale-101 ease-bubble-200 size-full delay-100"
			/>
		{/if}
		<!-- svelte-ignore hydration_attribute_changed -->
		<picture>
			<source srcset={imgPathBase + previewData.images[0].avif} type="image/avif" />
			<source srcset={imgPathBase + previewData.images[0].webp} type="image/webp" />
			<img
				src={imgPathBase + previewData.images[0].png}
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
</div>
