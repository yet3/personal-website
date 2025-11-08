<script lang="ts">
	import Button from "$common/button.svelte";
	import HoverZoomLetters from "$common/effects/hover-zoom-letters.svelte";
	import GithubIcon from "$common/icons/github-icon.svelte";
	import SkillBadgeById from "$common/skill-badge-by-id.svelte";
	import type { IProject } from "$types/projects.types";
	import type { ClassValue } from "svelte/elements";

	interface IProps {
		overwriteClass?: ClassValue;
		data: IProject;
	}

	const { data, overwriteClass }: IProps = $props();
</script>

<div
	class={[
		!overwriteClass &&
			"xl:absolute z-10 top-0 right-0 -translate-y-8 xl:-translate-y-1/2 xl:top-1/2 xl:-right-24 w-full xl:w-128",
		overwriteClass
	]}
>
	<div
		class="hover:scale-102 hover:-translate-y-1 transition-transform bg-base-200 rounded-lg px-4 py-5 shadow-lg ease-bubble-200 border border-primary/20 delay-100"
	>
		<h3 class="flex space-x-[0.4rem] text-base xs:text-lg sm:text-xl">
			<HoverZoomLetters class="text-accent -mr-1" text="#" />
			{#each data.title.split(" ") as word}
				<HoverZoomLetters text={word} class="font-medium" />{" "}
			{/each}
		</h3>

		<div class="mt-2 mb-4 text-sm xs:text-base">
			{@html data.contentBlocks}
		</div>

		<ul class="flex flex-wrap gap-2">
			{#each data.skills as skillId, idx}
				<li>
					<SkillBadgeById id={skillId} isIdxEven={idx % 2 === 0} />
				</li>
			{/each}
		</ul>
		<div class="flex space-x-2 mt-4 justify-start">
			{#if data.repoHref}
				<Button
					class="size-9 p-0"
					href={data.repoHref}
					ariaLabel="Open project's github repo (opens in a new tab)"
				>
					<GithubIcon class="fill-primary-content size-5" />
				</Button>
			{/if}
			{#if data.appHref}
				<Button
					class="text-sm h-9"
					href={data.appHref}
					ariaLabel="Try the app out (opens in a new tab)">Try it out!</Button
				>
			{/if}
		</div>
	</div>
</div>
