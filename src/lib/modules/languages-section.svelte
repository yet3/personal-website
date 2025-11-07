<script lang="ts">
	import Section from "$common/section.svelte";
	import SkillBadge from "$common/skill-badge.svelte";
	import { SectionId } from "$utils/constants";

	const LANGUAGES: { label: string; href: string }[] = [
		{ label: "Polish", href: "https://wikipedia.org/wiki/Polish_language" },
		{ label: "English", href: "https://wikipedia.org/wiki/English_language" }
	];
</script>

<Section id={SectionId.Languages} ariaLabel="Languages I speak">
	<ol class="flex flex-wrap gap-2">
		{#each LANGUAGES as item, idx}
			<li>
				<SkillBadge label={item.label} href={item.href} isIdxEven={idx % 2 === 0} />
			</li>
		{/each}
	</ol>
</Section>
