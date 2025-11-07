<script lang="ts">
	import type { IExperience } from "$types/experience.types";
	import { smoothScrollToEl } from "$utils/smooth-scrool";
	import ExperienceItemBody from "./experience-item-body.svelte";
	import ExperienceItemHeader from "./experience-item-header.svelte";

	interface IProps {
		data: IExperience;
	}

	const { data }: IProps = $props();

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

<li class="grid grid-cols-[3px_1fr] w-full group/item" bind:this={el}>
	<div
		class={[
			isOpen ? "bg-accent" : "bg-primary",
			"size-full rounded-full origin-top-left",
			"group-hover/item:bg-accent transition-colors"
		]}
	></div>

	<div class="flex flex-col ml-2.5">
		<ExperienceItemHeader onToggleExpand={handleToggleExpand} {data} {isOpen} />
		<ExperienceItemBody {data} {isOpen} />
	</div>
</li>
