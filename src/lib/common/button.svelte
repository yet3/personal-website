<script lang="ts">
	import { animdelay } from "$utils/delays";
	import type { Snippet } from "svelte";
	import type { ClassValue } from "svelte/elements";
	import type { IDelay } from "$types/anims.types";

	interface IProps {
		ariaLabel?: string;
		class?: ClassValue;
		children: Snippet;
		animDelay?: IDelay;

		onClick?: () => void;
		href?: string;
		isHrefExternal?: boolean;
	}

	const {
		children,
		class: className,
		ariaLabel,
		animDelay,
		href,
		onClick,
    isHrefExternal
	}: IProps = $props();
</script>

{#if href}
	<a
		{href}
		rel={[isHrefExternal && "external" , "noopener","noreferrer"].filter(el => el).join(" ")}
		target="_blank"
		class={[className, "btn-base btn-md btn-primary"]}
		aria-label={ariaLabel}
		use:animdelay={animDelay}
		onclick={onClick}
	>
		{@render children?.()}
	</a>
{:else}
	<button
		type="button"
		class={[className, "btn-base btn-md btn-primary"]}
		aria-label={ariaLabel}
		use:animdelay={animDelay}
		onclick={onClick}
	>
		{@render children?.()}
	</button>
{/if}
