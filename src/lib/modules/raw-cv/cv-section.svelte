<script lang="ts">
	import type { Snippet } from "svelte";

	interface IProps {
		title: string;
    children: Snippet
	}

	const { title, children }: IProps = $props();
</script>

<section class="flex flex-col gap-y-1">
	<h2 class="font-medium text-[18px]">
		<span class="text-accent">#</span>
		<span>{title}</span>
	</h2>
	<div>
    {@render children()}
  </div>
</section>
