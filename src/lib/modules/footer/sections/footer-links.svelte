<script lang="ts">
	import { CV_PDF_URL, GITHUB_URL } from "$utils/constants";
	import FooterLink from "../footer-link.svelte";
	import FooterSection from "../footer-section.svelte";

	const LINKS: [string, string][] = [
		["CV/Resume", CV_PDF_URL],
		["Github", GITHUB_URL]
	];
</script>

<FooterSection label="Links">
	<ul>
		{#each LINKS as [label, href]}
			<li>
				<FooterLink {href}>
					{label}
				</FooterLink>
			</li>
		{/each}
	</ul>
</FooterSection>
