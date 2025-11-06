<script lang="ts">
	import ArrowDownIcon from "$common/icons/arrow-down-icon.svelte";
	import type { IExperience } from "$types/experience.types";

	interface IProps {
		onToggleExpand: () => void;
		data: IExperience;
		isOpen: boolean;
	}

	const { onToggleExpand, data, isOpen }: IProps = $props();
</script>

{#snippet text(content: string, href?: string)}
	{#if href}
		<a
			onclick={(e) => e.stopPropagation()}
			{href}
			rel="external noopener noreferrer"
			target="_blank"
			class="inline-flex hover:scale-word hover:-translate-y-word transition-transform underline decoration-accent"
		>
			{content}
		</a>
	{:else}
		{content}
	{/if}
{/snippet}

<button
	type="button"
	onclick={onToggleExpand}
	class="grid grid-cols-[1fr_auto] cursor-pointer group/header text-base"
>
	<h3 class="w-fit font-medium text-sm sm:text-base text-left">
		{@render text(data.position)}
		{@render text("-")}
		{@render text(data.at, data.website)}
	</h3>

	<div class="rounded size-6 grid place-items-center bg-base-240 items-center">
		<div
			class={[
				"text-accent transition-transform group-hover/header:scale-y-110 ease-bubble-120",
				isOpen
					? "rotate-180 -scale-x-100 group-hover/header:-scale-x-110"
					: "group-hover/header:scale-x-110"
			]}
		>
			<ArrowDownIcon />
		</div>
	</div>

	<h4 class="w-fit text-sm sm:text-base text-primary/75">
		{@render text(`${data.workMode}, `)}
		{@render text(data.location)}
	</h4>
</button>
