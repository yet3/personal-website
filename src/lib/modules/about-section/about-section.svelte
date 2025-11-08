<script lang="ts">
	import Section from "$common/section.svelte";
	import { SectionId } from "$utils/constants";

	const PL_HREF = "https://en.wikipedia.org/wiki/Poland";
	const GO_HREF = "https://go.dev/";
	const ZIG_HREF = "https://ziglang.org/";
	const SDL_HREF = "https://wiki.libsdl.org/SDL3/FrontPage";
</script>

{#snippet link(text: string, href: string)}
	<a
		{href}
		rel="external noopener noreferrer"
		target="_blank"
		class="inline-flex hover:scale-word ease-bubble-200 hover:-translate-y-word transition-transform underline decoration-accent"
		>{text}
	</a>
{/snippet}

<Section id={SectionId.About} ariaLabel="About me" class="overflow-hidden">
	<p class="mt-1">
		I'm a developer from {@render link("Poland", PL_HREF)} who enjoys building highly interactive applications,
		whether they're practical tools or just fun projects. I particularly enjoy working on visual/text
		text editors. Recently, I’ve been exploring {@render link("Go", GO_HREF)} and {@render link(
			"Zig",
			ZIG_HREF
		)}, doing recreational programming and playing around with {@render link("SDL3", SDL_HREF)}.
	</p>
	<p class="mt-3">
		Previously, I’ve worked on ERP system for small local recycling/manufacturing plant,
		scheduling/management system for a dental clinic, and an editor/AI generator for
		presentations/business documents.3
	</p>
	<p class="mt-3">
		Outside of programming, I love reading sci-fi, dystopian, and fantasy books. I'm always
		listening to something I also enjoy both coffee and tea (without milk).
	</p>
</Section>
