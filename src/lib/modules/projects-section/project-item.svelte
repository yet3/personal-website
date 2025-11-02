<script lang="ts">
	import { SectionId } from "$utils/constants";
	import { DELAY_IN_ORDER, DELAY_LOCAL } from "$utils/delays";
	import { onvisible, requiredvis, watchlayer } from "$utils/elements-visibility.svelte";
	import type { IDelay } from "$types/anims.types";
	import type { IProject } from "$types/projects.types";
	import ProjectItemCard from "./project-item-card.svelte";
	import ProjectItemPreview from "./project-item-preview.svelte";

	interface IProps {
		data: IProject;
	}

	const { data }: IProps = $props();

	let isProjectVisible = $state(false);
	const DELAY: IDelay = [DELAY_LOCAL, 100, [75, "*", DELAY_IN_ORDER]];
</script>

<li
	class="relative"
	use:onvisible={() => (isProjectVisible = true)}
	use:watchlayer={"project-item"}
	use:requiredvis={SectionId.Projects}
>
	<ProjectItemPreview {data} isVisible={isProjectVisible} animDelay={DELAY} />
	<ProjectItemCard
		{data}
		setIsProjectVisible={(val) => (isProjectVisible = val)}
		animDelay={DELAY}
	/>
</li>
