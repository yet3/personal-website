<script lang="ts">
	import { CONTACT_EMAIL, CV_PDF_URL, GITHUB_URL } from "$utils/constants";
	import { DELAY_PAGE } from "$utils/delays";
	import Button from "$common/button.svelte";
	import PopIn from "$common/effects/pop-in.svelte";
	import EmailIcon from "$common/icons/email-icon.svelte";
	import GithubIcon from "$common/icons/github-icon.svelte";
	import ParticlesSettings from "./particles-settings.svelte";

	interface IProps {
		isVisible: boolean;
	}
	const { isVisible }: IProps = $props();

	const delay = (idx: number) => [DELAY_PAGE, 200, 75 * idx];
</script>

<ul class="flex space-x-2 justify-end">
	<PopIn element="li" {isVisible} animDelay={delay(0)}>
		<ParticlesSettings />
	</PopIn>
	<PopIn element="li" {isVisible} animDelay={delay(1)}>
		<Button class="aspect-square p-2" ariaLabel="Open my github (in a new tab)" href={GITHUB_URL}>
			<GithubIcon class="fill-primary-content" />
		</Button>
	</PopIn>
	<PopIn element="li" {isVisible} animDelay={delay(2)}>
		<Button
			class="aspect-square p-2"
			ariaLabel="Open email (in your default email app)"
			href="mailto:{CONTACT_EMAIL}"
		>
			<EmailIcon class="fill-primary-content" />
		</Button>
	</PopIn>
	<PopIn element="li" {isVisible} animDelay={delay(3)}>
		<Button
			class="aspect-square p-2 font-bold tracking-wider text-primary-content"
			ariaLabel="Open my CV (in a new tab)"
			isHrefExternal
			href={CV_PDF_URL}><span class="translate-x-[1px]">CV</span></Button
		>
	</PopIn>
</ul>
