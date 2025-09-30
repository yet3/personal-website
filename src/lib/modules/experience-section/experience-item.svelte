<script lang="ts">
	import { DELAY_IN_ORDER, DELAY_LOCAL } from "$utils/delays";
	import { onvisible, watchlayer } from "$utils/elements-visibility.svelte";
	import { smoothScrollToEl } from "$utils/smooth-scrool";
	import PopIn from "$common/effects/pop-in.svelte";
	import type { IExperience } from "$types/experience.types";
	import ExperienceItemBody from "./experience-item-body.svelte";
	import ExperienceItemHeader from "./experience-item-header.svelte";

	interface IProps {
		data: IExperience;
		makeSectionVisible: () => void;
	}

	const { data, makeSectionVisible }: IProps = $props();
	let isVisible = $state(false);

	let isOpen = $state(false);
	let el: HTMLElement | null;

	const handleToggleExpand = () => {
		if (!isOpen && el) {
			smoothScrollToEl(el, {
				duration: 250,
				offsetY: window.innerHeight * -0.2
			});
		}
		isOpen = !isOpen;
	};
</script>

<li
	class="grid grid-cols-[3px_1fr] w-full group/item"
	use:onvisible={() => {
		isVisible = true;
		makeSectionVisible();
	}}
	use:watchlayer={"experience-item"}
	bind:this={el}
>
	<PopIn {isVisible} animDelay={[DELAY_LOCAL, 100, [75, "*", DELAY_IN_ORDER]]}>
		<div
			class={[
				isOpen ? "bg-accent" : "bg-primary",
				"size-full rounded-full origin-top-left",
				"group-hover/item:bg-accent transition-colors"
			]}
		></div>
	</PopIn>

	<div class="flex flex-col ml-2.5">
		<ExperienceItemHeader onToggleExpand={handleToggleExpand} {data} {isVisible} {isOpen} />
		<ExperienceItemBody {data} {isOpen} />
	</div>
</li>
