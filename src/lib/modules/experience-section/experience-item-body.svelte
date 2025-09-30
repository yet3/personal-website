<script lang="ts">
	import { DELAY_PER_SKILL } from "$utils/delays";
	import PopIn from "$common/effects/pop-in.svelte";
	import MdBody from "$common/md-body.svelte";
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
		<MdBody
			class="mt-2"
			body={data.html}
			isVisible={isOpen}
			animDelay={100}
			hideDelay={EXPAND_DUR}
		/>

		<ul class="flex flex-wrap gap-2 mt-4" aria-label="Project's tech">
			{#each data.skills as skillId, idx}
				<PopIn
					isVisible={isOpen}
					element="li"
					animDelay={[50, data.totalBlocks * 100, [DELAY_PER_SKILL, "*", idx]]}
					class={[!isOpen && "duration-0"]}
				>
					<SkillBadgeById id={skillId} isIdxEven={idx % 2 === 0} />
				</PopIn>
			{/each}
		</ul>
	</div>
</div>
