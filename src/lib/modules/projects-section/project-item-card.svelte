<script lang="ts">
	import { DELAY_PER_SKILL } from "$utils/delays";
	import Button from "$common/button.svelte";
	import HoverZoomLetters from "$common/effects/hover-zoom-letters.svelte";
	import PopIn from "$common/effects/pop-in.svelte";
	import GithubIcon from "$common/icons/github-icon.svelte";
	import MdBody from "$common/md-body.svelte";
	import SkillBadgeById from "$common/skill-badge-by-id.svelte";
	import type { IDelay } from "$types/anims.types";
	import type { IProject } from "$types/projects.types";

	interface IProps {
		data: IProject;
		animDelay: IDelay;
	}

	let isVisible = $state(false);
	const { data, animDelay }: IProps = $props();
</script>

<PopIn
	{isVisible}
	{animDelay}
	class="xl:absolute z-10 top-0 right-0 translate-y-[-2rem] xl:-translate-y-1/2 xl:top-1/2 xl:-right-24 w-full xl:w-128"
	onVisible={() => (isVisible = true)}
	watchLayer={"project-item"}
>
	<div
		class="hover:scale-102 hover:-translate-y-1 transition-transform bg-base-200 rounded-lg px-4 py-5 shadow-lg ease-bubble-200 border border-primary/20 delay-100"
	>
		<h3 class="flex space-x-[0.4rem] text-lg sm:text-xl">
			<HoverZoomLetters class="text-accent -mr-1" text="#" />
			{#each data.title.split(" ") as word, idx}
				<PopIn {isVisible} animDelay={[animDelay, 150, idx * 50]}>
					<HoverZoomLetters text={word} class="font-medium" />{" "}
				</PopIn>
			{/each}
		</h3>
		<MdBody body={data.html} class="mt-2 mb-4 " animDelay={[animDelay, 200]} {isVisible} />

		<ul class="flex flex-wrap gap-2">
			{#each data.skills as skillId, idx}
				<PopIn
					animDelay={[animDelay, 250, data.totalBlocks * 100, [DELAY_PER_SKILL, "*", idx]]}
					{isVisible}
					element="li"
				>
					<SkillBadgeById id={skillId} isIdxEven={idx % 2 === 0} />
				</PopIn>
			{/each}
		</ul>
		<div class="flex space-x-2 mt-4 justify-start">
			{#if data.repoHref}
				<Button class="size-9 p-0" href={data.repoHref}>
					<GithubIcon class="fill-primary-content size-5" />
				</Button>
			{/if}
			{#if data.appHref}
				<Button class="text-sm h-9" href={data.appHref}>try it out!</Button>
			{/if}
		</div>
	</div>
</PopIn>
