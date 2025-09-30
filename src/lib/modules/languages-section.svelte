<script lang="ts">
	import { DELAY_LOCAL } from "$utils/delays";
	import PopIn from "$common/effects/pop-in.svelte";
	import Section from "$common/section.svelte";
	import SkillBadge from "$common/skill-badge.svelte";
	import { SectionId } from "$utils/constants";

	let isVisible = $state(false);
	const LANGUAGES: { label: string; href: string }[] = [
		{ label: "Polish", href: "https://wikipedia.org/wiki/Polish_language" },
		{ label: "English", href: "https://wikipedia.org/wiki/English_language" }
	];
</script>

<Section
	id={SectionId.Languages}
	ariaLabel="Languages I speak"
	{isVisible}
	onVisible={() => (isVisible = true)}
>
	<ol class="flex flex-wrap gap-2">
		{#each LANGUAGES as item, idx}
			<PopIn element="li" {isVisible} animDelay={[DELAY_LOCAL, 75, idx * 50]}>
				<SkillBadge label={item.label} href={item.href} isIdxEven={idx % 2 === 0} />
			</PopIn>
		{/each}
	</ol>
</Section>
