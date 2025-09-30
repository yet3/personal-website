<script lang="ts">
	import {
		DELAY_IN_ORDER,
		DELAY_LOCAL,
		DELAY_PER_SECTION,
		DELAY_SECTIONS,
		vardelay
	} from "$utils/delays";
	import { type IOnVisibleFn, onvisible, watchlayer } from "$utils/elements-visibility.svelte";
	import type { Snippet } from "svelte";
	import type { ClassValue } from "svelte/elements";
	import HoverZoomLetter from "./effects/hover-zoom-letters.svelte";
	import { SectionId, SECTIONS_TITLES } from "$utils/constants";

	interface IProps {
		id: SectionId;
		noTitle?: boolean;
		ariaLabel: string;
		class?: ClassValue;
		onVisible?: IOnVisibleFn;
		isVisible?: boolean;
		children: Snippet;
	}

	const {
		id,
		class: className,
    noTitle,
		ariaLabel,
		onVisible,
		children,
		isVisible = true
	}: IProps = $props();

  const title = $derived(SECTIONS_TITLES[id])
</script>

<section
	{id}
	aria-label={ariaLabel}
	class={[className, 'main-section']}
	use:onvisible={onVisible}
	use:watchlayer={"section"}
	use:vardelay={[DELAY_LOCAL, [DELAY_SECTIONS, [DELAY_IN_ORDER, "*", DELAY_PER_SECTION]]]}
>
	{#if !noTitle}
		<h2 class="font-medium text-lg mb-1 w-fit origin-left">
			<HoverZoomLetter
				text="#"
				class={[
					"text-accent transition-transform ease-bubble-120 -mr-1.5",
					isVisible ? "scale-100" : "scale-0"
				]}
				animDelay={[DELAY_LOCAL, 75]}
			/>
			<HoverZoomLetter
				text={title}
				class={["transition-transform ease-bubble-120", isVisible ? "scale-100" : "scale-0"]}
				animDelay={DELAY_LOCAL}
			/>
		</h2>
	{/if}
	{@render children()}
</section>
