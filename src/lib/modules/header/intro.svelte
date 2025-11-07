<script lang="ts">
	import HoverZoomLetters from "$common/effects/hover-zoom-letters.svelte";
</script>

<div class="grid grid-cols-[1fr_auto] relative gap-x-3 sm:gap-x-4 justify-items-end">
	<div
		class={[
			"w-1 h-full bg-accent rounded-full col-start-2 row-span-4",
			"origin-top transition-transform ease-bubble-120"
		]}
	></div>

	<HoverZoomLetters
		text="Maksymilian Kasperowicz"
		element="h1"
		class="text-xl xs:text-2xl sm:text-3xl font-bold text-right"
	/>
	<HoverZoomLetters
		text="Full-Stack Developer"
		element="h2"
		class="text-lg xs:text-xl sm:text-2xl font-medium my-1.5 text-right"
	/>
	<HoverZoomLetters
		text="I like making stuff, ... and oreos!"
		element="h3"
		class="text-primary/75 font-medium text-sm sm:text-base"
	/>
</div>
