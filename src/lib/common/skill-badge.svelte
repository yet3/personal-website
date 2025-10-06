<script lang="ts">
	import { calcDelay } from "$utils/delays";
	import type { ClassValue } from "svelte/elements";
	import type { IDelay } from "$types/anims.types";

	export interface ISkillBadeCommonProps {
		class?: ClassValue;
		onClick?: () => void;
		isIdxEven?: boolean;
		animDelay?: IDelay;
	}

	interface IProps extends ISkillBadeCommonProps {
		label: string;
		href?: string;
		iconSrc?: string | null;
	}

	const {
		iconSrc,
		label,
		class: className,
		href,
		onClick,
		isIdxEven,
		animDelay
	}: IProps = $props();

	let isIconLoaded = $state<boolean>(false);
	const cn = $derived([
		className,
		"w-fit rounded py-1 px-2 bg-base-240 items-center",
		"hover:scale-110 transition-transform ease-bubble-200",
		"flex items-center space-x-1.5",
		"hover:rotate-[var(--r)]"
	]);

	const style = $derived<string>(
		`--r: ${isIdxEven ? 2 : -2}deg; animation-delay: ${calcDelay(animDelay)};`
	);
</script>

{#snippet item()}
	{#if iconSrc}
		<div
			class={[
				"flex size-4 [&_svg]:h-full [&_svg]:w-auto",
				!isIconLoaded && "bg-base-300 rounded-full"
			]}
		>
			<img
				class="size-4"
				src={iconSrc}
				alt="Icon"
				loading="lazy"
				decoding="async"
				fetchpriority="auto"
				width="16"
				height="16"
				onload={() => (isIconLoaded = true)}
			/>
		</div>
	{/if}
	<span class="text-xs sm:text-sm">{label}</span>
{/snippet}

{#if href}
	<a
		{href}
		onclick={onClick}
		rel="noopener noreferrer"
		target="_blank"
		class={cn}
		{style}
		aria-label="Link to {label} (opens in a new tab)"
	>
		{@render item()}
	</a>
{:else if onClick}
	<button type="button" onclick={onClick} class={cn} {style}>
		{@render item()}
	</button>
{:else}
	<div class={cn} {style}>
		{@render item()}
	</div>
{/if}
