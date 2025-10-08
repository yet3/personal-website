<script lang="ts">
	import { SectionId } from "$utils/constants";
	import { DELAY_LOCAL } from "$utils/delays";
	import PopInSentences from "$common/effects/pop-in-sentences.svelte";
	import Section from "$common/section.svelte";
	import Greeting from "./about-greeting.svelte";

	let isVisible = $state(false);
</script>

<Section
	id={SectionId.About}
	ariaLabel="About me"
	class="overflow-hidden"
	onVisible={() => (isVisible = true)}
	noTitle
>
	<Greeting {isVisible} />

	<PopInSentences
		{isVisible}
		animDelay={[DELAY_LOCAL, 200]}
		class="mt-1 [&_span]:whitespace-pre flex-wrap"
		text="I'm Maksymilian Kasperowicz, a full-stack developer from Poland. I have a passion for building highly interactive applications, whether they're useful tools or just fun projects."
	/>
	<PopInSentences
		{isVisible}
		animDelay={[DELAY_LOCAL, 400]}
		class="mt-2 [&_span]:whitespace-pre flex-wrap"
		text="Recently, I’ve been expanding my horizons with Go and Zig, enjoying recreational programming."
	/>
	<PopInSentences
		{isVisible}
		animDelay={[DELAY_LOCAL, 600]}
		class="mt-2 [&_span]:whitespace-pre flex-wrap"
		text="Outside of programming, I love reading sci-fi, dystopian, and fantasy genres. I enjoy both coffee and tea (without milk of course)."
	/>
</Section>
