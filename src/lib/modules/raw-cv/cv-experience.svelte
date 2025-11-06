<script lang="ts">
	import type { IExperience } from "$types/experience.types";

	interface IProps {
		data: IExperience;
	}

	const { data }: IProps = $props();
</script>

<li>
	<h2 class="text-[15px] font-medium">
		<span>
			{data.position}
		</span>
		<span class="text-accent">{data.isFreelance ? "for" : "at"}</span>
		<span>{data.at}</span>
	</h2>
	<h3 class="text-[15px] font-medium text-primary/60">{data.workMode}, {data.location}</h3>
	<ol class="cv-body text-[12.5px]">
		{#each data.contentBlocks as block}
			<li>{@html block}</li>
		{/each}
	</ol>
</li>

<style>
	:global {
		.cv-body {
			li {
				position: relative;
				--size: 6px;
				padding-left: calc(var(--size) + 6px);
				&::before {
					content: "";
					position: absolute;
					top: 8px;
					left: 0px;
					width: var(--size);
					height: var(--size);
					border-radius: 100%;
					background-color: var(--color-accent);
				}
			}
		}
	}
</style>
