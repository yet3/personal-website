<script lang="ts">
	import { type ISkillKeys, SKILLS } from "$utils/skills";
	import type { IProject } from "$types/projects.types";
	import CvSkill from "./cv-skill.svelte";
	import CvOpenIcon from "./icons/cv-open-icon.svelte";

	interface IProps {
		data: IProject;
	}

	const { data }: IProps = $props();

	const skillsData = data.skills.map((key) => {
		return SKILLS[key as ISkillKeys];
	});
</script>

<li>
	<h2 class="text-[17px]">
		<a
			href={data.appHref || data.repoHref}
			class="flex items-center"
			rel="noopener noreferrer"
			target="_blank"
		>
			<span>
				{data.title}
			</span>
			<CvOpenIcon class="ml-1.5" />
		</a>
	</h2>
	<div class="text-[14px] [&>*]:text-justify mt-0.5">
		{@html data.html}
	</div>

	<ol class="flex flex-wrap gap-1.5 mt-1">
		{#each skillsData as skill}
			<CvSkill label={skill.label} class="!text-[11px]" />
		{/each}
	</ol>
</li>
