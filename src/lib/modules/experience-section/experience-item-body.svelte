<script lang="ts">
	import SkillBadgeById from "$common/skill-badge-by-id.svelte";
	import type { IExperience } from "$types/experience.types";

	const EXPAND_DUR = 550;

	interface IProps {
		isOpen: boolean;
		data: IExperience;
	}

	const { isOpen, data }: IProps = $props();
</script>

<div
	class="grid overflow-hidden pl-2 pb-2"
	style:--expand-dur="{EXPAND_DUR}ms"
	style="transition: grid-template-rows {EXPAND_DUR}ms var(--ease-bubble-200); grid-template-rows: {!isOpen
		? '0fr'
		: '1fr'};"
>
	<div class="min-h-0">
		<ol class="mt-2 ml-4 list-disc text-sm sm:text-base">
			{#each data.contentBlocks as block}
				<li class="marker:text-accent">{@html block}</li>
			{/each}
		</ol>

		<ul class="flex flex-wrap gap-2 mt-4" aria-label="Project's tech">
			{#each data.skills as skillId, idx}
				<li>
					<SkillBadgeById id={skillId} isIdxEven={idx % 2 === 0} />
				</li>
			{/each}
		</ul>
	</div>
</div>
