<script lang="ts">
	import type { Snippet } from "svelte";
	import { CONTACT_EMAIL, GITHUB_URL, URL } from "$utils/constants";
	import CvEmailIcon from "./icons/cv-email-icon.svelte";
	import CvGithubIcon from "./icons/cv-github-icon.svelte";
	import CvOpenIcon from "./icons/cv-open-icon.svelte";
	import CvPhoneIcon from "./icons/cv-phone-icon.svelte";
	import CvWebsiteIcon from "./icons/cv-website-icon.svelte";

	const ICONS = {
		email: CvEmailIcon,
		github: CvGithubIcon,
		website: CvWebsiteIcon,
		phone: CvPhoneIcon
	};
</script>

{#snippet item(text: string, icon: keyof typeof ICONS, href?: string)}
	<li class="flex items-center text-[13px]">
		<div class="[&>svg]:size-5 mr-1">
			{@render (ICONS[icon] as unknown as Snippet)()}
		</div>
		{#if href}
			<a {href} class="flex items-center" rel="noopener noreferrer" target="_blank">
				<span>
					{text}
				</span>
				<CvOpenIcon class="ml-1.5" />
			</a>
		{:else}
			<span>{text}</span>
		{/if}
	</li>
{/snippet}

<div class="my-4">
	<ul class="flex justify-between">
		{@render item("+48 530 663 183", "phone")}
		{@render item("maxkasperowicz.com", "website", URL)}
		{@render item(GITHUB_URL.replace("https://", ""), "github", GITHUB_URL)}
		{@render item(CONTACT_EMAIL, "email")}
	</ul>
</div>
