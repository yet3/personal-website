<script lang="ts">
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	import Meta from "$common/meta.svelte";

	interface IProps {
		docName: string;
		fileName: string;
	}

	const { docName, fileName }: IProps = $props();

	const TITLE = `${docName} pdf redirect | Maksymilian Kasperowicz`;
	const DESC = `This page redirects to ${docName} pdf`;

	onMount(() => {
		goto(import.meta.env.DEV ? `/cv-output/${fileName}` : `/${fileName}`);
	});
</script>

<svelte:head>
	<title>{TITLE}</title>
	<Meta name="title" content={TITLE} />
	<Meta name="description" content={DESC} />
</svelte:head>

<h1 class="h-screen w-screen flex items-center justify-center text-center text-xl sm:text-3xl">
	Redirecting to {docName} pdf...
</h1>
