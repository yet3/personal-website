<script lang="ts">
	import { getProjects } from "$ctx/projects-ctx";
	import FooterLink from "../footer-link.svelte";
	import FooterSection from "../footer-section.svelte";

	const PROJECTS = getProjects().filter((p) => p.showInFooter);
</script>

<FooterSection label="Apps">
	<ul>
		{#each PROJECTS as proj}
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
