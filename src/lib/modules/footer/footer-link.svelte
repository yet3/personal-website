<script lang="ts">
	import type { Snippet } from "svelte";

	interface IProps {
		href: string;
		children: Snippet;
	}

	const { children, href }: IProps = $props();
</script>

<a
	{href}
	rel="external noopener noreferrer"
	target="_blank"
	class="hover:text-accent transition-colors break-all"
>
	{@render children()}
</a>
