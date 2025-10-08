<script lang="ts">
	import { CV_PDF_URL } from "$utils/constants";

	const LINKS: string[][] = [
		["Home", "/"],
		["CV/Resume", CV_PDF_URL, "external"]
	];
</script>

<svelte:head>
	<title>404 | Maksymilian Kasperowicz</title>
</svelte:head>

<main class="w-screen h-screen flex items-center justify-center">
	<div>
		<h1 class="text-2xl sm:text-3xl">404 | Page not found</h1>

		<div class="flex flex-col items-start mt-4">
			<h2 class="text-xl">Go to:</h2>
			<ol class="text-lg flex flex-col ml-1 mt-0.5">
				{#each LINKS as [text, href, rel]}
					<li>
						<a {href} {rel}>- <span class="hover:text-accent transition-colors">{text}</span></a>
					</li>
				{/each}
			</ol>
		</div>
	</div>
</main>
