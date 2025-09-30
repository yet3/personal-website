<script lang="ts">
	import type { IExperience } from "$types/experience.types";

	interface IProps {
		data: IExperience;
	}

	const { data }: IProps = $props();
</script>

<li>
	<h2 class="text-[16px] font-medium">
		<span>
			{data.position}
		</span>
		<span class="text-accent">at</span>
		<span>{data.at}</span>
	</h2>
	<h3 class="text-[16px] font-medium text-primary/60">{data.workMode}, {data.location}</h3>
	<div class="cv-body text-[12.5px]">
		{@html data.html}
	</div>
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
