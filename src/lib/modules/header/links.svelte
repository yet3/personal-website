<script lang="ts">
	import Button from "$common/button.svelte";
	import EmailIcon from "$common/icons/email-icon.svelte";
	import GithubIcon from "$common/icons/github-icon.svelte";
	import { CONTACT_EMAIL, CV_PDF_URL, GITHUB_URL } from "$utils/constants";
	import type { ClassValue } from "svelte/elements";
	import ParticlesSettings from "./particles-settings.svelte";

	interface IProps {
		class?: ClassValue;
		particlesOffsetX?: number;
	}

	const { particlesOffsetX, ...props }: IProps = $props();
</script>

<ul class={["flex space-x-2 justify-end", props.class]}>
	<li>
		<ParticlesSettings offsetX={particlesOffsetX} />
	</li>
	<li>
		<Button class="size-10 p-2" ariaLabel="Open my github (in a new tab)" href={GITHUB_URL}>
			<GithubIcon class="fill-primary-content" />
		</Button>
	</li>
	<li>
		<Button
			class="size-10 p-2"
			ariaLabel="Open email (in your default email app)"
			href="mailto:{CONTACT_EMAIL}"
		>
			<EmailIcon class="fill-primary-content" />
		</Button>
	</li>
	<li>
		<Button
			class="size-10 p-2 font-bold tracking-wider text-primary-content"
			ariaLabel="Open my CV (in a new tab)"
			isHrefExternal
			href={CV_PDF_URL}><span class="translate-x-[1px]">CV</span></Button
		>
	</li>
</ul>
