<script lang="ts">
	import type { Snippet } from "svelte";

	interface IProps {
		label: string;
		children: Snippet;
	}

	const { children, label }: IProps = $props();
</script>

<section>
	<h3 class="font-medium text-primary/60">{label}</h3>
	{@render children()}
</section>
