<script lang="ts">
	import { getParticlesSettings } from "$ctx/particles-settings-ctx";
	import { makeDefaultParitclesSettings } from "$modules/particles/make-default-paritcles-settings";
	import Button from "$common/button.svelte";
	import CheryBlossomIcon from "$common/icons/chery-blossom-icon.svelte";
	import { type IParticlesSettings } from "$types/particles.types";

	let isOpen = $state(false);
	let containerEl: HTMLElement | null = null;

	const settings = getParticlesSettings();

	$effect(() => {
		if (!isOpen) return;
		const handleOutsideClick = (e: PointerEvent) => {
			if (e.target instanceof Node && !containerEl?.contains(e.target)) {
				isOpen = false;
			}
		};

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				isOpen = false;
			}
		};

		window.addEventListener("click", handleOutsideClick);
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("click", handleOutsideClick);
			window.removeEventListener("keydown", handleKeyDown);
		};
	});
</script>

{#snippet slider(
	key: keyof IParticlesSettings,
	label: string,
	min: number,
	max: number,
	step: number
)}
	<label>
		<span class="font-medium">{label}</span>
		<div class="flex space-x-2 items-center">
			<input
				type="range"
				{min}
				{max}
				{step}
				class="w-full"
				value={settings[key]}
				oninput={(e) => ((settings[key] as number) = Number(e.currentTarget.value))}
			/>
			<span class="w-12 text-center">
				{settings[key]}
			</span>
		</div>
	</label>
{/snippet}

<div class="relative text-base" bind:this={containerEl}>
	<Button
		class="size-10 p-2 font-bold tracking-wider text-primary-content"
		ariaLabel="Open my CV (in a new tab)"
		onClick={() => (isOpen = !isOpen)}
	>
		<CheryBlossomIcon />
	</Button>

	{#if isOpen}
		<aside
			class="origin-bottom absolute bottom-full -translate-y-2 left-1/2 -translate-x-1/2 bg-base-200 shadow-lg border border-primary/20 rounded-lg text-base-content p-3 w-64 flex flex-col"
		>
			<h3 class="font-medium text-base-content text-center mb-3 text-lg">
				<span class="text-accent mr-0.5">#</span>particles
			</h3>

			<div class="mx-auto grid grid-cols-[1fr_auto_1fr] gap-1 mb-2">
				<button
					type="button"
					onclick={() => (settings.isEnabled = true)}
					class={["cursor-pointer", settings.isEnabled && "text-green-600 font-bold"]}>On</button
				>

				/
				<button
					type="button"
					onclick={() => (settings.isEnabled = false)}
					class={["cursor-pointer", !settings.isEnabled && "text-red-600 font-bold"]}>Off</button
				>
			</div>

			<div class="grid">
				{@render slider("fps", "fps", 12, 120, 1)}
				{@render slider("pixelation", "pixelation", 0, 5, 0.25)}
				{@render slider("spawnEvery", "spawn every", 0.1, 4, 0.1)}
			</div>

			<Button
				class="mt-4"
				onClick={() => {
					Object.assign(settings, makeDefaultParitclesSettings());
				}}>Reset</Button
			>
		</aside>
	{/if}
</div>
