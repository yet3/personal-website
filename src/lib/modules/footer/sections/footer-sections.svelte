<script lang="ts">
	import { SECTIONS_TITLES, type SectionId } from "$utils/constants";
	import FooterLink from "../footer-link.svelte";
	import FooterSection from "../footer-section.svelte";

	const SECTIONS = Object.keys(SECTIONS_TITLES).map((key) => ({
		id: key,
		label: SECTIONS_TITLES[key as SectionId]
	}));
</script>

<FooterSection label="Sections">
	<ul>
		{#each SECTIONS as sec}
			<li>
				<FooterLink href="/#{sec.id}" asNewTab={false} isExternal={false}>
          #{sec.label}
				</FooterLink>
			</li>
		{/each}
	</ul>
</FooterSection>
