<script lang="ts">
	import CvSection from "../cv-section.svelte";
	import CvSkill from "../cv-skill.svelte";

	const LANGUAGES: { label: string; href: string }[] = [
		{ label: "Polish", href: "https://wikipedia.org/wiki/Polish_language" },
		{ label: "English", href: "https://wikipedia.org/wiki/English_language" }
	];
</script>

<CvSection title="Languages">
	<ol class="flex flex-wrap gap-1.5">
		{#each LANGUAGES as lang}
			<CvSkill label={lang.label} />
		{/each}
	</ol>
</CvSection>
