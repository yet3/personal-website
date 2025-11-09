<script lang="ts">
	import type { Snippet } from "svelte";

	interface IProps {
		href: string;
		children: Snippet;
		asNewTab?: boolean;
		isExternal?: boolean;
	}

	const { children, href, asNewTab = true, isExternal = true }: IProps = $props();
</script>

<a
	{href}
	rel={[isExternal ? "external" : undefined, "noopener", "noreferrer"].filter((e) => e).join(" ")}
	target={asNewTab ? "_blank" : undefined}
	class="hover:text-accent transition-colors break-all"
>
	{@render children()}
</a>
