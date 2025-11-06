<script lang="ts">
	import Intro from "./intro.svelte";
	import Links from "./links.svelte";
	import Nav from "./nav.svelte";
</script>

<header class="w-full relative">
	<div
		class="sticky h-screen pt-16 pb-8 top-0 left-0 grid grid-rows-[auto_1fr_auto] max-sm:pr-2 max-lg:pr-6 lg:justify-center"
	>
		<Intro />
		<Nav />
		<Links />
	</div>
</header>
