<script lang="ts">
	import { onvisible } from "$utils/elements-visibility.svelte";
	import Intro from "./intro.svelte";
	import Links from "./links.svelte";
	import Nav from "./nav.svelte";

	let isVisible = $state(false);
</script>

<header class="w-full relative" use:onvisible={() => (isVisible = true)}>
	<div
		class="sticky h-screen pt-16 pb-8 top-0 left-0 grid grid-rows-[auto_1fr_auto] max-sm:pr-2 max-lg:pr-6 lg:justify-center"
	>
		<Intro {isVisible} />
		<Nav {isVisible} />
    <Links {isVisible} />
	</div>
</header>
