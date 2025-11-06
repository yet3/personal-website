<script lang="ts">
	import { SectionId } from "$utils/constants";
	import Section from "$common/section.svelte";
</script>

<Section id={SectionId.About} ariaLabel="About me" class="overflow-hidden">
	<div class="mt-1">
		I'm Maksymilian Kasperowicz, a full-stack developer from Poland. I have a passion for building
		highly interactive applications, whether they're useful tools or just fun projects.
	</div>
	<div class="mt-2">
		Recently, I’ve been expanding my horizons with Go and Zig, enjoying recreational programming.
	</div>
	<div class="mt-2">
		Outside of programming, I love reading sci-fi, dystopian, and fantasy genres. I enjoy both
		coffee and tea (without milk of course).
	</div>
</Section>
