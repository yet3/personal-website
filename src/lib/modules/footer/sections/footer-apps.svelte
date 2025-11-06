<script lang="ts">
	import { PROJECTS } from "../../../../projects";
	import FooterLink from "../footer-link.svelte";
	import FooterSection from "../footer-section.svelte";

	const projects = Object.values(PROJECTS)
</script>

<FooterSection label="Apps">
	<ul>
		{#each projects as proj}
			{#if proj.appHref}
				<li>
					<FooterLink href={proj.appHref}>
						{proj.title}
					</FooterLink>
				</li>
			{/if}
		{/each}
	</ul>
</FooterSection>
