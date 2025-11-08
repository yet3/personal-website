<script lang="ts">
	const ITEMS: string[][] = [
		["Made with", "SvelteKit", "https://svelte.dev/docs/kit/introduction"],
		["Styled with", "TailwindCSS", "https://tailwindcss.com/"],
		["Deployed on", "Vercel", "https://vercel.com/"],
		["Font used", "Tamsyn10x20", "http://www.fial.com/~scott/tamsyn-font/"]
	];
</script>

<p
	class="relative text-sm sm:text-base text-center mb-4 mx-auto px-2 md:px-24 flex flex-wrap justify-center"
>
	{#each ITEMS as [text, link, href], idx}
		<a
			{href}
			rel="external noopener noreferrer"
			target="_blank"
			class="whitespace-pre inline-flex hover:scale-word ease-bubble-200 hover:-translate-word transition-transform"
			>{text} <span class="underline decoration-accent">{link}</span>{#if idx < ITEMS.length - 1}
				{", "}
			{/if}
		</a>
	{/each}
</p>
