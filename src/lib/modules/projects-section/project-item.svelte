<script lang="ts">
	import type { IProject } from "$types/projects.types";
	import ProjectItemCard from "./project-item-card.svelte";
	import ProjectItemPreview from "./project-item-preview.svelte";

	interface IProps {
		data: IProject;
	}

	const { data }: IProps = $props();
</script>

<li class="relative">
	<ProjectItemPreview {data} />
	<ProjectItemCard {data} />
</li>
