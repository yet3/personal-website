<script lang="ts">
	import { DELAY_PAGE, animdelay } from "$utils/delays";
	import HoverZoomLetters from "$common/effects/hover-zoom-letters.svelte";
	import PopIn from "$common/effects/pop-in.svelte";

	interface IProps {
		isVisible: boolean;
	}
	const { isVisible }: IProps = $props();
</script>

<div
	class="grid grid-cols-[1fr_auto] justify-center text-right relative gap-x-3 sm:gap-x-4"
>
	<div
		use:animdelay={DELAY_PAGE}
		class={[
			"w-1 h-full bg-accent rounded-full col-start-2 row-span-4",
			"origin-top transition-transform ease-bubble-120",
			isVisible ? "scale-y-100" : "scale-y-0"
		]}
	></div>

	<PopIn
		element="h1"
		class="text-2xl sm:text-3xl font-bold my-1"
		animDelay={[DELAY_PAGE, 25]}
		{isVisible}
	>
		<HoverZoomLetters text="Maksymilian Kasperowicz" />
	</PopIn>
	<PopIn element="h2" class="text-lg sm:text-xl font-medium mb-2" animDelay={[DELAY_PAGE, 75]} {isVisible}>
		<HoverZoomLetters text="full-stack developer" />
	</PopIn>
	<PopIn
		element="h3"
		class="text-primary/75 font-medium mb-1 text-sm sm:text-base"
		animDelay={[DELAY_PAGE, 150]}
		{isVisible}
	>
		<HoverZoomLetters text="I like making stuff, ... and oreos!" />
	</PopIn>
</div>
