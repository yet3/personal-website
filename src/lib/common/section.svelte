<script lang="ts">
	import { SECTIONS_TITLES, SectionId } from "$utils/constants";
	import type { Snippet } from "svelte";
	import type { ClassValue } from "svelte/elements";
	import HoverZoomLetter from "./effects/hover-zoom-letters.svelte";

	interface IProps {
		id: SectionId;
		noTitle?: boolean;
		ariaLabel: string;
		class?: ClassValue;
		children: Snippet;
	}

	const { id, class: className, noTitle, ariaLabel, children }: IProps = $props();

	const title = $derived(SECTIONS_TITLES[id]);
</script>

<section {id} aria-label={ariaLabel} class={[className, "main-section"]}>
	{#if !noTitle}
		<h2 class="font-medium text-lg mb-1 w-fit origin-left">
			<HoverZoomLetter text="#" class="text-accent -mr-1.5" />
			<HoverZoomLetter text={title} class="transition-transform" />
		</h2>
	{/if}
	{@render children()}
</section>
