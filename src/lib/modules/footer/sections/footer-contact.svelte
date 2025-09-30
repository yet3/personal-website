<script lang="ts">
	import { CONTACT_EMAIL } from "$utils/constants";
	import FooterLink from "../footer-link.svelte";
	import FooterSection from "../footer-section.svelte";
</script>

<FooterSection label="Contact">
	<ul>
		<li>
			<FooterLink href="mailto:{CONTACT_EMAIL}">{CONTACT_EMAIL}</FooterLink>
		</li>
	</ul>
</FooterSection>
