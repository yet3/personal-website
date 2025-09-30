<script lang="ts">
	import FooterApps from "./sections/footer-apps.svelte";
	import FooterContact from "./sections/footer-contact.svelte";
	import FooterLinks from "./sections/footer-links.svelte";
	import FooterSections from "./sections/footer-sections.svelte";
</script>

<footer
	class="flex flex-col bg-base-200 border-t border-t-primary/15 py-8 px-4 text-base relative border border-primary/20 rounded-lg w-[calc(100%-1rem)] mx-auto shadow-lg mb-2"
>
	<div
		class="justify-center gap-x-24 gap-y-8 grid md:grid-cols-[repeat(2,auto)] 2lg:lg:grid-cols-[repeat(4,auto)]"
	>
		<FooterSections />
		<FooterLinks />
		<FooterContact />
		<FooterApps />
	</div>
</footer>
