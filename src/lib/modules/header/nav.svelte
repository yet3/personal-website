<script lang="ts">
	import { SECTIONS_TITLES, SectionId } from "$utils/constants";
	import { DELAY_PAGE, animdelay } from "$utils/delays";
	import { smoothScrollToEl } from "$utils/smooth-scrool";
	import { throttle } from "$utils/throttle";
	import { onMount } from "svelte";
	import PopIn from "$common/effects/pop-in.svelte";

	interface IProps {
		isVisible: boolean;
	}

	const { isVisible }: IProps = $props();

	const items = Object.keys(SECTIONS_TITLES).map((key) => ({
		id: key,
		label: SECTIONS_TITLES[key as SectionId]
	}));

	let blockAutoDetection = $state(false);
	let isMobile = $state(false);
	let currentSection = $state<SectionId | null>(
		(() => {
			if (typeof window === "undefined") {
				return null;
			}
			return window.scrollY === 0 ? SectionId.About : null;
		})()
	);

	onMount(() => {
		const handleResize = () => {
			isMobile = window.innerWidth < 1024;
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});

	$effect(() => {
		if (blockAutoDetection || isMobile) return;

		const targetY = window.innerHeight * 0.2;
		const sections = [...document.querySelectorAll(".main-section")];
		const onScroll = throttle(() => {
			let minDist = Number.POSITIVE_INFINITY;
			let finalId: string | null = null;

			for (const el of sections) {
				const rect = el.getBoundingClientRect();
				const distance = Math.abs(rect.y + rect.height * 0.3 - targetY);
				if (distance < minDist) {
					minDist = distance;
					finalId = el.id;
				}
			}

			currentSection = finalId as SectionId;
		}, 100);

		document.addEventListener("scroll", onScroll);
		return () => {
			document.removeEventListener("scroll", onScroll);
		};
	});

	let cancelScroll: () => void = () => void 0;
	const handleScrollToSection = (e: MouseEvent, id: SectionId) => {
		cancelScroll();

		e.preventDefault();
		const el = document.querySelector(`#${id}`);
		if (!(el instanceof HTMLElement)) return;
		blockAutoDetection = true;
		currentSection = el.id as SectionId;
		cancelScroll = smoothScrollToEl(el, {
			duration: 250,
			offsetY: window.innerHeight * -0.2,
			onFinish: () => (blockAutoDetection = false)
		});
	};
</script>

<nav class="mt-24 text-lg">
	<ol class="grid justify-end text-start gap-2">
		{#each items as item, idx}
			{@const isSelected = !isMobile && currentSection === item.id}
			<li class="flex items-center justify-end space-x-2 font-medium">
				<a
					href="#{item.id}"
					onclick={(e) => handleScrollToSection(e, item.id as SectionId)}
					class={[
						"flex items-center transition-[width] ease-bubble-120",
						isSelected ? "w-58" : "w-40 hover:w-46 delay-50"
					]}
				>
					<PopIn
						class={[
							"font-medium inline-flex mr-0.5 transition-colors",
							isSelected && "text-accent"
						]}
						element="span"
						animDelay={[DELAY_PAGE, 150, idx * 75]}
						{isVisible}
					>
						#
					</PopIn>
					<PopIn
						class="inline-flex"
						element="span"
						animDelay={[DELAY_PAGE, 100, idx * 75]}
						{isVisible}
					>
						{item.id}
					</PopIn>
					<div
						use:animdelay={[DELAY_PAGE, 50, idx * 50]}
						class={[
							"ml-2 w-full",
							"transition-transform ease-bubble-120 origin-right",
							isVisible ? "scale-x-100" : "scale-x-0"
						]}
					>
						<div
							class={["h-px w-full transition-colors", isSelected ? "bg-accent" : "bg-primary"]}
						></div>
					</div>
				</a>
			</li>
		{/each}
	</ol>
</nav>
